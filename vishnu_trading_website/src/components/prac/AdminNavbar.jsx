"use client";

import React, { useContext, useState } from 'react'
import { FaBarsStaggered } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
// import logo from '../../../public/logo.png'
import { AiFillDashboard } from "react-icons/ai";
import { FaHouseUser } from "react-icons/fa";
import { FaRegDotCircle } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import { TiArrowSortedUp } from "react-icons/ti";
import { FaUserPlus } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { BiTransfer } from "react-icons/bi";
import { BsBank2 } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaQuestion } from "react-icons/fa";
import { RiLogoutCircleRLine } from "react-icons/ri";
import UserContext from '../../context/UserContext';
import { Link } from 'react-router-dom';
export default function AdminNavbar() {
  let {setShowmenu, showmenu, logout} = useContext(UserContext)
//   console.log(showmenu)
  let [isOpen ,setIsOpen] = useState(false)
    let [isOpen1 ,setIsOpen1] = useState(false)
    let [isOpen2 ,setIsOpen2] = useState(false)
    let [isOpen3 ,setIsOpen3] = useState(false)
    let [isOpen4 ,setIsOpen4] = useState(false)
    let [isOpen5 ,setIsOpen5] = useState(false)
    // function handleLogout(){
    //     clientLogout()
    //     window.location.reload()
    // }
    function handleLogout(){
        logout()
    }
  return (
    <>
    <div className='w-full h-[70px] border-b-2 flex justify-between px-16 items-center fixed bg-black md:hidden z-50'>
      <Link to='/'><img src="/group-3-13@2x.png" alt='not found' className='h-[120px] w-[120px] overflow-hidden md:hidden'/></Link>
        <div onClick={()=>setShowmenu(!showmenu)}><FaBarsStaggered className='inline text-3xl text-white cursor-pointer'/></div>
        {/* <div><FaUserCircle className='inline text-4xl'/></div> */}
    </div>
      {showmenu &&  <div className='' >
       
        <div className='xl:hidden fixed top-[70px] bg-black w-full z-50'>
            <ul>
                {/* Dashboard */}
                <li><Link to='/dashboard' onClick={()=>setShowmenu(!showmenu)} className='block pl-5 p-2 hover:bg-gray-700 active:bg-slate-950 ease-linear  border-b border-b-gray-500 text-xl font-semibold'><AiFillDashboard className='inline text-2xl' /> &nbsp;&nbsp;Dashboard</Link></li>

                {/* Profile */}
                <li
                onClick={()=>setIsOpen(!isOpen)}
                ><Link to='#' className='block pl-5 p-2 hover:bg-gray-700 active:bg-slate-950 ease-linear  border-b border-b-gray-500 text-xl  font-semibold'><FaHouseUser  className='inline text-2xl' /> &nbsp;&nbsp;Profile{isOpen?<TiArrowSortedUp className='inline relative left-[120px]' />:<TiArrowSortedDown className='inline relative left-[120px]' />}</Link>
                    <ul className={`${isOpen?"block":"hidden"}`}>
                        <li><Link to='/dashboard/editprofile' onClick={()=>setShowmenu(!showmenu)} className='block pl-10 p-2 hover:bg-gray-700 active:bg-slate-950 ease-linear  border-b border-b-gray-500 text-xl  font-semibold'> <FaRegDotCircle className='inline text-sm'/>&nbsp;&nbsp;Edit Profile</Link></li>
                        <li><Link to='/dashboard/changepassword' onClick={()=>setShowmenu(!showmenu)} className='block pl-10 p-2 hover:bg-gray-700 active:bg-slate-950 ease-linear  border-b border-b-gray-500 text-xl  font-semibold'><FaRegDotCircle className='inline text-sm'/>&nbsp;&nbsp;Change Password</Link></li>
                    </ul>
                </li>

                <li
                onClick={()=>setIsOpen1(!isOpen1)}
                ><Link to='#' className='block pl-5 p-2 hover:bg-gray-700 active:bg-slate-950 ease-linear  border-b border-b-gray-500 text-xl  font-semibold'><FaWallet   className='inline text-2xl' /> &nbsp;&nbsp;Deposit{isOpen1?<TiArrowSortedUp className='inline relative left-[110px]' />:<TiArrowSortedDown className='inline relative left-[110px]' />}</Link>
                    <ul className={`${isOpen1?"block":"hidden"}`}>
                        <li><Link to='/dashboard/senddepositerequest' onClick={()=>setShowmenu(!showmenu)} className='block pl-10 p-2 hover:bg-gray-700 active:bg-slate-950 ease-linear  border-b border-b-gray-500 text-xl  font-semibold'> <FaRegDotCircle className='inline text-sm'/>&nbsp;&nbsp;Send Request</Link></li>
                        <li><Link to='/dashboard/depositehistory' onClick={()=>setShowmenu(!showmenu)} className='block pl-10 p-2 hover:bg-gray-700 active:bg-slate-950 ease-linear  border-b border-b-gray-500 text-xl  font-semibold'><FaRegDotCircle className='inline text-sm'/>&nbsp;&nbsp; Request History</Link></li>
                    </ul>
                </li>

                <li
                onClick={()=>setIsOpen3(!isOpen3)}
                ><Link to='#' className='block pl-5 p-2 hover:bg-gray-700 active:bg-slate-950 ease-linear  border-b border-b-gray-500 text-xl  font-semibold'><BsBank2   className='inline text-2xl' /> &nbsp;&nbsp;WithDrawal section{isOpen3?<TiArrowSortedUp className='inline relative left-[8px]' />:<TiArrowSortedDown className='inline relative left-[8px]' />}</Link>
                    <ul className={`${isOpen3?"block":"hidden"}`}>
                        <li><Link to='/dashboard/sendwithrawalrequest' onClick={()=>setShowmenu(!showmenu)} className='block pl-10 p-2 hover:bg-gray-700 active:bg-slate-950 ease-linear  border-b border-b-gray-500 text-xl  font-semibold'> <FaRegDotCircle className='inline text-sm'/>&nbsp;&nbsp;Send Request</Link></li>
                        <li><Link to='/dashboard/withdrawalhistory' onClick={()=>setShowmenu(!showmenu)} className='block pl-10 p-2 hover:bg-gray-700 active:bg-slate-950 ease-linear  border-b border-b-gray-500 text-xl  font-semibold'><FaRegDotCircle className='inline text-sm'/>&nbsp;&nbsp; WithDrawal History</Link></li>
                    </ul>
                </li>




                <li><Link to='/dashboard/withdrawalhistory' onClick={()=>setShowmenu(!showmenu)} className='block pl-5 p-2 hover:bg-gray-700 active:bg-slate-950 ease-linear  border-b border-b-gray-500 text-xl font-semibold'><GiMoneyStack  className='inline text-2xl' /> &nbsp;&nbsp;Payout Summary</Link></li>



                <li><Link to='/dashboard' onClick={()=>setShowmenu(!showmenu)} className='block pl-5 p-2 hover:bg-gray-700 active:bg-slate-950 ease-linear  border-b border-b-gray-500 text-xl font-semibold'><FaQuestion  className='inline text-2xl' /> &nbsp;&nbsp;Help Center</Link></li>


                {/* Signuot */}
                <li><button onClick={handleLogout} className='block pl-5 p-2 hover:bg-gray-700 active:bg-slate-950 ease-linear  border-b border-b-gray-500 text-xl font-semibold'><RiLogoutCircleRLine  className='inline text-2xl' /> &nbsp;&nbsp;Signout</button></li>
            </ul>
        </div>
    </div>}
    </>
  )
}
