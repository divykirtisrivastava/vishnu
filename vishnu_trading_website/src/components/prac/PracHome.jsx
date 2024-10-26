"use client";

import React, { useContext, useEffect } from 'react'
import { FaCopy } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
import { FcMoneyTransfer } from "react-icons/fc";
import { GiTakeMyMoney } from "react-icons/gi";
import { GiReceiveMoney } from "react-icons/gi";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaAward } from "react-icons/fa6";
import { GiMoneyStack } from "react-icons/gi";
import { TbMoneybag } from "react-icons/tb";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { FaMoneyBillWave } from "react-icons/fa";
import { GiCash } from "react-icons/gi";
import { BsCashCoin } from "react-icons/bs";
import { CgOrganisation } from "react-icons/cg";
import { RiHotelFill } from "react-icons/ri";
import { FaBusinessTime } from "react-icons/fa";
import { TbAwardFilled } from "react-icons/tb";
import { TiMediaRecord } from 'react-icons/ti';
import axios from 'axios';
import UserContext from '../../context/UserContext';


const PracHome = () => {
    let { auth } = useContext(UserContext);
    const email = auth?.userData?.email;
  
    // Split the sponsor email if it exists, otherwise handle safely
    const sponsor =  email ? email.split('@')[0] + '_referral_trustbot.in' : '';
    let forcopy = 'https://trustbot.in/register/' + sponsor;
    function handleCopy(){
      navigator.clipboard.writeText(forcopy).then(() => {
          alert('Copied to clipboard!!');
        }).catch(err => {
          console.error('Failed to copy: ', err);
        });
  }
  
  async function getReferral(sponsor) {
    if(sponsor){
      await axios.get(`https:///actl.co.in/vishnu/updaterefIncome/${sponsor}/${auth.userData.email}`)
      // console.log(auth.userData.sponsorEmail)
    }
  }
  
  useEffect(()=>{
  getReferral(sponsor)
  },[auth])

  return (
    <>
      <div className='flex flex-col justify-start items-start gap-6 mt-20 md:mt-5 bg-black text-white'>
        <h1 className='px-5 py-2 bg-gray-100 inline-block rounded-md text-3xl text-black font-bold uppercase'>Dashboard</h1>
        <div>
          <p className='text-2xl font-bold'>Status: <span className={`${auth.userData?.status == 'verified' ? 'text-green-400' : 'text-red-800'} text-3xl uppercase`}>{auth.userData?.status ?? 'N/A'}</span></p>
        </div>
        <div className=" flex flex-col md:flex-row p-4 w-full gap-2">
         
            {/* First Card */}
            <div className="background-color border p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105 w-full md:w-1/2">
              <div className='w-full text-xl md:text-2xl font-semibold text-gray-400'>
                <p className='text-gray-100'>User Name: <span className='text-xl uppercase text-white'>{auth.userData?.first_name ?? 'N/A'}</span></p>
                <p className='text-gray-100'>User Email: <span className=' uppercase text-white text-sm xl:text-xl'>{auth.userData?.email ?? 'N/A'}</span></p>
                
                <p className='text-gray-100'>Referral Email: <span className='text-sm text-white overflow-hidden'>{auth.userData?.sponsorEmail ?? 'N/A'}</span></p>
              </div>
            </div>

            {/* Second Card with Search Field */}
            <div className="background-color border p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105 w-full md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">Referral Program  :  Earn a stable income by</h2>
              <p className="text-xl font-bold mb-4">
                introducing clients to NOBLETRADIFY.COM
              </p>
              <div className='w-full h-10  bg-gray-100 rounded-full flex items-center text-black text-xl font-bold justify-between overflow-hidden border'>
                <p className='pl-5 overflow-hidden'>{`https://trustbot.in/register/${sponsor ?? 'N/A'}`}</p>
                <button onClick={handleCopy} className='bg-black p-5 rounded-full text-white cursor-pointer'>Copy</button>
              </div>
            </div>

          {/* </div> */}
        </div>



        <div className=" flex flex-col justify-center items-center p-4">
          {/* Card Container */}
          <div className="grid gap-6 md:grid-cols-4 w-full text-xl">

            {/* First Card */}
            <div className="background-color border p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105 flex gap-5 items-center justify-between">
              <div className='text:xl font-semibold'>
                <p>Deposit </p>
                <p>$ {(auth.userData?.deposite - auth.userData?.totalWithrawal) ?? '0'}</p>
              </div>
              <div className=' text:xl font-semibold'>
                <FcMoneyTransfer className='inline text-2xl md:text-4xl' />
              </div>
            </div>

            {/* Second Card with Search Field */}
            <div className="background-color border p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105 flex gap-2 items-center justify-between">
              <div className='text:xl  font-semibold'>
                <p>Daily Profit Rate </p>
                <p>0.73 %</p>
              </div>
              <div className=' text:xl font-semibold'>
                <FaBusinessTime className='inline text-2xl md:text-4xl' />
              </div>
            </div>
            <div className="background-color border p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105 flex gap-2 items-center justify-between">
              <div className='text:xl  font-semibold'>
                <p>Trade Profit Income </p>
                <p>$ {(auth.userData?.totalIncome - auth.userData?.deposite - auth.userData?.totalWithrawal ?? 0).toFixed(2)}</p>
              </div>
              <div className=' text:xl font-semibold'>
                <GiTakeMyMoney className='inline text-2xl md:text-4xl' />
              </div>
            </div>

            {/* Third Card with Search Field */}

            <div className="background-color border p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105 flex gap-5 items-center justify-between">
              <div className='text:xl  font-semibold'>
                <p>Referral Income</p>
                <p>$ {auth.userData?.referralIncome ?? '0'}</p>
              </div>
              <div className=' text:xl font-semibold'>
                <GiReceiveMoney className='inline text-2xl md:text-4xl' />
              </div>
            </div>


            
            {/* Seven Card with Search Field */}
            <div className="background-color border p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105 flex gap-5 items-center justify-between">
              <div className='text:xl  font-semibold'>
                <p>Total Balance </p>
                <p>$ {auth.userData?.totalIncome - auth.userData?.totalWithrawal ?? 'N/A'}</p>
              </div>
              <div className=' text:xl font-semibold'>
                <GiMoneyStack className='inline text-2xl md:text-4xl' />
              </div>
            </div>


            {/* Eleven Card with Search Field */}
            <div className="background-color border p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105 flex gap-5 items-center justify-between">
              <div className='text:xl  font-semibold'>
                <p>Total Withdrawal</p>
                <p>$ {auth.userData?.totalWithrawal ?? '0'}</p>
              </div>
              <div className=' text:xl font-semibold'>
                <FaMoneyBillWave className='inline text-2xl md:text-4xl' />
              </div>
            </div>

            {/* Tweleve Card with Search Field */}
            <div className="background-color border p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105 flex gap-2 items-center justify-between">
              <div className='text:xl  font-semibold'>
                <p>Withdrawable Balance </p>
                <p>$ {(
    (
      (auth.userData?.totalIncome ?? 0) - 
      (auth.userData?.deposite ?? 0) - 
      (auth.userData?.totalWithrawal ?? 0)
    ) + parseInt(auth.userData?.rewardIncome ?? 0) + parseInt(auth.userData?.referralIncome ?? 0)
  ).toFixed(2)}</p>
              </div>
              <div className=' text:xl font-semibold'>
                <GiCash className='inline text-2xl md:text-4xl' />
              </div>
            </div>

          

          
            {/* sixteen Card with Search Field */}
            <div className="background-color border p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105 flex gap-5 items-center justify-between">
              <div className='text:xl  font-semibold'>
                <p>Total Business</p>
                <p>$ {auth.userData?.totalDirectBusiness ?? '0'}</p>
              </div>
              <div className=' text:xl font-semibold'>
                <FaBusinessTime className='inline text-2xl md:text-4xl' />
              </div>
            </div>

            {/* seventeen Card with Search Field */}
            {/* <div className="background-color border p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105 flex gap-5 items-center justify-between">
              <div className='text:xl  font-semibold'>
                <p>Rewards / Bonus Section </p>
                <p>$ {auth.userData?.rewardIncome ?? 'N/A'}</p>
              </div>
              <div className=' text:xl font-semibold'>
                <TbAwardFilled className='inline text-2xl md:text-4xl' />
              </div>
            </div> */}

          </div>
        </div>
      </div>
    </>
  )
}

export default PracHome;