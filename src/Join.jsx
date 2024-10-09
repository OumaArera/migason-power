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
          <p className="text-gray-700 mb-4">Dear future colleague,</p>
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
          <p className="text-gray-700 mb-4">Let's build the future of healthcare together.</p>
          <p className="text-gray-700 font-bold">Warm regards,</p>
          <p className="text-gray-700 font-bold">John Ouma, CEO</p>
        </div>

        {/* Executive Team Icons */}
        <h3 className="text-2xl font-bold text-[#228B22] mb-4 text-center">Meet Our Leadership Team</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {/* CEO Photo */}
          <div className="flex flex-col items-center">
            <img src={john} alt="John Ouma" className="w-16 h-16 rounded-full border-4 border-white" />
            <span className="text-gray-700 font-semibold mt-2">John Ouma</span>
            <span className="text-gray-500 text-sm">Founder & CEO</span>
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

        {/* Executive Team Profiles */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-[#228B22] mb-4 text-center">Executive Team Profiles</h3>

          <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-700">John Ouma – Founder & CEO, Mzima Group Limited</h4>
            <p className="text-gray-700">
              John Ouma is an experienced software engineer with a solid foundation in the banking sector. Over the past three years, he has specialized in customer relationship management and business operations within banking. John combines these unique skills to lead Mzima’s journey in delivering groundbreaking health solutions. His visionary leadership drives Mzima to be a front-runner in the integration of cutting-edge technology into healthcare.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-700">Dr. Mercy Anyango Ojunju – Medical Officer</h4>
            <p className="text-gray-700">
              With a blend of medical and banking experience, Dr. Mercy is exceptionally equipped to bridge healthcare and innovation. Serving as the former Chairperson of AMSUN at The University of Nairobi, her leadership is crucial in steering Mzima’s mission to modernize healthcare delivery. Her two years of experience in both the medical and financial sectors give her a unique perspective on the needs of today’s healthcare environment.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-700">Eng. Elisha Ooko Onyando – Electrical Engineer & Quality Assurance</h4>
            <p className="text-gray-700">
              Elisha is a specialist in electrical engineering and software quality assurance, with two years of experience in the banking sector. His expertise ensures that Mzima's technological infrastructure meets the highest standards of quality and reliability, delivering efficient and trusted services to users.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-700">Brian Onyango Odiwuor – Financial Officer & Business Advisor</h4>
            <p className="text-gray-700">
              A seasoned financial auditor, accountant, and business analyst, Brian brings a wealth of experience to Mzima. His role is pivotal in providing strategic financial insights, supporting sustainable business growth, and ensuring sound financial management as Mzima continues to expand.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-700">Eliakim Nayah – Chief Operating Officer</h4>
            <p className="text-gray-700">
              Eliakim Nayah is an accomplished business analyst and entrepreneur. His deep understanding of business operations and strategy is key to optimizing Mzima’s internal processes. As COO, Eliakim’s focus is on ensuring seamless operations, driving growth, and contributing to the company’s mission of transforming healthcare through technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
