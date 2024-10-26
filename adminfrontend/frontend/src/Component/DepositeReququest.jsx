import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AdminNav from './dashboard/AdminNav';
import AdminSidebar from './dashboard/AdminSidebar';

export default function DepositeReququest() {
    const [data, setData] = useState([]);
    let [method, setMethod] = useState('USDT')
    let [update, setUpdate] = useState({})
    let [flag, setFlag] = useState(true)
    async function getProfile() {
        try {
            let result = await axios.get('https://actl.co.in/vishnu/getdepositeRequest');
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
        let result = await axios.get('https://actl.co.in/vishnu/getdepositeRequest');
        let final = result.data.filter(data => data.id == id)
        setUpdate(final[0])
        setFlag(false)
    };
  async  function submitupdate(id, method){
        if(method == 'USDT'){
            await axios.put(`https://actl.co.in/vishnu/updatedepositeRequest/${id}`, {depositeAmount: update.depositeAmount, transactionDate: update.transactionDate, transactionStatus:update.transactionStatus})
        window.location.reload()
        }else{
            // console.log(update)
            await axios.put(`https://actl.co.in/vishnu/updatedepositeRequest/${id}`, {depositeAmount:update.depositeAmount, transactionDate: update.transactionDate, transactionStatus:update.transactionStatus})
        window.location.reload()
        }
    }
    return (
        <>
            <AdminNav />
            <AdminSidebar />
            {flag ? <div className='absolute flex flex-col items-center w-[80%] left-[20%] top-20'>
                <h1 className='my-2 text-xl font-semibold'>Select Deposite Method</h1>
                <select name="depositeMethod" value={method} onChange={(e) => setMethod(e.target.value)} id="" className='py-2 px-6 mb-5 bg-blue-700 text-white rounded-xl'>
                    <option value="Indian Cash">Indian Cash</option>
                    <option value="USDT">USDT</option>
                </select>
                <div className="h-auto w-full rounded-lg bg-pink-100">
                    <h1 className="text-3xl font-bold mb-6 text-center">Deposite List</h1>
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
                                {data.filter(data => data.depositeMethod == 'Indian Cash').map((data, index) => (
                                    <tr key={index} className="border-t border-gray-200">
                                        <td className="py-2 px-4">{index + 1}</td>
                                        <td className="py-2 px-4">{data.depositeAmount*80}</td>
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
                                    <th className="py-2 px-4 bg-gray-200 font-bold text-left">Image</th>
                                    <th className="py-2 px-4 bg-gray-200 font-bold text-left">Date</th>
                                    <th className="py-2 px-4 bg-gray-200 font-bold text-left">Email</th>
                                    <th className="py-2 px-4 bg-gray-200 font-bold text-left">Transaction Id</th>
                                    <th className="py-2 px-4 bg-gray-200 font-bold text-left">Status</th>
                                    <th className="py-2 px-4 bg-gray-200 font-bold text-left">Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.filter(data => data.depositeMethod == 'USDT').map((data, index) => (
                                    <tr key={index} className="border-t border-gray-200">
                                        <td className="py-2 px-4">{index + 1}</td>
                                        <td className="py-2 px-4">{data.depositeAmount}$</td>
                                        {/* <td className="py-2 px-4">{data.dailyProfitPercentage}%</td> */}
                                        <td className="py-2 px-4"><img src={`https://actl.co.in/vishnu_uploads/${data.transactionImage}`} alt="" className='w-40 h-16' /></td>
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
                <h1 className='my-2 text-xl font-semibold'>Update Deposite Method</h1>
                <div className='w-3/4 p-2 border-2 border-black rounded-lg flex flex-col items-center gap-5'>
                    <div className='flex gap-3 text-xl'>
                        <h1 >Deposite Amount in $:-</h1>
                        {update.depositeMethod == 'USDT' ?<input type="text" value={update.depositeAmount} onChange={(e) => setUpdate({...update, depositeAmount: e.target.value})} className='border-2 border-blue-800 rounded px-2' /> :<input type="text" value={update.depositeAmount} onChange={(e) => setUpdate({...update, depositeAmount: e.target.value})} className='border-2 border-blue-800 rounded px-2' />}
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
                    {/* <div className='flex gap-3 text-xl'>
                        <h1 >Daily Profit Percentage:-</h1>
                        <input
                            type="tel"
                            onChange={(e)=>setUpdate({...update, dailyProfitPercentage:e.target.value})}
                            className='border-2 border-blue-800 rounded px-2'
                        />
                    </div> */}
                <div className='flex gap-3 text-xl'>
                        <h1 >Transaction Status:-</h1>
                <select value={update.transactionStatus} onChange={(e) => setUpdate({...update, transactionStatus: e.target.value})} id="" className='border-2 border-blue-800 rounded px-2'>
                    <option>pending</option>
                    <option>confirm</option>
                </select>
                </div>
                <button className='px-4 py-1 bg-black rounded-lg text-white font-semibold' onClick={()=>submitupdate(update.id,update.depositeMethod)}>Update</button>
                </div>
            </div>}
        </>
    );
}
// server {
//     server_name filixo.com  www.filixo.com;

//     location / {
//         return 301 https://$server_name$request_uri;
//     }

//     listen 443 ssl; # managed by Certbot
    // ssl_certificate /etc/letsencrypt/live/filixo.com/fullchain.pem; # managed by Certbot
    // ssl_certificate_key /etc/letsencrypt/live/filixo.com/privkey.pem; # managed by Certbot
    // include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    // ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

// location / {
//         proxy_pass http://localhost:3000;  # Use one backend port
//         proxy_set_header Host $host;
//         proxy_set_header X-Real-IP $remote_addr;
//         proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
//         proxy_set_header X-Forwarded-Proto $scheme;
//     }
// }
// server {
//     if ($host = www.filixo.com) {
//         return 301 https://$host$request_uri;
//     } # managed by Certbot


//     if ($host = filixo.com) {
//         return 301 https://$host$request_uri;
//     } # managed by Certbot


//     listen 80;
//     server_name filixo.com  www.filixo.com;
//     return 404; # managed by Certbot




// }