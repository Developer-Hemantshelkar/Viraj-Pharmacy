import React from 'react';

const Features = () => {
    return (
        <section id="features" className="features section-padding section-animate">
            <div className="container">
                <div className="features-grid">
                    <div className="feature-card glass-card hover-lift fade-up">
                        <div className="feature-icon"><i className="fa-solid fa-headset"></i></div>
                        <h3>24x7 Support</h3>
                        <p>Always here for your emergency healthcare needs.</p>
                    </div>
                    <div className="feature-card glass-card hover-lift fade-up delay-1">
                        <div className="feature-icon"><i className="fa-solid fa-pills"></i></div>
                        <h3>Quality Medicines</h3>
                        <p>100% genuine and safe pharmaceuticals.</p>
                    </div>
                    <div className="feature-card glass-card hover-lift fade-up delay-2">
                        <div className="feature-icon"><i className="fa-solid fa-user-doctor"></i></div>
                        <h3>Doctor Prescription</h3>
                        <p>We fulfill valid medical prescriptions quickly.</p>
                    </div>
                    <div className="feature-card glass-card hover-lift fade-up delay-3">
                        <div className="feature-icon"><i className="fa-solid fa-truck-fast"></i></div>
                        <h3>Fast Service</h3>
                        <p>Quick processing and instant WhatsApp orders.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
