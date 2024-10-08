import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const getCurrentYear = () => new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-green-950 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Navigation Links Card */}
        <div className="flex flex-col items-center bg-green-950 p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold">Navigation</h2>
          <nav>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-yellow-400">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-yellow-400">About</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-yellow-400">Services</Link>
              </li>
              <li>
                <Link to="/join" className="hover:text-yellow-400">Join Us</Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Contact Us Card */}
        <div className="flex flex-col items-center bg-green-950 p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold">Contact Us</h2>
        <div className="flex items-center space-x-2 mt-4">
            <a href="mailto:mzima.holistic@gmail.com" className="hover:text-yellow-400">
            <FaEnvelope size={20} /> {/* Reduced icon size */}
            </a>
            <span className="text-base">Email</span> {/* Adjusted text size */}
        </div>
        <div className="flex items-center space-x-2 mt-4">
            <a 
            href="https://wa.me/254753472960" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-yellow-400"
            >
            <FaWhatsapp size={20} /> {/* Reduced icon size */}
            </a>
            <span className="text-base">WhatsApp</span> {/* Adjusted text size */}
        </div>
        <div className="flex items-center space-x-2 mt-4">
            <FaMapMarkerAlt size={20} /> {/* Reduced icon size */}
            <span className="text-base">Nairobi, KE</span> {/* Adjusted text size */}
        </div>
        </div>


        {/* Newsletter Subscription Card */}
        <div className="flex flex-col items-center bg-green-950 p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold">Subscribe to Our Newsletter</h2>
          <form className="flex flex-col w-full">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="p-2 rounded-lg w-full mb-2"
              required
            />
            <button 
              type="submit" 
              className="bg-green-700 text-white font-semibold py-2 px-6 rounded-lg hover:bg-yellow-400 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Social Media Icons Card */}
        <div className="flex flex-col items-center bg-green-950 p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold">Follow Us</h2>
          <div className="flex space-x-6">
            <a 
              href="https://www.facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
            >
              <FaFacebookF size={24} />
            </a>
            <a 
              href="https://x.com/mzimaKE" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-2xl"
              >
                <path d="M18 6L6 18"></path>
                <path d="M6 6l12 12"></path>
              </svg>
            </a>
            <a 
              href="https://www.instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
            >
              <FaInstagram size={24} />
            </a>
            <a 
              href="https://www.linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
            >
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>

      </div>
      
      {/* Copyright Info */}
      <div className="mt-8 text-center text-gray-300 text-sm">
        © {getCurrentYear()} MZIMA. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
