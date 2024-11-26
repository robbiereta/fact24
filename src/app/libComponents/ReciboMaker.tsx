'use client'
import postRequest from "./postRequest";
import getRequest from "./getRequest"; 
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
   let notas_venta= getRequest("https://express-low5.onrender.com/notas_venta","")
   console.log(notas_venta) 
   let fecha = new Date();
      let recibo={
            'folio_venta' : "1",
	'fecha' : fecha.toISOString().split('T')[0],
	'cliente' : "Cliente",
	'lineas_venta' : notasPartidas,
  'total:' : totalConImpuestos,
	'estatus' : "pagado",
	'anticipo' : 0,
	'observaciones' : "observaciones"
                  }

           postRequest("https://express-low5.onrender.com/notas_venta",recibo)
          
}


export default  ReciboMaker