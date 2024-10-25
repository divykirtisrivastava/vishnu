import React from 'react';
import { FaFacebookF } from 'react-icons/fa6';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaSquareInstagram } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import logo from '../assets/trustt.png';

export default function Footer() {
  return (
    <div className='w-full h-auto bg-black p-8 md:p-16'>
      <div className='flex flex-col md:flex-row justify-center items-start text-white pt-10 md:pt-20'>
        <div className='w-full md:w-1/3 mb-10 md:mb-0'>
          {/* <h1 className='text-3xl'>Logo Here</h1> */}
          <img src={logo} alt="" className='w-44  h-36' />
          <p className='mt-2'>
            Join us at [Trust Bot] where we are committed to empowering the Forex and Commodity market with cutting-edge solutions and unwavering dedication to our customers.
          </p>
        </div>
        <div className='w-full md:w-1/3 pl-0 md:pl-20 mb-10 md:mb-0'>
          <h1 className='text-3xl font-bold mb-7 underline'>Useful Links</h1>
          <ul className='flex flex-col gap-3 text-lg md:text-xl'>
            <a href='' className='hover:underline cursor-pointer'>Home</a>
            <a href='/about' className='hover:underline cursor-pointer'>About Us</a>
            <a href='/contactus' className='hover:underline cursor-pointer'>Contact Us</a>
            <a href='/login' className='hover:underline cursor-pointer'>Login</a>
            <a href='/register' className='hover:underline cursor-pointer'>Register</a>
          </ul>
        </div>
        <div className='w-full md:w-1/3 text-3xl'>
          <h1 className='mb-3'>Follow Us on</h1>
          <div className='flex gap-4'>
            <FaFacebookF className='border p-2 text-5xl rounded-full cursor-pointer hover:bg-gray-700 transition duration-300' />
            <FaTwitter className='border p-2 text-5xl rounded-full cursor-pointer hover:bg-gray-700 transition duration-300' />
            <FaLinkedinIn className='border p-2 text-5xl rounded-full cursor-pointer hover:bg-gray-700 transition duration-300' />
            <FaSquareInstagram className='border p-2 text-5xl rounded-full cursor-pointer hover:bg-gray-700 transition duration-300' />
          </div>
        </div>
      </div>
      <div className='w-full h-[100px] mt-5'>
        <div className='border-t-2 border-dotted border-gray-600' />
        <p className='text-center text-white mt-3 text-sm'>© 2024 VIP TRAID. All rights reserved.</p>
      </div>
    </div>
  );
}
