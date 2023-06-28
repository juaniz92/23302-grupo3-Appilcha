/*-import React, {useState,useEffect} from "react";
import {Link} from 'react-router-dom';
import {useNavigate,useParams} from 'react-router-dom';
import {getDoc, doc} from 'firebase/firestore';
import {db} from '../../firebaseConfig/firebase';
import {async} from '@firebase/util';
import Swal from 'sweetalert2';

const SignIn = () => {
    //se declaran variables
    const [form, setForm] = useState({
        Email: "",
        Password:""

    })
    const navigate = useNavigate();
    const {id} = useParams

    //Declaramos el alert
    const alertingreso = () => (

        Swal.fire({
            title: 'Ingresaste',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
    )

    // Declaramos la existencia
    const getUsuarioByID= async (id) => {
        e.preventDefault();
        signInwithEmailAndPassword(auth, email, password)
        .then ((userCredential)=>{
            console.log(userCredential)
        })
        .catch((error)=>{
            console.log(error);
        })
        

    }
    return (
        <div className="container">
            <form onSubmit={signIn}>
                <h1>Log In</h1>
                <input type='email' placeholder='<EMAIL>' value={email} onChange={(e)=> setEmail(e.target.value)}></input>
                <input type="password" placeholder="password" value={password} onChange={(e)=> setPassword(e.target.value)}></input>
                <button type="submit">Log In</button>
            </form>
        </div>
    )
}

export default SignIn-*/