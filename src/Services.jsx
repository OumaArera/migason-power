import React from 'react';
import powerInstallation from "./images/power_installation.jpg";
import solarEnergy from "./images/solar_energy.jpg";
import electricalRepairs from "./images/electrical_repairs.jpg";
import highVoltage from './images/high_voltage.jpg';
import generatorService from './images/generator_service.jpg';
import industrialWiring from './images/industrial_wiring.jpg';
import smartHome from "./images/smart_home.jpg";
import energyAudit from './images/energy_audit.jpg';
import transformer from './images/transformer.jpg';

// Sample Electrical Power Services Data
const services = [
  {
    title: 'Power Installation',
    description: 'Professional installation of electrical systems for homes and businesses.',
    imageUrl: powerInstallation
  },
  {
    title: 'Solar Energy Solutions',
    description: 'Solar panel installation and maintenance for sustainable energy.',
    imageUrl: solarEnergy,
  },
  {
    title: 'Electrical Repairs & Maintenance',
    description: 'Troubleshooting and fixing electrical faults.',
    imageUrl: electricalRepairs,
  },
  {
    title: 'High Voltage Power Distribution',
    description: 'Setting up and maintaining power grids and substations.',
    imageUrl: highVoltage,
  },
  {
    title: 'Generator Installation & Servicing',
    description: 'Reliable backup power solutions for businesses and homes.',
    imageUrl: generatorService,
  },
  {
    title: 'Industrial Electrical Wiring',
    description: 'Electrical wiring for factories and industries.',
    imageUrl: industrialWiring,
  },
  {
    title: 'Smart Home Automation',
    description: 'Integrating smart electrical systems for home automation.',
    imageUrl: smartHome,
  },
  {
    title: 'Energy Auditing & Optimization',
    description: 'Analyzing energy usage and optimizing efficiency.',
    imageUrl: energyAudit,
  },
  {
    title: 'Transformer Installation & Maintenance',
    description: 'Ensuring reliable power transmission and distribution.',
    imageUrl: transformer,
  },
];

const Services = () => {
  return (
    <div className="bg-gray-200 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-purple-900 text-center mb-6">Our Electrical Power Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 flex flex-col">
              <img 
                src={service.imageUrl} 
                alt={service.title} 
                className="rounded-lg mb-4 h-40 w-full object-cover"
              />
              <h3 className="text-xl font-semibold text-[#160125] mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
