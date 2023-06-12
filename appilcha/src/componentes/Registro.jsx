import React, {useRef, useState} from 'react';

function Registro(){

    const [usuarioValido, cambiarUsuarioValido] = useState(false);

    const submit = (e) => {
		e.preventDefault();
	}

    const [mostrarError, cambiarMostrarError] = useState(false);

      const manejarBlur = (e) => {
        const mensajeError = e.target.value;
        cambiarMostrarError(mensajeError === "");
      };
      
    return (

        <div className='flex relative grow'>
            <div className='absolute top-0 left-0 w-full h-full mix-blend-overlay'></div>
            <form action="#" className="w-2/4 h-full p-5 relative z-2 m-auto" onSubmit={submit}>
                    <fieldset className="formulario-contacto__contenido">
                        <legend className="formulario-contacto__contenido__titulo text-3xl mb-2">Formulario de registro</legend>
                                <div className="flex justify-between gap-10">
                                    <div className="flex flex-col w-1/2">
                                        <label for='nombre' className="text-1">Nombre</label>
                                        <input onBlur={manejarBlur} type="text" className="formulario-contacto__contenido__nombre rounded-md p-1 text-black bg-gray-300 mb-2" placeholder="Escriba su nombre" data-input="text" id="nombre"/>
                                        {mostrarError && <div className="text-red-500 text-xs">Completa el campo</div>}
                                        <span className="formulario-contacto__contenido__span"></span>

                                        <label for='email' className="text-1">E-mail</label>
                                        <input type="email" className="formulario-contacto__contenido__nombre rounded-md mb-2 p-1 text-black bg-gray-300" placeholder="Escriba su correo electrónico" data-input="email" id="email"/>
                                        <span className="formulario-contacto__contenido__span"></span>

                                        <label for='pais' className="text-1">País de residencia</label>
                                        <input type="text" className="formulario-contacto__contenido__nombre rounded-md mb-2 p-1 text-black bg-gray-300" placeholder="Escriba su país" data-input="text" id="pais"/>
                                        <span className="formulario-contacto__contenido__span"></span>

                                        <label for='ciudad' className="text-1">Ciudad de residencia</label>
                                        <input type="text" className="formulario-contacto__contenido__nombre rounded-md mb-2 p-1 text-black bg-gray-300" placeholder="Escriba su ciudad" data-input="text" id="ciudad"/>
                                        <span className="formulario-contacto__contenido__span"></span>

                                        <label for='password' className="text-1">Contraseña</label>
                                        <input type="password" className="formulario-contacto__contenido__nombre rounded-md mb-2 p-1 text-black bg-gray-300" placeholder="Escriba su contraseña" data-input="password" id="password"/>
                                        <span className="formulario-contacto__contenido__span"></span>
                                    </div>
                                    <div className="flex flex-col w-1/2">
                                        <label for='apellido' className="text-1">Apellido</label>
                                        <input type="text" className="formulario-contacto__contenido__nombre rounded-md mb-2 p-1 text-black bg-gray-300" placeholder="Escriba su apellido" data-input="text" id="apellido"/>
                                        <span className="formulario-contacto__contenido__span"></span>

                                        <label for='edad' className="text-1">Edad</label>
                                        <input type="number" mode="numeric" className="formulario-contacto__contenido__nombre rounded-md mb-2 p-1 text-black bg-gray-300" placeholder="Escriba su edad" data-input="number" id="edad"/>
                                        <span className="formulario-contacto__contenido__span"></span>

                                        <label for='domicilio' className="text-1">Domicilio</label>
                                        <input type="text" className="formulario-contacto__contenido__nombre rounded-md mb-2 p-1 text-black bg-gray-300" placeholder="Escriba su domicilio" data-input="text" id="domicilio"/>
                                        <span className="formulario-contacto__contenido__span"></span>

                                        <label for='postal' className="text-1">Código postal</label>
                                        <input type="number" className="formulario-contacto__contenido__nombre rounded-md mb-2 p-1 text-black bg-gray-300" placeholder="Escriba su código postal" data-input="number" id="postal"/>
                                        <span className="formulario-contacto__contenido__span"></span>

                                        <label for='password' className="text-1">Repetir contraseña</label>
                                        <input className="formulario-contacto__contenido__nombre rounded-md mb-1 p-1 text-black bg-gray-300" type="password" placeholder="Repita su contraseña" data-input="password" id="reppassword"/>
                                        <span className="formulario-contacto__contenido__span"></span>
                                    </div>
                                </div>
                                <div className='flex flex-col items-center p-2'>
                                    <button className="bg-black text-white rounded-md formulario-contacto__contenido__boton text-2 m-2 px-5" type="submit" formaction="./menu-administrador.html">REGISTRAR</button>
                                    <div className="recaptcha m-2">
						            </div>
                                </div>
                    </fieldset>
                </form>
        </div>
    );
}
  
  export default Registro;