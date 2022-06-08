import React from 'react';
// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js';
import { useNavigate } from "react-router-dom";
import { signOut } from "./firebase/firebaseImport.js";
import auth from "./firebase/firebaseConfig.js"
import Example from './components/Modal.js';
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
        <button className="logout-btn" onClick={logoutBtn}>
          Logout
        </button>
        <section className="welcome">
        <h1>Yu-Note</h1>
        </section>
        <Example />
      </div>
    );
}

export default Logout;

