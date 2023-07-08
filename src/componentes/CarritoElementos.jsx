import { useContext } from 'react';
import { data } from './Datos';
import CarritoProductoContar from './CarritoProductoContar';
import React from 'react';

const CarritoElementos = () => {
    const { carrito, setCarrito } = useContext(data);

<<<<<<< HEAD
=======
    //Función para eliminar producto del carrito
>>>>>>> appilcha
    const eliminarProducto = (id) => {
        const buscarId = carrito.find((elemento) => elemento.id === id);

        const nuevoCarrito = carrito.filter((elemento) => {
            return elemento !== buscarId;
        });

        setCarrito(nuevoCarrito);
    }

<<<<<<< HEAD
    return carrito.map((item) => {
        return (
            <div className='flex flex-row justify-between bg-none' key={item.id}>
                <h3 className=''>{item.title}</h3>
                <CarritoProductoContar producto = {item}/>
                <h4 className=''>$ {item.price * item.cantidad}</h4>
                <h3 className='' onClick={() => eliminarProducto(item.id)}>❌</h3>
=======
    //Renderizamos los productos seleccionados en el carrito
    return carrito.map((item) => {
        return (
            <div className='d-flex p-2 border rounded my-1' key={item.id}>
                <h3 className='col'>{item.title}</h3>
                {/*Tomamos por parámetro el producto del carrito*/}
                <CarritoProductoContar producto = {item} />
                {/*Calculamos por cada producto, el precio por la cantidad*/}
                <h4 className='text-right col fw-bold my-auto'>$ {parseFloat(item.price * item.cantidad).toFixed(2)}</h4>
                <h3 className='col text-right my-auto' onClick={() => eliminarProducto(item.id)}>❌</h3>
>>>>>>> appilcha
            </div>
        );
    });
};

export default CarritoElementos;