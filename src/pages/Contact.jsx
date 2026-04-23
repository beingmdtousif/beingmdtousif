import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <div className="contact-page pt-20">
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-8">
            <h1 className="section-title">Let's <span className="accent glow-text">Connect</span></h1>
            <p className="section-subtitle">Have a project in mind? We'd love to hear about it.</p>
          </div>

          <div className="contact-container glass-card">
            <div className="contact-info">
              <h3>Contact Information</h3>
              <p className="mb-8 text-gray-light">Fill out the form and our team will get back to you within 24 hours.</p>

              <div className="info-items">
                <div className="info-item">
                  <div className="info-icon"><Phone size={20} /></div>
                  <div>
                    <h4>Phone</h4>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon"><Mail size={20} /></div>
                  <div>
                    <h4>Email</h4>
                    <p>hello@nexus.com</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon"><MapPin size={20} /></div>
                  <div>
                    <h4>Address</h4>
                    <p>123 Innovation Drive<br />Tech City, TC 90210</p>
                  </div>
                </div>
              </div>

              <div className="contact-decoration"></div>
            </div>

            <div className="contact-form-wrapper">
              {isSubmitted ? (
                <div className="success-message text-center">
                  <div className="success-icon mb-4">✓</div>
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. We will get back to you soon.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary submit-btn">
                    Send Message <Send size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
