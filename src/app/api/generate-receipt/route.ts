import { NextResponse } from 'next/server';
import ReciboMaker from '../../libComponents/ReciboMaker';
import { prisma } from '@/lib/prisma';
import { PrismaClient, Prisma } from '@prisma/client';

interface NotaPartida {
  ImporteRealConImp: number;
}

interface GenerateReceiptData {
  ventas?: {
    notasPartidas: NotaPartida[];
    folio: string;
    empleado: string;
  };
  receiptIds?: string[];
  startDate?: string;
  endDate?: string;
}

type ReceiptWithEmployee = Prisma.ReceiptGetPayload<{
  include: { empleado: true };
}>;

interface ReceiptSummary {
  total: number;
  count: number;
  startDate: string;
  endDate: string;
  receipts: Array<{
    id: string;
    employeeName: string;
    amount: number;
    date: Date;
    status: string;
  }>;
}

export async function POST(request: Request) {
  try {
    const body: GenerateReceiptData = await request.json();
    
    // Handle single receipt generation
    if (body.ventas) {
      const { notasPartidas, folio, empleado } = body.ventas;
      const receipt = ReciboMaker(notasPartidas, folio, empleado);
      return NextResponse.json({ receipt }, { status: 200 });
    }
    
    // Handle cash register closing
    if (body.receiptIds && body.startDate && body.endDate) {
      const receipts = await prisma.receipt.findMany({
        where: {
          id: {
            in: body.receiptIds
          }
        },
        include: {
          empleado: true
        }
      }) as ReceiptWithEmployee[];

      const total = receipts.reduce((sum: number, receipt: ReceiptWithEmployee) => sum + Number(receipt.amount), 0);
      
      // Generate summary
      const summary: ReceiptSummary = {
        total,
        count: receipts.length,
        startDate: body.startDate,
        endDate: body.endDate,
        receipts: receipts.map((receipt: ReceiptWithEmployee) => ({
          id: receipt.id,
          employeeName: receipt.empleado.nombreCompleto,
          amount: Number(receipt.amount),
          date: receipt.date,
          status: receipt.status
        }))
      };

      return NextResponse.json(summary);
    }

    return NextResponse.json(
      { error: 'Datos de solicitud inválidos' },
      { status: 400 }
    );
  } catch (error: any) {
    console.error('Error al generar el recibo:', error);
    return NextResponse.json(
      { error: 'Error al generar el recibo' },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');

    if (!startDate || !endDate) {
      return NextResponse.json(
        { error: 'Start date and end date are required' },
        { status: 400 }
      );
    }

    const receipts = await prisma.receipt.findMany({
      where: {
        date: {
          gte: new Date(startDate),
          lte: new Date(endDate)
        },
        cashClosingId: null
      },
      include: {
        empleado: true
      },
      orderBy: {
        date: 'desc'
      }
    });

    const formattedReceipts = receipts.map(receipt => ({
      id: receipt.id,
      employeeName: receipt.empleado.nombreCompleto,
      amount: Number(receipt.amount),
      date: receipt.date,
      status: receipt.status
    }));

    return NextResponse.json(formattedReceipts, { status: 200 });
  } catch (error) {
    console.error('Error fetching receipts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch receipts' },
      { status: 500 }
    );
  }
}
