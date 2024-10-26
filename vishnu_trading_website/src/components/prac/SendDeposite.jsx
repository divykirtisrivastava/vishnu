"use client"
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
// import qr from '../../../public/paymentW.jpeg'
import UserContext from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
const SendDeposite = () => {
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
        email: auth.userData.email || '',
        depositeMethod: '',
        currency: '',
        depositeAmount: '',
        selectNetwork: '',
        transactionImage: null,
        transactionId: '',
        transactionDate: new Date().toLocaleDateString('en-CA')
    })
    useEffect(() => {
        setDepositeData({ ...depositeData, email: auth.userData.email })
    }, [auth])

    function handleFlag() {
        if (depositeData.depositeAmount < 50 || depositeData.depositeAmount > 350) {
            alert("you can enter amount between $50 and $350")
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
        console.log(depositeData)
        if (parseInt(depositeData.depositeAmount) > 1599) {
            if (enteredOTP === generatedOTP) {
                await axios.post(`https:///actl.co.in/vishnu/depositeRequest`, depositeData)
                alert("Your Request is Submitted")
                router('/dashboard')
            } else {
                setOtpError('Fill OTP')
                alert("Please Verify OTP")
            }
        } else {
            alert("you can enter 1,28,000 INR or above")
        }
    }
    async function handleUsdt() {
        // if (auth.userData.status == 'verified') {
            if ( depositeData.transactionImage && depositeData.transactionId) {
                await axios.post(`https:///actl.co.in/vishnu/depositeRequest`, depositeData,{
                    headers:{
                        'Content-Type':'multipart/form-data'
                    }
                })
                alert("Your Request is Submitted")
                router('/dashboard') 
            } else {
                setOtpError('Fill OTP')
                alert("Please Fill all Fields")
            }
        // } else {
        //     alert("you are not eligible to deposite")
        // }
    }
    const textToCopy = 'TN37JKrtJ3cGiyEyaEMPnoHTwkt';
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
    setDepositeData({ ...depositeData, depositeAmount: usdValue });
}
    return (
        <div className="flex justify-center items-center min-h-screen background-color md:border rounded-xl px-2 md:p-4 mt-20 md:mt-0">
            {flag ? <div className="background-color md:border  text-white px-1 md:p-8 rounded-lg shadow-lg w-full">
                <h2 className="text-2xl font-semibold mb-6">Deposite Method</h2>

                {/* Transaction Type Dropdown */}
                <select
                    className="w-full bg-gray-100 text-black p-3 border border-gray-600 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={depositeData.depositeMethod}
                    onChange={(e) => setDepositeData({ ...depositeData, depositeMethod: e.target.value })}
                >
                    <option>Select Transaction Type</option>
                    {/* <option>Indian Cash</option> */}
                    <option>USDT</option>
                </select>

                {/* INDIAN CASE Form */}
                {depositeData.depositeMethod === 'Indian Cash' && (
                    <div className="bg-gray-700 p-6 rounded mb-4">
                        <h3 className="text-xl mb-4 text-red-500">*Important to know</h3>
                        <p className="text-xl mb-2">*The Minimum deposit is $50 and Maximum deposite is $350. All deposits below the limit will be lost.</p>
                        <p className="text-xl mb-2 text-red-500">*A 15% extra deposit is required upfront for deduction charges, and no additional fees will be charged later when withdrawing, this amount will
                            already be deducted.</p>
                        <p className="text-xl mb-2 ">*Carefully check the address. The transaction well be lost if the address is incorrect.</p>
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
                                {depositeData.depositeAmount}
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
                {depositeData.depositeMethod === 'USDT' && (
                    <div className="bg-gray-700 p-6 rounded mb-4">
                        <h3 className="text-xl mb-4 text-red-500">*Important to know</h3>
                        <p className="text-xl mb-2">*The Minimum deposit is $50 and Maximum deposite is $350. All deposits below the limit will be lost.</p>
                        
                        <p className="text-xl mb-2 ">*Carefully check the address. The transaction well be lost if the address is incorrect.</p>




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
                                value={depositeData.depositeAmount}
                                onChange={(e) => setDepositeData({ ...depositeData, depositeAmount: e.target.value })}
                            />
                        </div>
                        {/* Confirm Button */}
                        <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded transition duration-300 ease-in-out" onClick={handleFlag}>
                            Confirm Your Request
                        </button>

                    </div>
                )}
            </div> :
                <div className=" p-6 rounded mb-4 w-full">
                     <h2 className="text-2xl font-semibold mb-6">Deposite Method</h2>
                    <div className='w-full flex gap-3 flex-col md:flex-row'>
                        <div className='w-full md:w-1/2 border-white border-2 rounded-lg py-2 px-4'>
                            <h3 className="text-xl mb-4 text-white">Scan this QR Code with the camera on your phone</h3>
                            <img src="" alt="" width={200} height={100} />
                        </div>
                        <div className='w-full md:w-1/2 border-white border-2 rounded-lg py-2 px-4'>
                            <h3 className="text-xl mb-4 text-white">Transfer On Below Address TRC20</h3>
                            <div className='w-full h-10  bg-gray-100 rounded-lg flex items-center text-black text-xl font-bold justify-between overflow-hidden border'>
                                <p className='pl-1 overflow-hidden'>{textToCopy}</p>
                                <button onClick={handleCopy} className='bg-black p-5 rounded-lg text-white cursor-pointer'>Copy</button>
                            </div>
                        </div>
                    </div>
                    <div className="my-4">
                        <label className="block text-xl font-medium mb-2">Transaction Image</label>
                        <input
                            type="file"
                            name='transactionImage'
                            onChange={handleImage}
                            className="w-full p-3 bg-gray-900 text-white border border-gray-600 rounded"
                            required
                        />
                    </div>
                    <div className="my-4">
                        <label className="block text-xl font-medium mb-2">Transaction Id</label>
                        <input
                            type="text"
                            value={depositeData.transactionId}
                            placeholder='Enter transactionId'
                            onChange={(e) => setDepositeData({ ...depositeData, transactionId: e.target.value })}
                            className="w-full p-3 bg-gray-900 text-white border border-gray-600 rounded"
                            required />
                    </div>

                   
                    {/* Confirm Button */}
                    <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded transition duration-300 ease-in-out" onClick={handleUsdt}>
                        Confirm Your Request
                    </button>

                </div>}
        </div>
    );
};

export default SendDeposite;