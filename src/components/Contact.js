import React, { useRef } from "react";
import "./styles/Contact.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import { useSendMail } from "./context/SendMail";

const Contact = () => {
  const { sendMail } = useSendMail();
  const formRef = useRef();

  const handleSendMail = (e) => {
    e.preventDefault();

    sendMail(formRef.current);
    e.target.reset();
  }

  return (
    <section className="contact-container" id="contact">
      <div className="contact-content">
        <h1>
          Get In <span className="highlight">Touch</span>
        </h1>
        <p className="sub-text">
          Let's collaborate on something amazing. I'm always excited to work on new projects and meet fellow developers.
        </p>

        <div className="contact-wrapper">
          <div className="contact-form">
            <form ref={formRef} onSubmit={handleSendMail}>
              <h3>Send me a message</h3>
              <input type="text" name="name" placeholder="Your Name" required/>
              <input type="email" name="email" placeholder="Your Email" required/>
              <input type="text" name="subject" placeholder="Subject" />
              <textarea name="message" placeholder="Your Message"></textarea>
              <button className="send-btn">
                <FaPaperPlane className="send-icon" /> Send Message
              </button>
            </form>
          </div>

          <div className="contact-info">
            <h3>Contact Information</h3>

            <div className="info-card">
              <div className="icon-box"><FaEnvelope /></div>
              <div>
                <h4>Email</h4>
                <p>vigneshkumaran2315@gmail.com</p>
              </div>
            </div>

            <div className="info-card">
              <div className="icon-box"><FaPhone /></div>
              <div>
                <h4>Phone</h4>
                <p>+91 9597566802</p>
              </div>
            </div>

            <div className="info-card">
              <div className="icon-box"><FaMapMarkerAlt /></div>
              <div>
                <h4>Location</h4>
                <p>Kumbakonam, Thanjavur, Tamilnadu, India</p>
              </div>
            </div>

            <h3>Follow Me</h3>
            <div className="social-icons">
              <a href="https://github.com/Vignesh1725?tab=repositories"><FaGithub /></a>
              <a href="https://linkedin.com/in/vignesh-kumaran-2079182a2/"><FaLinkedin /></a>
              <a href="mailto:vigneshkumaran2315@gmail.com"><FaEnvelope /></a>
            </div>

            <div className="footer-box">
              <h4>Let's build something together!</h4>
              <p>
                I'm currently open to internship opportunities, freelance projects, and collaborations.
                Whether you have a project in mind or just want to chat about technology, I'd love to hear from you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
