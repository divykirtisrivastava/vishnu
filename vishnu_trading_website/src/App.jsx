import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import UserContextProvider from './context/UserContextProvider'


function App() {

  return (
  <UserContextProvider>
  <div className='fixed w-full z-50'>
    <Navbar/>
  </div>
    <Outlet/>
    <Footer/>
  </UserContextProvider>
  )
}

export default App
