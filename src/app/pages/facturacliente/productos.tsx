'use server'
import { useForm } from "react-hook-form";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Lista from "../../uiComponents/lista";
import FormCreator from "../../uiComponents/formCreator";
import connectDB from '../../config/db';
import Order from '../../models/Order';

async function getNotes() {
  await connectDB();
  const notes = await Order.find({ partner_id: '44' }).select([
    'name', 'state', 'client_order_ref', 'origin', 'reference', 'signed_by',
    'invoice_status', 'validity_date', 'note', 'currency_rate', 'amount_untaxed',
    'amount_tax', 'amount_total', 'amount_to_invoice', 'locked', 'require_signature',
    'require_payment', 'create_date', 'commitment_date', 'date_order', 'signed_on',
    'write_date', 'prepayment_percent', 'sale_order_template_id'
  ]);
  return notes;
}

let notes = getNotes()

interface Traslado {
  base: any;
  impuesto: string;
  tipoFactor: string;
  tasaOCuota: number;
  importe: number;
  tipo: string;
}

interface Impuestos {
  traslados: {
    traslado: Traslado[];
  };
}

interface NotaPartida {
  clave_producto_servicio: string;
  clave_unidad_de_medida: string;
  cantidad: number;
  descripcion: string;
  valor_unitario: number;
  total: number;
  exento_de_impuestos: boolean;
  impuestos: Impuestos;
}

let notasPartidas: NotaPartida[] = [];

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

// Process notes when the promise resolves
notes.then((notes) => {
  notes.forEach((note) => {
    const sec = Date.now();
    const hoy = new Date(sec).toISOString().split('T')[0];
    const fechaCreacion = new Date(note.create_date).toISOString().split('T')[0];
    
    console.log(hoy, note.name, fechaCreacion,
      note.amount_untaxed, note.amount_total, note.invoice_status, note.state);
    
    // namecheap pone la fecha de creacion 12 horas despues
    console.log(note);
    
    if (note.partner_id === '44' && fechaCreacion === hoy && note.invoice_status === 'to invoice') {
      addPartida(note);
      console.log(notasPartidas);
    }
  });
}).catch((error) => {
  console.error('Error processing notes:', error);
});

export default async function Productos() {
  // Render the main container
  return (
  
      <div>
    
     a
      </div>
    
  );
}
