import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

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
      { error: 'Error al obtener datos del negocio' },
      { status: 500 }
    )
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
    
    // Validar formato de RFC
    const rfcRegex = /^[A-Z&Ñ]{3,4}[0-9]{6}[A-Z0-9]{3}$/
    if (!rfcRegex.test(data.rfc)) {
      return NextResponse.json(
        { error: 'El formato del RFC no es válido' },
        { status: 400 }
      )
    }
    
    // Validar formato de CURP
    const curpRegex = /^[A-Z]{4}[0-9]{6}[HM][A-Z]{5}[0-9]{2}$/
    if (!curpRegex.test(data.curp)) {
      return NextResponse.json(
        { error: 'El formato del CURP no es válido' },
        { status: 400 }
      )
    }
    
    // Si ya existe un registro, actualizarlo
    const existingData = await prisma.datosNegocio.findFirst()
    
    if (existingData) {
      const updatedData = await prisma.datosNegocio.update({
        where: { id: existingData.id },
        data
      })
      return NextResponse.json(updatedData)
    }
    
    // Si no existe, crear uno nuevo
    const newData = await prisma.datosNegocio.create({ data })
    return NextResponse.json(newData)
  } catch (error: any) {
    console.error('Error al guardar datos del negocio:', error)
    return NextResponse.json(
      { error: 'Error al guardar datos del negocio' },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
}
