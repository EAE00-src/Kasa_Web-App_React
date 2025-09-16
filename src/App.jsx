import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import './App.css'
import Home from './pages/Home'
import About from '.pages/About'
import Error from './components/Error/404'



function App() {


  return (
    <>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />

    <Route path='/*' element={<Error />} />
  </Routes>
    </>
  )
}

export default App
