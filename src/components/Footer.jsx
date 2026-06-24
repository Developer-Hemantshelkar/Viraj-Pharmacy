import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer section-animate">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col fade-up">
                        <a href="#" className="logo footer-logo">
                            <i className="fa-solid fa-briefcase-medical"></i>
                            <span>Viraj Pharmacy</span>
                        </a>
                        <p className="footer-desc">Your trusted destination for quality medicines, healthcare products, and
                            daily essentials. Fast, reliable, and authentic.</p>
                        <div className="social-links">
                            <a href="#" className="social-icon magnetic-btn"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="#" className="social-icon magnetic-btn"><i className="fa-brands fa-instagram"></i></a>
                            <a href="#" className="social-icon magnetic-btn"><i className="fa-brands fa-twitter"></i></a>
                            <a href="https://wa.me/919115448547" className="social-icon magnetic-btn"><i className="fa-brands fa-whatsapp"></i></a>
                        </div>
                    </div>

                    <div className="footer-col fade-up delay-1">
                        <h4>Quick Links</h4>
                        <ul className="footer-links">
                            <li><a href="#hero"><i className="fa-solid fa-chevron-right"></i> Home</a></li>
                            <li><a href="#about"><i className="fa-solid fa-chevron-right"></i> About Us</a></li>
                            <li><a href="#services"><i className="fa-solid fa-chevron-right"></i> Services</a></li>
                            <li><a href="#products"><i className="fa-solid fa-chevron-right"></i> Products</a></li>
                            <li><a href="#gallery"><i className="fa-solid fa-chevron-right"></i> Gallery</a></li>
                        </ul>
                    </div>

                    <div className="footer-col fade-up delay-2">
                        <h4>Contact Info</h4>
                        <ul className="footer-contact">
                            <li>
                                <i className="fa-solid fa-location-dot"></i>
                                <span>Solanki Complex, Subhash Marg, Balwadi, 451666</span>
                            </li>
                            <li>
                                <i className="fa-solid fa-phone"></i>
                                <a href="tel:+919111544854">+91 91115 44854</a>
                            </li>
                            <li>
                                <i className="fa-solid fa-envelope"></i>
                                <a href="mailto:rupeshbadgujar777@gmail.com">rupeshbadgujar777@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom fade-up delay-3">
                    <p>&copy; <span>{currentYear}</span> Viraj Pharmacy & General Stores. All rights reserved.</p>
                    <div className="footer-bottom-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
