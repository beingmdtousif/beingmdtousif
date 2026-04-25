import React from 'react';
import { Monitor, Smartphone, PenTool, Server } from 'lucide-react';

const services = [
  {
    icon: <Monitor size={32} />,
    title: 'Custom Web Applications',
    description: 'We build responsive, high-performance web applications using modern technologies like React, Vue, and Next.js, tailored to your business needs.'
  },
  {
    icon: <Smartphone size={32} />,
    title: 'Mobile App Solutions',
    description: 'Creating cross-platform mobile applications using React Native and Flutter, delivering seamless native-like experiences on both iOS and Android.'
  },
  {
    icon: <PenTool size={32} />,
    title: 'Digital Product Design',
    description: 'Designing intuitive, accessible, and visually striking user interfaces focusing on maximizing user engagement and conversion rates.'
  },
  {
    icon: <Server size={32} />,
    title: 'Cloud Infrastructure & Backend',
    description: 'Developing robust, secure, and scalable server-side applications, RESTful APIs, and managing cloud architectures with AWS, Node.js, and PostgreSQL.'
  }
];

const Services = () => {
  return (
    <section id="services" className="section">
      <div className="section-header glossy-card title-card">
        <h2 className="section-title">Our Web Services</h2>
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
