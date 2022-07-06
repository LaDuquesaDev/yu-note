import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { saveNotes, updateNote } from '../firebase/firestore';
import { BsFillPlusCircleFill } from "react-icons/bs";
import '../styles/modal.css'
// import './notes.css'

export default function MyModal({ getNotes, showInitialModal, setShowInitialModal, selectedNote, mode, setMode }) {
  console.log("MODE", mode);
  const [show, setShow] = useState(false);
  const [form, setState] = useState({
    title: '',
    content: ''
  });

  const handleClose = () => {
    setShow(false)
    setShowInitialModal(false)
  };

  const handleShow = () => {
    setShow(true);
    setMode('Create');
  };

  const updateField = e => setState({
    ...form, //spread
    [e.target.name]: e.target.value
  });
  
  useEffect(() => {
    setShow(showInitialModal)
    if (selectedNote) {
      setState(currentForm => {
        currentForm.title = selectedNote.title;
        currentForm.content = selectedNote.content;
        return currentForm
      })
    }
  }, [showInitialModal])

  const printValues = e => {
    e.preventDefault();
  };

  const eventsSaveBtn = () => {
    if (mode === 'Edit') {
      updateNote()
      } else if (mode === 'Create') {
      saveNotes(form.title, form.content).then(() => {
        getNotes()
        handleClose();
      });
    }
  };

  return (
    <>
      <BsFillPlusCircleFill className='modal-btn' variant="warning" size="sm" onClick={handleShow}></BsFillPlusCircleFill>

      <Modal className='modal-window' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Yu-Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={printValues}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                value={form.title}
                type="text"
                name="title"
                placeholder="Ingrese el texto"
                onChange={updateField}
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1">
              <Form.Label>Content</Form.Label>
              <Form.Control as="textarea" rows={3}
                value={form.content}
                name="content"
                onChange={updateField}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="warning" onClick={eventsSaveBtn}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};