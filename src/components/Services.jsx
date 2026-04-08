import React from 'react';
import { Monitor, Smartphone, PenTool, Server } from 'lucide-react';

const services = [
  {
    icon: <Monitor size={32} />,
    title: 'Web Development',
    description: 'Building responsive, high-performance websites and web applications using modern technologies like React, Vue, and Next.js.'
  },
  {
    icon: <Smartphone size={32} />,
    title: 'Mobile App Development',
    description: 'Creating cross-platform mobile applications using React Native and Expo, delivering native-like experiences on iOS and Android.'
  },
  {
    icon: <PenTool size={32} />,
    title: 'UI/UX Design',
    description: 'Designing intuitive and visually appealing user interfaces focusing on user experience, accessibility, and modern design trends.'
  },
  {
    icon: <Server size={32} />,
    title: 'Backend Development',
    description: 'Developing robust and scalable server-side applications, RESTful APIs, and managing databases with Node.js, Python, and PostgreSQL.'
  }
];

const Services = () => {
  return (
    <section id="services" className="section">
      <div className="section-header glossy-card title-card">
        <h2 className="section-title">My Services</h2>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card glossy-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
