import { NextResponse } from 'next/server'
import Empleado from '@/app/models/empleado.model'
import connectDB from '@/app/config/db'

export async function GET() {
  try {
    await connectDB();
    const empleados = await Empleado.find().sort({ createdAt: -1 });
    return NextResponse.json(empleados)
  } catch (error) {
    console.error('Error fetching empleados:', error)
    return NextResponse.json(
      { error: 'Error fetching empleados' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();
    const data = await request.json()
    const empleado = await Empleado.create(data);
    return NextResponse.json(empleado)
  } catch (error: any) {
    if (error.code === 11000) {
      return NextResponse.json(
        { error: 'Duplicate value found for a unique field' },
        { status: 400 }
      )
    }
    console.error('Error creating empleado:', error)
    return NextResponse.json(
      { error: 'Error creating empleado' },
      { status: 500 }
    )
  }
}
