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
    console.log(totalConImpuestos);

   let fecha = new Date();
   const id = orderid.generate();
      let recibo={
            'folio_venta' : id,
	'fecha' : fecha.toISOString().split('T')[0],
	'cliente' : "Cliente",
	'lineas_venta' : notasPartidas,
  'total:' : totalConImpuestos,
	'estatus' : "pagado",
	'anticipo' : 0,
	'observaciones' : "observaciones"
                  }

 Ticket(id)
  

 postRequest("https://express-low5.onrender.com/notas_venta",recibo)
          
}


export default  ReciboMaker