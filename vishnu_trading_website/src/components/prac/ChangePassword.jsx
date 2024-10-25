"use client"
import axios from 'axios';
import React, { useContext, useState } from 'react';
import UserContext from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

const ChangePassword = () => {
  const { auth, setAuth } = useContext(UserContext);
  const router = useNavigate();

  const [otploading, setotpLoading] = useState(false);
  const [oldpass, setOldpass] = useState('');
  const [newpass, setNewpass] = useState('');
  const [confirmpass, setConfirmpass] = useState('');
  const [generatedOTP, setGeneratedOTP] = useState('343');
  const [enteredOTP, setEnteredOTP] = useState('');
  const generateOTP = () => {
    const otp = Math.floor(100000 + Math.random() * 999999).toString();
    setGeneratedOTP(otp);
    return otp;
  };
   // Handle OTP submission
   const handleSendOTP = async () => {
    let email = auth.userData.email;
    if (email) {
      const otp = generateOTP();

      try {
        setotpLoading(true)
        await axios.post('https:///actl.co.in/vishnu/verifyotp', { email, otp });
        alert('OTP has been sent to your email');
      } catch (err) {
        console.error('Error sending OTP:', err);
        alert('Failed to send OTP');
      }finally{
        setotpLoading(false)
      }
    } else {
      alert("Please Enter Email");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(enteredOTP === generatedOTP){
      if(auth.userData && oldpass == auth.userData.password && newpass == confirmpass){
        await axios.put(`https:///actl.co.in/vishnu/updatepassword/${auth.userData.email}`,{
          "password":newpass
        })
      alert('Password changed successfully!');
      localStorage.removeItem('token');
        setAuth({ token: null, userData: null });
        router('/login'); // Redirect after logout
      }else{
        alert('Old password is incorrect')
      }
    }else{
      alert('OTP Not Verified..')
    }
  };

  return (
    <div className="w-[95%] md:w-[80%] h-screen m-auto flex items-center rounded-xl justify-center background-color border">
      <div className="w-full p-10 rounded-lg shadow-lg h-3/4">
        <h2 className="text-xl font-semibold text-white mb-6 text-center">Change Password</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col space-y-1">
            <label htmlFor="oldPassword" className="text-white">Old Password</label>
            <input
              type="password"
              id="oldPassword"
              placeholder="Old Password"
              onChange={(e)=>setOldpass(e.target.value)}
              className="p-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="newPassword" className="text-white">New Password</label>
            <input
              type="password"
              id="newPassword"
              placeholder="New Password"
              onChange={(e)=>setNewpass(e.target.value)}
              className="p-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="confirmPassword" className="text-white">Re-Enter New Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Re-Enter New Password"
              onChange={(e)=>setConfirmpass(e.target.value)}
              className="p-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="otp" className="text-white">Enter OTP</label>
            <div className="flex space-x-2">
              <input
                type="text"
                id="otp"
                placeholder="Please enter OTP"
                className="p-2 flex-grow bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e)=>setEnteredOTP(e.target.value)}
                required
              />
              <button
                type="button"
                className="bg-black text-white px-4 py-2 rounded-md"
                onClick={handleSendOTP}
                disabled={otploading}

              >
               {otploading ? 'Sending..': 'Send OTP'}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;