'use server'
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import postgres from "postgres";
import FacturaCliente from "./uiComponents/cliente/factura_cliente";
let url =axios.defaults.baseURL = 'https://express-low5.onrender.com'
const sql = postgres( 'postgres://'+process.env.dba_user+process.env.dba_password+process.env.dba_host+process.env.dba_port+process.env.dba_name) // will use psql environment variables
async function getNotes() {
      let notes = await sql`SELECT *
      FROM public.pos_order ;
      `
      // notes = Result [{ name: "Walter", age: 80 }, { name: 'Murray', age: 68 }, ...]
      console.log(notes);
      
      return notes
      
    }
  



let posNotes = getNotes()


// console.log(hoy,note.name,fechaCreacion,
//   note.amount_untaxed,note.amount_total,note.invoice_status,note.state); 
  
//   //  namecheap pone la fecha de creacion 12 horas despues
//   console.log(note);
  
//   if (note.partner_id == '44' && fechaCreacion== hoy && note.invoice_status == 'to invoice') {


//     addPartida(note);
//     console.log(notasPartidas);
// }


// }

// )

// )



/**
 * Home component is the main component of the application.
 * It renders the navigation bar, the form creator, and the list component.
 * 
 * @returns JSX.Element
 */
export default async function Home() {
  // Render the main container
  return (
    <main>
      {/* Render the navigation bar */}
      {/* Render the form creator and the list component */}
      <div>
       <FacturaCliente/>
      </div>
    </main>
  );
}
