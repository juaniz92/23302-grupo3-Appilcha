import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';
import { getDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig/firebase';
import { dbCollection } from '../../firebaseConfig/collections';
import { async } from '@firebase/util';
import Swal from 'sweetalert2';
<<<<<<< HEAD
=======
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
>>>>>>> 2cd537202cacf896ce8dbff9a57ee1ce49753483
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);

const EditarProductos = () => {

    // Parámetros para el formulario
    const [form, setForm] = useState({
        Descripcion: '',
        Nombre: '',
        Precio: '',
        PrecioCosto: '',
        Stock: ''
<<<<<<< HEAD
    });
=======
    })
>>>>>>> 2cd537202cacf896ce8dbff9a57ee1ce49753483

    const navigate = useNavigate();
    const {id} = useParams();

    // Función para asignar valores al formulario

    const cambio = (e) => {
        setForm({
<<<<<<< HEAD
            ...form, [e.target.name]: e.target.value
        });
    };
=======
            ...form,
            [e.target.name]: e.target.value
        });
    }
>>>>>>> 2cd537202cacf896ce8dbff9a57ee1ce49753483

    // Alerta de guardado

    const alertaGuardado = () => {
<<<<<<< HEAD
=======

>>>>>>> 2cd537202cacf896ce8dbff9a57ee1ce49753483
        Swal.fire({
            title: 'Producto modificado y guardado',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })
    }
<<<<<<< HEAD
=======
    const [mostrarError, cambiarMostrarError] = useState(false);

    const manejarBlur = (e) => {
        const mensajeError = e.target.value;
        cambiarMostrarError(mensajeError === "");
    };
>>>>>>> 2cd537202cacf896ce8dbff9a57ee1ce49753483

    // Declaración de Update

    const update = async (e) => {
        e.preventDefault();
<<<<<<< HEAD

=======
>>>>>>> 2cd537202cacf896ce8dbff9a57ee1ce49753483
        const producto = doc(db, dbCollection.Productos, id);
        const data = {
            Descripcion: form.Descripcion,
            Nombre: form.Nombre,
            Precio: form.Precio,
            PrecioCosto: form.PrecioCosto,
            Stock: form.Stock
        }
<<<<<<< HEAD
        console.log(data());
        await updateDoc(producto, data);
        alertaGuardado();
        navigate("/Admin");
    }

    //Asincronismo de existencia con la bd
=======
        
        await updateDoc(producto, data);
        alertaGuardado();
        navigate("/MostrarProductos");
    }

    //5 asincronismo de existencia con la bd
>>>>>>> 2cd537202cacf896ce8dbff9a57ee1ce49753483

    const getProductoById = async (id) => {
        const producto = await getDoc(doc(db, dbCollection.Productos, id));
        console.log(producto.data());

        if (producto.exists()) {
            setForm({
                Descripcion: producto.data().Descripcion,
                Nombre: producto.data().Nombre,
                Precio: producto.data().Precio,
                PrecioCosto: producto.data().PrecioCosto,
                Stock: producto.data().Stock
            });
        }
        else {
            console.log("no existe");
        }
    };

    // Aplicamos useEffect

    useEffect(() => {
        getProductoById(id);
    }, [id])

    // estructura para mostrar
