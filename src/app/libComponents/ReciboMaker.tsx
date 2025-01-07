'use client';
import postRequest from "./postRequest";
const orderid = require('order-id')('key');

interface NotaPartida {
  ImporteRealConImp: number;
  // Add other properties that might exist in notasPartidas
}

interface Recibo {
  folio_venta: string;
  fecha: string;
  cliente: string;
  lineas_venta: NotaPartida[];
  total: number;
  estatus: string;
  anticipo: number;
  observaciones: string;
}

export default function ReciboMaker(notasPartidas: NotaPartida[], folio: string) {

  let total3 = 0;
  
  function getTotal(notas: NotaPartida[]): number {
    notas.forEach((note: NotaPartida) => {
      total3 += Number(note.ImporteRealConImp);
      console.log("total3:" + total3);
    });
    return total3;
  }
  let totalConImpuestos: number = getTotal(notasPartidas)
  let iva: number = totalConImpuestos * 0.16
  let subtotal: number = totalConImpuestos - iva
  let fecha = new Date();
  let fechaActual = fecha.toLocaleDateString();
  

  let recibo: Recibo = {
    'folio_venta': folio,
    'fecha': fechaActual,
    'cliente': "Publico en general",
    'lineas_venta': notasPartidas,
    'total': totalConImpuestos,
    'estatus': "pagado",
    'anticipo': 0,
    'observaciones': "observaciones"
  }
  postRequest("https://express-low5.onrender.com/notas_venta",recibo)

}