import Image from "next/image";

import postgres from 'postgres'

const sql = postgres( 'postgres://robbie:1234@localhost:5432/mydb ') // will use psql environment variables

async function getNotes() {
  const notes = await sql`
  SELECT id,partner_id, fiscal_position_id, payment_term_id, pricelist_id, create_uid, write_uid, name, state, client_order_ref, origin, reference, signed_by, invoice_status, validity_date, note, currency_rate, amount_untaxed, amount_tax, amount_total, amount_to_invoice, locked, require_signature, require_payment, create_date, commitment_date, date_order, signed_on, write_date, prepayment_percent, sale_order_template_id
	FROM public.sale_order WHERE partner_id = '44';
  `
  // notes = Result [{ name: "Walter", age: 80 }, { name: 'Murray', age: 68 }, ...]
  return notes
}

let notes = getNotes()

notes.then((notes) => notes.map((note) => {
  let sec =  Date.now()+21600000;
  let hoy = new Date(sec).toISOString().split('T')[0];

  let fechaCreacion = new Date(note.create_date).toISOString().split('T')[0];
 
   
  // namecheap pone la fecha de creacion 12 horas despues
  //console.log(note);
  
  if (note.partner_id == '44' && fechaCreacion== hoy && note.invoice_status == 'invoiced') {

  let total =  note.amount_untaxed
let folio = note.name
  console.log(total,folio)
  }
}))


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
    </main>
  );
}
