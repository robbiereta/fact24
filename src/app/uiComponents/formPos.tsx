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
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Receipt58mm from './receipt58mm';
import dias from './data.json'
import postRequest from "../libComponents/postRequest";
const orderid = require('order-id')('key');
import ventas from './ventas_diciembre.json' 
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
  const [showChangeModal, setShowChangeModal] = useState(false);
  const [ticketContent, setTicketContent] = useState('');
  const [amountPaid, setAmountPaid] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [notasPartidas, setNotasPartidas] = useState<any[]>([]);
  //const handleTicketContent = () => setTicketContent(ticket)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChangeModalClose = async () => {
    const change = amountPaid - total;
    setShowChangeModal(false);
    
    try {
      // Handle ReciboMaker server action through an API route or other server-side mechanism
      const response = await fetch('/api/generate-receipt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ventas: notasPartidas }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to generate receipt');
      }
      
      print();
    } catch (error) {
      console.error('Error generating receipt:', error);
    }
  }
  const handleChangeModalShow = () => {
    // Calculate total from notasPartidas
    const newTotal = notasPartidas.reduce((sum, item) => sum + Number(item.ImporteRealConImp), 0);
    setTotal(newTotal);
    setShowChangeModal(true);
  };

  const calculateChange = () => {
    return amountPaid - total;
  };

  let ticket:any;
  let elements=props.elements
  let formElements:any[]=[]
  var optionelements:any[]=[]

   elements.map((element)=>{
  formElements.push(
    <Form.Group className="mb-3" controlId={element.name+element.id} key={element.id+"key1"}>
    <Form.Label key={element.id+"key2"}>{element.placeholder}</Form.Label>
    <Form.Control required key={element.id+"key3"}type={element.type} name={element.name} placeholder={element.placeholder} />
  
  </Form.Group>
  )
  return formElements
  })

  function addPartida(pu:any,cantidad:any,Descripcion) {
    let folio = orderid.generate(); 
    let importeConImp=pu*cantidad
    let iva = Number(importeConImp) * 0.16
    let impSinImp=Number(importeConImp-iva)
    let puSinImp=Number(pu-iva)/cantidad
    // importe=Number(importeSinimpuestos)
      let partida= {
        ClaveProdServ: "01010101",
        ClaveUnidad: "ACT",
        NoIdentificacion: ""+folio+"",
        Unidad: "Actividad",
        Cantidad: cantidad,
        Descripcion:Descripcion ,
        ValorUnitario: ""+pu+"",
        Importe: ""+impSinImp.toFixed(2)+"",
        ImporteRealConImp:"" +Number(importeConImp) +"",
        ObjetoImp:"02",
        Impuestos :{
          Traslados:[
             {
          Base: ""+importeConImp+"",
          Impuesto: "002",
          TipoFactor: "Tasa",
          TasaOCuota: "0.160000",
          Importe: ""+iva.toFixed(2)+"",
          }
          ]
      
          }
        
        }
       
      notasPartidas.push(partida)
 
      //setNotasPartidas([...notasPartidas])

    }
    function print() {
      const receiptElement = document.getElementById('receipt-to-print');
      if (receiptElement) {
        const printWindow = window.open('', '_blank');
        if (printWindow) {
          printWindow.document.write(`
            <html>
              <head>
                <title>Ticket de Venta</title>
                <style>
                  @media print {
                    body {
                      margin: 0;
                      padding: 0;
                    }
                    #print-content {
                      width: 58mm;
                      margin: 0 auto;
                    }
                    @page {
                      size: 58mm auto;
                      margin: 0;
                    }
                  }
                </style>
              </head>
              <body>
                <div id="print-content">
                  ${receiptElement.innerHTML}
                </div>
                <script>
                  window.onload = function() {
                    window.print();
                    window.onafterprint = function() {
                      window.close();
                    };
                  };
                </script>
              </body>
            </html>
          `);
          printWindow.document.close();
        }
      }
    }
  function arrayToPartidas(array){
    let impsConvertidos=[]
    array.map((imp:any)=>{
      addPartida(imp,1,"Venta")
    })
    impsConvertidos=notasPartidas
    

    return impsConvertidos
  }
