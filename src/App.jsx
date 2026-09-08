import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Toast from './components/Toast';
import BackToTop from './components/BackToTop';
import './App.css';

export default function App() {
  const [toastMessage, setToastMessage] = useState('');

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3200);
  };

  return (
    <>
      {/* Ambient Animated Mesh Background */}
      <div className="ambient-background" aria-hidden="true">
        <div className="ambient-blob blob-1"></div>
        <div className="ambient-blob blob-2"></div>
        <div className="ambient-blob blob-3"></div>
        <div className="ambient-grid"></div>
      </div>

      <Navbar />

      <main>
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact onShowToast={triggerToast} />
      </main>

      <BackToTop />
      <Toast message={toastMessage} />
    </>
  );
}
