import axios from "axios";
import { useEffect, useState, createContext } from "react";

export const data = createContext();

<<<<<<< HEAD
const DataProvider = ({ children }) => {

    const [datos, setDatos] =useState([]);
    const [carrito, setCarrito] =useState([])

    useEffect(() => {
        cargarProductos()
    }, [])

    async function cargarProductos() {
        const respuesta = await axios.get(`https://fakestoreapi.com/products`);
        setDatos(respuesta.data);
=======
//Proveedor de información, para repartir por los componentes
const DataProvider = ({ children }) => {

    //Almacenamos la información de los productos
    const [datos, setDatos] =useState([]);

    //Almacenamos los productos que selecciona el usuario
    const [carrito, setCarrito] =useState([])

    //Ejecutamos la carga de productos
    useEffect(async () => {
        //Petición de productos a la API
        const respuesta = await axios.get(`https://fakestoreapi.com/products`);
        setDatos(respuesta.data);
        //Agregar propiedad Cantidad a cada objeto
>>>>>>> appilcha
        const agregarCantidad = respuesta.data.map(item => {
            return {
              ...item,
              cantidad: 1
            };
          });
<<<<<<< HEAD
        console.log(agregarCantidad);
        setDatos(agregarCantidad);
      }

      const anadirProducto = (producto) => {
        const productoRepetido = carrito.find((item) => item.id === producto.id);
  
=======
        setDatos(agregarCantidad);
    }, [])

      //Añadimos un nuevo producto y también para sumar
      const anadirProducto = (producto) => {
        //Buscamos si el producto existe dentro del carrito
        const productoRepetido = carrito.find((item) => item.id === producto.id);
  
        //Si el producto buscado esta en el carrito q sume uno en la prop cantidad sino agrega un nuevo producto
>>>>>>> appilcha
        if(productoRepetido) {
          setCarrito(carrito.map((item)=> item.id === producto.id ? {...producto, cantidad: productoRepetido.cantidad + 1} : item))
        }else {
          setCarrito([...carrito, producto])
        }
      }

<<<<<<< HEAD
=======
      //Retornamos valores del proveedor
>>>>>>> appilcha
    return <data.Provider value={{ datos, carrito, setCarrito, setCarrito, anadirProducto }}>{children}</data.Provider>
};

export default DataProvider;