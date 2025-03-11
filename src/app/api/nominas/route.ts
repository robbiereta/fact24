import { NextResponse } from 'next/server';
import Nomina from '@/app/models/nomina.model';
import connectDB from '@/app/config/db';

export async function POST(request: Request) {
  try {
    await connectDB();
    const data = await request.json();
    const nomina = await Nomina.create(data);
    return NextResponse.json(nomina);
  } catch (error) {
    console.error('Error creating nomina:', error);
    return NextResponse.json(
      { error: 'Error creating nomina' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();
    const nominas = await Nomina.find()
      .populate('empleadoId')
      .sort({ createdAt: -1 });
    return NextResponse.json(nominas);
  } catch (error) {
    console.error('Error fetching nominas:', error);
    return NextResponse.json(
      { error: 'Error fetching nominas' },
      { status: 500 }
    );
  }
}
