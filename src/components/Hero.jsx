import React, { useState } from 'react';
import './Hero.css';

export default function Hero({ onOpenModal }) {
    const [form, setForm] = useState({ from: '', to: '', date: '', type: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: false });
    };

    const handleSearch = () => {
        const newErrors = {};
        if (!form.from) newErrors.from = true;
        if (!form.to) newErrors.to = true;
        if (!form.date) newErrors.date = true;
        if (!form.type) newErrors.type = true;
        if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }
        const msg = `Hi SS Tours & Cabs! I want to book a cab.%0AFrom: ${encodeURIComponent(form.from)}%0ATo: ${encodeURIComponent(form.to)}%0ADate: ${form.date}%0ATrip Type: ${encodeURIComponent(form.type)}`;
        window.open(`https://wa.me/917348969042?text=${msg}`, '_blank');
    };

    return (
        <section id="hero" className="hero">
            <div className="hero-bg" />
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

                <div className="booking-form" id="booking">
                    <h3>⚡ Quick Booking</h3>
                    <div className="form-grid">
                        <div className="form-group">
                            <label>From</label>
                            <input name="from" placeholder="Pickup location" value={form.from} onChange={handleChange}
                                style={{ borderColor: errors.from ? '#e74c3c' : '' }} />
                        </div>
                        <div className="form-group">
                            <label>To</label>
                            <input name="to" placeholder="Drop location" value={form.to} onChange={handleChange}
                                style={{ borderColor: errors.to ? '#e74c3c' : '' }} />
                        </div>
                        <div className="form-group">
                            <label>Date</label>
                            <input type="date" name="date" value={form.date} onChange={handleChange}
                                style={{ borderColor: errors.date ? '#e74c3c' : '' }} />
                        </div>
                        <div className="form-group">
                            <label>Trip Type</label>
                            <select name="type" value={form.type} onChange={handleChange}
                                style={{ borderColor: errors.type ? '#e74c3c' : '' }}>
                                <option value="">Select type</option>
                                <option>Airport Pickup/Drop</option>
                                <option>Outstation</option>
                                <option>Local City Tour</option>
                                <option>Corporate</option>
                                <option>Wedding</option>
                            </select>
                        </div>
                        <div className="form-group full">
                            <button className="btn-book" onClick={handleSearch}>Search Available Cabs →</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
