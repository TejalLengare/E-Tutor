import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Css/About.css';
import { FaGraduationCap, FaUsers, FaLaptopCode, FaCertificate, 
         FaCode, FaDatabase, FaMobile, FaDesktop } from 'react-icons/fa';
import aboutImg from '../Images/about1.jpg'; // Using your existing image

const About = () => {
  const navigate = useNavigate();

  const handleEnrollClick = () => {
    navigate('/contact');
  };

  return (
    <div className="about-container">
      {/* Stats Section */}
      <div className="stats-container">
        <div className="stat-item">
          <FaGraduationCap className="stat-icon" />
          <div className="stat-number">50+</div>
          <div className="stat-label">Students Trained</div>
        </div>
        <div className="stat-item">
          <FaUsers className="stat-icon" />
          <div className="stat-number">50+</div>
          <div className="stat-label">Expert Mentors</div>
        </div>
        <div className="stat-item">
          <FaLaptopCode className="stat-icon" />
          <div className="stat-number">100+</div>
          <div className="stat-label">Courses</div>
        </div>
        <div className="stat-item">
          <FaCertificate className="stat-icon" />
          <div className="stat-number">95%</div>
          <div className="stat-label">Success Rate</div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="mission-statement">
        <h1>Unlock Your Coding Potential</h1>
        <p>Our mission is to empower the next generation of developers with cutting-edge 
           skills and practical knowledge. Through personalized mentorship and hands-on 
           projects, we help you transform your coding aspirations into reality.</p>
      </div>

      {/* Program Features */}
      <div className="program-features">
        <h2 className="feature-title">Why Choose Our Program?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <FaCode className="feature-icon" />
            <h3>Personalized Learning</h3>
            <p>Small class sizes ensure individual attention and customized learning paths tailored to your goals and pace.</p>
          </div>
          <div className="feature-card">
            <FaDatabase className="feature-icon" />
            <h3>Industry-Relevant Skills</h3>
            <p>Learn the technologies and best practices used in real-world software development.</p>
          </div>
          <div className="feature-card">
            <FaMobile className="feature-icon" />
            <h3>Hands-on Experience</h3>
            <p>Work on real projects and build a portfolio that showcases your skills to potential employers.</p>
          </div>
        </div>
      </div>

      {/* Student Illustration Section */}
      <div className="student-illustration">
        <img src={aboutImg} alt="Student learning to code" />
        <div className="tech-icons">
          <FaCode className="tech-icon" style={{ top: '20%', left: '10%' }} />
          <FaDatabase className="tech-icon" style={{ top: '40%', right: '10%' }} />
          <FaMobile className="tech-icon" style={{ bottom: '20%', left: '15%' }} />
          <FaDesktop className="tech-icon" style={{ bottom: '30%', right: '15%' }} />
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <h2>Ready to Start Your Journey?</h2>
        <p>Join our community of learners and take the first step towards your coding career.</p>
        <button 
          onClick={handleEnrollClick} 
          className="enroll-button"
        >
          ENROLL NOW
        </button>
      </div>
    </div>
  );
};

export default About;
