'use client'

import React, { useState, useEffect, useCallback } from 'react';
import Table from 'react-bootstrap/Table';
import { Form, Row, Col, Button, InputGroup, Modal } from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination';

interface Receipt {
  id: string;
  date: string;
  amount: number;
  status: string;
  items: any;
  empleadoId: number;
  empleado: {
    id: number;
    nombreCompleto: string;
  };
}

interface CashClosing {
  date: string;
  totalAmount: number;
  receiptCount: number;
  receipts: Receipt[];
  employeeSummary: {
    [key: string]: {
      count: number;
      total: number;
    };
  };
}

interface ListaTicketProps {
  recurso?: string;
}

function ListaTicket({ recurso }: ListaTicketProps) {
  const [receipts, setReceipts] = useState<Receipt[]>([]);
  const [filteredReceipts, setFilteredReceipts] = useState<Receipt[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState('');
  const [employees, setEmployees] = useState<Array<{ id: number; nombreCompleto: string }>>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [showClosingModal, setShowClosingModal] = useState(false);
  const [cashClosing, setCashClosing] = useState<CashClosing | null>(null);

  const fetchEmployees = useCallback(async () => {
    try {
      const response = await fetch('/api/empleados');
      if (response.ok) {
        const data = await response.json();
        setEmployees(data || []);
      }
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  }, []);

  const fetchReceipts = useCallback(async () => {
    try {
      const queryParams = new URLSearchParams();
      if (startDate) queryParams.append('startDate', startDate);
      if (endDate) queryParams.append('endDate', endDate);
      if (selectedEmployee) queryParams.append('empleadoId', selectedEmployee);

      const response = await fetch('/api/receipts?' + queryParams.toString());
      if (response.ok) {
        const data = await response.json();
        setReceipts(data || []);
        setFilteredReceipts(data || []);
      } else {
        console.error('Error fetching receipts:', await response.text());
        setReceipts([]);
        setFilteredReceipts([]);
      }
    } catch (error) {
      console.error('Error fetching receipts:', error);
      setReceipts([]);
      setFilteredReceipts([]);
    }
  }, [startDate, endDate, selectedEmployee]);

  useEffect(() => {
    fetchEmployees();
    fetchReceipts();
  }, []); // Only fetch on mount

  useEffect(() => {
    const filtered = receipts.filter(receipt => {
      const searchString = `${receipt.id} ${receipt.empleado.nombreCompleto} ${receipt.status}`.toLowerCase();
      return searchString.includes(searchTerm.toLowerCase());
    });
    setFilteredReceipts(filtered);
    setCurrentPage(1);
  }, [searchTerm, receipts]);

  const resetFilters = () => {
    setStartDate('');
    setEndDate('');
    setSelectedEmployee('');
    setSearchTerm('');
    fetchReceipts();
  };

  const exportToExcel = () => {
    const headers = ['ID', 'Fecha', 'Empleado', 'Importe', 'Estado'];
    const data = filteredReceipts.map(receipt => [
      receipt.id,
      formatDate(receipt.date),
      receipt.empleado.nombreCompleto,
      receipt.amount,
      receipt.status
    ]);

    const csvContent = [
      headers.join(','),
      ...data.map(row => row.join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `receipts_${formatDate(new Date().toISOString())}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const printReceipts = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const content = `
      <html>
        <head>
          <title>Recibos</title>
          <style>
            table { width: 100%; border-collapse: collapse; }
            th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
            th { background-color: #f4f4f4; }
            @media print {
              .no-print { display: none; }
            }
          </style>
        </head>
        <body>
          <h1>Lista de Recibos</h1>
          <p>Fecha de impresión: ${formatDate(new Date().toISOString())}</p>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Fecha</th>
                <th>Empleado</th>
                <th>Importe</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              ${filteredReceipts.map(receipt => `
                <tr>
                  <td>${receipt.id}</td>
                  <td>${formatDate(receipt.date)}</td>
                  <td>${receipt.empleado.nombreCompleto}</td>
                  <td>${formatAmount(receipt.amount)}</td>
                  <td>${receipt.status}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </body>
      </html>
    `;

    printWindow.document.write(content);
    printWindow.document.close();
    printWindow.print();
  };

  const generateCashClosing = useCallback(() => {
    const today = new Date().toISOString().split('T')[0];
    const todayReceipts = receipts.filter(receipt => {
      const receiptDate = new Date(receipt.date).toISOString().split('T')[0];
      return receiptDate === today;
    });

    const employeeSummary: { [key: string]: { count: number; total: number } } = {};
    let totalAmount = 0;

    todayReceipts.forEach(receipt => {
      totalAmount += Number(receipt.amount);
      
      const employeeName = receipt.empleado.nombreCompleto;
      if (!employeeSummary[employeeName]) {
        employeeSummary[employeeName] = { count: 0, total: 0 };
      }
      employeeSummary[employeeName].count += 1;
      employeeSummary[employeeName].total += Number(receipt.amount);
    });

    const closing: CashClosing = {
      date: today,
      totalAmount,
      receiptCount: todayReceipts.length,
      receipts: todayReceipts,
      employeeSummary
    };

    setCashClosing(closing);
    setShowClosingModal(true);
  }, [receipts]);

  const printCashClosing = useCallback(() => {
    if (!cashClosing) return;

    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const content = `
      <html>
        <head>
          <title>Corte de Caja - ${formatDate(cashClosing.date)}</title>
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
            <h2>${formatDate(cashClosing.date)}</h2>
          </div>

          <div class="summary">
            <h3>Resumen General</h3>
            <p>Total de Ventas: ${formatAmount(cashClosing.totalAmount)}</p>
            <p>Número de Recibos: ${cashClosing.receiptCount}</p>
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
                ${Object.entries(cashClosing.employeeSummary).map(([name, data]) => `
                  <tr>
                    <td>${name}</td>
                    <td>${data.count}</td>
                    <td>${formatAmount(data.total)}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>

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
                ${cashClosing.receipts.map(receipt => `
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
  }, [cashClosing]);

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

  if (!Array.isArray(filteredReceipts)) {
    return <div className="text-center p-4">No hay recibos disponibles.</div>;
  }

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredReceipts.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Calculate total pages
  const totalPages = Math.ceil(filteredReceipts.length / itemsPerPage);

  // Generate page items
  let items = [];
  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item 
        key={number} 
        active={number === currentPage}
        onClick={() => paginate(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div className="p-3">
      <div className="mb-4">
        <Row className="align-items-center">
          <Col md={6}>
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Buscar por ID, empleado o estado..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <InputGroup.Text>
                🔍
              </InputGroup.Text>
            </InputGroup>
          </Col>
          <Col md={6} className="text-end">
            <Button variant="outline-warning" className="me-2" onClick={generateCashClosing}>
              💰 Corte de Caja
            </Button>
            <Button variant="outline-primary" className="me-2" onClick={() => setShowFilters(!showFilters)}>
              {showFilters ? '✖ Ocultar Filtros' : '⚡ Mostrar Filtros'}
            </Button>
            <Button variant="outline-success" className="me-2" onClick={exportToExcel}>
              📊 Exportar
            </Button>
            <Button variant="outline-info" onClick={printReceipts}>
              🖨️ Imprimir
            </Button>
          </Col>
        </Row>

        {showFilters && (
          <Row className="mt-3">
            <Col md={3}>
              <Form.Group>
                <Form.Label>Fecha Inicio</Form.Label>
                <Form.Control
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group>
                <Form.Label>Fecha Fin</Form.Label>
                <Form.Control
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group>
                <Form.Label>Empleado</Form.Label>
                <Form.Select
                  value={selectedEmployee}
                  onChange={(e) => setSelectedEmployee(e.target.value)}
                >
                  <option value="">Todos los empleados</option>
                  {employees.map(emp => (
                    <option key={emp.id} value={emp.id}>
                      {emp.nombreCompleto}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={2} className="d-flex align-items-end">
              <div>
                <Button variant="primary" className="me-2" onClick={fetchReceipts}>
                  Aplicar
                </Button>
                <Button variant="secondary" onClick={resetFilters}>
                  ✖
                </Button>
              </div>
            </Col>
          </Row>
        )}
      </div>

      <Table striped hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Fecha</th>
            <th>Empleado</th>
            <th>Importe</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((receipt: Receipt) => (
            <tr key={receipt.id}>
              <td>{receipt.id}</td>
              <td>{formatDate(receipt.date)}</td>
              <td>{receipt.empleado.nombreCompleto}</td>
              <td>{formatAmount(receipt.amount)}</td>
              <td>{receipt.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="d-flex justify-content-center mt-4">
        <Pagination>
          <Pagination.First 
            onClick={() => paginate(1)} 
            disabled={currentPage === 1}
          />
          <Pagination.Prev 
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          />
          {items}
          <Pagination.Next 
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
          />
          <Pagination.Last 
            onClick={() => paginate(totalPages)}
            disabled={currentPage === totalPages}
          />
        </Pagination>
      </div>

      <div className="text-muted text-center mt-2">
        Mostrando {indexOfFirstItem + 1} - {Math.min(indexOfLastItem, filteredReceipts.length)} de {filteredReceipts.length} registros
      </div>

      <Modal show={showClosingModal} onHide={() => setShowClosingModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Corte de Caja - {cashClosing ? formatDate(cashClosing.date) : ''}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cashClosing && (
            <>
              <div className="mb-4">
                <h5>Resumen General</h5>
                <p className="mb-1">Total de Ventas: {formatAmount(cashClosing.totalAmount)}</p>
                <p>Número de Recibos: {cashClosing.receiptCount}</p>
              </div>

              <div className="mb-4">
                <h5>Resumen por Empleado</h5>
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>Empleado</th>
                      <th>Cantidad</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(cashClosing.employeeSummary).map(([name, data]) => (
                      <tr key={name}>
                        <td>{name}</td>
                        <td>{data.count}</td>
                        <td>{formatAmount(data.total)}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowClosingModal(false)}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={printCashClosing}>
            🖨️ Imprimir Corte
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ListaTicket;