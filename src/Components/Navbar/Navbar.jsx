import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    closeMenu(); 

    if (location.pathname !== "/") {
      window.location.href = `/#${targetId}`;
    } else {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">DentalCare</div>
        

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li>
            <a href="#hero" onClick={(e) => handleNavClick(e, "hero")}>Home</a>
          </li>
          <li>
            <a href="#services" onClick={(e) => handleNavClick(e, "services")}>Services</a>
          </li>
        
          <li>
            <a href="#reviews" onClick={(e) => handleNavClick(e, "reviews")}>Reviews</a>
          </li>
            <li>
            <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>Contact</a>
          </li>
          <li>
            <Link to="/appointment" className="appointment-btn" onClick={closeMenu}>
              Book Appointment
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
