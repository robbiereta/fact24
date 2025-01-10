'use client'
import React, { useState, useEffect } from 'react';
import { Table, Button, Form, Row, Col } from 'react-bootstrap';
import { toast } from 'react-toastify';

interface CashClosing {
  id: string;
  date: Date;
  totalAmount: number;
  receiptCount: number;
  notes?: string;
}

const CashClosingList = () => {
  const [cashClosings, setCashClosings] = useState<CashClosing[]>([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    fetchCashClosings();
  }, [startDate, endDate]);

  const fetchCashClosings = async () => {
    try {
      const params = new URLSearchParams();
      if (startDate) params.append('startDate', startDate);
      if (endDate) params.append('endDate', endDate);

      const response = await fetch(`/api/cashClosings?${params}`);
      if (!response.ok) throw new Error('Failed to fetch cash closings');
      
      const data = await response.json();
      setCashClosings(data);
    } catch (error) {
      console.error('Error fetching cash closings:', error);
      toast.error('Error al cargar los cortes de caja');
    }
  };

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN'
    }).format(amount);
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('es-MX', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleViewPDF = async (id: string) => {
    try {
      const response = await fetch(`/api/cashClosings/${id}/pdf`);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to generate PDF');
      }
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `corte_caja_${id}.pdf`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error generating PDF:', error);
      toast.error('Error al generar el PDF');
    }
  };

  return (
    <div>
      <h3 className="mb-4">Historial de Cortes de Caja</h3>
      
      <Row className="mb-4">
        <Col md={4}>
          <Form.Group>
            <Form.Label>Fecha Inicio</Form.Label>
            <Form.Control
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group>
            <Form.Label>Fecha Fin</Form.Label>
            <Form.Control
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Total</th>
            <th>Cantidad de Recibos</th>
            <th>Notas</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {cashClosings.map((closing) => (
            <tr key={closing.id}>
              <td>{formatDate(closing.date)}</td>
              <td>{formatAmount(closing.totalAmount)}</td>
              <td>{closing.receiptCount}</td>
              <td>{closing.notes || '-'}</td>
              <td>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => handleViewPDF(closing.id)}
                >
                  Ver PDF
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {cashClosings.length === 0 && (
        <div className="text-center p-4">
          No hay cortes de caja en el período seleccionado
        </div>
      )}
    </div>
  );
};

export default CashClosingList;
