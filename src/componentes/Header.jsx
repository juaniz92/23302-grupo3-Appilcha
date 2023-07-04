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
        <Navbar.Brand href="/"><img
              src="../appilcha.png"
              width="150"
              className="d-inline-block align-top"
              alt="Appilcha Logo"
            /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-uppercase">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/Tienda">Tienda</Nav.Link>
            <Nav.Link href="#Contacto">Contacto</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
)
}

export default Header