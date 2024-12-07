'use client'
import Form from 'react-bootstrap/Form';
import { FormGroup, Button } from 'react-bootstrap';
import ReciboMaker from '../libComponents/ReciboMaker';
import  {useState,useEffect} from 'react';
import {Modal} from 'react-bootstrap';
import ListaTicket from './lista_ticket';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import UpdateandDeleteControls from './updateanddelete';
import FacturaGlobalMaker from '../libComponents/facturaGlobalMaker';
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
  const [formData1, setFormData1] = useState(new FormData());
  const handleTicketContent = () => setTicketContent(ticket)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [tableTicketElements, setTableTicketElements] = useState<any[]>([]);

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
  function addPartida(pu:any,cantidad) {
     
    let importeConImp=pu*cantidad
    let iva = Number(importeConImp) * 0.16
    let impSinImp=Number(importeConImp-iva)
    let puSinImp=Number(pu-iva)/cantidad
    // importe=Number(importeSinimpuestos)
      let partida= {
        ClaveProdServ: "01010101",
        ClaveUnidad: "ACT",
        Unidad: "Actividad",
        Cantidad: cantidad,
        Descripcion: "Venta",
        ValorUnitario: ""+puSinImp+"",
        Importe: ""+impSinImp+"",
        ImporteRealConImp:"" +Number(importeConImp) +"",
        ObjetoImp:"02",
        Impuestos :{
          Traslados:[
             {
          Base: ""+importeConImp+"",
          Impuesto: "002",
          TipoFactor: "Tasa",
          TasaOCuota: "0.160000",
          Importe: ""+iva+"",
          }
          ]
      
          }
        
        }
       
      notasPartidas.push(partida)

    }
    function print(ticket) {
      var printContents = document.getElementById("ticket").innerHTML;
      var originalContents = document.body.innerHTML;
      document.body.innerHTML = printContents;
    
      window.print();
    
      document.body.innerHTML = originalContents;
    }
  function arrayToPartidas(array){
    let impsConvertidos=[]
    array.map((imp:any)=>{
      addPartida(imp,1)
    })
    impsConvertidos=notasPartidas

    return impsConvertidos
  }
let dos_dic=[50,50,60,55,35,50,145,70,15,48,298,340,36,36,10,15,98,195,80,20,10,18,220,15,10,10,110,30,90,7,12,225,2629,75,50,54]
//let uno_dic_partidas=arrayToPartidas(uno_dic)  
let tres_dic=[180,170,50,310,135,45,160,180,12,60,180,125,175,80,45]
//let fact=ReciboMaker(uno_dic_partidas)

//let nov_notas=imps_unoaldieciocho.concat(conv)
 



  function onSubmitForRecibo(FormData: FormData) {
    ticket=ReciboMaker(nov_notas) 
    handleTicketContent()
    handleShow()
  }
  function onSubmit(formData: FormData) {
    let entries = Object.fromEntries(formData.entries()); 
    console.log(entries);
    //addPartida(entries.importe,entries.Cantidad)
    

  }
 

   
  return (
    <>
    <Form action={onSubmit}>
      {formElements}
      <Button variant="primary" type="submit" >
        Agregar
      </Button>
    </Form>
   <hr/>

    <Form action={onSubmitForRecibo}>   
    <Table striped>
      <thead>
        <tr>
          <th>Cantidad</th>
          <th>Desc.</th>
          <th>P.U.</th>
          <th>Importe</th>
        </tr>
      </thead>
      <tbody>
        {/* { Array.isArray(tableTicketElements.map((element:any) => (
          <tr key={element._id}>
            <td>{element.Cantidad}</td>
            <td>{element.Descripcion}</td>
            <td>{(element.ImporteRealConImp/element.Cantidad)}</td>
            <td>{element.ImporteRealConImp}</td>
          </tr>
        )))} */}
      </tbody>
    </Table>
    <Button variant="success" type="submit" >
    Crear Ticket
    </Button>
    </Form>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ticket</Modal.Title>
        </Modal.Header>
        <Modal.Body>{ticketContent}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="success" onClick={handleClose}>
            Imprimir
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FormPos;