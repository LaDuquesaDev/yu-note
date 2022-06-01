import React from 'react';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js';
import { useNavigate } from "react-router-dom";
import { signInWithPopup, GoogleAuthProvider } from "./firebase/firebase.js";
import auth from "./firebase/firebaseConfig.js"
import './login.css'

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
      });
    }
    return (
      <button className="login__btn login__google" onClick={loginWithGoogle}>
          Login with Google
      </button>
      );
}
    
export default Login;





//import { Link, useNavigate } from "react-router-dom";
// import { auth, signInWithGoogle } from "./firebase/firebase";
// import { useAuthState } from "react-firebase-hooks/auth";