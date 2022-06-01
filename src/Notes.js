import React from 'react';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js';
import { useNavigate } from "react-router-dom";
import { signOut } from "./firebase/firebase.js";
import auth from "./firebase/firebaseConfig.js"
import './notes.css'

const Logout = () => {
    const navigate = useNavigate();
    const logoutBtn = () => {
        signOut(auth)
        .then((result) => {
          navigate('/');
        });
    };
    return (
        <div>
        <section className="welcome">
        <h1>¡Welcome!</h1>
        </section>
        <button className="logout-btn" onClick={logoutBtn}>
          Logout
        </button>
        </div>
    );
}
    
export default Logout;