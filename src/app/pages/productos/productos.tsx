'use client'
import postgres from 'postgres'
import { useForm } from "react-hook-form";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Lista from "../../uiComponents/lista";
import FormCreator from "../../uiComponents/formCreator";
 let url =axios.defaults.baseURL = 'https://express-low5.onrender.com'
/*const sql = postgres( 'postgres://robbie:1234@localhost:5432/mydb ') // will use psql environment variables
    async function getNotes() {
      let notes = await sql`SELECT id,partner_id, fiscal_position_id, payment_term_id, pricelist_id, create_uid, write_uid, name, state, client_order_ref, origin, reference, signed_by, invoice_status, validity_date, note, currency_rate, amount_untaxed, amount_tax, amount_total, amount_to_invoice, locked, require_signature, require_payment, create_date, commitment_date, date_order, signed_on, write_date, prepayment_percent, sale_order_template_id
      FROM public.sale_order WHERE partner_id = '44';
      `
      // notes = Result [{ name: "Walter", age: 80 }, { name: 'Murray', age: 68 }, ...]
      return notes
    }
  



let notes = getNotes()
let  notasPartidas: {
  clave_producto_servicio: string; clave_unidad_de_medida: string; cantidad: number; descripcion: string; valor_unitario: number; total // will use psql environment variables
    : number; exento_de_impuestos: boolean; impuestos: { traslados: { traslado: { base: any; impuesto: string; tipoFactor: string; tasaOCuota: number; importe: number; tipo: string; }[]; }; };
}[]=  [];

function addPartida(notaManual: any) {
     
  const importe =  notaManual.amount_total
let folio = notaManual.name
let iva = Number(importe) * 0.16


  let partida= {
   
    clave_producto_servicio: "01010101",
    clave_unidad_de_medida: "ACT",
    cantidad: 1,
    descripcion: "Venta",
    valor_unitario: Number(importe),
    total: Number(importe),
    exento_de_impuestos: false,
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
}

notes.then((notes) => notes.map((note) => {
  let sec =  Date.now();
  let hoy = new Date(sec).toISOString();

  let fechaCreacion = new Date(note.create_date).toISOString().split('T')[0];
  
  
console.log(hoy,note.name,fechaCreacion,
  note.amount_untaxed,note.amount_total,note.invoice_status,note.state); 
  
   namecheap pone la fecha de creacion 12 horas despues
  console.log(note);
  
  if (note.partner_id == '44' && fechaCreacion== hoy && note.invoice_status == 'to invoice') {


    addPartida(note);
    console.log(notasPartidas);
}


}

)

)

*/
let ListaProps= {
  // Define the properties and their types here
  'precio' : String,
  'categoria' : String,
  'descripcion' : String,
  'marca' : String,
  'especificaciones' : String,
  'codigo' : String,
  'moto' : String,
  'compatibilidades' : [],
  'recurso' : String
}

let elements= [{
  name: "precio",
  id: 1,
  type: "text",
  placeholder: "precio"

} ,
{
  name: "categoria",
  id: 2,
  type: "text",
  placeholder: "categoria"
},
{
  name: "descripcion",
  id: 3,
  type: "text",
  placeholder: "descripcion"
},

{
  name: "marca",
  id: 4,
  type: "text",
  placeholder: "marca"
},
{
  name: "especificaciones",
  id: 5,
  type: "text",
  placeholder: "especificaciones"
},
{
  name: "codigo",
  id: 6,
  type: "text",
  placeholder: "codigo"
},
{
  name: "moto",
  id: 7,
  type: "text",
  placeholder: "moto"
},

{
  name: "compatibilidades",
  id: 8,
  type: "text",
  placeholder: "compatibilidades"
}
]
export default function Productos() {
  // Render the main container
  return (
  
      <div>
        {/* Render the form creator */}
        <FormCreator 
          // Pass the elements array as a prop
          elements={elements} 
          // Pass the URL for the productos resource as a prop
          recurso={url+"/productos"} 
        />
        {/* Render the list component */}
        
        <Lista recurso='/productos'  />
      </div>
    
  );
}
