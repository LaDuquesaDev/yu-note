import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Login.js';
import Notes from './Notes.js';

function App () {
    return (
        <BrowserRouter>
        <Routes>
        <Route path='/' element={ <Login /> }/>
        <Route path='/Notes' element={ <Notes /> }/>
        </Routes>
        </BrowserRouter>
    );
}

export default App;

//Que hace el fragment <>