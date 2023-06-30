/*import React, {useState} from "react";
import {auth} from "../../firebase";
import {signInwithEmailAndPassword} from "firebase/auth"

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (e) => {
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