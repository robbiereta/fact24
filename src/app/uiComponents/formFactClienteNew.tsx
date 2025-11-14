'use server'
import postRequest from "../libComponents/postRequest";
const orderid = require('order-id')('key');

import swConnector from "../libComponents/swConector";
import { Form, Button } from 'react-bootstrap';
import React from 'react';

// Define types for better type safety
interface Partida {
  ClaveProdServ: string;
  ClaveUnidad: string;
  Unidad: string;
  Cantidad: string;
  Descripcion: string;
  ValorUnitario: string;
  Importe: string;
  ImporteRealConImp: string;
  ObjetoImp: string;
  Impuestos: {
    Traslados: Array<{
      Base: string;
      Importe: string;
      Impuesto: string;
      TipoFactor: string;
      TasaOCuota: string;
    }>
  }
}

function ReciboMaker(notasPartidas: Partida[]) {
    let total3 = 0;
     
    function getTotal(notas: Partida[]) {
      notas.forEach((note) => {
        total3 += Number(note.ImporteRealConImp)
        console.log("total3:"+total3);
      })
      return total3
    }
    let totalConImpuestos: number = getTotal(notasPartidas)
    let iva : number = totalConImpuestos * 0.16
    let subtotal: number = totalConImpuestos - iva
    let fecha = new Date();
    let fechaActual = fecha.toLocaleDateString();
    let folio = orderid.generate();

    function addPartida(Descripcion: string, importe: number | string, claveprodserv: string) {
        const importeNum = Number(importe);
        let iva = importeNum * 0.16
        let impdeConcepto = importeNum - iva
        let partida: Partida = {
            ClaveProdServ: claveprodserv,
            ClaveUnidad: "H87",
            Unidad: "Pieza",
            Cantidad: "1.0",
            Descripcion: Descripcion,
            ValorUnitario: ""+impdeConcepto+"0",
            Importe: ""+impdeConcepto+"0",
            ImporteRealConImp: ""+importe+"",
            ObjetoImp: "02",
            Impuestos: {
                Traslados: [{
                    Base: ""+importe+".00",
                    Importe: ""+iva.toFixed(2)+"",
                    Impuesto: "002",
                    TipoFactor: "Tasa",
                    TasaOCuota: "0.160000",
                }]
            }
        }
        notasPartidas.push(partida)
        console.log(notasPartidas)
    }

    function FacturaMaker(notasPartidas: Partida[]) {
        let total3 = 0;
       
        function getTotal(notas: Partida[]) {
            notas.forEach((note) => {
                total3 += Number(note.ImporteRealConImp)
                console.log("total3:"+total3);
            }) 
            return total3
        }
        let totalConImpuestos: number = getTotal(notasPartidas)
        console.log(totalConImpuestos);
      
        let iva = totalConImpuestos * 0.16
        let subtotal = totalConImpuestos - iva
        let fecha = new Date();
        
    function onSubmitForFact() {
        FacturaMaker(notasPartidas)
    }

    function onSubmit(formData: FormData) {
        let entries = Object.fromEntries(formData.entries()); 
        console.log(entries);
        addPartida(
            entries.Descripcion as string, 
            entries.importe as string, 
            entries.claveprodserv as string
        )
    }
  
    return (
        <>
        <Form action={onSubmit}>
            {/* Placeholder for form elements */}
            <Button variant="primary" type="submit">
                Guardar
            </Button>
        </Form>
        <Button onClick={onSubmitForFact}>
            Facturar
        </Button>
        </>
    );
}

export default ReciboMaker;
