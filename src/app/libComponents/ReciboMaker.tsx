'use client'
import postRequest from "./postRequest";
const orderid = require('order-id')('key');
import Ticket from "../uiComponents/ticket";
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
    let iva = totalConImpuestos * 0.16
    let subtotal=totalConImpuestos-iva
   let fecha = new Date();
   let fechaActual = fecha.toISOString();
   const folio = orderid.generate();
      let recibo={
            'folio_venta' : folio,
	'fecha' : fechaActual,
	'cliente' : "Publico en general",
	'lineas_venta' : notasPartidas,
  'total:' : totalConImpuestos,
	'estatus' : "pagado",
	'anticipo' : 0,
	'observaciones' : "observaciones"
                  }

  let ticketContent=Ticket(folio,fechaActual,notasPartidas,iva,subtotal,totalConImpuestos)
  

 postRequest("https://express-low5.onrender.com/notas_venta",recibo)
  return ticketContent       
}


export default  ReciboMaker