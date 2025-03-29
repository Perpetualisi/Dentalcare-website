import { useState, useEffect } from 'react';
import './Appointment.css';

const Appointment = ({ closeMenu }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        message: ''
    });

    // Scroll to the top when the component mounts
    useEffect(() => {
        window.scrollTo(0, 0);

        // Scroll to Contact section if the hash is #contact
        if (window.location.hash === "#contact") {
            const element = document.getElementById("contact");
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }

        // Close the mobile menu after clicking Appointment
        if (closeMenu) {
            closeMenu();
        }
    }, [closeMenu]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Appointment Details:', formData);
        alert('Appointment request submitted!');

        // Reset form after submission
        setFormData({ name: '', email: '', phone: '', date: '', time: '', message: '' });
    };

    return (
        <div className="appointment-container">
            <h2>Book Your Appointment</h2>
            <form onSubmit={handleSubmit} className="appointment-form">
                <input type="text" name="name" aria-label="Full Name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
                <input type="email" name="email" aria-label="Email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                <input type="tel" name="phone" aria-label="Phone Number" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
                <input type="date" name="date" aria-label="Appointment Date" value={formData.date} onChange={handleChange} required />
                <input type="time" name="time" aria-label="Appointment Time" value={formData.time} onChange={handleChange} required />
                <textarea name="message" aria-label="Additional Message" placeholder="Additional Message" value={formData.message} onChange={handleChange}></textarea>
                <button type="submit">Book Appointment</button>
            </form>

            {/* Contact Section */}
            <div id="contact" className="contact-section">
                <h2>Contact Us</h2>
                <p>Get in touch with us for more details.</p>
            </div>
        </div>
    );
};

export default Appointment;
