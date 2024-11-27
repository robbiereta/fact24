'use client'
import Form from 'react-bootstrap/Form';
import { FormGroup, Button } from 'react-bootstrap';
import ReciboMaker from '../libComponents/ReciboMaker';
import  {useState} from 'react';
import {Modal} from 'react-bootstrap';
interface FormCreatorProps {
  elements: {
    name: string;
    id: number;
    type: string;
    placeholder: string;
  }[];
}


function FormPos(props:FormCreatorProps) {
  const [show, setShow] = useState(false);
  const [ticketContent, setTicketContent] = useState('');

  const handleTicketContent = () => setTicketContent(ticket)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let ticket:any;
  let elements=props.elements
  let formElements:any[]=[]
  var optionelements:any[]=[]

   elements.map((element)=>{
  formElements.push(
    <Form.Group className="mb-3" controlId={element.name+element.id} key={element.id+"key1"}>
    <Form.Label key={element.id+"key2"}>{element.placeholder}</Form.Label>
    <Form.Control  key={element.id+"key3"}type={element.type} name={element.name} placeholder={element.placeholder} />
  
  </Form.Group>
  )
  return formElements
  })

  let notasPartidas:any[]=[]
  function addPartida(importe:any) {
     
    
    let iva = Number(importe) * 0.16
    let impdeConcepto=Number(importe-iva)
    // importe=Number(importeSinimpuestos)
      let partida= {
        ClaveProdServ: "01010101",
        ClaveUnidad: "ACT",
        Unidad: "Actividad",
        Cantidad: "1",
        Descripcion: "Venta",
        ValorUnitario: ""+impdeConcepto+"",
        Importe: ""+impdeConcepto+"",
        ImporteRealConImp:"" +Number(importe) +"",
        ObjetoImp:"02",
        Impuestos :{
          Traslados:[
             {
          Base: ""+importe+"",
          Impuesto: "002",
          TipoFactor: "Tasa",
          TasaOCuota: "0.160000",
          Importe: ""+iva+"",
          }
          ]
      
          }
        
        }
       
      notasPartidas.push(partida)
     console.log(notasPartidas)
    }

  function onSubmitForRecibo(obj) {
    ticket=ReciboMaker(obj) 
    handleTicketContent()
  }
  function onSubmit(formData: FormData) {
    let entries = Object.fromEntries(formData.entries()); 
    console.log(entries);
    addPartida(entries.importe)

  }
  
   
  return (
    <>
    <Form action={onSubmit}>
      {formElements}
      <Button variant="primary" type="submit" >
        Agregar
      </Button>
    </Form>
    <Button  onClick={() =>{onSubmitForRecibo(notasPartidas);handleShow();}}>
     Hacer recibo
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ticket</Modal.Title>
        </Modal.Header>
        <Modal.Body>{ticketContent}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FormPos;