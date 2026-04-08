import React from 'react';
import { Code2, Terminal, Database, Wrench } from 'lucide-react';

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="section-header glossy-card title-card">
        <h2 className="section-title"><Code2 className="inline-icon text-red" /> My Skills</h2>
      </div>

      <div className="skills-container glossy-card">
        <div className="skill-category">
          <h3>Frontend Development</h3>
          <div className="skills-grid">
            <div className="skill-card glossy-card">
              <Terminal size={24} />
              <span>React</span>
            </div>
            <div className="skill-card glossy-card">
              <Terminal size={24} />
              <span>JavaScript</span>
            </div>
            <div className="skill-card glossy-card">
              <Terminal size={24} />
              <span>TypeScript</span>
            </div>
            <div className="skill-card glossy-card">
              <Terminal size={24} />
              <span>Tailwind CSS</span>
            </div>
          </div>
        </div>

        <div className="skill-category">
          <h3>Backend & Database</h3>
          <div className="skills-grid">
            <div className="skill-card glossy-card">
              <Database size={24} />
              <span>Node.js</span>
            </div>
            <div className="skill-card glossy-card">
              <Database size={24} />
              <span>Python</span>
            </div>
            <div className="skill-card glossy-card">
              <Database size={24} />
              <span>PostgreSQL</span>
            </div>
            <div className="skill-card glossy-card">
              <Database size={24} />
              <span>MongoDB</span>
            </div>
          </div>
        </div>

        <div className="skill-category">
          <h3>Tools & Others</h3>
          <div className="skills-grid">
            <div className="skill-card glossy-card">
              <Wrench size={24} />
              <span>Git & GitHub</span>
            </div>
            <div className="skill-card glossy-card">
              <Wrench size={24} />
              <span>Docker</span>
            </div>
            <div className="skill-card glossy-card">
              <Wrench size={24} />
              <span>AWS</span>
            </div>
            <div className="skill-card glossy-card">
              <Wrench size={24} />
              <span>Figma</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
