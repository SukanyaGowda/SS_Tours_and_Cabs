import React from 'react';
import './Services.css';

const services = [
    { icon: '✈️', title: 'Airport Pickup & Drop', desc: 'On-time airport transfers with real-time flight tracking. Available at Kempegowda International Airport 24/7.', tag: '24/7 Available' },
    { icon: '🛣️', title: 'Outstation Cabs', desc: 'One-way and round-trip bookings to popular destinations like Mysore, Coorg, Ooty, Goa & more.', tag: 'All India' },
    { icon: '🏢', title: 'Corporate Cabs', desc: 'Customized corporate transport solutions — monthly packages, employee pick-up & drop, and event logistics.', tag: 'Business Ready' },
    { icon: '💒', title: 'Wedding Cabs', desc: 'Premium decorated cars for weddings, receptions, and all your special celebrations across Bengaluru.', tag: 'Premium Fleet' },
    { icon: '🚌', title: 'Bus & Tempo Traveller', desc: 'Group travel made easy — Tempo Travellers and mini buses for family trips, office outings & pilgrimages.', tag: 'Group Travel' },
    { icon: '🏙️', title: 'Local City Tours', desc: 'Explore Bengaluru and nearby attractions with our guided local tour packages at affordable per-hour rates.', tag: 'Hourly Rates' },
];

export default function Services() {
    return (
        <section id="services" className="services">
            <div className="text-center">
                <div className="section-tag">🗺️ What We Offer</div>
                <h2 className="section-title">Our <span>Services</span></h2>
                <p className="section-sub">From quick city rides to long outstation journeys — choose a service that fits your need.</p>
            </div>

            <div className="services-grid">
                {services.map((s, i) => (
                    <div className="service-card" key={i}>
                        <div className="service-icon-wrap">{s.icon}</div>
                        <h3>{s.title}</h3>
                        <p>{s.desc}</p>
                        <span className="service-tag">{s.tag}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
