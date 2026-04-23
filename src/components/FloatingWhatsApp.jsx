import React from 'react';
import { MessageCircle } from 'lucide-react';
import './FloatingWhatsApp.css';

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/1234567890?text=I'm%20interested%20in%20your%20services"
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="tooltip">Chat with us</span>
    </a>
  );
};

export default FloatingWhatsApp;
