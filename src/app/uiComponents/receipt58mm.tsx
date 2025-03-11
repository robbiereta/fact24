'use client'
import React from 'react';
import { Card } from 'react-bootstrap';

interface ReceiptItem {
  description: string;
  quantity: number;
  price: number;
  total: number;
}

interface Receipt58mmProps {
  businessName?: string;
  address?: string;
  phone?: string;
  receiptNumber: string;
  date: string;
  items: ReceiptItem[];
  subtotal: number;
  tax: number;
  total: number;
  paymentMethod?: string;
  cashier?: string;
}

export function Receipt58mm({
  businessName = 'Mi Negocio',
  address = '',
  phone = '',
  receiptNumber,
  date,
  items,
  subtotal,
  tax,
  total,
  paymentMethod = 'Efectivo',
  cashier = ''
}: Receipt58mmProps) {
  const formatCurrency = (amount: number) => {
    return amount.toLocaleString('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 2
    });
  };

  return (
    <Card className="receipt-58mm">
      <Card.Body className="p-2">
        <div className="text-center">
          <div className="business-name">{businessName}</div>
          {address && <div className="small-text">{address}</div>}
          {phone && <div className="small-text">Tel: {phone}</div>}
          <div className="divider">--------------------------------</div>
          <div className="ticket-info">
            <div>Ticket #: {receiptNumber}</div>
            <div>Fecha: {date}</div>
            {cashier && <div>Cajero: {cashier}</div>}
          </div>
          <div className="divider">--------------------------------</div>
        </div>

        <div className="items-section">
          {items.map((item, index) => (
            <div key={index} className="item">
              <div className="item-description">{item.description}</div>
              <div className="item-detail">
                {item.quantity} x {formatCurrency(item.price)}
              </div>
              <div className="item-total text-end">
                {formatCurrency(item.total)}
              </div>
            </div>
          ))}
        </div>

        <div className="divider">--------------------------------</div>
        
        <div className="totals-section">
          <div className="d-flex justify-content-between">
            <span>SUBTOTAL</span>
            <span>{formatCurrency(subtotal)}</span>
          </div>
          <div className="d-flex justify-content-between">
            <span>IVA</span>
            <span>{formatCurrency(tax)}</span>
          </div>
          <div className="d-flex justify-content-between total-amount">
            <span>TOTAL</span>
            <span>{formatCurrency(total)}</span>
          </div>
        </div>

        <div className="divider">--------------------------------</div>
        
        <div className="payment-section text-center">
          <div>Forma de Pago: {paymentMethod}</div>
          <div className="mt-2">¡Gracias por su compra!</div>
        </div>
      </Card.Body>

      <style jsx>{`
        .receipt-58mm {
          width: 58mm;
          font-family: 'Courier New', Courier, monospace;
          font-size: 12px;
          margin: auto;
          background: white;
          box-shadow: 0 0 5px rgba(0,0,0,0.1);
        }
        .business-name {
          font-size: 14px;
          font-weight: bold;
          margin-bottom: 4px;
        }
        .small-text {
          font-size: 11px;
          line-height: 1.2;
        }
        .divider {
          font-size: 11px;
          margin: 8px 0;
          color: #666;
        }
        .ticket-info {
          font-size: 11px;
          line-height: 1.3;
        }
        .items-section {
          margin: 8px 0;
        }
        .item {
          margin-bottom: 4px;
        }
        .item-description {
          font-size: 11px;
          line-height: 1.2;
        }
        .item-detail {
          font-size: 11px;
          color: #666;
        }
        .item-total {
          font-size: 11px;
        }
        .totals-section {
          font-size: 12px;
          margin: 8px 0;
        }
        .total-amount {
          font-weight: bold;
          font-size: 13px;
          margin-top: 4px;
        }
        .payment-section {
          font-size: 11px;
          margin-top: 8px;
        }
      `}</style>
    </Card>
  );
}

export default Receipt58mm;
