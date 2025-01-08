import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import PDFDocument from 'pdfkit';

export async function POST(request: Request) {
  try {
    const { receiptIds, summaryData } = await request.json();

    if (!receiptIds || !summaryData) {
      return NextResponse.json(
        { error: 'Receipt IDs and summary data are required' },
        { status: 400 }
      );
    }

    // Get receipts data
    const receipts = await prisma.receipt.findMany({
      where: {
        id: {
          in: receiptIds
        }
      },
      include: {
        employee: true
      },
      orderBy: {
        date: 'asc'
      }
    });

    // Create PDF document
    const doc = new PDFDocument();
    const chunks: Buffer[] = [];

    doc.on('data', chunk => chunks.push(chunk));

    // Add header
    doc
      .fontSize(20)
      .text('Corte de Caja', { align: 'center' })
      .moveDown();

    // Add summary information
    doc
      .fontSize(12)
      .text(`Periodo: ${new Date(summaryData.startDate).toLocaleDateString()} - ${new Date(summaryData.endDate).toLocaleDateString()}`)
      .text(`Total de Recibos: ${summaryData.count}`)
      .text(`Monto Total: $${summaryData.total.toFixed(2)}`)
      .moveDown();

    // Add table header
    doc
      .fontSize(10)
      .text('ID', 50, doc.y, { width: 80 })
      .text('Empleado', 130, doc.y - 12, { width: 150 })
      .text('Monto', 280, doc.y - 12, { width: 80 })
      .text('Fecha', 360, doc.y - 12, { width: 100 })
      .text('Estado', 460, doc.y - 12, { width: 80 });

    doc.moveDown();

    // Add line under header
    doc
      .moveTo(50, doc.y)
      .lineTo(540, doc.y)
      .stroke();

    doc.moveDown();

    // Add receipt rows
    receipts.forEach((receipt: { id: string; date: string; amount: number; employee: { nombreCompleto: string }; status: string }) => {
      const y = doc.y;
      doc
        .fontSize(9)
        .text(receipt.id, 50, y, { width: 80 })
        .text(receipt.employee.nombreCompleto, 130, y, { width: 150 })
        .text(`$${receipt.amount.toFixed(2)}`, 280, y, { width: 80 })
        .text(new Date(receipt.date).toLocaleDateString(), 360, y, { width: 100 })
        .text(receipt.status, 460, y, { width: 80 });

      doc.moveDown();
    });

    // Add total line
    doc
      .moveDown()
      .moveTo(50, doc.y)
      .lineTo(540, doc.y)
      .stroke()
      .moveDown();

    doc
      .fontSize(12)
      .text(`Total: $${summaryData.total.toFixed(2)}`, { align: 'right' });

    // Add footer with date and page number
    const bottomMargin = 50;
    doc
      .fontSize(8)
      .text(
        `Generado el ${new Date().toLocaleString()}`,
        50,
        doc.page.height - bottomMargin,
        { align: 'center' }
      );

    // Finalize PDF
    doc.end();

    // Combine chunks into a single buffer
    const pdfBuffer = Buffer.concat(chunks);

    // Return PDF as response
    return new Response(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename=corte_caja_${new Date().toISOString().split('T')[0]}.pdf`
      }
    });
  } catch (error) {
    console.error('Error generating PDF:', error);
    return NextResponse.json(
      { error: 'Failed to generate PDF' },
      { status: 500 }
    );
  }
}
