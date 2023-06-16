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
        <div className="grid grid-cols-2 gap-4 mt-10 px-5">
          { datos.map((item) => (
                <div  key={item.id} className="grid grid-cols-3 border-2">
                  <div className="relative h-full border-2">
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
                        <button className="bg-black text-white rounded-md text-2 m-5 ml-10 px-8" type="submit"><strong>COMPRAR</strong></button> 
                    </div>
                      
                  </div>
                </div>


                /*<div key={item.id} className="pelicula">
                <img className="poster" src={item.image} ></img>
                <h3 className="titulo">{item.title}</h3>
                <p>{item.description}</p>
                </div>*/
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