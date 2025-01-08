import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import ExcelJS from 'exceljs'

export async function GET() {
  try {
    const empleados = await prisma.empleado.findMany({
      orderBy: {
        nombreCompleto: 'asc'
      }
    })

    // Create a new workbook and worksheet
    const workbook = new ExcelJS.Workbook()
    const worksheet = workbook.addWorksheet('Empleados')

    // Add headers
    worksheet.columns = [
      { header: 'Nombre Completo', key: 'nombreCompleto', width: 30 },
      { header: 'RFC', key: 'rfc', width: 15 },
      { header: 'CURP', key: 'curp', width: 20 },
      { header: 'NSS', key: 'numeroSeguridadSocial', width: 15 },
      { header: 'Código Postal', key: 'codigoPostal', width: 12 },
      { header: 'Fecha de Ingreso', key: 'fechaIngreso', width: 15 },
      { header: 'Puesto', key: 'puesto', width: 20 },
      { header: 'Departamento', key: 'departamento', width: 20 },
      { header: 'Salario Base', key: 'salarioBaseCotizacion', width: 15 },
      { header: 'Salario Diario', key: 'salarioDiarioIntegrado', width: 15 },
      { header: 'Email', key: 'correoElectronico', width: 30 },
      { header: 'Teléfono', key: 'telefono', width: 15 }
    ]

    // Style the header row
    worksheet.getRow(1).font = { bold: true }
    worksheet.getRow(1).fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FF9BC2E6' }
    }

    // Add data rows
    empleados.forEach((empleado: {
      nombreCompleto: string;
      rfc: string;
      curp: string;
      numeroSeguridadSocial: string;
      codigoPostal: string;
      fechaIngreso: Date;
      puesto: string;
      departamento: string;
      salarioBaseCotizacion: number;
      salarioDiarioIntegrado: number;
      correoElectronico: string;
      telefono: string;
    }) => {
      worksheet.addRow({
        nombreCompleto: empleado.nombreCompleto,
        rfc: empleado.rfc,
        curp: empleado.curp,
        numeroSeguridadSocial: empleado.numeroSeguridadSocial,
        codigoPostal: empleado.codigoPostal,
        fechaIngreso: new Date(empleado.fechaIngreso).toLocaleDateString(),
        puesto: empleado.puesto,
        departamento: empleado.departamento,
        salarioBaseCotizacion: empleado.salarioBaseCotizacion,
        salarioDiarioIntegrado: empleado.salarioDiarioIntegrado,
        correoElectronico: empleado.correoElectronico,
        telefono: empleado.telefono
      })
    })

    // Format number columns
    worksheet.getColumn('salarioBaseCotizacion').numFmt = '"$"#,##0.00'
    worksheet.getColumn('salarioDiarioIntegrado').numFmt = '"$"#,##0.00'

    // Generate buffer
    const buffer = await workbook.xlsx.writeBuffer()

    // Return the Excel file
    return new Response(buffer, {
      headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'Content-Disposition': 'attachment; filename=empleados.xlsx'
      }
    })
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Error al generar Excel' },
      { status: 500 }
    )
  }
}
