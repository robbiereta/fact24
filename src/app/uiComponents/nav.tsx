'use client'
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
        <Link href="/" passHref legacyBehavior>
          <Navbar.Brand className="fw-bold">Rally ERP</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0">
            <Link href="/" passHref legacyBehavior>
              <Nav.Link>Inicio</Nav.Link>
            </Link>
            <Link href="/pages/pos" passHref legacyBehavior>
              <Nav.Link>Punto de Venta</Nav.Link>
            </Link>
            <Link href="/pages/cortes" passHref legacyBehavior>
              <Nav.Link>Cortes de Caja</Nav.Link>
            </Link>
            
            <NavDropdown title="Catálogos" id="catalogos-dropdown" className="custom-dropdown">
              <Link href="/pages/products" passHref legacyBehavior>
                <NavDropdown.Item>Productos</NavDropdown.Item>
              </Link>
              <Link href="/pages/inventario" passHref legacyBehavior>
                <NavDropdown.Item>Inventario</NavDropdown.Item>
              </Link>
            </NavDropdown>

            <NavDropdown title="Facturación" id="facturacion-dropdown" className="custom-dropdown">
              <Link href="/pages/facturacliente" passHref legacyBehavior>
                <NavDropdown.Item>Factura a Cliente</NavDropdown.Item>
              </Link>
              <Link href="/pages/facturaglobal" passHref legacyBehavior>
                <NavDropdown.Item>Factura Global</NavDropdown.Item>
              </Link>
            </NavDropdown>

            <NavDropdown title="Nómina" id="nomina-dropdown" className="custom-dropdown">
              <Link href="/pages/nomina" passHref legacyBehavior>
                <NavDropdown.Item>Hacer Nómina</NavDropdown.Item>
              </Link>
              <Link href="/pages/nomina/empleados" passHref legacyBehavior>
                <NavDropdown.Item>Lista de Empleados</NavDropdown.Item>
              </Link>
            </NavDropdown>

            <NavDropdown title="Configuración" id="config-dropdown" className="custom-dropdown">
              <Link href="/pages/datosnegocio" passHref legacyBehavior>
                <NavDropdown.Item>Datos del Negocio</NavDropdown.Item>
              </Link>
              <Link href="/pages/usuarios" passHref legacyBehavior>
                <NavDropdown.Item>Usuarios</NavDropdown.Item>
              </Link>
              <Link href="/pages/roles" passHref legacyBehavior>
                <NavDropdown.Item>Roles y Permisos</NavDropdown.Item>
              </Link>
            </NavDropdown>
          </Nav>

          <Nav>
            <NavDropdown 
              title={<span className="text-white">Mi Cuenta</span>} 
              id="account-dropdown" 
              className="custom-dropdown"
              align="end"
            >
              <Link href="/pages/perfil" passHref legacyBehavior>
                <NavDropdown.Item>Perfil</NavDropdown.Item>
              </Link>
              <Link href="/pages/configuracion" passHref legacyBehavior>
                <NavDropdown.Item>Configuración</NavDropdown.Item>
              </Link>
              <NavDropdown.Divider />
              <Link href="/auth/signout" passHref legacyBehavior>
                <NavDropdown.Item>Cerrar Sesión</NavDropdown.Item>
              </Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;