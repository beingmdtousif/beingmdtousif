import React from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Senior Software Engineer',
    company: 'Tech Innovators Inc.',
    period: '2021 - Present',
    description: 'Lead a team of 5 developers to build a scalable microservices architecture. Improved application performance by 40% and mentored junior developers.'
  },
  {
    role: 'Full Stack Developer',
    company: 'Creative Solutions Agency',
    period: '2018 - 2021',
    description: 'Developed and maintained various web applications using React and Node.js. Collaborated closely with designers to implement pixel-perfect user interfaces.'
  },
  {
    role: 'Frontend Developer',
    company: 'Startup Hub',
    period: '2016 - 2018',
    description: 'Built responsive single-page applications. Integrated RESTful APIs and implemented complex state management using Redux.'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="section-header glossy-card title-card">
        <h2 className="section-title"><Briefcase className="inline-icon text-pink" /> Experience</h2>
      </div>

      <div className="timeline-container">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item glossy-card">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>{exp.role}</h3>
              <h4 className="company">{exp.company}</h4>
              <span className="period">{exp.period}</span>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
