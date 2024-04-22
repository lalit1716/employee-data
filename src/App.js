import './App.css';
// import React, {useState} from 'react';
import Home from './components/Home';
import Form from './components/Form';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Edit from './components/Edit';

function App() {

 


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/Form' element={<Form  />} />
         <Route path='/Edit' element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
