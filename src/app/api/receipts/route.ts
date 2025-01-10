import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Crear el recibo en la base de datos
    const receipt = await prisma.receipt.create({
      data: {
        id: data.id,
        amount: data.amount,
        date: new Date(data.date),
        status: data.status,
        empleado: {
          connect: {
            id: data.empleadoId
          }
        },
        items: {
          create: data.items.map((item: any) => ({
            quantity: item.quantity,
            description: item.description,
            unitPrice: item.unitPrice,
            total: item.total
          }))
        }
      },
      include: {
        empleado: {
          select: {
            id: true,
            nombreCompleto: true
          }
        }
      }
    });

    return NextResponse.json(receipt, { status: 201 });
  } catch (error) {
    console.error('Error creating receipt:', error);
    return NextResponse.json(
      { error: 'Failed to create receipt' },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');
    const empleadoId = searchParams.get('empleadoId');

    const where: any = {};

    if (startDate || endDate) {
      where.date = {};
      if (startDate) {
        where.date.gte = new Date(startDate);
      }
      if (endDate) {
        where.date.lte = new Date(endDate + 'T23:59:59');
      }
    }

    if (empleadoId) {
      where.empleadoId = parseInt(empleadoId);
    }

    const receipts = await prisma.receipt.findMany({
      where,
      include: {
        empleado: {
          select: {
            id: true,
            nombreCompleto: true
          }
        }
      },
      orderBy: {
        date: 'desc'
      }
    });

    return NextResponse.json(receipts);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Error fetching receipts' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Receipt ID is required' },
        { status: 400 }
      );
    }

    await prisma.receipt.delete({
      where: { id }
    });

    return NextResponse.json({ message: 'Receipt deleted successfully' });
  } catch (error) {
    console.error('Error deleting receipt:', error);
    return NextResponse.json(
      { error: 'Failed to delete receipt' },
      { status: 500 }
    );
  }
}
