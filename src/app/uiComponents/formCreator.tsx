'use client'
import Form from 'react-bootstrap/Form';
import { FormGroup, Button } from 'react-bootstrap';
import React from 'react';
import axios from 'axios';
import NominaV1 from '../pages/nomina/v1';
import option from 'react-select';
import AsyncSelect from 'react-select/async';
import SelectComponent from './select';

interface FormCreatorProps {
  elements: {
    name: string;
    id: number;
    type: string;
    placeholder: string;
  }[];
  recurso: string,
  image: boolean
}


function FormCreator(props:FormCreatorProps) {

  let elements=props.elements
  let formElements:any[]=[]
  var optionelements:any[]=[]
  let options:any[]=[]
    
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
    NominaV1("aldo",entries)
  }
  function getOptions(list:any[]) {
   
    list.map((element)=>{
      options.push(<option>+element+</option>)
    })
    console.log(options)
    return options
  }
  let obj :any[] =[]  
  function getRequest(url) {
    let data = '';
    
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url:url,
      headers: { },
      data : data
    };
    
    axios.request(config)
    .then((response) => {
       obj = response.data
       
      
       obj.map((element)=>{
         options.push(element.Receptor[0].Nombre)
       })
      console.log(options) 
      
       return options
       

    })
    .catch((error) => {
      console.log(error);
    });
    
     }
 var opt=getRequest(process.env.urlEmp) 
    return (
    <Form action={onSubmit}>
      {formElements}
      <select name= "empleado">
        
        </select>
<SelectComponent label="Empleados" name="empleado" options={options} />
      <Button variant="primary" type="submit" >
        Guardar
      </Button>
    </Form>
  );
}

export default FormCreator;