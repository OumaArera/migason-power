import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const getCurrentYear = () => new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-[#160125] text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Navigation Links */}
        <div className="flex flex-col items-center bg-[#160125] p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold">Navigation</h2>
          <nav>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-yellow-400">Home</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-yellow-400">Services</Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Contact Us */}
        <div className="flex flex-col items-center bg-[#160125] p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold">Contact Us</h2>
          <div className="flex items-center space-x-2 mt-4">
            <a href="mailto:migasonpowerltd@gmail.com" className="hover:text-yellow-400">
              <FaEnvelope size={20} />
            </a>
            <span className="text-base">migasonpowerltd@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2 mt-4">
            <FaPhoneAlt size={20} />
            <span className="text-base">0780981981 / +254723401690</span>
          </div>
          <div className="flex items-center space-x-2 mt-4">
            <a 
              href="https://wa.me/254723401690" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
            >
              <FaWhatsapp size={20} />
            </a>
            <span className="text-base">WhatsApp</span>
          </div>
          <div className="flex items-center space-x-2 mt-4">
            <FaMapMarkerAlt size={20} />
            <span className="text-base">Raoso House, Haile Selassie, Nairobi</span>
          </div>
          <div className="flex items-center space-x-2 mt-4">
            <FaMapMarkerAlt size={20} />
            <span className="text-base">P.O. Box 8044-00100, Nairobi</span>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center bg-[#160125] p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold">Follow Us</h2>
          <div className="flex space-x-6">
            <a 
              href="https://www.facebook.com/migasonpower" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
            >
              <FaFacebookF size={24} />
            </a>
            <a 
              href="https://x.com/migasonpower" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
            >
              <FaXTwitter size={24} />
            </a>
            <a 
              href="https://www.instagram.com/migasonpower" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
            >
              <FaInstagram size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/company/migasonpower" 
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
        © {getCurrentYear()} Migason Power Service CO.LTD. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
