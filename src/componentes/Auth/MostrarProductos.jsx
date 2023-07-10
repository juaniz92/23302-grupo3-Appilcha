import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebaseConfig/firebase';
import Swal from 'sweetalert2';
import { async } from '@firebase/util';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);


const MostrarProductos = () => {

    // Hooks de mostrar
    const productosCollection = collection(db, "Productos");

    const [productos, setProductos] = useState([]);




    // Async

    const getProductos = async () => {
        const data = await getDocs(productosCollection);
        console.log(data.docs);

        setProductos(
            data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );

    }
    useEffect(() => {
        getProductos();

    }, [])

    // Función borrar  registros
    console.log(productos);
    const deleteProducto = async (id) => {
        const productoDoc = doc(db, "Productos", id);
        await deleteDoc(productoDoc);
        getProductos();
    }

    // Swall configuración
    const confirmDelete = (id) => {
        Swal.fire({
            title: '¿Vas a eliminar el producto?',
            text: "¿Seguro de querer eliminarlo?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '¡Sí, Borrar!'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteProducto(id);
                Swal.fire(
                    'Borrado',
                    'El producto fue eliminado.',
                    'Listo'
                )
            }
        })

    }

    //6 declaramos el useEffect



    // Mostramos los datos en la estructura

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <div className='d-grid gap-2'>
                        <Link to="/crearproducto" className='btn btn-outline-light btn-lg mt-3 mb-4 w-25' >Crear Nuevo Producto  <i className="fa-solid fa-plus"></i></Link>
                    </div>
                    <table className='table table-dark table-hover'>
                        <thead>
                            <tr>
                                <th>Descripción</th>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Stock</th>
                                <th>Precio de Costo</th>
                            </tr>
                        </thead>
                        <tbody className='text-light bg-primary'>
                            {productos.map((prod) => (
                                <tr key={prod.id}>
                                    <td key={prod.Descripcion} className='text-light'>{prod.Descripcion || ''}</td>
                                    <td key={prod.Nombre} className='text-light'>{prod.Nombre || ''}</td>
                                    <td key={prod.Precio} className='text-light'>{prod.Precio || ''}</td>
                                    <td key={prod.Stock} className='text-light'>{prod.Stock || ''} </td>
                                    <td key={prod.PrecioCosto} className='text-light'>{prod.PrecioCosto || ''}</td>
                                    <td>
                                        <Link to={`/editarproducto/${prod.id}`} className="btn btn-light"><i className="fa-solid fa-pen-to-square"></i></Link>
                                        <button onClick={() => { confirmDelete(prod.id) }} className="bg-danger"><i className="fa-solid fa-trash "></i></button>
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

export default MostrarProductos;