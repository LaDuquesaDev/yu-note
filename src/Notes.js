import React from 'react';
// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js';
import { useNavigate } from "react-router-dom";
import { signOut } from "./firebase/firebaseImport.js";
import auth from "./firebase/firebaseConfig.js"
import Example from './components/Modal.js'
import './notes.css'

export const Logout = () => {
    const navigate = useNavigate();
    const logoutBtn = () => {
        signOut(auth)
        .then((result) => {
          if (window.confirm("¿Estás seguro de cerrar sesión?")) {
            navigate('/');
          }
        });
    };
    return (
      <div>
        <section className="welcome">
        <button className="logout-btn" onClick={logoutBtn}>
          Logout
        </button>
        <h1>yuNOTES</h1>
        </section>
        <div>
        Example()
        </div>
      </div>
    );
}

export default Logout;

