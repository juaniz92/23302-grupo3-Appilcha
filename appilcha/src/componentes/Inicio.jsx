import Carousel from './Carousel';
import Nosotros from './Nosotros';
import Contacto from './Contacto';
import Card from './Card';

function Inicio() {
    return (
      <div>
        <Carousel />
        <h2 className=' flex justify-center text-5xl pt-36'>Productos del mes</h2>
        <Card />
        <Nosotros />
        <Contacto />
      </div>
    );
  }
  
  export default Inicio;