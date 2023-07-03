import { useContext } from 'react';
import { data } from './Datos';

const CarritoTotal = () => {
    const { carrito } = useContext(data);

    const total = carrito.reduce((acc,el) => acc + el.price * el.cantidad, 0);
    return <div className='pb-3'>
        <h3><span className='fw-bold'>Total a pagar:</span>  $ {parseFloat(total.toFixed(2))}</h3>
    </div>
}

export default CarritoTotal;