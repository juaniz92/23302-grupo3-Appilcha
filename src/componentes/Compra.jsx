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

    //Obtener número de tarjeta
    const [comprobante, setComprobante] = useState('');

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
          link.download = "factura-compra.jpg";
          link.href = img;
          link.click();
          
        
            setTimeout(()=>{
                navigate('/');
                window.location.reload();
            }, 5000);
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

      //Fecha de compra
      const getCurrentDate = () => {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');
        return `${day}-${month}-${year}`;
      };

    const orden = {
        compra: {
            nombre: user.nombre,
            email: user.email,
            telefono: user.telefono,
            domicilio: user.domicilio,
            barrio: user.barrio,
            ciudad: user.ciudad,
            provincia: user.provincia,
            postal: user.postal,
            fechaCompra: getCurrentDate(),
            items: carrito,
            total: obtenerTotal(),
            formaRetiro: formaRetiro,
            formaPago: formaPago,
            numeroTarjeta: numeroTarjeta,
            comprobante: comprobante
        },
        
    }

    //Función del botón Comprar
    const pagar = async (e) => {
        if (formaRetiro === '' || formaPago === '') {
            Swal.fire({
              position: 'center-center',
              icon: 'warning',
              title: 'Seleccione una forma de retiro y una forma de pago',
              showConfirmButton: false,
              timer: 1500
            });
            return;
          }
        
          if (formaPago === 'tarjeta' && numeroTarjeta === '') {
            Swal.fire({
              position: 'center-center',
              icon: 'warning',
              title: 'Ingrese número de tarjeta!!',
              showConfirmButton: false,
              timer: 1500
            });
            return;
          }

          if (formaPago === 'transferencia' && !comprobante) {
            Swal.fire({
              position: 'center-center',
              icon: 'warning',
              title: 'Adjunte el comprobante de pago',
              showConfirmButton: false,
              timer: 1500
            });
            return;
          }

          await addDoc(ordenesCollection, orden.compra);
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
        formaPago === "tarjeta" && setComprobante("");
        formaPago === "transferencia" && setNumeroTarjeta("");
      };
    
    //Obtener número de tarjeta
    const manejarNumeroTarjeta = (e) => {
    setNumeroTarjeta(e.target.value);
    };

    //Obtener comprobante
    const manejarComprobante = (e) => {
        setComprobante(e.target.value);

    };

    return (
        <div className='mt-3'>
            <div id='exportar' className=' p-2'>
                <img src="./appilcha.png" className='mx-auto mb-3' width={150} alt="" />
                <h2 className='h2'>Datos comprador:</h2>
                <ul className=''>
                    <li><span className='fw-bold'>Nombre:</span> {user.apellido}, {user.nombre}</li>
                    <li><span className='fw-bold'>Domicilio:</span> {user.domicilio} (CP {user.postal}), {orden.compra.barrio} - {user.ciudad}, {orden.compra.provincia}</li>
                    <li><span className='fw-bold'>Teléfono:</span> {orden.compra.telefono}</li>
                </ul>

                <p className='h4 my-3'>Fecha: {getCurrentDate()}</p>
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
                        label="Transferencia"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                        value="transferencia"
                        checked={formaPago === 'transferencia'}
                        onChange={seleccionarFormaPago}
                    />
                    {formaPago == "transferencia" &&
                    <div className="">
                        <p type="text">CBU 0001145663456556</p>
                        <p type="text">Adjuntar comprobante</p><input className='pb-2' onChange={manejarComprobante} value={comprobante} type="file" />
                    </div>}
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
                    {formaPago == "tarjeta" &&
                    <div className="">
                        <input value={numeroTarjeta} onChange={manejarNumeroTarjeta} type="text" placeholder="Ingrese el número de tarjeta"/>
                    </div>}
                    </div>
                ))}
                
            </Form>
            <div id='contenedorBotones'>
            <button id='btnPagar' className='btn btn-primary mt-3' onClick={pagar}>Pagar</button>
            </div>
        </div>
    )
}

export default Compra;