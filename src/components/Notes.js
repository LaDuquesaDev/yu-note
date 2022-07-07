import React, { useEffect, useState } from 'react';
// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js';
import { getNotesList, deleteNote } from '../firebase/firestore.js';
import { BsTrash } from "react-icons/bs";
import { BsPencil } from "react-icons/bs";
import Logout from './Logout.js';
import MyModal from './Modal.js';
import '../styles/notes.css'

export const Notes = () => {
    const [notes, setNotes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedNote, setSelectedNote] = useState("");
    const [showInitialModal, setShowInitialModal] = useState(false);
    const [mode, setMode] = useState("");
    
    useEffect(() => {
      getNotes()
    }, []) 

    const handleDelete = (id) => {
      deleteNote(id)
      .then(() => {
        if (window.confirm("Are you sure to delete this note?")) {
          getNotes();
        }
    }).catch((error) => {
        console.error(error)
    });
    }

    const handleEdit = (note) => {
      setMode('Edit')
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
      <div className="ppal-container">        
          <Logout />
          <h1 className='yunote-notes'>Notes</h1>
        <section className='container-notes'>
          {notes.map((note) => {
            console.log('NOTA', note);
            return (
            <div key={note.id} className='container-note'>
                <b className='title'><p>{note.title}</p></b>
                <textarea readOnly className='content'>{note.content}</textarea>
                <BsTrash className="bi bi-trash" variant='primary' onClick={() => handleDelete(note.id)}></BsTrash>
                <BsPencil className="bi bi-pencil" variant='primary' onClick={() => handleEdit(note)}></BsPencil>
            </div>
            )
          })}
        </section>
          <MyModal getNotes={getNotes} showInitialModal={showInitialModal} setShowInitialModal={setShowInitialModal} selectedNote={selectedNote} mode={mode} setMode={setMode}/>
      </div>
    );
    }
}

export default Notes;


    // const addNote = (note) => {
    //   //Actualizar estado note
    //   setNotes([...notes, note])
    // } 
