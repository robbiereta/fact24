'use client'
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { FormGroup, Button } from 'react-bootstrap';


function FormCreator(props) {
    let elements=props.elements
    let formElements:any[]=[]
    elements.map((element)=>{
      formElements.push(<FormGroup controlId={element.name+element.id}>
        <Form.Label>{element.name}</Form.Label>
        <Form.Control type={element.type} placeholder={element.placeholder} name={element.name} />  
      </FormGroup>)
    })

  function onSubmit(formData: FormData) {
    let entries = Object.fromEntries(formData.entries()); 
    console.log(entries);
    axios.post(props.recurso, entries)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
    return (
    <Form action={onSubmit}>
      {formElements}
      <Button variant="primary" type="submit" >
        Submit
      </Button>
    </Form>
  );
}

export default FormCreator;