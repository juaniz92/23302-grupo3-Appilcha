import axios from "axios";
import { useEffect, useState } from "react";

function Tienda() {

  const [datos, setDatos] =useState([])
    const [pagina, setPagina] =useState(1)

    useEffect(() => {
        cargarProductos()
    }, [])

    const btnAnterior = (e)=>{
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
    }

    async function cargarProductos() {
      const respuesta = await axios.get(`https://fakestoreapi.com/products`);
      setDatos(respuesta.data);
      console.log(respuesta.data);
    }    

    return (
      <div>
        <div className="contenedor" id="contenedor">
          { datos.map((item) => (
                <div key={item.id} className="pelicula">
                <img className="poster" src={item.image} ></img>
                <h3 className="titulo">{item.title}</h3>
                <p>{item.description}</p>
                </div>
          ))}
        </div>
          
          <div className="paginacion">
              <button onClick={btnAnterior}>Anterior</button>
              <button onClick={btnSiguiente} id="btnSiguiente">Siguiente</button>
          </div>
    </div>
    );
  }
  
  export default Tienda;