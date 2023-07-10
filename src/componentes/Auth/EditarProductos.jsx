import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';
import { getDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig/firebase';
import { dbCollection } from '../../firebaseConfig/collections';
import { async } from '@firebase/util';
import Swal from 'sweetalert2';
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
    });

    const navigate = useNavigate();
    const {id} = useParams();

    // Función para asignar valores al formulario

    const cambio = (e) => {
        setForm({
            ...form, [e.target.name]: e.target.value
        });
    };

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
        console.log(data());
        await updateDoc(producto, data);
        alertaGuardado();
        navigate("/Admin");
    }

    //Asincronismo de existencia con la bd

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
}

export default EditarProductos;