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
     console.log(notasPartidas)
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
      addPartida(imp.importe,1)
    })
    impsConvertidos=notasPartidas

    return impsConvertidos
  }

  let imps_unoaldieciocho=[
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "75.6",
        "Importe": "75.6",
        "ImporteRealConImp": "90",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "90",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "14.4"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "159.6",
        "Importe": "159.6",
        "ImporteRealConImp": "190",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "190",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "30.400000000000002"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "60.480000000000004",
        "Importe": "60.480000000000004",
        "ImporteRealConImp": "72",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "72",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "11.52"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "105.84",
        "Importe": "105.84",
        "ImporteRealConImp": "126",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "126",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "20.16"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "204.12",
        "Importe": "204.12",
        "ImporteRealConImp": "243",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "243",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "38.88"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "25.2",
        "Importe": "25.2",
        "ImporteRealConImp": "30",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "30",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "4.8"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "315",
        "Importe": "315",
        "ImporteRealConImp": "375",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "375",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "60"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "134.4",
        "Importe": "134.4",
        "ImporteRealConImp": "160",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "160",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "25.6"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "92.4",
        "Importe": "92.4",
        "ImporteRealConImp": "110",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "110",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "17.6"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "117.6",
        "Importe": "117.6",
        "ImporteRealConImp": "140",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "140",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "22.400000000000002"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "84",
        "Importe": "84",
        "ImporteRealConImp": "100",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "100",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "16"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "252",
        "Importe": "252",
        "ImporteRealConImp": "300",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "300",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "48"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "25.2",
        "Importe": "25.2",
        "ImporteRealConImp": "30",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "30",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "4.8"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "151.2",
        "Importe": "151.2",
        "ImporteRealConImp": "180",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "180",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "28.8"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "50.4",
        "Importe": "50.4",
        "ImporteRealConImp": "60",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "60",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "9.6"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "185.64",
        "Importe": "185.64",
        "ImporteRealConImp": "221",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "221",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "35.36"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "283.08",
        "Importe": "283.08",
        "ImporteRealConImp": "337",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "337",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "53.92"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "92.4",
        "Importe": "92.4",
        "ImporteRealConImp": "110",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "110",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "17.6"
                }
            ]
        }
    },
    {
        "ClaveProdServ": "01010101",
        "ClaveUnidad": "ACT",
        "Unidad": "Actividad",
        "Cantidad": 1,
        "Descripcion": "Venta",
        "ValorUnitario": "144.48",
        "Importe": "144.48",
        "ImporteRealConImp": "172",
        "ObjetoImp": "02",
        "Impuestos": {
            "Traslados": [
                {
                    "Base": "172",
                    "Impuesto": "002",
                    "TipoFactor": "Tasa",
                    "TasaOCuota": "0.160000",
                    "Importe": "27.52"
                }
            ]
        }
    }
]
   
  
  function onSubmitForRecibo(FormData: FormData) {
    ticket=ReciboMaker(notasPartidas) 
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