import React from 'react';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="hero" className="section hero-section">
      <div className="hero-content glossy-card">
        <h2>Innovative Web Services for Your Business</h2>
        <p>We build elegant, scalable software solutions that drive growth. From custom web applications to robust backend systems, we are your trusted technology partner.</p>

        <div className="hero-actions">
          <Link to="/services" className="btn btn-primary">Our Services <ArrowRight size={18} /></Link>
          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Github />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Linkedin />
            </a>
            <a href="mailto:contact@webservicesco.com" className="social-icon">
              <Mail />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
