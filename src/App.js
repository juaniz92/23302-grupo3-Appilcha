import './App.css';
import React, {useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import Inicio from './componentes/Inicio';
import Ingresar from './componentes/Ingresar';
import Tienda from './componentes/Tienda';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Editar from './componentes/Auth/Editar';
import Admin from './componentes/Auth/Admin';
import Mostrar from './componentes/Auth/Mostrar';
import LogIn from './componentes/Auth/Login';
import Registrarse from './componentes/Auth/Registrarse';
import Compra from './componentes/Compra';
import DataProvider from './componentes/Datos';
import Home from './componentes/Home';
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
    const infoFinal = docuCifrada.data().rol;
    return infoFinal;
  }

  function setUserWithFirebase(usuarioFirebase) {
    getRol(usuarioFirebase.uid).then((rol) => {
      const userData = {
        uid: usuarioFirebase.uid,
        email: usuarioFirebase.email,
        rol: rol,
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
          
          <Header />
          { user ? <Home user={user}/>: <LogIn/>}
          <Routes>
            <Route path='/Home' element={<Home />} />
            <Route path='/Inicio' element={<Inicio />} />
            <Route path='/Registrarse' element={<Registrarse />} />
            <Route path='/Ingresar' element={<Ingresar />} />
            <Route path='/Tienda' element={<Tienda />} />
            <Route path='/editarusuario/:id' element={<Editar/>}/>
            <Route path='/Admin' element={<Admin />} />
            <Route path='/Mostrar' element={<Mostrar />} />
            <Route path='/Compra' element={<Compra />} />
            <Route path="/LogIn" element={<LogIn />} />
            
          </Routes>
          <Footer />
        </DataProvider>
      </div>
  );

  
}

export default App;
