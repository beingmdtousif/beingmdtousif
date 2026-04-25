import React from 'react';
import { Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="section-header glossy-card title-card">
        <h2 className="section-title"><Users className="inline-icon text-pink" /> About WebServices Co.</h2>
      </div>

      <div className="about-content glossy-card">
        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="Team collaborating" />
        </div>
        <div className="about-text">
          <p>
            WebServices Co. is a leading private limited company specializing in comprehensive web solutions. We empower businesses by delivering high-quality, scalable, and innovative digital products tailored to their unique needs.
          </p>
          <p>
            Our dedicated team of expert developers, designers, and strategists work collaboratively to transform ideas into reality. We pride ourselves on our technical excellence and commitment to customer success.
          </p>
          <p>
            Whether you need a cutting-edge web application, a robust mobile solution, or an enterprise-grade backend infrastructure, WebServices Co. is your reliable partner in navigating the digital landscape.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
