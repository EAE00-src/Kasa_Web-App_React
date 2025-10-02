import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'


import Home from './pages/Home'
import About from './pages/About'
import Error from './components/Error/404'
import Navigation from './components/NavBar'
import Footer from './components/Footer'
import PropertyDetails from './pages/Properties/Properties'



function App() {


  return (
    <>
    <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/rentals/:id' element={<PropertyDetails />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    <Footer />
    </>
  )
}

export default App
