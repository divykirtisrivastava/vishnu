"use client"
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
const WithrowSend = () => {
    let { auth } = useContext(UserContext)
    const [loading, setLoading] = useState(false);
    const [otploading, setotpLoading] = useState(false);
    const [generatedOTP, setGeneratedOTP] = useState('343');
    const [enteredOTP, setEnteredOTP] = useState('');
    const [otperror, setOtpError] = useState('');
    const [flag, setFlag] = useState(true);
    const [inp, setInp] = useState('');
    let router = useNavigate()
    // Function to generate a 6-digit OTP
    const generateOTP = () => {
        const otp = Math.floor(100000 + Math.random() * 999999).toString();
        setGeneratedOTP(otp);
        return otp;
    };

    let [depositeData, setDepositeData] = useState({
        email: auth.userData.email,
        withrawalMethod: '',
        currency: '',
        withrawalAmount: '',
        selectNetwork: '',
        transactionId: '',
        transactionDate: new Date().toLocaleDateString('en-CA')
    })
    useEffect(() => {
        setDepositeData({ ...depositeData, email: auth.userData.email })
    }, [auth])

    function handleFlag() {
        if (depositeData.depositeAmount < 1599) {
            alert("you can enter 1600 or above")
        } else {
            setFlag(false)
        }
    }
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
            } finally {
                setotpLoading(false)
            }
        } else {
            alert("Please Enter Email");
        }
    };
    const handleImage = (e) => {
        const { name, files } = e.target;
        if (files) {
            setDepositeData((prev) => ({ ...prev, transactionImage: files[0] }));
        }
    };

    async function handleCashSubmit() {
        if(auth.userData.status == 'verified'){
            if (parseInt(depositeData.withrawalAmount) <= (auth.userData.totalIncome - auth.userData.deposite )) {
                if (enteredOTP === generatedOTP) {
                    await axios.post(`https:///actl.co.in/vishnu/withrawalRequest`, depositeData)
                    alert("Your Request is Submitted")
                    router('/dashboard')
                } else {
                    setOtpError('Fill OTP')
                    alert("Please Verify OTP")
                }
            } else {
                alert("you can only rise request your Withdrawable Balance")
            }
        }else{
            alert("you don't have varified account")
        }
    }
    async function handleUsdt() {
       if(auth.userData.status == 'verified'){
        if (parseInt(depositeData.withrawalAmount) <= (auth.userData.totalIncome - auth.userData.deposite )) {
            if (enteredOTP === generatedOTP && depositeData.transactionId) {
                await axios.post(`https:///actl.co.in/vishnu/withrawalRequest`, depositeData)
                alert("Your Request is Submitted")
                router('/dashboard') 
            } else {
                setOtpError('Fill OTP and transactionId')
                alert("Please Fill all Fields")
            }
        } else {
            alert("you can only rise request your Withdrawable Balance")
        }
       }else{
        alert("you don't have varified account")
       }
    }
    const textToCopy = 'TN37JKrtJ3cGiyEyam3vFh7AEMPnoHTwkt';
