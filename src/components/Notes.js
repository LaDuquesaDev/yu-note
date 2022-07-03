import React, { useEffect, useState } from 'react';
// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js';
import { getNotesList, deleteNote } from '../firebase/firestore.js';
import Logout from './Logout.js';
import MyModal from './Modal.js';
import '../styles/notes.css'

export const Notes = () => {
    const [notes, setNotes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedNote, setSelectedNote] = useState("");
    const [showInitialModal, setShowInitialModal] = useState(false);
    useEffect(() => {
      getNotes()
    }, []) 

    const handleDelete = (id) => {
      deleteNote(id)
      .then(() => {
        if (window.confirm("Are you sure to delete this comment?")) {
          getNotes();
        }
    }).catch((error) => {
        console.error(error)
    });
    }

    const handleEdit = async (note) => {
      setShowInitialModal(true)
      setSelectedNote(note)
    }

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
          <Logout />
        <section className="header">
          <h1>Yu-Note</h1>
        </section>
        <section className='container-notes'>
          {notes.map((note) => {
            console.log('NOTA', note);
            return (
            <div key={note.id} className='container-note'>
                <b><p>{note.title}</p></b>
                <p>{note.content}</p>
                <button onClick={() => handleDelete(note.id)}>Delete</button>
                <button onClick={() => handleEdit(note)}>Edit</button>
            </div>
            )
          })}
        </section>
          <MyModal getNotes={getNotes} showInitialModal={showInitialModal} setShowInitialModal={setShowInitialModal} selectedNote={selectedNote}/>
      </div>
    );
    }
}

export default Notes;


    // const addNote = (note) => {
    //   //Actualizar estado note
    //   setNotes([...notes, note])
    // } 
