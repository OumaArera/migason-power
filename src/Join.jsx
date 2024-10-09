import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import john from './images/john_photo.jpg';
import eliakim from './images/eliakim_photo.jpeg';

const teamMembers = [
  {
    name: 'John Ouma',
    title: 'Founder & CEO, Mzima Group Limited',
    image: john,
    shortBio:
      'John Ouma is an experienced software engineer, combining technical expertise with a solid background in the banking sector. His leadership and innovation are redefining healthcare through technology.',
    fullBio: `John Ouma is an experienced software engineer with over 3 years in roles focused on customer relationship management and business operations within banking. 
    He leverages this blend of skills to guide Mzima towards pioneering health solutions. His leadership drives the team to remain at the forefront of health tech transformation.`,
  },
  {
    name: 'Elisha Onyando',
    title: 'Electrical Engineer and Quality Assurance',
    image: <FaUserCircle className="text-[#228B22] w-16 h-16 rounded-full border-4 border-white" />,
    shortBio:
      'Elisha Ooko Onyando is an electrical engineer and software quality assurance specialist, ensuring that Mzima’s technology meets the highest standards.',
    fullBio: `Eng. Elisha has over 2 years of experience in the banking sector as a quality assurance specialist. His expertise ensures that Mzima’s services 
    deliver reliable and effective healthcare technology solutions to users.`,
  },
  {
    name: 'Eliakim Nayah',
    title: 'Business Analyst & Entrepreneur',
    image: eliakim,
    shortBio:
      'Eliakim Nayah is a business analyst and entrepreneur with a strong passion for driving business growth and innovation in healthcare.',
    fullBio: `As a skilled business analyst, Eliakim is instrumental in helping Mzima achieve its strategic goals through data-driven insights and innovative strategies. 
    His entrepreneurial spirit has been key in fostering sustainable growth for the company.`,
  },
  {
    name: 'Dr. Mercy Ojunju',
    title: 'Medical Officer',
    image: <FaUserCircle className="text-[#228B22] w-16 h-16 rounded-full border-4 border-white" />,
    shortBio:
      'Dr. Mercy Ojunju brings over 2 years of experience in the medical and banking sectors, guiding Mzima’s mission to revolutionize healthcare.',
    fullBio: `With a background in leadership as the emeritus Chairperson of AMSUN at The University of Nairobi, Dr. Mercy bridges healthcare and innovation, ensuring that Mzima’s services 
    are at the cutting edge of medical advancements.`,
  },
  {
    name: 'Brian Onyango',
    title: 'Financial Officer & Business Advisor',
    image: <FaUserCircle className="text-[#228B22] w-16 h-16 rounded-full border-4 border-white" />,
    shortBio:
      'Brian Onyango is a seasoned financial auditor and business analyst, providing strategic financial insights for Mzima’s sustainable growth.',
    fullBio: `Brian’s experience as a financial auditor, accountant, and business analyst supports Mzima’s financial strategies and ensures that the company adheres to sustainable practices. 
    His advisory role is crucial for Mzima’s ongoing growth and financial management.`,
  },
];

const Join = () => {
  const [activeProfile, setActiveProfile] = useState(null);

  const handleViewMore = (index) => {
    setActiveProfile(index);
  };

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
            At MZIMA, we are revolutionizing healthcare through technology and innovation. We are passionate about providing holistic care and delivering life-changing services to our clients.
            To continue our mission, we need dedicated, forward-thinking individuals to join us on this journey.
          </p>
          <p className="text-gray-700 mb-4">
            If you share our values and vision of a healthier future, we invite you to be part of Team MZIMA!
          </p>
          <p className="text-gray-700 font-bold">Warm regards,</p>
          <p className="text-gray-700 font-bold">John Ouma, CEO</p>
        </div>

        {/* Leadership Team Section */}
        <h3 className="text-2xl font-bold text-[#228B22] mb-4 text-center">Meet Our Leadership Team</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
              {typeof member.image === 'string' ? (
                <img src={member.image} alt={member.name} className="w-16 h-16 rounded-full border-4 border-white mb-4" />
              ) : (
                member.image
              )}
              <span className="text-gray-700 font-semibold mt-2">{member.name}</span>
              <span className="text-gray-500 text-sm">{member.title}</span>
              <p className="text-gray-600 text-center mt-2">{member.shortBio}</p>
              <button
                onClick={() => handleViewMore(index)}
                className="text-[#228B22] font-bold mt-4 border-2 border-[#228B22] px-4 py-2 rounded-lg hover:bg-[#228B22] hover:text-white transition"
              >
                View More
              </button>

              {/* Conditional Modal or Profile Expand */}
              {activeProfile === index && (
                <div className="bg-white mt-4 p-4 rounded-lg shadow-lg">
                  <p className="text-gray-700">{member.fullBio}</p>
                  <button
                    onClick={() => setActiveProfile(null)}
                    className="text-red-500 font-bold mt-4 border-2 border-red-500 px-4 py-2 rounded-lg hover:bg-red-500 hover:text-white transition"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Join;
