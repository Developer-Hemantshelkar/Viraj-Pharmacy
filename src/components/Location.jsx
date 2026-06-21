import React from 'react';

const Location = () => {
    return (
        <section id="location" className="location section-padding section-animate">
            <div className="container">
                <div className="section-title text-center fade-up">
                    <h2>Visit Our Store</h2>
                    <span className="subtitle">We're easily accessible</span>
                </div>

                <div className="location-grid">
                    <div className="map-container glass-card fade-up">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117925.21689725832!2d88.26495147493635!3d22.535564936663557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                            width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade" title="Viraj Pharmacy Map"></iframe>
                    </div>
                    <div className="location-details glass-card fade-up delay-1">
                        <h3>Contact Information</h3>
                        <ul className="contact-list">
                            <li>
                                <div className="icon-box"><i className="fa-solid fa-location-dot"></i></div>
                                <div className="info-text">
                                    <strong>Address:</strong>
                                    <p>Solanki Complex, Subhash Marg, Balwadi, 451666</p>
                                </div>
                            </li>
                            <li>
                                <div className="icon-box"><i className="fa-solid fa-phone"></i></div>
                                <div className="info-text">
                                    <strong>Phone Numbers:</strong>
                                    <p><a href="tel:+919111544854">+91 91115 44854</a><br /><a href="tel:+917241123456">+91
                                            72411 23456</a></p>
                                </div>
                            </li>
                            <li>
                                <div className="icon-box"><i className="fa-solid fa-clock"></i></div>
                                <div className="info-text">
                                    <strong>Business Hours:</strong>
                                    <p>Monday - Sunday<br />8:00 AM - 10:30 PM</p>
                                </div>
                            </li>
                        </ul>
                        <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-rect btn-block magnetic-btn"
                            style={{ marginTop: '1.5rem' }}>
                            <i className="fa-solid fa-directions"></i> Get Directions
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;
