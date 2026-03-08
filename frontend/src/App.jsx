import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import './App.css'

function App() {
 

  return (
    <>
      <BrowserRouter >
       <Navbar />
       <Routes>
         
       </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App
