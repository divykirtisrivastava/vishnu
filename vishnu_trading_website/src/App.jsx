import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'


function App() {

  return (
  <>
  <div className='fixed w-full z-50'>
    <Navbar/>
  </div>
    <Outlet/>
    <Footer/>
  </>
  )
}

export default App
