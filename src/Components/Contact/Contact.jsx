import React from "react";
import "./Contact.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="contact-title">Get in Touch</h2>

      <div className="contact-container">
        
        <div className="contact-info">
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <p>+234-810-355-8837</p>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <p>perpetualokan0@gmail.com</p>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <p>Lagos, Nigeria</p>
          </div>
          <div className="contact-item">
            <FaClock className="contact-icon" />
            <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
          </div>
        </div>

    
        <div className="contact-form">
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      
      <div className="contact-map">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.5826401779524!2d3.379205774457967!3d6.524379393459343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c7d13ff4f85%3A0x54c5b6f3aafcb4d5!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1711583470189!5m2!1sen!2sng"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
