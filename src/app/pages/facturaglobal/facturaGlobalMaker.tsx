'use server'
import axios from "axios";
import swConnector from "../../libComponents/swConector"; 
function FacturaGlobalMaker(notasPartidas : any) {
    let total3 = 0;
     
    function getTotal(notas: any) {
      notas.map((note:any) => {
        total3 += Number(note.total)
        console.log("total3:"+total3);
      }) 
      return total3
    }
    console.log("notasPartidas:"+notasPartidas)
    let total: number = getTotal(notasPartidas)
      let iva=total * 0.16
      let subtotal=total - iva
 let fact = {

    "Version": "4.0",
    "FormaPago": "01",
    "Serie": "SW",
    "Folio": "1",
    "MetodoPago": "PUE",
    "Sello": "",
    "NoCertificado": "",
    "Certificado": "",
    "SubTotal": subtotal,
    "Moneda": "MXN",
    "Total": total,
    "TipoDeComprobante": "I",
    "Exportacion": "01",
    "LugarExpedicion": "8700",
    "Emisor": {
      "Rfc": "EKU9003173C9",
      "Nombre": "ESCUELA KEMPER URGATE",
      "RegimenFiscal": "603"
    },
    "Receptor": {
      "Rfc": "XAXX010101000",
      "Nombre": "PUBLICO EN GENERAL",
      "RegimenFiscalReceptor": "616",
      "UsoCFDI": "S01"
    },
    "Conceptos":notasPartidas   
   }

    
      console.log(fact) 
      let token = swConnector(fact) 
   
}


export default  FacturaGlobalMaker