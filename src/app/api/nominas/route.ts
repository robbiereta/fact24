import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    const nomina = await prisma.nomina.create({
      data: {
        employeeId: data.employeeId,
        employeeName: data.employeeName,
        totalAmount: parseFloat(data.totalAmount.toString()),
        fechaPago: data.dates.fechaPago,
        fechaInicialPago: data.dates.fechaInicialPago,
        fechaFinalPago: data.dates.fechaFinalPago,
        diasTrabajados: parseInt(data.dates.diasTrabajados),
        status: data.status,
        stampedAt: data.stampedAt ? new Date(data.stampedAt) : null,
        empleadoId: parseInt(data.employeeId),
      },
    });

    return NextResponse.json(nomina);
  } catch (error) {
    console.error('Error creating nomina:', error);
    return NextResponse.json(
      { error: 'Error al crear la nómina' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const nominas = await prisma.nomina.findMany({
      orderBy: {
        stampedAt: 'desc',
      },
      include: {
        empleado: true,
      },
    });

    return NextResponse.json(nominas);
  } catch (error) {
    console.error('Error fetching nominas:', error);
    return NextResponse.json(
      { error: 'Error al obtener las nóminas' },
      { status: 500 }
    );
  }
}
