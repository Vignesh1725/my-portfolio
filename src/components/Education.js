import React from "react";
import "./styles/Education.css";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";

const Education = () => {
  const courseWorks = ["Data Structures & Algorithms", "OOPs", "Web Development", "Database Systems", "Cloud Computing", "Version Control and Collaboration", "IoT and Embedded Systems"];
  // const certificatioms = [
  //         { title: "AWS Certified Cloud Practitioner", org: "Amazon Web Services", year: "2024" },
  //         { title: "Google Analytics Certified", org: "Google", year: "2023" },
  //         { title: "React Developer Certification", org: "Meta", year: "2023" }
  //       ];
  //   const leaderships = [
  //         { title: "Hackathon Winner", icon: <FaTrophy />, content: "1st place at Stanford TreeHacks 2024 for developing an AI-powered accessibility tool" },
  //         { title: "Teaching Assistant", icon: <FaChalkboardTeacher />, content: "CS106A: Mentored 50+ students in foundational programming concepts" },
  //         { title: "Open Source Contributor", icon: <FaBookOpen />, content: "Contributed to React ecosystem with 500+ GitHub stars across projects" }
  //       ]

  return (
    <section className="education-section" id="education">
      <h2 className="education-title">Education & <span>Achievements</span></h2>
      <p className="education-subtitle">
        Academic excellence combined with practical experience and continuous learning
      </p>

      <div className="degree-card"> 
        <div className="icon-box">
          <FaGraduationCap />
        </div>
        <div>
          <h3>Bachelor of Technology in Information Technology</h3>
          <a href="http://www.avccengg.net/">AVC College of Engineering</a>
          <div className="tags">
            <span>2022 - 2026</span>
            <span className="highlight-text">GPA: 8.54/10.0</span>
            <span className="status">Current</span>
          </div>
          <div className="details">
            <div className="left">
              <h4>Relevant Coursework</h4>
              <div className="course-tags">
                {courseWorks.map((course, i) => (
                  <span key={i}>{course}</span>
                ))}
              </div>
            </div>
            <div className="right">
              <h4>Achievements</h4>
              <ul className="achieve-list">
                <li><span><FaCertificate size={10}/></span> Top 4 in TANSAM Hackathon 2025</li>
                <li><span><FaCertificate size={10}/></span> Participated in the ICIRET International Conference 2025</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* <h3 className="cert-title">Professional Certifications</h3>
      <div className="cert-grid">
        {certificatioms.map((cert, i) => (
          <div className="cert-card" key={i}>
            <div className="cert-icon"><FaCertificate /></div>
            <h4>{cert.title}</h4>
            <p>{cert.org}</p>
            <span className="cert-year">{cert.year}</span>
          </div>
        ))}
      </div> */}

      {/* <h3 className="leadership-title">Leadership & Involvement</h3>
      <div className="leadership-grid">
        {leaderships.map((leadership, i) => 
        <div className="lead-card">
          <div className="lead-icon">{leadership.icon}</div>
          <h4>{leadership.title}</h4>
          <p>{leadership.content}</p>
        </div>
        )}
      </div> */}
    </section>
  );
};

export default Education;
