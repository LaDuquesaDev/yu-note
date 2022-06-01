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
        <button className="logout__btn" onClick={logoutBtn}>
          Logout
        </button>
    );
}
    
export default Logout;