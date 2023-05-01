import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import { NextUIProvider } from '@nextui-org/react';
import LandingPage from './routes/LandingPage/LandingPage';
import './App.css'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <LandingPage/> } />
      </Routes>
    </div>
  )
}

export default App
