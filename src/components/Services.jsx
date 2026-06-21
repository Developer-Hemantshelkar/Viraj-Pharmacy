import React from 'react';

const Services = () => {
    const servicesList = [
        { icon: 'fa-prescription-bottle-medical', title: 'Prescription Medicines', desc: 'Authentic medications based on valid doctor prescriptions.' },
        { icon: 'fa-tablets', title: 'OTC Medicines', desc: 'Over-the-counter treatments for common ailments.', delay: 'delay-1' },
        { icon: 'fa-baby', title: 'Baby Care', desc: 'Premium diapers, foods, and baby wellness products.', delay: 'delay-2' },
        { icon: 'fa-hands-bubbles', title: 'Personal Care', desc: 'Hygiene, grooming, and specialized personal care items.', delay: 'delay-3' },
        { icon: 'fa-heart-pulse', title: 'Healthcare', desc: 'Supplements, vitamins, and immunity boosters.', delay: 'delay-4' },
        { icon: 'fa-pump-soap', title: 'Cosmetics', desc: 'Skincare, haircare, and beauty products from top brands.', delay: 'delay-5' },
        { icon: 'fa-basket-shopping', title: 'General Store', desc: 'Daily essentials and household convenience items.', delay: 'delay-6' },
        { icon: 'fa-stethoscope', title: 'Medical Equipment', desc: 'Thermometers, BP monitors, and first-aid tools.', delay: 'delay-7' }
    ];

    return (
        <section id="services" className="services section-padding bg-light section-animate">
            <div className="container">
                <div className="section-title text-center fade-up">
                    <h2>Our Services</h2>
                    <span className="subtitle">Comprehensive Healthcare Solutions</span>
                </div>

                <div className="services-grid">
                    {servicesList.map((service, index) => (
                        <div key={index} className={`service-card glass-card hover-rotate fade-up ${service.delay || ''}`}>
                            <div className="service-icon"><i className={`fa-solid ${service.icon}`}></i></div>
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
