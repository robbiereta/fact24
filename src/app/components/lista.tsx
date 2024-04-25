'use client'

import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
interface ListaProps {
  // Define the properties and their types here
  'precio' : String,
  'categoria' : String,
  'descripcion' : String,
  'marca' : String,
  'especificaciones' : String,
  'codigo' : String,
  'moto' : String,
  'compatibilidades' : [],
  'recurso' : string
}


function Lista(props:any) {
   
    const [tableElements, setTableElements] = useState([]);
    const getData = async () => {
        try {
            const response = await axios.get(props.recurso);
            setTableElements(response.data);
            console.log(response.data);
            
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getData();
    });

    
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
            <td>{element.categoria}</td>
            <td>{element.especificaciones}</td>
            <td>{element.compatibilidades}</td>
            <td>{element.precio}</td>
            <td>{element.codigo}</td>
            <td>{element.moto}</td>
            <td>{element.categoria}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Lista;