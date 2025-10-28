import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <h1>John Doe</h1>
        <p>Full Stack Developer & UI/UX Enthusiast</p>
        <p className="hero-description">
          I create beautiful, responsive web applications with modern technologies
        </p>
        <button className="cta-button" onClick={scrollToProjects}>
          View My Work
        </button>
      </div>
    </section>
  );
};

export default Hero;