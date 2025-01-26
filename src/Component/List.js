import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaTools, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import '../Css/List.css';

const List = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <NavLink to="/" className="logo">
          E-Tutor
        </NavLink>
      </div>

      <button className="nav-toggle" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li>
          <NavLink to="/" onClick={closeMenu}>
            <FaHome className="nav-icon" />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={closeMenu}>
            <FaInfoCircle className="nav-icon" />
            <span>About</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" onClick={closeMenu}>
            <FaTools className="nav-icon" />
            <span>Services</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={closeMenu}>
            <FaEnvelope className="nav-icon" />
            <span>Contact</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default List;
