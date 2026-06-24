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
                            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=viraj pharmacy balwadi&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
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

