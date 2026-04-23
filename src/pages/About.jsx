import React from 'react';
import { Target, Award, Briefcase } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <div className="about-page pt-20">
      {/* Intro Section */}
      <section className="section-padding">
        <div className="container text-center max-w-3xl mx-auto">
          <h1 className="section-title mb-4">The <span className="accent glow-text">Vision</span> Behind Nexus</h1>
          <p className="section-desc text-lg">
            We are a collective of digital craftsmen dedicated to building the future of the web.
            Our mission is to empower businesses with high-performance, aesthetically unparalleled digital experiences.
          </p>
        </div>
      </section>

      {/* Experience & Background */}
      <section className="section-padding bg-navy-light">
        <div className="container">
          <div className="split-layout">
            <div className="experience-content">
              <h2 className="mb-4">A Legacy of <span className="accent">Innovation</span></h2>
              <p className="section-desc">
                With over a decade of combined experience in the digital sector, our team has partnered with startups and enterprises alike to architect solutions that scale, convert, and inspire.
              </p>

              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-icon"><Briefcase size={20} /></div>
                  <div className="timeline-content">
                    <h4>Founded in Tech City</h4>
                    <p>Started as a boutique design studio focused on premium UX.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-icon"><Award size={20} /></div>
                  <div className="timeline-content">
                    <h4>Award-Winning Agency</h4>
                    <p>Recognized for our innovative approach to Web3 and modern frameworks.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-icon"><Target size={20} /></div>
                  <div className="timeline-content">
                    <h4>Global Reach</h4>
                    <p>Expanding our services to clients across 20+ countries.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="experience-stats grid-2x2">
              <div className="stat-card glass-card text-center">
                <h3 className="accent glow-text">150+</h3>
                <p>Projects Delivered</p>
              </div>
              <div className="stat-card glass-card text-center">
                <h3 className="accent glow-text">98%</h3>
                <p>Client Satisfaction</p>
              </div>
              <div className="stat-card glass-card text-center">
                <h3 className="accent glow-text">10+</h3>
                <p>Industry Awards</p>
              </div>
              <div className="stat-card glass-card text-center">
                <h3 className="accent glow-text">24/7</h3>
                <p>Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-8">
            <h2>Our Core <span className="accent">Values</span></h2>
          </div>

          <div className="values-grid">
            <div className="value-card glass-card">
              <h3>Innovation First</h3>
              <p>We never settle for the status quo. We constantly explore new technologies to keep our clients ahead of the curve.</p>
            </div>
            <div className="value-card glass-card">
              <h3>Design Excellence</h3>
              <p>Aesthetics matter. We believe that beautiful, intuitive design is the foundation of a successful digital product.</p>
            </div>
            <div className="value-card glass-card">
              <h3>Performance Driven</h3>
              <p>Speed is a feature. Every line of code we write is optimized for maximum performance and reliability.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
