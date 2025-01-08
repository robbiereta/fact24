'use client'
import React, { useState, useEffect, useCallback } from 'react';
import { Button, Table, Form, Modal } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

interface Receipt {
  id: string;
  employeeName: string;
  amount: number;
  date: string;
  status: string;
}

export default function CorteCaja() {
  const [receipts, setReceipts] = useState<Receipt[]>([]);
  const [selectedReceipts, setSelectedReceipts] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [showSummary, setShowSummary] = useState(false);
  const [summaryData, setSummaryData] = useState({
    total: 0,
    count: 0,
    startDate: '',
    endDate: '',
  });
  const [dateRange, setDateRange] = useState({
    startDate: '',
    endDate: '',
  });

  const fetchReceipts = useCallback(async () => {
    try {
      const response = await fetch('/api/receipts?' + new URLSearchParams({
        startDate: dateRange.startDate,
        endDate: dateRange.endDate,
      }));
      const data = await response.json();
      setReceipts(data);
    } catch (error) {
      console.error('Error fetching receipts:', error);
      toast.error('Error al cargar los recibos');
    } finally {
      setLoading(false);
    }
  }, [dateRange.startDate, dateRange.endDate]);

  useEffect(() => {
    if (dateRange.startDate && dateRange.endDate) {
      fetchReceipts();
    }
  }, [fetchReceipts, dateRange.startDate, dateRange.endDate]);

  const handleSelectReceipt = (receiptId: string) => {
    setSelectedReceipts(prev => {
      if (prev.includes(receiptId)) {
        return prev.filter(id => id !== receiptId);
      } else {
        return [...prev, receiptId];
      }
    });
  };

  const handleSelectAll = () => {
    if (selectedReceipts.length === receipts.length) {
      setSelectedReceipts([]);
    } else {
      setSelectedReceipts(receipts.map(receipt => receipt.id));
    }
  };

  const generateCashClosing = async () => {
    if (selectedReceipts.length === 0) {
      toast.error('Por favor seleccione al menos un recibo');
      return;
    }

    try {
      const response = await fetch('/api/generate-receipt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          receiptIds: selectedReceipts,
          startDate: dateRange.startDate,
          endDate: dateRange.endDate,
        }),
      });

      const data = await response.json();
      
      if (response.ok) {
        setSummaryData({
          total: data.total,
          count: data.count,
          startDate: data.startDate,
          endDate: data.endDate,
        });
        setShowSummary(true);
        toast.success('Corte de caja generado exitosamente');
      } else {
        throw new Error(data.message || 'Error al generar el corte de caja');
      }
    } catch (error) {
      console.error('Error generating cash closing:', error);
      toast.error('Error al generar el corte de caja');
    }
  };

  const handleExportPDF = async () => {
    try {
      const response = await fetch('/api/generate-receipt/pdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          receiptIds: selectedReceipts,
          summaryData,
        }),
      });

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `corte_caja_${new Date().toISOString().split('T')[0]}.pdf`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error exporting PDF:', error);
      toast.error('Error al exportar el PDF');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Corte de Caja</h2>
      
      <div className="row mb-4">
        <div className="col-md-6">
          <Form.Group>
            <Form.Label>Fecha Inicial</Form.Label>
            <Form.Control
              type="date"
              value={dateRange.startDate}
              onChange={(e) => setDateRange(prev => ({ ...prev, startDate: e.target.value }))}
            />
          </Form.Group>
        </div>
        <div className="col-md-6">
          <Form.Group>
            <Form.Label>Fecha Final</Form.Label>
            <Form.Control
              type="date"
              value={dateRange.endDate}
              onChange={(e) => setDateRange(prev => ({ ...prev, endDate: e.target.value }))}
            />
          </Form.Group>
        </div>
      </div>

      {loading ? (
        <div className="text-center">
          <span>Cargando recibos...</span>
        </div>
      ) : (
        <>
          <div className="mb-3">
            <Button 
              variant="primary" 
              onClick={generateCashClosing}
              disabled={selectedReceipts.length === 0}
              className="me-2"
            >
              Generar Corte de Caja
            </Button>
            <Button 
              variant="secondary" 
              onClick={handleSelectAll}
            >
              {selectedReceipts.length === receipts.length ? 'Deseleccionar Todo' : 'Seleccionar Todo'}
            </Button>
          </div>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Seleccionar</th>
                <th>ID</th>
                <th>Empleado</th>
                <th>Monto</th>
                <th>Fecha</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {receipts.map((receipt) => (
                <tr key={receipt.id}>
                  <td>
                    <Form.Check
                      type="checkbox"
                      checked={selectedReceipts.includes(receipt.id)}
                      onChange={() => handleSelectReceipt(receipt.id)}
                    />
                  </td>
                  <td>{receipt.id}</td>
                  <td>{receipt.employeeName}</td>
                  <td>${receipt.amount.toFixed(2)}</td>
                  <td>{new Date(receipt.date).toLocaleDateString()}</td>
                  <td>{receipt.status}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}

      <Modal show={showSummary} onHide={() => setShowSummary(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Resumen del Corte de Caja</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>Periodo:</strong> {new Date(summaryData.startDate).toLocaleDateString()} - {new Date(summaryData.endDate).toLocaleDateString()}</p>
          <p><strong>Total de Recibos:</strong> {summaryData.count}</p>
          <p><strong>Monto Total:</strong> ${summaryData.total.toFixed(2)}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowSummary(false)}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleExportPDF}>
            Exportar PDF
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
