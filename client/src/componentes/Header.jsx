import {Link, useNavigate} from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore, faHouse, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import firebaseApp from "../firebaseConfig/firebase";
import { getAuth, signOut } from "firebase/auth";
import Totalproductos from './carrito/TotalProductos';
import Carrito from './carrito/Carrito';
import { data } from './Datos';
const MySwal = withReactContent(Swal);
const auth = getAuth(firebaseApp);

function Header({user}) {
	const [mostrarCarrito, setMostrarCarrito] = useState();
	const { datos, anadirProducto, carrito } = useContext(data);
  
  // Función para cerrar el menú hamburguesa al scrollear
  const handleTogglerNav = e =>{
      
      const basicNavBar = document.getElementById("basic-navbar-nav");
      
      window.addEventListener("scroll", ()=>{
        if(basicNavBar.classList.contains("show")){
          e.target.click();
        }
      });

  }

  const navigate = useNavigate();
  const cerrarSesion = () => {
		Swal.fire({
			title: 'Cerrar Sesión?',
			text: "Estas seguro de cerrar sesión ",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Si, Cerrar sesión!'
		  }).then((result) => {
			if (result.isConfirmed) {
			  Swal.fire(
				'Sesión Cerrada!',
				'Tu sesión a finalizado.',
				'success',
				
				signOut(auth),
				navigate("/"),
				closeMenu()
			  )
			}
		  })

    }
	
	  const linkStyles = {
		textDecoration: 'none'
	  };

	// Función para cerrar el menú hamburguesa al scrollear
	const [menuOpen, setMenuOpen] = useState(false);
  
	const closeMenu = () => {
		setMenuOpen(false);
	  };

	console.log("estado",menuOpen)

	useEffect(() => {
		const timer = setTimeout(() => {
		  setMenuOpen(false);
		}, 2000);
	  
		return () => clearTimeout(timer);
	  }, []);
	  const navDropDownTitle = (<FontAwesomeIcon icon={faCircleUser} style={{color: "#000000",}} /> );

	  const flagCarrito = () => {
		setMostrarCarrito(!mostrarCarrito);
	  };

return (
	<div>
		{/*Navbar de react-boostrap*/}
		<Navbar expand="md" className="light">
		<Container>
			<Navbar.Brand href="/"><img
				src="../appilcha.png"
				width="150"
				className="d-inline-block align-top"
				alt="Appilcha Logo"
				/></Navbar.Brand>
			<Navbar.Toggle onClick={e => handleTogglerNav(e)} aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav" className=''>
			<Nav className="text-uppercase fw-bolder w-full">
				<Nav.Link as={Link} to="/" className='ml-auto'><FontAwesomeIcon icon={faHouse} style={{color: "#000000",}} /> Inicio</Nav.Link>
				<Nav.Link as={Link} to="/Tienda" className='ml-auto'><FontAwesomeIcon icon={faStore} style={{color: "#000000",}} /> Tienda</Nav.Link>
			<div className='ml-auto'>
				{user === null ? (<>
					<Nav.Link className='d-flex align-self-end' as={Link} to= "/Login"  onClick={closeMenu}><FontAwesomeIcon icon={faCircleUser} style={{color: "#000000",}} /> Iniciar sesion</Nav.Link>
					
				</>) : (
					<>
						<NavDropdown title={<>
							<FontAwesomeIcon icon={faCircleUser} style={{ color: "#000000" }} />{' ' + user.nombre}</>} id="basic-navbar-nav" className='text-success nav-link p-0 ' align={{ sm: 'end' }} style={{textAlign: "right"}}>
							<NavDropdown.Item as={Link} to= {`/perfil/${user.uid}`} style={linkStyles} onClick={closeMenu} className='fw-bolder'>Perfil</NavDropdown.Item>
							{user.rol ===  "admin" ? (<>
							<NavDropdown.Item as={Link} to= "/Admin" onClick={closeMenu} className='fw-bolder'>Administrar</NavDropdown.Item>
							</>) : null}
							<NavDropdown.Item as={Link} to= "#" onClick={cerrarSesion} style={linkStyles} className='fw-bolder'>Cerrar sesión</NavDropdown.Item>
						</NavDropdown>
					</>
				)}
			</div>
			
			</Nav>
			<Nav className="me-auto my-2 my-lg-0 justify-content-end text-uppercase ml-4 fw-bolder" style={{ maxHeight: '200px' }} navbarScroll>
									</Nav>	
			</Navbar.Collapse>
		</Container>
		<div className="relative ml-auto">
		{/* Renderizamos la cantidad de productos en caso de que no sea 0 */}
		<button className="flex justify-end text-3xl" onClick={flagCarrito}>
		🛒 {carrito.length > 0 ? <Totalproductos /> : null}
		</button>
		</div>
		</Navbar>
		{/* Renderizamos el carrito */}
		<div>
			{mostrarCarrito && (
			<div className="">
				<Carrito user={user} />
			</div>
			)}
		</div>
	</div>
    
)
}

export default Header