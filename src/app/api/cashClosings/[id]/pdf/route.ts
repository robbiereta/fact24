import prisma from '@/lib/prisma';
import PDFDocument from 'pdfkit-table';

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
            empleado: {
              select: {
                nombreCompleto: true
              }
            }
          }
        }
      }
    });

    if (!cashClosing) {
      return Response.json(
        { error: 'Cash closing not found' },
        { status: 404 }
      );
    }

    // Create a new PDF document
    const doc = new PDFDocument({ margin: 30, size: 'A4' });
    const chunks: Buffer[] = [];

    // Collect the PDF data
    const pdfPromise = new Promise<Buffer>((resolve, reject) => {
      doc.on('data', chunk => chunks.push(chunk));
      doc.on('end', () => resolve(Buffer.concat(chunks)));
      doc.on('error', reject);
    });

    // Header
    doc.fontSize(16).text('Corte de Caja', { align: 'center' });
    doc.moveDown();

    // Summary information
    const summaryTable = {
      title: "Información General",
      headers: ["Campo", "Valor"],
      rows: [
        ["Fecha", new Date(cashClosing.date).toLocaleDateString('es-MX')],
        ["Total", `$${cashClosing.totalAmount.toString()}`],
        ["Cantidad de Recibos", cashClosing.receiptCount.toString()],
        ["Notas", cashClosing.notes || '-']
      ]
    };

    await doc.table(summaryTable, {
      prepareHeader: () => doc.fontSize(10),
      prepareRow: () => doc.fontSize(10)
    });

    doc.moveDown();

    // Employee Summary
    const employeeSummary = cashClosing.employeeSummary as Record<string, { count: number; total: number }>;
    const employeeRows = Object.entries(employeeSummary).map(([employee, data]) => [
      employee,
      data.count.toString(),
      `$${data.total.toFixed(2)}`
    ]);

    const employeeTable = {
      title: "Resumen por Empleado",
      headers: ["Empleado", "Recibos", "Total"],
      rows: employeeRows
    };

    await doc.table(employeeTable, {
      prepareHeader: () => doc.fontSize(10),
      prepareRow: () => doc.fontSize(10)
    });

    doc.moveDown();

    // Receipts table
    const receiptRows = cashClosing.receipts.map(receipt => [
      receipt.id.slice(0, 8),
      receipt.empleado.nombreCompleto,
      new Date(receipt.date).toLocaleDateString('es-MX'),
      `$${receipt.amount.toString()}`
    ]);

    const receiptTable = {
      title: "Lista de Recibos",
      headers: ["ID", "Empleado", "Fecha", "Monto"],
      rows: receiptRows
    };

    await doc.table(receiptTable, {
      prepareHeader: () => doc.fontSize(10),
      prepareRow: () => doc.fontSize(10)
    });

    // End the document
    doc.end();

    // Wait for the PDF to be generated
    const pdfBuffer = await pdfPromise;

    // Create headers for the response
    const headers = new Headers();
    headers.set('Content-Type', 'application/pdf');
    headers.set('Content-Disposition', `attachment; filename=corte_caja_${params.id}.pdf`);
    headers.set('Content-Length', pdfBuffer.length.toString());

    // Return the PDF as a response
    return new Response(pdfBuffer, {
      status: 200,
      headers
    });
  } catch (error) {
    console.error('Error generating PDF:', error);
    return Response.json(
      { error: 'Failed to generate PDF' },
      { status: 500 }
    );
  }
}
