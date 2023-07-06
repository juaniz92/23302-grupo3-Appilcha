import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Header() {
  
  
  // Función para cerrar el menú hamburguesa al pasar X segundos
  
  const handleTogglerNav = e =>{
    
    if((e.target.nodeName === "BUTTON" && e.target.classList.contains("collapsed")) || (e.target.nodeName === "SPAN" && e.target.parentElement.classList.contains("collapsed"))){  
      setTimeout(()=>{
        e.target.click();
      }, 4000);
    }
  }
  

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
        <Navbar.Toggle onClick={e => handleTogglerNav(e)} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-uppercase">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/Tienda">Tienda</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
)
}

export default Header