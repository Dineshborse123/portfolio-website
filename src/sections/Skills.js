import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const skills = {
    frontend: [
      { name: "React", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "HTML/CSS", level: 95 },
      { name: "TypeScript", level: 80 }
    ],
    backend: [
      { name: "Node.js", level: 80 },
      { name: "Express", level: 75 },
      { name: "MongoDB", level: 70 },
      { name: "PostgreSQL", level: 65 }
    ],
    tools: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 70 },
      { name: "AWS", level: 65 },
      { name: "Figma", level: 80 }
    ]
  };

  const SkillBar = ({ name, level }) => (
    <div className="skill-item">
      <div className="skill-info">
        <span>{name}</span>
        <span>{level}%</span>
      </div>
      <div className="skill-bar">
        <div 
          className="skill-progress" 
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Frontend</h3>
            {skills.frontend.map(skill => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </div>
          <div className="skill-category">
            <h3>Backend</h3>
            {skills.backend.map(skill => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </div>
          <div className="skill-category">
            <h3>Tools</h3>
            {skills.tools.map(skill => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;