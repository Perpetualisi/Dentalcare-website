import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const HeroSection = () => {
  return (
    <section id='hero' className="hero">
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>We Bring Your <span className="highlight">Healthy Smiles</span></h1>
        <br />
        <p>Let's take care of your teeth</p>
        <br />
        <div className="image-container">
          <img src="/images/Dentist1.jpg" alt="Dentist 1" className="circle-image" />
          <img src="/images/Dentist2.jpg" alt="Dentist 2" className="circle-image" />
          <img src="/images/Dentist3.jpg" alt="Dentist 3" className="circle-image" />
        </div>
        <br />
        <br />
        
        <div className="search-box">
          <input type="text" placeholder="Search services, doctors..." className="search-input" />
        </div>

        <br />
        <br />
        <Link to="/appointment" className="appointment-button">Book Appointment</Link>
      </div>
    </section>
  );
};

export default HeroSection;
