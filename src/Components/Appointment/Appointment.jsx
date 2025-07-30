import { useState, useEffect } from "react";
import "./Appointment.css";

const Appointment = ({ closeMenu }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);

    if (window.location.hash === "#contact") {
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }

    if (closeMenu) {
      closeMenu();
    }
  }, [closeMenu]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment Details:", formData);
    alert("Appointment request submitted!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      message: "",
    });
  };

  return (
    <div className="appointment-container">
      <h2 className="section-title">Book Your Appointment</h2>

      <form onSubmit={handleSubmit} className="appointment-form">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          rows="4"
          placeholder="Additional Message (optional)"
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Book Appointment</button>
      </form>

      <div id="contact" className="contact-section">
        <h2 className="section-title">Contact Us</h2>
        <p>Have a question? Reach out to our support team anytime.</p>
      </div>
    </div>
  );
};

export default Appointment;
