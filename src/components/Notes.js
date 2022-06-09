import React, { useEffect } from 'react';
// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js';
import { useNavigate } from "react-router-dom";
import { signOut } from "../firebase/firebaseImport.js";
import { getNoteList } from '../firebase/firestore';
import auth from "../firebase/firebaseConfig.js"
import Example from './Modal.js';
import '../styles/notes.css'

export const Logout = () => {
    const navigate = useNavigate();
    useEffect(() => {
      getNotes()
    }, []) 
    const logoutBtn = () => {
        signOut(auth)
        .then((result) => {
          if (window.confirm("¿Estás seguro de cerrar sesión?")) {
            navigate('/');
          }
        });
    };

    const getNotes = () => {
      getNoteList().then(resp => {console.log(resp)}).catch(error => console.error(error))
    }
    
    return (
      <div>        
        <button className="logout-btn" onClick={logoutBtn}>
          Logout
        </button>
        <section className="header">
        <h1>Yu-Note</h1>
        </section>
        <section className='container-notes'>
        
        </section>
        <Example />
      </div>
    );
}

export default Logout;

