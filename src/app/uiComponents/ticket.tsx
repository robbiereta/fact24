'use client'
const receipt = require("receipt");
function Ticket(folio,fechaActual) {
         
  const output = receipt.create([
    { type: 'text', value: [
        'Bici-Vic',
        'Mariano Matamoros 1242',
        'RFC',
        'Regimen'
    ], align: 'center' },
    { type: 'empty' },
    { type: 'properties', lines: [
        { name: 'No. de Folio', value: folio },
        { name: 'Fecha', value: fechaActual }
    ] },
    { type: 'table', lines: [
        { item: 'Product 1', qty: 1, cost: 1000 },
        { item: 'Product 2 with a really long name', qty: 1, cost: 17500, discount: { type: 'absolute', value: 1000 } },
        { item: 'Another product wth quite a name', qty: 2, cost: 900 },
        { item: 'Product 4', qty: 1, cost: 80, discount: { type: 'percentage', value: 0.15 } },
        { item: 'This length is ridiculously lengthy', qty: 14, cost: 8516 },
        { item: 'Product 6', qty: 3, cost: 500 },
        { item: 'Product 7', qty: 3, cost: 500, discount: { type: 'absolute', value: 500, message: '3 for the price of 2' } }
    ] },
    { type: 'empty' },
    { type: 'text', value: 'Some extra information to add to the footer of this docket.', align: 'center' },
    { type: 'empty' },
    { type: 'properties', lines: [
        { name: 'GST (10.00%)', value: 'AUD XX.XX' },
        { name: 'Total amount (excl. GST)', value: 'AUD XX.XX' },
        { name: 'Total amount (incl. GST)', value: 'AUD XX.XX' }
    ] },
    { type: 'empty' },
    { type: 'properties', lines: [
        { name: 'Amount Received', value: 'AUD XX.XX' },
        { name: 'Amount Returned', value: 'AUD XX.XX' }
    ] },
    { type: 'empty' },
    { type: 'text', value: 'Final bits of text at the very base of a docket. This text wraps around as well!', align: 'center', padding: 5 }
  ]); 
  
  return output
}

export default Ticket;