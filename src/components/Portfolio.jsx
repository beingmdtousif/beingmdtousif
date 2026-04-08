import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features real-time inventory and Stripe payments.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: '#',
    github: '#'
  },
  {
    title: 'Task Management App',
    description: 'A beautiful task manager with real-time updates, drag-and-drop boards, and team collaboration features.',
    tags: ['Vue', 'Firebase', 'Tailwind'],
    link: '#',
    github: '#'
  },
  {
    title: 'AI Image Generator',
    description: 'Web interface for generating images using stable diffusion API. Includes gallery and prompt history.',
    tags: ['Python', 'React', 'FastAPI'],
    link: '#',
    github: '#'
  },
  {
    title: 'Crypto Dashboard',
    description: 'Real-time cryptocurrency tracker with interactive charts and portfolio management.',
    tags: ['React', 'Redux', 'Chart.js', 'CoinGecko API'],
    link: '#',
    github: '#'
  },
  {
    title: 'Social Media Scheduler',
    description: 'Automate your social media posts across platforms with this handy tool.',
    tags: ['Next.js', 'PostgreSQL', 'Prisma'],
    link: '#',
    github: '#'
  },
  {
    title: 'Fitness Tracker app',
    description: 'Mobile-first application to track workouts, nutrition, and personal records.',
    tags: ['React Native', 'Expo', 'Supabase'],
    link: '#',
    github: '#'
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section">
      <h2 className="section-title glossy-card title-card">My Work</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card glossy-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.github} className="btn-icon" aria-label="GitHub Repository"><Github size={20} /></a>
              <a href={project.link} className="btn-icon" aria-label="Live Demo"><ExternalLink size={20} /></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
