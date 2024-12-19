'use client'
import getRequest from "./getRequest";
import postRequest from "./postRequest";
const orderid = require('order-id')('key');

import swConnector from "./swConector";
function folioToFact(folio:string) {
  const axios = require('axios');

  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://express-low5.onrender.com/notas_venta/?folio=7896-647385-0053',
    headers: { }
  };
  
  axios.request(config)
  .then((response) => {
    nota=(response.data));
  })
  .catch((error) => {
    console.log(error);
  });
  
  let total3 = 0;
     
    function getTotal(nota: any) {
      nota.map((note:any) => {
        total3 += Number(note.lineas_venta.ImporteRealConImp)
        console.log("total3:"+total3);
      
      })
       

      return total3
    }
   let totalConImpuestos: number = getTotal(nota)
    let iva : number = totalConImpuestos * 0.16
    let subtotal: number =totalConImpuestos-iva
   let fecha = new Date();
   let fechaActual = fecha.toLocaleDateString();
  


    let facturaGlobal={
    "Version": "4.0",
    "Serie": "BVIC-G",
    "Folio": 6,
    "Fecha": fechaActual,
    "Sello": "",
    "FormaPago": 99,
    "FormaPagoSpecified": true,
    "NoCertificado": "",
    "Certificado": "",
    "SubTotal": subtotal.toFixed(2),
    "Moneda": "MXN",
    "Total": (totalConImpuestos).toFixed(2),
    "TipoDeComprobante": "I",
    "Exportacion": "01",
    "MetodoPago": "PUE",
    "MetodoPagoSpecified": true,
    "LugarExpedicion": "87000",
    "InformacionGlobal": {
      "Periodicidad": "03",
      "Meses": "12",
      "Año": "2024"
    },
    "Emisor": {
      "Rfc": "FOZA8801257C2",
      "Nombre": "ALMA ALICIA FLORES ZAVALA",
      "RegimenFiscal": "626"
    },
    "Receptor": {
      "Rfc": "XAXX010101000",
      "Nombre": "PUBLICO EN GENERAL",
      "DomicilioFiscalReceptor": "87000",
      "RegimenFiscalReceptor": "616",
      "UsoCFDI": "S01"
    },
    "Conceptos": lineasPartidas,
    "Impuestos": {
      "TotalImpuestosTrasladados": iva.toFixed(2),  
      "Traslados": [
        {
          "Base": Number(totalConImpuestos).toFixed(2),
          "Impuesto": "002",
          "TipoFactor": "Tasa",
          "TasaOCuota": "0.160000",
          "Importe": (iva).toFixed(2)
        }
      ]
    }
  }
  console.log(facturaGlobal)
  // swConnector(facturaGlobal)


}

export default  folioToFact