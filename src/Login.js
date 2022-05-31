import React from 'react';
import { useNavigate } from "react-router-dom";
import { loginGoogle } from "./firebase/firebase.js";
import './login.css'

function Login() {
  const navigate = useNavigate();
    return (
        <button className="login__btn login__google" onClick={loginGoogle}>
          Login with Google
        </button>
    );
}
export default Login;





//import { Link, useNavigate } from "react-router-dom";
// import { auth, signInWithGoogle } from "./firebase/firebase";
// import { useAuthState } from "react-firebase-hooks/auth";