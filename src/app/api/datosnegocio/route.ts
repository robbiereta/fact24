import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const datosNegocio = await prisma.datosNegocio.findFirst()
    
    if (!datosNegocio) {
      return NextResponse.json({
        error: 'No se encontraron datos del negocio'
      }, { status: 404 })
    }
    
    return NextResponse.json(datosNegocio)
  } catch (error: any) {
    console.error('Error al obtener datos del negocio:', error)
    return NextResponse.json(
      { error: `Error al obtener datos del negocio: ${error.message}` },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    // Validar campos requeridos
    const requiredFields = ['razonSocial', 'rfc', 'regimenFiscal', 'codigoPostal', 'registroPatronal', 'curp']
    
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `El campo ${field} es requerido` },
          { status: 400 }
        )
      }
    }
    
    // Verificar si ya existe un registro
    const existingData = await prisma.datosNegocio.findFirst()
    
    let datosNegocio
    
    if (existingData) {
      // Actualizar registro existente
      datosNegocio = await prisma.datosNegocio.update({
        where: { id: existingData.id },
        data
      })
    } else {
      // Crear nuevo registro
      datosNegocio = await prisma.datosNegocio.create({
        data
      })
    }
    
    return NextResponse.json(datosNegocio)
  } catch (error: any) {
    console.error('Error al guardar datos del negocio:', error)
    return NextResponse.json(
      { error: `Error al guardar datos del negocio: ${error.message}` },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
}
