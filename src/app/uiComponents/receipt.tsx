'use client'
import { Card } from 'react-bootstrap';
import { formatCurrency } from '../utils/formatters';

interface ReceiptItem {
  description: string;
  quantity: number;
  amount: number;
  unitPrice?: number;
}

interface ReceiptProps {
  items: ReceiptItem[];
  subtotal: number;
  tax: number;
  total: number;
  receiptNumber: string;
  date: string;
  className?: string;
}

export function Receipt({ 
  items, 
  subtotal, 
  tax, 
  total, 
  receiptNumber, 
  date, 
  className = '' 
}: ReceiptProps) {
  return (
    <Card className={`receipt-container ${className}`}>
      <Card.Body>
        <div className="text-center mb-3">
          <h5 className="mb-0">Comprobante de Venta</h5>
          <small>Folio: {receiptNumber}</small>
          <br />
          <small>{date}</small>
        </div>

        <div className="receipt-items">
          {items.map((item, index) => (
            <div key={index} className="receipt-item mb-2">
              <div className="d-flex justify-content-between">
                <span>{item.description}</span>
                <span>{formatCurrency(item.amount)}</span>
              </div>
              <small className="text-muted">
                Cant: {item.quantity} 
                {item.unitPrice && ` x ${formatCurrency(item.unitPrice)}`}
              </small>
            </div>
          ))}
        </div>

        <div className="receipt-summary mt-3 pt-2 border-top">
          <div className="d-flex justify-content-between">
            <span>Subtotal:</span>
            <span>{formatCurrency(subtotal)}</span>
          </div>
          <div className="d-flex justify-content-between">
            <span>IVA:</span>
            <span>{formatCurrency(tax)}</span>
          </div>
          <div className="d-flex justify-content-between fw-bold mt-2">
            <span>Total:</span>
            <span>{formatCurrency(total)}</span>
          </div>
        </div>
      </Card.Body>

      <style jsx>{`
        .receipt-container {
          max-width: 400px;
          margin: auto;
          font-family: 'Courier New', Courier, monospace;
        }
        .receipt-items {
          font-size: 0.9rem;
        }
        .receipt-summary {
          font-size: 0.95rem;
        }
      `}</style>
    </Card>
  );
}

export default Receipt;
