import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import CarBookingForm from './form/CarBookingForm';
import './App.css'

function App() {
 

  return (
    <>
      <BrowserRouter >
       <Navbar />
       <Routes>
         <Route path='/CarBookingForm' element={<CarBookingForm />}/>
       </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App
