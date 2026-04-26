import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Socials from './components/Socials';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="background-watercolor"></div>

      <main>
        {/* Section 1: Image and About me */}
        <section className="section about-section-wrapper">
          <About />
        </section>

        {/* Section 2: Three grids (Contact, Portfolio, Social Handles) */}
        <section className="section three-grids-section">
          <div className="grid-item">
            <Contact />
          </div>
          <div className="grid-item">
            <Portfolio />
          </div>
          <div className="grid-item">
            <Socials />
          </div>
        </section>
      </main>

      <footer className="footer glossy-card">
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
