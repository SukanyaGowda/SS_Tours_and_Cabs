import React, { useState } from 'react';
import './Fleet.css';

const cars = [
    { name: 'Toyota Etios', category: 'sedan', img: '/car_sedan.png', seats: '4+1', price: '₹12', badge: 'Sedan' },
    { name: 'Swift Dzire', category: 'sedan', img: '/car_sedan.png', seats: '4+1', price: '₹11', badge: 'Sedan' },
    { name: 'Maruti Ciaz', category: 'sedan', img: '/car_sedan.png', seats: '4+1', price: '₹13', badge: 'Sedan' },
    { name: 'Toyota Innova Crysta', category: 'suv', img: '/car_innova.png', seats: '6+1', price: '₹16', badge: 'SUV' },
    { name: 'Maruti Ertiga', category: 'mpv', img: '/car_ertiga.png', seats: '6+1', price: '₹14', badge: 'MPV' },
    { name: 'Toyota Rumion', category: 'suv', img: '/car_innova.png', seats: '5+1', price: '₹15', badge: 'SUV' },
];
const tabs = ['all', 'sedan', 'suv', 'mpv'];

export default function Fleet({ onEnquire }) {
    const [active, setActive] = useState('all');
    const filtered = active === 'all' ? cars : cars.filter(c => c.category === active);

    return (
        <section id="fleet" className="fleet">
            <div className="text-center">
                <div className="section-tag">🚗 Our Fleet</div>
                <h2 className="section-title">Choose Your <span>Ride</span></h2>
                <p className="section-sub">A wide range of well-maintained vehicles to match every need and budget.</p>
            </div>

            <div className="fleet-tabs">
                {tabs.map(t => (
                    <button key={t} className={`fleet-tab ${active === t ? 'active' : ''}`} onClick={() => setActive(t)}>
                        {t === 'all' ? 'All Vehicles' : t.toUpperCase() + 's'}
                    </button>
                ))}
            </div>

            <div className="fleet-grid">
                {filtered.map((car, i) => (
                    <div className="fleet-card" key={i}>
                        <div className="fleet-img-wrap">
                            <img src={car.img} alt={car.name} loading="lazy" />
                            <span className="fleet-badge">{car.badge}</span>
                        </div>
                        <div className="fleet-info">
                            <h3>{car.name}</h3>
                            <div className="fleet-meta">
                                <span>🪑 {car.seats} Seats</span>
                                <span>❄️ AC</span>
                            </div>
                            <div className="fleet-price">
                                <span className="amount">{car.price}</span>
                                <span className="unit">/km onwards</span>
                            </div>
                            <div className="fleet-actions">
                                <button className="btn-enquire" onClick={() => onEnquire(car.name)}>📩 Enquire</button>
                                <button className="btn-call" onClick={() => window.location.href = 'tel:+917348969042'}>📞 Call Us</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
