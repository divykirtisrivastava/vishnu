import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import contact1 from '../assets/trading-6531134.jpg';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>

      {/* Outer container with background color change */}
      <div className="  background-color welcome-boxcontainer  md:p-16 lg:p-24">
        {/* Heading and paragraph */}
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-6 mt-8 md:mt-16 lg:mt-16 text-white">
          Let's Connect and Get to Know Each Other
        </h1>
        <p className="text-center text-sm md:text-lg mb-10 text-white">
          Feel free to reach out to us through any of the following options.
        </p>

        {/* Cards */}
        <div className="flex flex-col md:flex-row justify-between gap-6 p-4 md:p-10 lg:p-20">
          {/* Card 1 - Call Us */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center w-full md:w-1/3">
            <FaPhone className="text-2xl md:text-3xl mb-4 text-[#1D7B83]" />
            <h2 className="text-xl md:text-2xl font-semibold mb-2">Call Us</h2>
            <p className="mb-4 text-sm md:text-base">We are available 24/7 to answer your calls.</p>
            <button className="bg-[#000] text-white px-4 py-2 rounded hover:bg-[#333]">
              +123 456 7890
            </button>
          </div>

          {/* Card 2 - Email Us */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center w-full md:w-1/3">
            <FaEnvelope className="text-2xl md:text-3xl mb-4 text-[#1D7B83]" />
            <h2 className="text-xl md:text-2xl font-semibold mb-2">Email Us</h2>
            <p className="mb-4 text-sm md:text-base">Feel free to send us an email anytime.</p>
            <button className="bg-[#000] text-white px-4 py-2 rounded hover:bg-[#333]">
              contact@example.com
            </button>
          </div>

          {/* Card 3 - Social Media */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center w-full md:w-1/3">
            <div className="flex space-x-4 mb-4">
              <FaFacebook className="text-2xl md:text-3xl text-blue-600" />
              <FaTwitter className="text-2xl md:text-3xl text-blue-400" />
              <FaInstagram className="text-2xl md:text-3xl text-pink-500" />
            </div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">Follow Us</h2>
            <p className="mb-4 text-sm md:text-base">Connect with us on social media for updates.</p>
            <button className="bg-[#000] text-white px-4 py-2 rounded hover:bg-[#333]">
              Follow
            </button>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-[#6b6461]  mx-auto p-6 md:p-10 lg:p-24">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Section 1 - Image */}
          <div className="flex justify-center items-center">
            <img
              src={contact1}
              alt="Contact Us"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Section 2 - Form */}
          <div className="bg-gray-300 p-6 md:p-8 shadow-lg rounded-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-base md:text-lg mb-2 font-medium">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-base md:text-lg mb-2 font-medium">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Mobile Field */}
              <div>
                <label className="block text-base md:text-lg mb-2 font-medium">Mobile Number</label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your mobile number"
                  required
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-base md:text-lg mb-2 font-medium">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your message"
                  rows="3"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#000] text-white py-3 px-6 rounded-lg hover:bg-[#333] transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
