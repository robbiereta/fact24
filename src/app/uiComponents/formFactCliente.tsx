'use client'
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { FormGroup, Button } from 'react-bootstrap';
import React from 'react';
import swConnector from '../libComponents/swConector';
interface FormCreatorProps {
  elements: {
    name: string;
    id: number;
    type: string;
    placeholder: string;
  }[];
}


function FormFactCliente(props:FormCreatorProps) {
 let foza= {
  "Rfc": "FOZA8801257C2",
  "Nombre": "ALMA ALICIA FLORES ZAVALA",
  "RegimenFiscal": 626
}

let rerr={
  "Rfc": "RERR6008226N5",
  "Nombre": "ROBERTO RETA RESENDEZ",
  "DomicilioFiscalReceptor": "87000",
  "RegimenFiscalReceptor": 612,
  "UsoCFDI": "G01"
}


  let elements=props.elements
  let formElements:any[]=[]
  var optionelements:any[]=[]

   elements.map((element)=>{
  formElements.push(
    <Form.Group className="mb-3" controlId={element.name+element.id} key={element.id+"key1"}>
    <Form.Label key={element.id+"key2"}>{element.placeholder}</Form.Label>
    <Form.Control  key={element.id+"key3"}type={element.type} name={element.name} placeholder={element.placeholder} />
  
  </Form.Group>
  )
  return formElements
  })

  let notasPartidas=[]
  function addPartida(Descripcion,importe,claveprodserv) {
     
    
    let iva = Number(importe) * 0.16
    let impdeConcepto=Number(importe-iva)
    // importe=Number(importeSinimpuestos)
      let partida= {
        ClaveProdServ: claveprodserv,
        ClaveUnidad: "H87",
        Cantidad: "1",
        Descripcion: Descripcion,
        ValorUnitario: ""+impdeConcepto+"",
        Importe: ""+impdeConcepto+"",
        ObjetoImp:"02",
        Impuestos :{
          traslados:[
             {
          
          base: ""+importe+"",
          impuesto: "002",
          tipoFactor: "Tasa",
          tasaOCuota: "0.160000",
          importe: ""+Number(iva)+"",
          }
          ]
      
          }
        
        }
       
      notasPartidas.push(partida)
     console.log(notasPartidas)
    }

    function FacturaMaker(notasPartidas : any) {
    
      
      let total3 = 0;
       
      function getTotal(notas: any) {
        notas.map((note:any) => {
          total3 += Number(note.importeConImp)
          console.log("total3:"+total3);
        }) 
        return total3
      }
      let totalConImpuestos: number = getTotal(notasPartidas)
      console.log(totalConImpuestos);
      
      
        let iva=totalConImpuestos * 0.16
        let subtotal=totalConImpuestos-iva
      let fecha = new Date();
        let facturaGlobal={
              "Version": "4.0",
              "Serie": "RAL-F",
              "Folio": "2",
              "Fecha": ""+fecha.toLocaleDateString()+"",
              "Sello": "",
              "FormaPago": "03",
              "FormaPagoSpecified": true,
              "NoCertificado": "",
              "Certificado": "",
              "SubTotal": ""+subtotal.toFixed(2)+"",
              "Moneda": "MXN",
              "Total": ""+totalConImpuestos.toFixed(2)+"",
              "TipoDeComprobante": "I",
              "Exportacion": "01",
              "MetodoPago": "PUE",
              "MetodoPagoSpecified": true,
              "LugarExpedicion": "87000",
  
              "Emisor": foza,
              "Receptor": rerr,
              "Conceptos": notasPartidas,
              "Impuestos": {
          "TotalImpuestosTrasladados": iva.toFixed(2),  
          "Traslados": [
              {
                  "Base": Number(totalConImpuestos).toFixed(2),
                  "Impuesto": "002",
                  "TipoFactor": "Tasa",
                  "TasaOCuota": "0.16000",
                  "Importe": iva.toFixed(2)
              }
          ]
      }
                }
               swConnector(facturaGlobal)
        console.log(facturaGlobal) 
  }
  function onSubmitForFact() {
    FacturaMaker(notasPartidas)
  }
  

  function onSubmit(formData: FormData) {
    let entries = Object.fromEntries(formData.entries()); 
    console.log(entries);
    addPartida(entries.Descripcion,entries.importe,entries.claveprodserv)

  }
  
  
  return (
    <>
    <Form action={onSubmit}>
      {formElements}
      <Button variant="primary" type="submit" >
        Guardar
      </Button>
    </Form>
    <Button  onClick={onSubmitForFact}>
     Facturar
      </Button>
    </>
  );
}

export default FormFactCliente;