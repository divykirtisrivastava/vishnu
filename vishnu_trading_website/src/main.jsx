import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Hero from './components/Hero.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import AboutUs from './components/AboutUs.jsx'
import ContactUs from './components/ContactUs.jsx'
import PracLayout from './components/prac/PracLayout.jsx'
import ProtectedPrac from './components/prac/ProtectedPrac.jsx'
import PracHome from './components/prac/PracHome.jsx'
import ChangePassword from './components/prac/ChangePassword.jsx'
import DepositeHistory from './components/prac/DepositeHistory.jsx'
import EditProfile from './components/prac/EditProfile.jsx'
import SendDeposite from './components/prac/SendDeposite.jsx'
import Help from './components/prac/Help.jsx'
import WithrowHistory from './components/prac/WithrowHistory.jsx'
import WithrowSend from './components/prac/WithrowSend.jsx'
import RegisterSponser from './components/RegisterSponser.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='' element={<App/>}>
      <Route path='/' element={<Hero/>}/>
      <Route path='/about' element={<AboutUs/>}/> 
      <Route path='/contactus' element={<ContactUs/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/register/:sponser' element={<RegisterSponser/>}/>
    </Route>

<Route path='/dashboard' element={<PracLayout/>}>
<Route path='' element={<ProtectedPrac><PracHome/></ProtectedPrac>}/>
<Route path='/dashboard/changepassword' element={<ProtectedPrac><ChangePassword/></ProtectedPrac>}/>
<Route path='/dashboard/depositehistory' element={<ProtectedPrac><DepositeHistory/></ProtectedPrac>}/>
<Route path='/dashboard/editprofile' element={<ProtectedPrac><EditProfile/></ProtectedPrac>}/>
<Route path='/dashboard/senddepositerequest' element={<ProtectedPrac><SendDeposite/></ProtectedPrac>}/>
<Route path='/dashboard/help' element={<ProtectedPrac><Help/></ProtectedPrac>}/>
<Route path='/dashboard/withdrawalhistory' element={<ProtectedPrac><WithrowHistory/></ProtectedPrac>}/>
<Route path='/dashboard/sendwithrawalrequest' element={<ProtectedPrac><WithrowSend/></ProtectedPrac>}/>
</Route>
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
