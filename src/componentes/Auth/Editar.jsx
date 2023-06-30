import React, {useState, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {getDoc, doc, updateDoc} from 'firebase/firestore';
import { db } from '../../firebaseConfig/firebase';
import { dbCollection } from '../../firebaseConfig/collections';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);

const Editar = () =>{

    //Declaración de variables

    const [form, setForm] = useState({
        nombre: '',
        apellido:'',
        edad:'',
        email:'',
        pais:'',
        ciudad:'',
        postal:'',
        password:'',

    });

    const navigate = useNavigate();
    const {id} =useParams();

    
    //Asignar datos modificados

    const cambio = (e)=> {
        setForm({
            ...form, [e.target.name]: e.target.value
        }

        );
    }

    // declarar alerta

    const alertaEditado = () => {

        Swal.fire ({
            title: 'tu archivo fue editado',
            showClass: {
                popup: 'animate_animated animate_fadeInDown'
            },
            hideClass:{
                popup: 'animate_animated animate_fadeOutUp'
            }
        })
    }

    // declaramos el update

    const update = async (e) => {
        e.preventDefault();

        const usuario = doc(db, dbCollection.Usuarios, id);
        const data  = {
            nombre: form.nombre,
            apellido: form.apellido,
            edad: form.edad,
            email: form.email,
            pais: form.pais,
            ciudad: form.ciudad,
            postal: form.postal,
            password: form.password

        }
        await updateDoc(usuario, data);
        alertaEditado();
        navigate("/Admin");

    }

        //5 asincronismo de existencia con la bd

        const getUsuarioById = async (id) =>{
            const usuario = await getDoc(doc(db, dbCollection.Usuarios, id));
            console.log(usuario.data());
    
            if (usuario.exists()){
                setForm({
                    
                    nombre: usuario.data().nombre,
                    apellido: usuario.data().apellido,
                    edad: usuario.data().edad,
                    email: usuario.data().email,
                    pais: usuario.data().pais,
                    ciudad: usuario.data().ciudad,
                    postal: usuario.data().postal,
                    password: usuario.data().password,
                    reppasword: usuario.data().repassword
                });
            }
            else{
                console.log("no existe");
            }
        };
    
        //6 useEffect
        
        useEffect(()=>{
            getUsuarioById(id);
        }, [id])


    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>

                    <h1 className='mt-3 text-light'>Editar el Usuario</h1>

                    <form onSubmit={update} className="mt-5">
                        <div className='mb-4'>
                            <label className='form-label h3 text-light'>Nombre:</label>
                            <input 
                                name='nombre'
                                value={form.nombre}
                                type="text"
                                className='form-control w-50 m-auto'
                                onChange={cambio}
                            />
                        </div>

                        <div className='mb-4'>
                            <label className='form-label h3 text-light'>Apellido:</label>
                            <input 
                                name="¨apellido"
                                value={form.apellido}
                                type="text"
                                className='form-control w-50 m-auto'
                                onChange={cambio}
                            />
                        </div>

                        <div className='mb-3'>
                            <label className='form-label h3 text-light'>Edad:</label>
                            <input 
                                name="edad"
                                value={form.edad}
                                type="text"
                                className='form-control w-50 m-auto'
                                onChange={cambio}
                            />
                        </div>
                       
                        <div className='mb-4'>
                            <label className='form-label h3 text-light'>Email:</label>
                            <input 
                                name='email'
                                value={form.email}
                                type="email"
                                className='form-control w-50 m-auto'
                                onChange={cambio}
                            />
                        </div>

                        <div className='mb-4'>
                            <label className='form-label h3 text-light'>Pais:</label>
                            <input 
                                name="¨pais"
                                value={form.pais}
                                type="text"
                                className='form-control w-50 m-auto'
                                onChange={cambio}
                            />
                        </div>

                        <div className='mb-3'>
                            <label className='form-label h3 text-light'>Ciudad:</label>
                            <input 
                                name="ciudad"
                                value={form.ciudad}
                                type="text"
                                className='form-control w-50 m-auto'
                                onChange={cambio}
                            />
                        </div>
                        <div className='mb-4'>
                            <label className='form-label h3 text-light'>Codigo Postal:</label>
                            <input 
                                name="¨postal"
                                value={form.postal}
                                type="text"
                                className='form-control w-50 m-auto'
                                onChange={cambio}
                            />
                        </div>

                        <div className='mb-3'>
                            <label className='form-label h3 text-light'>Password:</label>
                            <input 
                                name="password"
                                value={form.password}
                                type="text"
                                className='form-control w-50 m-auto'
                                onChange={cambio}
                            />
                        </div>
                       

                        <button type="submit" className='btn btn-outline-light btn-lg mt-3'>Guardar</button>
                    
                    </form>
                </div>
            </div>
        </div>
    )
    
}

export default Editar
