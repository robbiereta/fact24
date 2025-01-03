import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Recibo from '@/models/Recibo';

export async function GET() {
  try {
    await dbConnect();
    const recibos = await Recibo.find({}).sort({ createdAt: -1 });
    return NextResponse.json(recibos);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await dbConnect();
    const body = await request.json();
    const recibo = await Recibo.create(body);
    return NextResponse.json(recibo, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
