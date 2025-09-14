import React from "react";
import './styles/About.css';
import { FaCode, FaLightbulb, FaUsers, FaBullseye } from "react-icons/fa";

const About = () => {
  return (
    <section className="about-section" id="about">
      <h2 className="about-title">About <span>Me</span></h2>
      <p className="subtitle">
        A passionate IT student with a drive to create meaningful digital experiences
      </p>

      <div className="about-content">
        <div className="about-text">
          <p>
            I'm a final-year IT student at AVC College of Engineering with a passion for full-stack development and emerging technologies. 
            My journey began with curiosity about how technology shapes our world, and has evolved into a dedication to building solutions that make a difference.
          </p>
          <p>
            When I'm not coding, you can find me contributing to open-source projects, participating in hackathons, 
            or exploring the latest in AI and machine learning. I believe in continuous learning and am always excited to take on new challenges.
          </p>
          <div className="skills-tags">
            <span>JavaScript</span>
            <span>Python</span>
            <span>Java</span>
            <span>DSA</span>
          </div>
        </div>

        <div className="about-cards">
          <div className="card">
            <div className="icon"><FaCode /></div>
            <h3>Problem Solver</h3>
            <p>Love tackling complex challenges with creative solutions</p>
          </div>
          <div className="card">
            <div className="icon"><FaLightbulb /></div>
            <h3>Innovation</h3>
            <p>Always exploring new technologies and methodologies</p>
          </div>
          <div className="card">
            <div className="icon"><FaUsers /></div>
            <h3>Team Player</h3>
            <p>Enjoy collaborating and contributing to team success</p>
          </div>
          <div className="card">
            <div className="icon"><FaBullseye /></div>
            <h3>Goal-Oriented</h3>
            <p>Focused on delivering high-quality results on time</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
