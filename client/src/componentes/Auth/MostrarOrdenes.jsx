import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebaseConfig/firebase';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import 'tailwindcss/tailwind.css';

const MySwal = withReactContent(Swal);

const MostrarOrdenes = () => {
  // Configuración de los hooks de mostrar
  const OrdenesCollection = collection(db, 'Ordenes');

  const [ordenes, setOrdenes] = useState([]);

  // Asincronismo
  const getOrdenes = async () => {
    const data = await getDocs(OrdenesCollection);
    console.log(data.docs);

    setOrdenes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getOrdenes();
  }, []);

  const [expandedItems, setExpandedItems] = useState([]);

  const handleExpand = (orderId) => {
    if (expandedItems.includes(orderId)) {
      setExpandedItems(expandedItems.filter((id) => id !== orderId));
    } else {
      setExpandedItems([...expandedItems, orderId]);
    }
  };

  // Declaración de la función delete para eliminar registros
  console.log(ordenes);

  // Mostrar datos en la estructura
  return (
    <div className="container mx-auto p-4">
      <div className="text-center mb-4">
        <h1 className="text-2xl font-bold uppercase">Órdenes</h1>
      </div>
      <Table striped bordered hover responsive="xl" variant="dark">
        <tbody className="bg-primary text-light">
          {ordenes.map((ord) => (
            <React.Fragment key={ord.id}>
              <tr>
                <th></th>
                <th>Fecha</th>
                <th>Nombre</th>
                <th>Domicilio</th>
                <th>Barrio</th>
                <th>Provincia</th>
                <th>Ciudad</th>
                <th>CP</th>
                <th>Teléfono</th>
                <th>Forma de pago</th>
                <th>Forma de retiro</th>
                <th>Número de tarjeta</th>
                <th>Comprobante</th>
                <th>Total compra</th>
                <th>Email</th>
              </tr>
              <tr onClick={() => handleExpand(ord.id)} className="cursor-pointer">
                <td className="text-4xl text-center h-auto">
                  {expandedItems.includes(ord.id) ? '-' : '+'}
                </td>
                <td>{ord.fechaCompra || ''}</td>
                <td>{ord.nombre || ''}</td>
                <td>{ord.domicilio || ''}</td>
                <td>{ord.barrio || ''}</td>
                <td>{ord.provincia || ''}</td>
                <td>{ord.ciudad || ''}</td>
                <td>{ord.postal || ''}</td>
                <td>{ord.telefono || ''}</td>
                <td>{ord.formaPago || ''}</td>
                <td>{ord.formaRetiro || ''}</td>
                <td>{ord.numeroTarjeta || ''}</td>
                <td>{ord.comprobante || ''}</td>
                <td>{ord.total || ''}</td>
                <td>{ord.email || ''}</td>
              </tr>
              {expandedItems.includes(ord.id) && (
                <React.Fragment>
                  <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Total por producto</th>
                  </tr>
                  {ord.items.map((item) => (
                    <tr key={item.id}>
                      <td>{item.title || ''}</td>
                      <td>{item.price || ''}</td>
                      <td>{item.cantidad || ''}</td>
                      <td>{(item.cantidad || '') * (item.price || '')}</td>
                    </tr>
                  ))}
                </React.Fragment>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MostrarOrdenes;
