'use client'
import swConnector from "./swConector";
function FacturaGlobalMaker(notasPartidas : any) {
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
    

      let iva=(totalConImpuestos * 0.16)
      let subtotal=(totalConImpuestos-iva)
    let fecha = new Date();
 
      return JSON.stringify(facturaGlobal)

 
}


export default  FacturaGlobalMaker