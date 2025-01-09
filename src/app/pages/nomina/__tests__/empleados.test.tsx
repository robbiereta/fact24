import { describe, it, expect, jest, beforeEach } from '@jest/globals';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import NominaV1 from '../v1';

// Mock the fetch function
const mockFetch = jest.fn<typeof fetch>();
global.fetch = mockFetch;

// Define response types
interface Employee {
  id: string;
  nombreCompleto: string;
  rfc: string;
  curp: string;
  departamento: string;
  puesto: string;
  salarioBaseCotizacion: number;
  codigoPostal: string;
  numeroSeguridadSocial: string;
  fechaIngreso: string;
  tipoContrato: string;
  tipoJornada: string;
  regimenContratacion: string;
  salarioDiarioIntegrado: string;
}

interface BusinessData {
  rfc: string;
  razonSocial: string;
  regimenFiscal: string;
  registroPatronal: string;
  curp: string;
}

const mockEmployees: Employee[] = [
  {
    id: '1',
    nombreCompleto: 'Juan Pérez',
    rfc: 'PEJJ800101ABC',
    curp: 'PEJJ800101HDFXXX01',
    departamento: 'IT',
    puesto: 'Developer',
    salarioBaseCotizacion: 15000,
    codigoPostal: '12345',
    numeroSeguridadSocial: '12345678901',
    fechaIngreso: '2023-01-01',
    tipoContrato: '01',
    tipoJornada: '01',
    regimenContratacion: '02',
    salarioDiarioIntegrado: '500'
  }
];

const mockBusinessData: BusinessData = {
  rfc: 'XAXX010101000',
  razonSocial: 'Empresa Test',
  regimenFiscal: '601',
  registroPatronal: 'X1234567890',
  curp: 'TEST800101HDFXXX01'
};

describe('Employee Management', () => {
  beforeEach(() => {
    // Reset all mocks before each test
    jest.clearAllMocks();
    
    // Mock API responses
    mockFetch
      .mockImplementation((input: string | URL | Request): Promise<Response> => {
        if (input === '/api/empleados') {
          return Promise.resolve({
            ok: true,
            status: 200,
            json: () => Promise.resolve(mockEmployees)
          } as Response);
        }
        if (input === '/api/datosnegocio') {
          return Promise.resolve({
            ok: true,
            status: 200,
            json: () => Promise.resolve(mockBusinessData)
          } as Response);
        }
        return Promise.reject(new Error('Not found'));
      });
  });

  it('should load and display employees', async () => {
    render(<NominaV1 />);

    // Check loading state
    expect(screen.getByText('Cargando datos...')).toBeInTheDocument();

    // Wait for employees to load
    await waitFor(() => {
      expect(screen.getByText('Seleccionar Empleado')).toBeInTheDocument();
    });

    // Check if employee option is present
    expect(screen.getByText('Juan Pérez - Developer')).toBeInTheDocument();
  });

  it('should display employee details when selected', async () => {
    render(<NominaV1 />);

    // Wait for data to load
    await waitFor(() => {
      expect(screen.getByText('Seleccionar Empleado')).toBeInTheDocument();
    });

    // Select an employee
    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: '1' } });

    // Check if employee details are displayed
    expect(screen.getByText('RFC: PEJJ800101ABC')).toBeInTheDocument();
    expect(screen.getByText('CURP: PEJJ800101HDFXXX01')).toBeInTheDocument();
    expect(screen.getByText('Departamento: IT')).toBeInTheDocument();
    expect(screen.getByText('Puesto: Developer')).toBeInTheDocument();
    expect(screen.getByText('Salario Base: $15000')).toBeInTheDocument();
  });

  it('should generate payroll when button is clicked', async () => {
    render(<NominaV1 />);

    // Wait for data to load
    await waitFor(() => {
      expect(screen.getByText('Seleccionar Empleado')).toBeInTheDocument();
    });

    // Select an employee
    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: '1' } });

    // Click generate payroll button
    const generateButton = screen.getByText('Generar Nómina');
    fireEvent.click(generateButton);

    // Check if success message appears
    expect(screen.getByText('Nómina generada exitosamente')).toBeInTheDocument();
  });

  it('should handle API errors gracefully', async () => {
    // Mock API error
    mockFetch.mockRejectedValueOnce(new Error('API Error'));

    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    
    render(<NominaV1 />);

    // Wait for error to be logged
    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith('Error al cargar datos:', expect.any(Error));
    });

    consoleSpy.mockRestore();
  });
});
