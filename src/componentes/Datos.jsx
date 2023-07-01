import axios from "axios";
import { useEffect, useState, createContext } from "react";

export const data = createContext();

const DataProvider = ({ children }) => {

    const [datos, setDatos] =useState([]);
    const [carrito, setCarrito] =useState([])

    useEffect(() => {
        cargarProductos()
    }, [])

    async function cargarProductos() {
        const respuesta = await axios.get(`https://fakestoreapi.com/products`);
        setDatos(respuesta.data);
        const agregarCantidad = respuesta.data.map(item => {
            return {
              ...item,
              cantidad: 1
            };
          });
        console.log(agregarCantidad);
        setDatos(agregarCantidad);
      }

      const anadirProducto = (producto) => {
        const productoRepetido = carrito.find((item) => item.id === producto.id);
  
        if(productoRepetido) {
          setCarrito(carrito.map((item)=> item.id === producto.id ? {...producto, cantidad: productoRepetido.cantidad + 1} : item))
        }else {
          setCarrito([...carrito, producto])
        }
      }

    return <data.Provider value={{ datos, carrito, setCarrito, setCarrito, anadirProducto }}>{children}</data.Provider>
};

export default DataProvider;