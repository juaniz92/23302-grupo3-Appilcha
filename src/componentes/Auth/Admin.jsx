import {Link} from 'react-router-dom';

import React from 'react'

function Admin() {
    return (
        <div className='flex relative grow'>
            <div className='absolute top-0 left-0 w-full h-full mix-blend-overlay'></div>
            <form action="#" className="flex items-center justify-center relative z-2 m-auto">
                    <fieldset className="formulario-contacto__contenido">
                        <div className="flex flex-col">
                            <legend className="formulario-contacto__contenido__titulo text-2xl mb-2 self-center text-center">MENU ADMINISTRADOR</legend>
                            <div>
                                <div>
                                    <br/>
                                    <Link to="/Mostrar" className="flex self-center text-center m-2 hover:text-gray-500 mx-5"><strong>USUARIOS</strong></Link> <br/>
                                    <Link to="/Registrarse" className="flex self-center text-center  m-2 hover:text-gray-500 mx-5"><strong>REGISTRO</strong></Link> <br/>
                                    

                                </div>

                            </div>

                        </div>
                    </fieldset>
                </form>
                
            
        </div>
    )
}

export default Admin

