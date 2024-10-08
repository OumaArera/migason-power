import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import john from './images/john_photo.jpg';
import eliakim from './images/eliakim_photo.jpeg';

const Join = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl font-bold text-[#228B22] mb-8 text-center">Team MZIMA</h2>

        {/* CEO Invitation */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-12 max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold text-[#228B22] mb-4 text-center">A Personal Invitation from Our CEO</h3>
          <p className="text-gray-700 mb-4">
            Dear future colleague,
          </p>
          <p className="text-gray-700 mb-4">
            At MZIMA, we are revolutionizing healthcare through technology and innovation. We are passionate about providing
            holistic care and delivering life-changing services to our clients. To continue our mission, we need dedicated,
            forward-thinking individuals to join us on this journey.
          </p>
          <p className="text-gray-700 mb-4">
            We are looking for people who share our values, our enthusiasm for innovation, and our vision of a healthier future.
            If you’re eager to contribute to impactful projects and grow in an inclusive, dynamic work environment, we invite
            you to be part of Team MZIMA!
          </p>
          <p className="text-gray-700 mb-4">
            Let's build the future of healthcare together.
          </p>
          <p className="text-gray-700 font-bold">Warm regards,</p>
          <p className="text-gray-700 font-bold">John Ouma, CEO</p>
        </div>

        {/* Executive Team Icons */}
        <h3 className="text-2xl font-bold text-[#228B22] mb-4 text-center">Meet Our Leadership Team</h3>
        <div className="flex justify-center space-x-6 mb-8">
          {/* CEO Photo */}
          <div className="flex flex-col items-center">
            <img src={john} alt="John Ouma" className="w-16 h-16 rounded-full border-4 border-white" />
            <span className="text-gray-700 font-semibold mt-2">John Ouma</span>
            <span className="text-gray-500 text-sm">CEO</span>
          </div>

          {/* CTO Icon */}
          <div className="flex flex-col items-center">
            <FaUserCircle className="text-[#228B22] w-16 h-16 rounded-full border-4 border-white" />
            <span className="text-gray-700 font-semibold mt-2">Elisha Onyando</span>
            <span className="text-gray-500 text-sm">CTO</span>
          </div>

          {/* COO Photo */}
          <div className="flex flex-col items-center">
            <img src={eliakim} alt="Eliakim Nayah" className="w-16 h-16 rounded-full border-4 border-white" />
            <span className="text-gray-700 font-semibold mt-2">Eliakim Nayah</span>
            <span className="text-gray-500 text-sm">COO</span>
          </div>

          {/* CMO Icon */}
          <div className="flex flex-col items-center">
            <FaUserCircle className="text-[#228B22] w-16 h-16 rounded-full border-4 border-white" />
            <span className="text-gray-700 font-semibold mt-2">Dr. Mercy Ojunju</span>
            <span className="text-gray-500 text-sm">CMO</span>
          </div>

          {/* CFO Icon */}
          <div className="flex flex-col items-center">
            <FaUserCircle className="text-[#228B22] w-16 h-16 rounded-full border-4 border-white" />
            <span className="text-gray-700 font-semibold mt-2">Brian Onyango</span>
            <span className="text-gray-500 text-sm">CFO</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
