'use client'
import { useCallback, useEffect, useState } from 'react'
import { Button, Card, Col, Row, Modal } from 'react-bootstrap'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import FormAddEmpleado from '@/app/uiComponents/formAddEmpleado'

interface Employee {
  id: number
  nombreCompleto: string
  rfc: string
  curp: string
  numeroSeguridadSocial: string
  codigoPostal: string
  fechaIngreso: string
  regimenContratacion: string
  tipoContrato: string
  tipoJornada: string
  salarioBaseCotizacion: number
  salarioDiarioIntegrado: number
  periodicidadPago: string
  riesgoPuesto: string
  departamento: string
  puesto: string
  banco?: string
  cuentaBancaria?: string
  correoElectronico: string
  telefono: string
}

export default function EmpleadoDetalle({ params }: { params: { id: string } }) {
  const [employee, setEmployee] = useState<Employee | null>(null)
  const [showEditModal, setShowEditModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  const fetchEmployee = useCallback(async () => {
    setLoading(true)
    try {
      const response = await fetch(`/api/empleados/${params.id}`)
      if (!response.ok) throw new Error('Error al cargar empleado')
      const data = await response.json()
      setEmployee(data)
    } catch (error) {
      toast.error('Error al cargar el empleado')
      router.push('/nomina/agregarEmpleado')
    } finally {
      setLoading(false)
    }
  }, [params.id, router])

  useEffect(() => {
    fetchEmployee()
  }, [params.id, fetchEmployee])

  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/empleados/${params.id}`, {
        method: 'DELETE',
      })
      if (!response.ok) throw new Error('Error al eliminar empleado')
      toast.success('Empleado eliminado exitosamente')
      router.push('/nomina/agregarEmpleado')
    } catch (error) {
      toast.error('Error al eliminar el empleado')
    }
  }

  const handleEdit = () => {
    setShowEditModal(true)
  }

  const handleExportPDF = async () => {
    try {
      const response = await fetch(`/api/empleados/${params.id}/pdf`, {
        method: 'GET',
      })
      if (!response.ok) throw new Error('Error al generar PDF')
      
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `empleado-${employee?.nombreCompleto}.pdf`
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
    } catch (error) {
      toast.error('Error al exportar a PDF')
    }
  }

  if (loading) {
    return <div className="text-center mt-5">Cargando...</div>
  }

  if (!employee) {
    return <div className="text-center mt-5">Empleado no encontrado</div>
  }

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Detalles del Empleado</h2>
        <div>
          <Button variant="secondary" className="me-2" onClick={() => router.push('/nomina/agregarEmpleado')}>
            Volver
          </Button>
          <Button variant="primary" className="me-2" onClick={handleEdit}>
            Editar
          </Button>
          <Button variant="danger" className="me-2" onClick={() => setShowDeleteModal(true)}>
            Eliminar
          </Button>
          <Button variant="success" onClick={handleExportPDF}>
            Exportar PDF
          </Button>
        </div>
      </div>

      <Card>
        <Card.Body>
          <Row>
            <Col md={6}>
              <h4>Información Personal</h4>
              <p><strong>Nombre:</strong> {employee.nombreCompleto}</p>
              <p><strong>RFC:</strong> {employee.rfc}</p>
              <p><strong>CURP:</strong> {employee.curp}</p>
              <p><strong>NSS:</strong> {employee.numeroSeguridadSocial}</p>
              <p><strong>Código Postal:</strong> {employee.codigoPostal}</p>
              <p><strong>Email:</strong> {employee.correoElectronico}</p>
              <p><strong>Teléfono:</strong> {employee.telefono}</p>
            </Col>
            <Col md={6}>
              <h4>Información Laboral</h4>
              <p><strong>Fecha de Ingreso:</strong> {new Date(employee.fechaIngreso).toLocaleDateString()}</p>
              <p><strong>Puesto:</strong> {employee.puesto}</p>
              <p><strong>Departamento:</strong> {employee.departamento}</p>
              <p><strong>Régimen:</strong> {employee.regimenContratacion}</p>
              <p><strong>Tipo de Contrato:</strong> {employee.tipoContrato}</p>
              <p><strong>Jornada:</strong> {employee.tipoJornada}</p>
              <p><strong>Periodicidad de Pago:</strong> {employee.periodicidadPago}</p>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col md={12}>
              <h4>Información Salarial</h4>
              <p><strong>Salario Base de Cotización:</strong> ${employee.salarioBaseCotizacion.toFixed(2)}</p>
              <p><strong>Salario Diario Integrado:</strong> ${employee.salarioDiarioIntegrado.toFixed(2)}</p>
              {employee.banco && (
                <>
                  <p><strong>Banco:</strong> {employee.banco}</p>
                  <p><strong>Cuenta Bancaria:</strong> {employee.cuentaBancaria}</p>
                </>
              )}
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Edit Modal */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Editar Empleado</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormAddEmpleado
            elements={[]} // We'll update this with the form elements
            recurso="empleados"
            initialData={employee}
            onSuccess={() => {
              setShowEditModal(false)
              fetchEmployee()
            }}
          />
        </Modal.Body>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Eliminación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¿Está seguro que desea eliminar al empleado {employee.nombreCompleto}?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
