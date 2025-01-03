import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Recibo from '@/models/Recibo';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();
    const recibo = await Recibo.findById(params.id);
    if (!recibo) {
      return NextResponse.json({ error: 'Recibo not found' }, { status: 404 });
    }
    return NextResponse.json(recibo);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();
    const body = await request.json();
    const recibo = await Recibo.findByIdAndUpdate(params.id, body, {
      new: true,
      runValidators: true,
    });
    if (!recibo) {
      return NextResponse.json({ error: 'Recibo not found' }, { status: 404 });
    }
    return NextResponse.json(recibo);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();
    const recibo = await Recibo.findByIdAndDelete(params.id);
    if (!recibo) {
      return NextResponse.json({ error: 'Recibo not found' }, { status: 404 });
    }
    return NextResponse.json({ message: 'Recibo deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
