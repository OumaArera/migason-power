import React, { useState } from 'react';
import productive from "./images/image.jpg";

const About = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowForm(false); 
  };

  const handleClickOutside = (e) => {
    if (e.target.classList.contains('overlay')) {
      setShowForm(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 md:p-10 lg:p-16 xl:p-20 mx-auto bg-white shadow-lg rounded-lg w-full max-w-6xl">
      {/* Introduction Section */}
      <div className="flex flex-col md:flex-row items-center justify-center mb-6 w-full">
        <div className="text-center md:text-left md:w-1/2 order-2 md:order-1">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-[#228B22]">Solutions that Suit You</h1>
          <p className="text-lg md:text-xl mb-2 text-gray-700">
            At Mzima, we are dedicated to revolutionizing telehealth by providing a comprehensive platform that integrates advanced technologies such as AI, IoT, VR, AR, and blockchain. Our mission is to make health services accessible and effective for everyone, ensuring that individuals can easily connect with qualified healthcare professionals.
          </p>
          <p className="text-lg md:text-xl mb-2 text-gray-700">
            We understand that every individual's health journey is unique. Therefore, we collaborate closely with our users to tailor solutions that address their specific needs. Our platform offers a seamless experience for consultations, educational content, and community support, fostering a holistic approach to well-being.
          </p>
          <p className="text-lg md:text-xl mb-2 text-gray-700">
            Our vision extends beyond mere service delivery; we aspire to create a supportive ecosystem where health is integrated into everyday life. Together, let's build a healthier future, where technology empowers individuals to take charge of their well-being.
          </p>
          <button 
            className="mt-6 px-6 py-3 bg-[#228B22] text-white rounded-full text-lg hover:bg-green-600"
            onClick={() => setShowForm(true)}
          >
            Get in Touch
          </button>
        </div>
        <div className="mt-6 md:mt-0 md:w-1/2 order-1 md:order-2">
          <img 
            src={productive} 
            alt="Mzima Solutions" 
            className="w-full rounded-lg shadow-md" 
          />
        </div>
      </div>

      {/* Contact Form */}
      {showForm && (
        <div className="overlay fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50" onClick={handleClickOutside}>
          <div className="bg-white rounded-lg shadow-md p-6 w-96 mt-10">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="name">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="border border-gray-300 rounded-lg w-full p-2"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="border border-gray-300 rounded-lg w-full p-2"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="border border-gray-300 rounded-lg w-full p-2"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  className="border border-gray-300 rounded-lg w-full p-2"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button type="submit" className="bg-[#228B22] text-white py-2 px-4 rounded">
                Send Message
              </button>
            </form>
            <button 
              className="text-red-500 mt-4 underline"
              onClick={() => setShowForm(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
