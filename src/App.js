import './App.css';
import {Routes, Route} from 'react-router-dom';
import Inicio from './componentes/Inicio';
import Ingresar from './componentes/Ingresar';
import Tienda from './componentes/Tienda';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Editar from './componentes/Auth/Editar';
import Admin from './componentes/Auth/Admin';
import Mostrar from './componentes/Auth/Mostrar';
import SignIn from './componentes/Auth/SignIn';

import Registrarse from './componentes/Auth/Registrarse';
import Compra from './componentes/Compra';
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
            <Route path='/Editar/:idUsuario' element={<Editar/>}/>
            <Route path='/Admin' element={<Admin />} />
            <Route path='/Mostrar' element={<Mostrar />} />
            <Route path='/Compra' element={<Compra />} />
          </Routes>
          <Footer />
        </DataProvider>
      </div>
  );

  
}

export default App;
