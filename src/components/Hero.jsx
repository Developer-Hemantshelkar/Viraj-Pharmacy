import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="hero section-animate">
            <div className="hero-content">
                <div className="hero-text fade-up">
                    <h1 className="hero-title">
                        Trusted <span className="text-gradient">Pharmacy</span> Near You
                    </h1>
                    <p className="hero-subtitle">
                        Medicines, Healthcare Products, Cosmetics, General Store Items and Fast WhatsApp Ordering.
                    </p>
                    <div className="hero-buttons">
                        <a href="#products" className="btn btn-primary btn-rect magnetic-btn">
                            Shop Now
                        </a>
                        <a href="https://wa.me/919111544854?text=Hello%20Viraj%20Pharmacy,%20I%20would%20like%20to%20order%20medicines." target="_blank" rel="noopener noreferrer" className="btn btn-primary magnetic-btn">
                            <i className="fa-brands fa-whatsapp"></i> WhatsApp Order
                        </a>
                    </div>
                </div>
                <div className="hero-image-container fade-up delay-2">
                    <div className="glass-card float-3d hover-tilt">
                        <div className="glow-border"></div>
                        <img src="src/assets/images/hero-vp-1.png" alt="Viraj Pharmacy Storefront" className="hero-img zoom-anim" />
                    </div>
                    {/* Floating blobs */}
                    <div className="blob blob-1"></div>
                    <div className="blob blob-2"></div>
                </div>
            </div>
            {/* Decorative Section Divider */}
            <div className="wave-divider">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                </svg>
            </div>
        </section>
    );
};

export default Hero;
