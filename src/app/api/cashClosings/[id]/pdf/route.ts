import { prisma } from '@/lib/prisma';
import PDFDocument from 'pdfkit-table';
import { NextResponse } from 'next/server';
import { PrismaClient, Prisma } from '@prisma/client';

type ReceiptWithEmployee = Prisma.ReceiptGetPayload<{
  include: { empleado: true };
}>;

type CashClosingWithReceipts = Prisma.CashClosingGetPayload<{
  include: {
    receipts: {
      include: {
        empleado: true;
      };
    };
  };
}>;

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const cashClosing = await prisma.cashClosing.findUnique({
      where: { id: params.id },
      include: {
        receipts: {
          include: {
            empleado: true
          }
        }
      }
    }) as CashClosingWithReceipts | null;

    if (!cashClosing) {
      return NextResponse.json(
        { error: 'Corte de caja no encontrado' },
        { status: 404 }
      );
    }

    const doc = new PDFDocument();
    const buffers: Buffer[] = [];

    doc.on('data', chunk => buffers.push(chunk));
    
    // Add content to PDF
    doc.fontSize(16)
      .text('Reporte de Corte de Caja', { align: 'center' })
      .moveDown();

    doc.fontSize(12)
      .text(`ID: ${cashClosing.id}`)
      .text(`Fecha: ${cashClosing.date.toLocaleDateString()}`)
      .text(`Total: $${cashClosing.totalAmount}`)
      .text(`Cantidad de Recibos: ${cashClosing.receiptCount}`)
      .moveDown();

    if (cashClosing.notes) {
      doc.text('Notas:', { underline: true })
        .text(cashClosing.notes)
        .moveDown();
    }

    // Add employee summary
    doc.text('Resumen por Empleado:', { underline: true });
    Object.entries(cashClosing.employeeSummary as Record<string, any>).forEach(([name, data]) => {
      doc.text(`${name}: $${(data as any).total}`);
    });
    doc.moveDown();

    // Add receipts table
    const table = {
      headers: ['ID', 'Empleado', 'Monto', 'Fecha'],
      rows: cashClosing.receipts.map((receipt: ReceiptWithEmployee) => [
        receipt.id,
        receipt.empleado.nombreCompleto,
        `$${receipt.amount}`,
        receipt.date.toLocaleDateString()
      ])
    };

    await doc.table(table, {
      prepareHeader: () => doc.font('Helvetica-Bold'),
      prepareRow: () => doc.font('Helvetica')
    });

    doc.end();

    return new Promise<NextResponse>((resolve) => {
      doc.on('end', () => {
        resolve(new NextResponse(Buffer.concat(buffers), {
          headers: {
            'Content-Type': 'application/pdf',
            'Content-Disposition': `attachment; filename="corte-${cashClosing.id}.pdf"`
          }
        }));
      });
    });
  } catch (error: any) {
    console.error('Error al generar PDF:', error);
    return NextResponse.json(
      { error: 'Error al generar PDF' },
      { status: 500 }
    );
  }
}
