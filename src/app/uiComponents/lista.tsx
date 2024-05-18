'use client'

import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import UpdateandDeleteControls from './updateanddelete';

function Lista(props:any) {
  let url =axios.defaults.baseURL = 'https://express-low5.onrender.com'
    const [tableElements, setTableElements] = useState([]);
    const getData = async () => {
        try {
            const response = await axios.get(url+props.recurso);
            setTableElements(response.data);
            
            
        } catch (error) {
            console.error(error);
        }
    };  

    useEffect(() => {
        getData();
    });

    let formElements = [
      {
        name: 'descripcion'
      },
    ]
    
    return (
    <Table striped>
      <thead>
        <tr>
          <th>descripcion</th>
          <th>marca</th>
          <th>especificaciones</th>
          <th>compatibilidades</th>
          <th>precio</th>
          <th>codigo</th>
          <th>moto</th>
          <th>categoria</th>
        </tr>
      </thead>
      <tbody>
        {Array.isArray(tableElements) && tableElements.map((element:any) => (
          <tr key={element._id}>
            <td>{element.descripcion}</td>
            <td>{element.marca}</td>
            <td>{element.especificaciones}</td>
            <td>{element.compatibilidades}</td>
            <td>{element.precio}</td>
            <td>{element.codigo}</td>
            <td>{element.moto}</td>
            <td>{element.categoria}</td>
            <td>{<UpdateandDeleteControls id={element._id} recurso={url+props.recurso} />}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Lista;