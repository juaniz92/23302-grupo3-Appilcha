import { useContext } from 'react';
import { data } from './Datos';
import CarritoElementos from "./CarritoElementos";
import CarritoTotal from "./CarritoTotal";

const Carrito = () => {
    const { carrito } = useContext(data);

    return carrito.length > 0 ? (
        <div className='flex flex-col p-2 rounded-md shadow-md'>
            <CarritoElementos />
            <CarritoTotal />
            <button className='bg-black text-white rounded-md'>Comprar</button>
        </div>
    ): (
        <h2 className='flex flex-col p-2 rounded-md shadow-md'>Carrito vacío</h2>
    )
}

export default Carrito;