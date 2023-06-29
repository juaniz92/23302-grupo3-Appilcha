import Carousel from './Carousel';
import Nosotros from './Nosotros';
import Contacto from './Contacto';
import Card from './Card';

function Inicio() {
    return (
      <div>
        <Carousel />
        <Card />
        <Nosotros />
        <Contacto />
      </div>
    );
  }
  
  export default Inicio;