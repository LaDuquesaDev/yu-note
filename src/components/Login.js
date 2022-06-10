import React from 'react';
// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js';
import { useNavigate } from "react-router-dom";
import { signInWithPopup, GoogleAuthProvider } from "../firebase/firebaseImport";
import auth from "../firebase/firebaseConfig.js"
import '../styles/login.css'

const Login = () => {
    const navigate = useNavigate();
    const loginWithGoogle = () => {
      const provider = new GoogleAuthProvider();
      return signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        navigate('/Notes');
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
    }
    return (
      <>
        <section className="title">
          <h1>Yu-Note</h1>
        </section>
        <section className='text'>
          <p>The perfect App to write down what you want</p>
        </section>
        <button className="login-btn login-google" onClick={loginWithGoogle}>
          Login with Google
        </button>
      </>
      );
}
    
export default Login;





//import { Link, useNavigate } from "react-router-dom";
// import { auth, signInWithGoogle } from "./firebase/firebase";
// import { useAuthState } from "react-firebase-hooks/auth";