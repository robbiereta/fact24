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
const  orderID = require('order-id')('key');
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
    ReciboMaker(notasPartidas,folio)
    
      
      print();
    
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
let folio
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
     folio = orderID.generate(); 
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
 
      setNotasPartidas([...notasPartidas])

    }
    function print() {
      const receiptElement = document.getElementById('ticket-div');
         // Generate folio directly in the print function
      if (receiptElement) {
        const printWindow = window.open('', '_blank');
        if (printWindow) {
          printWindow.document.write(`
            <html>
              <head>
                <title>Ticket de Venta</title>
                <style>
                  @page {
                    size: 80mm auto;
                    margin: 0;
                  }
                  body {
                    font-family: 'Arial', sans-serif;
                    width: 80mm;
                    margin: 0;
                    padding: 10px;
                  }
                  #print-content {
                    text-align: center;
                  }
                  .header {
                    font-size: 14px;
                    margin-bottom: 10px;
                  }
                  .company-name {
                    font-size: 16px;
                    font-weight: bold;
                    margin-bottom: 5px;
                  }
                  .info {
                    font-size: 12px;
                    margin-bottom: 5px;
                  }
                  .divider {
                    border-top: 1px dashed #000;
                    margin: 10px 0;
                  }
                  .item {
                    text-align: left;
                    font-size: 12px;
                    margin: 5px 0;
                  }
                  .totals {
                    text-align: right;
                    font-size: 12px;
                    margin-top: 10px;
                  }
                  .footer {
                    font-size: 12px;
                    text-align: center;
                    margin-top: 10px;
                  }
                  @media print {
                    .no-print {
                      display: none;
                    }
                  }
                </style>
              </head>
              <body>
                <div id="print-content">
                  <div class="company-name">Mi Empresa</div>
                  <div class="header">
                    <div class="info">RFC: XXXX000000XXX</div>
                    <div class="info">Dirección: Calle Principal #123</div>
                    <div class="info">Tel: (123) 456-7890</div>
                  </div>
                  <div class="divider"></div>
                  <div class="info">Ticket #: ${folio}</div>
                  <div class="info">Fecha: ${new Date().toLocaleString()}</div>
                  <div class="divider"></div>
                  ${receiptElement.innerHTML}
                  <div class="divider"></div>
                  <div class="footer">
                    ¡Gracias por su compra!
                    <br>
                    Conserve su ticket
                  </div>
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
        }} >
        <h3 style={{ 
          color: '#2d3748',
          marginBottom: '20px',
          fontSize: '1.5rem',
          fontWeight: '600'
        }}>Ticket</h3>

        <div style={{ overflowX: 'auto' }} id='ticket-div'>
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