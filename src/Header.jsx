import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-gradient-to-r bg-gray-100 text-white p-6 fixed top-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Company Name & Tagline */}
        <div className="flex flex-col">
          <Link to="/" className="text-2xl md:text-4xl font-bold text-purple-950">
            MIGASON
          </Link>
          <span className="text-sm md:text-sm text-gray-200"></span>
        </div>

        {/* Toggle Button for Mobile Devices */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          <div className={`h-1 w-8 bg-white transition-transform duration-300 ${isMenuOpen ? 'rotate-45' : ''} mb-1`}></div>
          <div className={`h-1 w-8 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
          <div className={`h-1 w-8 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45' : ''} mt-1`}></div>
        </button>

        {/* Navigation Links */}
        <nav className={`md:flex ${isMenuOpen ? 'block' : 'hidden'} absolute md:static top-full left-0 w-full bg-purple-500 md:bg-transparent shadow-lg md:shadow-none`}>
          <ul className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-8 text-lg md:text-xl md:ml-auto">
            <li>
              <Link 
                to="/" 
                onClick={handleLinkClick}
                className={`${
                  location.pathname === '/' ? 'text-purple-800' : 'text-purple-950 hover:text-purple-950'
                } transition-colors duration-300 hover:underline font-bold p-4`}
              >
                Home
              </Link>
            </li>
            {/* <li>
              <Link 
                to="/about" 
                onClick={handleLinkClick}
                className={`${
                  location.pathname === '/about' ? 'text-white' : 'text-gray-100 hover:text-blue-200'
                } transition-colors duration-300 hover:underline font-bold p-4`}
              >
                About
              </Link>
            </li> */}
            <li>
              <Link 
                to="/services" 
                onClick={handleLinkClick}
                className={`${
                  location.pathname === '/services' ? 'text-purple-800' : 'text-purple-950 hover:text-purple-950'
                } transition-colors duration-300 hover:underline font-bold p-4`}
              >
                Services
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
