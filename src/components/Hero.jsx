import React from 'react';
import './Hero.css';
import heroBg from '../assets/hero_bg.png';

export default function Hero() {
    return (
        <section id="hero" className="hero">
            <div className="hero-bg"
                style={{ backgroundImage: `url(${heroBg})` }}
                role="img"
                aria-label="Premium cab driving on a scenic road representing SS Tours & Cabs service"
            />

            <div className="hero-content">
                <div className="hero-badge">
                    <span className="hero-dot" />
                    Bengaluru's Trusted Cab Partner
                </div>

                <h1 className="hero-title">
                    Travel in <span>Comfort</span> & <br /> Style Across India
                </h1>

                <p className="hero-desc">
                    Premium cab service for airport transfers, outstation trips, corporate travel & city tours.
                    Safe, reliable, and on time — every single ride.
                </p>

                <div className="hero-actions">
                    <a href="#fleet" className="btn-hero-primary">View Our Fleet</a>
                    <a href="tel:+917348969042" className="btn-hero-secondary">Call Now</a>
                </div>
            </div>
        </section>
    );
}
