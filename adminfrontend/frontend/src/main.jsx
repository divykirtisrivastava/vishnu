import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import AdminApp from './AdminApp.jsx'
import DashboardShow from './Component/dashboard/DashboardShow.jsx'
import Category from './Component/dashboard/Category.jsx'
import Users from './Component/dashboard/Users.jsx'
import AddCategory from './Component/dashboard/AddCategory.jsx'
import SubCategory from './Component/dashboard/SubCategory.jsx'
import AddSubCategory from './Component/dashboard/AddSubCategory.jsx'
import Product from './Component/dashboard/Product.jsx'
import AddProduct from './Component/dashboard/AddProduct.jsx'
import ViewProduct from './Component/dashboard/ViewProduct.jsx'
import UpdateProduct from './Component/dashboard/UpdateProduct.jsx'
import Banner from './Component/dashboard/Banner.jsx'
import AddBanner from './Component/dashboard/AddBanner.jsx'

import Orders from './Component/dashboard/Orders.jsx'
import AdminLogin from './Component/dashboard/AdminLogin.jsx'
import AdminProtected from './Component/dashboard/AdminProtected.jsx'
import DepositeReququest from './Component/DepositeReququest.jsx'
import UserData from './Component/UserData.jsx'
import EditUser from './Component/EditUser.jsx'
import WithrawalRequest from './Component/WithrawalRequest.jsx'







let router= createBrowserRouter(
  createRoutesFromElements(
    <>

    <Route path='/' element={<AdminApp/>}>
    <Route path='' element={<AdminProtected><DepositeReququest/></AdminProtected>}/>
    <Route path='/users' element={<UserData/>}/>
    <Route path='/users/:id' element={<EditUser/>}/>
    <Route path='/adminlogin' element={<AdminLogin/>}/>
    <Route path='/withrawalrequest' element={<WithrawalRequest/>}/>
    </Route>
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
