import { useContext } from 'react';
import { data } from './Datos';
import CarritoProductoContar from './CarritoProductoContar';
import React from 'react';

const CarritoElementos = () => {
    const { carrito, setCarrito } = useContext(data);

    //Función para eliminar producto del carrito
    const eliminarProducto = (id) => {
        const buscarId = carrito.find((elemento) => elemento.id === id);

        const nuevoCarrito = carrito.filter((elemento) => {
            return elemento !== buscarId;
        });

        setCarrito(nuevoCarrito);
    }
    
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
            </div>
        );
    });
};

export default CarritoElementos;