import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AdminNav from './dashboard/AdminNav';
import AdminSidebar from './dashboard/AdminSidebar';

export default function WithrawalRequest() {
    const [data, setData] = useState([]);
    let [method, setMethod] = useState('USDT')
    let [update, setUpdate] = useState({})
    let [flag, setFlag] = useState(true)
    async function getProfile() {
        try {
            let result = await axios.get('https://actl.co.in/vishnu/getwithrawalRequest');
            //   console.log(result)
            if (result) {
                setData(result.data);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        getProfile();
    }, []); // Empty dependency array to fetch data only once

    // Handler functions
    const handleUpdate = async (id) => {
        let result = await axios.get('https://actl.co.in/vishnu/getwithrawalRequest');
        let final = result.data.filter(data => data.id == id)
        setUpdate(final[0])
        setFlag(false)
    };
  async  function submitupdate(id, method){
        if(method == 'USDT'){
            await axios.put(`https://actl.co.in/vishnu/updatewithrawalRequest/${id}`, {depositeAmount: update.depositeAmount, transactionDate: update.transactionDate, transactionStatus:update.transactionStatus})
        window.location.reload()
        }else{
            // console.log(update)
            await axios.put(`https://actl.co.in/vishnu/updatewithrawalRequest/${id}`, {depositeAmount:update.depositeAmount, transactionDate: update.transactionDate, transactionStatus:update.transactionStatus})
        window.location.reload()
        }
    }
    return (
        <>
            <AdminNav />
            <AdminSidebar />
            {flag ? <div className='absolute flex flex-col items-center w-[80%] left-[20%] top-20'>
                <h1 className='my-2 text-xl font-semibold'>Select Withrawal Method</h1>
                <select name="depositeMethod" value={method} onChange={(e) => setMethod(e.target.value)} id="" className='py-2 px-6 mb-5 bg-blue-700 text-white rounded-xl'>
                    <option value="Indian Cash">Indian Cash</option>
                    <option value="USDT">USDT</option>
                </select>
                <div className="h-auto w-full rounded-lg bg-pink-100">
                    <h1 className="text-3xl font-bold mb-6 text-center">Withrawal List</h1>
                    {method == 'Indian Cash' && <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 bg-gray-200 font-bold text-left">No.</th>
                                    <th className="py-2 px-4 bg-gray-200 font-bold text-left">Amount</th>
                                    <th className="py-2 px-4 bg-gray-200 font-bold text-left">Date</th>
                                    <th className="py-2 px-4 bg-gray-200 font-bold text-left">Email</th>
                                    <th className="py-2 px-4 bg-gray-200 font-bold text-left">Status</th>
                                    <th className="py-2 px-4 bg-gray-200 font-bold text-left">Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.filter(data => data.withrawalMethod == 'Indian Cash').map((data, index) => (
                                    <tr key={index} className="border-t border-gray-200">
                                        <td className="py-2 px-4">{index + 1}</td>
                                        <td className="py-2 px-4">{data.withrawalAmount*80}</td>
                                        <td className="py-2 px-4">{data.transactionDate}</td>
                                        <td className="py-2 px-4">{data.email}</td>
                                        <td className="py-2 px-4">{data.transactionStatus}</td>
                                        <td className="py-2 px-4">
                                            <div className="flex space-x-2">

                                                <button
                                                    onClick={() => handleUpdate(data.id)}
                                                    className="inline-block bg-red-500 text-white text-xs font-bold px-4 py-2 rounded-md hover:bg-red-400 transition-transform duration-300 transform hover:scale-110"
                                                >
                                                    Edit
                                                </button>

                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>}
                    {method == 'USDT' && <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 bg-gray-200 font-bold text-left">No.</th>
                                    <th className="py-2 px-4 bg-gray-200 font-bold text-left">Amount</th>
                                    <th className="py-2 px-4 bg-gray-200 font-bold text-left">Date</th>
                                    <th className="py-2 px-4 bg-gray-200 font-bold text-left">Email</th>
                                    <th className="py-2 px-4 bg-gray-200 font-bold text-left">Transaction Id</th>
                                    <th className="py-2 px-4 bg-gray-200 font-bold text-left">Status</th>
                                    <th className="py-2 px-4 bg-gray-200 font-bold text-left">Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.filter(data => data.withrawalMethod == 'USDT').map((data, index) => (
                                    <tr key={index} className="border-t border-gray-200">
                                        <td className="py-2 px-4">{index + 1}</td>
                                        <td className="py-2 px-4">{data.withrawalAmount}$</td>
                                        <td className="py-2 px-4">{data.transactionDate}</td>
                                        <td className="py-2 px-4">{data.email}</td>
                                        <td className="py-2 px-4">{data.transactionId}</td>
                                        <td className="py-2 px-4">{data.transactionStatus}</td>
                                        <td className="py-2 px-4">
                                            <div className="flex space-x-2">

                                                <button
                                                    onClick={() => handleUpdate(data.id)}
                                                    className="inline-block bg-red-500 text-white text-xs font-bold px-4 py-2 rounded-md hover:bg-red-400 transition-transform duration-300 transform hover:scale-110"
                                                >
                                                    Edit
                                                </button>

                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>}
                </div>
            </div> : <div className='absolute flex flex-col items-center w-[80%] left-[20%] top-20'>
                <h1 className='my-2 text-xl font-semibold'>Update Withrawal Method</h1>
                <div className='w-3/4 p-2 border-2 border-black rounded-lg flex flex-col items-center gap-5'>
                    <div className='flex gap-3 text-xl'>
                        <h1 >Deposite Amount in $:-</h1>
                        {update.withrawalMethod == 'USDT' ?<input type="text" value={update.withrawalAmount} onChange={(e) => setUpdate({...update, withrawalAmount: e.target.value})} className='border-2 border-blue-800 rounded px-2' /> :<input type="text" value={update.withrawalAmount} onChange={(e) => setUpdate({...update, withrawalAmount: e.target.value})} className='border-2 border-blue-800 rounded px-2' />}
                    </div>
                    <div className='flex gap-3 text-xl text-gray-400'>
                        <h1 >Date:-</h1>
                        <input
                            type="text"
                            value={update.transactionDate}
                           
                            className='border-2 border-gray-400 rounded px-2'
                        />
                    </div>
                    <div className='flex gap-3 text-xl'>
                        <h1 >Change Transaction Date:-</h1>
                        <input
                            type="date"
                            onChange={(e)=>setUpdate({...update, transactionDate:e.target.value})}
                            className='border-2 border-blue-800 rounded px-2'
                        />
                    </div>
                <div className='flex gap-3 text-xl'>
                        <h1 >Transaction Status:-</h1>
                <select value={update.transactionStatus} onChange={(e) => setUpdate({...update, transactionStatus: e.target.value})} id="" className='border-2 border-blue-800 rounded px-2'>
                    <option>pending</option>
                    <option>confirm</option>
                </select>
                </div>
                <button className='px-4 py-1 bg-black rounded-lg text-white font-semibold' onClick={()=>submitupdate(update.id,update.withrawalMethod)}>Update</button>
                </div>
            </div>}
        </>
    );
}
