import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';
import { getDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig/firebase';
import { dbCollection } from '../../firebaseConfig/collections';
import { async } from '@firebase/util';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
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
    })

    const navigate = useNavigate();
    const {id} = useParams();

    // Función para asignar valores al formulario

    const cambio = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    // Alerta de guardado

    const alertaGuardado = () => {

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
    const [mostrarError, cambiarMostrarError] = useState(false);

    const manejarBlur = (e) => {
        const mensajeError = e.target.value;
        cambiarMostrarError(mensajeError === "");
    };

    // Declaración de Update

    const update = async (e) => {
        e.preventDefault();
        const producto = doc(db, dbCollection.Productos, id);
        const data = {
            Descripcion: form.Descripcion,
            Nombre: form.Nombre,
            Precio: form.Precio,
            PrecioCosto: form.PrecioCosto,
            Stock: form.Stock
        }
        
        await updateDoc(producto, data);
        alertaGuardado();
        navigate("/EditarProductos");
    }

    //5 asincronismo de existencia con la bd

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

}

export default EditarProductos;