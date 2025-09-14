import React from "react";
import './styles/Skills.css';
import { FaCloud, FaDatabase, FaCode, FaGitAlt, FaFigma, FaWindows } from "react-icons/fa";
import { SiVscodium } from "react-icons/si";

const skillsData = [
  {
    title: "Frontend Development",
    icon: <FaCode />,
    skills: [
      { name: "HTML/CSS", level: 99 },
      { name: "React.js", level: 95 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    title: "Backend Development",
    icon: <FaDatabase />,
    skills: [
      { name: "Node.js/Express.js", level: 90 },
      { name: "Flask", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 85 },
    ],
  },
  // {
  //   title: "Mobile Development",
  //   icon: <FaMobileAlt />,
  //   skills: [
  //     { name: "React Native", level: 78 },
  //     { name: "Flutter", level: 70 },
  //     { name: "Swift", level: 65 },
  //     { name: "Kotlin", level: 68 },
  //   ],
  // },
  {
    title: "DevOps & Cloud",
    icon: <FaCloud />,
    skills: [
      { name: "AWS", level: 75 },
      { name: "Docker", level: 80 },
      { name: "CI/CD", level: 78 },
      { name: "Kubernetes", level: 65 },
    ],
  },
];

const tools = [
  { name: "Git", icon: <FaGitAlt /> },
  { name: "VS Code", icon: <SiVscodium /> },
  { name: "Figma", icon: <FaFigma /> },
  { name: "Windows", icon: <FaWindows /> },
];

const Skills = () => { 
  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">My <span>Skills</span></h2>
      <p className="skills-subtitle">
        A comprehensive toolkit built through academic study and hands-on project experience
      </p>

      <div className="skills-grid">
        {skillsData.map((category, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-header">
              <div className="skill-icon">{category.icon}</div>
              <h3>{category.title}</h3>
            </div>
            {category.skills.map((skill, idx) => (
              <div className="skill-bar" key={idx}>
                <div className="label">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="bar">
                  <div className="filled" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <h3 className="tools-title">Tools & Technologies I Use</h3>
      <div className="tools">
        {tools.map((tool, i) => (
          <div className="tool" key={i}>
            {tool.icon}
            <span>{tool.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;