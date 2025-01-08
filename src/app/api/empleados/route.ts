import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
  try {
    const empleados = await prisma.empleado.findMany({
      orderBy: {
        nombreCompleto: 'asc'
      }
    })
    return NextResponse.json(empleados)
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Error al obtener empleados' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    const empleado = await prisma.empleado.create({
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
      { error: error.message || 'Error al crear empleado' },
      { status: 500 }
    )
  }
}
