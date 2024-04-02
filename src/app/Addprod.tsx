'use client'
import FacturaGlobal from "./facturaGlobal";
function Addprod() {
    
    let  notasPartidas: {
        clave_producto_servicio: string; clave_unidad_de_medida: string; cantidad: number; descripcion: string; valor_unitario: number; total // will use psql environment variables
          : number; exento_de_impuestos: boolean; impuestos: { traslados: { traslado: { base: any; impuesto: string; tipoFactor: string; tasaOCuota: number; importe: number; tipo: string; }[]; }; };
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
      
      console.log(notasPartidas);
      return notasPartidas
      }

      function onSubmit(formData: FormData) {
        const importe = formData.get("importe");
        console.log(importe);
        addPartida(importe)
        
      }

      function sendFacturaGlobal(notasPartidas: any) {
        FacturaGlobal(notasPartidas)
      }
      
    return (
        <div>
      <form action={onSubmit}>
        <input name="importe" />
        <button type="submit">Agregar</button>
      </form>
      <button onClick={() => sendFacturaGlobal(notasPartidas)}>Facturar</button>
       
    </div>
    );
  
  }
  
  export default Addprod
  