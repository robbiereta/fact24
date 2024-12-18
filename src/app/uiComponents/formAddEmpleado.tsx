'use client'
import Form from 'react-bootstrap/Form';
import { FormGroup, Button } from 'react-bootstrap';
import React from 'react';
import postRequest from '../libComponents/postRequest';
import NominaV1 from '../pages/nomina/v1';
import SelectComponent from './select';

interface FormCreatorProps {
  elements: {
    name: string;
    id: number;
    type: string;
    placeholder: string;
  }[];
  recurso: string
}


function FormAddEmpleado(props:FormCreatorProps) {

  let elements=props.elements
  let formElements:any[]=[]
  var optionelements:any[]=[]
  

  let obj:any
    
   elements.map((element)=>{
  formElements.push(
    <Form.Group className="mb-3" controlId={element.name+element.id}>
    <Form.Label>{element.placeholder}</Form.Label>
    <Form.Control type={element.type} name={element.name} placeholder={element.placeholder} />
  </Form.Group>
  )
  return formElements
  })

 
 

  function onSubmit(formData: FormData) {
    let entries = Object.fromEntries(formData.entries()); 
    console.log(entries);
    let obj=
    {
      "Emisor": {
         
      },
      "Receptor": { 
        "Rfc": entries.RFC,
        "Nombre": entries.Nombre_Completo,
        "DomicilioFiscalReceptor": entries.Codigo_postal,
        "RegimenFiscalReceptor": "605",
        "UsoCFDI": "CN01",
      },
      "Conceptos":  {
        "ClaveProdServ": "84111505",
        "Cantidad": "1",
        "ClaveUnidad": "ACT",
        "Descripcion": "Pago de nómina",
        "ValorUnitario": entries.Importe,
        "Importe": entries.Importe,
        "Descuento": entries.Descuento,
        "ObjetoImp": "01"
    },
      "Datos_Nomina12": {},
  }
    //postRequest(props.recurso,obj)
  }
  

  return (
    <Form action={onSubmit}>
      {formElements}
      <SelectComponent label="Tipo de Contrato" name="c_TipoContrato" options={optionelements} />
      <Button variant="primary" type="submit" >
        Guardar
      </Button>
    </Form>
  );
}

export default FormAddEmpleado;