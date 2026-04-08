import React from 'react';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import YouTube from './components/YouTube';
import Instagram from './components/Instagram';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="background-watercolor"></div>

      <nav className="navbar glossy-card">
        <h1>My Portfolio</h1>
        <div className="nav-links">
          <a href="#hero">Home</a>
          <a href="#portfolio">Work</a>
          <a href="#youtube">YouTube</a>
          <a href="#instagram">Instagram</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        <Hero />
        <Portfolio />
        <YouTube />
        <Instagram />
        <Contact />
      </main>

      <footer className="footer glossy-card">
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
