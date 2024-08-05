'use client'
import { FormControl, FormGroup } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import FacturaGlobalMaker from "./facturaGlobalMaker";
import getNotes from "../../libComponents/getNotes";
 function Facturaglobal() {
    
    let  notasPartidas: {
        clave_producto_servicio: string; clave_unidad_de_medida: string; cantidad: number; descripcion: string; valor_unitario: number; total // will use psql environment variables
          : number; impuestos: { traslados: { traslado: { base: any; impuesto: string; tipoFactor: string; tasaOCuota: number; importe: number; tipo: string; }[]; }; };
      }[]=  [];
      
    function addPartida(importe: any) {
     
    
      let iva = Number(importe) * 0.16
      
      
        let partida= {
         
          clave_producto_servicio: "01010101",
          clave_unidad_de_medida: "ACT",
          cantidad: 1,
          descripcion: "Venta",
          valor_unitario: Number(importe),
          total: Number(importe),
          impuestos: {
            traslados: {
            traslado: [
            {
            base: importe,
            impuesto: "002",
            tipoFactor: "Tasa",
            tasaOCuota: 0.16,
            importe: Number(importe) - iva,
            tipo: "Traslado"
            }
            ]
            }
         }
         
        }
        notasPartidas.push(partida)
      return notasPartidas
      }
function init() {
  //let notas=getPartidas()
  setPartidasManual()
  console.log(notasPartidas)
  sendFacturaGlobal(notasPartidas)
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
    
   }
      function sendFacturaGlobal(notasPartidas: any) {
        
         FacturaGlobalMaker(notasPartidas)
      }
      
    return (
        <div>
      <button onClick={() => init()}>checar factura</button>
       
    </div>
    );
  
  }
  
  export default Facturaglobal
