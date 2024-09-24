'use client'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from 'next/link';

function NavScroll() {
  return (
    <Navbar   expand="lg" 
    className="navbar navbar-expand-lg navbar-light bg-primary" >
      <Container fluid>
        <Navbar.Brand  className='text-white' href="#">Rally ERP</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link  className='text-white' href="/pages/productos">Productos</Nav.Link>
           <Nav.Link  className='text-white' href="/pages/inventario">Inventario</Nav.Link>
          <Nav.Link  className='text-white' href="/pages/facturaglobal">Factura Global</Nav.Link>
          <NavDropdown  className='text-white' title="Nomina" id="basic-nav-dropdown">
              <NavDropdown.Item href="/pages/nomina">Hacer Nomina</NavDropdown.Item>
              <NavDropdown.Item href="/pages/nomina/agregarEmpleado">Agregar Empleado</NavDropdown.Item>
            </NavDropdown>
          <Nav.Link  className='text-white' href="/pages/datosnegocio">Datos Del Negocio</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;