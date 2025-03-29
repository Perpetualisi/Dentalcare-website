import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import HeroSection from './Components/Hero/Hero';
import Appointment from './Components/Appointment/Appointment';
import Navbar from './Components/Navbar/Navbar';
import Services from './Components/Services/Services';
import Reviews from './Components/Reviews/Reviews';
import Contact from './Components/Contact/Contact';
import './App.css';
import Footer from './Components/Footer/Footer';


const ScrollToSection = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            setTimeout(() => {
                const target = document.querySelector(location.hash);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }, [location]);

    return null;
};

function App() {
    return (
        <Router>
            <Navbar />
            <ScrollToSection />
            <Routes>
                <Route path="/" element={<HeroSection />} />
                <Route path="/appointment" element={<Appointment />} />
                <Route path="*" element={<h1>404 - Page Not Found</h1>} />
            </Routes>
            <Services/>
            <Reviews/>
            <Contact/>
            <Footer/>

        </Router>
    );
}

export default App;
