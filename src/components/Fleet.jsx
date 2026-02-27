import React, { useState } from 'react';
import './Fleet.css';
import carInnova from '../assets/car_innova.png';
import carErtiga from '../assets/car_ertiga.png';
import carTempo from '../assets/car_tempo.png';
import carBus from '../assets/car_bus.png';
import carEtios from '../assets/car_etios.png';
import carSwiftDzire from '../assets/car_swift_dzire.png';
import carDzireTour from '../assets/car_dzire_tour.png';
import carAura from '../assets/car_aura.png';

const cars = [
    { name: 'Toyota Etios', category: 'sedan', img: carEtios, seats: '4+1', badge: 'Sedan' },
    { name: 'Maruti Suzuki Swift Dzire', category: 'sedan', img: carSwiftDzire, seats: '4+1', badge: 'Sedan' },
    { name: 'Maruti Suzuki Dzire Tour', category: 'sedan', img: carDzireTour, seats: '4+1', badge: 'Sedan' },
    { name: 'Hyundai Aura', category: 'sedan', img: carAura, seats: '4+1', badge: 'Sedan' },
    { name: 'Toyota Innova Crysta', category: 'suv', img: carInnova, seats: '6+1', badge: 'SUV' },
    { name: 'Toyota Innova', category: 'suv', img: carInnova, seats: '6+1', badge: 'SUV' },
    { name: 'Toyota Innova Hycross / Hybrid', category: 'suv', img: carInnova, seats: '6+1', badge: 'Hybrid' },
    { name: 'Maruti Suzuki Ertiga', category: 'mpv', img: carErtiga, seats: '6+1', badge: 'MPV' },
    { name: '12-Seater Tempo Traveller', category: 'tempo', img: carTempo, seats: '12', badge: 'Tempo' },
    { name: '30-Seater Mini Bus', category: 'bus', img: carBus, seats: '30', badge: 'Bus' },
];
const tabs = ['all', 'sedan', 'suv', 'mpv', 'tempo', 'bus'];

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

            <div className="fleet-tabs" role="tablist">
                {tabs.map(t => (
                    <button
                        key={t}
                        className={`fleet-tab ${active === t ? 'active' : ''}`}
                        onClick={() => setActive(t)}
                        role="tab"
                        aria-selected={active === t}
                        aria-label={`Show ${t === 'all' ? 'all' : t} vehicles`}
                    >
                        {t === 'all' ? 'All Vehicles' : t.toUpperCase() + 's'}
                    </button>
                ))}
            </div>

            <div className="fleet-grid">
                {filtered.map((car, i) => (
                    <div className="fleet-card" key={i}>
                        <div className="fleet-img-wrap">
                            <img src={car.img} alt={`${car.name} - Premium ${car.badge} for hire in Bengaluru`} loading="lazy" decoding="async" />
                            <span className="fleet-badge">{car.badge}</span>
                        </div>
                        <div className="fleet-info">
                            <h3>{car.name}</h3>
                            <div className="fleet-meta">
                                <span>🪑 {car.seats} Seats</span>
                                <span>❄️ AC</span>
                            </div>

                            <div className="fleet-actions">
                                <button
                                    className="btn-enquire"
                                    onClick={() => {
                                        const msg = `Hi SS Tours %26 Cabs! 🚖%0A%0AI'm interested in booking the *${encodeURIComponent(car.name)}* (${car.seats} Seats).%0A%0ACould you please share the availability, route options, and fare details?%0A%0AThank you!`;
                                        window.open(`https://wa.me/917348969042?text=${msg}`, '_blank');
                                    }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    WhatsApp Enquiry
                                </button>
                                <a href="tel:+917348969042" className="btn-call">📞 Call Us</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
