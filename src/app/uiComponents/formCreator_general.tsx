'use client'
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { FormGroup, Button } from 'react-bootstrap';
import React from 'react';
import AsyncSelect from 'react-select/async';
import ReciboMaker from '../libComponents/ReciboMaker';

import folioToFact from '../libComponents/folioToFact';
interface FormCreatorProps {
  elements: {
    name: string;
    id: number;
    type: string;
    placeholder: string;
  }[];
}


function FormCreator(props:FormCreatorProps) {

  let elements=props.elements
  let formElements:any[]=[]
  var optionelements:any[]=[]

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
    folioToFact(entries.folio)
  }
  
  return (
    <Form action={onSubmit}>
      {formElements}
     <Button variant="primary" type="submit" >
        Enviar
      </Button>
    </Form>
  );
}

export default FormCreator;