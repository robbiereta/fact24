import { NextResponse } from 'next/server'
import Empleado from '@/app/models/empleado.model'
import connectDB from '@/app/config/db'

interface Params {
  params: { id: string }
}

export async function GET(request: Request, { params }: Params) {
  try {
    await connectDB();
    const empleado = await Empleado.findById(params.id);
    if (!empleado) {
      return NextResponse.json(
        { error: 'Empleado not found' },
        { status: 404 }
      )
    }
    return NextResponse.json(empleado)
  } catch (error) {
    console.error('Error fetching empleado:', error)
    return NextResponse.json(
      { error: 'Error fetching empleado' },
      { status: 500 }
    )
  }
}

export async function PUT(request: Request, { params }: Params) {
  try {
    await connectDB();
    const data = await request.json()
    const empleado = await Empleado.findByIdAndUpdate(
      params.id,
      { 
        $set: {
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
        }
      },
      { new: true, runValidators: true }
    );
    
    if (!empleado) {
      return NextResponse.json(
        { error: 'Empleado not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(empleado)
  } catch (error: any) {
    if (error.code === 11000) {
      return NextResponse.json(
        { error: 'Duplicate value found for a unique field' },
        { status: 400 }
      )
    }
    console.error('Error updating empleado:', error)
    return NextResponse.json(
      { error: 'Error updating empleado' },
      { status: 500 }
    )
  }
}

export async function DELETE(request: Request, { params }: Params) {
  try {
    await connectDB();
    const empleado = await Empleado.findByIdAndDelete(params.id);
    
    if (!empleado) {
      return NextResponse.json(
        { error: 'Empleado not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ message: 'Empleado deleted successfully' })
  } catch (error) {
    console.error('Error deleting empleado:', error)
    return NextResponse.json(
      { error: 'Error deleting empleado' },
      { status: 500 }
    )
  }
}
