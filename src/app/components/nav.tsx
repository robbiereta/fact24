'use client'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScroll() {
  return (
    <Navbar   expand="lg" 
    className="navbar navbar-expand-lg navbar-light bg-primary" >
      <Container fluid>
        <Navbar.Brand  className='text-white' href="#">Bici-Vic</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          />
          
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;