import React from 'react';
import { useNavigate } from "react-router-dom";
import { signOut } from "../firebase/firebaseImport";
import auth from "../firebase/firebaseConfig.js"
import { Button } from 'react-bootstrap';
import '../styles/notes.css'

const Logout = () => {
const navigate = useNavigate();
const handleShow = () => {
    signOut(auth)
    .then(() => {
        if (window.confirm("Are you sure to log out?")) {
            navigate('/'); 
        }
    }).catch((error) => {
        console.error(error)
    });
    }; 
    return (       
        <div>
            <Button className="logout-btn" variant="warning" onClick={handleShow}>
                Logout
            </Button>
        </div>
    )
};

export default Logout;