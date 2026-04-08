import React from 'react';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="section hero-section">
      <div className="hero-content glossy-card">
        <h2>Hi, I'm a Software Developer & Content Creator</h2>
        <p>I build elegant software solutions and share my journey on YouTube. Passionate about coding, design, and creating impactful applications.</p>

        <div className="hero-actions">
          <a href="#portfolio" className="btn btn-primary">View My Work <ArrowRight size={18} /></a>
          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Github />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Linkedin />
            </a>
            <a href="mailto:contact@example.com" className="social-icon">
              <Mail />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
