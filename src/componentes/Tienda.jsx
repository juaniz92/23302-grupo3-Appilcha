<<<<<<< HEAD
import { useContext, useState } from "react";
import {Link} from 'react-router-dom';
import { data } from './Datos';
import Totalproductos from "./TotalProductos";
import Carrito from "./Carrito";
=======
import React, { useContext, useState } from 'react';
import { data } from './Datos';
import ReactPaginate from 'react-paginate';
import Totalproductos from './TotalProductos';
import Carrito from './Carrito';
>>>>>>> appilcha

function Tienda() {
  const [mostrarCarrito, setMostrarCarrito] = useState();
  const { datos, anadirProducto, carrito } = useContext(data);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6; // Número de productos a mostrar por página

<<<<<<< HEAD
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  const toggleCarrito = () => {
    setMostrarCarrito(!mostrarCarrito);
  };

  /*const [datos, setDatos] =useState([])
    //const [pagina, setPagina] =useState(1)
=======
  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };
>>>>>>> appilcha

  const paginatedData = datos.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

<<<<<<< HEAD
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
    }*/

    const { datos, anadirProducto, carrito } = useContext(data);

    return (
      <div className="flex flex-col">
        <div className="relative flex flex-col self-end">
          <button className="flex justify-end text-3xl" onClick={toggleCarrito}>🛒 {carrito.length > 0 ? <Totalproductos /> : null}</button>
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
=======
  const flagCarrito = () => {
    setMostrarCarrito(!mostrarCarrito);
  };

  return (
    <div className="d-flex flex-column">
      <div className="relative flex flex-col self-end">
        {/* Renderizamos la cantidad de productos en caso de que no sea 0 */}
        <button className="flex justify-end text-3xl" onClick={flagCarrito}>
          🛒 {carrito.length > 0 ? <Totalproductos /> : null}
        </button>
      </div>
      {/* Renderizamos el carrito */}
      <div>
        {mostrarCarrito && (
          <div className="">
            <Carrito />
          </div>
        )}
      </div>

      {/* Renderizamos los productos paginados */}
      <div className="row">
        {paginatedData.map((item) => (
          <div key={item.id} className="col-12 col-md-6 col-lg-4 p-4">
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

      {/* Componente de paginación */}
      <ReactPaginate
        previousLabel={'< Anterior'}
        nextLabel={'Siguiente >'}
        breakLabel={'...'}
        pageCount={Math.ceil(datos.length / itemsPerPage)} // Número total de páginas
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={'pagination flex justify-center p-4 text-3xl'}
        activeClassName={'active'}
        previousClassName={'pagination-previous px-3 hover:underline'}
        nextClassName={'pagination-next px-3 hover:underline'}
        breakClassName={'pagination-break px-3 hover:underline'}
        pageClassName={'pagination-page px-3 hover:underline'}
        disabledClassName={'pagination-disabled px- hover:underline'}
      />
>>>>>>> appilcha
    </div>
  );
}

export default Tienda;