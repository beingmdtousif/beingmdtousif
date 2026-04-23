import React from 'react';
import { ArrowRight, Zap, Target, BarChart, Users } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content container">
          <h1 className="hero-title">
            <span className="glow-text">Future-Proof</span> Your<br />Digital Presence
          </h1>
          <p className="hero-desc">
            We build high-performance, glossy, and conversion-focused digital experiences that elevate your brand to the next level.
          </p>
          <div className="hero-cta">
            <a href="/contact" className="btn btn-primary">Get Started <ArrowRight size={18} style={{verticalAlign: 'middle', marginLeft: '8px'}} /></a>
            <a href="/about" className="btn btn-outline">Our Work</a>
          </div>
        </div>
        <div className="hero-gradient-overlay"></div>
      </section>

      {/* About Preview */}
      <section className="about-preview section-padding">
        <div className="container split-layout">
          <div className="split-img-container glass-card">
            <div className="abstract-shape"></div>
            <div className="abstract-shape-2"></div>
          </div>
          <div className="split-content">
            <h2 className="section-title">Redefining <span className="accent">Digital</span> Excellence</h2>
            <p className="section-desc">
              We are a team of passionate creators, developers, and strategists dedicated to building modern web solutions that not only look stunning but drive real business results.
            </p>
            <ul className="feature-list">
              <li><Zap size={20} className="accent" /> Lightning fast performance</li>
              <li><Target size={20} className="accent" /> Conversion-optimized UI/UX</li>
              <li><Users size={20} className="accent" /> User-centric design approach</li>
            </ul>
            <a href="/about" className="btn btn-outline mt-4">Discover More</a>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="features-section section-padding">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="section-title">Our <span className="accent">Capabilities</span></h2>
            <p className="section-subtitle">Delivering premium solutions across the digital spectrum.</p>
          </div>

          <div className="features-grid">
            <div className="feature-card glass-card">
              <div className="feature-icon"><Zap size={32} /></div>
              <h3>High-Performance Web</h3>
              <p>Lightning-fast applications built with modern frameworks to ensure optimal user experience and SEO.</p>
            </div>
            <div className="feature-card glass-card">
              <div className="feature-icon"><Target size={32} /></div>
              <h3>Conversion UX/UI</h3>
              <p>Data-driven design strategies focused on guiding users towards meaningful actions and engagements.</p>
            </div>
            <div className="feature-card glass-card">
              <div className="feature-icon"><BarChart size={32} /></div>
              <h3>Growth Marketing</h3>
              <p>Integrated strategies to scale your digital presence and maximize your return on investment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section-padding">
        <div className="container">
          <div className="cta-box glass-card glow-box text-center">
            <h2>Ready to Build Something <span className="accent glow-text">Great</span> Together?</h2>
            <p>Let's transform your vision into a digital reality.</p>
            <a href="/contact" className="btn btn-primary mt-4">Start Your Project</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
