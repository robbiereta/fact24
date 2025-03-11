'use client'
<<<<<<< HEAD
import { useState, useEffect } from 'react';
import { prisma } from '@/lib/prisma';
=======
import { useForm } from "react-hook-form";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import FormNom from "@/app/uiComponents/formNom";
import NavScroll from "@/app/uiComponents/nav";
import NominaV1 from "./v1";
>>>>>>> 6f82e5df1b808368d19314932d46c372f2d5fc8f

interface Employee {
  id: number;
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
  diasTrabajados: string;
}

<<<<<<< HEAD
interface PayrollPreview {
  id: string;
  employeeId: string;
  employeeName: string;
  totalAmount: number;
  dates: PayrollDates;
  status: 'preview' | 'stamped';
  stampedAt?: string;
}
=======
export default  function Nomina  () {
  // Render the main container
 
 
  return (
  
      <div>
                {/* Render the form creator */}
<NominaV1/>
>>>>>>> 6f82e5df1b808368d19314932d46c372f2d5fc8f

export default function NominaPage() {
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  const [showPayroll, setShowPayroll] = useState(false);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [businessData, setBusinessData] = useState<BusinessData | null>(null);
  const [payrollDates, setPayrollDates] = useState<PayrollDates>({
    fechaPago: "",
    fechaInicialPago: "",
    fechaFinalPago: "",
    diasTrabajados: ""
  });
  const [payrollPreview, setPayrollPreview] = useState<PayrollPreview | null>(null);
  const [stampedPayrolls, setStampedPayrolls] = useState<PayrollPreview[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch employees from the database
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

  const handleEmployeeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const employeeId = e.target.value;
    const employee = employees.find(emp => emp.id === Number(employeeId));
    setSelectedEmployee(employee || null);
    setShowPayroll(false);
  };

  const handleDatesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPayrollDates(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const generatePreview = () => {
    if (selectedEmployee && businessData && isValidDates()) {
      const preview: PayrollPreview = {
        id: `PRE-${Date.now()}`,
        employeeId: selectedEmployee.id.toString(),
        employeeName: selectedEmployee.nombreCompleto,
        totalAmount: Number(selectedEmployee.salarioBaseCotizacion) * Number(payrollDates.diasTrabajados),
        dates: payrollDates,
        status: 'preview'
      };
      setPayrollPreview(preview);
      setShowPayroll(true);
    }
  };

  const stampPayroll = async () => {
    if (payrollPreview && selectedEmployee && businessData) {
      try {
        // Save payroll to database
        const response = await fetch('/api/nominas', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...payrollPreview,
            status: 'stamped',
            stampedAt: new Date().toISOString()
          }),
        });

        if (!response.ok) {
          throw new Error('Error al guardar la nómina');
        }

        const stampedPayroll: PayrollPreview = {
          ...payrollPreview,
          status: 'stamped',
          stampedAt: new Date().toISOString()
        };
        
        setStampedPayrolls(prev => [...prev, stampedPayroll]);
        setPayrollPreview(null);
        setShowPayroll(false);
      } catch (error) {
        console.error('Error al timbrar la nómina:', error);
      }
    }
  };

  const isValidDates = () => {
    return payrollDates.fechaPago && 
           payrollDates.fechaInicialPago && 
           payrollDates.fechaFinalPago && 
           payrollDates.diasTrabajados;
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
          {Array.isArray(employees) && employees.map((emp) => (
            <option key={emp.id} value={emp.id}>
              {emp.nombreCompleto} - {emp.puesto}
            </option>
          ))}
        </select>
      </div>

      {selectedEmployee && (
        <>
          <div className="mt-4">
            <div className="bg-gray-50 p-4 rounded mb-4">
              <h3 className="text-lg font-medium mb-2">Información del Empleado</h3>
              <p><strong>RFC:</strong> {selectedEmployee.rfc}</p>
              <p><strong>CURP:</strong> {selectedEmployee.curp}</p>
              <p><strong>Departamento:</strong> {selectedEmployee.departamento}</p>
              <p><strong>Puesto:</strong> {selectedEmployee.puesto}</p>
              <p><strong>Salario Base:</strong> ${selectedEmployee.salarioBaseCotizacion}</p>
            </div>

            <div className="bg-gray-50 p-4 rounded mb-4">
              <h3 className="text-lg font-medium mb-2">Datos de la Nómina</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Fecha de Pago</label>
                  <input
                    type="date"
                    name="fechaPago"
                    value={payrollDates.fechaPago}
                    onChange={handleDatesChange}
                    className="mt-1 block w-full border rounded-md shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Fecha Inicial</label>
                  <input
                    type="date"
                    name="fechaInicialPago"
                    value={payrollDates.fechaInicialPago}
                    onChange={handleDatesChange}
                    className="mt-1 block w-full border rounded-md shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Fecha Final</label>
                  <input
                    type="date"
                    name="fechaFinalPago"
                    value={payrollDates.fechaFinalPago}
                    onChange={handleDatesChange}
                    className="mt-1 block w-full border rounded-md shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Días Trabajados</label>
                  <input
                    type="number"
                    name="diasTrabajados"
                    value={payrollDates.diasTrabajados}
                    onChange={handleDatesChange}
                    className="mt-1 block w-full border rounded-md shadow-sm"
                  />
                </div>
              </div>
            </div>
            
            <button
              onClick={generatePreview}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
              disabled={!businessData || !isValidDates()}
            >
              Vista Previa
            </button>
          </div>

          {payrollPreview && (
            <div className="mt-4 bg-white p-4 rounded shadow">
              <h3 className="text-lg font-medium mb-2">Vista Previa de la Nómina</h3>
              <div className="space-y-2">
                <p><strong>Empleado:</strong> {payrollPreview.employeeName}</p>
                <p><strong>Periodo:</strong> {payrollPreview.dates.fechaInicialPago} al {payrollPreview.dates.fechaFinalPago}</p>
                <p><strong>Días Trabajados:</strong> {payrollPreview.dates.diasTrabajados}</p>
                <p><strong>Total:</strong> ${payrollPreview.totalAmount.toFixed(2)}</p>
                <button
                  onClick={stampPayroll}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  Timbrar Nómina
                </button>
              </div>
            </div>
          )}
        </>
      )}

      {stampedPayrolls.length > 0 && (
        <div className="mt-8">
          <h3 className="text-lg font-medium mb-4">Nóminas Timbradas</h3>
          <div className="bg-white shadow overflow-hidden rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Empleado</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Periodo</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha Timbrado</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {stampedPayrolls.map((payroll) => (
                  <tr key={payroll.id}>
                    <td className="px-6 py-4 whitespace-nowrap">{payroll.employeeName}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {payroll.dates.fechaInicialPago} al {payroll.dates.fechaFinalPago}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">${payroll.totalAmount.toFixed(2)}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{payroll.stampedAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}