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
    });

    if (!cashClosing) {
      return NextResponse.json(
        { error: 'Corte de caja no encontrado' },
        { status: 404 }
      );
    }

<<<<<<< HEAD
    const doc = new PDFDocument();
    const buffers: Buffer[] = [];

    doc.on('data', chunk => buffers.push(chunk));
    
    // Add content to PDF
    doc.fontSize(16)
      .text('Reporte de Corte de Caja', { align: 'center' })
      .moveDown();
=======
    return new Promise<NextResponse>((resolve, reject) => {
      try {
        const doc = new PDFDocument();
        const chunks: Uint8Array[] = [];

        doc.on('data', (chunk: Uint8Array) => chunks.push(chunk));
        doc.on('end', () => {
          const pdfData = Buffer.concat(chunks);
          resolve(new NextResponse(pdfData, {
            headers: {
              'Content-Type': 'application/pdf',
              'Content-Disposition': `attachment; filename="corte-${cashClosing.id}.pdf"`
            }
          }));
        });

        // Add content to PDF
        doc.fontSize(16)
          .text('Reporte de Corte de Caja', { align: 'center' })
          .moveDown();

        doc.fontSize(12)
          .text(`ID: ${cashClosing.id}`)
          .text(`Fecha: ${new Date(cashClosing.date).toLocaleDateString()}`)
          .text(`Total: $${cashClosing.totalAmount}`)
          .text(`Cantidad de Recibos: ${cashClosing.receiptCount}`)
          .moveDown();

        if (cashClosing.notes) {
          doc.text('Notas:', { underline: true })
            .text(cashClosing.notes)
            .moveDown();
        }

        // Add employee summary
        if (cashClosing.employeeSummary) {
          doc.text('Resumen por Empleado:', { underline: true });
          Object.entries(cashClosing.employeeSummary as Record<string, any>).forEach(([name, data]) => {
            doc.text(`${name}: $${(data as any).total}`);
          });
          doc.moveDown();
        }
>>>>>>> 6f82e5df1b808368d19314932d46c372f2d5fc8f

        // Add receipts table
        const table = {
          headers: ['ID', 'Empleado', 'Monto', 'Fecha'],
          rows: cashClosing.receipts.map((receipt: any) => [
            receipt.id,
            receipt.empleado.nombreCompleto,
            `$${receipt.amount}`,
            new Date(receipt.date).toLocaleDateString()
          ])
        };

        doc.table(table, {
          prepareHeader: () => doc.font('Helvetica-Bold'),
          prepareRow: () => doc.font('Helvetica')
        });

<<<<<<< HEAD
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
=======
        doc.end();
      } catch (error) {
        reject(error);
      }
    }).catch(error => {
      console.error('Error al generar PDF:', error);
      return NextResponse.json(
        { error: 'Error al generar PDF' },
        { status: 500 }
      );
>>>>>>> 6f82e5df1b808368d19314932d46c372f2d5fc8f
    });
  } catch (error) {
    console.error('Error al generar PDF:', error);
    return NextResponse.json(
      { error: 'Error al generar PDF' },
      { status: 500 }
    );
  }
}
