'use client'
import axios from "axios";
function FacturaGlobal(notasPartidas : any) {
    var total3 = 0;
     
      function getTotal()   {

      
try {
    
    notasPartidas.map(
        function name(nota:{total: number}) {
           total3 += Number(nota.total)
           console.log(Number(total3))
        

}
)
return total3
} 
    catch (error) {
    console.error(error);
    
}
}
      let total= getTotal();
      if(total!==undefined){
      let iva=total * 0.16
      let subtotal=total - iva
    

 let fact = {
    emisor: {
     uuid: "243e2426-7e9e-4362-b22b-141b59bb6107"
     },
     receptor: {
     razon_social: "PUBLICO EN GENERAL",
     rfc: "XAXX010101000",
     "email": "robbie.reta67@gmail.com",
     "metodo_de_pago": "PUE",
     "forma_de_pago": "01",
     "uso_de_cfdi": "S01",
     "cp": "87030",
     "regimen": "616",
     },
    
     factura: {
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
       },
       send_pdf_and_xml_by_mail: true,
     }
    
   
   }
  
      console.log(fact)
      saveFacturaObj(fact)
      }    
      function saveFacturaObj(fact: any) {
  

        axios.post('http://localhost:3008/facturas_borradorObject', fact)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        }
      
      
}


export default  FacturaGlobal