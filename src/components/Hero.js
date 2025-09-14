import React from "react";
import './styles/Hero.css';
import { Link } from 'react-scroll';
import { FaDownload, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function Hero() {
  return (
    <div className="hero container">
      <div>
        <nav className="navbar">
          <div className="logo">Portfolio</div>
      
          <ul className="nav-links">
            <Link to="about" smooth={true} duration={100}><li>About</li></Link>
            <Link to="skills" smooth={true} duration={100}><li>Skills</li></Link>
            <Link to="projects" smooth={true} duration={100}><li>Projects</li></Link>
            <Link to="education" smooth={true} duration={100}><li>Education</li></Link>
            <Link to="contact" smooth={true} duration={100}><li>Contact</li></Link>
          </ul>
       
          <Link to="contact" smooth={true} duration={100} className="hire-me">Hire Me</Link>
        </nav>
      </div>

      <div className="content">
        <h1>Hi, I'm <span className="highlight">Vigneshkumaran</span></h1>
        <h3>Information Technology Student & Full-Stack Developer</h3>
        <p>
          Passionate about creating innovative solutions and building amazing user experiences.
          Currently pursuing my degree while working on exciting projects.
        </p>
        <div className="buttons">
          <Link to="projects" smooth={true} duration={100} className="work-btn">View My Work</Link>
          <a href="/files/My_Resume.pdf" className="resume-btn" download><FaDownload /> Download Resume</a>
        </div>
        <div className="socials">
          <a href="https://github.com/Vignesh1725?tab=repositories"><FaGithub /></a>
          <a href="https://linkedin.com/in/vignesh-kumaran-2079182a2/"><FaLinkedin /></a>
          <a href="mailto:vigneshkumaran2315@gmail.com"><FaEnvelope /></a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
