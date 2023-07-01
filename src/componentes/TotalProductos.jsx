import { useContext } from 'react';
import { data } from './Datos';

const Totalproductos = () => {
    const { carrito } = useContext(data);

    const productosCantidad = carrito.reduce((acc, el) => acc + el.cantidad, 0);
    return <span className='text-lg absolute bg-black p-2.5 text-white rounded-full top-1/2 right-0 w-25 h-25 flex justify-center items-center'>{productosCantidad}</span>;
};

export default Totalproductos;