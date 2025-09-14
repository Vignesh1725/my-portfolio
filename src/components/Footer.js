import React from "react";
import "./styles/Footer.css";
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaAddressBook, FaAddressCard } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3 className="footer-name">Vigneshkumran</h3>
          <p className="footer-desc">
            IT student passionate about creating innovative
            solutions and building amazing user experiences.
          </p>
          <div className="footer-icons">
            <a href="https://github.com/Vignesh1725?tab=repositories"><FaGithub /></a>
            <a href="https://linkedin.com/in/vignesh-kumaran-2079182a2/"><FaLinkedin /></a>
            <a href="mailto:vigneshkumaran2315@gmail.com"><FaEnvelope /></a>
          </div>
        </div>

        <div className="footer-middle">
          <h4>Quick Links</h4>
          <ul>
            <Link to="about" smooth={true} duration={100}><li>About</li></Link>
            <Link to="skills" smooth={true} duration={100}><li>Skills</li></Link>
            <Link to="projects" smooth={true} duration={100}><li>Projects</li></Link>
            <Link to="education" smooth={true} duration={100}><li>Education</li></Link>
            <Link to="contact" smooth={true} duration={100}><li>Contact</li></Link>
          </ul>
        </div>

        <div className="footer-right">
          <h4>Get In Touch</h4>
          <p><FaEnvelope /> <span>vigneshkumaran2315@gmail.com</span></p>
          <p><FaPhone /> <span>+91 9597566802</span></p>
          <p><FaAddressCard /> <span>Kumbakonam, Thanjavur, Tamilnadu, India</span></p>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p>© 2025 Vigneshkumran. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
