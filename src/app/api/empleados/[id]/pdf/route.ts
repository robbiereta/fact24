import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import PDFDocument from 'pdfkit'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const empleado = await prisma.empleado.findUnique({
      where: {
        id: parseInt(params.id)
      }
    })

    if (!empleado) {
      return NextResponse.json(
        { error: 'Empleado no encontrado' },
        { status: 404 }
      )
    }

    // Create a new PDF document
    const doc = new PDFDocument()
    const chunks: Buffer[] = []

    // Collect the PDF chunks
    doc.on('data', (chunk: Buffer) => chunks.push(chunk))

    // Write the PDF content
    doc.fontSize(20).text('Datos del Empleado', { align: 'center' })
    doc.moveDown()

    // Personal Information
    doc.fontSize(16).text('Información Personal')
    doc.moveDown()
    doc.fontSize(12)
    doc.text(`Nombre: ${empleado.nombreCompleto}`)
    doc.text(`RFC: ${empleado.rfc}`)
    doc.text(`CURP: ${empleado.curp}`)
    doc.text(`NSS: ${empleado.numeroSeguridadSocial}`)
    doc.text(`Código Postal: ${empleado.codigoPostal}`)
    doc.text(`Email: ${empleado.correoElectronico}`)
    doc.text(`Teléfono: ${empleado.telefono}`)
    doc.moveDown()

    // Employment Information
    doc.fontSize(16).text('Información Laboral')
    doc.moveDown()
    doc.fontSize(12)
    doc.text(`Fecha de Ingreso: ${new Date(empleado.fechaIngreso).toLocaleDateString()}`)
    doc.text(`Puesto: ${empleado.puesto}`)
    doc.text(`Departamento: ${empleado.departamento}`)
    doc.text(`Régimen: ${empleado.regimenContratacion}`)
    doc.text(`Tipo de Contrato: ${empleado.tipoContrato}`)
    doc.text(`Jornada: ${empleado.tipoJornada}`)
    doc.text(`Periodicidad de Pago: ${empleado.periodicidadPago}`)
    doc.moveDown()

    // Salary Information
    doc.fontSize(16).text('Información Salarial')
    doc.moveDown()
    doc.fontSize(12)
    doc.text(`Salario Base de Cotización: $${empleado.salarioBaseCotizacion.toFixed(2)}`)
    doc.text(`Salario Diario Integrado: $${empleado.salarioDiarioIntegrado.toFixed(2)}`)
    if (empleado.banco) {
      doc.text(`Banco: ${empleado.banco}`)
      doc.text(`Cuenta Bancaria: ${empleado.cuentaBancaria}`)
    }

    // End the document
    doc.end()

    // Wait for the PDF generation to complete
    await new Promise((resolve) => doc.on('end', resolve));

    // Convert chunks to Buffer for response
    const pdfBuffer: Buffer = Buffer.concat(chunks);
    
    return new NextResponse(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename=empleado-${empleado.nombreCompleto}.pdf`
      }
    })
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Error al generar PDF' },
      { status: 500 }
    )
  }
}
