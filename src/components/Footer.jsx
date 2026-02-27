import React from 'react';
import './Footer.css';
import logoImg from '../assets/logo.png';

export default function Footer() {
    return (
        <footer id="footer" className="footer">
            <div className="footer-top">
                <div className="footer-brand">
                    <div className="footer-logo">
                        <img src={logoImg} alt="SS Tours & Cabs | Professional Cab Service Logo" className="footer-logo-img" />
                        <div className="nav-logo-text">
                            <span>SS Tours</span>
                            <span>&amp; Cabs</span>
                        </div>
                    </div>
                    <p>Bengaluru's most trusted cab &amp; tour service. Safe, affordable, and on time — since 2014.</p>
                    <div className="footer-socials">
                        <a href="#" className="social-btn" aria-label="Facebook">📘</a>
                        <a href="#" className="social-btn" aria-label="Instagram">📸</a>
                        <a href="#" className="social-btn" aria-label="YouTube">▶️</a>
                        <a href="https://wa.me/917348969042" className="social-btn" aria-label="WhatsApp">💬</a>
                    </div>
                </div>

                <div className="footer-col">
                    <h4>Quick Links</h4>
                    <ul>
                        {[['#hero', 'Home'], ['#about', 'About Us'], ['#services', 'Services'], ['#fleet', 'Our Fleet'], ['#testimonials', 'Reviews']].map(([href, label]) => (
                            <li key={href}><a href={href}>{label}</a></li>
                        ))}
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Services</h4>
                    <ul>
                        {['Airport Transfer', 'Outstation Cabs', 'Corporate Travel', 'Wedding Cabs', 'Bus Rental'].map(s => (
                            <li key={s}><a href="#services">{s}</a></li>
                        ))}
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Contact Us</h4>
                    <div className="footer-owner">Sachin U.N</div>
                    <div className="footer-contact-item"><span className="icon">📞</span><p><a href="tel:+917348969042">+91 73489 69042</a></p></div>
                    <div className="footer-contact-item"><span className="icon">✉️</span><p><a href="mailto:Sachinujjani999@gmail.com">Sachinujjani999@gmail.com</a></p></div>
                    <div className="footer-contact-item"><span className="icon">🌐</span><p><a href="http://www.sstoursandcabs.in" target="_blank" rel="noopener noreferrer">www.sstoursandcabs.in</a></p></div>
                    <div className="footer-contact-item"><span className="icon">📍</span><p>Jnana Ganga Nagar, Bengaluru, KA 560056</p></div>
                    <div className="footer-contact-item"><span className="icon">🕒</span><p>Available 24 hours, 7 days a week</p></div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2025 <span>SS Tours &amp; Cabs</span>. All rights reserved.</p>
                <p>Made with ❤️ for Bengaluru Travelers</p>
            </div>
        </footer>
    );
}
