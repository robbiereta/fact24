'use client'
import Form from 'react-bootstrap/Form';
import { FormGroup, Button } from 'react-bootstrap';
import React from 'react';
import { toast } from 'react-toastify';

interface Employee {
  // Add properties of Employee type here
}

interface FormCreatorProps {
  show: boolean;
  onHide: () => void;
  elements?: {
    name: string;
    id: number;
    type: string;
    placeholder: string;
  }[];
  recurso?: string;
  onSuccess?: () => void;
  employeeData?: Employee;
  isEditing?: boolean;
}

const selectOptions = {
  Regimen_Contratacion: [
    { value: "02", label: "Sueldos y Salarios" },
    { value: "03", label: "Jubilados" },
    { value: "04", label: "Pensionados" },
    { value: "05", label: "Asimilados a Salarios" },
  ],
  Tipo_Contrato: [
    { value: "01", label: "Contrato de trabajo por tiempo indeterminado" },
    { value: "02", label: "Contrato de trabajo por obra determinada" },
    { value: "03", label: "Contrato de trabajo por tiempo determinado" },
    { value: "04", label: "Contrato de trabajo por temporada" },
  ],
  Tipo_Jornada: [
    { value: "01", label: "Diurna" },
    { value: "02", label: "Nocturna" },
    { value: "03", label: "Mixta" },
    { value: "04", label: "Por hora" },
    { value: "05", label: "Reducida" },
  ],
  Periodicidad_Pago: [
    { value: "01", label: "Diario" },
    { value: "02", label: "Semanal" },
    { value: "03", label: "Catorcenal" },
    { value: "04", label: "Quincenal" },
    { value: "05", label: "Mensual" },
  ],
  Riesgo_Puesto: [
    { value: "1", label: "Clase I" },
    { value: "2", label: "Clase II" },
    { value: "3", label: "Clase III" },
    { value: "4", label: "Clase IV" },
    { value: "5", label: "Clase V" },
  ],
  Banco: [
    { value: "002", label: "BANAMEX" },
    { value: "012", label: "BBVA BANCOMER" },
    { value: "014", label: "SANTANDER" },
    { value: "021", label: "HSBC" },
    { value: "036", label: "INBURSA" },
    { value: "072", label: "BANORTE" },
  ],
};

function FormAddEmpleado(props:FormCreatorProps) {
  const [validated, setValidated] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    try {
      setIsSubmitting(true);
      const formData = new FormData(form);
      const entries = Object.fromEntries(formData.entries());
      
      const response = await fetch('/api/empleados', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(entries),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Error al guardar empleado');
      }

      const data = await response.json();
      toast.success('Empleado guardado exitosamente');
      form.reset();
      setValidated(false);
      props.onSuccess?.();
    } catch (error: any) {
      toast.error(error.message || 'Error al guardar empleado');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderFormControl = (element: FormCreatorProps['elements'][0]) => {
    if (element.type === 'select') {
      const options = selectOptions[element.name as keyof typeof selectOptions] || [];
      return (
        <Form.Select
          required
          name={element.name}
          aria-label={element.placeholder}
        >
          <option value="">Seleccione {element.placeholder}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Form.Select>
      );
    }

    return (
      <Form.Control
        required
        type={element.type}
        name={element.name}
        placeholder={element.placeholder}
        className="form-control"
      />
    );
  };

  return (
    <div className="container mt-4">
      <Form noValidate validated={validated} onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-sm">
        <h2 className="mb-4 text-center">Datos del Empleado</h2>
        <div className="row">
          {props.elements?.map((element) => (
            <div key={element.id} className="col-md-6 mb-3">
              <Form.Group controlId={element.name + element.id}>
                <Form.Label>{element.placeholder}</Form.Label>
                {renderFormControl(element)}
                <Form.Control.Feedback type="invalid">
                  Este campo es requerido
                </Form.Control.Feedback>
              </Form.Group>
            </div>
          ))}
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-4">
          <Button 
            type="submit" 
            variant="primary" 
            size="lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Guardando...' : 'Guardar Empleado'}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default FormAddEmpleado;