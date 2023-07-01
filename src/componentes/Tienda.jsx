import { useContext, useState } from "react";
import {Link} from 'react-router-dom';
import { data } from './Datos';
import Totalproductos from "./TotalProductos";
import Carrito from "./Carrito";

function Tienda() {

  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  const flagCarrito = () => {
    setMostrarCarrito(!mostrarCarrito);
  };

    /*const btnAnterior = (e)=>{
        if(pagina > 1){
            setPagina(pagina-1)
            cargarProductos();
        }
    }
    
    const btnSiguiente = (e)=>{
        if(pagina < 500){
            setPagina(pagina+1)
            cargarProductos();
        }
    }*/

    const { datos, anadirProducto, carrito } = useContext(data);

    return (
      <div className="flex flex-col">
        <div className="relative flex flex-col self-end">
          <button className="flex justify-end text-3xl" onClick={flagCarrito}>🛒 {carrito.length > 0 ? <Totalproductos /> : null}</button>
        </div>
        <div>  
          <div>
            {mostrarCarrito &&
            <div className="flex absolute end-48 bg-white border rounded-md shadow-md">
            <Carrito />
          </div>}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-10 px-5">
          { datos.map((item) => (
                <div  key={item.id} className="grid grid-cols-3 border-2">
                  <div className="h-full border-2">
                      <img src={item.image} className="h-48 w-48"></img>
                  </div>
                      
                  <div className="grid col-span-2">
                    <div>
                      <h3><strong>{item.title}</strong></h3>
                      <h4>Detalles:</h4>
                      <p>{item.description}</p>
                    </div>  

                    <div className="flex flex-row justify-around self-end">
                        <span className="ml-10 m-5 text-3xl">${item.price}</span>
                        <button onClick={()=> anadirProducto(item)} className="bg-black text-white rounded-md text-2 m-5 ml-10 px-8" type="submit"><strong>Añadir al carrito</strong></button> 
                    </div>
                      
                  </div>
                </div>
          ))}
        </div>
          
          {/*<div className="paginacion">
              <button onClick={btnAnterior}>Anterior</button>
              <button onClick={btnSiguiente} id="btnSiguiente">Siguiente</button>
          </div>*/}
    </div>
    );
  }
  
  export default Tienda;