import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {

return (
    //Navbar de react-boostrap
    <Navbar expand="lg" className="light">
      <Container>
        <Navbar.Brand href="/">Appilcha</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-uppercase">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="#Nosotros">Nosotros</Nav.Link>
            <Nav.Link href="/Tienda">Tienda</Nav.Link>
            <Nav.Link href="#Contacto">Contacto</Nav.Link>
            <Nav.Link href="/Ingresar">Ingresar</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
)
}

export default Header