import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Crear el recibo en la base de datos
    const receipt = await prisma.receipt.create({
      data: {
        id: data.id,
        amount: data.amount,
        date: new Date(data.date),
        status: data.status,
        items: {
          create: data.items.map((item: any) => ({
            quantity: item.quantity,
            description: item.description,
            unitPrice: item.unitPrice,
            total: item.total
          }))
        }
      }
    });

    return NextResponse.json(receipt, { status: 201 });
  } catch (error) {
    console.error('Error creating receipt:', error);
    return NextResponse.json(
      { error: 'Failed to create receipt' },
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
        items: true
      },
      orderBy: {
        date: 'desc'
      }
    });

    return NextResponse.json(receipts, { status: 200 });
  } catch (error) {
    console.error('Error fetching receipts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch receipts' },
      { status: 500 }
    );
  }
}
