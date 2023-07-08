import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {collection, getDocs, deleteDoc, doc} from 'firebase/firestore';
import { db } from '../../firebaseConfig/firebase';
import Swal from 'sweetalert2';
import {async} from '@firebase/util';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);

const Mostrar = () => {

    //configuración de los hook de mostrar
    const UsuariosCollection = collection(db, "Usuarios");

    const [usuarios, setUsuarios] = useState([]);

    

    //Asincronismo

    const getUsuarios = async ()=> { 
        const data = await getDocs(UsuariosCollection); 
        console.log(data.docs);
 
        setUsuarios(
           data.docs.map((doc)=>({...doc.data(), id:doc.id}))
        ); 
       
    }
    useEffect(()=>{
        getUsuarios();
        
    }, [ ])

    //declaración función delete para eliminar registros
    console.log(usuarios);
    const deleteUsuario = async (id)=>{
        const usuarioDoc = doc(db, "Usuarios", id);
        await deleteDoc(usuarioDoc);
        getUsuarios();
    }

    //configuración sweetalert
    const confirmDelete = (id) => {
        Swal.fire({
            title: 'Vas a eliminar el usuario?',
            text: "Seguro de querer eliminarlo!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Borrar!'
        }).then((result) => {
            if (result.isConfirmed) {
            deleteUsuario(id);
            Swal.fire(
                'Borrado',
                'El usuario fue eliminado.',
                'Listo'
            )
            }
        })

    }

  
 

    //mostrar datos en estructura

  return (
    <div className='container'>
        <div className='row'>
            <div className='col'>
                <legend className="formulario-contacto__contenido__titulo text-2xl mb-2 self-center text-center">USUARIOS</legend>
                <div className='d-grid gap-2'>
                    <Link to="/Registrarse" className='btn btn-outline-light btn-lg mt-3 mb-4 w-25 text-black' >Registrar Usuario <i className="fa-solid fa-plus"></i></Link>
                </div>
                <table className='table table-dark table-hover'>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Edad</th>
                            <th>Email</th>
                            <th>Pais</th>
                            <th>Ciudad</th>
                            <th>Domicilio</th>
                            <th>Postal</th>
                            <th>Password</th>
                            <th>Reppassword</th>
                            <th>Rol</th>
                        </tr>
                    </thead>
                    <tbody className='text-light bg-primary'>
                        { usuarios.map((usuari)=>(
                            <tr key={usuari.id}>
                                <td key={usuari.Nombre} className='text-light'>{usuari.Nombre || ''}</td>
                                <td key={usuari.Apellido} className='text-light'>{usuari.Apellido || ''}</td>
                                <td key={usuari.Edad} className='text-light'>{usuari.Edad || ''} </td>
                                <td key={usuari.Email} className='text-light'>{usuari.Email || ''}</td>
                                <td key={usuari.Pais} className='text-light'>{usuari.Pais || ''}</td>
                                <td key={usuari.Ciudad} className='text-light'>{usuari.Ciudad || ''} </td>
                                <td key={usuari.Domicilio} className='text-light'>{usuari.Domicilio || ''} </td>
                                <td key={usuari.Postal} className='text-light'>{usuari.Postal || ''}</td>
                                <td key={usuari.Password} className='text-light'>{usuari.Password || ''}</td>
                                <td key={usuari.Reppassword} className='text-light'>{usuari.Reppassword || ''} </td>
                                <td key={usuari.rol} className='text-light'>{usuari.rol || ''} </td>
                                <td>
                                    <Link to={`/editarusuario/${usuari.id}`} className="btn btn-info"><i className="fa-solid fa-pen-to-square"></i></Link>  
                                    <button onClick={()=>{confirmDelete(usuari.id)}} className="bg-danger"><i className="fa-solid fa-trash "></i>Eliminar</button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Mostrar;
