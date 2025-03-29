import React from "react";
import "./Services.css";

const Services = () => {
  const services = [
    { 
      id: 1, 
      image: "/images/Dental Cleaning.jpg", 
      title: "Dental Cleaning", 
      desc: "Professional cleaning for healthy teeth and gums." 
    },
    { 
      id: 2, 
      image: "/images/Cosmetic Dentistry.jpg", 
      title: "Cosmetic Dentistry", 
      desc: "Smile makeovers and teeth whitening treatments." 
    },
    { 
      id: 3, 
      image: "/images/Orthodontics.jpg", 
      title: "Orthodontics", 
      desc: "Braces and aligners for a perfect smile." 
    },
    { 
      id: 4, 
      image: "/images/Preventive Care.jpg", 
      title: "Preventive Care", 
      desc: "Regular check-ups and early problem detection." 
    },
    { 
      id: 5, 
      image: "/images/Tooth Extraction.jpg", 
      title: "Tooth Extraction", 
      desc: "Safe and painless tooth removal procedures." 
    },
    { 
      id: 6, 
      image: "/images/Emergency Dental Care.jpg", 
      title: "Emergency Dental Care", 
      desc: "Urgent dental treatments when you need them most." 
    },
  ];

  return (
    <section className="services" id="services">
      <h2 className="services-title">Our Services</h2>
      <div className="services-container">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <img src={service.image} alt={service.title} className="service-image" />
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
