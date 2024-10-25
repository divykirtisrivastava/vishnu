import React from 'react'
import { Navigate } from 'react-router-dom'

export default function ProtectedPrac({children}) {
  let token = localStorage.getItem("token")
  if(token){
    return children
  }else{
    return <Navigate to="/login"/>
  }
}
