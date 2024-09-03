'use client'
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { FormGroup, Button } from 'react-bootstrap';
import React from 'react';
import NominaV1 from '../pages/nomina/v1';
import SelectComponent from './select';
import { tipo_contrato } from './data.json';

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
  function getRequest(url:string) {
    axios.get(url)
    .then(function (response) {
         obj= response.data
         return obj    
    })
    .catch(function (error) {
      console.log(error);
    });
  
   }

 
    
   elements.map((element)=>{
  formElements.push(
    <Form.Group className="mb-3" controlId={element.name+element.id}>
    <Form.Label>{element.placeholder}</Form.Label>
    <Form.Control type={element.type} name={element.name} placeholder={element.placeholder} />
  </Form.Group>
  )
  return formElements
  })

 

   function postRequest(url:string,data:any) {
    axios.post(url,data)
    .then(function (response) {
      console.log(response);
      NominaV1("aldo",response)
    })
    .catch(function (error) {
      console.log(error);
    });
   }
  

  function onSubmit(formData: FormData) {
    let entries = Object.fromEntries(formData.entries()); 
    console.log(entries);
    
  }
  let optionElements=tipo_contrato.map((element)=>{
    optionelements.push(<option>{element.Descripcion}</option>) 
  })
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