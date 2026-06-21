import React from 'react';

const Gallery = () => {
    return (
        <section id="gallery" className="gallery section-padding bg-light section-animate">
            <div className="container">
                <div className="section-title text-center fade-up">
                    <h2>Our Gallery</h2>
                    <span className="subtitle">A Glimpse Inside</span>
                </div>

                <div className="masonry-gallery fade-up delay-1">
                    <div className="gallery-item glass-card">
                        <img src="/assets/images/Viraj Pharmacy.jpeg" alt="Viraj Pharmacy View 1" />
                        <div className="gallery-overlay">
                            <i className="fa-solid fa-magnifying-glass-plus"></i>
                        </div>
                    </div>
                    <div className="gallery-item glass-card">
                        <img src="/assets/images/Viraj Pharmacy.jpeg" alt="Viraj Pharmacy View 2" />
                        <div className="gallery-overlay">
                            <i className="fa-solid fa-magnifying-glass-plus"></i>
                        </div>
                    </div>
                    <div className="gallery-item glass-card wide">
                        <img src="/assets/images/Viraj Pharmacy.jpeg" alt="Viraj Pharmacy View 3" />
                        <div className="gallery-overlay">
                            <i className="fa-solid fa-magnifying-glass-plus"></i>
                        </div>
                    </div>
                    <div className="gallery-item glass-card tall">
                        <img src="/assets/images/Viraj Pharmacy.jpeg" alt="Viraj Pharmacy View 4" />
                        <div className="gallery-overlay">
                            <i className="fa-solid fa-magnifying-glass-plus"></i>
                        </div>
                    </div>
                    <div className="gallery-item glass-card">
                        <img src="/assets/images/Viraj Pharmacy.jpeg" alt="Viraj Pharmacy View 5" />
                        <div className="gallery-overlay">
                            <i className="fa-solid fa-magnifying-glass-plus"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
