import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const empleado = await prisma.empleado.findUnique({
      where: {
        id: parseInt(params.id)
      }
    })

    if (!empleado) {
      return NextResponse.json(
        { error: 'Empleado no encontrado' },
        { status: 404 }
      )
    }

    return NextResponse.json(empleado)
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Error al obtener empleado' },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const data = await request.json()
    
    const empleado = await prisma.empleado.update({
      where: {
        id: parseInt(params.id)
      },
      data: {
        nombreCompleto: data.Nombre_Completo,
        rfc: data.RFC,
        curp: data.CURP,
        numeroSeguridadSocial: data.No_deSeguridadSocial,
        codigoPostal: data.Codigo_postal,
        fechaIngreso: new Date(data.Fecha_Ingreso),
        regimenContratacion: data.Regimen_Contratacion,
        tipoContrato: data.Tipo_Contrato,
        tipoJornada: data.Tipo_Jornada,
        salarioBaseCotizacion: parseFloat(data.Salario_Base_Cotizacion),
        salarioDiarioIntegrado: parseFloat(data.Salario_Diario_Integrado),
        periodicidadPago: data.Periodicidad_Pago,
        riesgoPuesto: data.Riesgo_Puesto,
        departamento: data.Departamento,
        puesto: data.Puesto,
        banco: data.Banco,
        cuentaBancaria: data.Cuenta_Bancaria,
        correoElectronico: data.Correo_Electronico,
        telefono: data.Telefono,
      },
    })

    return NextResponse.json(empleado)
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Error al actualizar empleado' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.empleado.delete({
      where: {
        id: parseInt(params.id)
      }
    })

    return NextResponse.json({ message: 'Empleado eliminado exitosamente' })
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Error al eliminar empleado' },
      { status: 500 }
    )
  }
}
