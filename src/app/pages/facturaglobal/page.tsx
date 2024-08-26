'use client'
import { FormControl, FormGroup } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import FacturaGlobalMaker from "./facturaGlobalMaker";
import FormAddprod from "@/app/uiComponents/FormAddprod";
import getNotes from "../../libComponents/getNotes";
 function Page() {
    
    let  notasPartidas: {
        clave_producto_servicio: string; clave_unidad_de_medida: string; cantidad: number; descripcion: string; valor_unitario: number; total // will use psql environment variables
          : number; impuestos: { traslados: { traslado: { base: any; impuesto: string; tipoFactor: string; tasaOCuota: number; importe: number; tipo: string; }[]; }; };
      }[]=  [];
      
    function addPartida(ImporteconImpuestos: any) {
     
    
      let iva = Number(ImporteconImpuestos) * 0.16
      
     let importeSinimpuestos=ImporteconImpuestos-iva
      // importe=Number(importeSinimpuestos)
        let partida= {
         
          ClaveProdServ: "01010101",
          ClaveUnidad: "ACT",
          Cantidad: 1,
          Descripcion: "Venta",
          ValorUnitario: Number(importeSinimpuestos),
          Importe: Number(importeSinimpuestos),
          ObjetoImp:"02",
          Impuestos :{
            traslados:[
               {
            
            base: ImporteconImpuestos,
            impuesto: "002",
            tipoFactor: "Tasa",
            tasaOCuota: "0.160000",
            importe: Number(iva),
            }
            ]
        
            }
          
          }
         
        notasPartidas.push(partida)
      return notasPartidas
      }
function init() {
  //let notas=getPartidas()
  setPartidasManual()
  console.log(notasPartidas)
  //sendFacturaGlobal(notasPartidas)
  
}
      function getPartidas() {
        // get postgres 
        getNotes().then((notes) => notes.map((note) => {
          let total =  Number(note.price_subtotal_incl);
          console.log("total:"+total);
          var notas =addPartida(total)


        })
         
      )

      return notasPartidas
        //sendFacturaGlobal(notasPartidas)
        // addPartida(importe)
      }
   function  setPartidasManual(){
   const notasManual=[{total:10},{total:20},{total:30}]
    notasManual.map((partida)=> {
      addPartida(partida.total)
    })
    sendFacturaGlobal(notasPartidas)
   }
      function sendFacturaGlobal(notasPartidas: any) {
        
      let facturaGlobal = FacturaGlobalMaker(notasPartidas)
     
        }

      
   init()
    return (
        <div>
          
      <FormAddprod/>
    </div>
    );
  
  }
  
  export default Page
