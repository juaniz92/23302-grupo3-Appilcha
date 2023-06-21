import {Link} from 'react-router-dom';

function Header() {

return (
    <div className="flex px-8 py-8 justify-evenly">
        <div className="flex items-center">
            <h2 className="text-4xl uppercase ml-1 font-medium">Appilcha</h2>
        </div>
        <nav className="flex justify-center">
            <ul className="flex">
                <li className="hover:bg-black hover:text-white hover:rounded-md px-2 py-1 mx-2 text-center uppercase font-medium"><Link to='/'>Inicio</Link></li>
                <li className="hover:bg-black hover:text-white hover:rounded-md px-2 py-1 mx-2 text-center uppercase font-medium"><a href='#Nosotros'>Nosotros</a></li>
                <li className="hover:bg-black hover:text-white hover:rounded-md px-2 py-1 mx-2 text-center uppercase font-medium"><Link to='/Tienda'>Tienda</Link></li>
                <li className="hover:bg-black hover:text-white hover:rounded-md px-2 py-1 mx-2 text-center uppercase font-medium"><a href='#Contacto'>Contacto</a></li>
                <li className="hover:bg-black hover:text-white hover:rounded-md px-2 py-1 mx-2 text-center uppercase font-medium"><Link to='/Ingresar'>ingresar</Link></li>
            </ul>
        </nav>
        
    </div>
)
}

export default Header