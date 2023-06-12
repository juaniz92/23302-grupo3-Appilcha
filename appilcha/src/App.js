import './App.css';
import {Routes, Route} from 'react-router-dom';
import Inicio from './componentes/Inicio';
import Nosotros from './componentes/Nosotros';
import Contacto from './componentes/Contacto';
import Registro from './componentes/Registro';
import Ingresar from './componentes/Ingresar';
import Tienda from './componentes/Tienda';
import Header from './componentes/Header';
import Footer from './componentes/Footer';

function App() {
  return (
    <html lang="en" className='h-screen'>
      <body className='h-screen'>
        <div className='flex flex-col h-full justify-between'>
          <Header />;
          <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/Nosotros' element={<Nosotros />} />
            <Route path='/Contacto' element={<Contacto />} />
            <Route path='/Registro' element={<Registro />} />
            <Route path='/Ingresar' element={<Ingresar />} />
            <Route path='/Tienda' element={<Tienda />} />
          </Routes>
          <Footer />;
        </div>
      </body>
    </html>
  );

  
}

export default App;
