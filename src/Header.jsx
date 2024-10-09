import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; 

const Header = () => {
  const location = useLocation(); 
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggle menu

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState); // Toggle menu state
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close menu on link click
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
          className={`md:hidden text-gray-900 focus:outline-none ${isMenuOpen ? 'transform rotate-45' : ''}`}
        >
          <div className={`h-1 w-8 bg-gray-900 transition-transform duration-300 ${isMenuOpen ? 'rotate-45' : ''} mb-1`}></div>
          <div className={`h-1 w-8 bg-gray-900 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
          <div className={`h-1 w-8 bg-gray-900 transition-transform duration-300 ${isMenuOpen ? '-rotate-45' : ''} mt-1`}></div>
        </button>

        {/* Navigation Links */}
        <nav className={`md:flex ${isMenuOpen ? 'block' : 'hidden'} absolute md:static top-full left-0 w-full bg-white md:bg-transparent shadow-lg md:shadow-none`}>
          <ul className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-8 text-xl md:text-2xl md:ml-auto"> {/* Reset space-y for larger screens */}
            <li>
              <Link 
                to="/" 
                onClick={handleLinkClick}
                className={`${
                  location.pathname === '/' ? 'text-[#228B22]' : 'text-gray-900 hover:text-green-700'
                } transition-colors duration-300 hover:underline font-bold p-4`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                onClick={handleLinkClick}
                className={`${
                  location.pathname === '/about' ? 'text-[#228B22]' : 'text-gray-900 hover:text-green-700'
                } transition-colors duration-300 hover:underline font-bold p-4`}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/services" 
                onClick={handleLinkClick}
                className={`${
                  location.pathname === '/services' ? 'text-[#228B22]' : 'text-gray-900 hover:text-green-700'
                } transition-colors duration-300 hover:underline font-bold p-4`}
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                to="/team" 
                onClick={handleLinkClick}
                className={`${
                  location.pathname === '/join' ? 'text-[#228B22]' : 'text-gray-900 hover:text-green-700'
                } transition-colors duration-300 hover:underline font-bold p-4`}
              >
                Team
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
