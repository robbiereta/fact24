'use client'
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { FormGroup, Button } from 'react-bootstrap';
import React from 'react';
import swConnector from '../libComponents/swConector';


interface FormCreatorProps {
  elements: {
    name: string;
    id: number;
    type: string;
    placeholder: string;
  }[];
}


function FormFactCliente(props:FormCreatorProps) {
 let foza= {
  "Rfc": "FOZA8801257C2",
  "Nombre": "ALMA ALICIA FLORES ZAVALA",
  "RegimenFiscal": "626"
}

let rerr={
  "Rfc": "JCE171003UI5",
  "Nombre": "JAKTUR CONSORCIO EMPRESARIAL",
  "DomicilioFiscalReceptor": "89460",
  "RegimenFiscalReceptor": "601",
  "UsoCFDI": "G01"
}


  let elements=props.elements
  let formElements:any[]=[]
  var optionelements:any[]=[]

   elements.map((element)=>{
  formElements.push(
    <Form.Group className="mb-3" controlId={element.name+element.id} key={element.id+"key1"}>
    <Form.Label key={element.id+"key2"}>{element.placeholder}</Form.Label>
    <Form.Control  key={element.id+"key3"}type={element.type} name={element.name} placeholder={element.placeholder} />
  
  </Form.Group>
  )
  return formElements
  })

  let notasPartidas:any[]=[
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "35",
        "Importe": "29.4",
        "ImporteRealConImp": "35",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "35",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "5.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "80",
        "Importe": "67.2",
        "ImporteRealConImp": "80",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "80",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "12.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "80",
        "Importe": "67.2",
        "ImporteRealConImp": "80",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "80",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "12.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "890",
        "Importe": "747.6",
        "ImporteRealConImp": "890",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "890",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "142.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "60",
        "Importe": "50.4",
        "ImporteRealConImp": "60",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "60",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "9.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "40",
        "Importe": "33.6",
        "ImporteRealConImp": "40",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "40",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "6.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "30",
        "Importe": "25.2",
        "ImporteRealConImp": "30",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "30",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "4.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "150",
        "Importe": "126",
        "ImporteRealConImp": "150",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "150",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "24.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "55",
        "Importe": "46.2",
        "ImporteRealConImp": "55",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "55",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "32",
        "Importe": "26.88",
        "ImporteRealConImp": "32",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "32",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "5.12"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "16",
        "Importe": "13.44",
        "ImporteRealConImp": "16",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "16",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "2.56"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "80",
        "Importe": "67.2",
        "ImporteRealConImp": "80",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "80",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "12.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "50",
        "Importe": "42",
        "ImporteRealConImp": "50",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "50",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "25",
        "Importe": "21",
        "ImporteRealConImp": "25",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "25",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "4.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "40",
        "Importe": "33.6",
        "ImporteRealConImp": "40",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "40",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "6.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "30",
        "Importe": "25.2",
        "ImporteRealConImp": "30",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "30",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "4.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "20",
        "Importe": "16.8",
        "ImporteRealConImp": "20",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "20",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "3.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "65",
        "Importe": "54.6",
        "ImporteRealConImp": "65",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "65",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "10.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "45",
        "Importe": "37.8",
        "ImporteRealConImp": "45",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "45",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "7.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "70",
        "Importe": "58.8",
        "ImporteRealConImp": "70",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "70",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "11.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "290",
        "Importe": "243.6",
        "ImporteRealConImp": "290",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "290",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "46.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "50",
        "Importe": "42",
        "ImporteRealConImp": "50",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "50",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "35",
        "Importe": "29.4",
        "ImporteRealConImp": "35",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "35",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "5.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "55",
        "Importe": "46.2",
        "ImporteRealConImp": "55",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "55",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "250",
        "Importe": "210",
        "ImporteRealConImp": "250",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "250",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "40.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "250",
        "Importe": "210",
        "ImporteRealConImp": "250",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "250",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "40.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "70",
        "Importe": "58.8",
        "ImporteRealConImp": "70",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "70",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "11.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "120",
        "Importe": "100.8",
        "ImporteRealConImp": "120",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "120",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "19.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "80",
        "Importe": "67.2",
        "ImporteRealConImp": "80",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "80",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "12.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "25",
        "Importe": "21",
        "ImporteRealConImp": "25",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "25",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "4.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "190",
        "Importe": "159.6",
        "ImporteRealConImp": "190",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "190",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "30.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "50",
        "Importe": "42",
        "ImporteRealConImp": "50",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "50",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "120",
        "Importe": "100.8",
        "ImporteRealConImp": "120",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "120",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "19.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "30",
        "Importe": "25.2",
        "ImporteRealConImp": "30",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "30",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "4.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "20",
        "Importe": "16.8",
        "ImporteRealConImp": "20",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "20",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "3.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "595",
        "Importe": "499.8",
        "ImporteRealConImp": "595",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "595",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "95.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "250",
        "Importe": "210",
        "ImporteRealConImp": "250",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "250",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "40.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "55",
        "Importe": "46.2",
        "ImporteRealConImp": "55",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "55",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "220",
        "Importe": "184.8",
        "ImporteRealConImp": "220",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "220",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "35.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "90",
        "Importe": "75.6",
        "ImporteRealConImp": "90",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "90",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "14.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "35",
        "Importe": "29.4",
        "ImporteRealConImp": "35",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "35",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "5.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "50",
        "Importe": "42",
        "ImporteRealConImp": "50",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "50",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "52",
        "Importe": "43.68",
        "ImporteRealConImp": "52",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "52",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.32"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "125",
        "Importe": "105",
        "ImporteRealConImp": "125",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "125",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "20.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "60",
        "Importe": "50.4",
        "ImporteRealConImp": "60",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "60",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "9.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "60",
        "Importe": "50.4",
        "ImporteRealConImp": "60",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "60",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "9.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "65",
        "Importe": "54.6",
        "ImporteRealConImp": "65",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "65",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "10.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "135",
        "Importe": "113.4",
        "ImporteRealConImp": "135",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "135",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "21.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "6",
        "Importe": "5.04",
        "ImporteRealConImp": "6",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "6",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "0.96"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "45",
        "Importe": "37.8",
        "ImporteRealConImp": "45",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "45",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "7.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "115",
        "Importe": "96.6",
        "ImporteRealConImp": "115",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "115",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "18.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "54",
        "Importe": "45.36",
        "ImporteRealConImp": "54",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "54",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.64"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "65",
        "Importe": "54.6",
        "ImporteRealConImp": "65",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "65",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "10.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "98",
        "Importe": "82.32",
        "ImporteRealConImp": "98",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "98",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "15.68"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "125",
        "Importe": "105",
        "ImporteRealConImp": "125",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "125",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "20.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "45",
        "Importe": "37.8",
        "ImporteRealConImp": "45",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "45",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "7.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "165",
        "Importe": "138.6",
        "ImporteRealConImp": "165",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "165",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "26.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "500",
        "Importe": "420",
        "ImporteRealConImp": "500",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "500",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "80.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "385",
        "Importe": "323.4",
        "ImporteRealConImp": "385",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "385",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "61.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "35",
        "Importe": "29.4",
        "ImporteRealConImp": "35",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "35",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "5.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "160",
        "Importe": "134.4",
        "ImporteRealConImp": "160",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "160",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "25.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "12",
        "Importe": "10.08",
        "ImporteRealConImp": "12",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "12",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "1.92"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "188",
        "Importe": "157.92",
        "ImporteRealConImp": "188",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "188",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "30.08"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "108",
        "Importe": "90.72",
        "ImporteRealConImp": "108",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "108",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "17.28"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "135",
        "Importe": "113.4",
        "ImporteRealConImp": "135",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "135",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "21.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "115",
        "Importe": "96.6",
        "ImporteRealConImp": "115",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "115",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "18.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "75",
        "Importe": "63",
        "ImporteRealConImp": "75",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "75",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "12.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "50",
        "Importe": "42",
        "ImporteRealConImp": "50",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "50",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "135",
        "Importe": "113.4",
        "ImporteRealConImp": "135",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "135",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "21.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "55",
        "Importe": "46.2",
        "ImporteRealConImp": "55",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "55",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "110",
        "Importe": "92.4",
        "ImporteRealConImp": "110",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "110",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "17.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "75",
        "Importe": "63",
        "ImporteRealConImp": "75",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "75",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "12.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "165",
        "Importe": "138.6",
        "ImporteRealConImp": "165",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "165",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "26.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "750",
        "Importe": "630",
        "ImporteRealConImp": "750",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "750",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "120.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "80",
        "Importe": "67.2",
        "ImporteRealConImp": "80",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "80",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "12.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "130",
        "Importe": "109.2",
        "ImporteRealConImp": "130",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "130",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "20.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "160",
        "Importe": "134.4",
        "ImporteRealConImp": "160",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "160",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "25.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "85",
        "Importe": "71.4",
        "ImporteRealConImp": "85",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "85",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "13.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "45",
        "Importe": "37.8",
        "ImporteRealConImp": "45",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "45",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "7.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "55",
        "Importe": "46.2",
        "ImporteRealConImp": "55",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "55",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "20",
        "Importe": "16.8",
        "ImporteRealConImp": "20",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "20",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "3.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "155",
        "Importe": "130.2",
        "ImporteRealConImp": "155",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "155",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "24.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "75",
        "Importe": "63",
        "ImporteRealConImp": "75",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "75",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "12.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "15",
        "Importe": "12.6",
        "ImporteRealConImp": "15",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "15",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "2.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "50",
        "Importe": "42",
        "ImporteRealConImp": "50",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "50",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "68",
        "Importe": "57.12",
        "ImporteRealConImp": "68",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "68",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "10.88"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "70",
        "Importe": "58.8",
        "ImporteRealConImp": "70",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "70",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "11.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "90",
        "Importe": "75.6",
        "ImporteRealConImp": "90",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "90",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "14.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "60",
        "Importe": "50.4",
        "ImporteRealConImp": "60",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "60",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "9.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "5",
        "Importe": "4.2",
        "ImporteRealConImp": "5",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "5",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "0.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "125",
        "Importe": "105",
        "ImporteRealConImp": "125",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "125",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "20.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "98",
        "Importe": "82.32",
        "ImporteRealConImp": "98",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "98",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "15.68"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "52",
        "Importe": "43.68",
        "ImporteRealConImp": "52",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "52",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.32"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "100",
        "Importe": "84",
        "ImporteRealConImp": "100",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "100",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "16.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "65",
        "Importe": "54.6",
        "ImporteRealConImp": "65",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "65",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "10.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "66",
        "Importe": "55.44",
        "ImporteRealConImp": "66",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "66",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "10.56"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "240",
        "Importe": "201.6",
        "ImporteRealConImp": "240",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "240",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "38.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "310",
        "Importe": "260.4",
        "ImporteRealConImp": "310",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "310",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "49.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "40",
        "Importe": "33.6",
        "ImporteRealConImp": "40",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "40",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "6.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "48",
        "Importe": "40.32",
        "ImporteRealConImp": "48",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "48",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "7.68"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "20",
        "Importe": "16.8",
        "ImporteRealConImp": "20",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "20",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "3.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "30",
        "Importe": "25.2",
        "ImporteRealConImp": "30",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "30",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "4.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "990",
        "Importe": "831.6",
        "ImporteRealConImp": "990",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "990",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "158.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "680",
        "Importe": "571.2",
        "ImporteRealConImp": "680",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "680",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "108.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "15",
        "Importe": "12.6",
        "ImporteRealConImp": "15",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "15",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "2.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "7",
        "Importe": "5.88",
        "ImporteRealConImp": "7",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "7",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "1.12"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "20",
        "Importe": "16.8",
        "ImporteRealConImp": "20",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "20",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "3.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "55",
        "Importe": "46.2",
        "ImporteRealConImp": "55",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "55",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "54",
        "Importe": "45.36",
        "ImporteRealConImp": "54",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "54",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.64"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "50",
        "Importe": "42",
        "ImporteRealConImp": "50",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "50",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "30",
        "Importe": "25.2",
        "ImporteRealConImp": "30",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "30",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "4.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "36",
        "Importe": "30.240000000000002",
        "ImporteRealConImp": "36",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "36",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "5.76"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "95",
        "Importe": "79.8",
        "ImporteRealConImp": "95",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "95",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "15.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "36",
        "Importe": "30.240000000000002",
        "ImporteRealConImp": "36",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "36",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "5.76"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "15",
        "Importe": "12.6",
        "ImporteRealConImp": "15",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "15",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "2.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "15",
        "Importe": "12.6",
        "ImporteRealConImp": "15",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "15",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "2.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "20",
        "Importe": "16.8",
        "ImporteRealConImp": "20",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "20",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "3.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "20",
        "Importe": "16.8",
        "ImporteRealConImp": "20",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "20",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "3.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "5",
        "Importe": "4.2",
        "ImporteRealConImp": "5",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "5",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "0.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "1350",
        "Importe": "1134",
        "ImporteRealConImp": "1350",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "1350",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "216.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "151",
        "Importe": "126.84",
        "ImporteRealConImp": "151",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "151",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "24.16"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "138",
        "Importe": "115.92",
        "ImporteRealConImp": "138",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "138",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "22.08"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "30",
        "Importe": "25.2",
        "ImporteRealConImp": "30",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "30",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "4.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "190",
        "Importe": "159.6",
        "ImporteRealConImp": "190",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "190",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "30.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "105",
        "Importe": "88.2",
        "ImporteRealConImp": "105",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "105",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "16.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "85",
        "Importe": "71.4",
        "ImporteRealConImp": "85",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "85",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "13.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "45",
        "Importe": "37.8",
        "ImporteRealConImp": "45",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "45",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "7.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "75",
        "Importe": "63",
        "ImporteRealConImp": "75",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "75",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "12.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "24",
        "Importe": "20.16",
        "ImporteRealConImp": "24",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "24",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "3.84"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "90",
        "Importe": "75.6",
        "ImporteRealConImp": "90",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "90",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "14.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "233",
        "Importe": "195.72",
        "ImporteRealConImp": "233",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "233",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "37.28"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "6",
        "Importe": "5.04",
        "ImporteRealConImp": "6",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "6",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "0.96"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "100",
        "Importe": "84",
        "ImporteRealConImp": "100",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "100",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "16.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "80",
        "Importe": "67.2",
        "ImporteRealConImp": "80",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "80",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "12.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "152",
        "Importe": "127.68",
        "ImporteRealConImp": "152",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "152",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "24.32"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "70",
        "Importe": "58.8",
        "ImporteRealConImp": "70",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "70",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "11.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "460",
        "Importe": "386.4",
        "ImporteRealConImp": "460",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "460",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "73.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "460",
        "Importe": "386.4",
        "ImporteRealConImp": "460",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "460",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "73.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "135",
        "Importe": "113.4",
        "ImporteRealConImp": "135",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "135",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "21.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "40",
        "Importe": "33.6",
        "ImporteRealConImp": "40",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "40",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "6.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "15",
        "Importe": "12.6",
        "ImporteRealConImp": "15",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "15",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "2.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "138",
        "Importe": "115.92",
        "ImporteRealConImp": "138",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "138",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "22.08"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "325",
        "Importe": "273",
        "ImporteRealConImp": "325",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "325",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "52.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "20",
        "Importe": "16.8",
        "ImporteRealConImp": "20",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "20",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "3.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "12",
        "Importe": "10.08",
        "ImporteRealConImp": "12",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "12",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "1.92"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "80",
        "Importe": "67.2",
        "ImporteRealConImp": "80",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "80",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "12.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "35",
        "Importe": "29.4",
        "ImporteRealConImp": "35",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "35",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "5.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "20",
        "Importe": "16.8",
        "ImporteRealConImp": "20",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "20",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "3.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "378",
        "Importe": "317.52",
        "ImporteRealConImp": "378",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "378",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "60.48"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "80",
        "Importe": "67.2",
        "ImporteRealConImp": "80",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "80",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "12.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "155",
        "Importe": "130.2",
        "ImporteRealConImp": "155",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "155",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "24.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "10",
        "Importe": "8.4",
        "ImporteRealConImp": "10",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "10",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "1.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "125",
        "Importe": "105",
        "ImporteRealConImp": "125",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "125",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "20.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "105",
        "Importe": "88.2",
        "ImporteRealConImp": "105",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "105",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "16.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "50",
        "Importe": "42",
        "ImporteRealConImp": "50",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "50",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "50",
        "Importe": "42",
        "ImporteRealConImp": "50",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "50",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "60",
        "Importe": "50.4",
        "ImporteRealConImp": "60",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "60",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "9.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "55",
        "Importe": "46.2",
        "ImporteRealConImp": "55",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "55",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "35",
        "Importe": "29.4",
        "ImporteRealConImp": "35",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "35",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "5.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "50",
        "Importe": "42",
        "ImporteRealConImp": "50",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "50",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "145",
        "Importe": "121.8",
        "ImporteRealConImp": "145",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "145",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "23.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "70",
        "Importe": "58.8",
        "ImporteRealConImp": "70",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "70",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "11.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "15",
        "Importe": "12.6",
        "ImporteRealConImp": "15",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "15",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "2.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "48",
        "Importe": "40.32",
        "ImporteRealConImp": "48",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "48",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "7.68"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "298",
        "Importe": "250.32",
        "ImporteRealConImp": "298",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "298",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "47.68"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "340",
        "Importe": "285.6",
        "ImporteRealConImp": "340",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "340",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "54.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "36",
        "Importe": "30.240000000000002",
        "ImporteRealConImp": "36",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "36",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "5.76"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "36",
        "Importe": "30.240000000000002",
        "ImporteRealConImp": "36",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "36",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "5.76"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "10",
        "Importe": "8.4",
        "ImporteRealConImp": "10",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "10",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "1.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "15",
        "Importe": "12.6",
        "ImporteRealConImp": "15",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "15",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "2.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "98",
        "Importe": "82.32",
        "ImporteRealConImp": "98",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "98",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "15.68"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "195",
        "Importe": "163.8",
        "ImporteRealConImp": "195",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "195",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "31.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "80",
        "Importe": "67.2",
        "ImporteRealConImp": "80",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "80",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "12.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "20",
        "Importe": "16.8",
        "ImporteRealConImp": "20",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "20",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "3.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "10",
        "Importe": "8.4",
        "ImporteRealConImp": "10",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "10",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "1.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "18",
        "Importe": "15.120000000000001",
        "ImporteRealConImp": "18",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "18",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "2.88"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "220",
        "Importe": "184.8",
        "ImporteRealConImp": "220",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "220",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "35.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "15",
        "Importe": "12.6",
        "ImporteRealConImp": "15",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "15",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "2.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "10",
        "Importe": "8.4",
        "ImporteRealConImp": "10",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "10",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "1.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "10",
        "Importe": "8.4",
        "ImporteRealConImp": "10",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "10",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "1.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "110",
        "Importe": "92.4",
        "ImporteRealConImp": "110",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "110",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "17.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "30",
        "Importe": "25.2",
        "ImporteRealConImp": "30",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "30",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "4.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "90",
        "Importe": "75.6",
        "ImporteRealConImp": "90",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "90",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "14.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "7",
        "Importe": "5.88",
        "ImporteRealConImp": "7",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "7",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "1.12"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "12",
        "Importe": "10.08",
        "ImporteRealConImp": "12",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "12",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "1.92"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "225",
        "Importe": "189",
        "ImporteRealConImp": "225",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "225",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "36.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "2629",
        "Importe": "2208.36",
        "ImporteRealConImp": "2629",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "2629",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "420.64"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "75",
        "Importe": "63",
        "ImporteRealConImp": "75",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "75",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "12.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "50",
        "Importe": "42",
        "ImporteRealConImp": "50",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "50",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "54",
        "Importe": "45.36",
        "ImporteRealConImp": "54",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "54",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.64"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "180",
        "Importe": "151.2",
        "ImporteRealConImp": "180",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "180",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "28.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "170",
        "Importe": "142.8",
        "ImporteRealConImp": "170",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "170",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "27.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "50",
        "Importe": "42",
        "ImporteRealConImp": "50",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "50",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "310",
        "Importe": "260.4",
        "ImporteRealConImp": "310",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "310",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "49.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "135",
        "Importe": "113.4",
        "ImporteRealConImp": "135",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "135",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "21.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "45",
        "Importe": "37.8",
        "ImporteRealConImp": "45",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "45",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "7.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "160",
        "Importe": "134.4",
        "ImporteRealConImp": "160",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "160",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "25.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "180",
        "Importe": "151.2",
        "ImporteRealConImp": "180",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "180",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "28.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "12",
        "Importe": "10.08",
        "ImporteRealConImp": "12",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "12",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "1.92"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "60",
        "Importe": "50.4",
        "ImporteRealConImp": "60",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "60",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "9.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "180",
        "Importe": "151.2",
        "ImporteRealConImp": "180",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "180",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "28.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "125",
        "Importe": "105",
        "ImporteRealConImp": "125",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "125",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "20.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "175",
        "Importe": "147",
        "ImporteRealConImp": "175",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "175",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "28.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "80",
        "Importe": "67.2",
        "ImporteRealConImp": "80",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "80",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "12.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "45",
        "Importe": "37.8",
        "ImporteRealConImp": "45",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "45",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "7.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "110",
        "Importe": "92.4",
        "ImporteRealConImp": "110",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "110",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "17.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "130",
        "Importe": "109.2",
        "ImporteRealConImp": "130",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "130",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "20.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "75",
        "Importe": "63",
        "ImporteRealConImp": "75",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "75",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "12.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "1250",
        "Importe": "1050",
        "ImporteRealConImp": "1250",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "1250",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "200.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "160",
        "Importe": "134.4",
        "ImporteRealConImp": "160",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "160",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "25.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "65",
        "Importe": "54.6",
        "ImporteRealConImp": "65",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "65",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "10.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "75",
        "Importe": "63",
        "ImporteRealConImp": "75",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "75",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "12.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "30",
        "Importe": "25.2",
        "ImporteRealConImp": "30",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "30",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "4.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "20",
        "Importe": "16.8",
        "ImporteRealConImp": "20",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "20",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "3.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "70",
        "Importe": "58.8",
        "ImporteRealConImp": "70",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "70",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "11.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "90",
        "Importe": "75.6",
        "ImporteRealConImp": "90",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "90",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "14.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "90",
        "Importe": "75.6",
        "ImporteRealConImp": "90",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "90",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "14.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "55",
        "Importe": "46.2",
        "ImporteRealConImp": "55",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "55",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "260",
        "Importe": "218.4",
        "ImporteRealConImp": "260",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "260",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "41.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "260",
        "Importe": "218.4",
        "ImporteRealConImp": "260",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "260",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "41.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "60",
        "Importe": "50.4",
        "ImporteRealConImp": "60",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "60",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "9.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "60",
        "Importe": "50.4",
        "ImporteRealConImp": "60",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "60",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "9.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "20",
        "Importe": "16.8",
        "ImporteRealConImp": "20",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "20",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "3.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "290",
        "Importe": "243.6",
        "ImporteRealConImp": "290",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "290",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "46.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "715",
        "Importe": "600.6",
        "ImporteRealConImp": "715",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "715",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "114.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "585",
        "Importe": "491.4",
        "ImporteRealConImp": "585",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "585",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "93.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "60",
        "Importe": "50.4",
        "ImporteRealConImp": "60",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "60",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "9.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "20",
        "Importe": "16.8",
        "ImporteRealConImp": "20",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "20",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "3.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "30",
        "Importe": "25.2",
        "ImporteRealConImp": "30",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "30",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "4.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "85",
        "Importe": "71.4",
        "ImporteRealConImp": "85",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "85",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "13.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "225",
        "Importe": "189",
        "ImporteRealConImp": "225",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "225",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "36.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "52",
        "Importe": "43.68",
        "ImporteRealConImp": "52",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "52",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.32"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "75",
        "Importe": "63",
        "ImporteRealConImp": "75",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "75",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "12.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "25",
        "Importe": "21",
        "ImporteRealConImp": "25",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "25",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "4.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "100",
        "Importe": "84",
        "ImporteRealConImp": "100",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "100",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "16.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "50",
        "Importe": "42",
        "ImporteRealConImp": "50",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "50",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "70",
        "Importe": "58.8",
        "ImporteRealConImp": "70",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "70",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "11.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "20",
        "Importe": "16.8",
        "ImporteRealConImp": "20",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "20",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "3.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "90",
        "Importe": "75.6",
        "ImporteRealConImp": "90",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "90",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "14.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "60",
        "Importe": "50.4",
        "ImporteRealConImp": "60",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "60",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "9.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "66",
        "Importe": "55.44",
        "ImporteRealConImp": "66",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "66",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "10.56"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "6",
        "Importe": "5.04",
        "ImporteRealConImp": "6",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "6",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "0.96"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "6",
        "Importe": "5.04",
        "ImporteRealConImp": "6",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "6",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "0.96"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "15",
        "Importe": "12.6",
        "ImporteRealConImp": "15",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "15",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "2.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "18",
        "Importe": "15.120000000000001",
        "ImporteRealConImp": "18",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "18",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "2.88"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "110",
        "Importe": "92.4",
        "ImporteRealConImp": "110",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "110",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "17.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "75",
        "Importe": "63",
        "ImporteRealConImp": "75",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "75",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "12.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "95",
        "Importe": "79.8",
        "ImporteRealConImp": "95",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "95",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "15.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "20",
        "Importe": "16.8",
        "ImporteRealConImp": "20",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "20",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "3.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "318",
        "Importe": "267.12",
        "ImporteRealConImp": "318",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "318",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "50.88"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "30",
        "Importe": "25.2",
        "ImporteRealConImp": "30",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "30",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "4.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "50",
        "Importe": "42",
        "ImporteRealConImp": "50",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "50",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "125",
        "Importe": "105",
        "ImporteRealConImp": "125",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "125",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "20.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "12",
        "Importe": "10.08",
        "ImporteRealConImp": "12",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "12",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "1.92"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "75",
        "Importe": "63",
        "ImporteRealConImp": "75",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "75",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "12.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "75",
        "Importe": "63",
        "ImporteRealConImp": "75",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "75",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "12.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "120",
        "Importe": "100.8",
        "ImporteRealConImp": "120",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "120",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "19.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "90",
        "Importe": "75.6",
        "ImporteRealConImp": "90",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "90",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "14.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "40",
        "Importe": "33.6",
        "ImporteRealConImp": "40",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "40",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "6.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "200",
        "Importe": "168",
        "ImporteRealConImp": "200",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "200",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "32.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "30",
        "Importe": "25.2",
        "ImporteRealConImp": "30",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "30",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "4.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "55",
        "Importe": "46.2",
        "ImporteRealConImp": "55",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "55",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "30",
        "Importe": "25.2",
        "ImporteRealConImp": "30",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "30",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "4.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "10",
        "Importe": "8.4",
        "ImporteRealConImp": "10",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "10",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "1.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "152",
        "Importe": "127.68",
        "ImporteRealConImp": "152",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "152",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "24.32"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "45",
        "Importe": "37.8",
        "ImporteRealConImp": "45",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "45",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "7.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "936",
        "Importe": "786.24",
        "ImporteRealConImp": "936",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "936",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "149.76"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "220",
        "Importe": "184.8",
        "ImporteRealConImp": "220",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "220",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "35.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "70",
        "Importe": "58.8",
        "ImporteRealConImp": "70",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "70",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "11.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "28",
        "Importe": "23.52",
        "ImporteRealConImp": "28",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "28",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "4.48"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "30",
        "Importe": "25.2",
        "ImporteRealConImp": "30",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "30",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "4.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "75",
        "Importe": "63",
        "ImporteRealConImp": "75",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "75",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "12.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "50",
        "Importe": "42",
        "ImporteRealConImp": "50",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "50",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "50",
        "Importe": "42",
        "ImporteRealConImp": "50",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "50",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "120",
        "Importe": "100.8",
        "ImporteRealConImp": "120",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "120",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "19.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "65",
        "Importe": "54.6",
        "ImporteRealConImp": "65",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "65",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "10.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "50",
        "Importe": "42",
        "ImporteRealConImp": "50",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "50",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "115",
        "Importe": "96.6",
        "ImporteRealConImp": "115",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "115",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "18.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "35",
        "Importe": "29.4",
        "ImporteRealConImp": "35",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "35",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "5.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "75",
        "Importe": "63",
        "ImporteRealConImp": "75",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "75",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "12.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "36",
        "Importe": "30.240000000000002",
        "ImporteRealConImp": "36",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "36",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "5.76"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "5",
        "Importe": "4.2",
        "ImporteRealConImp": "5",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "5",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "0.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "10",
        "Importe": "8.4",
        "ImporteRealConImp": "10",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "10",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "1.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "80",
        "Importe": "67.2",
        "ImporteRealConImp": "80",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "80",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "12.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "360",
        "Importe": "302.4",
        "ImporteRealConImp": "360",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "360",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "57.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "7",
        "Importe": "5.88",
        "ImporteRealConImp": "7",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "7",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "1.12"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "15",
        "Importe": "12.6",
        "ImporteRealConImp": "15",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "15",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "2.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "440",
        "Importe": "369.6",
        "ImporteRealConImp": "440",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "440",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "70.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "40",
        "Importe": "33.6",
        "ImporteRealConImp": "40",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "40",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "6.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "36",
        "Importe": "30.240000000000002",
        "ImporteRealConImp": "36",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "36",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "5.76"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "215",
        "Importe": "180.6",
        "ImporteRealConImp": "215",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "215",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "34.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "60",
        "Importe": "50.4",
        "ImporteRealConImp": "60",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "60",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "9.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "140",
        "Importe": "117.6",
        "ImporteRealConImp": "140",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "140",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "22.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "45",
        "Importe": "37.8",
        "ImporteRealConImp": "45",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "45",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "7.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "45",
        "Importe": "37.8",
        "ImporteRealConImp": "45",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "45",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "7.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "25",
        "Importe": "21",
        "ImporteRealConImp": "25",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "25",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "4.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "35",
        "Importe": "29.4",
        "ImporteRealConImp": "35",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "35",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "5.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "20",
        "Importe": "16.8",
        "ImporteRealConImp": "20",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "20",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "3.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "24",
        "Importe": "20.16",
        "ImporteRealConImp": "24",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "24",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "3.84"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "72",
        "Importe": "60.480000000000004",
        "ImporteRealConImp": "72",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "72",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "11.52"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "72",
        "Importe": "60.480000000000004",
        "ImporteRealConImp": "72",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "72",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "11.52"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "300",
        "Importe": "252",
        "ImporteRealConImp": "300",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "300",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "48.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "214",
        "Importe": "179.76",
        "ImporteRealConImp": "214",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "214",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "34.24"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "70",
        "Importe": "58.8",
        "ImporteRealConImp": "70",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "70",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "11.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "75",
        "Importe": "63",
        "ImporteRealConImp": "75",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "75",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "12.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "200",
        "Importe": "168",
        "ImporteRealConImp": "200",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "200",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "32.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "67",
        "Importe": "56.28",
        "ImporteRealConImp": "67",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "67",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "10.72"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "64",
        "Importe": "53.76",
        "ImporteRealConImp": "64",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "64",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "10.24"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "35",
        "Importe": "29.4",
        "ImporteRealConImp": "35",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "35",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "5.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "48",
        "Importe": "40.32",
        "ImporteRealConImp": "48",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "48",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "7.68"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "160",
        "Importe": "134.4",
        "ImporteRealConImp": "160",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "160",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "25.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "48",
        "Importe": "40.32",
        "ImporteRealConImp": "48",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "48",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "7.68"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "40",
        "Importe": "33.6",
        "ImporteRealConImp": "40",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "40",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "6.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "50",
        "Importe": "42",
        "ImporteRealConImp": "50",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "50",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "60",
        "Importe": "50.4",
        "ImporteRealConImp": "60",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "60",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "9.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "50",
        "Importe": "42",
        "ImporteRealConImp": "50",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "50",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "50",
        "Importe": "42",
        "ImporteRealConImp": "50",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "50",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "45",
        "Importe": "37.8",
        "ImporteRealConImp": "45",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "45",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "7.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "45",
        "Importe": "37.8",
        "ImporteRealConImp": "45",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "45",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "7.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "85",
        "Importe": "71.4",
        "ImporteRealConImp": "85",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "85",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "13.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "345",
        "Importe": "289.8",
        "ImporteRealConImp": "345",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "345",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "55.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "20",
        "Importe": "16.8",
        "ImporteRealConImp": "20",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "20",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "3.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "100",
        "Importe": "84",
        "ImporteRealConImp": "100",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "100",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "16.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "122",
        "Importe": "102.48",
        "ImporteRealConImp": "122",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "122",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "19.52"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "25",
        "Importe": "21",
        "ImporteRealConImp": "25",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "25",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "4.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "30",
        "Importe": "25.2",
        "ImporteRealConImp": "30",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "30",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "4.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "95",
        "Importe": "79.8",
        "ImporteRealConImp": "95",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "95",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "15.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "70",
        "Importe": "58.8",
        "ImporteRealConImp": "70",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "70",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "11.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "125",
        "Importe": "105",
        "ImporteRealConImp": "125",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "125",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "20.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "30",
        "Importe": "25.2",
        "ImporteRealConImp": "30",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "30",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "4.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "240",
        "Importe": "201.6",
        "ImporteRealConImp": "240",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "240",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "38.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "2250",
        "Importe": "1890",
        "ImporteRealConImp": "2250",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "2250",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "360.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "150",
        "Importe": "126",
        "ImporteRealConImp": "150",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "150",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "24.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "230",
        "Importe": "193.2",
        "ImporteRealConImp": "230",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "230",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "36.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "150",
        "Importe": "126",
        "ImporteRealConImp": "150",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "150",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "24.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "16",
        "Importe": "13.44",
        "ImporteRealConImp": "16",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "16",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "2.56"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "14",
        "Importe": "11.76",
        "ImporteRealConImp": "14",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "14",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "2.24"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "30",
        "Importe": "25.2",
        "ImporteRealConImp": "30",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "30",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "4.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "150",
        "Importe": "126",
        "ImporteRealConImp": "150",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "150",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "24.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "20",
        "Importe": "16.8",
        "ImporteRealConImp": "20",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "20",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "3.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "35",
        "Importe": "29.4",
        "ImporteRealConImp": "35",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "35",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "5.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "15",
        "Importe": "12.6",
        "ImporteRealConImp": "15",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "15",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "2.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "2100",
        "Importe": "1764",
        "ImporteRealConImp": "2100",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "2100",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "336.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "50",
        "Importe": "42",
        "ImporteRealConImp": "50",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "50",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "1500",
        "Importe": "1260",
        "ImporteRealConImp": "1500",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "1500",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "240.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "50",
        "Importe": "42",
        "ImporteRealConImp": "50",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "50",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "240",
        "Importe": "201.6",
        "ImporteRealConImp": "240",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "240",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "38.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "130",
        "Importe": "109.2",
        "ImporteRealConImp": "130",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "130",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "20.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "250",
        "Importe": "210",
        "ImporteRealConImp": "250",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "250",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "40.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "135",
        "Importe": "113.4",
        "ImporteRealConImp": "135",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "135",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "21.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "20",
        "Importe": "16.8",
        "ImporteRealConImp": "20",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "20",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "3.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "75",
        "Importe": "63",
        "ImporteRealConImp": "75",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "75",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "12.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "5",
        "Importe": "4.2",
        "ImporteRealConImp": "5",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "5",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "0.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "125",
        "Importe": "105",
        "ImporteRealConImp": "125",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "125",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "20.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "410",
        "Importe": "344.4",
        "ImporteRealConImp": "410",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "410",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "65.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "25",
        "Importe": "21",
        "ImporteRealConImp": "25",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "25",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "4.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "98",
        "Importe": "82.32",
        "ImporteRealConImp": "98",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "98",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "15.68"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "98",
        "Importe": "82.32",
        "ImporteRealConImp": "98",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "98",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "15.68"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "120",
        "Importe": "100.8",
        "ImporteRealConImp": "120",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "120",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "19.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "585",
        "Importe": "491.4",
        "ImporteRealConImp": "585",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "585",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "93.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "260",
        "Importe": "218.4",
        "ImporteRealConImp": "260",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "260",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "41.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "170",
        "Importe": "142.8",
        "ImporteRealConImp": "170",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "170",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "27.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "645",
        "Importe": "541.8",
        "ImporteRealConImp": "645",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "645",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "103.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "125",
        "Importe": "105",
        "ImporteRealConImp": "125",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "125",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "20.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "35",
        "Importe": "29.4",
        "ImporteRealConImp": "35",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "35",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "5.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "15",
        "Importe": "12.6",
        "ImporteRealConImp": "15",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "15",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "2.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "50",
        "Importe": "42",
        "ImporteRealConImp": "50",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "50",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "20",
        "Importe": "16.8",
        "ImporteRealConImp": "20",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "20",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "3.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "70",
        "Importe": "58.8",
        "ImporteRealConImp": "70",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "70",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "11.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "450",
        "Importe": "378",
        "ImporteRealConImp": "450",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "450",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "72.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "7000",
        "Importe": "5880",
        "ImporteRealConImp": "7000",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "7000",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "1120.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "2250",
        "Importe": "1890",
        "ImporteRealConImp": "2250",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "2250",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "360.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "3550",
        "Importe": "2982",
        "ImporteRealConImp": "3550",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "3550",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "568.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "210",
        "Importe": "176.4",
        "ImporteRealConImp": "210",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "210",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "33.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "170",
        "Importe": "142.8",
        "ImporteRealConImp": "170",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "170",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "27.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "30",
        "Importe": "25.2",
        "ImporteRealConImp": "30",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "30",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "4.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "145",
        "Importe": "121.8",
        "ImporteRealConImp": "145",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "145",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "23.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "50",
        "Importe": "42",
        "ImporteRealConImp": "50",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "50",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "130",
        "Importe": "109.2",
        "ImporteRealConImp": "130",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "130",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "20.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "98",
        "Importe": "82.32",
        "ImporteRealConImp": "98",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "98",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "15.68"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "90",
        "Importe": "75.6",
        "ImporteRealConImp": "90",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "90",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "14.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "90",
        "Importe": "75.6",
        "ImporteRealConImp": "90",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "90",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "14.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "90",
        "Importe": "75.6",
        "ImporteRealConImp": "90",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "90",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "14.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "150",
        "Importe": "126",
        "ImporteRealConImp": "150",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "150",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "24.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "7",
        "Importe": "5.88",
        "ImporteRealConImp": "7",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "7",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "1.12"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "125",
        "Importe": "105",
        "ImporteRealConImp": "125",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "125",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "20.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "125",
        "Importe": "105",
        "ImporteRealConImp": "125",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "125",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "20.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "48",
        "Importe": "40.32",
        "ImporteRealConImp": "48",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "48",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "7.68"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "110",
        "Importe": "92.4",
        "ImporteRealConImp": "110",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "110",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "17.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "450",
        "Importe": "378",
        "ImporteRealConImp": "450",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "450",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "72.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "90",
        "Importe": "75.6",
        "ImporteRealConImp": "90",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "90",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "14.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "135",
        "Importe": "113.4",
        "ImporteRealConImp": "135",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "135",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "21.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "15",
        "Importe": "12.6",
        "ImporteRealConImp": "15",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "15",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "2.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "240",
        "Importe": "201.6",
        "ImporteRealConImp": "240",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "240",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "38.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "110",
        "Importe": "92.4",
        "ImporteRealConImp": "110",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "110",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "17.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "735",
        "Importe": "617.4",
        "ImporteRealConImp": "735",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "735",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "117.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "400",
        "Importe": "336",
        "ImporteRealConImp": "400",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "400",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "64.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "120",
        "Importe": "100.8",
        "ImporteRealConImp": "120",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "120",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "19.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "50",
        "Importe": "42",
        "ImporteRealConImp": "50",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "50",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "530",
        "Importe": "445.2",
        "ImporteRealConImp": "530",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "530",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "84.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "80",
        "Importe": "67.2",
        "ImporteRealConImp": "80",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "80",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "12.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "90",
        "Importe": "75.6",
        "ImporteRealConImp": "90",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "90",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "14.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "105",
        "Importe": "88.2",
        "ImporteRealConImp": "105",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "105",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "16.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "85",
        "Importe": "71.4",
        "ImporteRealConImp": "85",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "85",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "13.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "15",
        "Importe": "12.6",
        "ImporteRealConImp": "15",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "15",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "2.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "110",
        "Importe": "92.4",
        "ImporteRealConImp": "110",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "110",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "17.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "90",
        "Importe": "75.6",
        "ImporteRealConImp": "90",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "90",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "14.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "90",
        "Importe": "75.6",
        "ImporteRealConImp": "90",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "90",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "14.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "90",
        "Importe": "75.6",
        "ImporteRealConImp": "90",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "90",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "14.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "130",
        "Importe": "109.2",
        "ImporteRealConImp": "130",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "130",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "20.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "50",
        "Importe": "42",
        "ImporteRealConImp": "50",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "50",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "785",
        "Importe": "659.4",
        "ImporteRealConImp": "785",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "785",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "125.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "350",
        "Importe": "294",
        "ImporteRealConImp": "350",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "350",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "56.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "340",
        "Importe": "285.6",
        "ImporteRealConImp": "340",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "340",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "54.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "455",
        "Importe": "382.2",
        "ImporteRealConImp": "455",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "455",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "72.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "250",
        "Importe": "210",
        "ImporteRealConImp": "250",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "250",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "40.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "200",
        "Importe": "168",
        "ImporteRealConImp": "200",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "200",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "32.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "25",
        "Importe": "21",
        "ImporteRealConImp": "25",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "25",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "4.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "50",
        "Importe": "42",
        "ImporteRealConImp": "50",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "50",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "225",
        "Importe": "189",
        "ImporteRealConImp": "225",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "225",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "36.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "160",
        "Importe": "134.4",
        "ImporteRealConImp": "160",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "160",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "25.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "30",
        "Importe": "25.2",
        "ImporteRealConImp": "30",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "30",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "4.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "110",
        "Importe": "92.4",
        "ImporteRealConImp": "110",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "110",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "17.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "16",
        "Importe": "13.44",
        "ImporteRealConImp": "16",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "16",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "2.56"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "603",
        "Importe": "506.52",
        "ImporteRealConImp": "603",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "603",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "96.48"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "50",
        "Importe": "42",
        "ImporteRealConImp": "50",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "50",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "86",
        "Importe": "72.24",
        "ImporteRealConImp": "86",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "86",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "13.76"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "20",
        "Importe": "16.8",
        "ImporteRealConImp": "20",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "20",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "3.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "110",
        "Importe": "92.4",
        "ImporteRealConImp": "110",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "110",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "17.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "85",
        "Importe": "71.4",
        "ImporteRealConImp": "85",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "85",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "13.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "775",
        "Importe": "651",
        "ImporteRealConImp": "775",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "775",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "124.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "75",
        "Importe": "63",
        "ImporteRealConImp": "75",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "75",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "12.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "50",
        "Importe": "42",
        "ImporteRealConImp": "50",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "50",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "7",
        "Importe": "5.88",
        "ImporteRealConImp": "7",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "7",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "1.12"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "70",
        "Importe": "58.8",
        "ImporteRealConImp": "70",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "70",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "11.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "950",
        "Importe": "798",
        "ImporteRealConImp": "950",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "950",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "152.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "210",
        "Importe": "176.4",
        "ImporteRealConImp": "210",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "210",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "33.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "115",
        "Importe": "96.6",
        "ImporteRealConImp": "115",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "115",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "18.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "80",
        "Importe": "67.2",
        "ImporteRealConImp": "80",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "80",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "12.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "1355",
        "Importe": "1138.2",
        "ImporteRealConImp": "1355",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "1355",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "216.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "24",
        "Importe": "20.16",
        "ImporteRealConImp": "24",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "24",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "3.84"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "140",
        "Importe": "117.6",
        "ImporteRealConImp": "140",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "140",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "22.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "140",
        "Importe": "117.6",
        "ImporteRealConImp": "140",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "140",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "22.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "135",
        "Importe": "113.4",
        "ImporteRealConImp": "135",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "135",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "21.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "55",
        "Importe": "46.2",
        "ImporteRealConImp": "55",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "55",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "220",
        "Importe": "184.8",
        "ImporteRealConImp": "220",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "220",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "35.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "150",
        "Importe": "126",
        "ImporteRealConImp": "150",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "150",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "24.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "30",
        "Importe": "25.2",
        "ImporteRealConImp": "30",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "30",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "4.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "340",
        "Importe": "285.6",
        "ImporteRealConImp": "340",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "340",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "54.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "50",
        "Importe": "42",
        "ImporteRealConImp": "50",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "50",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "48",
        "Importe": "40.32",
        "ImporteRealConImp": "48",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "48",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "7.68"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "750",
        "Importe": "630",
        "ImporteRealConImp": "750",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "750",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "120.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "25",
        "Importe": "21",
        "ImporteRealConImp": "25",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "25",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "4.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "110",
        "Importe": "92.4",
        "ImporteRealConImp": "110",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "110",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "17.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "108",
        "Importe": "90.72",
        "ImporteRealConImp": "108",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "108",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "17.28"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "155",
        "Importe": "130.2",
        "ImporteRealConImp": "155",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "155",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "24.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "95",
        "Importe": "79.8",
        "ImporteRealConImp": "95",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "95",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "15.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "50",
        "Importe": "42",
        "ImporteRealConImp": "50",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "50",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "8",
        "Importe": "6.72",
        "ImporteRealConImp": "8",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "8",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "1.28"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "14",
        "Importe": "11.76",
        "ImporteRealConImp": "14",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "14",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "2.24"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "40",
        "Importe": "33.6",
        "ImporteRealConImp": "40",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "40",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "6.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "235",
        "Importe": "197.4",
        "ImporteRealConImp": "235",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "235",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "37.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "100",
        "Importe": "84",
        "ImporteRealConImp": "100",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "100",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "16.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "120",
        "Importe": "100.8",
        "ImporteRealConImp": "120",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "120",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "19.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "270",
        "Importe": "226.8",
        "ImporteRealConImp": "270",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "270",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "43.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "190",
        "Importe": "159.6",
        "ImporteRealConImp": "190",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "190",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "30.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "70",
        "Importe": "58.8",
        "ImporteRealConImp": "70",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "70",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "11.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "50",
        "Importe": "42",
        "ImporteRealConImp": "50",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "50",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "50",
        "Importe": "42",
        "ImporteRealConImp": "50",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "50",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "190",
        "Importe": "159.6",
        "ImporteRealConImp": "190",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "190",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "30.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "25",
        "Importe": "21",
        "ImporteRealConImp": "25",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "25",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "4.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "180",
        "Importe": "151.2",
        "ImporteRealConImp": "180",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "180",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "28.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "120",
        "Importe": "100.8",
        "ImporteRealConImp": "120",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "120",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "19.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "70",
        "Importe": "58.8",
        "ImporteRealConImp": "70",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "70",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "11.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "235",
        "Importe": "197.4",
        "ImporteRealConImp": "235",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "235",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "37.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "105",
        "Importe": "88.2",
        "ImporteRealConImp": "105",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "105",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "16.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "5",
        "Importe": "4.2",
        "ImporteRealConImp": "5",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "5",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "0.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "525",
        "Importe": "441",
        "ImporteRealConImp": "525",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "525",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "84.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "170",
        "Importe": "142.8",
        "ImporteRealConImp": "170",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "170",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "27.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "160",
        "Importe": "134.4",
        "ImporteRealConImp": "160",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "160",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "25.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "75",
        "Importe": "63",
        "ImporteRealConImp": "75",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "75",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "12.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "100",
        "Importe": "84",
        "ImporteRealConImp": "100",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "100",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "16.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "250",
        "Importe": "210",
        "ImporteRealConImp": "250",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "250",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "40.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "42",
        "Importe": "35.28",
        "ImporteRealConImp": "42",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "42",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "6.72"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "180",
        "Importe": "151.2",
        "ImporteRealConImp": "180",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "180",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "28.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "45",
        "Importe": "37.8",
        "ImporteRealConImp": "45",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "45",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "7.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "180",
        "Importe": "151.2",
        "ImporteRealConImp": "180",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "180",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "28.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "79",
        "Importe": "66.36",
        "ImporteRealConImp": "79",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "79",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "12.64"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "120",
        "Importe": "100.8",
        "ImporteRealConImp": "120",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "120",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "19.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "390",
        "Importe": "327.6",
        "ImporteRealConImp": "390",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "390",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "62.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "285",
        "Importe": "239.4",
        "ImporteRealConImp": "285",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "285",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "45.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "7",
        "Importe": "5.88",
        "ImporteRealConImp": "7",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "7",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "1.12"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "150",
        "Importe": "126",
        "ImporteRealConImp": "150",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "150",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "24.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "170",
        "Importe": "142.8",
        "ImporteRealConImp": "170",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "170",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "27.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "98",
        "Importe": "82.32",
        "ImporteRealConImp": "98",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "98",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "15.68"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "15",
        "Importe": "12.6",
        "ImporteRealConImp": "15",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "15",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "2.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "265",
        "Importe": "222.6",
        "ImporteRealConImp": "265",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "265",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "42.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "80",
        "Importe": "67.2",
        "ImporteRealConImp": "80",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "80",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "12.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "75",
        "Importe": "63",
        "ImporteRealConImp": "75",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "75",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "12.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "25",
        "Importe": "21",
        "ImporteRealConImp": "25",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "25",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "4.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "100",
        "Importe": "84",
        "ImporteRealConImp": "100",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "100",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "16.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "500",
        "Importe": "420",
        "ImporteRealConImp": "500",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "500",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "80.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "330",
        "Importe": "277.2",
        "ImporteRealConImp": "330",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "330",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "52.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "24",
        "Importe": "20.16",
        "ImporteRealConImp": "24",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "24",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "3.84"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "70",
        "Importe": "58.8",
        "ImporteRealConImp": "70",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "70",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "11.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "85",
        "Importe": "71.4",
        "ImporteRealConImp": "85",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "85",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "13.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "65",
        "Importe": "54.6",
        "ImporteRealConImp": "65",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "65",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "10.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "50",
        "Importe": "42",
        "ImporteRealConImp": "50",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "50",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "19",
        "Importe": "15.96",
        "ImporteRealConImp": "19",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "19",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "3.04"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "190",
        "Importe": "159.6",
        "ImporteRealConImp": "190",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "190",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "30.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "8",
        "Importe": "6.72",
        "ImporteRealConImp": "8",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "8",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "1.28"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "35",
        "Importe": "29.4",
        "ImporteRealConImp": "35",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "35",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "5.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "80",
        "Importe": "67.2",
        "ImporteRealConImp": "80",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "80",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "12.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "80",
        "Importe": "67.2",
        "ImporteRealConImp": "80",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "80",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "12.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "890",
        "Importe": "747.6",
        "ImporteRealConImp": "890",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "890",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "142.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "60",
        "Importe": "50.4",
        "ImporteRealConImp": "60",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "60",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "9.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "40",
        "Importe": "33.6",
        "ImporteRealConImp": "40",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "40",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "6.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "30",
        "Importe": "25.2",
        "ImporteRealConImp": "30",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "30",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "4.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "150",
        "Importe": "126",
        "ImporteRealConImp": "150",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "150",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "24.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "55",
        "Importe": "46.2",
        "ImporteRealConImp": "55",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "55",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "32",
        "Importe": "26.88",
        "ImporteRealConImp": "32",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "32",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "5.12"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "16",
        "Importe": "13.44",
        "ImporteRealConImp": "16",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "16",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "2.56"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "80",
        "Importe": "67.2",
        "ImporteRealConImp": "80",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "80",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "12.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "50",
        "Importe": "42",
        "ImporteRealConImp": "50",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "50",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "25",
        "Importe": "21",
        "ImporteRealConImp": "25",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "25",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "4.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "40",
        "Importe": "33.6",
        "ImporteRealConImp": "40",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "40",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "6.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "30",
        "Importe": "25.2",
        "ImporteRealConImp": "30",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "30",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "4.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "20",
        "Importe": "16.8",
        "ImporteRealConImp": "20",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "20",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "3.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "65",
        "Importe": "54.6",
        "ImporteRealConImp": "65",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "65",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "10.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "45",
        "Importe": "37.8",
        "ImporteRealConImp": "45",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "45",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "7.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "70",
        "Importe": "58.8",
        "ImporteRealConImp": "70",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "70",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "11.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "290",
        "Importe": "243.6",
        "ImporteRealConImp": "290",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "290",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "46.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "50",
        "Importe": "42",
        "ImporteRealConImp": "50",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "50",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "35",
        "Importe": "29.4",
        "ImporteRealConImp": "35",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "35",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "5.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "55",
        "Importe": "46.2",
        "ImporteRealConImp": "55",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "55",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "250",
        "Importe": "210",
        "ImporteRealConImp": "250",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "250",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "40.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "250",
        "Importe": "210",
        "ImporteRealConImp": "250",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "250",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "40.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "70",
        "Importe": "58.8",
        "ImporteRealConImp": "70",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "70",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "11.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "120",
        "Importe": "100.8",
        "ImporteRealConImp": "120",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "120",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "19.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "80",
        "Importe": "67.2",
        "ImporteRealConImp": "80",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "80",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "12.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "25",
        "Importe": "21",
        "ImporteRealConImp": "25",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "25",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "4.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "190",
        "Importe": "159.6",
        "ImporteRealConImp": "190",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "190",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "30.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "50",
        "Importe": "42",
        "ImporteRealConImp": "50",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "50",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "120",
        "Importe": "100.8",
        "ImporteRealConImp": "120",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "120",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "19.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "30",
        "Importe": "25.2",
        "ImporteRealConImp": "30",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "30",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "4.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "20",
        "Importe": "16.8",
        "ImporteRealConImp": "20",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "20",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "3.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "595",
        "Importe": "499.8",
        "ImporteRealConImp": "595",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "595",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "95.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "250",
        "Importe": "210",
        "ImporteRealConImp": "250",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "250",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "40.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "55",
        "Importe": "46.2",
        "ImporteRealConImp": "55",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "55",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "220",
        "Importe": "184.8",
        "ImporteRealConImp": "220",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "220",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "35.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "90",
        "Importe": "75.6",
        "ImporteRealConImp": "90",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "90",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "14.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "35",
        "Importe": "29.4",
        "ImporteRealConImp": "35",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "35",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "5.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "50",
        "Importe": "42",
        "ImporteRealConImp": "50",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "50",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "52",
        "Importe": "43.68",
        "ImporteRealConImp": "52",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "52",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.32"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "125",
        "Importe": "105",
        "ImporteRealConImp": "125",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "125",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "20.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "60",
        "Importe": "50.4",
        "ImporteRealConImp": "60",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "60",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "9.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "60",
        "Importe": "50.4",
        "ImporteRealConImp": "60",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "60",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "9.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "65",
        "Importe": "54.6",
        "ImporteRealConImp": "65",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "65",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "10.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "135",
        "Importe": "113.4",
        "ImporteRealConImp": "135",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "135",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "21.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "6",
        "Importe": "5.04",
        "ImporteRealConImp": "6",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "6",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "0.96"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "45",
        "Importe": "37.8",
        "ImporteRealConImp": "45",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "45",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "7.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "115",
        "Importe": "96.6",
        "ImporteRealConImp": "115",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "115",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "18.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "54",
        "Importe": "45.36",
        "ImporteRealConImp": "54",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "54",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.64"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "65",
        "Importe": "54.6",
        "ImporteRealConImp": "65",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "65",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "10.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "98",
        "Importe": "82.32",
        "ImporteRealConImp": "98",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "98",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "15.68"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "125",
        "Importe": "105",
        "ImporteRealConImp": "125",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "125",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "20.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "45",
        "Importe": "37.8",
        "ImporteRealConImp": "45",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "45",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "7.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "165",
        "Importe": "138.6",
        "ImporteRealConImp": "165",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "165",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "26.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "500",
        "Importe": "420",
        "ImporteRealConImp": "500",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "500",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "80.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "385",
        "Importe": "323.4",
        "ImporteRealConImp": "385",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "385",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "61.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "35",
        "Importe": "29.4",
        "ImporteRealConImp": "35",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "35",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "5.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "160",
        "Importe": "134.4",
        "ImporteRealConImp": "160",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "160",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "25.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "12",
        "Importe": "10.08",
        "ImporteRealConImp": "12",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "12",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "1.92"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "188",
        "Importe": "157.92",
        "ImporteRealConImp": "188",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "188",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "30.08"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "108",
        "Importe": "90.72",
        "ImporteRealConImp": "108",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "108",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "17.28"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "135",
        "Importe": "113.4",
        "ImporteRealConImp": "135",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "135",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "21.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "115",
        "Importe": "96.6",
        "ImporteRealConImp": "115",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "115",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "18.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "75",
        "Importe": "63",
        "ImporteRealConImp": "75",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "75",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "12.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "50",
        "Importe": "42",
        "ImporteRealConImp": "50",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "50",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "135",
        "Importe": "113.4",
        "ImporteRealConImp": "135",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "135",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "21.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "55",
        "Importe": "46.2",
        "ImporteRealConImp": "55",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "55",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "110",
        "Importe": "92.4",
        "ImporteRealConImp": "110",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "110",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "17.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "75",
        "Importe": "63",
        "ImporteRealConImp": "75",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "75",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "12.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "165",
        "Importe": "138.6",
        "ImporteRealConImp": "165",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "165",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "26.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "750",
        "Importe": "630",
        "ImporteRealConImp": "750",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "750",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "120.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "80",
        "Importe": "67.2",
        "ImporteRealConImp": "80",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "80",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "12.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "130",
        "Importe": "109.2",
        "ImporteRealConImp": "130",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "130",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "20.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "160",
        "Importe": "134.4",
        "ImporteRealConImp": "160",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "160",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "25.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "85",
        "Importe": "71.4",
        "ImporteRealConImp": "85",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "85",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "13.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "45",
        "Importe": "37.8",
        "ImporteRealConImp": "45",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "45",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "7.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "55",
        "Importe": "46.2",
        "ImporteRealConImp": "55",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "55",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "20",
        "Importe": "16.8",
        "ImporteRealConImp": "20",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "20",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "3.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "155",
        "Importe": "130.2",
        "ImporteRealConImp": "155",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "155",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "24.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "75",
        "Importe": "63",
        "ImporteRealConImp": "75",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "75",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "12.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "15",
        "Importe": "12.6",
        "ImporteRealConImp": "15",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "15",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "2.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "50",
        "Importe": "42",
        "ImporteRealConImp": "50",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "50",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "68",
        "Importe": "57.12",
        "ImporteRealConImp": "68",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "68",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "10.88"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "70",
        "Importe": "58.8",
        "ImporteRealConImp": "70",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "70",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "11.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "90",
        "Importe": "75.6",
        "ImporteRealConImp": "90",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "90",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "14.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "60",
        "Importe": "50.4",
        "ImporteRealConImp": "60",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "60",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "9.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "5",
        "Importe": "4.2",
        "ImporteRealConImp": "5",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "5",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "0.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "125",
        "Importe": "105",
        "ImporteRealConImp": "125",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "125",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "20.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "98",
        "Importe": "82.32",
        "ImporteRealConImp": "98",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "98",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "15.68"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "52",
        "Importe": "43.68",
        "ImporteRealConImp": "52",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "52",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.32"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "100",
        "Importe": "84",
        "ImporteRealConImp": "100",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "100",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "16.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "65",
        "Importe": "54.6",
        "ImporteRealConImp": "65",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "65",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "10.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "66",
        "Importe": "55.44",
        "ImporteRealConImp": "66",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "66",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "10.56"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "240",
        "Importe": "201.6",
        "ImporteRealConImp": "240",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "240",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "38.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "310",
        "Importe": "260.4",
        "ImporteRealConImp": "310",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "310",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "49.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "40",
        "Importe": "33.6",
        "ImporteRealConImp": "40",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "40",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "6.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "48",
        "Importe": "40.32",
        "ImporteRealConImp": "48",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "48",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "7.68"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "20",
        "Importe": "16.8",
        "ImporteRealConImp": "20",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "20",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "3.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "30",
        "Importe": "25.2",
        "ImporteRealConImp": "30",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "30",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "4.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "990",
        "Importe": "831.6",
        "ImporteRealConImp": "990",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "990",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "158.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "680",
        "Importe": "571.2",
        "ImporteRealConImp": "680",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "680",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "108.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "15",
        "Importe": "12.6",
        "ImporteRealConImp": "15",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "15",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "2.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "7",
        "Importe": "5.88",
        "ImporteRealConImp": "7",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "7",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "1.12"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "20",
        "Importe": "16.8",
        "ImporteRealConImp": "20",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "20",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "3.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "55",
        "Importe": "46.2",
        "ImporteRealConImp": "55",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "55",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "54",
        "Importe": "45.36",
        "ImporteRealConImp": "54",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "54",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.64"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "50",
        "Importe": "42",
        "ImporteRealConImp": "50",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "50",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "30",
        "Importe": "25.2",
        "ImporteRealConImp": "30",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "30",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "4.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "36",
        "Importe": "30.240000000000002",
        "ImporteRealConImp": "36",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "36",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "5.76"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "95",
        "Importe": "79.8",
        "ImporteRealConImp": "95",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "95",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "15.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "36",
        "Importe": "30.240000000000002",
        "ImporteRealConImp": "36",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "36",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "5.76"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "15",
        "Importe": "12.6",
        "ImporteRealConImp": "15",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "15",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "2.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "15",
        "Importe": "12.6",
        "ImporteRealConImp": "15",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "15",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "2.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "20",
        "Importe": "16.8",
        "ImporteRealConImp": "20",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "20",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "3.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "20",
        "Importe": "16.8",
        "ImporteRealConImp": "20",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "20",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "3.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "5",
        "Importe": "4.2",
        "ImporteRealConImp": "5",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "5",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "0.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "1350",
        "Importe": "1134",
        "ImporteRealConImp": "1350",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "1350",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "216.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "151",
        "Importe": "126.84",
        "ImporteRealConImp": "151",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "151",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "24.16"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "138",
        "Importe": "115.92",
        "ImporteRealConImp": "138",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "138",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "22.08"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "30",
        "Importe": "25.2",
        "ImporteRealConImp": "30",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "30",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "4.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "190",
        "Importe": "159.6",
        "ImporteRealConImp": "190",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "190",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "30.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "105",
        "Importe": "88.2",
        "ImporteRealConImp": "105",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "105",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "16.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "85",
        "Importe": "71.4",
        "ImporteRealConImp": "85",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "85",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "13.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "45",
        "Importe": "37.8",
        "ImporteRealConImp": "45",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "45",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "7.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "75",
        "Importe": "63",
        "ImporteRealConImp": "75",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "75",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "12.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "24",
        "Importe": "20.16",
        "ImporteRealConImp": "24",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "24",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "3.84"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "90",
        "Importe": "75.6",
        "ImporteRealConImp": "90",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "90",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "14.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "233",
        "Importe": "195.72",
        "ImporteRealConImp": "233",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "233",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "37.28"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "6",
        "Importe": "5.04",
        "ImporteRealConImp": "6",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "6",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "0.96"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "100",
        "Importe": "84",
        "ImporteRealConImp": "100",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "100",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "16.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "80",
        "Importe": "67.2",
        "ImporteRealConImp": "80",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "80",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "12.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "152",
        "Importe": "127.68",
        "ImporteRealConImp": "152",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "152",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "24.32"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "70",
        "Importe": "58.8",
        "ImporteRealConImp": "70",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "70",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "11.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "460",
        "Importe": "386.4",
        "ImporteRealConImp": "460",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "460",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "73.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "460",
        "Importe": "386.4",
        "ImporteRealConImp": "460",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "460",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "73.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "135",
        "Importe": "113.4",
        "ImporteRealConImp": "135",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "135",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "21.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "40",
        "Importe": "33.6",
        "ImporteRealConImp": "40",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "40",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "6.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "15",
        "Importe": "12.6",
        "ImporteRealConImp": "15",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "15",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "2.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "138",
        "Importe": "115.92",
        "ImporteRealConImp": "138",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "138",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "22.08"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "325",
        "Importe": "273",
        "ImporteRealConImp": "325",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "325",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "52.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "20",
        "Importe": "16.8",
        "ImporteRealConImp": "20",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "20",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "3.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "12",
        "Importe": "10.08",
        "ImporteRealConImp": "12",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "12",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "1.92"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "80",
        "Importe": "67.2",
        "ImporteRealConImp": "80",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "80",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "12.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "35",
        "Importe": "29.4",
        "ImporteRealConImp": "35",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "35",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "5.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "20",
        "Importe": "16.8",
        "ImporteRealConImp": "20",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "20",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "3.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "378",
        "Importe": "317.52",
        "ImporteRealConImp": "378",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "378",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "60.48"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "80",
        "Importe": "67.2",
        "ImporteRealConImp": "80",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "80",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "12.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "155",
        "Importe": "130.2",
        "ImporteRealConImp": "155",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "155",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "24.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "10",
        "Importe": "8.4",
        "ImporteRealConImp": "10",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "10",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "1.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "125",
        "Importe": "105",
        "ImporteRealConImp": "125",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "125",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "20.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "105",
        "Importe": "88.2",
        "ImporteRealConImp": "105",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "105",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "16.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "50",
        "Importe": "42",
        "ImporteRealConImp": "50",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "50",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "50",
        "Importe": "42",
        "ImporteRealConImp": "50",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "50",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "60",
        "Importe": "50.4",
        "ImporteRealConImp": "60",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "60",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "9.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "55",
        "Importe": "46.2",
        "ImporteRealConImp": "55",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "55",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "35",
        "Importe": "29.4",
        "ImporteRealConImp": "35",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "35",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "5.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "50",
        "Importe": "42",
        "ImporteRealConImp": "50",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "50",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "145",
        "Importe": "121.8",
        "ImporteRealConImp": "145",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "145",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "23.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "70",
        "Importe": "58.8",
        "ImporteRealConImp": "70",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "70",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "11.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "15",
        "Importe": "12.6",
        "ImporteRealConImp": "15",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "15",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "2.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "48",
        "Importe": "40.32",
        "ImporteRealConImp": "48",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "48",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "7.68"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "298",
        "Importe": "250.32",
        "ImporteRealConImp": "298",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "298",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "47.68"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "340",
        "Importe": "285.6",
        "ImporteRealConImp": "340",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "340",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "54.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "36",
        "Importe": "30.240000000000002",
        "ImporteRealConImp": "36",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "36",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "5.76"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "36",
        "Importe": "30.240000000000002",
        "ImporteRealConImp": "36",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "36",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "5.76"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "10",
        "Importe": "8.4",
        "ImporteRealConImp": "10",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "10",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "1.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "15",
        "Importe": "12.6",
        "ImporteRealConImp": "15",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "15",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "2.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "98",
        "Importe": "82.32",
        "ImporteRealConImp": "98",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "98",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "15.68"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "195",
        "Importe": "163.8",
        "ImporteRealConImp": "195",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "195",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "31.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "80",
        "Importe": "67.2",
        "ImporteRealConImp": "80",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "80",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "12.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "20",
        "Importe": "16.8",
        "ImporteRealConImp": "20",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "20",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "3.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "10",
        "Importe": "8.4",
        "ImporteRealConImp": "10",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "10",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "1.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "18",
        "Importe": "15.120000000000001",
        "ImporteRealConImp": "18",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "18",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "2.88"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "220",
        "Importe": "184.8",
        "ImporteRealConImp": "220",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "220",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "35.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "15",
        "Importe": "12.6",
        "ImporteRealConImp": "15",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "15",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "2.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "10",
        "Importe": "8.4",
        "ImporteRealConImp": "10",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "10",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "1.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "10",
        "Importe": "8.4",
        "ImporteRealConImp": "10",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "10",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "1.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "110",
        "Importe": "92.4",
        "ImporteRealConImp": "110",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "110",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "17.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "30",
        "Importe": "25.2",
        "ImporteRealConImp": "30",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "30",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "4.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "90",
        "Importe": "75.6",
        "ImporteRealConImp": "90",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "90",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "14.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "7",
        "Importe": "5.88",
        "ImporteRealConImp": "7",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "7",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "1.12"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "12",
        "Importe": "10.08",
        "ImporteRealConImp": "12",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "12",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "1.92"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "225",
        "Importe": "189",
        "ImporteRealConImp": "225",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "225",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "36.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "2629",
        "Importe": "2208.36",
        "ImporteRealConImp": "2629",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "2629",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "420.64"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "75",
        "Importe": "63",
        "ImporteRealConImp": "75",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "75",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "12.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "50",
        "Importe": "42",
        "ImporteRealConImp": "50",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "50",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "54",
        "Importe": "45.36",
        "ImporteRealConImp": "54",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "54",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.64"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "180",
        "Importe": "151.2",
        "ImporteRealConImp": "180",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "180",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "28.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "170",
        "Importe": "142.8",
        "ImporteRealConImp": "170",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "170",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "27.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "50",
        "Importe": "42",
        "ImporteRealConImp": "50",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "50",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "310",
        "Importe": "260.4",
        "ImporteRealConImp": "310",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "310",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "49.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "135",
        "Importe": "113.4",
        "ImporteRealConImp": "135",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "135",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "21.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "45",
        "Importe": "37.8",
        "ImporteRealConImp": "45",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "45",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "7.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "160",
        "Importe": "134.4",
        "ImporteRealConImp": "160",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "160",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "25.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "180",
        "Importe": "151.2",
        "ImporteRealConImp": "180",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "180",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "28.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "12",
        "Importe": "10.08",
        "ImporteRealConImp": "12",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "12",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "1.92"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "60",
        "Importe": "50.4",
        "ImporteRealConImp": "60",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "60",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "9.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "180",
        "Importe": "151.2",
        "ImporteRealConImp": "180",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "180",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "28.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "125",
        "Importe": "105",
        "ImporteRealConImp": "125",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "125",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "20.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "175",
        "Importe": "147",
        "ImporteRealConImp": "175",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "175",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "28.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "80",
        "Importe": "67.2",
        "ImporteRealConImp": "80",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "80",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "12.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "45",
        "Importe": "37.8",
        "ImporteRealConImp": "45",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "45",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "7.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "110",
        "Importe": "92.4",
        "ImporteRealConImp": "110",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "110",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "17.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "130",
        "Importe": "109.2",
        "ImporteRealConImp": "130",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "130",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "20.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "75",
        "Importe": "63",
        "ImporteRealConImp": "75",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "75",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "12.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "1250",
        "Importe": "1050",
        "ImporteRealConImp": "1250",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "1250",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "200.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "160",
        "Importe": "134.4",
        "ImporteRealConImp": "160",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "160",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "25.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "65",
        "Importe": "54.6",
        "ImporteRealConImp": "65",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "65",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "10.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "75",
        "Importe": "63",
        "ImporteRealConImp": "75",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "75",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "12.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "30",
        "Importe": "25.2",
        "ImporteRealConImp": "30",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "30",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "4.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "20",
        "Importe": "16.8",
        "ImporteRealConImp": "20",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "20",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "3.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "70",
        "Importe": "58.8",
        "ImporteRealConImp": "70",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "70",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "11.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "90",
        "Importe": "75.6",
        "ImporteRealConImp": "90",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "90",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "14.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "90",
        "Importe": "75.6",
        "ImporteRealConImp": "90",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "90",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "14.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "55",
        "Importe": "46.2",
        "ImporteRealConImp": "55",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "55",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "260",
        "Importe": "218.4",
        "ImporteRealConImp": "260",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "260",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "41.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "260",
        "Importe": "218.4",
        "ImporteRealConImp": "260",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "260",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "41.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "60",
        "Importe": "50.4",
        "ImporteRealConImp": "60",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "60",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "9.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "60",
        "Importe": "50.4",
        "ImporteRealConImp": "60",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "60",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "9.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "20",
        "Importe": "16.8",
        "ImporteRealConImp": "20",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "20",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "3.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "290",
        "Importe": "243.6",
        "ImporteRealConImp": "290",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "290",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "46.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "715",
        "Importe": "600.6",
        "ImporteRealConImp": "715",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "715",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "114.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "585",
        "Importe": "491.4",
        "ImporteRealConImp": "585",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "585",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "93.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "60",
        "Importe": "50.4",
        "ImporteRealConImp": "60",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "60",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "9.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "20",
        "Importe": "16.8",
        "ImporteRealConImp": "20",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "20",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "3.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "30",
        "Importe": "25.2",
        "ImporteRealConImp": "30",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "30",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "4.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "85",
        "Importe": "71.4",
        "ImporteRealConImp": "85",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "85",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "13.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "225",
        "Importe": "189",
        "ImporteRealConImp": "225",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "225",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "36.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "52",
        "Importe": "43.68",
        "ImporteRealConImp": "52",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "52",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.32"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "75",
        "Importe": "63",
        "ImporteRealConImp": "75",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "75",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "12.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "25",
        "Importe": "21",
        "ImporteRealConImp": "25",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "25",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "4.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "100",
        "Importe": "84",
        "ImporteRealConImp": "100",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "100",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "16.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "50",
        "Importe": "42",
        "ImporteRealConImp": "50",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "50",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "70",
        "Importe": "58.8",
        "ImporteRealConImp": "70",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "70",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "11.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "20",
        "Importe": "16.8",
        "ImporteRealConImp": "20",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "20",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "3.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "90",
        "Importe": "75.6",
        "ImporteRealConImp": "90",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "90",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "14.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "60",
        "Importe": "50.4",
        "ImporteRealConImp": "60",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "60",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "9.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "66",
        "Importe": "55.44",
        "ImporteRealConImp": "66",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "66",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "10.56"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "6",
        "Importe": "5.04",
        "ImporteRealConImp": "6",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "6",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "0.96"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "6",
        "Importe": "5.04",
        "ImporteRealConImp": "6",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "6",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "0.96"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "15",
        "Importe": "12.6",
        "ImporteRealConImp": "15",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "15",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "2.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "18",
        "Importe": "15.120000000000001",
        "ImporteRealConImp": "18",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "18",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "2.88"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "110",
        "Importe": "92.4",
        "ImporteRealConImp": "110",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "110",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "17.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "75",
        "Importe": "63",
        "ImporteRealConImp": "75",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "75",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "12.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "95",
        "Importe": "79.8",
        "ImporteRealConImp": "95",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "95",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "15.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "20",
        "Importe": "16.8",
        "ImporteRealConImp": "20",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "20",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "3.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "318",
        "Importe": "267.12",
        "ImporteRealConImp": "318",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "318",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "50.88"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "30",
        "Importe": "25.2",
        "ImporteRealConImp": "30",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "30",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "4.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "50",
        "Importe": "42",
        "ImporteRealConImp": "50",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "50",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "125",
        "Importe": "105",
        "ImporteRealConImp": "125",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "125",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "20.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "12",
        "Importe": "10.08",
        "ImporteRealConImp": "12",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "12",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "1.92"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "75",
        "Importe": "63",
        "ImporteRealConImp": "75",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "75",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "12.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "75",
        "Importe": "63",
        "ImporteRealConImp": "75",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "75",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "12.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "120",
        "Importe": "100.8",
        "ImporteRealConImp": "120",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "120",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "19.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "90",
        "Importe": "75.6",
        "ImporteRealConImp": "90",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "90",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "14.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "40",
        "Importe": "33.6",
        "ImporteRealConImp": "40",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "40",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "6.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "200",
        "Importe": "168",
        "ImporteRealConImp": "200",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "200",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "32.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "30",
        "Importe": "25.2",
        "ImporteRealConImp": "30",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "30",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "4.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "55",
        "Importe": "46.2",
        "ImporteRealConImp": "55",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "55",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "30",
        "Importe": "25.2",
        "ImporteRealConImp": "30",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "30",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "4.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "10",
        "Importe": "8.4",
        "ImporteRealConImp": "10",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "10",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "1.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "152",
        "Importe": "127.68",
        "ImporteRealConImp": "152",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "152",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "24.32"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "45",
        "Importe": "37.8",
        "ImporteRealConImp": "45",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "45",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "7.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "936",
        "Importe": "786.24",
        "ImporteRealConImp": "936",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "936",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "149.76"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "220",
        "Importe": "184.8",
        "ImporteRealConImp": "220",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "220",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "35.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "70",
        "Importe": "58.8",
        "ImporteRealConImp": "70",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "70",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "11.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "28",
        "Importe": "23.52",
        "ImporteRealConImp": "28",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "28",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "4.48"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "30",
        "Importe": "25.2",
        "ImporteRealConImp": "30",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "30",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "4.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "75",
        "Importe": "63",
        "ImporteRealConImp": "75",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "75",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "12.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "50",
        "Importe": "42",
        "ImporteRealConImp": "50",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "50",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "50",
        "Importe": "42",
        "ImporteRealConImp": "50",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "50",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "120",
        "Importe": "100.8",
        "ImporteRealConImp": "120",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "120",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "19.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "65",
        "Importe": "54.6",
        "ImporteRealConImp": "65",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "65",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "10.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "50",
        "Importe": "42",
        "ImporteRealConImp": "50",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "50",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "115",
        "Importe": "96.6",
        "ImporteRealConImp": "115",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "115",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "18.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "35",
        "Importe": "29.4",
        "ImporteRealConImp": "35",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "35",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "5.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "75",
        "Importe": "63",
        "ImporteRealConImp": "75",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "75",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "12.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "36",
        "Importe": "30.240000000000002",
        "ImporteRealConImp": "36",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "36",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "5.76"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "5",
        "Importe": "4.2",
        "ImporteRealConImp": "5",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "5",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "0.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "10",
        "Importe": "8.4",
        "ImporteRealConImp": "10",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "10",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "1.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "80",
        "Importe": "67.2",
        "ImporteRealConImp": "80",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "80",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "12.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "360",
        "Importe": "302.4",
        "ImporteRealConImp": "360",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "360",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "57.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "7",
        "Importe": "5.88",
        "ImporteRealConImp": "7",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "7",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "1.12"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "15",
        "Importe": "12.6",
        "ImporteRealConImp": "15",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "15",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "2.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "440",
        "Importe": "369.6",
        "ImporteRealConImp": "440",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "440",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "70.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "40",
        "Importe": "33.6",
        "ImporteRealConImp": "40",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "40",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "6.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "36",
        "Importe": "30.240000000000002",
        "ImporteRealConImp": "36",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "36",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "5.76"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "215",
        "Importe": "180.6",
        "ImporteRealConImp": "215",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "215",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "34.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "60",
        "Importe": "50.4",
        "ImporteRealConImp": "60",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "60",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "9.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "140",
        "Importe": "117.6",
        "ImporteRealConImp": "140",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "140",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "22.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "45",
        "Importe": "37.8",
        "ImporteRealConImp": "45",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "45",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "7.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "45",
        "Importe": "37.8",
        "ImporteRealConImp": "45",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "45",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "7.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "25",
        "Importe": "21",
        "ImporteRealConImp": "25",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "25",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "4.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "35",
        "Importe": "29.4",
        "ImporteRealConImp": "35",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "35",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "5.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "20",
        "Importe": "16.8",
        "ImporteRealConImp": "20",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "20",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "3.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "24",
        "Importe": "20.16",
        "ImporteRealConImp": "24",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "24",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "3.84"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "72",
        "Importe": "60.480000000000004",
        "ImporteRealConImp": "72",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "72",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "11.52"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "72",
        "Importe": "60.480000000000004",
        "ImporteRealConImp": "72",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "72",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "11.52"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "300",
        "Importe": "252",
        "ImporteRealConImp": "300",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "300",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "48.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "214",
        "Importe": "179.76",
        "ImporteRealConImp": "214",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "214",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "34.24"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "70",
        "Importe": "58.8",
        "ImporteRealConImp": "70",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "70",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "11.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "75",
        "Importe": "63",
        "ImporteRealConImp": "75",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "75",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "12.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "200",
        "Importe": "168",
        "ImporteRealConImp": "200",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "200",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "32.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "67",
        "Importe": "56.28",
        "ImporteRealConImp": "67",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "67",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "10.72"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "64",
        "Importe": "53.76",
        "ImporteRealConImp": "64",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "64",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "10.24"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "35",
        "Importe": "29.4",
        "ImporteRealConImp": "35",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "35",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "5.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "48",
        "Importe": "40.32",
        "ImporteRealConImp": "48",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "48",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "7.68"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "160",
        "Importe": "134.4",
        "ImporteRealConImp": "160",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "160",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "25.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "48",
        "Importe": "40.32",
        "ImporteRealConImp": "48",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "48",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "7.68"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "40",
        "Importe": "33.6",
        "ImporteRealConImp": "40",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "40",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "6.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "50",
        "Importe": "42",
        "ImporteRealConImp": "50",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "50",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "60",
        "Importe": "50.4",
        "ImporteRealConImp": "60",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "60",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "9.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "50",
        "Importe": "42",
        "ImporteRealConImp": "50",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "50",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "50",
        "Importe": "42",
        "ImporteRealConImp": "50",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "50",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "45",
        "Importe": "37.8",
        "ImporteRealConImp": "45",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "45",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "7.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "45",
        "Importe": "37.8",
        "ImporteRealConImp": "45",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "45",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "7.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "85",
        "Importe": "71.4",
        "ImporteRealConImp": "85",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "85",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "13.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "345",
        "Importe": "289.8",
        "ImporteRealConImp": "345",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "345",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "55.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "20",
        "Importe": "16.8",
        "ImporteRealConImp": "20",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "20",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "3.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "100",
        "Importe": "84",
        "ImporteRealConImp": "100",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "100",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "16.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "122",
        "Importe": "102.48",
        "ImporteRealConImp": "122",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "122",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "19.52"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "25",
        "Importe": "21",
        "ImporteRealConImp": "25",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "25",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "4.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "30",
        "Importe": "25.2",
        "ImporteRealConImp": "30",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "30",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "4.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "95",
        "Importe": "79.8",
        "ImporteRealConImp": "95",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "95",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "15.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "70",
        "Importe": "58.8",
        "ImporteRealConImp": "70",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "70",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "11.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "125",
        "Importe": "105",
        "ImporteRealConImp": "125",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "125",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "20.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "30",
        "Importe": "25.2",
        "ImporteRealConImp": "30",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "30",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "4.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "240",
        "Importe": "201.6",
        "ImporteRealConImp": "240",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "240",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "38.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "2250",
        "Importe": "1890",
        "ImporteRealConImp": "2250",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "2250",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "360.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "150",
        "Importe": "126",
        "ImporteRealConImp": "150",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "150",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "24.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "230",
        "Importe": "193.2",
        "ImporteRealConImp": "230",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "230",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "36.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "150",
        "Importe": "126",
        "ImporteRealConImp": "150",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "150",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "24.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "16",
        "Importe": "13.44",
        "ImporteRealConImp": "16",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "16",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "2.56"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "14",
        "Importe": "11.76",
        "ImporteRealConImp": "14",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "14",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "2.24"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "30",
        "Importe": "25.2",
        "ImporteRealConImp": "30",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "30",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "4.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "150",
        "Importe": "126",
        "ImporteRealConImp": "150",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "150",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "24.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "20",
        "Importe": "16.8",
        "ImporteRealConImp": "20",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "20",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "3.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "35",
        "Importe": "29.4",
        "ImporteRealConImp": "35",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "35",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "5.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "15",
        "Importe": "12.6",
        "ImporteRealConImp": "15",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "15",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "2.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "2100",
        "Importe": "1764",
        "ImporteRealConImp": "2100",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "2100",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "336.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "50",
        "Importe": "42",
        "ImporteRealConImp": "50",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "50",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "1500",
        "Importe": "1260",
        "ImporteRealConImp": "1500",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "1500",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "240.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "50",
        "Importe": "42",
        "ImporteRealConImp": "50",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "50",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "240",
        "Importe": "201.6",
        "ImporteRealConImp": "240",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "240",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "38.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "130",
        "Importe": "109.2",
        "ImporteRealConImp": "130",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "130",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "20.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "250",
        "Importe": "210",
        "ImporteRealConImp": "250",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "250",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "40.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "135",
        "Importe": "113.4",
        "ImporteRealConImp": "135",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "135",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "21.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "20",
        "Importe": "16.8",
        "ImporteRealConImp": "20",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "20",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "3.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "75",
        "Importe": "63",
        "ImporteRealConImp": "75",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "75",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "12.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "5",
        "Importe": "4.2",
        "ImporteRealConImp": "5",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "5",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "0.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "125",
        "Importe": "105",
        "ImporteRealConImp": "125",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "125",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "20.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "410",
        "Importe": "344.4",
        "ImporteRealConImp": "410",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "410",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "65.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "25",
        "Importe": "21",
        "ImporteRealConImp": "25",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "25",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "4.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "98",
        "Importe": "82.32",
        "ImporteRealConImp": "98",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "98",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "15.68"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "98",
        "Importe": "82.32",
        "ImporteRealConImp": "98",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "98",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "15.68"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "120",
        "Importe": "100.8",
        "ImporteRealConImp": "120",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "120",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "19.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "585",
        "Importe": "491.4",
        "ImporteRealConImp": "585",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "585",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "93.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "260",
        "Importe": "218.4",
        "ImporteRealConImp": "260",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "260",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "41.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "170",
        "Importe": "142.8",
        "ImporteRealConImp": "170",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "170",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "27.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "645",
        "Importe": "541.8",
        "ImporteRealConImp": "645",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "645",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "103.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "125",
        "Importe": "105",
        "ImporteRealConImp": "125",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "125",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "20.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "35",
        "Importe": "29.4",
        "ImporteRealConImp": "35",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "35",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "5.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "15",
        "Importe": "12.6",
        "ImporteRealConImp": "15",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "15",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "2.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "50",
        "Importe": "42",
        "ImporteRealConImp": "50",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "50",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "20",
        "Importe": "16.8",
        "ImporteRealConImp": "20",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "20",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "3.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "70",
        "Importe": "58.8",
        "ImporteRealConImp": "70",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "70",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "11.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "450",
        "Importe": "378",
        "ImporteRealConImp": "450",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "450",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "72.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "7000",
        "Importe": "5880",
        "ImporteRealConImp": "7000",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "7000",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "1120.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "2250",
        "Importe": "1890",
        "ImporteRealConImp": "2250",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "2250",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "360.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "3550",
        "Importe": "2982",
        "ImporteRealConImp": "3550",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "3550",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "568.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "210",
        "Importe": "176.4",
        "ImporteRealConImp": "210",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "210",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "33.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "170",
        "Importe": "142.8",
        "ImporteRealConImp": "170",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "170",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "27.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "30",
        "Importe": "25.2",
        "ImporteRealConImp": "30",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "30",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "4.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "145",
        "Importe": "121.8",
        "ImporteRealConImp": "145",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "145",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "23.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "50",
        "Importe": "42",
        "ImporteRealConImp": "50",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "50",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "130",
        "Importe": "109.2",
        "ImporteRealConImp": "130",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "130",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "20.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "98",
        "Importe": "82.32",
        "ImporteRealConImp": "98",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "98",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "15.68"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "90",
        "Importe": "75.6",
        "ImporteRealConImp": "90",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "90",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "14.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "90",
        "Importe": "75.6",
        "ImporteRealConImp": "90",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "90",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "14.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "90",
        "Importe": "75.6",
        "ImporteRealConImp": "90",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "90",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "14.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "150",
        "Importe": "126",
        "ImporteRealConImp": "150",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "150",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "24.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "7",
        "Importe": "5.88",
        "ImporteRealConImp": "7",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "7",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "1.12"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "125",
        "Importe": "105",
        "ImporteRealConImp": "125",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "125",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "20.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "125",
        "Importe": "105",
        "ImporteRealConImp": "125",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "125",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "20.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "48",
        "Importe": "40.32",
        "ImporteRealConImp": "48",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "48",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "7.68"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "110",
        "Importe": "92.4",
        "ImporteRealConImp": "110",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "110",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "17.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "450",
        "Importe": "378",
        "ImporteRealConImp": "450",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "450",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "72.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "90",
        "Importe": "75.6",
        "ImporteRealConImp": "90",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "90",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "14.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "135",
        "Importe": "113.4",
        "ImporteRealConImp": "135",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "135",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "21.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "15",
        "Importe": "12.6",
        "ImporteRealConImp": "15",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "15",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "2.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "240",
        "Importe": "201.6",
        "ImporteRealConImp": "240",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "240",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "38.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "110",
        "Importe": "92.4",
        "ImporteRealConImp": "110",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "110",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "17.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "735",
        "Importe": "617.4",
        "ImporteRealConImp": "735",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "735",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "117.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "400",
        "Importe": "336",
        "ImporteRealConImp": "400",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "400",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "64.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "120",
        "Importe": "100.8",
        "ImporteRealConImp": "120",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "120",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "19.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "50",
        "Importe": "42",
        "ImporteRealConImp": "50",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "50",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "530",
        "Importe": "445.2",
        "ImporteRealConImp": "530",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "530",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "84.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "80",
        "Importe": "67.2",
        "ImporteRealConImp": "80",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "80",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "12.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "90",
        "Importe": "75.6",
        "ImporteRealConImp": "90",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "90",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "14.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "105",
        "Importe": "88.2",
        "ImporteRealConImp": "105",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "105",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "16.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "85",
        "Importe": "71.4",
        "ImporteRealConImp": "85",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "85",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "13.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "15",
        "Importe": "12.6",
        "ImporteRealConImp": "15",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "15",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "2.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "110",
        "Importe": "92.4",
        "ImporteRealConImp": "110",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "110",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "17.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "90",
        "Importe": "75.6",
        "ImporteRealConImp": "90",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "90",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "14.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "90",
        "Importe": "75.6",
        "ImporteRealConImp": "90",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "90",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "14.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "90",
        "Importe": "75.6",
        "ImporteRealConImp": "90",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "90",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "14.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "130",
        "Importe": "109.2",
        "ImporteRealConImp": "130",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "130",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "20.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "50",
        "Importe": "42",
        "ImporteRealConImp": "50",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "50",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "785",
        "Importe": "659.4",
        "ImporteRealConImp": "785",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "785",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "125.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "350",
        "Importe": "294",
        "ImporteRealConImp": "350",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "350",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "56.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "340",
        "Importe": "285.6",
        "ImporteRealConImp": "340",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "340",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "54.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "455",
        "Importe": "382.2",
        "ImporteRealConImp": "455",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "455",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "72.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "250",
        "Importe": "210",
        "ImporteRealConImp": "250",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "250",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "40.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "200",
        "Importe": "168",
        "ImporteRealConImp": "200",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "200",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "32.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "25",
        "Importe": "21",
        "ImporteRealConImp": "25",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "25",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "4.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "50",
        "Importe": "42",
        "ImporteRealConImp": "50",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "50",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "225",
        "Importe": "189",
        "ImporteRealConImp": "225",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "225",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "36.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "160",
        "Importe": "134.4",
        "ImporteRealConImp": "160",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "160",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "25.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "30",
        "Importe": "25.2",
        "ImporteRealConImp": "30",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "30",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "4.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "110",
        "Importe": "92.4",
        "ImporteRealConImp": "110",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "110",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "17.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "16",
        "Importe": "13.44",
        "ImporteRealConImp": "16",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "16",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "2.56"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "603",
        "Importe": "506.52",
        "ImporteRealConImp": "603",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "603",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "96.48"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "50",
        "Importe": "42",
        "ImporteRealConImp": "50",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "50",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "86",
        "Importe": "72.24",
        "ImporteRealConImp": "86",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "86",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "13.76"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "20",
        "Importe": "16.8",
        "ImporteRealConImp": "20",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "20",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "3.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "110",
        "Importe": "92.4",
        "ImporteRealConImp": "110",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "110",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "17.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "85",
        "Importe": "71.4",
        "ImporteRealConImp": "85",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "85",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "13.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "775",
        "Importe": "651",
        "ImporteRealConImp": "775",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "775",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "124.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "75",
        "Importe": "63",
        "ImporteRealConImp": "75",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "75",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "12.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "50",
        "Importe": "42",
        "ImporteRealConImp": "50",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "50",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "7",
        "Importe": "5.88",
        "ImporteRealConImp": "7",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "7",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "1.12"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "70",
        "Importe": "58.8",
        "ImporteRealConImp": "70",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "70",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "11.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "950",
        "Importe": "798",
        "ImporteRealConImp": "950",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "950",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "152.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "210",
        "Importe": "176.4",
        "ImporteRealConImp": "210",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "210",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "33.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "115",
        "Importe": "96.6",
        "ImporteRealConImp": "115",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "115",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "18.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "80",
        "Importe": "67.2",
        "ImporteRealConImp": "80",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "80",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "12.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "1355",
        "Importe": "1138.2",
        "ImporteRealConImp": "1355",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "1355",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "216.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "24",
        "Importe": "20.16",
        "ImporteRealConImp": "24",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "24",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "3.84"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "140",
        "Importe": "117.6",
        "ImporteRealConImp": "140",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "140",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "22.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "140",
        "Importe": "117.6",
        "ImporteRealConImp": "140",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "140",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "22.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "135",
        "Importe": "113.4",
        "ImporteRealConImp": "135",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "135",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "21.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "55",
        "Importe": "46.2",
        "ImporteRealConImp": "55",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "55",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "220",
        "Importe": "184.8",
        "ImporteRealConImp": "220",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "220",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "35.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "150",
        "Importe": "126",
        "ImporteRealConImp": "150",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "150",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "24.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "30",
        "Importe": "25.2",
        "ImporteRealConImp": "30",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "30",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "4.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "340",
        "Importe": "285.6",
        "ImporteRealConImp": "340",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "340",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "54.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "50",
        "Importe": "42",
        "ImporteRealConImp": "50",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "50",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "48",
        "Importe": "40.32",
        "ImporteRealConImp": "48",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "48",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "7.68"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "750",
        "Importe": "630",
        "ImporteRealConImp": "750",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "750",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "120.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "25",
        "Importe": "21",
        "ImporteRealConImp": "25",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "25",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "4.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "110",
        "Importe": "92.4",
        "ImporteRealConImp": "110",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "110",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "17.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "108",
        "Importe": "90.72",
        "ImporteRealConImp": "108",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "108",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "17.28"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "155",
        "Importe": "130.2",
        "ImporteRealConImp": "155",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "155",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "24.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "95",
        "Importe": "79.8",
        "ImporteRealConImp": "95",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "95",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "15.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "50",
        "Importe": "42",
        "ImporteRealConImp": "50",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "50",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "8",
        "Importe": "6.72",
        "ImporteRealConImp": "8",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "8",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "1.28"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "14",
        "Importe": "11.76",
        "ImporteRealConImp": "14",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "14",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "2.24"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "40",
        "Importe": "33.6",
        "ImporteRealConImp": "40",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "40",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "6.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "235",
        "Importe": "197.4",
        "ImporteRealConImp": "235",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "235",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "37.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "100",
        "Importe": "84",
        "ImporteRealConImp": "100",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "100",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "16.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "120",
        "Importe": "100.8",
        "ImporteRealConImp": "120",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "120",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "19.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "270",
        "Importe": "226.8",
        "ImporteRealConImp": "270",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "270",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "43.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "190",
        "Importe": "159.6",
        "ImporteRealConImp": "190",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "190",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "30.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "70",
        "Importe": "58.8",
        "ImporteRealConImp": "70",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "70",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "11.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "50",
        "Importe": "42",
        "ImporteRealConImp": "50",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "50",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "50",
        "Importe": "42",
        "ImporteRealConImp": "50",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "50",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "190",
        "Importe": "159.6",
        "ImporteRealConImp": "190",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "190",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "30.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "25",
        "Importe": "21",
        "ImporteRealConImp": "25",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "25",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "4.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "180",
        "Importe": "151.2",
        "ImporteRealConImp": "180",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "180",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "28.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "120",
        "Importe": "100.8",
        "ImporteRealConImp": "120",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "120",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "19.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "70",
        "Importe": "58.8",
        "ImporteRealConImp": "70",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "70",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "11.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "235",
        "Importe": "197.4",
        "ImporteRealConImp": "235",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "235",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "37.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "105",
        "Importe": "88.2",
        "ImporteRealConImp": "105",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "105",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "16.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "5",
        "Importe": "4.2",
        "ImporteRealConImp": "5",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "5",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "0.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "525",
        "Importe": "441",
        "ImporteRealConImp": "525",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "525",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "84.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "170",
        "Importe": "142.8",
        "ImporteRealConImp": "170",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "170",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "27.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "160",
        "Importe": "134.4",
        "ImporteRealConImp": "160",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "160",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "25.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "75",
        "Importe": "63",
        "ImporteRealConImp": "75",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "75",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "12.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "100",
        "Importe": "84",
        "ImporteRealConImp": "100",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "100",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "16.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "250",
        "Importe": "210",
        "ImporteRealConImp": "250",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "250",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "40.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "42",
        "Importe": "35.28",
        "ImporteRealConImp": "42",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "42",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "6.72"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "180",
        "Importe": "151.2",
        "ImporteRealConImp": "180",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "180",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "28.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "45",
        "Importe": "37.8",
        "ImporteRealConImp": "45",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "45",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "7.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "180",
        "Importe": "151.2",
        "ImporteRealConImp": "180",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "180",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "28.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "79",
        "Importe": "66.36",
        "ImporteRealConImp": "79",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "79",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "12.64"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "120",
        "Importe": "100.8",
        "ImporteRealConImp": "120",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "120",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "19.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "390",
        "Importe": "327.6",
        "ImporteRealConImp": "390",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "390",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "62.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "285",
        "Importe": "239.4",
        "ImporteRealConImp": "285",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "285",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "45.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "7",
        "Importe": "5.88",
        "ImporteRealConImp": "7",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "7",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "1.12"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "150",
        "Importe": "126",
        "ImporteRealConImp": "150",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "150",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "24.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "170",
        "Importe": "142.8",
        "ImporteRealConImp": "170",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "170",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "27.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "98",
        "Importe": "82.32",
        "ImporteRealConImp": "98",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "98",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "15.68"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "15",
        "Importe": "12.6",
        "ImporteRealConImp": "15",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "15",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "2.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "265",
        "Importe": "222.6",
        "ImporteRealConImp": "265",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "265",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "42.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "80",
        "Importe": "67.2",
        "ImporteRealConImp": "80",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "80",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "12.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "75",
        "Importe": "63",
        "ImporteRealConImp": "75",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "75",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "12.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "25",
        "Importe": "21",
        "ImporteRealConImp": "25",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "25",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "4.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "100",
        "Importe": "84",
        "ImporteRealConImp": "100",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "100",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "16.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "500",
        "Importe": "420",
        "ImporteRealConImp": "500",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "500",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "80.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "330",
        "Importe": "277.2",
        "ImporteRealConImp": "330",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "330",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "52.80"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "24",
        "Importe": "20.16",
        "ImporteRealConImp": "24",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "24",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "3.84"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "70",
        "Importe": "58.8",
        "ImporteRealConImp": "70",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "70",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "11.20"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "85",
        "Importe": "71.4",
        "ImporteRealConImp": "85",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "85",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "13.60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "65",
        "Importe": "54.6",
        "ImporteRealConImp": "65",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "65",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "10.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "50",
        "Importe": "42",
        "ImporteRealConImp": "50",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "50",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "8.00"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "19",
        "Importe": "15.96",
        "ImporteRealConImp": "19",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "19",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "3.04"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "190",
        "Importe": "159.6",
        "ImporteRealConImp": "190",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "190",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "30.40"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "8",
        "Importe": "6.72",
        "ImporteRealConImp": "8",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "8",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "1.28"
                }
            ]
        }
    }
]
  function addPartida(Descripcion:any,importe:any,claveprodserv:any) {
     
    
    let iva = Number(importe) * 0.16
    let impdeConcepto=Number(importe-iva)
    // importe=Number(importeSinimpuestos)
      let partida= {
        ClaveProdServ: claveprodserv,
        ClaveUnidad: "H87",
        Unidad: "Pieza",
        Cantidad: "1.0",
        Descripcion: Descripcion,
        ValorUnitario: ""+impdeConcepto+"0",
        Importe: ""+impdeConcepto+"0",
        ImporteRealConImp:"" +importe +"",
        ObjetoImp:"02",
        Impuestos :{
          Traslados:[
             {
          Base: ""+importe+".00",
          Importe: ""+iva.toFixed(2)+"",
          Impuesto: "002",
          TipoFactor: "Tasa",
          TasaOCuota: "0.160000",
          }
          ]
      
          }
        
        }
       
      notasPartidas.push(partida)
     console.log(notasPartidas)
    }

    function FacturaMaker(notasPartidas : any) {
    
      
      let total3 = 0;
       
      function getTotal(notas: any) {
        notas.map((note:any) => {
          total3 += Number(note.ImporteRealConImp)
          console.log("total3:"+total3);
        }) 
        return total3
      }
      let totalConImpuestos: number = getTotal(notasPartidas)
      console.log(totalConImpuestos);
      
      
        let iva=totalConImpuestos * 0.16
        let subtotal=totalConImpuestos-iva
      let fecha = new Date();
        let factura={
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
              "Conceptos":notasPartidas.map(({ImporteRealConImp, ...rest}) => rest),
              "Impuestos": {
          "TotalImpuestosTrasladados": iva.toFixed(2),  
          "Traslados": [
              {
                  "Base": Number(totalConImpuestos).toFixed(2),
                  "Importe": Number(iva).toFixed(2),
                  "Impuesto": "002",
                  "TipoFactor": "Tasa",
                  "TasaOCuota": "0.160000",
              }
          ]
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
    addPartida(entries.Descripcion,entries.importe,entries.claveprodserv)

  }
  
  
  return (
    <>
    <Form action={onSubmit}>
      {formElements}
      <Button variant="primary" type="submit" >
        Guardar
      </Button>
    </Form>
    <Button  onClick={onSubmitForFact}>
     Facturar
      </Button>
    </>
  );
}

export default FormFactCliente;