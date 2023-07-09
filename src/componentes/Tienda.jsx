import React, { useContext, useState } from 'react';
import { data } from './Datos';
import ReactPaginate from 'react-paginate';
import Totalproductos from './TotalProductos';
import Carrito from './Carrito';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'


function Tienda({user}) {
  const [mostrarCarrito, setMostrarCarrito] = useState();
  const { datos, anadirProducto, carrito } = useContext(data);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6; // Número de productos a mostrar por página

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const paginatedData = datos.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

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
            <Carrito user={user}  />
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
        previousLabel={<FontAwesomeIcon icon={faAngleLeft} style={{color: "#000000",}} />}
        nextLabel={<FontAwesomeIcon icon={faAngleRight} style={{color: "#000000",}} />}
        breakLabel={'...'}
        pageCount={Math.ceil(datos.length / itemsPerPage)} // Número total de páginas
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={'pagination d-flex justify-center fs-4 p-4 fw-bold'}
        activeClassName={'active'}
        previousClassName={'pagination-previous px-3 hover:underline'}
        nextClassName={'pagination-next px-3 hover:underline'}
        breakClassName={'pagination-break px-3 hover:underline'}
        pageClassName={'pagination-page px-3 hover:underline'}
        disabledClassName={'pagination-disabled px-3 hover:underline'}
      />
    </div>
  );
}

export default Tienda;