'use client'
import { useState, useEffect } from 'react';
import { Button, Table, Form } from 'react-bootstrap';
import FormAddEmpleado from "../../../uiComponents/formAddEmpleado";
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { regimenContratacion, tipoContrato, tipoJornada, periodicidadPago, riesgoPuesto, bancos } from '../../../utils/satCatalogs';

let elements = [
  {
    name: "Nombre_Completo",
    id: 1,
    type: "text",
    placeholder: "Nombre Completo",
  },
  {
    name: "RFC",
    id: 2,
    type: "text",
    placeholder: "RFC",
  },
  {
    name: "CURP",
    id: 3,
    type: "text",
    placeholder: "CURP",
  },
  {   
    name: "No_deSeguridadSocial",
    id: 4,      
    type: "text",
    placeholder: "No. de Seguridad Social",
  },
  {
    name: "Codigo_postal",
    id: 5,
    type: "text",
    placeholder: "Código Postal",
  },
  {
    name: "Fecha_Ingreso",
    id: 6,
    type: "date",
    placeholder: "Fecha de Ingreso",
  },
  {
    name: "Regimen_Contratacion",
    id: 7,
    type: "select",
    placeholder: "Régimen de Contratación",
    options: regimenContratacion.map(item => ({
      value: item.id,
      label: `${item.id} - ${item.descripcion}`
    }))
  },
  {
    name: "Tipo_Contrato",
    id: 8,
    type: "select",
    placeholder: "Tipo de Contrato",
    options: tipoContrato.map(item => ({
      value: item.id,
      label: `${item.id} - ${item.descripcion}`
    }))
  },
  {
    name: "Tipo_Jornada",
    id: 9,
    type: "select",
    placeholder: "Tipo de Jornada",
    options: tipoJornada.map(item => ({
      value: item.id,
      label: `${item.id} - ${item.descripcion}`
    }))
  },
  {
    name: "Salario_Base_Cotizacion",
    id: 10,
    type: "number",
    placeholder: "Salario Base de Cotización",
  },
  {
    name: "Salario_Diario_Integrado",
    id: 11,
    type: "number",
    placeholder: "Salario Diario Integrado",
  },
  {
    name: "Periodicidad_Pago",
    id: 12,
    type: "select",
    placeholder: "Periodicidad de Pago",
    options: periodicidadPago.map(item => ({
      value: item.id,
      label: `${item.id} - ${item.descripcion}`
    }))
  },
  {
    name: "Riesgo_Puesto",
    id: 13,
    type: "select",
    placeholder: "Riesgo del Puesto",
    options: riesgoPuesto.map(item => ({
      value: item.id,
      label: `${item.id} - ${item.descripcion}`
    }))
  },
  {
    name: "Departamento",
    id: 14,
    type: "text",
    placeholder: "Departamento",
  },
  {
    name: "Puesto",
    id: 15,
    type: "text",
    placeholder: "Puesto",
  },
  {
    name: "Banco",
    id: 16,
    type: "select",
    placeholder: "Banco para Depósito",
    options: bancos.map(item => ({
      value: item.id,
      label: `${item.id} - ${item.descripcion}`
    }))
  },
  {
    name: "Cuenta_Bancaria",
    id: 17,
    type: "text",
    placeholder: "Cuenta Bancaria",
  },
  {
    name: "Correo_Electronico",
    id: 18,
    type: "email",
    placeholder: "Correo Electrónico",
  },
  {
    name: "Telefono",
    id: 19,
    type: "tel",
    placeholder: "Teléfono",
  }
];

export default function Nomina() {
  const [showForm, setShowForm] = useState(false);
  const [employees, setEmployees] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('');
  const router = useRouter();

  const fetchEmployees = async () => {
    try {
      const response = await fetch('/api/empleados');
      const data = await response.json();
      setEmployees(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Error fetching employees:', error);
      setEmployees([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleEmployeeAdded = () => {
    setShowForm(false);
    fetchEmployees();
  };

  const handleExportExcel = async () => {
    try {
      const response = await fetch('/api/empleados/excel');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'empleados.xlsx';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      toast.error('Error al exportar a Excel');
    }
  };

  const filteredEmployees = employees.filter((employee: any) => {
    const matchesSearch = 
      employee.nombreCompleto.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.rfc.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.puesto.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDepartment = !departmentFilter || employee.departamento === departmentFilter;
    
    return matchesSearch && matchesDepartment;
  });

  const departments = [...new Set(employees.map((emp: any) => emp.departamento))];

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Gestión de Empleados</h2>
        <div>
          <Button 
            variant="success" 
            className="me-2"
            onClick={handleExportExcel}
          >
            Exportar a Excel
          </Button>
          <Button 
            variant={showForm ? "secondary" : "primary"} 
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? "Ver Lista de Empleados" : "Agregar Empleado"}
          </Button>
        </div>
      </div>

      {showForm ? (
        <FormAddEmpleado 
          show={showForm}
          onHide={() => setShowForm(false)}
          elements={elements} 
          recurso="empleados" 
          onSuccess={handleEmployeeAdded}
        />
      ) : (
        <div className="bg-white p-4 rounded shadow-sm">
          <div className="row mb-4">
            <div className="col-md-6">
              <Form.Control
                type="text"
                placeholder="Buscar por nombre, RFC o puesto..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <Form.Select
                value={departmentFilter}
                onChange={(e) => setDepartmentFilter(e.target.value)}
              >
                <option value="">Todos los departamentos</option>
                {departments.map((dept: string) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </Form.Select>
            </div>
          </div>

          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>RFC</th>
                <th>Puesto</th>
                <th>Departamento</th>
                <th>Fecha de Ingreso</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={6} className="text-center">Cargando...</td>
                </tr>
              ) : filteredEmployees.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center">
                    {searchTerm || departmentFilter ? 'No se encontraron resultados' : 'No hay empleados registrados'}
                  </td>
                </tr>
              ) : (
                filteredEmployees.map((employee: any) => (
                  <tr key={employee.id}>
                    <td>{employee.nombreCompleto}</td>
                    <td>{employee.rfc}</td>
                    <td>{employee.puesto}</td>
                    <td>{employee.departamento}</td>
                    <td>{new Date(employee.fechaIngreso).toLocaleDateString()}</td>
                    <td>
                      <Button 
                        variant="info" 
                        size="sm" 
                        className="me-2"
                        onClick={() => router.push(`/nomina/empleado/${employee.id}`)}
                      >
                        Ver Detalles
                      </Button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
}
