import React, { useEffect, useState } from 'react';

const Navbar = ({ toggleTheme, currentTheme }) => {
    const [scrolled, setScrolled] = useState(false);
    const [menuActive, setMenuActive] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            const sections = document.querySelectorAll('section');
            let current = 'home';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    const closeMenu = () => {
        setMenuActive(false);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
            <div className="nav-container">
                <a href="#" className="logo">
                    <i className="fa-solid fa-briefcase-medical"></i>
                    <span>Viraj Pharmacy</span>
                </a>

                <div className="menu-toggle" id="mobile-menu" onClick={toggleMenu}>
                    <i className={`fa-solid ${menuActive ? 'fa-xmark' : 'fa-bars'}`}></i>
                </div>

                <ul className={`nav-menu ${menuActive ? 'active' : ''}`} id="nav-menu">
                    {['home', 'about', 'services', 'products', 'gallery', 'location', 'contact'].map((section) => (
                        <li key={section}>
                            <a
                                href={`#${section}`}
                                className={`nav-link ${activeSection === section ? 'active' : ''}`}
                                onClick={closeMenu}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </a>
                        </li>
                    ))}
                    <li>
                        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Dark Mode">
                            <i className={`fa-solid ${currentTheme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
                        </button>
                    </li>
                    <li>
                        <a href="https://wa.me/919111544854?text=Hello%20Viraj%20Pharmacy,%20I%20would%20like%20to%20order%20medicines."
                            target="_blank" rel="noopener noreferrer" className="btn-whatsapp-nav btn-rect magnetic-btn">
                            <i className="fa-brands fa-whatsapp"></i> Order Now
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
