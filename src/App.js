import './App.css';
import {Routes, Route} from 'react-router-dom';
import Inicio from './componentes/Inicio';
import Registro from './componentes/Registro';
import Ingresar from './componentes/Ingresar';
import Tienda from './componentes/Tienda';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import SignIn from './componentes/Auth/SignIn';

import Registrarse from './componentes/Auth/Registrarse';
import Carrito from './componentes/Carrito';
import DataProvider from './componentes/Datos';

function App() {
  return (
      <div className='container'>
        <DataProvider>
          <Header />
          <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/Registrarse' element={<Registrarse />} />
            <Route path='/Ingresar' element={<Ingresar />} />
            <Route path='/Tienda' element={<Tienda />} />
            <Route path='/Carrito' element={<Carrito />} />
          </Routes>
          <Footer />
        </DataProvider>;
      </div>
  );

  
}

export default App;
