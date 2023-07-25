import { useContext } from 'react';
import { data } from '../Datos';
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
                <div className='row g-0'> 
                <Link to="/Compra" role='button' className='btn btn-dark text-center rounded fw-bold p-1 col col-md-6 mx-auto'>Comprar</Link>
                </div>

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