import React from 'react';
import { useNavigate } from 'react-router-dom';
import HomeImg from '../Images/home.jpg';
import '../Css/HomeAbout.css';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaUserGraduate } from 'react-icons/fa';

const Home = () => {
  const navigate = useNavigate();

  const handleStartLearning = () => {
    navigate('/about');
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <motion.section 
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-content">
          <motion.h1 
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Where Algorithms Meet Aspiration
          </motion.h1>
          <motion.p
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Empowering individuals with essential coding skills for today's digital world.
          </motion.p>
          <motion.button 
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleStartLearning}
          >
            Start Learning
          </motion.button>
        </div>
        <motion.div 
          className="hero-image"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <img src={HomeImg} alt="Programming Education" />
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <FaCode className="feature-icon" />
            <h3>Expert Instruction</h3>
            <p>Learn from industry professionals with years of experience.</p>
          </div>
          <div className="feature-card">
            <FaLaptopCode className="feature-icon" />
            <h3>Hands-on Projects</h3>
            <p>Build real-world applications while learning.</p>
          </div>
          <div className="feature-card">
            <FaUserGraduate className="feature-icon" />
            <h3>Personalized Learning</h3>
            <p>Custom-tailored programs for your skill level.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;