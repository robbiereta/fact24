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
    let total: number = getTotal(notasPartidas)
      let iva=total * 0.16
      let subtotal=total - iva
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
            "Total": total,
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
              "Rfc": "RER6998226N5",
              "Nombre": "ROBERTO RETA RESENDEZ",
              "RegimenFiscal": 612
            },
            "Receptor": {
              "Rfc": "XAXX010101000",
              "Nombre": "PUBLICO EN GENERAL",
              "DomicilioFiscalReceptor": "87000",
              "RegimenFiscalReceptor": 616,
              "UsoCFDI": "S01"
            },
            "Conceptos": notasPartidas
              }

      return JSON.stringify(facturaGlobal)

 
}


export default  FacturaGlobalMaker