import React, { useEffect, useRef, useState } from 'react';

const About = () => {
    const statsRef = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !hasAnimated) {
                setHasAnimated(true);
                const counters = document.querySelectorAll('.counter');
                counters.forEach(counter => {
                    const target = +counter.getAttribute('data-target');
                    const duration = 2000;
                    const increment = target / (duration / 16);
                    let current = 0;

                    const updateCounter = () => {
                        current += increment;
                        if (current < target) {
                            counter.innerText = Math.ceil(current);
                            requestAnimationFrame(updateCounter);
                        } else {
                            counter.innerText = target;
                        }
                    };
                    updateCounter();
                });
            }
        });

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => observer.disconnect();
    }, [hasAnimated]);

    return (
        <section id="about" className="about section-padding section-animate">
            <div className="container">
                <div className="about-grid">
                    <div className="about-image glass-card hover-tilt fade-up">
                        <img src="/assets/images/VP about.png" alt="About Viraj Pharmacy" />
                        <div className="experience-badge">
                            <span className="number">Premium</span>
                            <span className="text">Healthcare</span>
                        </div>
                    </div>
                    <div className="about-content fade-up delay-1">
                        <div className="section-title">
                            <h2>About Us</h2>
                            <span className="subtitle">Your Health, Our Priority</span>
                        </div>
                        <p>Welcome to <strong>Viraj Pharmacy & General Stores</strong>. We are a premier healthcare
                            destination committed to providing high-quality medicines, healthcare products, baby care
                            essentials, and general store items to our community.</p>
                        <p>With an emphasis on authenticity and fast service, we ensure that you get exactly what you need,
                            when you need it. Our dedicated WhatsApp ordering system allows you to skip the line and get
                            your essentials seamlessly.</p>

                        <div className="stats-grid" ref={statsRef}>
                            <div className="stat-item glass-card">
                                <i className="fa-solid fa-users text-accent"></i>
                                <h4 className="counter" data-target="5000">0</h4><span>+</span>
                                <p>Happy Customers</p>
                            </div>
                            <div className="stat-item glass-card">
                                <i className="fa-solid fa-box-open text-primary"></i>
                                <h4 className="counter" data-target="100">0</h4><span>+</span>
                                <p>Healthcare Products</p>
                            </div>
                            <div className="stat-item glass-card">
                                <i className="fa-solid fa-capsules text-secondary"></i>
                                <h4 className="counter" data-target="1000">0</h4><span>+</span>
                                <p>Medicines</p>
                            </div>
                            <div className="stat-item glass-card">
                                <i className="fa-solid fa-star text-warning"></i>
                                <h4 className="counter" data-target="5">0</h4><span>★</span>
                                <p>Customer Satisfaction</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
