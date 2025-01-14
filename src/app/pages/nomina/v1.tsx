'use client'
import { useState, useEffect } from 'react';
import makeNomina from "./makeNomina";
import makeNomina_Finiquito from "./makeNomina_finiquito";
import makeNomina_PrimaV from "./makeNomina_PrimaV";
import dbConnect from '@/lib/mongodb';
import Folio from '@/models/Folio';

interface Employee {
  id: string;
  nombreCompleto: string;
  rfc: string;
  curp: string;
  codigoPostal: string;
  numeroSeguridadSocial: string;
  fechaIngreso: string;
  tipoContrato: string;
  tipoJornada: string;
  regimenContratacion: string;
  departamento: string;
  puesto: string;
  riesgoPuesto: string;
  periodicidadPago: string;
  salarioBaseCotizacion: number;
  salarioDiarioIntegrado: number;
}

interface BusinessData {
  rfc: string;
  razonSocial: string;
  regimenFiscal: string;
  registroPatronal: string;
  curp: string;
}

interface PayrollDates {
  fechaPago: string;
  fechaInicialPago: string;
  fechaFinalPago: string;
  diasTrabajados: number;
}

function NominaV1() {
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  const [showPayroll, setShowPayroll] = useState(false);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [businessData, setBusinessData] = useState<BusinessData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch employees
        const empResponse = await fetch('/api/empleados');
        const empData = await empResponse.json();
        setEmployees(empData);

        // Fetch business data
        const businessResponse = await fetch('/api/datosnegocio');
        const businessData = await businessResponse.json();
        setBusinessData(businessData);
      } catch (error) {
        console.error('Error al cargar datos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const datos2: PayrollDates = {
    "fechaPago": "2024-12-21",
    "fechaInicialPago": "2024-12-23",
    "fechaFinalPago": "2025-01-13",
    "diasTrabajados": 18,
  }

  const handleEmployeeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const employeeId = e.target.value;
    const employee = employees.find(emp => emp.id === employeeId);
    setSelectedEmployee(employee || null);
    setShowPayroll(false);
  };

  const generatePayroll = () => {
    if (selectedEmployee && businessData) {
      const employeeData = {
        Folio: selectedEmployee.id,
        LugarExpedicion: selectedEmployee.codigoPostal,
        SubTotal: selectedEmployee.salarioBaseCotizacion * Number(datos2.diasTrabajados),
        Emisor: {
          Rfc: businessData.rfc,
          Nombre: businessData.razonSocial,
          RegimenFiscal: businessData.regimenFiscal,
        },
        Receptor: {
          Rfc: selectedEmployee.rfc,
          Nombre: selectedEmployee.nombreCompleto,
          DomicilioFiscalReceptor: selectedEmployee.codigoPostal,
          RegimenFiscalReceptor: "605",
          UsoCFDI: "CN01",
        },
        Conceptos: [{
          ClaveProdServ: "84111505",
          Cantidad: "1",
          ClaveUnidad: "ACT",
          Descripcion: "Pago de nómina",
          ValorUnitario: selectedEmployee.salarioBaseCotizacion.toString(),
          Importe: selectedEmployee.salarioBaseCotizacion.toString(),
          ObjetoImp: "01"
        }],
        Complemento: {
          Nomina12: {
            TotalPercepciones: selectedEmployee.salarioBaseCotizacion.toString(),
            TotalDeducciones: "0",
            TotalOtrosPagos: "0",
            Emisor: {
              RegistroPatronal: businessData.registroPatronal,
              RfcPatronOrigen: businessData.rfc,
              Curp: businessData.curp,
            },
            Receptor: {
              Curp: selectedEmployee.curp,
              NumSeguridadSocial: selectedEmployee.numeroSeguridadSocial,
              FechaInicioRelLaboral: selectedEmployee.fechaIngreso,
              TipoContrato: selectedEmployee.tipoContrato,
              TipoJornada: selectedEmployee.tipoJornada,
              TipoRegimen: selectedEmployee.regimenContratacion,
              NumEmpleado: selectedEmployee.id.toString(),
              Departamento: selectedEmployee.departamento,
              Puesto: selectedEmployee.puesto,
              RiesgoPuesto: selectedEmployee.riesgoPuesto,
              PeriodicidadPago: selectedEmployee.periodicidadPago,
              SalarioBaseCotApor: selectedEmployee.salarioBaseCotizacion.toString(),
              SalarioDiarioIntegrado: selectedEmployee.salarioDiarioIntegrado.toString(),
              ClaveEntFed: "TAM"
            }
          }
        }
      };

      makeNomina(employeeData, datos2);
      setShowPayroll(true);
    }
  };

  if (loading) {
    return (
      <div className="p-4">
        <div className="text-center">
          Cargando datos...
        </div>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Seleccionar Empleado
        </label>
        <select 
          onChange={handleEmployeeSelect}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="">Seleccione un empleado</option>
          {employees.map((emp) => (
            <option key={emp.id} value={emp.id}>
              {emp.nombreCompleto} - {emp.puesto}
            </option>
          ))}
        </select>
      </div>

      {selectedEmployee && (
        <div className="mt-4">
          <div className="bg-gray-50 p-4 rounded mb-4">
            <h3 className="text-lg font-medium mb-2">Información del Empleado</h3>
            <p><strong>RFC:</strong> {selectedEmployee.rfc}</p>
            <p><strong>CURP:</strong> {selectedEmployee.curp}</p>
            <p><strong>Departamento:</strong> {selectedEmployee.departamento}</p>
            <p><strong>Puesto:</strong> {selectedEmployee.puesto}</p>
            <p><strong>Salario Base:</strong> ${selectedEmployee.salarioBaseCotizacion}</p>
          </div>
          
          <button
            onClick={generatePayroll}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            disabled={!businessData}
          >
            Generar Nómina
          </button>
        </div>
      )}

      {showPayroll && (
        <div className="mt-4 p-4 bg-green-100 rounded">
          Nómina generada exitosamente
        </div>
      )}
    </div>
  );
}

export default NominaV1