import React from 'react';
import galleryImg1 from '../assets/images/viraj-pharmacy.jpeg';
// import galleryImg2 from '../assets/images/hero-vp.png';
// import galleryImg3 from '../assets/images/banner-vp.png';
// import galleryImg4 from '../assets/images/vp-about.png';
// import galleryImg5 from '../assets/images/about-vp.png';

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
                        <img src={galleryImg1} alt="Viraj Pharmacy View 1" />
                        <div className="gallery-overlay">
                            <i className="fa-solid fa-magnifying-glass-plus"></i>
                        </div>
                    </div>
                    <div className="gallery-item glass-card">
                        <img src={galleryImg1} alt="Viraj Pharmacy View 2" />
                        <div className="gallery-overlay">
                            <i className="fa-solid fa-magnifying-glass-plus"></i>
                        </div>
                    </div>
                    <div className="gallery-item glass-card wide">
                        <img src={galleryImg1} alt="Viraj Pharmacy View 3" />
                        <div className="gallery-overlay">
                            <i className="fa-solid fa-magnifying-glass-plus"></i>
                        </div>
                    </div>
                    <div className="gallery-item glass-card tall">
                        <img src={galleryImg1} alt="Viraj Pharmacy View 4" />
                        <div className="gallery-overlay">
                            <i className="fa-solid fa-magnifying-glass-plus"></i>
                        </div>
                    </div>
                    <div className="gallery-item glass-card">
                        <img src={galleryImg1} alt="Viraj Pharmacy View 5" />
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
