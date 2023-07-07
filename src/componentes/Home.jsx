import React from "react";
import {useNavigate} from 'react-router-dom';
import Admin from "../componentes/Auth/Admin";
import Inicio from "../componentes/Inicio";

import firebaseApp from "../firebaseConfig/firebase";
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth(firebaseApp);

function Home({user}) {
  const navigate = useNavigate();
  function cerrar () {
    navigate("/");
    signOut(auth);
    

  } 
  

  return (
    <div>
      <button className="d-block ms-auto" onClick={cerrar }>Cerrar sesión</button>
      {user.rol === "admin" ? <Admin /> : <Inicio />}
    </div>
  );
}

export default Home;