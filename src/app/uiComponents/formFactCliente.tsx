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
  "RegimenFiscal": "626"
}

let rerr={
  "Rfc": "JCE171003UI5",
  "Nombre": "JAKTUR CONSORCIO EMPRESARIAL",
  "DomicilioFiscalReceptor": "89460",
  "RegimenFiscalReceptor": "601",
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

  let notasPartidas:any[]=[]
  function addPartida(Descripcion:any,importe:any,claveprodserv:any) {
     
    
    let iva = Number(importe) * 0.16
    let impdeConcepto=Number(importe-iva)
    // importe=Number(importeSinimpuestos)
      let partida= {
        ClaveProdServ: claveprodserv,
        ClaveUnidad: "H87",
        Unidad: "Pieza",
        Cantidad: "1.0",
        Descripcion: Descripcion,
        ValorUnitario: ""+impdeConcepto+"0",
        Importe: ""+impdeConcepto+"0",
        ImporteRealConImp:"" +importe +"",
        ObjetoImp:"02",
        Impuestos :{
          Traslados:[
             {
          Base: ""+importe+".00",
          Importe: ""+iva.toFixed(2)+"",
          Impuesto: "002",
          TipoFactor: "Tasa",
          TasaOCuota: "0.160000",
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
          total3 += Number(note.ImporteRealConImp)
          console.log("total3:"+total3);
        }) 
        return total3
      }
      let totalConImpuestos: number = getTotal(notasPartidas)
      console.log(totalConImpuestos);
      
      
        let iva=totalConImpuestos * 0.16
        let subtotal=totalConImpuestos-iva
      let fecha = new Date();
        let factura={
    "Version": "4.0",
    "FormaPago": "01",
    "Serie": "RL",
    "Folio": "7",
    "Fecha": "2024-12-21",
    "MetodoPago": "PUE",
    "Sello": "",
    "NoCertificado": "",
    "Certificado": "",
    "SubTotal": ""+subtotal.toFixed(2)+"",
    "Moneda": "MXN",
    "Total": ""+totalConImpuestos.toFixed(2)+"",
    "TipoDeComprobante": "I",
    "Exportacion": "01",
    "LugarExpedicion": "87000",
              "Emisor": foza,
              "Receptor": rerr,
              "Conceptos":notasPartidas.map(({ImporteRealConImp, ...rest}) => rest),
              "Impuestos": {
          "TotalImpuestosTrasladados": iva.toFixed(2),  
          "Traslados": [
              {
                  "Base": Number(totalConImpuestos).toFixed(2),
                  "Importe": Number(iva).toFixed(2),
                  "Impuesto": "002",
                  "TipoFactor": "Tasa",
                  "TasaOCuota": "0.160000",
              }
          ]
      }
                }
               swConnector(factura)
        console.log(factura) 
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