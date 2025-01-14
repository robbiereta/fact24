import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { PrismaClient, Prisma } from '@prisma/client';

interface CreateCashClosingData {
  date: string;
  totalAmount: number;
  receiptCount: number;
  employeeSummary: Record<string, any>;
  notes?: string;
  receiptIds: string[];
}

interface GetCashClosingsQuery {
  startDate?: string;
  endDate?: string;
}

export async function POST(request: Request) {
  try {
    const data: CreateCashClosingData = await request.json();

    const newCashClosing = await prisma.cashClosing.create({
      data: {
        date: new Date(data.date),
        totalAmount: data.totalAmount,
        receiptCount: data.receiptCount,
        employeeSummary: data.employeeSummary,
        notes: data.notes,
        receipts: {
          connect: data.receiptIds.map(id => ({ id }))
        }
      },
      include: {
        receipts: {
          include: {
            empleado: true
          }
        }
      }
    });

    return NextResponse.json(newCashClosing);
  } catch (error: any) {
    console.error('Error al crear el corte de caja:', error);
    return NextResponse.json(
      { error: 'Error al crear el corte de caja' },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query: GetCashClosingsQuery = {
      startDate: searchParams.get('startDate') || undefined,
      endDate: searchParams.get('endDate') || undefined
    };

    const where: Prisma.CashClosingWhereInput = {};

    if (query.startDate || query.endDate) {
      where.date = {};
      if (query.startDate) {
        where.date.gte = new Date(query.startDate);
      }
      if (query.endDate) {
        where.date.lte = new Date(query.endDate + 'T23:59:59');
      }
    }

    const cashClosings = await prisma.cashClosing.findMany({
      where,
      include: {
        receipts: {
          include: {
            empleado: true
          }
        }
      },
      orderBy: {
        date: 'desc'
      }
    });

    return NextResponse.json(cashClosings);
  } catch (error: any) {
    console.error('Error al obtener cortes de caja:', error);
    return NextResponse.json(
      { error: 'Error al obtener cortes de caja' },
      { status: 500 }
    );
  }
}
