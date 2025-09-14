import React from 'react';
import './styles/Projects.css';

const projects = [
  {
    title: "Women Safety Analysis App",
    subtitle: "A comprehensive women safety analysis application that enables real-time gender counting, threat identification, and gesture detection to ensure proactive security and timely response.",
    features: [
      "Real-time gender counting",
      "Threat identification and alerts",
      "Gesture detection for safety signals",
      "Live monitoring and analysis dashboard",
    ],
    tech: ["React.js", "Node.js", "Express", "Flask"],
    live: true,
    image: "/images/wsapic.png",
    links: {
      live: "#",
      code: "#"
    }
  },
  {
    title: "TeleMed360 Virtual Care Platform",
    subtitle: "A secure, real-time virtual healthcare platform enabling patients and doctors to connect seamlessly through encrypted video consultations, appointment scheduling, and health record sharing.",
    features: [
      "End-to-end encrypted video consultations",
      "Appointment booking and scheduling system",
      "Secure electronic health record (EHR) sharing",
      "Doctor–patient communication dashboard",
    ],
    tech: ["React.js", "Node.js", "Express", "MongoDB", "WebRTC", "WebSocket"],
    live: false,
    image: "/images/telemedpic.png",
    links: {
      live: "#",
      code: "#"
    }
  },
    {
    title: "Alumni Connect App",
    subtitle: "A networking platform designed to connect students and alumni for mentorship, career guidance, and collaboration opportunities.",
    features: [
      "Alumni - Student mentorship matching",
      "Event updates and alumni meet scheduling",
      "Job postings and career support",
      "Community discussions and resource sharing",
    ],
    tech: ["Node.js", "Express.js", "PostgreSQL", "Jest", "Supertest"],
    live: false,
    image: "/images/alumniconnectpic.png",
    links: {
      live: "#",
      code: "https://github.com/Vignesh1725/AlumniConnect_App.git"
    }
  }
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">Featured <span>Projects</span></h2>
      <p className="projects-subtitle">
        Showcasing my passion for creating innovative solutions that solve real-world problems
      </p>

      <div className="projects-list">
        {projects.map((project, idx) => (
          <div className="project-card" key={idx}>
            <div className={`project-image ${idx % 2 !== 0 ? 'order-right' : ''}`}>
              {project.live ? (
                <span className="badge badge-live">Live</span>
              ) : (
                <span className="badge badge-dev">In Development</span>
              )}
              <img src={project.image} alt={project.title} className="size-fit"/>
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.subtitle}</p>
              <div className="features">
                <h4>Key Features</h4>
                <ul>
                  {project.features.map((feature, i) => (
                    <li key={i}>➤ {feature}</li>
                  ))}
                </ul>
              </div>
              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
              <div className="project-buttons">
                <a href={project.links.live} className="btn view">View Live</a>
                <a href={project.links.code} className="btn code">Source Code</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;