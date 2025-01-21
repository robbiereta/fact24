import { NextResponse } from 'next/server';
import Receipt from '@/app/models/receipt.model';
import connectDB from '@/app/config/db';

interface GetReceiptsQuery {
  startDate?: string;
  endDate?: string;
  empleadoId?: string;
  cashClosingId?: string;
  status?: string;
}

export async function GET(request: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const query: GetReceiptsQuery = {
      startDate: searchParams.get('startDate') || undefined,
      endDate: searchParams.get('endDate') || undefined,
      empleadoId: searchParams.get('empleadoId') || undefined,
      cashClosingId: searchParams.get('cashClosingId') || undefined,
      status: searchParams.get('status') || undefined
    };

    const mongooseQuery: any = {};

    if (query.startDate && query.endDate) {
      mongooseQuery.date = {
        $gte: new Date(query.startDate),
        $lte: new Date(query.endDate)
      };
    }

    if (query.empleadoId) {
      mongooseQuery.empleadoId = query.empleadoId;
    }

    if (query.cashClosingId) {
      mongooseQuery.cashClosingId = query.cashClosingId;
    }

    if (query.status) {
      mongooseQuery.status = query.status;
    }

    const receipts = await Receipt.find(mongooseQuery)
      .populate('empleadoId')
      .sort({ date: -1 });

    return NextResponse.json(receipts);
  } catch (error) {
    console.error('Error fetching receipts:', error);
    return NextResponse.json(
      { error: 'Error fetching receipts' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();
    const data = await request.json();
    
    const newReceipt = await Receipt.create(data);

    return NextResponse.json(newReceipt);
  } catch (error) {
    console.error('Error creating receipt:', error);
    return NextResponse.json(
      { error: 'Error creating receipt' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Receipt ID is required' },
        { status: 400 }
      );
    }

    const deletedReceipt = await Receipt.findByIdAndDelete(id);

    if (!deletedReceipt) {
      return NextResponse.json(
        { error: 'Receipt not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: 'Receipt deleted successfully' });
  } catch (error) {
    console.error('Error deleting receipt:', error);
    return NextResponse.json(
      { error: 'Error deleting receipt' },
      { status: 500 }
    );
  }
}
