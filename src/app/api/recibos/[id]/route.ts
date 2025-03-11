import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Recibo, { IRecibo } from '@/models/Recibo';
import mongoose from 'mongoose';

interface RouteParams {
  params: { id: string }
}

export async function GET(request: Request, { params }: RouteParams) {
  try {
    await dbConnect();
    
    if (!mongoose.Types.ObjectId.isValid(params.id)) {
      return NextResponse.json({ error: 'Invalid ID format' }, { status: 400 });
    }

    const recibo: IRecibo | null = await Recibo.findById(params.id);
    if (!recibo) {
      return NextResponse.json({ error: 'Recibo not found' }, { status: 404 });
    }
    return NextResponse.json(recibo);
  } catch (error) {
    if (error instanceof mongoose.Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function PUT(request: Request, { params }: RouteParams) {
  try {
    await dbConnect();

    if (!mongoose.Types.ObjectId.isValid(params.id)) {
      return NextResponse.json({ error: 'Invalid ID format' }, { status: 400 });
    }

    const body = await request.json();
    const recibo: IRecibo | null = await Recibo.findByIdAndUpdate(
      params.id,
      body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!recibo) {
      return NextResponse.json({ error: 'Recibo not found' }, { status: 404 });
    }
    return NextResponse.json(recibo);
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    return NextResponse.json({ error: 'Error updating recibo' }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: RouteParams) {
  try {
    await dbConnect();

    if (!mongoose.Types.ObjectId.isValid(params.id)) {
      return NextResponse.json({ error: 'Invalid ID format' }, { status: 400 });
    }

    const recibo: IRecibo | null = await Recibo.findByIdAndDelete(params.id);
    if (!recibo) {
      return NextResponse.json({ error: 'Recibo not found' }, { status: 404 });
    }
    return NextResponse.json({ message: 'Recibo deleted successfully' });
  } catch (error) {
    if (error instanceof mongoose.Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: 'Error deleting recibo' }, { status: 500 });
  }
}
