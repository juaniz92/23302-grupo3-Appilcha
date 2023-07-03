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
      <div className="d-flex flex-column">
          <div className="relative flex flex-col self-end">
            <button className="flex justify-end text-3xl" onClick={flagCarrito}>🛒 {carrito.length > 0 ? <Totalproductos /> : null}</button>
          </div> 
          <div>
            {mostrarCarrito &&
            <div className="">
            <Carrito />
            </div>}
          </div>

        <div className="row">
          { datos.map((item) => (
                <div  key={item.id} className="col-12 col-md-6 col-lg-4 p-4">
                  <div className="my-2">
                      <img src={item.image} className="img-productos-tienda mx-auto d-block"></img>
                  </div>
                      
                    <div>
                      <h3 className="h3 my-3"><strong>{item.title}</strong></h3>
                      <h4 className="h4 my-3">Detalles:</h4>
                      <p>{item.description}</p>
                    </div>  
                    
                    <div className="row">
                        <span className="col-12 fs-2 text-end">${item.price}</span>
                        <button onClick={()=> anadirProducto(item)} className="col-12 p-2 btn-comprar" type="submit">Añadir al carrito</button> 
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