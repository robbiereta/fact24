'use client'

import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import UpdateandDeleteControls from './updateanddelete';
import { Form } from 'react-bootstrap';

function ListaTicket(props:any) {
  
    const [tableElements, setTableElements] = useState([]);
   

    
    return (
    <>
      <Form action={onSubmitForRecibo}>
    <ListaTicket recurso="" />
  <Button variant="success" type="submit" >
    Crear Ticket
    </Button>
   </Form>
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
      { Array.isArray(tableElements) && tableElements.map((element:any) => (
          <tr key={element._id}>
            <td>{element.Cantidad}</td>
            <td>{element.Descripcion}</td>
            <td>{(element.ImporteRealConImp/element.Cantidad)}</td>
            <td>{element.ImporteRealConImp}</td>
          <td>{<UpdateandDeleteControls id={element._id} recurso={props.recurso} />}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  </>
  );
}

export default ListaTicket;