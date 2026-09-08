import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div>
          <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>
            &copy; 2026 Shweta Meena.
          </span>{' '}
          Crafted with <span style={{ color: '#ec4899' }}>♥</span> for scalable backend engineering.
        </div>

        <div style={{ display: 'flex', gap: '20px' }}>
          <a href="#about" className="nav-link">About</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
      </div>
    </footer>
  );
}
