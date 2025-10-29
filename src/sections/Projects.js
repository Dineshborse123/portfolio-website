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
      title: "Online Loan Application & Verification System",
      description:
        "B.Sc. IT academic project using React and Node.js. Users submit loan applications with document upload and basic KYC. Admins review, approve/reject, and update status. Focus on authentication, forms, and secure data storage.",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB"],
      image: "/images/project1.jpg",
      github: "https://github.com/username/ecommerce-platform",
      live: "https://ecommerce-demo.netlify.app",
      featured: true,
      category: "Full Stack",
    },
    {
      id: 2,
      title: "GYM Management System",
      description:
        "College project to manage gym memberships, attendance, trainer schedules, and class bookings. Includes simple payment tracking and a clean dashboard. Built as part of B.Sc. IT coursework.",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Firebase"],
      image: "/images/project2.jpg",
      github: "https://github.com/username/task-manager",
      live: "https://taskapp-demo.netlify.app",
      featured: true,
      category: "Frontend",
    },
    {
      id: 3,
      title: "Online Voting System",
      description:
        "Academic project implementing secure voter registration with OTP verification and role-based access. Students cast votes once; admins see a live tally and basic audit logs. Built during B.Sc. IT.",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "PostgreSQL"],
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
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
