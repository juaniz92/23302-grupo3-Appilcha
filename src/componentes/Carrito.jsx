import { useContext } from 'react';
import { data } from './Datos';
import CarritoElementos from "./CarritoElementos";
import CarritoTotal from "./CarritoTotal";
import {Link} from 'react-router-dom';

const Carrito = ({user}) => {
    const { carrito } = useContext(data);
    //Renderizamos el contenido del carrito o si esta vacío
    return carrito.length > 0 ? (
        <div className='flex flex-col p-2 rounded-md shadow-md'>
            <CarritoElementos />
            <CarritoTotal />
            {user ? (
                <button className='bg-black text-white rounded-md'>
                <Link to="/Compra">Comprar</Link>
                </button>
            ) : (
                <p className='text-center'>
                <Link to="/login">Iniciar sesión para realizar la compra</Link>
                </p>
            )}
            </div>
        ) : (
        <h2 className='flex flex-col p-2 rounded-md shadow-md'>Carrito vacío</h2>
    )
}

export default Carrito;