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
      
      console.log("notas:"+notasPartidas);
      return notasPartidas
      }

      function getPartidas() {
        // get postgres 
        getNotes().then((notes) => notes.map((note) => {
          let sec =  Date.now();
          console.log(sec)
        }))
        // let importe
        // console.log(importe);
        // addPartida(importe)
       
      }

      function sendFacturaGlobal(notasPartidas: any) {
        getPartidas()
        // FacturaGlobalMaker(notasPartidas)
      }
      
    return (
        <div>
      <button onClick={() => getPartidas()}>checar factura</button>
       
    </div>
    );
  
  }
  
  export default Facturaglobal
