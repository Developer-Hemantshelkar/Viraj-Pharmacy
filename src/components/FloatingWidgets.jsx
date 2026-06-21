import React, { useEffect, useState } from 'react';

const FloatingWidgets = () => {
    const [showBackToTop, setShowBackToTop] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 500);

            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = (totalScroll / windowHeight) * 100;
            setScrollProgress(scroll);
        };

        const handleMouseMove = (e) => {
            setCursorPos({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('scroll', handleScroll);
        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {/* Scroll Progress Bar */}
            <div className="scroll-progress-bar" id="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>

            {/* Floating WhatsApp Button */}
            <a href="https://wa.me/919115448547?text=Hello%20Viraj%20Pharmacy,%20I%20would%20like%20to%20order%20medicines."
                target="_blank" rel="noopener noreferrer" className="floating-whatsapp magnetic-btn" aria-label="Order on WhatsApp">
                <i className="fa-brands fa-whatsapp"></i>
                <span className="whatsapp-tooltip">Order on WhatsApp</span>
            </a>

            {/* Back to Top Button */}
            <button 
                id="backToTop" 
                className={`back-to-top magnetic-btn ${showBackToTop ? 'visible' : ''}`} 
                aria-label="Back to Top"
                onClick={scrollToTop}
            >
                <i className="fa-solid fa-arrow-up"></i>
            </button>

            {/* Custom Cursor Glow */}
            <div 
                className="cursor-glow" 
                id="cursor-glow"
                style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px`, display: 'block' }}
            ></div>
        </>
    );
};

export default FloatingWidgets;
