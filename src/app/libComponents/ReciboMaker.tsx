'use client'
import swConnector from "./swConector";
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
    console.log(totalConImpuestos);

    let fecha = new Date();
      let recibo={
            "Folio": "1",
            "Fecha": "2024-11-04",
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
              "Meses": "10",
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
              console.log("fact"+facturaGlobal)
              swConnector(facturaGlobal)
      return JSON.stringify(facturaGlobal)

 
}


export default  ReciboMaker