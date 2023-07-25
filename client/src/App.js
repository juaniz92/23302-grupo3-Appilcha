import './App.css';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Inicio from './componentes/Inicio';
import Tienda from './componentes/Tienda';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Editar from './componentes/Auth/Editar';
import Admin from './componentes/Auth/Admin';
import Mostrar from './componentes/Auth/Mostrar';
import MostrarOrdenes from './componentes/Auth/MostrarOrdenes';
import LogIn from './componentes/Auth/Login';
import Perfil from './componentes/Auth/Perfil';
import Registrarse from './componentes/Auth/Registrarse';
import Compra from './componentes/carrito/Compra';
import DataProvider from './componentes/Datos';
import Home from './componentes/Home';
import MostrarProductos from './componentes/Auth/MostrarProductos';
import CrearProductos from './componentes/Auth/CrearProductos';
import EditarProductos from './componentes/Auth/EditarProductos';
import firebaseApp from "./firebaseConfig/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);


function App() {
  const [user, setUser] = useState(null);


  async function getRol(uid) {
    const docuRef = doc(firestore, `Usuarios/${uid}`);
    const docuCifrada = await getDoc(docuRef);
    const infoFinal = docuCifrada.data();
    return infoFinal;
  }

  function setUserWithFirebase(usuarioFirebase) {
    getRol(usuarioFirebase.uid).then((userfire) => {
      const userData = {
        uid: usuarioFirebase.uid,
        email: usuarioFirebase.email,
        rol: userfire.rol,
        nombre: userfire.Nombre,
        apellido: userfire.Apellido,
        pais: userfire.Pais,
        ciudad: userfire.Ciudad,
        domicilio: userfire.Domicilio,
        postal: userfire.Postal,
        telefono: userfire.Telefono,
        barrio: userfire.Barrio,
        provincia: userfire.Provincia
      };


      setUser(userData);

      console.log("userData final", userData);
    });
  }

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      if (!user) {
        setUserWithFirebase(usuarioFirebase);
      }
    } else {
      setUser(null);
    }

  });

  return (
    <div className='container'>

      <DataProvider>

        <Header user={user} />
        
        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/' element={<Inicio />} />
          <Route path='/Registrarse' element={<Registrarse />} />
          <Route path='/Tienda' element={<Tienda />} />
          <Route path='/editarusuario/:id' element={<Editar />} />
          <Route path='/Perfil/:id' element={<Perfil />} />
          <Route path='/Admin' element={<Admin />} />
          <Route path='/Mostrar' element={<Mostrar />} />
          <Route path='/Compra' element={<Compra user={user} />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path='/MostrarProductos' element={<MostrarProductos />} />
          <Route path='/CrearProductos' element={<CrearProductos />} />
          <Route path='/EditarProductos/:id' element={<EditarProductos />} />
          <Route path='/MostrarOrdenes' element={<MostrarOrdenes />} />
        </Routes>
        <Footer />




      </DataProvider>
    </div>
  );


}

export default App;
