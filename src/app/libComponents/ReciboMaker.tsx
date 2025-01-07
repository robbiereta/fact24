'use client';
import postRequest from "./postRequest";
const orderid = require('order-id')('key');
export default function ReciboMaker(notasPartidas: any,folio) {

  let total3 = 0;
  function getTotal(notas: any) {
    notas.map((note: any) => {
      total3 += Number(note.ImporteRealConImp)
      console.log("total3:" + total3);
    })
    return total3
  }
  let totalConImpuestos: number = getTotal(notasPartidas)
  let iva: number = totalConImpuestos * 0.16
  let subtotal: number = totalConImpuestos - iva
  let fecha = new Date();
  let fechaActual = fecha.toLocaleDateString();
  

  let recibo = {
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