'use client'
import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';

const CashClosing = () => {
  const [showCashClosingModal, setShowCashClosingModal] = useState(false);
  const [cashClosingData, setCashClosingData] = useState({
    startDate: new Date().toISOString().split('T')[0],
    endDate: new Date().toISOString().split('T')[0],
    receipts: [],
    total: 0,
    count: 0
  });

  const handleCashClosingShow = () => {
    setShowCashClosingModal(true);
  };

  const handleCashClosingClose = () => {
    setShowCashClosingModal(false);
  };

  const fetchCashClosingData = async () => {
    try {
      const response = await fetch('/api/generate-receipt?' + new URLSearchParams({
        startDate: cashClosingData.startDate,
        endDate: cashClosingData.endDate,
      }));
      const data = await response.json();
      
      const total = data.reduce((sum: number, receipt: any) => sum + receipt.amount, 0);
      
      setCashClosingData(prev => ({
        ...prev,
        receipts: data,
        total,
        count: data.length
      }));
    } catch (error) {
      console.error('Error fetching cash closing data:', error);
      toast.error('Error al cargar los datos del corte de caja');
    }
  };

  const handleGenerateCashClosingPDF = async () => {
    try {
      const response = await fetch('/api/generate-receipt/pdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          receiptIds: cashClosingData.receipts.map((r: any) => r.id),
          summaryData: cashClosingData
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
      console.error('Error generating PDF:', error);
      toast.error('Error al generar el PDF');
    }
  };

  return (
    <div className="cash-closing-container p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3>Corte de Caja</h3>
        <Button 
          variant="primary" 
          onClick={handleCashClosingShow}
          style={{
            padding: '8px 16px',
            borderRadius: '8px'
          }}
        >
          Generar Corte de Caja
        </Button>
      </div>

      <Modal show={showCashClosingModal} onHide={handleCashClosingClose}>
        <Modal.Header closeButton>
          <Modal.Title>Corte de Caja</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Fecha Inicial</Form.Label>
              <Form.Control
                type="date"
                value={cashClosingData.startDate}
                onChange={(e) => setCashClosingData(prev => ({ ...prev, startDate: e.target.value }))}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Fecha Final</Form.Label>
              <Form.Control
                type="date"
                value={cashClosingData.endDate}
                onChange={(e) => setCashClosingData(prev => ({ ...prev, endDate: e.target.value }))}
              />
            </Form.Group>
          </Form>
          {cashClosingData.receipts.length > 0 && (
            <div>
              <p>Total de ventas: {cashClosingData.count}</p>
              <p>Monto total: ${cashClosingData.total.toFixed(2)}</p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCashClosingClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={fetchCashClosingData}>
            Consultar
          </Button>
          {cashClosingData.receipts.length > 0 && (
            <Button variant="success" onClick={handleGenerateCashClosingPDF}>
              Generar PDF
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CashClosing;
