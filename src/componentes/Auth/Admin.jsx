import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faUserPlus, faCirclePlus, faEye, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import React from 'react'

function Admin() {
    return (
        
        <div className='Container border border-dark rounded-3 mb-3'>

            <form action="#" className="text-center p-4">

                <fieldset>
                    <legend className="h3 text mb-2 text-uppercase">Menú Administrador</legend>
                    <div className='d-flex flex-column mt-3'>
                    
                        <Link to="/Mostrar" className="text-center mt-2 hover:text-gray-500"><FontAwesomeIcon icon={faUsers} style={{color: "#000000",}} /> <strong>USUARIOS</strong></Link>

                        <Link to="/Registrarse" className="my-3 hover:text-white-500"><FontAwesomeIcon icon={faUserPlus} style={{color: "#000000",}} /> <strong>REGISTRO</strong></Link>

                    </div>  
                </fieldset>

                <fieldset>
                    <legend className="h3 text mb-2 text-uppercase">Gestión de Productos</legend>
                    <div className='d-flex flex-column mt-3'>

                        <Link to="/CrearProductos" className="text-center mt-2 hover:text-gray-500"><FontAwesomeIcon icon={faCirclePlus} style={{color: "#000000",}} /> <strong>Crear productos</strong></Link>

                        <Link to="/MostrarProductos" className="my-3 hover:text-gray-500"><strong><FontAwesomeIcon icon={faEye} style={{color: "#000000",}} /> Mostrar productos</strong></Link>

                        <Link to="/EditarProductos" className="text-center hover:text-gray-500"><strong><FontAwesomeIcon icon={faPenToSquare} style={{color: "#000000",}} /> Editar Productos</strong></Link>

                    </div>
                </fieldset>
            </form>

        </div>
                
    )
}

export default Admin

