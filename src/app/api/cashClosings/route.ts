import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Create the cash closing and update receipts in a transaction
    const cashClosing = await prisma.$transaction(async (tx) => {
      // Create the cash closing
      const closing = await tx.cashClosing.create({
        data: {
          totalAmount: data.totalAmount,
          receiptCount: data.receiptCount,
          employeeSummary: data.employeeSummary,
          notes: data.notes,
          receipts: {
            connect: data.receiptIds.map((id: string) => ({ id }))
          }
        },
        include: {
          receipts: {
            include: {
              empleado: {
                select: {
                  id: true,
                  nombreCompleto: true
                }
              }
            }
          }
        }
      });

      return closing;
    });

    return NextResponse.json(cashClosing, { status: 201 });
  } catch (error: any) {
    console.error('Error creating cash closing:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create cash closing' },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');

    const where: any = {};

    if (startDate || endDate) {
      where.date = {};
      if (startDate) {
        where.date.gte = new Date(startDate);
      }
      if (endDate) {
        where.date.lte = new Date(endDate + 'T23:59:59');
      }
    }

    const cashClosings = await prisma.cashClosing.findMany({
      where,
      include: {
        receipts: {
          include: {
            empleado: {
              select: {
                id: true,
                nombreCompleto: true
              }
            }
          }
        }
      },
      orderBy: {
        date: 'desc'
      }
    });

    return NextResponse.json(cashClosings);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Error fetching cash closings' },
      { status: 500 }
    );
  }
}
