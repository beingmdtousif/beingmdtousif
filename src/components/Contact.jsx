import React from 'react';
import { Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <h2 className="section-title glossy-card title-card">Get In Touch</h2>

      <div className="contact-container glossy-card">
        <p className="contact-desc">Have a project in mind or want to collaborate? Send me a message!</p>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your Name" className="glossy-input" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="your@email.com" className="glossy-input" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" placeholder="Your message here..." className="glossy-input" required></textarea>
          </div>

          <button type="submit" className="btn btn-primary btn-submit">
            Send Message <Send size={18} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
