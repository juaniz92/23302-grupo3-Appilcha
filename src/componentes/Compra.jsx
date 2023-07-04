import { useContext, useState } from 'react';
import { data } from './Datos';
import {addDoc, collection, getFirestore} from "firebase/firestore";
import { db } from '../firebaseConfig/firebase';
import {useNavigate} from 'react-router-dom';
import CarritoElementos from "./CarritoElementos";
import CarritoTotal from "./CarritoTotal";
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);

const Compra = () => {
    const { carrito } = useContext(data);

    //Selecciona forma de pago
    const [formaPago, setFormaPago] = useState('');

    //Obtener número de tarjeta
    const [numeroTarjeta, setNumeroTarjeta] = useState('');

    //Forma de retiro
    const [formaRetiro, setFormaRetiro] = useState('');

    const navigate = useNavigate();
    //referenciar db
    const ordenesCollection = collection(db, 'Ordenes');

    //Alerta

    const alertCreacion = () => {
        Swal.fire({
            position: 'center-center',
            icon: 'success',
            title: 'Compra exitosa!!',
            showConfirmButton: false,
            timer: 1500
        })

    }

    //Total de la compra del carrito
    const obtenerTotal = () => {
        const total = carrito.reduce((acc, el) => acc + el.price * el.cantidad, 0);
        return parseFloat(total.toFixed(2));
      };

    const orden = {
        compra: {
            nombre: "Juan",
            email:"jiz@jiz.com",
            telefono: "115526644",
            domicilio: "asfer 123",
            cp: "1010",
            barrio: "San Telmo",
            ciudad: "CABA",
            provincia: "BSAS",
            items: carrito,
            total: obtenerTotal(),
            formaRetiro: formaRetiro,
            formaPago: formaPago,
            numeroTarjeta: numeroTarjeta
        },
        
    }

    //Función del botón Comprar
    const pagar = async (e) => {
        e.preventDefault();
        await addDoc(ordenesCollection, orden.compra)
        alertCreacion();
    }

    //Obtener la forma de retiro
    const seleccionarFormaRetiro = (e) => {
        setFormaRetiro(e.target.value);
      };

    //Obtener forma de pago y habilita el input para tarjeta
    const seleccionarFormaPago = (e) => {
        setFormaPago(e.target.value);
      };
    
    //Obtener número de tarjeta
    const manejarNumeroTarjeta = (e) => {
    setNumeroTarjeta(e.target.value);
    };

    return (
        <div className=''>
            <p>Datos comprador:</p>
            <p>Nombre: {orden.compra.nombre}</p>
            <p>Domicilio: {orden.compra.domicilio} (CP {orden.compra.cp}), {orden.compra.barrio} - {orden.compra.ciudad}, {orden.compra.provincia}</p>
            <p>Teléfono: {orden.compra.telefono}</p>

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
                        value="en-el-local"
                        checked={formaRetiro === 'en-el-local'}
                        onChange={seleccionarFormaRetiro}
                    />
                    <Form.Check
                        inline
                        label="Envío a domicilio"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                        value="envio-a-domicilio"
                        checked={formaRetiro === 'envio-a-domicilio'}
                        onChange={seleccionarFormaRetiro}
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
                        value="efectivo"
                        checked={formaPago === 'efectivo'}
                        onChange={seleccionarFormaPago}
                    />
                    <Form.Check
                        inline
                        label="Tarjeta"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                        value="tarjeta"
                        checked={formaPago === 'tarjeta'}
                        onChange={seleccionarFormaPago}
                    />
                    </div>
                ))}
                {formaPago == "tarjeta" &&
                <div className="">
                    <input value={numeroTarjeta} onChange={manejarNumeroTarjeta} type="text" placeholder="Ingrese el número de tarjeta"/>
                </div>}
            </Form>
            <button onClick={pagar}>Pagar</button>
        </div>
    )
}

export default Compra;