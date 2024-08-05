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
  
       version: "4.0",
       fecha: '{{now}}',
       tipo: "ingreso",
       Exportacion: "01",
       subtotal: subtotal,
       impuesto_federal: iva,
       moneda: "MXN",
       total: total,
       generacion_automatica: true,
       conceptos:notasPartidas,
       InformacionGlobal: {
       Periodicidad: "Diario",
   Meses: "Enero",
   Anio: "2024"
    
    
   
   }
  }
    
      console.log(fact) 
      let token = swConnector() 
     let config = {
       method: 'post',
       maxBodyLength: Infinity,
       url: 'http://services.test.sw.com.mx/v3/cfdi33/issue/json/v4',
       headers: { 
         'Authorization': 'Bearer '+token, 
         'Content-Type': 'application/jsontoxml'
       },
       data : fact
     };
     
     axios.request(config)
     .then((response) => {
       console.log(JSON.stringify(response.data));
     })
     .catch((error) => {
       console.log(error);
     });
     
      
}


export default  FacturaGlobalMaker