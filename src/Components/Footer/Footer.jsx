import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-section">
          <h2>DentalCare</h2>
          <p>Your smile is our priority.</p>
        </div>

        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/" onClick={() => scrollToSection("hero")}>Home</Link></li>
            <li><Link to="/" onClick={() => scrollToSection("services")}>Services</Link></li>
            <li><Link to="/" onClick={() => scrollToSection("reviews")}>Reviews</Link></li>
            <li><Link to="/" onClick={() => scrollToSection("contact")}>Contact</Link></li>
          </ul>
        </div>

        
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>
            📍 <a href="https://goo.gl/maps/xyz123" target="_blank" rel="noopener noreferrer">Lagos, Nigeria</a>
          </p>
          <p>
            📞 <a href="tel:+2348103558837">+234-810-355-8837</a>
          </p>
          <p>
            📧 <a href="mailto:perpetualokan0@gmail.com">perpetualokan0@gmail.com</a>
          </p>
        </div>

        
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

  
      <div className="footer-bottom">
        <p>© {currentYear} DentalCare. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
