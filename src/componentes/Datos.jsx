import axios from "axios";
import { useEffect, useState, createContext } from "react";
import { collection, getDocs} from 'firebase/firestore';
import { db } from '../firebaseConfig/firebase';

export const data = createContext();

//Proveedor de información, para repartir por los componentes
const DataProvider = ({ children }) => {

    //Almacenamos la información de los productos
    const [datos, setDatos] =useState([]);

    //Almacenamos los productos que selecciona el usuario
    const [carrito, setCarrito] =useState([])

    // Hooks de mostrar
    const productosCollection = collection(db, "Productos");

    //const [productos, setProductos] = useState([]);

    //Ejecutamos la carga de productos
    useEffect(async () => {
        //Petición de productos a la API
        // Realizar solicitudes a ambas rutas por separado
        const [womenResponse, menResponse] = await Promise.all([
          axios.get("https://fakestoreapi.com/products/category/women's%20clothing"),
          axios.get("https://fakestoreapi.com/products/category/men's%20clothing")
        ]);

        // Obtener los datos de las respuestas
        const womenData = womenResponse.data;
        const menData = menResponse.data;

        const querySnapshot = await getDocs(collection(db, "Productos"));
        const productosData = querySnapshot.docs.map((doc) => ({
          id: doc.id, // Agregar el ID del documento
          ...doc.data() // Resto de los datos del documento
        }));
        
        const productos = productosData.map((doc) => ({
          id: doc.id, // Incluir el ID del documento en el objeto de producto
          image: doc.Imagen,
          title: doc.Nombre,
          description: doc.Descripcion,
          price: doc.Precio,
        }));

        // Combinar los resultados en una sola lista
        const respuesta = [...womenData, ...menData, ...productos];

        setDatos(respuesta);
        //Agregar propiedad Cantidad a cada objeto
        const agregarCantidad = respuesta.map(item => {
            return {
              ...item,
              cantidad: 1
            };
          });
        setDatos(agregarCantidad);
    }, [])

    //Ejecutamos la carga de productos
    /*useEffect(async () => {
        //Petición de productos a la API
        const respuesta = await axios.get(`https://fakestoreapi.com/products/category/women's%20clothing`);
        setDatos(respuesta.data);
        //Agregar propiedad Cantidad a cada objeto
        const agregarCantidad = respuesta.data.map(item => {
            return {
              ...item,
              cantidad: 1
            };
          });
        setDatos(agregarCantidad);
    }, [])*/

      //Añadimos un nuevo producto y también para sumar
      const anadirProducto = (producto) => {
        //Buscamos si el producto existe dentro del carrito
        const productoRepetido = carrito.find((item) => item.id === producto.id);
  
        //Si el producto buscado esta en el carrito q sume uno en la prop cantidad sino agrega un nuevo producto
        if(productoRepetido) {
          setCarrito(carrito.map((item)=> item.id === producto.id ? {...producto, cantidad: productoRepetido.cantidad + 1} : item))
        }else {
          setCarrito([...carrito, producto])
        }
      }

      //Retornamos valores del proveedor
    return <data.Provider value={{ datos, carrito, setCarrito, anadirProducto }}>{children}</data.Provider>
};

export default DataProvider;