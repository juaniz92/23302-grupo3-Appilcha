import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig/firebase';
import { async } from '@firebase/util';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);


const CrearProductos = () => {

    //1 declar los hooks
    const [descripcion, setDescripcion] = useState("");
    const [nombre, setNombre] = useState();
    const [precio, setPrecio] = useState();
    const [precioCosto, setPrecioCosto] = useState();
    const [stock, setStock] = useState();
    const [imagen, setImagen] = useState("");
    const navigate = useNavigate();

    // Vamos a la BD

    const productosCollection = collection(db, "Productos");

    // SweetAlert creación

    const alertaCreacion = () => {
        Swal.fire({
            title: 'Producto nuevo creado',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        });
    }

    // Creación de productos

    const nuevo = async (e) => {
        e.preventDefault();
        await addDoc(productosCollection, {Imagen: imagen, Descripcion: descripcion, Nombre: nombre, Precio: precio, PrecioCosto:precioCosto, Stock: stock });
        alertaCreacion();
        navigate("/Admin");
    }

    // Formulario para el administrador

    return (
        <div className='container'>
            <div className='row p-3 g-0'>
                <div className='col col-md-6 mx-auto'>

                    <h1 className='mt-3 h1 text-dark '>Crear Producto Nuevo</h1>

                    <form onSubmit={nuevo} className='mt-5'>
                        <div className='mb-4 row g-0'>
                            <label className='form-label h5 text-dark'>Nombre:</label>
                            <input
                                value={nombre}
                                type="text"
                                className='form-control'
                                onChange={(e) => setNombre(e.target.value)}
                            />
                        </div>
                        
                        <div className='mb-4'>
                            <label className='form-label h5 text-dark'>Descripción:</label>
                            <input
                                value={descripcion}
                                type="text"
                                className='form-control'
                                onChange={(e) => setDescripcion(e.target.value)}
                            />
                        </div>


                        <div className='mb-4'>
                            <label className='form-label h5 text-dark'>Precio:</label>
                            <input
                                value={precio}
                                type="text"
                                className='form-control'
                                onChange={(e) => setPrecio(e.target.value)}
                            />
                        </div>

                        <div className='mb-4'>
                            <label className='form-label h5 text-dark'>Precio de costo:</label>
                            <input
                                value={precioCosto}
                                type="text"
                                className='form-control'
                                onChange={(e) => setPrecioCosto(e.target.value)}
                            />
                        </div>

                        <div className='mb-4'>
                            <label className='form-label h5 text-dark'>Stock:</label>
                            <input
                                value={stock}
                                type="text"
                                className='form-control'
                                onChange={(e) => setStock(e.target.value)}
                            />
                        </div>

                        <div className='mb-4'>
                            <label className='form-label h5 text-dark'>Imagen (URL):</label>
                            <input
                                value={imagen}
                                type="text"
                                className='form-control'
                                onChange={(e) => setImagen(e.target.value)}
                            />
                        </div>

                        <button type="submit" className='btn btn-outline-dark btn-lg mt-3'>Agregar</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default CrearProductos;