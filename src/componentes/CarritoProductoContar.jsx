import { useContext } from "react";
import { data } from './Datos';

const CarritoProductoContar = ({producto}) => {
    const { carrito, setCarrito, anadirProducto } = useContext(data);

    const restar = () => {
        const productoRepetido = carrito.find((item) => item.id === producto.id);

        productoRepetido.cantidad !== 1 && setCarrito(carrito.map((item)=> item.id === producto.id ? {...producto, cantidad: productoRepetido.cantidad - 1} : item))
    }

    return (
        <div className='bg-gray-200 flex justify-center items-center'>
            <p className='bg-none px-2 cursor-pointer' onClick={restar} >-</p>
            <p className='bg-none px-2'>{producto.cantidad}</p>
            <p className='bg-none px-2 cursor-pointer' onClick={() => anadirProducto(producto)} >+</p>
        </div>
    );
};

export default CarritoProductoContar;