import React from 'react';
import { motion } from 'framer-motion';
import bg  from '../assets/bg30.jpg';
import bg1  from '../assets/about.png';


const AboutUs = () => {
  return (
    <section 
    className="bg-gray-100 py-16"
    style={{
      backgroundImage: `url(${bg})`, // Set the imported background image
      backgroundSize: 'cover', // Ensure the image covers the entire section
      backgroundPosition: 'center', // Center the background
      backgroundAttachment: 'fixed', // Make the background fixed
    }}
    
    >
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-blue-400  hover:text-blue-900 mt-9">About Us</h1>
          <p className="text-lg text-white mt-4">
            We empower investors by providing comprehensive and transparent financial solutions.
          </p>
        </motion.div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
  {/* Left Side: Text Content */}
  <motion.div 
    className="space-y-6" 
    initial={{ opacity: 0 }} 
    whileInView={{ opacity: 1 }} 
    transition={{ duration: 0.5 }}
  >
    <h2 className="text-3xl font-semibold text-blue-400">
      Our Mission in the Investment World
    </h2>
    <p className="text-white text-lg leading-relaxed">
      At [Trust Bot], we believe that investment should be accessible, transparent, and efficient. Our mission is to bring the best investment opportunities to everyone, using cutting-edge technology, data-driven insights, and a client-focused approach.
    </p>
    <p className="text-white text-lg leading-relaxed">
      Whether you are a seasoned investor or just starting out, we provide tools and insights to help you make informed decisions. Our platform offers a wide range of options from stocks and mutual funds to specialized asset classes tailored to meet your financial goals.
    </p>
  </motion.div>

  {/* Right Side: Image */}
  <motion.div 
    className="flex justify-center items-center" 
    initial={{ opacity: 0 }} 
    whileInView={{ opacity: 1 }} 
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    <img
      src={bg1} // Replace with your image URL
      alt="Mission Image"
      className="w-full h-auto max-w-md" // Ensures the image is responsive
    />
  </motion.div>
</div>


        {/* New Section: Our Vision */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold text-blue-400">Our Vision</h2>
          <p className="text-white mt-4">
            To be the leading investment platform that empowers people worldwide to achieve financial freedom.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-2xl font-bold text-gray-800">🌎 Global Reach</h3>
            <p className="text-gray-600 mt-4">
              Our vision is to connect investors with global opportunities, creating a more interconnected world.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-2xl font-bold text-gray-800">📈 Continuous Growth</h3>
            <p className="text-gray-600 mt-4">
              We aim to foster continuous growth and long-term wealth for all our investors, large and small.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-2xl font-bold text-gray-800">💼 Financial Empowerment</h3>
            <p className="text-gray-600 mt-4">
              Our goal is to empower people through easy access to high-quality investment tools and resources.
            </p>
          </div>
        </motion.div>

     
{/* Expertise Section */}
<motion.div 
  className="text-center mt-16"
  initial={{ opacity: 0 }} 
  whileInView={{ opacity: 1 }} 
  transition={{ duration: 0.5, delay: 0.2 }}
>
  <h2 className="text-3xl font-semibold text-blue-400">Our Expertise</h2>
  <p className="text-white mt-4">
    We specialize in the rapidly growing fields of Forex and Cryptocurrency, offering expert advice in the following areas:
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-10">
    {['Forex Trading', 'Cryptocurrency Investments', 'Blockchain Solutions'].map((expertise, index) => (
      <motion.div 
        key={index}
        className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
        initial={{ y: 10, opacity: 0 }} 
        whileInView={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ scale: 1.05 }} // Hover effect for expertise cards
      >
        <h3 className="text-2xl font-bold text-gray-800">{expertise}</h3>
        <p className="text-gray-600 mt-4">
          Comprehensive guidance and strategies to help you thrive in the world of {expertise.toLowerCase()}.
        </p>
      </motion.div>
    ))}
  </div>
</motion.div>




        {/* Values Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-3xl font-semibold text-blue-400">Our Values</h2>
          <p className="text-white mt-4">
            We are guided by our core values that shape our decisions and actions.
          </p>
          <ul className="mt-6 space-y-4 text-white text-lg">
            <motion.li whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              🤝 <strong>Integrity</strong>: We adhere to the highest standards of ethics and transparency.
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              🌍 <strong>Community</strong>: We invest in our community and contribute to its growth.
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              💡 <strong>Innovation</strong>: We continuously seek new and improved ways to serve our clients.
            </motion.li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
