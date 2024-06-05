'use client'
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { FormGroup, Button } from 'react-bootstrap';
import React from 'react';

import AsyncSelect from 'react-select/async';

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
  

  let obj:any
  function getRequest(url:string) {
    axios.get(url)
    .then(function (response) {
         obj= response.data
      
    })
    .catch(function (error) {
      console.log(error);
    });
    return obj
   }

 
    
   elements.map((element)=>{
  formElements.push(
    <Form.Group className="mb-3" controlId={element.name+element.id}>
    <Form.Label>{element.name}</Form.Label>
    <Form.Control type="text" name={element.name} placeholder={element.placeholder} />
  </Form.Group>
  )
  return formElements
  })

 

   function postRequest(url:string,data:any) {
    axios.post(url,data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
   }
  

  function onSubmit(formData: FormData) {
    let entries = Object.fromEntries(formData.entries()); 
    console.log(entries);
  postRequest(props.recurso,entries) 
  
  }
  
  var opt=getRequest("https://express-low5.onrender.com"+"/productos")  
  return (
    <Form action={onSubmit}>
      {formElements}
      <Form.Group className="mb-3" controlId="producto1">
      <Form.Label>p</Form.Label>
      <select name="producto" id="producto" >{opt.map((option)=>
        (
          <option key={option}>{option}</option>
        ))}
      </select>
        </Form.Group> 
      <Button variant="primary" type="submit" >
        Guardar
      </Button>
    </Form>
  );
}

export default FormCreator;