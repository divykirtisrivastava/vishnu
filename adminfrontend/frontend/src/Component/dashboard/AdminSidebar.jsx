import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AdminSidebar() {
    const [isHomeOpen, setIsHomeOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('home'); // State to track active link
  let navigation = useNavigate()
    const toggleHomeDropdown = () => setIsHomeOpen(!isHomeOpen);
    const toggleContactDropdown = () => setIsContactOpen(!isContactOpen);
  
    const handleLinkClick = (linkName) => {
        setActiveLink(linkName); // Set active link when clicked
    };
function handlelogout(){
  navigation('/')
  window.location.reload()
}
    return (
      <>
        <div className='fixed mt-[60px] top-0 left-0 h-screen w-[20%] bg-gray-900 text-white transform -translate-x-64 transition-transform duration-300 ease-in-out md:fixed md:translate-x-0 md:w-64 md:flex md:flex-col'>
          <div id="sidebar" className="">
            <div className="flex items-center justify-between p-4 border-b border-gray-700 md:hidden">
              <h2 className="text-lg font-semibold">Admin Panel</h2>
              <button
                onClick={() => document.querySelector("#sidebar").classList.toggle("translate-x-0")}
                className="text-gray-400 hover:text-white"
              >
                &times;
              </button>
            </div>
            <nav className="flex flex-col p-4 space-y-5">
              
              <div>
                <Link
                  to='/'
                  onClick={() => handleLinkClick('banner')} // Set active link
                  className={`w-full text-gray-300 hover:text-white flex justify-between items-center ${
                    activeLink === 'banner' ? 'p-2 w-full text-white bg-red-700' : 'bg-gray-900' // Apply active class
                  }`}
                >
                  Deposite Request
                </Link>
              </div>
              <div>
                <Link
                  to='/withrawalrequest'
                  onClick={() => handleLinkClick('category')} // Set active link
                  className={`w-full text-gray-300 hover:text-white flex justify-between items-center ${
                    activeLink === 'category' ? 'p-2 w-full text-white bg-red-700' : 'bg-gray-900' // Apply active class
                  }`}
                >
                  Withrawal Request
                </Link>
              </div>
              <div>
                <Link
                  to='/users'
                  onClick={() => handleLinkClick('subcategory')} // Set active link
                  className={`w-full text-gray-300 hover:text-white flex justify-between items-center ${
                    activeLink === 'subcategory' ? 'p-2 w-full text-white bg-red-700' : 'bg-gray-900' // Apply active class
                  }`}
                >
                  Register User
                </Link>
              </div>
              {/* <div>
                <Link
                  to='/product'
                  onClick={() => handleLinkClick('product')} // Set active link
                  className={`w-full text-gray-300 hover:text-white flex justify-between items-center ${
                    activeLink === 'product' ? 'p-2 w-full text-white bg-red-700' : 'bg-gray-900' // Apply active class
                  }`}
                >
                  Add Product
                </Link>
              </div>
              <div>
                <Link
                  to='/orders'
                  onClick={() => handleLinkClick('orders')} // Set active link
                  className={`w-full text-gray-300 hover:text-white flex justify-between items-center ${
                    activeLink === 'orders' ? 'p-2 w-full text-white bg-red-700' : 'bg-gray-900' // Apply active class
                  }`}
                >
                  Orders
                </Link>
              </div>
              <div>
                <Link
                  to='/users'
                  onClick={() => handleLinkClick('users')} // Set active link
                  className={`w-full text-gray-300 hover:text-white flex justify-between items-center ${
                    activeLink === 'users' ? 'p-2 w-full text-white bg-red-700' : 'bg-gray-900' // Apply active class
                  }`}
                >
                  Users Details
                </Link>
              </div> */}
              <button
                onClick={handlelogout} // Set active state for logout button
                className={`mt-auto p-2 w-full text-white bg-blue-700 text-center rounded transition duration-300`}
              >
                Logout
              </button>
            </nav>
          </div>
        </div>
      </>
    );
}
