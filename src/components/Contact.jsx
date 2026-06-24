import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle, sending, sent

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.name && formData.phone && formData.message) {
            setStatus('sending');

            try {
                const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify({
                        access_key: "6be92a5f-68c5-417d-ac3f-5ff81211eb2f", // Replace with your actual key
                        subject: "New Contact Form Submission from Viraj Pharmacy",
                        name: formData.name,
                        phone: formData.phone,
                        message: formData.message,
                    }),
                });

                const result = await response.json();

                if (result.success) {
                    setStatus('sent');
                    setFormData({ name: '', phone: '', message: '' });
                    setTimeout(() => {
                        setStatus('idle');
                    }, 3000);
                } else {
                    console.error("Submission failed:", result);
                    setStatus('idle');
                    alert("Something went wrong. Please try again.");
                }
            } catch (error) {
                console.error("Error sending message:", error);
                setStatus('idle');
                alert("Something went wrong. Please check your internet connection.");
            }
        }
    };

    return (
        <section id="contact" className="contact section-padding bg-light section-animate">
            <div className="container">
                <div className="contact-wrapper glass-card fade-up">
                    <div className="contact-form-container">
                        <div className="section-title">
                            <h2>Send us a Message</h2>
                            <span className="subtitle">We respond quickly!</span>
                        </div>
                        <form id="contactForm" className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input type="text" id="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" className="glass-input" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input type="tel" id="phone" value={formData.phone} onChange={handleChange} required placeholder="+91 XXXXX XXXXX" className="glass-input" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Your Message</label>
                                <textarea id="message" rows="4" value={formData.message} onChange={handleChange} required placeholder="How can we help you?" className="glass-input"></textarea>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary btn-rect magnetic-btn ripple-btn w-100"
                                style={status === 'sent' ? { background: 'var(--accent)' } : {}}
                            >
                                {status === 'idle' && <>Send Message <i className="fa-solid fa-paper-plane"></i></>}
                                {status === 'sending' && <><i className="fa-solid fa-spinner fa-spin"></i> Sending...</>}
                                {status === 'sent' && <><i className="fa-solid fa-check"></i> Sent Successfully</>}
                            </button>
                        </form>
                    </div>
                    <div className="contact-illustration">
                        <div className="floating-icons">
                            <i className="fa-solid fa-envelope float-anim-1"></i>
                            <i className="fa-solid fa-phone-volume float-anim-2"></i>
                            <i className="fa-brands fa-whatsapp float-anim-3"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