let dos_dic=[50,50,60,55,35,50,145,70,15,48,298,340,36,36,10,15,98,195,80,20,10,18,220,15,10,10,110,30,90,7,12,225,2629,75,50,54]
//let uno_dic_partidas=arrayToPartidas(uno_dic)  
let tres_dic=[180,170,50,310,135,45,160,180,12,60,180,125,175,80,45,110,130,75,1250,160,65,75]
let cuatro_dic=[30,20,70,90,90]
let cinco_dic=[55,260,260,60,60,20,290,715,585,60,20,30,85,225,52,75,25,100,50,70]
let seis_dic=[20,90,60,66,6,6,15,18,110,75,95,20,318,30,50,125,12,75,75,120,90]
let siete_dic=[40,200,30,55,30,10,152,45,936,220,70,28,30]
let unoal7=dos_dic.concat(tres_dic,cuatro_dic,cinco_dic,seis_dic,siete_dic)
let ocho=dias.dia9.concat(dias.dia10,dias.dia11,dias.dia12,dias.dia13,dias.dia14)

let quince=ocho.concat(unoal7)
let dieciseis=[75,50,50,120,65,50,115,35,75,36,5,10,80,360,7,15,440,40,36,215,60,140,45]
let diecisiete=[45,25,35,20,24,72,72,300,214,70,75,200,67,64,35,48,160,48,40,50,60]
let dia18=[50,50,45,45,85,345,20,100,122,25,30,95,70,125,30,240,2250]
let dia19=[150,230,150,16,14,30,150,20,35,15,2100]
let dia20=[50,1500,50,240,130,250,135,20,75,5,125,410,25,98,98,120]
let dia21=[585,260,170,645,125,35,15,50,20,70]
let dia23=[450,7000,2250,3550,210,170,30,145,50,130,98,90,90,90,150,7,125,125]
let dia24=[48,110,450,90,135,15,240,110,735,400]
let dia26=[120,50,530,80,90,105,85,15,110,90,90,90,130,50,785,350,340,455,250,200,25,50,225,160,30,110,16,603]
let dia27=[50,86,20,110,85,775,75,50,7,70,950,210,115,80,1355,24,140]
let dia28=[140,135,55,220,150,30,340,50,48,750,25,110,108,155,95,50,8]
let dia30=[14,40,235,100,120,270,190,70,50,50,190,25,180,120,70,235,105,5,525,170,160,75,100,250,42,180,45,180,79,120,390,285,7,150,170,98,15,265]
let dia31=[80,75,25,100,500,330,24,70,85,65,50,19,190,8]
// let conv=dos_dic.concat(tres_dic,cuatro_dic,cinco_dic,seis_dic,siete_dic,dias.dia9,dias.dia10,dias.dia11,dias.dia12,dias.dia13,dias.dia14,dieciseis,diecisiete,dia18,dia19,dia20,dia21,dia23,dia24,dia26,dia27,dia28,dia30,dia31)
// let imps=arrayToPartidas(conv)
// console.log(imps);

// // Calculate total of imps
// const totalImps = imps.reduce((sum, item) => sum + Number(item.ImporteRealConImp), 0);
// console.log('Total of imps:', totalImps);

// // Generate receipt for imps
// async function generateReceiptForImps() {
//   try {
//     const response = await fetch('/api/generate-receipt', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ ventas: imps }),
//     });
    
//     if (!response.ok) {
//       throw new Error('Failed to generate receipt');
//     }
    
//     const data = await response.json();
//     console.log('Receipt generated:', data);
//     return data;
//   } catch (error) {
//     console.error('Error generating receipt:', error);
//   }
// }

