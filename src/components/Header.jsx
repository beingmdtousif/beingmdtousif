import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar glossy-card">
      <div className="navbar-container">
        <h1>My Portfolio</h1>

        {/* Desktop Navigation */}
        <nav className="nav-links desktop-nav">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#portfolio">Work</a>
          <a href="#youtube">Media</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <nav className="mobile-nav glossy-card">
          <a href="#hero" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#portfolio" onClick={closeMenu}>Work</a>
          <a href="#youtube" onClick={closeMenu}>Media</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
      )}
    </header>
  );
};

export default Header;