function handleCopy(){
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert('Copied to clipboard!');
      }).catch(err => {
        console.error('Failed to copy: ', err);
      });
}
function handleinpchange(e){
    const inrValue = e.target.value;
    setInp(inrValue);

    // Convert INR to USD and update USD input
    const usdValue = (parseFloat(inrValue) / 80).toFixed(2);
    setDepositeData({ ...depositeData, withrawalAmount: usdValue });
}
    return (
        <div className="flex justify-center items-center min-h-screen background-color md:border rounded-xl px-1 md:p-4 mt-20 md:mt-0">
           <div className="background-color md:border  text-white px-2 md:p-8 rounded-lg shadow-lg w-full">
                <h2 className="text-2xl font-semibold mb-6">Withrawal Method</h2>

                {/* Transaction Type Dropdown */}
                <select
                    className="w-full bg-gray-900 text-black p-3 border border-gray-600 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={depositeData.withrawalMethod}
                    onChange={(e) => setDepositeData({ ...depositeData, withrawalMethod: e.target.value })}
                >
                    <option>Select Transaction Type</option>
                    <option>Indian Cash</option>
                    <option>USDT</option>
                </select>

                {/* INDIAN CASE Form */}
                {depositeData.withrawalMethod === 'Indian Cash' && (
                    <div className="bg-gray-700 p-6 rounded mb-4">
                        <h3 className="text-xl mb-4 text-red-500">*Important to know</h3>
                        <p className="text mb-2">*The first withdrawal can only be made after 1 month from the initial deposit.</p>
                        <p className="text mb-2">*Withdrawals may sometimes be delayed due to server issues, but will be processed within 24 hours, up to a maximum of 48 hours or 3
                        business days.</p>
                        <p className="text mb-2">*The amount deposited must stay in the account for a minimum of 1 month before any withdrawals are allowed</p>
                        <p className="text mb-8 ">*Only one withdrawal is allowed per month.</p>
                        <div className="mb-4">
                            <label className="block text-xl font-medium mb-2">Currency</label>
                            <select
                                className="w-full p-3 bg-gray-900 text-white border border-gray-600 rounded"
                                value={depositeData.currency}
                                onChange={(e) => setDepositeData({ ...depositeData, currency: e.target.value })}
                            >
                                <option>INDIAN CASH</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Amount in INR</label>
                            <input
                                type="tel"
                                value={inp}
                                placeholder='Enter Amount in INR'
                                onChange={handleinpchange}
                                className="w-full p-3 bg-gray-900 text-white border border-gray-600 rounded" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Amount in USD</label>
                            <div className="w-full p-3 bg-gray-900 text-white border border-gray-600 rounded">
                                {depositeData.withrawalAmount}
                            </div>
                        </div>
                        <div className="mb-4 flex flex-col">
                            <label className="block text-sm font-medium mb-2">Enter OTP</label>
                            <input
                                type="text"
                                placeholder="Enter OTP"
                                value={enteredOTP}
                                onChange={(e) => setEnteredOTP(e.target.value)}
                                className="w-full p-3 bg-gray-900 text-white border border-gray-600 rounded"
                            />
                            {otperror && <span className='text-red-700'>*{otperror}</span>}

                            <button type="button" onClick={handleSendOTP} disabled={otploading} className="mt-3 bg-black text-white p-2 rounded-lg">{otploading ? 'Sending..' : 'Send OTP'}</button>
                        </div>
                        {/* Confirm Button */}
                        <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded transition duration-300 ease-in-out" onClick={handleCashSubmit}>
                            Confirm Your Request
                        </button>
                    </div>
                )}

                {/* USDT CASE Form */}
                {depositeData.withrawalMethod === 'USDT' && (
                    <div className="bg-gray-700 p-6 rounded mb-4">
                        <h3 className="text-xl mb-4 text-red-500">*Important to know</h3>
                        <p className="text mb-2">*The first withdrawal can only be made after 1 month from the initial deposit.</p>
                        <p className="text mb-2">*Withdrawals may sometimes be delayed due to server issues, but will be processed within 24 hours, up to a maximum of 48 hours or 3
                        business days.</p>
                        <p className="text mb-2">*The amount deposited must stay in the account for a minimum of 1 month before any withdrawals are allowed</p>
                        <p className="text mb-8 ">*Only one withdrawal is allowed per month.</p>

                        <div className="my-4">
                            <label className="block text-xl font-medium mb-2">Select Network</label>
                            <select
                                className="w-full p-3 bg-gray-900 text-white border border-gray-600 rounded"
                                value={depositeData.selectNetwork}
                                onChange={(e) => setDepositeData({ ...depositeData, selectNetwork: e.target.value })}
                            >
                                <option>USDT Tether Tron (TRC-20)</option>
                                {/* <option value="method2">USDT Tether Ethereum(ERC-20)</option>
                                    <option value="method3">USDT Tether BNB Smart Chain(BEP-20)</option> */}
                                {/* Add more options as needed */}
                            </select>
                        </div>


                        <div className="mb-4">
                            <label className="block text-xl font-medium mb-2">Currency</label>
                            <select
                                className="w-full p-3 bg-gray-900 text-white border border-gray-600 rounded"
                                value={depositeData.currency}
                                onChange={(e) => setDepositeData({ ...depositeData, currency: e.target.value })}
                            >
                                <option>USDT</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-xl font-medium mb-2">Amount in USD </label>
                            <input
                                type="number"
                                placeholder="amount in usd"
                                className="w-full p-3 bg-gray-900 text-white border border-gray-600 rounded"
                                value={depositeData.withrawalAmount}
                                onChange={(e) => setDepositeData({ ...depositeData, withrawalAmount: e.target.value })}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-xl font-medium mb-2">Transaction Id</label>
                            <input
                                type="text"
                                placeholder="Enter Your Transaction Id"
                                className="w-full p-3 bg-gray-900 text-white border border-gray-600 rounded"
                                value={depositeData.transactionId}
                                onChange={(e) => setDepositeData({ ...depositeData, transactionId: e.target.value })}
                            />
                        </div>
                        {/* Confirm Button */}
                        <div className="mb-4 flex flex-col">
                            <label className="block text-sm font-medium mb-2">Enter OTP</label>
                            <input
                                type="text"
                                placeholder="Enter OTP"
                                value={enteredOTP}
                                onChange={(e) => setEnteredOTP(e.target.value)}
                                className="w-full p-3 bg-gray-900 text-white border border-gray-600 rounded"
                            />
                            {otperror && <span className='text-red-700'>*{otperror}</span>}

                            <button type="button" onClick={handleSendOTP} disabled={otploading} className="mt-3 bg-black text-white p-2 rounded-lg">{otploading ? 'Sending..' : 'Send OTP'}</button>
                        </div>
                        {/* Confirm Button */}
                        <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded transition duration-300 ease-in-out" onClick={handleUsdt}>
                            Confirm Your Request
                        </button>

                    </div>
                )}
            </div> 
        </div>
    );
};

export default WithrowSend;