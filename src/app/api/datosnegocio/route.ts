import { NextResponse } from 'next/server'
import DatosNegocio from '@/app/models/datosNegocio.model'
import connectDB from '@/app/config/db'

export async function GET() {
  try {
    await connectDB();
    const datosNegocio = await DatosNegocio.findOne();
    
    if (!datosNegocio) {
      return NextResponse.json(
        { error: 'No business data found' },
        { status: 404 }
      )
    }

    return NextResponse.json(datosNegocio)
  } catch (error: unknown) {
    console.error('Error fetching business data:', error)
    return NextResponse.json(
      { error: 'Error fetching business data' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();
    const data = await request.json()
    
    // Validate required fields
    const requiredFields = ['razonSocial', 'rfc', 'regimenFiscal', 'codigoPostal', 'registroPatronal', 'curp']
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `Field ${field} is required` },
          { status: 400 }
        )
      }
    }
    
    const existingData = await DatosNegocio.findOne();
    let datosNegocio;

    if (existingData) {
      datosNegocio = await DatosNegocio.findByIdAndUpdate(
        existingData._id,
        data,
        { new: true, runValidators: true }
      );
    } else {
      datosNegocio = await DatosNegocio.create(data);
    }

    return NextResponse.json(datosNegocio)
  } catch (error: unknown) {
    if (error && typeof error === 'object' && 'code' in error && error.code === 11000) {
      return NextResponse.json(
        { error: 'Duplicate value found for a unique field' },
        { status: 400 }
      )
    }
    console.error('Error saving business data:', error)
    return NextResponse.json(
      { error: 'Error saving business data' },
      { status: 500 }
    )
  }
}
