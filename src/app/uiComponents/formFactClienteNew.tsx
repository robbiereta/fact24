'use client'
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { FormGroup, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import swConnector from '../libComponents/swConector';
import { createFactura } from '../components/FacturaMaker';
import { NotaPartida, Emisor, Receptor } from '../interfaces/facturaTypes';

interface FormCreatorProps {
  elements: {
    name: string;
    id: number;
    type: string;
    placeholder: string;
  }[];
}

function FormFactCliente(props: FormCreatorProps) {
  const [notasPartidas, setNotasPartidas] = useState<NotaPartida[]>([]);
  const [subtotal, setSubtotal] = useState(0);
  const [totalConImpuestos, setTotalConImpuestos] = useState(0);
  const [iva, setIva] = useState(0);

  const foza: Emisor = {
    "Rfc": "FOZA8801257C2",
    "Nombre": "ALMA ALICIA FLORES ZAVALA",
    "RegimenFiscal": "626"
  };

  const rerr: Receptor = {
    "Rfc": "JCE171003UI5",
    "Nombre": "JAKTUR CONSORCIO EMPRESARIAL",
    "DomicilioFiscalReceptor": "89460",
    "RegimenFiscalReceptor": "601",
    "UsoCFDI": "G01"
  };

  const onSubmitForFact = async (event: React.FormEvent) => {
    event.preventDefault();
    const factura = createFactura({
      notasPartidas,
      foza,
      rerr,
      subtotal,
      totalConImpuestos,
      iva
    });
    
    try {
      await swConnector(factura);
      // Handle success
    } catch (error) {
      console.error('Error creating factura:', error);
      // Handle error
    }
  };

  // Rest of the component implementation...

  return (
    <Form onSubmit={onSubmitForFact}>
      {/* Form implementation */}
    </Form>
  );
}

export default FormFactCliente;
