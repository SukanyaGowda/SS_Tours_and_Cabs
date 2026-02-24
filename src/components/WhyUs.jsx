import React from 'react';
import './WhyUs.css';

const features = [
    { icon: '💰', title: 'Best Price Guarantee', desc: 'Transparent billing with detailed fare breakup. No hidden charges, ever.' },
    { icon: '📞', title: '24/7 Customer Support', desc: "Round-the-clock support via call & WhatsApp. We're always just a message away." },
    { icon: '⭐', title: 'Customer Satisfaction', desc: 'Rated 4.9/5 by thousands of happy travelers. Your comfort is our top priority.' },
    { icon: '🔒', title: 'Safe & Secure Rides', desc: 'Verified, trained, and background-checked drivers for every trip.' },
    { icon: '🚗', title: 'Well-Maintained Fleet', desc: 'Regularly serviced, clean, and air-conditioned vehicles for every journey.' },
    { icon: '📍', title: 'Live Trip Tracking', desc: "Real-time cab tracking and trip updates — so you're always informed." },
];

export default function WhyUs() {
    return (
        <section id="why" className="why">
            <div className="text-center">
                <div className="section-tag">💡 Why SS Tours</div>
                <h2 className="section-title">Why <span>Choose Us?</span></h2>
                <p className="section-sub">We go beyond just transport — we deliver an experience you can trust.</p>
            </div>
            <div className="why-grid">
                {features.map((f, i) => (
                    <div className="why-card" key={i}>
                        <div className="why-icon">{f.icon}</div>
                        <h3>{f.title}</h3>
                        <p>{f.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
