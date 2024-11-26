'use server'

import  postgres  from 'postgres'
const sql = postgres( 'postgres://'+process.env.dba_user+process.env.dba_password+process.env.dba_host+process.env.dba_port+process.env.dba_name) // will use psql environment variables
 async function getNotesFromO() {
    

     

      
        let notes = await sql`SELECT *
        FROM public.pos_order_line;
        `
        // notes = Result [{ name: "Walter", age: 80 }, { name: 'Murray', age: 68 }, ...]
        console.log(notes);
   
        let notasPartidas:any[]=[]
        function addPartida(importe:any) {
           
          
          let iva = Number(importe) * 0.16
          let impdeConcepto=Number(importe-iva)
          // importe=Number(importeSinimpuestos)
            let partida= {
              ClaveProdServ: "01010101",
              ClaveUnidad: "ACT",
              Unidad: "Actividad",
              Cantidad: "1",
              Descripcion: "Venta",
              ValorUnitario: ""+impdeConcepto+"",
              Importe: ""+impdeConcepto+"",
              ImporteRealConImp:"" +Number(importe) +"",
              ObjetoImp:"02",
              Impuestos :{
                Traslados:[
                   {
                Base: ""+importe+"",
                Impuesto: "002",
                TipoFactor: "Tasa",
                TasaOCuota: "0.160000",
                Importe: ""+iva+"",
                }
                ]
            
                }
              
              }
             
            notasPartidas.push(partida)
           console.log(notasPartidas)
          }
      

        function convertNotes(notasdeO) {
            notasdeO.map((nota) => {
              
              
            })
            
            addPartida(importefromO)
        }
        convertNotes(notes)
  
  }
  
  export default getNotesFromO