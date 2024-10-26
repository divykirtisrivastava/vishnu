"use client";

import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillDashboard } from "react-icons/ai";
import { FaHouseUser, FaRegDotCircle, FaWallet, FaQuestion, FaUsers } from "react-icons/fa";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { BsBank2 } from "react-icons/bs";
import { GiMoneyStack } from "react-icons/gi";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { FaBars } from "react-icons/fa";
import UserContext from '../../context/UserContext';

export default function Admin_SideBar() {
    let [isOpen, setIsOpen] = useState(false);
    let [isOpen1, setIsOpen1] = useState(false);
    let [isOpen3, setIsOpen3] = useState(false);
    let [sidebarOpen, setSidebarOpen] = useState(false); // State for mobile sidebar
    let { logout } = useContext(UserContext);

    function handleLogout() {
        logout();
        window.location.reload();
    }

    function toggleSidebar() {
        setSidebarOpen(!sidebarOpen);
    }

    return (
        <>
            {/* Hamburger Menu for Mobile */}
            <div className="md:hidden  flex justify-between items-center p-4 bg-black text-white">
                <Link to="/dashboard">
                    <img src="/trustt.png" alt="not found" className="w-16" />
                </Link>
                <button onClick={toggleSidebar}>
                    <FaBars className="text-2xl" />
                </button>
            </div>

            {/* Sidebar */}
            <div className={`md:block ${sidebarOpen ? 'block' : 'hidden'}  h-full bg-gray-800 text-white fixed md:relative z-50`}>
                <h1 className="text-center text-3xl font-bold uppercase h-24 bg-black flex justify-center items-center">
                    <Link to="/dashboard">
                        <img src="/trustt.png" alt="not found" className="w-32" />
                    </Link>
                </h1>
                <div>
                    <ul>
                        <Link to='/dashboard' className='block pl-5 p-2 hover:bg-gray-700 border-b border-gray-500 text-xl font-semibold'>
                            <AiFillDashboard className='inline text-2xl' /> &nbsp;Dashboard
                        </Link>

                        {/* Profile */}
                        <li>
                            <button onClick={() => setIsOpen(!isOpen)} className='w-full text-left block pl-5 p-2 hover:bg-gray-700 border-b border-gray-500 text-xl font-semibold'>
                                <FaHouseUser className='inline text-2xl' /> &nbsp;Profile
                                {isOpen ? <TiArrowSortedUp className='inline float-right' /> : <TiArrowSortedDown className='inline float-right' />}
                            </button>
                            <ul className={`${isOpen ? "block" : "hidden"}`}>
                                <Link to='/dashboard/editprofile' className='block pl-10 p-2 hover:bg-gray-700 border-b border-gray-500 text-xl font-semibold'>
                                    <FaRegDotCircle className='inline text-sm' />&nbsp;Edit Profile
                                </Link>
                                <Link to='/dashboard/changepassword' className='block pl-10 p-2 hover:bg-gray-700 border-b border-gray-500 text-xl font-semibold'>
                                    <FaRegDotCircle className='inline text-sm' />&nbsp;Change Password
                                </Link>
                            </ul>
                        </li>

                        {/* Deposit */}
                        <li>
                            <button onClick={() => setIsOpen1(!isOpen1)} className='w-full text-left block pl-5 p-2 hover:bg-gray-700 border-b border-gray-500 text-xl font-semibold'>
                                <FaWallet className='inline text-2xl' /> &nbsp;Deposit
                                {isOpen1 ? <TiArrowSortedUp className='inline float-right' /> : <TiArrowSortedDown className='inline float-right' />}
                            </button>
                            <ul className={`${isOpen1 ? "block" : "hidden"}`}>
                                <Link to='/dashboard/senddepositerequest' className='block pl-10 p-2 hover:bg-gray-700 border-b border-gray-500 text-xl font-semibold'>
                                    <FaRegDotCircle className='inline text-sm' />&nbsp;Send Request
                                </Link>
                                <Link to='/dashboard/depositehistory' className='block pl-10 p-2 hover:bg-gray-700 border-b border-gray-500 text-xl font-semibold'>
                                    <FaRegDotCircle className='inline text-sm' />&nbsp;Request History
                                </Link>
                            </ul>
                        </li>

                        {/* Withdrawal */}
                        <li>
                            <button onClick={() => setIsOpen3(!isOpen3)} className='w-full text-left block pl-5 p-2 hover:bg-gray-700 border-b border-gray-500 text-xl font-semibold'>
                                <BsBank2 className='inline text-2xl' /> &nbsp;WithDrawal
                                {isOpen3 ? <TiArrowSortedUp className='inline float-right' /> : <TiArrowSortedDown className='inline float-right' />}
                            </button>
                            <ul className={`${isOpen3 ? "block" : "hidden"}`}>
                                <Link to='/dashboard/sendwithrawalrequest' className='block pl-10 p-2 hover:bg-gray-700 border-b border-gray-500 text-xl font-semibold'>
                                    <FaRegDotCircle className='inline text-sm' />&nbsp;Send Request
                                </Link>
                                <Link to='/dashboard/withdrawalhistory' className='block pl-10 p-2 hover:bg-gray-700 border-b border-gray-500 text-xl font-semibold'>
                                    <FaRegDotCircle className='inline text-sm' />&nbsp;Withdrawal History
                                </Link>
                            </ul>
                        </li>

                        {/* <Link to='/dashboard/help' className='block pl-5 p-2 hover:bg-gray-700 border-b border-gray-500 text-xl font-semibold'>
                            <FaQuestion className='inline text-2xl' /> &nbsp;Help Center
                        </Link> */}

                        {/* Signout */}
                        <li>
                            <button onClick={handleLogout} className='block w-full text-left pl-5 p-2 hover:bg-gray-700 border-b border-gray-500 text-xl font-semibold'>
                                <RiLogoutCircleRLine className='inline text-2xl' /> &nbsp;Signout
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Overlay for Mobile */}
            {sidebarOpen && <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={toggleSidebar}></div>}
        </>
    );
}
