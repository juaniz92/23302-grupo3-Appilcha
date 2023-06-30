import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {collection, addDoc} from 'firebase/firestore';
import { db } from '../../firebaseConfig/firebase';
import {async} from '@firebase/util';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);

function Registrarse(){
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [edad, setEdad] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [pais, setPais] = useState('');
    const [domicilio, setDomicilio] = useState('');
    const [postal, setPostal] = useState('');
    const [reppassword, setReppassword] = useState('');

    const navigate = useNavigate();
    //referenciar db
    const usuariosCollection = collection(db, "Usuarios");

    //Alerta

    const alertCreacion = () => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Tus datos fueron guardados correctamente ',
            showConfirmButton: false,
            timer: 1500
        })

    }

     //Expresiones Regulares
     const expresiones = {
        usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        password: /^.{4,12}$/, // 4 a 12 digitos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/ // 7 a 14 numeros.
    }

    //Asincronismo

    const nuevo = async (e) => {
        e.preventDefault();

      

       await addDoc(usuariosCollection, {Nombre: nombre, Apellido: apellido,  Email: email, Password: password, Edad: edad, Pais: pais, Ciudad: ciudad, Domicilio: domicilio, Postal: postal, Reppassword: reppassword});
        alertCreacion();
        navigate("/Ingresar");
    }

    //Validar repassword
/*
    const validarRepassword = () =>{
        if (password.length>0){
            if(password !== reppassword){
                
            }

        }
    }*/

    const [usuarioValido, cambiarUsuarioValido] = useState(false);

   

    const [mostrarError, cambiarMostrarError] = useState(false);

      const manejarBlur = (e) => {
        const mensajeError = e.target.value;
        cambiarMostrarError(mensajeError === "");
      };
      
    return (

        <div className='flex relative grow'>
        <div className='absolute top-0 left-0 w-full h-full mix-blend-overlay'></div>
        <form action="#" className="w-2/4 h-full p-5 relative z-2 m-auto" onSubmit={nuevo}>
                <fieldset className="formulario-contacto__contenido">
                    <legend className="formulario-contacto__contenido__titulo text-3xl mb-2">Formulario de registro</legend>
                            <div className="flex justify-between gap-10">
                                <div className="flex flex-col w-1/2">
                                    <label for='nombre' className="text-1">Nombre</label>
                                    <input 
                                    value={nombre} 
                                    onBlur={manejarBlur} 
                                    type="text" 
                                    className="formulario-contacto__contenido__nombre rounded-md p-1 text-black bg-gray-300 mb-2" 
                                    placeholder="Escriba su nombre" 
                                    data-input="text" 
                                    id="nombre" 
                                    onChange={(e)=>setNombre(e.target.value)}
                                    expresionRegular={expresiones.nombre}/>
                                    {mostrarError && <div className="text-red-500 text-xs">Completa el campo</div>}
                                    <span className="formulario-contacto__contenido__span"></span>

                                    <label for='email' className="text-1">E-mail</label>
                                    <input value= {email} type="email" className="formulario-contacto__contenido__nombre rounded-md mb-2 p-1 text-black bg-gray-300" placeholder="Escriba su correo electrónico" data-input="email" id="email" onChange={(e)=>setEmail(e.target.value)}/>
                                    {mostrarError && <div className="text-red-500 text-xs">Completa el campo</div>}
                                    <span className="formulario-contacto__contenido__span"></span>

                                    <label for='pais' className="text-1">País de residencia</label>
                                    <input value={pais}  type="text" className="formulario-contacto__contenido__nombre rounded-md mb-2 p-1 text-black bg-gray-300" placeholder="Escriba su país" data-input="text" id="pais" onChange={(e)=>setPais(e.target.value)}/>
                                    <span className="formulario-contacto__contenido__span"></span>

                                    <label for='ciudad' className="text-1">Ciudad de residencia</label>
                                    <input value={ciudad} type="text" className="formulario-contacto__contenido__nombre rounded-md mb-2 p-1 text-black bg-gray-300" placeholder="Escriba su ciudad" data-input="text" id="ciudad" onChange={(e)=>setCiudad(e.target.value)}/>
                                    <span className="formulario-contacto__contenido__span"></span>

                                    <label for='password' className="text-1">Contraseña</label>
                                    <input value={password}  type="password" className="formulario-contacto__contenido__nombre rounded-md mb-2 p-1 text-black bg-gray-300" placeholder="Escriba su contraseña" data-input="password" id="password" onChange={(e)=>setPassword(e.target.value)}/>
                                    <span className="formulario-contacto__contenido__span"></span>
                                </div>
                                <div className="flex flex-col w-1/2">
                                    <label for='apellido' className="text-1">Apellido</label>
                                    <input value={apellido}  type="text" className="formulario-contacto__contenido__nombre rounded-md mb-2 p-1 text-black bg-gray-300" placeholder="Escriba su apellido" data-input="text" id="apellido" onChange={(e)=>setApellido(e.target.value)}/>
                                    {mostrarError && <div className="text-red-500 text-xs">Completa el campo</div>}
                                    <span className="formulario-contacto__contenido__span"></span>

                                    <label for='edad' className="text-1">Edad</label>
                                    <input value={edad}  type="number" mode="numeric" className="formulario-contacto__contenido__nombre rounded-md mb-2 p-1 text-black bg-gray-300" placeholder="Escriba su edad" data-input="number" id="edad" onChange={(e)=>setEdad(e.target.value)}/>
                                    {mostrarError && <div className="text-red-500 text-xs">Completa el campo</div>}
                                    <span className="formulario-contacto__contenido__span"></span>

                                    <label for='domicilio' className="text-1">Domicilio</label>
                                    <input value={domicilio}  type="text" className="formulario-contacto__contenido__nombre rounded-md mb-2 p-1 text-black bg-gray-300" placeholder="Escriba su domicilio" data-input="text" id="domicilio" onChange={(e)=>setDomicilio(e.target.value)}/>
                                    <span className="formulario-contacto__contenido__span"></span>

                                    <label for='postal' className="text-1">Código postal</label>
                                    <input value={postal}  type="number" className="formulario-contacto__contenido__nombre rounded-md mb-2 p-1 text-black bg-gray-300" placeholder="Escriba su código postal" data-input="number" id="postal" onChange={(e)=>setPostal(e.target.value)}/>
                                    <span className="formulario-contacto__contenido__span"></span>

                                    <label for='password' className="text-1">Repetir contraseña</label>
                                    <input value={reppassword}  className="formulario-contacto__contenido__nombre rounded-md mb-1 p-1 text-black bg-gray-300" type="password" placeholder="Repita su contraseña" data-input="password" id="reppassword" onChange={(e)=>setReppassword(e.target.value)}/>
                                    <span className="formulario-contacto__contenido__span"></span>
                                </div>
                            </div>
                            <div>
                                <label>
                                    <input type="checkbox" name="terminos" id="terminos"/> Aceptar los términos y condiciones
                                </label>
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
  
  export default Registrarse;
