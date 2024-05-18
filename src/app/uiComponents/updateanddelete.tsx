'use client'
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { FormGroup, Button } from 'react-bootstrap';

interface UpdateandDeleteControlsProps {
  recurso: string;
  id: string;
}
function UpdateandDeleteControls(props:UpdateandDeleteControlsProps) {
    
    

  function onSubmitForDelete(formData: FormData) {
    let entries = Object.fromEntries(formData.entries()); 
    let id2=entries.id.valueOf();
    console.log(id2);
    axios.delete(props.recurso+"/"+id2)
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