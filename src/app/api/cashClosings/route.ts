import { NextResponse } from 'next/server';
import CashClosing from '@/app/models/cashClosing.model';
import connectDB from '@/app/config/db';

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
    await connectDB();
    const data: CreateCashClosingData = await request.json();

    const newCashClosing = await CashClosing.create({
      date: new Date(data.date),
      totalAmount: data.totalAmount,
      receiptCount: data.receiptCount,
      employeeSummary: data.employeeSummary,
      notes: data.notes
    });

    return NextResponse.json(newCashClosing);
  } catch (error: unknown) {
    console.error('Error al crear el corte de caja:', error);
    
    if (error instanceof Error) {
      if ((error as any).code === 11000) {
        return NextResponse.json(
          { error: 'Ya existe un corte de caja para esta fecha' },
          { status: 400 }
        );
      }
    }
    
    return NextResponse.json(
      { error: 'Error al crear el corte de caja' },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const query: GetCashClosingsQuery = {
      startDate: searchParams.get('startDate') || undefined,
      endDate: searchParams.get('endDate') || undefined
    };

    const where: any = {};

    if (query.startDate || query.endDate) {
      where.date = {};
      if (query.startDate) {
        where.date.$gte = new Date(query.startDate);
      }
      if (query.endDate) {
        where.date.$lte = new Date(query.endDate + 'T23:59:59');
      }
    }

    const cashClosings = await CashClosing.find(where)
      .sort({ date: -1 });

    return NextResponse.json(cashClosings);
  } catch (error: unknown) {
    console.error('Error al obtener cortes de caja:', error);
    return NextResponse.json(
      { error: 'Error al obtener cortes de caja' },
      { status: 500 }
    );
  }
}
