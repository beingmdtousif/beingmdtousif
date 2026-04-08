import React from 'react';
import { User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="section-header glossy-card title-card">
        <h2 className="section-title"><User className="inline-icon text-pink" /> About Me</h2>
      </div>

      <div className="about-content glossy-card">
        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=800&q=80" alt="Developer working" />
        </div>
        <div className="about-text">
          <p>
            Hello! I'm a passionate Software Developer who loves creating beautiful and functional web applications. My journey started when I discovered the magic of turning lines of code into interactive experiences.
          </p>
          <p>
            When I'm not coding, I'm creating content for my YouTube channel where I share my knowledge, document my learning process, and help others get into tech.
          </p>
          <p>
            My goal is to build software that not only works flawlessly but also provides an exceptional user experience with a keen eye for design aesthetics.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
