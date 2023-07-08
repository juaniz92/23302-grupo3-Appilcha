import { useContext } from 'react';
import { data } from './Datos';
import CarritoElementos from "./CarritoElementos";
import CarritoTotal from "./CarritoTotal";
<<<<<<< HEAD
=======
import {Link} from 'react-router-dom';
>>>>>>> appilcha

const Carrito = () => {
    const { carrito } = useContext(data);

<<<<<<< HEAD
=======
    //Renderizamos el contenido del carrito o si esta vacío
>>>>>>> appilcha
    return carrito.length > 0 ? (
        <div className='flex flex-col p-2 rounded-md shadow-md'>
            <CarritoElementos />
            <CarritoTotal />
<<<<<<< HEAD
            <button className='bg-black text-white rounded-md'>Comprar</button>
=======
            <button className='bg-black text-white rounded-md'><Link to="/Compra">Comprar</Link></button>
>>>>>>> appilcha
        </div>
    ): (
        <h2 className='flex flex-col p-2 rounded-md shadow-md'>Carrito vacío</h2>
    )
}

export default Carrito;