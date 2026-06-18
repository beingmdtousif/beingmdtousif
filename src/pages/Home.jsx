import React, { useState, useEffect } from 'react';
import { ArrowRight, Zap, Target, BarChart, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import './Home.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Future-Proof",
      subtitle: "Your Digital Presence",
      desc: "We build high-performance, glossy, and conversion-focused digital experiences that elevate your brand to the next level.",
      ctaPrimary: "Get Started",
      ctaPrimaryLink: "/contact",
      ctaSecondary: "Our Work",
      ctaSecondaryLink: "/about",
      bgGradient: "radial-gradient(circle at center, rgba(0, 229, 255, 0.15) 0%, rgba(11, 29, 58, 1) 70%)"
    },
    {
      title: "Conversion-Focused",
      subtitle: "Premium UI/UX Design",
      desc: "Turn visitors into loyal customers with intuitive, data-driven interfaces crafted for maximum engagement.",
      ctaPrimary: "View Services",
      ctaPrimaryLink: "/about",
      ctaSecondary: "Contact Now",
      ctaSecondaryLink: "/contact",
      bgGradient: "radial-gradient(circle at center, rgba(139, 92, 246, 0.15) 0%, rgba(11, 29, 58, 1) 70%)"
    },
    {
      title: "Lightning Fast",
      subtitle: "Modern Web Solutions",
      desc: "Speed is a feature. We engineer scalable architectures that load instantly and perform flawlessly across all devices.",
      ctaPrimary: "Start Project",
      ctaPrimaryLink: "/contact",
      ctaSecondary: "Learn More",
      ctaSecondaryLink: "/about",
      bgGradient: "radial-gradient(circle at center, rgba(16, 185, 129, 0.15) 0%, rgba(11, 29, 58, 1) 70%)"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section Carousel */}
      <section className="hero-section">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ background: slide.bgGradient }}
          >
            <div className="hero-content container">
              <h1 className="hero-title">
                <span className="glow-text">{slide.title}</span><br />{slide.subtitle}
              </h1>
              <p className="hero-desc">
                {slide.desc}
              </p>
              <div className="hero-cta">
                <a href={slide.ctaPrimaryLink} className="btn btn-primary">
                  {slide.ctaPrimary} <ArrowRight size={18} style={{verticalAlign: 'middle', marginLeft: '8px'}} />
                </a>
                <a href={slide.ctaSecondaryLink} className="btn btn-outline">{slide.ctaSecondary}</a>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Controls */}
        <button className="slider-control prev" onClick={prevSlide} aria-label="Previous slide">
          <ChevronLeft size={32} />
        </button>
        <button className="slider-control next" onClick={nextSlide} aria-label="Next slide">
          <ChevronRight size={32} />
        </button>

        <div className="slider-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
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
