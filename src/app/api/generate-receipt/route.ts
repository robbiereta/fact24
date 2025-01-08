import { NextResponse } from 'next/server';
import ReciboMaker from '../../libComponents/ReciboMaker';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Handle single receipt generation
    if (body.ventas) {
      const receipt = ReciboMaker(body.ventas);
      return NextResponse.json({ receipt }, { status: 200 });
    }
    
    // Handle cash register closing
    if (body.receiptIds) {
      const { receiptIds, startDate, endDate } = body;
      
      // Get all selected receipts
      const receipts = await prisma.receipt.findMany({
        where: {
          id: {
            in: receiptIds
          },
          date: {
            gte: new Date(startDate),
            lte: new Date(endDate)
          }
        },
        include: {
          employee: true
        }
      });

      // Calculate totals
      const total = receipts.reduce((sum, receipt) => sum + receipt.amount, 0);
      
      // Generate summary
      const summary = {
        total,
        count: receipts.length,
        startDate,
        endDate,
        receipts: receipts.map(receipt => ({
          id: receipt.id,
          employeeName: receipt.employee.nombreCompleto,
          amount: receipt.amount,
          date: receipt.date,
          status: receipt.status
        }))
      };

      return NextResponse.json(summary, { status: 200 });
    }

    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    );
  } catch (error) {
    console.error('Error generating receipt or cash closing:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');

    if (!startDate || !endDate) {
      return NextResponse.json(
        { error: 'Start date and end date are required' },
        { status: 400 }
      );
    }

    const receipts = await prisma.receipt.findMany({
      where: {
        date: {
          gte: new Date(startDate),
          lte: new Date(endDate)
        }
      },
      include: {
        employee: true
      },
      orderBy: {
        date: 'desc'
      }
    });

    const formattedReceipts = receipts.map(receipt => ({
      id: receipt.id,
      employeeName: receipt.employee.nombreCompleto,
      amount: receipt.amount,
      date: receipt.date,
      status: receipt.status
    }));

    return NextResponse.json(formattedReceipts, { status: 200 });
  } catch (error) {
    console.error('Error fetching receipts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch receipts' },
      { status: 500 }
    );
  }
}
