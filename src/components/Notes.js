import React, { useEffect, useState } from 'react';
// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js';
import { useNavigate } from "react-router-dom";
import { signOut } from "../firebase/firebaseImport.js";
import { getNotesList } from '../firebase/firestore';
import auth from "../firebase/firebaseConfig.js"
import MyModal from './Modal.js';
import '../styles/notes.css'

export const Notes = () => {
    const [notes, setNotes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
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

    // const addNote = (note) => {
    //   //Actualizar estado note
    //   setNotes([...notes, note])
    // } 

    const getNotes = async () => {
      const notesList = await getNotesList();
      setNotes(notesList);
      setIsLoading(false)
    }
    if (isLoading) {
      return <div>Loading...</div>
    } else {
      return (
      <div>        
        <button className="logout-btn" onClick={logoutBtn}>
          Logout
        </button>
        <section className="header">
          <h1>Yu-Note</h1>
        </section>
        <section className='container-notes'>
          {notes.map((note) => {
            return (
            <div key={note.title} className='container-note'>
                <p>{note.title}</p>
                <p>{note.content}</p>
            </div>
            )
          })}
        </section>
          <MyModal getNotes={getNotes}/>
      </div>
    );
    }
}

export default Notes;