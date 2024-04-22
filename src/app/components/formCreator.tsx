'use client'
import Form from 'react-bootstrap/Form';
import { FormGroup, Button } from 'react-bootstrap';

function FormCreator(props) {
    let elements=props.elements
    let formElements:any[]=[]
    elements.map((element)=>{
      formElements.push(<FormGroup controlId={element.name+element.id}>
        <Form.Label>{element.name}</Form.Label>
        <Form.Control type={element.type} placeholder={element.placeholder} />  
      </FormGroup>)
    })

  function onSubmit(formData: FormData) {
    const importe = formData.getAll();
    
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