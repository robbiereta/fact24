'use client'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from 'next/link';
import './nav.css';

function NavScroll() {
  return (
    <Navbar expand="lg" className="navbar-dark bg-primary">
      <Container fluid>
        <Navbar.Brand href="/" className="fw-bold">Rally ERP</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0">
            <Nav.Link href="/" className="nav-link">Inicio</Nav.Link>
            <Nav.Link href="/pos" className="nav-link">Punto de Venta</Nav.Link>
            <Nav.Link href="/cortes" className="nav-link">Cortes de Caja</Nav.Link>
            
            <NavDropdown title="Catálogos" id="catalogos-dropdown" className="custom-dropdown">
              <NavDropdown.Item href="/productos">Productos</NavDropdown.Item>
              <NavDropdown.Item href="/inventario">Inventario</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Facturación" id="facturacion-dropdown" className="custom-dropdown">
              <NavDropdown.Item href="/facturacliente">Factura a Cliente</NavDropdown.Item>
              <NavDropdown.Item href="/facturaglobal">Factura Global</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Nómina" id="nomina-dropdown" className="custom-dropdown">
              <NavDropdown.Item href="/nomina">Hacer Nómina</NavDropdown.Item>
              <NavDropdown.Item href="/nomina/agregarEmpleado">Agregar Empleado</NavDropdown.Item>
              <NavDropdown.Item href="/nomina/empleados">Lista de Empleados</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Configuración" id="config-dropdown" className="custom-dropdown">
              <NavDropdown.Item href="/datosnegocio">Datos del Negocio</NavDropdown.Item>
              <NavDropdown.Item href="/usuarios">Usuarios</NavDropdown.Item>
              <NavDropdown.Item href="/roles">Roles y Permisos</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Nav>
            <NavDropdown 
              title={<span className="text-white">Mi Cuenta</span>} 
              id="account-dropdown" 
              className="custom-dropdown"
              align="end"
            >
              <NavDropdown.Item href="/perfil">Perfil</NavDropdown.Item>
              <NavDropdown.Item href="/configuracion">Configuración</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/logout">Cerrar Sesión</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;