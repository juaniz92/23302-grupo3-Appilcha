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
import html2canvas from 'html2canvas';
const MySwal = withReactContent(Swal);


const Compra = ({user}) => {
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

    //Html2Canvas - funcion que descarga la imagen con los datos de la compra

    const descarga = () => {
        html2canvas(document.getElementById('exportar'),{}).then(function(canvas) {
          
          let img = canvas.toDataURL("image/jpeg", 0.8);
          let link = document.createElement("a");
          link.download = "ticket-compra.jpg";
          link.href = img;
          link.click();
        }); 
      }

    //Creacion del boton de descarga: cambia el textContent de Total a Pagar y retorna el boton descargar factura

    const btnDescarga = ()=>{
        const totalPagar = document.getElementById("totalPagar");
        totalPagar.textContent = "Pagado:"
        const contenedorBotones = document.getElementById("contenedorBotones");

        const btn = document.createElement("button");
        btn.textContent = "Descargar factura";
        btn.classList.add("btn", "btn-success");
        btn.onclick = descarga;
        contenedorBotones.appendChild(btn);

        return btn;
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
            telefono: "11552664455",
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

        // se añade ocultar el estilo para ocultar el boton pagar y se llama al boton de descarga de la factura
        e.target.style.display = "none";
        btnDescarga();
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
        <div className='mt-3'>
            <div id='exportar' className=' p-2'>
                <img src="./appilcha.png" className='mx-auto mb-3' width={150} alt="" />
                <h2 className='h2'>Datos comprador:</h2>
                <ul className=''>
                    <li><span className='fw-bold'>Nombre:</span> {orden.compra.nombre}</li>
                    <li><span className='fw-bold'>Domicilio:</span> {orden.compra.domicilio} (CP {orden.compra.cp}), {orden.compra.barrio} - {orden.compra.ciudad}, {orden.compra.provincia}</li>
                    <li><span className='fw-bold'>Teléfono:</span> {orden.compra.telefono}</li>
                    {/* <li><span className='fw-bold'>Email:</span> {user.email}</li> */}
                    <li><span className='fw-bold'>Rol:</span> {user.rol}</li>
                </ul>
                <h3 className='h3 my-3'>Productos</h3>
                <CarritoElementos />
                <CarritoTotal />
            </div>
            <h3 className='h4'>Forma de retiro:</h3>
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
            
            <h3 className='h4'>Forma de pago:</h3>
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
            <div id='contenedorBotones'>
            <button id='btnPagar' className='btn btn-primary mt-3' onClick={pagar}>Pagar</button>
            </div>
        </div>
    )
}

export default Compra;