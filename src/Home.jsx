import React from 'react';
import { Link } from 'react-router-dom';
import background from './images/background.jpg'; 

const Home = () => {
  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }} 
    >
      <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50">
        {/* MZIMA Logo */}
        <h1 className="text-6xl md:text-8xl font-bold" style={{ color: '#FFD700' }}>
          MZIMA
        </h1>

        {/* Tagline */}
        <p className="text-2xl md:text-4xl text-white mt-4">Holistic. Accessible. Healthcare.</p>

        {/* Button to navigate to services */}
        <Link to="/services">
          <button
            className="mt-8 text-green-700 font-semibold py-3 px-8 rounded-full text-lg hover:bg-green-800 transition duration-300"
            style={{ backgroundColor: '#FFD700' }} 
          >
            VIEW SERVICES
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
