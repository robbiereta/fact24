import { PrismaClient } from '@prisma/client';
const prismaClient = new PrismaClient();

async function main() {
  const empleados = [
    {
      nombreCompleto: 'Juan Carlos Pérez López',
      rfc: 'PELJ850512ABC',
      curp: 'PELJ850512HDFPXN01',
      numeroSeguridadSocial: '12345678901',
      codigoPostal: '87000',
      fechaIngreso: new Date('2023-01-15'),
      regimenContratacion: 'Sueldos y Salarios',
      tipoContrato: 'Tiempo Indeterminado',
      tipoJornada: 'Diurna',
      salarioBaseCotizacion: 350.50,
      salarioDiarioIntegrado: 380.25,
      periodicidadPago: 'Quincenal',
      riesgoPuesto: 'Clase I',
      departamento: 'Ventas',
      puesto: 'Vendedor',
      banco: 'BBVA',
      cuentaBancaria: '1234567890',
      correoElectronico: 'juan.perez@example.com',
      telefono: '8341234567'
    },
    {
      nombreCompleto: 'María Fernanda Ramírez García',
      rfc: 'RAGM900723XYZ',
      curp: 'RAGM900723MTSMRR02',
      numeroSeguridadSocial: '98765432109',
      codigoPostal: '87010',
      fechaIngreso: new Date('2023-03-01'),
      regimenContratacion: 'Sueldos y Salarios',
      tipoContrato: 'Tiempo Indeterminado',
      tipoJornada: 'Diurna',
      salarioBaseCotizacion: 400.00,
      salarioDiarioIntegrado: 432.50,
      periodicidadPago: 'Quincenal',
      riesgoPuesto: 'Clase I',
      departamento: 'Administración',
      puesto: 'Auxiliar Administrativo',
      banco: 'Santander',
      cuentaBancaria: '0987654321',
      correoElectronico: 'maria.ramirez@example.com',
      telefono: '8349876543'
    },
    {
      nombreCompleto: 'Roberto Alejandro Torres Martínez',
      rfc: 'TOMR880305DEF',
      curp: 'TOMR880305HTSRRB03',
      numeroSeguridadSocial: '45678901234',
      codigoPostal: '87020',
      fechaIngreso: new Date('2023-06-15'),
      regimenContratacion: 'Sueldos y Salarios',
      tipoContrato: 'Tiempo Determinado',
      tipoJornada: 'Mixta',
      salarioBaseCotizacion: 375.75,
      salarioDiarioIntegrado: 406.25,
      periodicidadPago: 'Quincenal',
      riesgoPuesto: 'Clase I',
      departamento: 'Almacén',
      puesto: 'Encargado de Almacén',
      banco: 'Banorte',
      cuentaBancaria: '5678901234',
      correoElectronico: 'roberto.torres@example.com',
      telefono: '8345678901'
    }
  ];

  for (const empleado of empleados) {
    await prismaClient.empleado.create({
      data: empleado
    });
  }

  console.log('Empleados de ejemplo creados exitosamente');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prismaClient.$disconnect();
  });
