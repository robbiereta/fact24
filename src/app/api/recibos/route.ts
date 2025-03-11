import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Recibo, { IRecibo } from '@/models/Recibo';
import mongoose from 'mongoose';

export async function GET() {
  try {
    await dbConnect();
    const recibos: IRecibo[] = await Recibo.find({}).sort({ createdAt: -1 });
    return NextResponse.json(recibos);
  } catch (error) {
    if (error instanceof mongoose.Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await dbConnect();
    const body = await request.json();
    
    // Validate required fields
    const requiredFields = ['folio_venta', 'fecha', 'cliente', 'lineas_venta', 'total', 'estatus'];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    const recibo: IRecibo = await Recibo.create(body);
    return NextResponse.json(recibo, { status: 201 });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    return NextResponse.json(
      { error: 'Error creating recibo' },
      { status: 500 }
    );
  }
}
