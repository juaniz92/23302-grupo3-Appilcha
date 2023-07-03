import { useContext } from 'react';
import { data } from './Datos';
import CarritoProductoContar from './CarritoProductoContar';
import React from 'react';

const CarritoElementos = () => {
    const { carrito, setCarrito } = useContext(data);

    const eliminarProducto = (id) => {
        const buscarId = carrito.find((elemento) => elemento.id === id);

        const nuevoCarrito = carrito.filter((elemento) => {
            return elemento !== buscarId;
        });

        setCarrito(nuevoCarrito);
    }

    return carrito.map((item) => {
        return (
            <div className='d-flex p-2 border rounded my-1' key={item.id}>
                <h3 className='col'>{item.title}</h3>
                <CarritoProductoContar producto = {item} />
                <h4 className='text-right col fw-bold my-auto'>$ {parseFloat(item.price * item.cantidad).toFixed(2)}</h4>
                <h3 className='col text-right my-auto' onClick={() => eliminarProducto(item.id)}>❌</h3>
            </div>
        );
    });
};

export default CarritoElementos;