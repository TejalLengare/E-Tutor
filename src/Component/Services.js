import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLaptopCode, FaMobile, FaDatabase, FaCloud, FaRobot, FaChalkboardTeacher, FaTimes } from 'react-icons/fa';
import '../Css/Services.css';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const navigate = useNavigate();

  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Web Development",
      description: "Learn modern web development with React, Node.js, and other cutting-edge technologies. Build responsive and dynamic websites.",
      features: ["HTML/CSS/JavaScript", "React.js", "Node.js", "Responsive Design"],
      details: {
        curriculum: [
          "Frontend Fundamentals (HTML5, CSS3, JavaScript ES6+)",
          "React.js and State Management",
          "Backend Development with Node.js",
          "Database Integration",
          "API Development and Integration",
          "Responsive Design Principles",
          "Web Security Best Practices"
        ],
        duration: "16 weeks",
        level: "Beginner to Advanced",
        projects: [
          "Personal Portfolio Website",
          "E-commerce Platform",
          "Social Media Dashboard",
          "Real-time Chat Application"
        ]
      }
    },
    {
      icon: <FaMobile />,
      title: "Mobile Development",
      description: "Master mobile app development for iOS and Android. Create cross-platform applications using React Native.",
      features: ["iOS Development", "Android Development", "React Native", "App Publishing"],
      details: {
        curriculum: [
          "Mobile App Development Fundamentals",
          "React Native Core Concepts",
          "iOS & Android Platform Specifics",
          "State Management in Mobile Apps",
          "Native Device Features Integration",
          "App Performance Optimization",
          "App Store & Play Store Publishing"
        ],
        duration: "14 weeks",
        level: "Intermediate",
        projects: [
          "Social Media Mobile App",
          "Food Delivery Application",
          "Fitness Tracking App",
          "Travel Companion App"
        ]
      }
    },
    {
      icon: <FaDatabase />,
      title: "Database Management",
      description: "Understanding database design, SQL, and NoSQL databases. Learn data modeling and query optimization.",
      features: ["SQL", "MongoDB", "Database Design", "Data Modeling"],
      details: {
        curriculum: [
          "Database Design Principles",
          "SQL Fundamentals & Advanced Queries",
          "NoSQL Database Concepts",
          "Data Modeling Best Practices",
          "Database Security",
          "Performance Optimization",
          "Data Backup & Recovery"
        ],
        duration: "12 weeks",
        level: "Beginner to Intermediate",
        projects: [
          "E-commerce Database Design",
          "Social Platform Data Model",
          "Analytics Dashboard",
          "Inventory Management System"
        ]
      }
    },
    {
      icon: <FaCloud />,
      title: "Cloud Computing",
      description: "Explore cloud platforms and learn to deploy scalable applications. Master cloud infrastructure and services.",
      features: ["AWS", "Azure", "Cloud Architecture", "DevOps"],
      details: {
        curriculum: [
          "Cloud Computing Fundamentals",
          "AWS Services Deep Dive",
          "Azure Platform Overview",
          "Cloud Security & Compliance",
          "Serverless Architecture",
          "Container Orchestration",
          "Cloud Cost Optimization"
        ],
        duration: "15 weeks",
        level: "Intermediate to Advanced",
        projects: [
          "Serverless Web Application",
          "Microservices Architecture",
          "Auto-scaling Platform",
          "Multi-cloud Solution"
        ]
      }
    },
    {
      icon: <FaRobot />,
      title: "AI & Machine Learning",
      description: "Introduction to artificial intelligence and machine learning concepts. Learn popular ML frameworks.",
      features: ["Python", "TensorFlow", "Data Analysis", "Neural Networks"],
      details: {
        curriculum: [
          "Python for Machine Learning",
          "Data Preprocessing & Analysis",
          "Machine Learning Algorithms",
          "Deep Learning Fundamentals",
          "Neural Networks Architecture",
          "Computer Vision Basics",
          "Natural Language Processing"
        ],
        duration: "20 weeks",
        level: "Advanced",
        projects: [
          "Image Recognition System",
          "Sentiment Analysis Tool",
          "Predictive Analytics Model",
          "Recommendation Engine"
        ]
      }
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Mentorship Program",
      description: "One-on-one mentorship from industry experts. Get personalized guidance for your coding journey.",
      features: ["Personal Mentor", "Career Guidance", "Code Reviews", "Project Support"],
      details: {
        curriculum: [
          "Personalized Learning Path",
          "Weekly 1-on-1 Sessions",
          "Code Review & Best Practices",
          "Industry Expert Guidance",
          "Career Development Planning",
          "Interview Preparation",
          "Portfolio Development"
        ],
        duration: "24 weeks",
        level: "All Levels",
        projects: [
          "Customized Projects Based on Goals",
          "Industry-specific Applications",
          "Open Source Contributions",
          "Technical Blog Writing"
        ]
      }
    }
  ];

  const handleLearnMore = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  const handleEnroll = () => {
    closeModal();
    navigate('/contact');
  };

  return (
    <div className="services-container">
      <div className="services-header">
        <h1>Our Services</h1>
        <p>Comprehensive learning paths to help you achieve your coding goals</p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ul className="service-features">
              {service.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button 
              className="learn-more-btn"
              onClick={() => handleLearnMore(service)}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedService && (
        <div className="service-modal-overlay" onClick={closeModal}>
          <div className="service-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <FaTimes />
            </button>
            <div className="modal-content">
              <div className="modal-header">
                <div className="modal-icon">{selectedService.icon}</div>
                <h2>{selectedService.title}</h2>
              </div>
              <div className="modal-body">
                <section className="modal-section">
                  <h3>Course Curriculum</h3>
                  <ul>
                    {selectedService.details.curriculum.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </section>
                <section className="modal-section">
                  <h3>Course Details</h3>
                  <p><strong>Duration:</strong> {selectedService.details.duration}</p>
                  <p><strong>Level:</strong> {selectedService.details.level}</p>
                </section>
                <section className="modal-section">
                  <h3>Projects You'll Build</h3>
                  <ul>
                    {selectedService.details.projects.map((project, idx) => (
                      <li key={idx}>{project}</li>
                    ))}
                  </ul>
                </section>
                <button 
                  className="enroll-btn"
                  onClick={handleEnroll}
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="why-choose-us">
        <h2>Why Choose Our Services?</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <h4>Expert Instructors</h4>
            <p>Learn from industry professionals with years of experience</p>
          </div>
          <div className="benefit-item">
            <h4>Hands-on Projects</h4>
            <p>Build real-world projects to strengthen your portfolio</p>
          </div>
          <div className="benefit-item">
            <h4>Flexible Learning</h4>
            <p>Study at your own pace with our flexible schedule</p>
          </div>
          <div className="benefit-item">
            <h4>Career Support</h4>
            <p>Get guidance for job preparation and placement</p>
          </div>
          <div className="benefit-item">
            <h4>Interactive Learning Environment</h4>
            <p>Engage in live coding sessions, group discussions, and collaborative projects</p>
          </div>
          <div className="benefit-item">
            <h4>Industry-Aligned Curriculum</h4>
            <p>Stay updated with the latest technologies and industry trends through regularly updated course content</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;


