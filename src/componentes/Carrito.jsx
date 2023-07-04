import { useContext } from 'react';
import { data } from './Datos';
import CarritoElementos from "./CarritoElementos";
import CarritoTotal from "./CarritoTotal";
import {Link} from 'react-router-dom';

const Carrito = () => {
    const { carrito } = useContext(data);

    //Renderizamos el contenido del carrito o si esta vacío
    return carrito.length > 0 ? (
        <div className='flex flex-col p-2 rounded-md shadow-md'>
            <CarritoElementos />
            <CarritoTotal />
            <button className='bg-black text-white rounded-md'><Link to="/Compra">Comprar</Link></button>
        </div>
    ): (
        <h2 className='flex flex-col p-2 rounded-md shadow-md'>Carrito vacío</h2>
    )
}

export default Carrito;