import React from 'react';

const Products = () => {
    const productsList = [
        { icon: 'fa-capsules', title: 'Medicines', desc: 'All types of prescription and OTC medications.', bgClass: 'bg-gradient-1' },
        { icon: 'fa-baby-carriage', title: 'Baby Products', desc: 'Essential care products for your little ones.', bgClass: 'bg-gradient-2', delay: 'delay-1' },
        { icon: 'fa-dumbbell', title: 'Protein & Supplements', desc: 'Fitness supplements and health drinks.', bgClass: 'bg-gradient-3', delay: 'delay-2' },
        { icon: 'fa-droplet', title: 'Diabetic Care', desc: 'Monitors, test strips, and sugar-free alternatives.', bgClass: 'bg-gradient-4', delay: 'delay-3' },
        { icon: 'fa-kit-medical', title: 'First Aid', desc: 'Bandages, antiseptics, and emergency kits.', bgClass: 'bg-gradient-5', delay: 'delay-4' },
        { icon: 'fa-bag-shopping', title: 'Daily Essentials', desc: 'General store items and FMCG products.', bgClass: 'bg-gradient-6', delay: 'delay-5' }
    ];

    const handleRipple = (e) => {
        const btn = e.currentTarget;
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        btn.appendChild(ripple);
        setTimeout(() => {
            ripple.remove();
        }, 600);
    };

    return (
        <section id="products" className="products section-padding section-animate">
            <div className="container">
                <div className="section-title text-center fade-up">
                    <h2>Featured Categories</h2>
                    <span className="subtitle">Explore Our Range</span>
                </div>

                <div className="products-grid">
                    {productsList.map((product, index) => (
                        <div key={index} className={`product-card glass-card fade-up ${product.delay || ''}`}>
                            <div className="product-img-wrapper">
                                <div className={`product-placeholder ${product.bgClass}`}>
                                    <i className={`fa-solid ${product.icon}`}></i>
                                </div>
                            </div>
                            <div className="product-info">
                                <h3>{product.title}</h3>
                                <p>{product.desc}</p>
                                <button className="btn-text ripple-btn" onClick={handleRipple}>
                                    View Details <i className="fa-solid fa-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
