import { useContext } from 'react';
import { data } from './Datos';
import CarritoElementos from "./CarritoElementos";
import CarritoTotal from "./CarritoTotal";
import Form from 'react-bootstrap/Form';

const Compra = () => {
    const { carrito } = useContext(data);

    return (
        <div className=''>
            <CarritoElementos />
            <CarritoTotal />
            <h2>Forma de retiro:</h2>
            <Form>
                {['radio'].map((type) => (
                    <div key={`inline-${type}`} className="flex flex-col mb-3">
                    <Form.Check
                        inline
                        label="En el local"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                    />
                    <Form.Check
                        inline
                        label="Envío a domicilio"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                    />
                    </div>
                ))}
            </Form>
            
            <h2>Forma de pago:</h2>
            <Form>
                {['radio'].map((type) => (
                    <div key={`inline-${type}`} className="flex flex-col mb-3">
                    <Form.Check
                        inline
                        label="Efectivo"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                    />
                    <Form.Check
                        inline
                        label="Tarjeta de crédito"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                    />
                    </div>
                ))}
            </Form>
            <button>Pagar</button>
        </div>
    )
}

export default Compra;