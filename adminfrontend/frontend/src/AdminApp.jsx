import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import AdminSidebar from './Component/dashboard/AdminSidebar'
import AdminNav from './Component/dashboard/AdminNav'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import UserContextProvider from './context/UserContextProvider';
import UserContext from './context/UserContext';

export default function AdminApp() {
  return (
    <UserContextProvider>
    <Outlet/>
    </UserContextProvider>
  )
}
