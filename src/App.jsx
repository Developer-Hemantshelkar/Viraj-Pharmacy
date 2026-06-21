import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWidgets from './components/FloatingWidgets';
import ParticleCanvas from './components/ParticleCanvas';

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Initial load logic
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    // Setup fade-up observer for elements rendered after mount
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    // Wait a bit to ensure components are mounted before observing
    setTimeout(() => {
      const fadeElements = document.querySelectorAll('.fade-up');
      fadeElements.forEach(el => observer.observe(el));

      // Magnetic buttons logic
      const magneticBtns = document.querySelectorAll('.magnetic-btn');
      magneticBtns.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
          const rect = btn.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });
        btn.addEventListener('mouseleave', () => {
          btn.style.transform = `translate(0px, 0px)`;
        });
      });
    }, 100);

    // Theme initialization
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }

    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <>
      {loading && (
        <div id="loader" className="loader-wrapper" style={{ transition: 'opacity 0.5s ease', opacity: loading ? 1 : 0 }}>
          <div className="loader">
            <i className="fa-solid fa-staff-snake"></i>
          </div>
          <div className="loader-text">Viraj Pharmacy</div>
        </div>
      )}

      <ParticleCanvas currentTheme={theme} />
      <FloatingWidgets />

      <Navbar toggleTheme={toggleTheme} currentTheme={theme} />
      <Hero />
      <Features />
      <About />
      <Services />
      <Products />
      <Gallery />
      <Location />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
