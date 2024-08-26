'use server'
import axios from "axios";
import swConnector from "../../libComponents/swConector";
function FacturaGlobalMaker(notasPartidas : any) {
    let total3 = 0;
     
    function getTotal(notas: any) {
      notas.map((note:any) => {
        total3 += Number(note.Importe)
        console.log("total3:"+total3);
      }) 
      return total3
    }
    console.log(notasPartidas)
    let totalConImpuestos: number = getTotal(notasPartidas)
  

      let iva=(totalConImpuestos * 0.16)
      let subtotal=totalConImpuestos.toFixed(2)
    let fecha = new Date();
      let facturaGlobal={
            "Version": "4.0",
            "Serie": "BVIC-G",
            "Folio": "1",
            "Fecha": ""+fecha.toISOString().split('T')[0],
            "Sello": "",
            "FormaPago": 99,
            "FormaPagoSpecified": true,
            "NoCertificado": "",
            "Certificado": "",
            "SubTotal": subtotal,
            "Moneda": "MXN",
            "Total": (totalConImpuestos+iva).toFixed(2),
            "TipoDeComprobante": "I",
            "Exportacion": "01",
            "MetodoPago": "PUE",
            "MetodoPagoSpecified": true,
            "LugarExpedicion": "87030",
            "InformacionGlobal": {
              "Periodicidad": "01",
              "Meses": "08",
              "Año": "2024"
            },
            "Emisor": {
              "Rfc": "RERR6008226N5",
              "Nombre": "ROBERTO RETA RESENDEZ",
              "RegimenFiscal": 612
            },
            "Receptor": {
              "Rfc": "XAXX010101000",
              "Nombre": "PUBLICO EN GENERAL",
              "DomicilioFiscalReceptor": "87030",
              "RegimenFiscalReceptor": 616,
              "UsoCFDI": "S01"
            },
            "Conceptos": notasPartidas,
            "Impuestos": {
        "TotalImpuestosTrasladados": iva.toFixed(2),  
        "Traslados": [
            {
                "Base": subtotal,
                "Impuesto": "002",
                "TipoFactor": "Tasa",
                "TasaOCuota": 0.160000,
                "Importe": iva.toFixed(2)
            }
        ]
    }
              }
              swConnector(facturaGlobal)
      return JSON.stringify(facturaGlobal)

 
}


export default  FacturaGlobalMaker