'use server'
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import postgres from "postgres";
import NavScroll from "./uiComponents/nav";
let url =axios.defaults.baseURL = 'https://express-low5.onrender.com'

  


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
 * It renders the navigation bar
 * 
 * @returns JSX.Element
 */
export default async function Home() {
  // Render the main container
  return (
    <main>
      {/* Render the navigation bar */}
      <div>
       <NavScroll />
      </div>
    </main>
  );
}
