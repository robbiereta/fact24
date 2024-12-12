'use client'
import { useRef } from 'react';
import { Modal, Button } from 'react-bootstrap';
const receipt = require("receipt");

interface NotaPartida {
  Descripcion: string;
  Cantidad: number;
  ImporteRealConImp: number;
}

interface TicketProps {
  folio: string;
  fechaActual: string;
  notasPartidas: NotaPartida[];
  iva: number;
  subtotal: number;
  total: number;
  show: boolean;
  onHide: () => void;
}

function formatCurrency(amount: number): string {
  return amount.toLocaleString('es-MX', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

function generateTicketContent(folio: string, fechaActual: string, notasPartidas: NotaPartida[], iva: number, subtotal: number, total: number) {
  let lineas: any[] = []
  notasPartidas.forEach((nota) => {
    const description = nota.Descripcion.length > 20 
      ? nota.Descripcion.substring(0, 17) + '...'
      : nota.Descripcion;
      
    lineas.push({
      desc: description,
      qty: formatCurrency(nota.Cantidad),
      cost: formatCurrency(nota.ImporteRealConImp)
    });
  });

  return receipt.create([
    { type: 'text', value: [
      'BICI-VIC CENTRO',
      'Mariano Matamoros 1242',
      'Centro, C.P. 87000',
      'Cd. Victoria, Tamps.',
      'RFC: FOZA8801257C2',
      'Reg. Simplificado Confianza'
    ], align: 'center', width: 32 },
    { type: 'empty' },
    { type: 'properties', lines: [
      { name: 'Folio', value: folio },
      { name: 'Fecha', value: fechaActual }
    ], width: 32 },
    { type: 'empty' },
    { type: 'text', value: ['CANT  DESCRIPCION    IMPORTE'], align: 'left', width: 32 },
    { type: 'table', lines: lineas, width: 32, spacing: 1 },
    { type: 'empty' },
    { type: 'properties', lines: [
      { name: 'IVA 16%', value: formatCurrency(iva) },
      { name: 'Subtotal', value: formatCurrency(subtotal) },
      { name: 'Total', value: formatCurrency(total) }
    ], width: 32 },
    { type: 'empty' },
    { type: 'text', value: [
      '¡Gracias por su compra!',
      '********************************'
    ], align: 'center', width: 32 }
  ]);
}

function Ticket({ folio, fechaActual, notasPartidas, iva, subtotal, total, show, onHide }: TicketProps) {
  const ticketRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    const printContent = ticketRef.current?.innerHTML;
    if (printContent) {
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        printWindow.document.write(`
          <html>
            <head>
              <style>
                @media print {
                  pre {
                    font-family: monospace;
                    white-space: pre;
                    margin: 0;
                    padding: 0;
                  }
                  @page {
                    size: 80mm auto;
                    margin: 0;
                  }
                  body {
                    width: 80mm;
                    padding: 5mm;
                  }
                }
              </style>
            </head>
            <body>
              ${printContent}
            </body>
          </html>
        `);
        printWindow.document.close();
        printWindow.focus();
        printWindow.print();
        printWindow.close();
      }
    }
  };

  const ticketContent = generateTicketContent(folio, fechaActual, notasPartidas, iva, subtotal, total);

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Ticket</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div ref={ticketRef}>
          <pre>{ticketContent}</pre>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cerrar
        </Button>
        <Button variant="success" onClick={handlePrint}>
          Imprimir
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Ticket;