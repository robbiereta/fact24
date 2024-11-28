'use client'

const receipt = require("receipt");
function Ticket(folio,fechaActual,notasPartidas,iva,subtotal,total) {
        let lineas:any=[]
        notasPartidas.map((nota)=>{
            lineas.push({item:nota.Descripcion,qty:nota.Cantidad,cost:nota.ImporteRealConImp})
        })
  const output = receipt.create([
    { type: 'text', value: [
        'Bici-Vic Centro',
        'Mariano Matamoros 1242,Centro. ',
        'C.P. 87000,Ciudad Victoria,Tamaulipas.',
        'RFC: FOZA8801257C2',
        'Regimen Simplicado de Confianza'
    ], align: 'center' },
    { type: 'empty' },
    { type: 'properties', lines: [
        { name: 'No. de Folio', value: folio },
        { name: 'Fecha', value: fechaActual }
    ] },
    { type: 'table', lines:lineas },
    { type: 'empty' },
    { type: 'text', value: 'Some extra information to add to the footer of this docket.', align: 'center' },
    { type: 'empty' },
    { type: 'properties', lines: [
        { name: 'IVA (16%)', value: iva },
        { name: 'Subtotal:', value: subtotal },
        { name: 'Total :', value: total }
    ] },
    { type: 'empty' },
    { type: 'properties', lines: [
        { name: 'Recibido:', value: '0.00' },
        { name: 'Cambio:', value: '0.00' }
    ] },
    { type: 'empty' },
    { type: 'text', value: 'Final bits of text at the very base of a docket. This text wraps around as well!', align: 'center', padding: 5 }
  ]); 
  
  return output
}

export default Ticket;