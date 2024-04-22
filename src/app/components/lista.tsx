'use client'

import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';

function Lista(props) {
    axios.defaults.baseURL = 'https://express-low5.onrender.com'
    const [tableElements, setTableElements] = useState([]);

    const getData = async () => {
        try {
            const response = await axios.get("/"+ props.data);
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
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Lista;