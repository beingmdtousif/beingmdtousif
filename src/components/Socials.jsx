import React from 'react';
import { Github, Linkedin, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

const Socials = () => {
  return (
    <div className="socials-container">
      <h2 className="section-title glossy-card title-card">Social Handles</h2>
      <div className="social-links-grid glossy-card">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link-item">
          <Github size={32} />
          <span>GitHub</span>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link-item">
          <Linkedin size={32} />
          <span>LinkedIn</span>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link-item">
          <Twitter size={32} />
          <span>Twitter</span>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link-item">
          <Instagram size={32} />
          <span>Instagram</span>
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link-item">
          <Youtube size={32} />
          <span>YouTube</span>
        </a>
        <a href="mailto:contact@example.com" className="social-link-item">
          <Mail size={32} />
          <span>Email</span>
        </a>
      </div>
    </div>
  );
};

export default Socials;
