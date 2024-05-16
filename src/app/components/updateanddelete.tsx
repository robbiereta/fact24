'use client'
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { FormGroup, Button } from 'react-bootstrap';



function UpdateandDeleteControls(props) {
    
    

  function onSubmitForDelete(formData: FormData) {
    let entries = Object.fromEntries(formData.entries()); 
    console.log(entries);
    axios.delete(props.recurso, entries)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
    return (
    <Form action={onSubmitForDelete}>
      <input type="hidden" name="id" value={props.id} />
      <Button variant="danger" type="submit" >
        Borrar
      </Button>
    </Form>
  );
}

export default UpdateandDeleteControls;