<<<<<<< HEAD
'use server'
import postRequest from "../libComponents/postRequest";
const orderid = require('order-id')('key');

import swConnector from "../libComponents/swConector";
import { Form, Button } from 'react-bootstrap';
import React from 'react';

// Define types for better type safety
interface Partida {
  ClaveProdServ: string;
  ClaveUnidad: string;
  Unidad: string;
  Cantidad: string;
  Descripcion: string;
  ValorUnitario: string;
  Importe: string;
  ImporteRealConImp: string;
  ObjetoImp: string;
  Impuestos: {
    Traslados: Array<{
      Base: string;
      Importe: string;
      Impuesto: string;
      TipoFactor: string;
      TasaOCuota: string;
    }>
  }
}

// Define emisor and receptor types
const foza = {
  "Rfc": "FOZA8801257C2",
  "Nombre": "ALMA ALICIA FLORES ZAVALA",
  "RegimenFiscal": "626"
};

const rerr = {
  "Rfc": "JCE171003UI5",
  "Nombre": "JAKTUR CONSORCIO EMPRESARIAL",
  "DomicilioFiscalReceptor": "89460",
  "RegimenFiscalReceptor": "601",
  "UsoCFDI": "G01"
};

function ReciboMaker(notasPartidas: Partida[]) {
    let total3 = 0;
     
    function getTotal(notas: Partida[]) {
      notas.forEach((note) => {
        total3 += Number(note.ImporteRealConImp)
        console.log("total3:"+total3);
      })
      return total3
    }
    let totalConImpuestos: number = getTotal(notasPartidas)
    let iva : number = totalConImpuestos * 0.16
    let subtotal: number = totalConImpuestos - iva
    let fecha = new Date();
    let fechaActual = fecha.toLocaleDateString();
    let folio = orderid.generate();

    function addPartida(Descripcion: string, importe: number | string, claveprodserv: string) {
        const importeNum = Number(importe);
        let iva = importeNum * 0.16
        let impdeConcepto = importeNum - iva
        let partida: Partida = {
            ClaveProdServ: claveprodserv,
            ClaveUnidad: "H87",
            Unidad: "Pieza",
            Cantidad: "1.0",
            Descripcion: Descripcion,
            ValorUnitario: ""+impdeConcepto+"0",
            Importe: ""+impdeConcepto+"0",
            ImporteRealConImp: ""+importe+"",
            ObjetoImp: "02",
            Impuestos: {
                Traslados: [{
                    Base: ""+importe+".00",
                    Importe: ""+iva.toFixed(2)+"",
                    Impuesto: "002",
                    TipoFactor: "Tasa",
                    TasaOCuota: "0.160000",
                }]
            }
        }
        notasPartidas.push(partida)
        console.log(notasPartidas)
    }

    function FacturaMaker(notasPartidas: Partida[]) {
        let total3 = 0;
       
        function getTotal(notas: Partida[]) {
            notas.forEach((note) => {
                total3 += Number(note.ImporteRealConImp)
                console.log("total3:"+total3);
            }) 
            return total3
        }
        let totalConImpuestos: number = getTotal(notasPartidas)
        console.log(totalConImpuestos);
      
        let iva = totalConImpuestos * 0.16
        let subtotal = totalConImpuestos - iva
        let fecha = new Date();
        let factura = {
            "Version": "4.0",
            "FormaPago": "01",
            "Serie": "RL",
            "Folio": "7",
            "Fecha": "2024-12-21",
            "MetodoPago": "PUE",
            "Sello": "",
            "NoCertificado": "",
            "Certificado": "",
            "SubTotal": ""+subtotal.toFixed(2)+"",
            "Moneda": "MXN",
            "Total": ""+totalConImpuestos.toFixed(2)+"",
            "TipoDeComprobante": "I",
            "Exportacion": "01",
            "LugarExpedicion": "87000",
            "Emisor": foza,
            "Receptor": rerr,
            "Conceptos": notasPartidas.map(({ImporteRealConImp, ...rest}) => rest),
            "Impuestos": {
                "TotalImpuestosTrasladados": iva.toFixed(2),  
                "Traslados": [{
                    "Base": Number(totalConImpuestos).toFixed(2),
                    "Importe": Number(iva).toFixed(2),
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                }]
            }
        }
        swConnector(factura)
        console.log(factura) 
    }

    function onSubmitForFact() {
        FacturaMaker(notasPartidas)
    }

    function onSubmit(formData: FormData) {
        let entries = Object.fromEntries(formData.entries()); 
        console.log(entries);
        addPartida(
            entries.Descripcion as string, 
            entries.importe as string, 
            entries.claveprodserv as string
        )
    }
  
    return (
        <>
        <Form action={onSubmit}>
            {/* Placeholder for form elements */}
            <Button variant="primary" type="submit">
                Guardar
            </Button>
        </Form>
        <Button onClick={onSubmitForFact}>
            Facturar
        </Button>
        </>
    );
}

export default ReciboMaker;
=======
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
>>>>>>> 4d4742dcdc4c453daa5c6df5f1683e94a1b6b386
