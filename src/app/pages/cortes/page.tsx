'use client'

import React, { useState, useEffect } from 'react';
import { Table, Form, Row, Col, Button, Card } from 'react-bootstrap';

interface CashClosing {
  id: string;
  date: string;
  totalAmount: number;
  receiptCount: number;
  employeeSummary: {
    [key: string]: {
      count: number;
      total: number;
    };
  };
  notes?: string;
  receipts: any[];
}

export default function CashClosingsPage() {
  const [cashClosings, setCashClosings] = useState<CashClosing[]>([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchCashClosings = async () => {
    try {
      setLoading(true);
      let url = '/api/cashClosings';
      const params = new URLSearchParams();
      
      if (startDate) params.append('startDate', startDate);
      if (endDate) params.append('endDate', endDate);
      
      if (params.toString()) {
        url += `?${params.toString()}`;
      }

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch cash closings');
      }

      const data = await response.json();
      setCashClosings(data);
    } catch (error) {
      console.error('Error fetching cash closings:', error);
      alert('Error al cargar los cortes de caja');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCashClosings();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-MX', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN'
    }).format(amount);
  };

  const printCashClosing = (closing: CashClosing) => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const content = `
      <html>
        <head>
          <title>Corte de Caja - ${formatDate(closing.date)}</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            table { width: 100%; border-collapse: collapse; margin: 20px 0; }
            th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
            th { background-color: #f4f4f4; }
            .summary { margin-bottom: 20px; }
            .header { text-align: center; margin-bottom: 30px; }
            .footer { margin-top: 30px; text-align: center; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>Corte de Caja</h1>
            <h2>${formatDate(closing.date)}</h2>
          </div>

          <div class="summary">
            <h3>Resumen General</h3>
            <p>Total de Ventas: ${formatAmount(closing.totalAmount)}</p>
            <p>Número de Recibos: ${closing.receiptCount}</p>
          </div>

          <div class="employee-summary">
            <h3>Resumen por Empleado</h3>
            <table>
              <thead>
                <tr>
                  <th>Empleado</th>
                  <th>Cantidad de Recibos</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                ${Object.entries(closing.employeeSummary).map(([name, data]) => `
                  <tr>
                    <td>${name}</td>
                    <td>${data.count}</td>
                    <td>${formatAmount(data.total)}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>

          ${closing.notes ? `
            <div class="notes">
              <h3>Notas</h3>
              <p>${closing.notes}</p>
            </div>
          ` : ''}

          <div class="receipts">
            <h3>Detalle de Recibos</h3>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Hora</th>
                  <th>Empleado</th>
                  <th>Importe</th>
                </tr>
              </thead>
              <tbody>
                ${closing.receipts.map(receipt => `
                  <tr>
                    <td>${receipt.id}</td>
                    <td>${formatDate(receipt.date)}</td>
                    <td>${receipt.empleado.nombreCompleto}</td>
                    <td>${formatAmount(receipt.amount)}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>

          <div class="footer">
            <p>Generado el ${formatDate(new Date().toISOString())}</p>
            <p>_______________________</p>
            <p>Firma de Autorización</p>
          </div>
        </body>
      </html>
    `;

    printWindow.document.write(content);
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div className="p-4">
      <h2 className="mb-4">Historial de Cortes de Caja</h2>

      <Card className="mb-4">
        <Card.Body>
          <Row className="align-items-end">
            <Col md={4}>
              <Form.Group>
                <Form.Label>Fecha Inicial</Form.Label>
                <Form.Control
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group>
                <Form.Label>Fecha Final</Form.Label>
                <Form.Control
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Button variant="primary" onClick={fetchCashClosings}>
                🔍 Buscar
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {loading ? (
        <div className="text-center p-4">Cargando cortes de caja...</div>
      ) : cashClosings.length === 0 ? (
        <div className="text-center p-4">No hay cortes de caja para mostrar.</div>
      ) : (
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Total</th>
              <th>Recibos</th>
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
                    variant="outline-primary"
                    size="sm"
                    onClick={() => printCashClosing(closing)}
                  >
                    🖨️ Imprimir
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}
