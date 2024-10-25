import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AdminNav from './dashboard/AdminNav';
import AdminSidebar from './dashboard/AdminSidebar';

export default function UserData() {
  const [data, setData] = useState([]);

  async function getProfile() {
    try {
      let result = await axios.get('https://filixo.com/api/getUser');
      if(result){
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
  // const handleDelete = async (id) => {
  //   let flag = confirm("Are you Sure to Delete")
  //   if(flag){
  //    await axios.delete(`https://filixo.com/shop/deleteProduct/${id}`);
  //    getProfile()
  //   }
  // };
// console.log(data)
  return (
    <>
    <AdminNav/>
    <AdminSidebar/>
    <div className='absolute flex flex-col items-center w-[80%] left-[20%] top-20'>
      
      <div className="h-auto w-full rounded-lg bg-pink-100">
      <h1 className="text-3xl font-bold mb-6 text-center">Client List</h1>
      <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-gray-200 font-bold text-left">No.</th>
            <th className="py-2 px-4 bg-gray-200 font-bold text-left">First Name</th>
            <th className="py-2 px-4 bg-gray-200 font-bold text-left">Last Name</th>
            <th className="py-2 px-4 bg-gray-200 font-bold text-left">Email</th>
            <th className="py-2 px-4 bg-gray-200 font-bold text-left">Referral Email</th>
            <th className="py-2 px-4 bg-gray-200 font-bold text-left">Total Deposite</th>
            <th className="py-2 px-4 bg-gray-200 font-bold text-left">Total Income</th>
            <th className="py-2 px-4 bg-gray-200 font-bold text-left">Total Withrawal</th>
            <th className="py-2 px-4 bg-gray-200 font-bold text-left">Status</th>
            <th className="py-2 px-4 bg-gray-200 font-bold text-left">Edit</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product, index) => (
            <tr key={index} className="border-t border-gray-200">
              <td className="py-2 px-4">{index +1}</td>
              <td className="py-2 px-4">{product.first_name}</td>
              <td className="py-2 px-4">{product.last_name}</td>
              <td className="py-2 px-4">{product.email}</td>
              <td className="py-2 px-4">{product.sponsorEmail}</td>
              <td className="py-2 px-4">{product.deposite || 0} $</td>
              <td className="py-2 px-4">{product.totalIncome || 0} $</td>
              <td className="py-2 px-4">{product.totalWithrawal || 0} $</td>
              <td className="py-2 px-4">{product.status}</td>
              <td className="py-2 px-4">
                <div className="flex space-x-2">
                <Link
                        to={`/users/${product.id}`}
                        className="inline-block bg-blue-500 text-white text-xs font-bold px-4 py-2 rounded-md hover:bg-red-400 transition-transform duration-300 transform hover:scale-110"
                      >
                        Edit
                </Link>
                {/* <button
                        onClick={() => handleDelete(product.id)}
                        className="inline-block bg-red-500 text-white text-xs font-bold px-4 py-2 rounded-md hover:bg-red-400 transition-transform duration-300 transform hover:scale-110"
                      >
                        Delete
                </button> */}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      </div>
    </div>
    </>
  );
}
