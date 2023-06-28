import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function Ingresar() {

    const [usuarioValido, cambiarUsuarioValido] = useState(false);

    const submit = (e) => {
		e.preventDefault();
	}

    return(
            <div className='flex relative grow'>
                <div className='absolute top-0 left-0 w-full h-full mix-blend-overlay'></div>
                <form action="#" className="flex items-center justify-center relative z-2 m-auto" onSubmit={submit}>
                <fieldset className="formulario-contacto__contenido">
                    <div className="flex flex-col">
                        <legend className="formulario-contacto__contenido__titulo text-2xl mb-2 self-center">Ingresar a mi cuenta</legend>
                        <label for='email' className="text-1">E-mail</label>
                        <input type='email' className='formulario-contacto__contenido__nombre rounded-md p-1 text-black bg-gray-300 mb-2' placeholder='Escriba su correo electrónico' data='email' id='email' />
                        <label for='password' className="text-1">Contraseña</label>
                        <input type='password' className='formulario-contacto__contenido__nombre rounded-md p-1 text-black bg-gray-300 mb-2' placeholder='Escriba su contraseña' data='password' id='password' />
                        <button className="bg-black text-white rounded-md formulario-contacto__contenido__boton text-2 m-2 p-1" type="submit" formaction="./menu-administrador.html">INGRESAR</button>
                        <Link to="/Registrarse" className="flex self-center m-2 hover:text-gray-500"><strong>REGISTRARSE</strong></Link>
                    </div>
                </fieldset>
                </form>
            </div>
    );
}
  
  export default Ingresar;