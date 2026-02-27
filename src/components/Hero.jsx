import React from 'react';
import './Hero.css';
import heroBg from '../assets/hero_bg.png';

export default function Hero({ onOpenModal }) {
    return (
        <section id="hero" className="hero">
            <div className="hero-bg" style={{ backgroundImage: `url('${heroBg}')` }} />
            <div className="hero-content">
                <div className="hero-badge">
                    <span className="hero-dot" />
                    Bengaluru's Trusted Cab Service
                </div>
                <h1 className="hero-title">
                    <span className="line1">Travel in</span>
                    <span className="line2">Comfort &amp; Style</span>
                    <span className="line3">Across India</span>
                </h1>
                <p className="hero-desc">
                    Premium cab service for airport transfers, outstation trips, corporate travel &amp; city tours.<br />
                    Safe, reliable, and on time — every single ride.
                </p>
            </div>
        </section>
    );
}
