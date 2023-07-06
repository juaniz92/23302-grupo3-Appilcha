import {Link} from 'react-router-dom';

export default function Footer() {
    
    const fechaActual = new Date();
    
    return(

            <footer className="p-4 mt-4 text-center">

            <ul className='row g-0 text-center'>
                <li className=' col-md-3 col-12 my-2 fw-bold'><a href="/">Inicio</a></li>
                <li className='col-md-3 col-12 my-2 fw-bold'><a href="/Tienda">Productos</a></li>
                <li className='col-md-3 col-12 my-2 fw-bold'><a href="/Preguntas-frecuentes">Preguntas Frecuentes</a></li>
                <li className='col-md-3 col-12 my-2 fw-bold'><a href="/#Contacto">Contacto</a></li>
            </ul>
                
                
            <div className="d-flex justify-content-center align-items-center mt-4">
                <a href="/">
                    <img alt="Icono Appilcha" src="./icono-fav.svg" width={75} className="svg-icon" />
                </a>
            </div>
            

                <p className="mt-4">Appilcha Tienda de Ropa - Todos los Derechos Reservados &copy; {fechaActual.getFullYear()}</p>

            </footer>
    );
}

// function Columna({ title}) {
    
//     return(

//             <div className="text-center [&:not(:nth-child(3))]:border-r-4 border-solid border-white">
//                 <div className="flex justify-center">

//                     <h2 className="color-footer font-black text-xl">{title}</h2>

//                 </div>
//                 <ol className="leading-8 mt-4 text-sm ">

//                     <hr className="w-3/4 mr-auto ml-auto"/>
//                     <li>Lorem ipsum dolor sit amet.</li>
//                     <li>Lorem ipsum dolor sit amet.</li>
//                     <li>Lorem ipsum dolor sit amet.</li>

//                 </ol>

//             </div>
//     );