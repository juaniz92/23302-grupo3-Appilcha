import React from "react";

import Admin from "../componentes/Auth/Admin";
import Inicio from "../componentes/Inicio";

import firebaseApp from "../firebaseConfig/firebase";
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth(firebaseApp);

function Home({user}) {
  return (
    <div>
      Home
      <button onClick={() => signOut(auth)}> Cerrar sesión</button>
      {user.rol === "admin" ? <Admin /> : <Inicio />}
    </div>
  );
}

export default Home;