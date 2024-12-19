'use client'

import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import UpdateandDeleteControls from './updateanddelete';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination';

interface LineaVenta {
  ImporteRealConImp: string | number;
}

interface Nota {
  folio_venta: string;
  fecha: string;
  cliente: string;
  lineas_venta: LineaVenta[];
  _id: string;
}

interface ListaTicketProps {
  recurso: string;
}

function ListaTicket({ recurso }: ListaTicketProps) {
  let url = axios.defaults.baseURL = 'https://express-low5.onrender.com'
  const [tableElements, setTableElements] = useState<Nota[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const getData = async () => {
    try {
      const response = await axios.get<Nota[]>(url + recurso);
      // Ensure we're setting an array, even if empty
      const data = response.data && Array.isArray(response.data) ? response.data : [];
      setTableElements(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setTableElements([]);
    }
  };  

  useEffect(() => {
    getData();
  }, [recurso]); // Re-fetch when recurso changes

  if (!Array.isArray(tableElements) || tableElements.length === 0) {
    return <div className="text-center p-4">No hay registros disponibles.</div>;
  }

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = tableElements.slice(indexOfFirstItem, indexOfLastItem);

  function getTotal(notas: Nota[]) {
    return notas.reduce((total, note) => {
      return total + note.lineas_venta.reduce((subtotal: number, linea: LineaVenta) => {
        return subtotal + Number(linea.ImporteRealConImp);
      }, 0);
    }, 0);
  }

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Calculate total pages
  const totalPages = Math.ceil(tableElements.length / itemsPerPage);

  // Generate page items
  let items = [];
  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item 
        key={number} 
        active={number === currentPage}
        onClick={() => paginate(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div className="p-3">
      <Table striped hover>
        <thead>
          <tr>
            <th>Folio</th>
            <th>Fecha</th>
            <th>Cliente</th>
            <th>Importe</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((element: Nota) => (
            <tr key={element.folio_venta}>
              <td>{element.folio_venta}</td>
              <td>{element.fecha}</td>
              <td>{element.cliente}</td>
              <td>{getTotal([element])}</td>
              <td>
                <UpdateandDeleteControls id={element._id} recurso={url+recurso} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="d-flex justify-content-center mt-4">
        <Pagination>
          <Pagination.First 
            onClick={() => paginate(1)} 
            disabled={currentPage === 1}
          />
          <Pagination.Prev 
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          />
          {items}
          <Pagination.Next 
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
          />
          <Pagination.Last 
            onClick={() => paginate(totalPages)}
            disabled={currentPage === totalPages}
          />
        </Pagination>
      </div>

      <div className="text-muted text-center mt-2">
        Mostrando {indexOfFirstItem + 1} - {Math.min(indexOfLastItem, tableElements.length)} de {tableElements.length} registros
      </div>
    </div>
  );
}

export default ListaTicket;