import React, { useEffect, useState } from 'react'
import UserContext from './UserContext'
import axios from 'axios'

export default function UserContextProvider({children}) {
    let [flag, setFlag] = useState(false)
    let [adminflag, setAdminFlag] = useState(false)
    let [haveAdmin, setHaveAdmin] = useState(false)
    let [showmenu, setShowmenu ] = useState(false)
    
    let [auth, setAuth] = useState({
        token: localStorage.getItem('token') || null,
        isAuthenized : !!localStorage.getItem('token'),
        userData: ''
    })

    let userLogin = async (email, password)=>{
   
    let result = await axios.post('https:///actl.co.in/vishnu/clienlogin', { email, password });
    if(result.data.isMatch){
        localStorage.setItem('token', result.data.token)
        setAuth({token:result.data.token, isAuthenized: true, username:  result.data.userData })
        setFlag(true)
        return true
    }else{
        return false
    }
    }

    let logout = ()=>{
        localStorage.removeItem('token')
        setAuth({token: null, isAuthenized: false, username: '' })
        // window.location.reload()
    }


    let profile = async ()=>{
       try {
        let token = localStorage.getItem('token')
        const response = await axios.post('https:///actl.co.in/vishnu/clienVerify', { token });
        if (response.data.valid) {
            setAuth({ token, userData: response.data.result[0] }); // Assuming user data is here
        } else {
            logout();
        }
       } catch (error) {
        logout()
       }
    }

    useEffect(()=>{
        let token = localStorage.getItem('token')
        if(token){
            profile()
        }else{
            logout()
        }
        

    }, [])


    // console.log(auth)
  return (
   <UserContext.Provider value={{auth, setAuth, userLogin, logout, flag, setFlag, adminflag, setAdminFlag, showmenu, setShowmenu}}>
    {children}
   </UserContext.Provider>
  )
}