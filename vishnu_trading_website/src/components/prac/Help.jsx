"use client"
import { Input } from '../../components/designComponents/Input';
import { Label } from '../../components/designComponents/Label';
import { cn } from '../../lib/utils';
import axios from 'axios';
import React, { useState } from 'react'
import { BiMailSend, BiPhone } from 'react-icons/bi';
import { BsMailbox } from 'react-icons/bs';
import { MdCallToAction } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

export default function Help() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
  let [loading, setLoading] = useState(false)
let router = useNavigate()
  async function handleSubmit(e) {
    e.preventDefault()
    // console.log(email)
    await axios.post('https:///actl.co.in/vishnu/contact',{
      "email":email,
      "phone":phone,
      "name":name,
      "message":message,
    })
    router('/dashboard')
  }
  return (
    <div className='mt-20 flex flex-col items-center justify-center gap-12'>
        <div className='flex flex-col items-start w-1/2'>
            <h1 className='text-4xl font-bold'>Help Center</h1>
            <p className='mt-5'>If you have any query, please contact on below detail:-</p>
            {/* <div className='flex gap-2 items-center mt-8'>
            <div className='w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center'>
                <BiPhone size={50}/>
            </div>
            <h1 className='text-2xl'>+91000000000</h1>
            </div> */}
            <div className='flex gap-2 items-center mt-8'>
            <div className='w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center'>
                <BiMailSend size={35}/>
            </div>
            <h1 className='text-2xl'>support@nobletradify.com</h1>
            </div>
        </div>
    <div className="w-1/2 rounded md:rounded-2xl p-4 md:p-8 shadow-input bg-gray-400 text-white dark:bg-black">
    <h2 className="font-bold text-2xl tracking-wider text-center text-white dark:text-neutral-200">
      Connect to NOBLETRADIFY.COM
    </h2>

    {error && <div className="text-red-500">{error}</div>}

    <form className="my-8" onSubmit={handleSubmit}>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          placeholder="Enter Full Name"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          placeholder="Enter Email Address"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          placeholder="Enter Phone Number"
          type="tel"
          onChange={(e) => setPhone(e.target.value)}
        />
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="email">Drop Message</Label>
        <Input
          id="message"
          placeholder="Enter Message"
          type="text"
          onChange={(e) => setMessage(e.target.value)}
        />
      </LabelInputContainer>

      <button
        className="relative group/btn bg-blue-500 w-full text-white rounded-md h-10 font-medium"
        type="submit"
        disabled={loading}
      >
        {loading ? 'Processing..' : 'Submit' }
        <BottomGradient />
      </button>
    </form>
  </div>
    </div>
  )
}
const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>;
};