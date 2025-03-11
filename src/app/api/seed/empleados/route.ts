import { NextResponse } from 'next/server';
import Empleado from '@/app/models/empleado.model';
import connectDB from '@/app/config/db';

const empleadosEjemplo = [
  {
    nombreCompleto: "Juan Pérez García",
    rfc: "PEGJ850315ABC",
    curp: "PEGJ850315HDFXRN01",
    numeroSeguridadSocial: "12345678901",
    codigoPostal: "44100",
    fechaIngreso: new Date("2023-01-15"),
    regimenContratacion: "Sueldos y Salarios",
    tipoContrato: "Tiempo Indeterminado",
    tipoJornada: "Diurna",
    salarioBaseCotizacion: 350.00,
    salarioDiarioIntegrado: 380.00,
    periodicidadPago: "Quincenal",
    riesgoPuesto: "1",
    departamento: "Ventas",
    puesto: "Vendedor",
    banco: "BBVA",
    cuentaBancaria: "1234567890",
    correoElectronico: "juan.perez@ejemplo.com",
    telefono: "3331234567"
  },
  {
    nombreCompleto: "María Rodríguez López",
    rfc: "ROLM880620XYZ",
    curp: "ROLM880620MDFXRN02",
    numeroSeguridadSocial: "98765432109",
    codigoPostal: "44130",
    fechaIngreso: new Date("2023-02-01"),
    regimenContratacion: "Sueldos y Salarios",
    tipoContrato: "Tiempo Indeterminado",
    tipoJornada: "Diurna",
    salarioBaseCotizacion: 400.00,
    salarioDiarioIntegrado: 430.00,
    periodicidadPago: "Quincenal",
    riesgoPuesto: "1",
    departamento: "Administración",
    puesto: "Asistente Administrativo",
    banco: "Santander",
    cuentaBancaria: "0987654321",
    correoElectronico: "maria.rodriguez@ejemplo.com",
    telefono: "3339876543"
  },
  {
    nombreCompleto: "Carlos Sánchez Martínez",
    rfc: "SAMC900830DEF",
    curp: "SAMC900830HDFXRN03",
    numeroSeguridadSocial: "45678901234",
    codigoPostal: "44150",
    fechaIngreso: new Date("2023-03-01"),
    regimenContratacion: "Sueldos y Salarios",
    tipoContrato: "Tiempo Indeterminado",
    tipoJornada: "Diurna",
    salarioBaseCotizacion: 450.00,
    salarioDiarioIntegrado: 480.00,
    periodicidadPago: "Quincenal",
    riesgoPuesto: "1",
    departamento: "TI",
    puesto: "Desarrollador",
    banco: "Banorte",
    cuentaBancaria: "5678901234",
    correoElectronico: "carlos.sanchez@ejemplo.com",
    telefono: "3335678901"
  }
];

export async function GET() {
  try {
    await connectDB();
    
    // Limpiar la colección de empleados existente
    await Empleado.deleteMany({});
    
    // Insertar los empleados de ejemplo
    const empleadosCreados = await Empleado.create(empleadosEjemplo);
    
    return NextResponse.json({
      message: 'Empleados de ejemplo creados exitosamente',
      count: empleadosCreados.length,
      empleados: empleadosCreados
    });
  } catch (error) {
    console.error('Error al crear empleados de ejemplo:', error);
    return NextResponse.json(
      { error: 'Error al crear empleados de ejemplo' },
      { status: 500 }
    );
  }
}
