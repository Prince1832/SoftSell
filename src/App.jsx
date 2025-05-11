import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ChatWidget from './components/ChatWidget';
import Navbar from './components/Navbar';
import { ThemeProvider } from './components/ThemeContext';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

const AppContent = () => {
  const location = useLocation();

  // References to the sections
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const path = location.pathname;

    // Scroll into the section based on the path
    if (path === '/' && homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (path === '/services' && servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (path === '/testimonials' && testimonialsRef.current) {
      testimonialsRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (path === '/contact' && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]); // Run on location change

  return (
    <div className="font-sans bg-white dark:bg-gray-900 text-gray-800 dark:text-white transition-colors">
      <Navbar />
      <div ref={homeRef}>
        <HeroSection />
      </div>
      <div ref={servicesRef}>
        <HowItWorks />
      </div>
      <WhyChooseUs />
      <div ref={testimonialsRef}>
        <Testimonials />
      </div>
      <div ref={contactRef}>
        <LocationSection />
      </div>
      <ScrollToTopButton />
      <ChatWidget />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
