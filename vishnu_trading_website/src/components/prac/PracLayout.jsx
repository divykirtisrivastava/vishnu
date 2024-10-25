import React from 'react'
import { Outlet } from 'react-router-dom'
import UserContextProvider from '../../context/UserContextProvider'
import Admin_SideBar from './Admin_SideBar'
import AdminNavbar from './AdminNavbar'

export default function PracLayout() {
  return (
    <UserContextProvider>
       <div className='w-full h-auto bg-gray-400 text-white flex'>
      <div className='w-[22%] h-screen overflow-auto background-color hidden md:block fixed'>
        <Admin_SideBar/>
      </div>
      <div className='w-full md:w-[78%] h-auto relative md:left-[22%]'>
        <AdminNavbar/>
        <div className='w-full h-auto p-5'>
      <Outlet/>
        </div>
      </div>
    </div>
    </UserContextProvider>
  )
}
