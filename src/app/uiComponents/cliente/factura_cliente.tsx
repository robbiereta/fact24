'use client'
import { FormControl, FormGroup } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import getNote from "./getNote";
function FacturaCliente() {
    
    function onSubmit(formData: FormData) {
        const folio = formData.get("folio");
        console.log(folio);
        {getNote(folio)}
      }


      function sendFactura() {

      }


    return (
        <div>
            <Form action={onSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Ingresa tu folio de facturacion</Form.Label>
        <Form.Control type="text"  name="folio" />
      </Form.Group>
     <FormGroup className="mb-3" controlId="exampleForm.ControlInput2">
      <FormControl type="submit" ></FormControl>
     </FormGroup>
    </Form>
      {/* <button onClick={sendFactura()}>Facturar</button> */}
       
    </div>
    );
  
  }
  
  export default FacturaCliente 