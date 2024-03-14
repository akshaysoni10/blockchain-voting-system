import React from 'react';
// import { useState } from 'react';
// import 'bootstap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './pages/Login/Login.jsx'
import SignUp from './pages/Login/SignUp.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home.jsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<SignUp />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/home' element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
