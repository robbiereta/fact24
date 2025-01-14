'use client'
import Form from 'react-bootstrap/Form';
import { FormGroup, Button } from 'react-bootstrap';
import React from 'react';
import NominaV1 from '../pages/nomina/v1';
interface FormCreatorProps {
  elements: {
    name: string;
    id: number;
    type: string;
    placeholder: string;
  }[];
}


function FormNom(props:FormCreatorProps) {

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
   
  }
    
  
  return (
    <Form action={onSubmit}>
      {formElements}
      <Button variant="primary" type="submit" >
        Guardar
      </Button>
    </Form>
  );
}

export default FormNom;