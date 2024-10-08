import React from 'react';
import consultation from "./images/consultation.jpg";
import pharmacy from "./images/e_pharmacy.jpg";
import laboratory from './images/e-lab.jpg';
import monitoring from './images/health_monitoring.jpg';
import analysis from './images/health_history_analysis.jpg';
import education from "./images/health_education.jpg";
import mentalHealth from './images/mental_health.jpg';
import reproductive from './images/sexual_health.jpg';
import ai from './images/ai.jpg';

// Sample Service Data
const services = [
  {
    title: 'Virtual Consultation',
    description: 'Connect with healthcare professionals from the comfort of your home.',
    imageUrl: consultation
  },
  {
    title: 'E-Pharmacy',
    description: 'Order medications online with easy home delivery.',
    imageUrl: pharmacy,
  },
  {
    title: 'E-Laboratory',
    description: 'Access laboratory tests and receive results digitally.',
    imageUrl: laboratory,
  },
  {
    title: 'AI Diagnostics',
    description: 'Utilize AI technology for accurate health assessments.',
    imageUrl: ai,
  },
  {
    title: 'Health Monitoring',
    description: 'Keep track of your health metrics with smart devices.',
    imageUrl: monitoring,
  },
  {
    title: 'Health History Analysis',
    description: 'Analyze your health history for better care management.',
    imageUrl: analysis,
  },
  {
    title: 'Health Education',
    description: 'Access resources and information to enhance your health knowledge.',
    imageUrl: education,
  },
  {
    title: 'Mental Health Support',
    description: 'Get support for mental health challenges and well-being.',
    imageUrl: mentalHealth,
  },
  {
    title: 'Reproductive Health',
    description: 'Receive expert advice and support for reproductive health issues.',
    imageUrl: reproductive,
  },
];

const Services = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#228B22] text-center mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 flex flex-col">
              <img 
                src={service.imageUrl} 
                alt={service.title} 
                className="rounded-lg mb-4 h-40 w-full object-cover"
              />
              <h3 className="text-xl font-semibold text-[#228B22] mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
