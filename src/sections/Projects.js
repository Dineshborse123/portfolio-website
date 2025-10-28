import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "../styles/Projects.css";

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with React, Node.js, and MongoDB featuring user authentication, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      image: "/images/project1.jpg",
      github: "https://github.com/username/ecommerce-platform",
      live: "https://ecommerce-demo.netlify.app",
      featured: true,
      category: "Full Stack",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "Firebase", "Material-UI", "Context API"],
      image: "/images/project2.jpg",
      github: "https://github.com/username/task-manager",
      live: "https://taskapp-demo.netlify.app",
      featured: true,
      category: "Frontend",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "Real-time weather forecasting application with interactive maps, location-based services, and historical data visualization.",
      technologies: ["React", "Chart.js", "OpenWeather API", "Leaflet"],
      image: "/images/project3.jpg",
      github: "https://github.com/username/weather-dashboard",
      live: "https://weather-dash-demo.netlify.app",
      featured: false,
      category: "Frontend",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div
          ref={ref}
          className={`projects-grid ${inView ? "fade-in" : ""}`}
        >
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="image-placeholder">{project.title}</div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
