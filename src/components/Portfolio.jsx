import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 'p1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB.',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: '#',
    github: '#'
  },
  {
    id: 'p2',
    title: 'Task Management App',
    description: 'A beautiful task manager with real-time updates and team collaboration features.',
    tags: ['Vue', 'Firebase', 'Tailwind'],
    link: '#',
    github: '#'
  },
  {
    id: 'p3',
    title: 'AI Image Generator',
    description: 'Web interface for generating images using stable diffusion API.',
    tags: ['Python', 'React', 'FastAPI'],
    link: '#',
    github: '#'
  }
];

const Portfolio = () => {
  return (
    <div className="portfolio-wrapper">
      <h2 className="section-title glossy-card title-card">My Work</h2>
      <div className="portfolio-list">
        {projects.map((project) => (
          <div key={project.id} className="project-card glossy-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, i) => (
                <span key={`${project.id}-tag-${i}`} className="tag">{tag}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.github} className="btn-icon" aria-label="GitHub Repository"><Github size={20} /></a>
              <a href={project.link} className="btn-icon" aria-label="Live Demo"><ExternalLink size={20} /></a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
