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



var dia19=[50,75,55,60,15,15,20,15,205,45,45,60,60,50,15,75,25,250]
var dia20=[86,6,120,1500,155,195,195,70]
let veintiuno_nov=[65,675,150,60,150,450,45,35,200,40,75,10,10,150,5,40,10,40,7,40,20,15,21,18,45,150,410,40,85]
let veintidos_nov=[167,60,75,50,10,15,36,15,205,80,45,34,92,45,45,75,50,50,10,95,20,80]
let veintitres_nov=[139,120,12,30,705,220,70,30,40,377,75]
let nov25=[240,80,45,35,25,120,30,70,120,75,40,50,340,900,15,385,120,135,65,180,120,300,260]
let nov26=[85,400,160,130,540,92,160,120,20,12,140,120,540,465,80,15,160,175,8,45,40,45,795,70,50,52,600,36,36,40,40,500]
let nov27=[360,172,65,95,30,45,90,45,219,75,95,8,135,25,10,30,30,540,540,100] 
let nov28=[60,85,330,330,220,105,105,45,45,105,15,45,500,75,80,40,130]
let nov29=[220,60,45,45,50,95,7,70,21,55,30,75,30,10,80]
let nov30=[340,50,10,7,160,50,35,36,40,55,75,30,110,80,20,80,85]
let nov_pedidos=[1500,600,1000,2000,180,430,250,1450]
let nov=dia19.concat(dia20,veintiuno_nov,veintidos_nov,veintitres_nov,nov25,nov26,nov27,nov28,nov29,nov30,nov_pedidos)


let conv=arrayToPartidas(nov)

//let fact=ReciboMaker(conv)

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
                    "Importe": "30.40"
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
        "ValorUnitario": "60.48",
        "Importe": "60.48",
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
                    "Importe": "22.40"
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
   
let nov_notas=imps_unoaldieciocho.concat(conv)
 



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