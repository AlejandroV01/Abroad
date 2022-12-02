import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'rsuite/dist/rsuite.min.css'
import './App.css'
import Header from './components/Header/Header'

import Home from './pages/Home/Home'
import MapSearch from './pages/MapSearch'
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Home />
      </BrowserRouter>
    </div>
  )
}

export default App
