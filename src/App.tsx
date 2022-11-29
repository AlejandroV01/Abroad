import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import MapSearch from './pages/MapSearch'
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/MapSearch' element={<MapSearch />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
