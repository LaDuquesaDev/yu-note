import React from 'react';
import { Route, Routes } from "react-router-dom";
import background from "../img/19333445.svg";
import Login from './Login.js';
import Notes from './Notes.js';

function App () {
    return (
        <div style={{ backgroundImage: `url(${background})` }}>
            <Routes>
                <Route path='/' element={ <Login /> }/>
                <Route path='/Notes' element={ <Notes /> }/>
            </Routes>
        </div>
    );
}

export default App;

//Que hace el fragment <>