// // Call the function to generate receipt
// generateReceiptForImps();

  function onSubmit(formData: FormData) {
    let entries = Object.fromEntries(formData.entries()); 
    console.log(entries);
    addPartida(entries.importe,entries.Cantidad,entries.Descripcion)
    //send to state
    setNotasPartidas([...notasPartidas]);
  }
 

   
  return (
    <>
    <Container>
      <Row>
        <Col>
        <div style={{
          backgroundColor: 'white',
          padding: '25px',
          borderRadius: '12px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          margin: '20px 0',
          border: '1px solid #f0f0f0'
        }}>
        <h3 style={{ 
          color: '#2d3748',
          marginBottom: '20px',
          fontSize: '1.5rem',
          fontWeight: '600'
        }}>Ingresa aquí los productos que vendiste:</h3>
         <Form action={onSubmit}>
      {formElements}
      <Button variant="primary" type="submit" style={{
        marginTop: '15px',
        padding: '10px 20px',
        borderRadius: '8px',
        width: '100%'
      }}>
        Agregar
      </Button>
    </Form>
        </div>
        </Col>  
        <Col>
        <div style={{ 
          backgroundColor: 'white',
          padding: '25px',
          borderRadius: '12px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          margin: '20px 0',
          border: '1px solid #f0f0f0'
        }}>
        <h3 style={{ 
          color: '#2d3748',
          marginBottom: '20px',
          fontSize: '1.5rem',
          fontWeight: '600'
        }}>Ticket</h3>

        <div style={{ overflowX: 'auto' }}>
          <Table hover style={{ 
            fontSize: '0.9em',
            backgroundColor: 'white',
            borderRadius: '8px',
            overflow: 'hidden',
            marginBottom: '20px'
          }}>
            <thead style={{
              backgroundColor: '#f8f9fa',
              borderBottom: '2px solid #dee2e6'
            }}>
              <tr>
                <th style={{ padding: '12px 15px' }}>Cantidad</th>
                <th style={{ padding: '12px 15px' }}>Descripción</th>
                <th style={{ padding: '12px 15px' }}>P.U.</th>
                <th style={{ padding: '12px 15px' }}>Importe</th>
              </tr>
            </thead>
            <tbody>
              {notasPartidas.map((item: any, index: number) => (
                <tr key={index} style={{ 
                  borderBottom: '1px solid #dee2e6',
                  transition: 'background-color 0.2s'
                }}>
                  <td style={{ padding: '12px 15px' }}>{item.Cantidad}</td>
                  <td style={{ padding: '12px 15px' }}>{item.Descripcion}</td>
                  <td style={{ padding: '12px 15px' }}>${Number(item.ValorUnitario).toFixed(2)}</td>
                  <td style={{ padding: '12px 15px' }}>${Number(item.ImporteRealConImp).toFixed(2)}</td>
                </tr>
              ))}
              <tr style={{ 
                borderTop: '2px solid #dee2e6',
                backgroundColor: '#f8f9fa',
                fontWeight: 'bold'
              }}>
                <td colSpan={3} style={{ padding: '12px 15px', textAlign: 'right' }}>Total:</td>
                <td style={{ padding: '12px 15px' }}>${notasPartidas.reduce((sum, item) => sum + Number(item.ImporteRealConImp), 0).toFixed(2)}</td>
              </tr>
            </tbody>
          </Table>
        </div>

        <Form >   
    <div style={{ borderTop: '2px dashed #ccc', marginTop: '15px', paddingTop: '15px', textAlign: 'center' }}>
    <Button variant="success" type="submit" style={{ width: '100%', marginBottom: '10px' }} onClick={(e) => {
      e.preventDefault();
      handleChangeModalShow();
    }}>
    Crear Ticket
    </Button>
    </div>
    </Form>
   
        </div>
        </Col>
      </Row>
    </Container>
       
      

      <Modal show={showChangeModal} onHide={handleChangeModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Pago</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Total a pagar</Form.Label>
              <Form.Control
                type="number"
                value={total}
                readOnly
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Cantidad pagada</Form.Label>
              <Form.Control
                type="number"
                value={amountPaid}
                onChange={(e) => setAmountPaid(Number(e.target.value))}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Cambio</Form.Label>
              <Form.Control
                type="number"
                value={amountPaid - total}
                readOnly
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowChangeModal(false)}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleChangeModalClose}>
            Imprimir
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FormPos;