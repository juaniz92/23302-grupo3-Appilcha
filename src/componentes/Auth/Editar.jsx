import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useNavigate, useParams} from 'react-router-dom';
import {getDoc, doc, updateDoc} from 'firebase/firestore';
import { db } from '../../firebaseConfig/firebase';
import { dbCollection } from '../../firebaseConfig/collections';
import {async} from '@firebase/util';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);

const Editar = () =>{

    //Declaración de variables

    const [form, setForm] = useState({
        Nombre: '',
        Apellido:'',
        Edad:'',
        Email:'',
        Pais:'',
        Ciudad:'',
        Postal:'',
        Password:'',
        Reppassword:''

    })

    const navigate = useNavigate();
    const {id} =useParams();

    
    //Asignar datos modificados

    const cambio = (e)=> {
        setForm({
            ...form, [e.target.name]: e.target.value
        });
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
            Nombre: form.Nombre,
            Apellido: form.Apellido,
            Edad: form.Edad,
            Email: form.Email,
            Pais: form.Pais,
            Ciudad: form.Ciudad,
            Postal: form.Postal,
            Password: form.Password,
            Reppassword: form.Reppassword,

        }
        await updateDoc(usuario, data);
        alertaEditado();
        navigate("/Admin");

    }

    //asincronismo de existencia con la bd

    const getUsuarioById = async (id) =>{
        const usuario = await getDoc(doc(db, dbCollection.Usuarios, id));
        console.log(usuario.data());
    
        if (usuario.exists()){
            setForm({
                Nombre: usuario.data().Nombre,
                Apellido: usuario.data().Apellido,
                Edad: usuario.data().Edad,
                Email: usuario.data().Email,
                Pais: usuario.data().Pais,
                Ciudad: usuario.data().Ciudad,
                Postal: usuario.data().Postal,
                Password: usuario.data().Password,
                Reppasword: usuario.data().Reppassword
                    
                    
            });
        }else{            
            console.log("no existe");
        }
    };
    
    //useEffect
        
    useEffect(()=>{
        getUsuarioById(id);
    }, [id])


    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>

                    <h1 className='mt-3 h2 text-black text-center'>Editar el Usuario</h1>

                    <form onSubmit={update} className="mt-5">
                        <div className='mb-4'>
                            <label className='form-label h3 text-black'>Nombre:</label>
                            <input 
                                name='nombre'
                                value={form.Nombre}
                                type="text"
                                className='form-control w-50 m-auto'
                                onChange={cambio}
                            />
                        </div>

                        <div className='mb-4'>
                            <label className='form-label h3 text-black'>Apellido:</label>
                            <input 
                                name="¨apellido"
                                value={form.Apellido}
                                type="text"
                                className='form-control w-50 m-auto'
                                onChange={cambio}
                            />
                        </div>

                        <div className='mb-3'>
                            <label className='form-label h3 text-black'>Edad:</label>
                            <input 
                                name="edad"
                                value={form.Edad}
                                type="text"
                                className='form-control w-50 m-auto'
                                onChange={cambio}
                            />
                        </div>
                       
                        <div className='mb-4'>
                            <label className='form-label h3 text-black'>Email:</label>
                            <input 
                                name='email'
                                value={form.Email}
                                type="email"
                                className='form-control w-50 m-auto'
                                onChange={cambio}
                            />
                        </div>

                        <div className='mb-4'>
                            <label className='form-label h3 text-black'>Pais:</label>
                            <input 
                                name="¨pais"
                                value={form.Pais}
                                type="text"
                                className='form-control w-50 m-auto'
                                onChange={cambio}
                            />
                        </div>

                        <div className='mb-3'>
                            <label className='form-label h3 text-black'>Ciudad:</label>
                            <input 
                                name="ciudad"
                                value={form.Ciudad}
                                type="text"
                                className='form-control w-50 m-auto'
                                onChange={cambio}
                            />
                        </div>
                        <div className='mb-4'>
                            <label className='form-label h3 text-black'>Codigo Postal:</label>
                            <input 
                                name="¨postal"
                                value={form.Postal}
                                type="text"
                                className='form-control w-50 m-auto'
                                onChange={cambio}
                            />
                        </div>

                        <div className='mb-3'>
                            <label className='form-label h3 text-black'>Password:</label>
                            <input 
                                name="password"
                                value={form.Password}
                                type="password"
                                className='form-control w-50 m-auto'
                                onChange={cambio}
                            />
                        </div>

                        <div className='mb-3'>
                            <label className='form-label h3 text-black'>Reppassword:</label>
                            <input 
                                name="password"
                                value={form.Reppassword}
                                type="password"
                                className='form-control w-50 m-auto'
                                onChange={cambio}
                            />
                        </div>
                       

                        <button type="submit" className='btn btn-outline-dark btn-lg mt-3'>Guardar</button>
                    
                    </form>
                </div>
            </div>
        </div>
    )
    
}

export default Editar
