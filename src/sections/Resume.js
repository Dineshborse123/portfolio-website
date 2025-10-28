import React from 'react';
import '../styles/Resume.css';

const Resume = () => {
  const experience = [
    {
      id: 1,
      position: "Senior Frontend Developer",
      company: "Tech Company Inc.",
      period: "2022 - Present",
      description: "Led frontend development for multiple client projects, implemented responsive designs, and mentored junior developers.",
      achievements: [
        "Improved application performance by 40%",
        "Implemented CI/CD pipeline",
        "Led team of 4 developers"
      ]
    },
    {
      id: 2,
      position: "Frontend Developer",
      company: "Startup XYZ",
      period: "2020 - 2022",
      description: "Developed and maintained React applications, collaborated with design team, and implemented new features.",
      achievements: [
        "Built 10+ reusable components",
        "Reduced bundle size by 30%",
        "Implemented testing suite"
      ]
    }
  ];

  const education = [
    {
      id: 1,
      degree: "Bachelor of Computer Science",
      institution: "University of Technology",
      period: "2016 - 2020",
      description: "Graduated with honors. Focus on web technologies and software engineering."
    }
  ];

  return (
    <section id="resume" className="resume">
      <div className="container">
        <h2 className="section-title">Resume</h2>
        
        <div className="resume-content">
          <div className="experience-section">
            <h3>Experience</h3>
            {experience.map(exp => (
              <div key={exp.id} className="resume-item">
                <h4>{exp.position}</h4>
                <div className="company-period">
                  <span className="company">{exp.company}</span>
                  <span className="period">{exp.period}</span>
                </div>
                <p>{exp.description}</p>
                <ul className="achievements">
                  {exp.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="education-section">
            <h3>Education</h3>
            {education.map(edu => (
              <div key={edu.id} className="resume-item">
                <h4>{edu.degree}</h4>
                <div className="company-period">
                  <span className="company">{edu.institution}</span>
                  <span className="period">{edu.period}</span>
                </div>
                <p>{edu.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="resume-download">
          <a href="/resume.pdf" download className="btn-primary">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;