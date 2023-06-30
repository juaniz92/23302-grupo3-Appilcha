import {Link} from 'react-router-dom';

export default function Footer() {
    
    const fechaActual = new Date();
    
    return(

            <footer className="flex flex-wrap pt-4 mb-2 justify-center" id="rodapie">

                <Columna title={'Métodos de pago'}/>
                <Columna title={'Política y privacidad'}/>
                <Columna title={'Contacto'}/>
                <a href="#" className="w-[25%]">

                    <img alt="Logo e-commerce" src="./g" className="h-[9rem] ml-20"/>

                </a>
                <p className="mt-4">&copy; {fechaActual.getFullYear()}</p>

            </footer>
    );
}

function Columna({ title}) {
    
    return(

            <div className="text-center [&:not(:nth-child(3))]:border-r-4 border-solid border-white">
                <div className="flex justify-center">

                    <h2 className="color-footer font-black text-xl">{title}</h2>

                </div>
                <ol className="leading-8 mt-4 text-sm ">

                    <hr className="w-3/4 mr-auto ml-auto"/>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>

                </ol>

            </div>
    );
}