'use server'
import postRequest from "../libComponents/postRequest";
const orderid = require('order-id')('key');

import swConnector from "../libComponents/swConector";
function ReciboMaker(notasPartidas : any) {
    let total3 = 0;
     
    function getTotal(notas: any) {
      notas.map((note:any) => {
        total3 += Number(note.ImporteRealConImp)
        console.log("total3:"+total3);
      
      })
       

      return total3
    }
    let totalConImpuestos: number = getTotal(notasPartidas)
    let iva : number = totalConImpuestos * 0.16
    let subtotal: number =totalConImpuestos-iva
   let fecha = new Date();
   let fechaActual = fecha.toLocaleDateString();
   let folio = orderid.generate();


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
      "Periodicidad": "04",
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
    "Conceptos": notasPartidas,
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
  //  console.log(facturaGlobal)
  //swConnector(facturaGlobal)


      let recibo={
            'folio_venta' : folio,
	'fecha' : fechaActual,
	'cliente' : "Publico en general",
	'lineas_venta' : notasPartidas,
  'total' : totalConImpuestos,
	'estatus' : "pagado",
	'anticipo' : 0,
	'observaciones' : "observaciones"
                  }

  return facturaGlobal

//  postRequest("https://express-low5.onrender.com/notas_venta",recibo)
     
}


export default  ReciboMaker