<<<<<<< HEAD

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>

                    <h1 className='mt-3 text-black text-center'>Editar el Producto</h1>

                    <form onSubmit={update} className="mt-5">
                        <div className='mb-4'>
                            <label className='form-label h3 text-light'>Descripción:</label>
                            <input
                                name='Descripcion'
                                value={form.Descripcion}
                                type="text"
                                className='form-control w-50 m-auto'
                                onChange={cambio}
                            />
                        </div>

                        <div className='mb-4'>
                            <label className='form-label h3 text-light'>Nombre:</label>
                            <input
                                name='Nombre'
                                value={form.Nombre}
                                type="text"
                                className='form-control w-50 m-auto'
                                onChange={cambio}
                            />
                        </div>

                        <div className='mb-4'>
                            <label className='form-label h3 text-light'>Precio:</label>
                            <input
                                name="Precio"
                                value={form.Precio}
                                type="text"
                                className='form-control w-50 m-auto'
                                onChange={cambio}
                            />
                        </div>

                        <div className='mb-4'>
                            <label className='form-label h3 text-light'>Precio de Costo:</label>
                            <input
                                name="PrecioCosto"
                                value={form.PrecioCosto}
                                type="text"
                                className='form-control w-50 m-auto'
                                onChange={cambio}
                            />
                        </div>

                        <div className='mb-3'>
                            <label className='form-label h3 text-light'>Stock:</label>
                            <input
                                name="Stock"
                                value={form.Stock}
                                type="text"
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
=======
    return (
        <div className='Container'>
            <div className='Container'>
                <form action="#" className=" h-full  relative z-2 m-2 px-10" onSubmit={update}>
                    <fieldset className="formulario-contacto__contenido">
                        <legend className="formulario-contacto__contenido__titulo text-3xl text-center mb-2">Formulario Editar Producto</legend>
                        <div className="row my-2">
                            <div className="col-md-6">
                                <div className="col-md-12">
                                    <label for='Descripcion' className="text-1 text-black">Descripción</label>
                                </div>
                                <div className="col-md-12">
                                    <input
                                        name='Descripcion'
                                        value={form.Descripcion}
                                        onBlur={manejarBlur}
                                        type="text"
                                        className="form-control rounded-md p-1 text-black bg-gray-300 mb-2"
                                        placeholder="Descripción Producto"
                                        data-input="text"
                                        id="Descripcion"
                                        onChange={cambio} />
                                    {mostrarError && <div className="text-red-500 text-xs">Completa el campo</div>}
                                    <span className="formulario-contacto__contenido__span"></span>

                                </div>

                            </div>
                            <div className="col-md-6">
                                <div className="col-md-12">
                                    <label for='Nombre' className="text-1 text-black">Nombre del Producto</label>
                                </div>
                                <input
                                    name='Nombre'
                                    value={form.Nombre}
                                    type="text"
                                    className="form-control rounded-md p-1 text-black bg-gray-300 mb-2"
                                    placeholder="Nombre del Producto"
                                    data-input="text"
                                    id="Nombre"
                                    onChange={cambio} />
                                {mostrarError && <div className="text-red-500 text-xs">Completa el campo</div>}
                                <span className="formulario-contacto__contenido__span"></span>

                            </div>
                        </div>
                        <div className="row my-2">
                            <div className="col-md-6">
                                <div className="col-md-12">
                                    <label for='precio' className="text-1 text-black">Precio</label>
                                </div>
                                <input
                                    name='Precio'
                                    value={form.Precio}
                                    type="number"
                                    className="form-control rounded-md mb-2 p-1 text-black bg-gray-300"
                                    placeholder="Complete el precio"
                                    data-input="number"
                                    id="Precio"
                                    onChange={cambio} />
                                {mostrarError && <div className="text-red-500 text-xs">Completa el campo</div>}
                                <span className="formulario-contacto__contenido__span"></span>
                            </div>
                            <div className="col-md-6">
                                <div className="col-md-12">
                                    <label for='PrecioCosto' className="text-1 text-black">Precio de costo</label>
                                </div>
                                <input
                                    name='PrecioCosto'
                                    value={form.PrecioCosto}
                                    type="PrecioCosto"
                                    className="form-control rounded-md mb-2 p-1 text-black bg-gray-300"
                                    placeholder="Complete el precio de costo"
                                    data-input="number"
                                    id="PrecioCosto"
                                    onChange={cambio} />
                                {mostrarError && <div className="text-red-500 text-xs">Completa el campo</div>}
                                <span className="formulario-contacto__contenido__span"></span>

                            </div>

                        </div>
                        <div className="row my-2">
                            <div className="col-md-6">
                                <div className="col-md-12">
                                    <label for='Stock' className="text-1">Stock</label>
                                </div>
                                <input
                                    name='Stock'
                                    value={form.Stock}
                                    type="number"
                                    className="form-control rounded-md mb-2 p-1 text-black bg-gray-300"
                                    placeholder="Escriba su país" data-input="text" id="pais"
                                    onChange={cambio} />
                                <span className="formulario-contacto__contenido__span"></span>
                            </div>

                        </div>

                        <div className='flex flex-col items-center p-2'>
                            <button className="bg-black text-white rounded-md formulario-contacto__contenido__boton text-2  px-5 py-2" type="submit" formaction="./menu-administrador.html"><FontAwesomeIcon icon={faFloppyDisk} /> Guardar Cambios</button>
                            <div className="recaptcha m-2">
                            </div>
                        </div>
                    </fieldset>
                </form>

            </div>


        </div>
    )

>>>>>>> 2cd537202cacf896ce8dbff9a57ee1ce49753483
}

export default EditarProductos;