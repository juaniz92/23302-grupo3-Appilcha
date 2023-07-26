import { useContext } from "react";
import { data } from '../Datos';

//Traemos el producto de CarritoElementos
const CarritoProductoContar = ({ producto, processingPayment }) => {
    const { carrito, setCarrito, anadirProducto } = useContext(data);

    //Función para poder restar cantidades de productos
    const restar = () => {
        const productoRepetido = carrito.find((item) => item.id === producto.id);

        productoRepetido.cantidad !== 1 && setCarrito(carrito.map((item)=> item.id === producto.id ? {...producto, cantidad: productoRepetido.cantidad - 1} : item))
    }

    //Renderizamos cantidad, y aumento y decremento de la misma
    return (
        <div className='col my-auto'>
            {processingPayment ? (
                <div className="d-flex justify-content-center">
                    <p className='px-1 fw-bold my-auto'>{producto.cantidad}</p>
                </div>
              ) : (
            <div className="d-flex justify-content-center">
                <p className='px-2 cursor-pointer my-auto' onClick={restar} >-</p>
                <p className='px-1 fw-bold my-auto'>{producto.cantidad}</p>
                <p className='px-2 cursor-pointer my-auto' onClick={() => anadirProducto(producto)} >+</p>
            </div>
              )}
        </div>
    );
};

export default CarritoProductoContar;