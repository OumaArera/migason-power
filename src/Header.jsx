import React from 'react';
import { Link, useLocation } from 'react-router-dom'; 

const Header = () => {
  const location = useLocation(); 

  return (
    <header className="bg-gradient-to-r from-white to-gray-100 text-yellow-500 p-6 fixed top-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Company Name - Route to home page */}
        <Link to="/" className="text-4xl md:text-6xl font-bold text-green-800">
          MZIMA
        </Link>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-8 text-xl md:text-2xl">
            <li>
              <Link 
                to="/" 
                className={`${
                  location.pathname === '/' ? 'text-[#228B22]' : 'text-gray-900 hover:text-green-700'
                } transition-colors duration-300 hover:underline`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={`${
                  location.pathname === '/about' ? 'text-[#228B22]' : 'text-gray-900 hover:text-green-700'
                } transition-colors duration-300 hover:underline`}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/services" 
                className={`${
                  location.pathname === '/services' ? 'text-[#228B22]' : 'text-gray-900 hover:text-green-700'
                } transition-colors duration-300 hover:underline`}
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                to="/join" 
                className={`${
                  location.pathname === '/join' ? 'text-[#228B22]' : 'text-gray-900 hover:text-green-700'
                } transition-colors duration-300 hover:underline`}
              >
                Join
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
