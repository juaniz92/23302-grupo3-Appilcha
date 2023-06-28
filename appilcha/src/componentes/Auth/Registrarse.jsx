import React, {useState} from "react";
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import {collection, addDoc,} from 'firebase/firestore';
import {db} from '../../firebaseConfig/firebase';
import {async} from '@firebase/util';
import Swal from 'sweetalert2';
import withReactContent from "sweetalert2-react-content";
const MySwal= withReactContent (Swal);



const Registrarse = () => {

    //Declaración de hooks
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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

    //Asincronismo

    const nuevo = async (e) => {
        e.preventDefault();

       await addDoc(usuariosCollection, {Nombre: nombre, Apellido: apellido, Email: email, Password: password});
        alertCreacion();
        navigate("/Ingresar");
    }
   



    return(
        <div className= 'container'>
            <div className= 'col'>
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>

                    <form onSubmit={nuevo} className= 'mt-5'>
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Nombre
                                    </label>
                                    <div className="mt-2">
                                        <input 
                                        value={nombre}
                                        type="text"
                                        id="nombre"
                                        
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={(e)=>setNombre(e.target.value)}
                                        />
                                        
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Apellido
                                    </label>
                                    <div className="mt-2">
                                        <input
                                        value= {apellido}
                                        type="text"
                                        
                                        id="apellido"
                                        autoComplete="family-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={(e)=>setApellido(e.target.value)}
                                        />
                                        
                                    </div>
                                </div>

                                <div className="sm:col-span-4">
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                        Email address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                        value= {email}
                                        id="email"
                                        
                                        type="email"
                                        autoComplete="email"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={(e)=>setEmail(e.target.value)}
                                        />
                                        
                                    </div>
                                </div>
                                <div className="sm:col-span-4">
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                    </label>
                                    <div className="mt-2">
                                        <input
                                        value={password}
                                        id="password"
                                        
                                        type="password"
                                        
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={(e)=>setPassword(e.target.value)}
                                        />
                                        
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-outline-primary btn-lg mt-3">Registrarse</button>
                        </div>




                    </form>
                </div>
                

                        
                    
                    





            </div>

        </div>
    )
}

export default Registrarse;