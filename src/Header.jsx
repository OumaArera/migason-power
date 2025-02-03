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
    <header className="bg-gradient-to-r from-gray-100 to-gray-200 text-white p-6 fixed top-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Company Name & Tagline */}
        <div className="flex flex-col">
          <Link to="/" className="text-2xl md:text-4xl font-bold text-purple-950">
            MIGASON
          </Link>
        </div>

        {/* Toggle Button for Mobile Devices */}
        <button 
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
        >
          <div className={`h-1 w-8 bg-purple-950 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''} mb-1`}></div>
          <div className={`h-1 w-8 bg-purple-950 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
          <div className={`h-1 w-8 bg-purple-950 transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''} mt-1`}></div>
        </button>

        {/* Navigation Links */}
        <nav className={`absolute md:static top-full left-0 right-0 w-full md:w-auto md:bg-transparent bg-white md:flex shadow-lg md:shadow-none border-b md:border-none transition-all duration-300 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col md:flex-row md:space-x-8 text-lg md:text-xl md:ml-auto">
            <li>
              <Link 
                to="/" 
                onClick={handleLinkClick}
                className={`${
                  location.pathname === '/' ? 'text-purple-800' : 'text-purple-950 hover:text-purple-700'
                } transition-colors duration-300 hover:underline font-bold p-4 block`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/services" 
                onClick={handleLinkClick}
                className={`${
                  location.pathname === '/services' ? 'text-purple-800' : 'text-purple-950 hover:text-purple-700'
                } transition-colors duration-300 hover:underline font-bold p-4 block`}
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
