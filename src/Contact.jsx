import React, { useState } from 'react';
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
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
    // Handle form submission logic (e.g., send to server or display form data)
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8">
        
        {/* Form Section */}
        <div className="md:w-1/2 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-[#228B22] mb-4">
            Feel free to give us a call or send us an email with your questions or comments.
          </h2>
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
        </div>

        {/* Contact Info Section */}
        <div className="md:w-1/2 bg-white rounded-lg shadow-md p-6 flex flex-col">
          <h3 className="text-2xl font-bold text-[#228B22] mb-4">Contact Us</h3>
          <p className="mb-4 flex items-center">
            <FaEnvelope className="mr-2 text-[#228B22]" />
            <strong>Email:</strong>
            <a
              href="mailto:mzima.holistic@gmail.com"
              className="text-blue-500 underline ml-2"
            >
              mzima.holistic@gmail.com
            </a>
          </p>
          <p className="mb-4 flex items-center">
            <strong>Location:</strong>
            <span className="ml-2">Nairobi, KE</span>
          </p>
          <p className="mb-4 flex items-center">
            <FaWhatsapp className="mr-2 text-[#228B22]" />
            <strong>WhatsApp:</strong>
            <a
              href="https://wa.me/254753472960"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline ml-2"
            >
              Chat on WhatsApp
            </a>
          </p>
          <div className="mb-4">
            <p className="text-gray-500">
              <strong>Working Hours:</strong> Monday - Friday: 7am - 5pm
            </p>
            <p className="text-gray-500">
              Saturday: 7am - 2pm
            </p>
            <p className="text-gray-500">
              Sunday: Closed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
