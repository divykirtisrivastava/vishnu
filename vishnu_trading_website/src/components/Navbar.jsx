'use client'

import React from 'react'
import { Link } from 'react-router-dom'; // Use React Router's Link for better routing
import { Menu, X } from 'lucide-react'
import logo from '../assets/trustt.png'

const menuItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Contact Us', href: '/contactus' },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  return (
    <div className="relative w-full bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4  sm:px-6 lg:px-8">
        {/* Logo Section */}
        <div className="inline-flex items-center space-x-2">
          <div className="text-xl">
            {/* Responsive Logo */}
            <img
              src={logo}
              alt="Trust Bost Logo"
              className="w-16 h-10 sm:w-20 sm:h-14 lg:w-24 lg:h-16  " // Adjusting width/height based on screen size
            />
          </div>
        </div>

        {/* Desktop Menu */}
        <div className=" hidden lg:block">
          <ul className="inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className="text-lg uppercase font-bold text-gray-800 hover:text-gray-900"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Login/Register Buttons */}
        <div className=" hidden lg:block">
          <Link
            to='/login'
            className="rounded-md uppercase bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black mr-2"
          >
            Login
          </Link>
          <Link
            to='/register'
            className="rounded-md uppercase bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Register
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pb-6 pt-5">
              <div className="flex items-center justify-between">
                {/* Mobile Logo */}
                <div className="inline-flex items-center space-x-2">
                  <div className="text-xl text-black">
                    <img src={logo} alt="Logo" className='w-20 h-16' />
                  </div>
                </div>
                {/* Close Menu Button */}
                <button
                  type="button"
                  onClick={toggleMenu}
                  className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
        
              {/* Mobile Menu Links */}
              <div className="mt-6 text-center"> {/* Centering the menu items */}
                <nav className="grid gap-y-4">
                  {menuItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={closeMenu} // Close menu on item click
                      className="uppercase text-black flex items-center justify-center p-3 text-sm font-semibold hover:bg-gray-50" // Centering the items
                    >
                      <span className="text-base font-medium text-gray-900">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </nav>
              </div>
        
              {/* Mobile Login/Register Buttons */}
              <div className="mt-6 flex flex-col items-center space-y-2"> {/* Space between buttons */}
                <Link
                  to='/login'
                  className="w-full uppercase rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Login
                </Link>
                <Link
                  to='/register'
                  className="w-full uppercase rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        )}
      </div>
    </div>
  )
}
