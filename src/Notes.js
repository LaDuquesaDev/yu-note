import React from 'react';
import { useNavigate } from "react-router-dom";
import { loginGoogle } from "./firebase/firebase.js";
import './notes.css'

function Login() {
    return (
        <button className="login__btn login__google" onClick={loginGoogle}>
          Login with Google
        </button>
    );
}
export default Login;