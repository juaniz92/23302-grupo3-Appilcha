import { useContext } from "react";
import { data } from './Datos';

<<<<<<< HEAD
const CarritoProductoContar = ({producto}) => {
    const { carrito, setCarrito, anadirProducto } = useContext(data);

=======
//Traemos el producto de CarritoElementos
const CarritoProductoContar = ({producto}) => {
    const { carrito, setCarrito, anadirProducto } = useContext(data);

    //Función para poder restar cantidades de productos
>>>>>>> appilcha
    const restar = () => {
        const productoRepetido = carrito.find((item) => item.id === producto.id);

        productoRepetido.cantidad !== 1 && setCarrito(carrito.map((item)=> item.id === producto.id ? {...producto, cantidad: productoRepetido.cantidad - 1} : item))
    }

<<<<<<< HEAD
    return (
        <div className='bg-gray-200 flex justify-center items-center'>
            <p className='bg-none px-2 cursor-pointer' onClick={restar} >-</p>
            <p className='bg-none px-2'>{producto.cantidad}</p>
            <p className='bg-none px-2 cursor-pointer' onClick={() => anadirProducto(producto)} >+</p>
=======
    //Renderizamos cantidad, y aumento y decremento de la misma
    return (
        <div className='col my-auto'>
            <div className="d-flex justify-content-center">
                <p className='px-2 cursor-pointer my-auto' onClick={restar} >-</p>
                <p className='px-1 fw-bold my-auto'>{producto.cantidad}</p>
                <p className='px-2 cursor-pointer my-auto' onClick={() => anadirProducto(producto)} >+</p>
            </div>
>>>>>>> appilcha
        </div>
    );
};

export default CarritoProductoContar;