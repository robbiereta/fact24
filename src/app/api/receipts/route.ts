import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { PrismaClient, Prisma } from '@prisma/client';

interface GetReceiptsQuery {
  startDate?: string;
  endDate?: string;
  empleadoId?: string;
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query: GetReceiptsQuery = {
      startDate: searchParams.get('startDate') || undefined,
      endDate: searchParams.get('endDate') || undefined,
      empleadoId: searchParams.get('empleadoId') || undefined
    };

    const where: Prisma.ReceiptWhereInput = {};

    if (query.startDate || query.endDate) {
      where.date = {};
      if (query.startDate) {
        where.date.gte = new Date(query.startDate);
      }
      if (query.endDate) {
        where.date.lte = new Date(query.endDate + 'T23:59:59');
      }
    }

    if (query.empleadoId) {
      where.empleadoId = parseInt(query.empleadoId);
    }

    const receipts = await prisma.receipt.findMany({
      where,
      include: {
        empleado: true
      }
    });

    return NextResponse.json(receipts);
  } catch (error: any) {
    console.error('Error al obtener recibos:', error);
    return NextResponse.json(
      { error: 'Error al obtener recibos' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    const newReceipt = await prisma.receipt.create({
      data: {
        amount: data.amount,
        empleadoId: data.empleadoId,
        items: data.items,
      },
      include: {
        empleado: true
      }
    });

    return NextResponse.json(newReceipt);
  } catch (error: any) {
    console.error('Error al crear recibo:', error);
    return NextResponse.json(
      { error: 'Error al crear recibo' },
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
        { error: 'ID del recibo es requerido' },
        { status: 400 }
      );
    }

    const deletedReceipt = await prisma.receipt.delete({
      where: { id }
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Error al eliminar recibo:', error);
    return NextResponse.json(
      { error: 'Error al eliminar recibo' },
      { status: 500 }
    );
  }
}
