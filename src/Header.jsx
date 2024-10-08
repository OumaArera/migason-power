import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; 

const Header = () => {
  const location = useLocation(); 
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggle menu

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState); // Toggle menu state
  };

  return (
    <header className="bg-gradient-to-r from-white to-gray-100 text-yellow-500 p-6 fixed top-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Company Name - Route to home page */}
        <Link to="/" className="text-4xl md:text-6xl font-bold text-green-800">
          MZIMA
        </Link>

        {/* Toggle Button for Mobile Devices */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-xl text-gray-900"
        >
          {isMenuOpen ? 'Close' : 'Menu'}
        </button>

        {/* Navigation Links */}
        <nav className={`md:flex ${isMenuOpen ? 'block' : 'hidden'} absolute md:static top-full left-0 w-full bg-white md:bg-transparent shadow-lg md:shadow-none`}>
          <ul className="flex flex-col md:flex-row md:space-x-8 text-xl md:text-2xl">
            <li>
              <Link 
                to="/" 
                className={`${
                  location.pathname === '/' ? 'text-[#228B22]' : 'text-gray-900 hover:text-green-700'
                } transition-colors duration-300 hover:underline p-4`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={`${
                  location.pathname === '/about' ? 'text-[#228B22]' : 'text-gray-900 hover:text-green-700'
                } transition-colors duration-300 hover:underline p-4`}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/services" 
                className={`${
                  location.pathname === '/services' ? 'text-[#228B22]' : 'text-gray-900 hover:text-green-700'
                } transition-colors duration-300 hover:underline p-4`}
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                to="/join" 
                className={`${
                  location.pathname === '/join' ? 'text-[#228B22]' : 'text-gray-900 hover:text-green-700'
                } transition-colors duration-300 hover:underline p-4`}
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
