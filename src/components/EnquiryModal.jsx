import React, { useState } from 'react';
import './EnquiryModal.css';

export default function EnquiryModal({ car, onClose }) {
    const [form, setForm] = useState({ name: '', phone: '', pickup: '', drop: '', date: '', msg: '' });

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.phone) { alert('Please fill in your name and phone number.'); return; }
        const waMsg = `Hi SS Tours & Cabs!%0A%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0AVehicle: ${encodeURIComponent(car)}%0APickup: ${encodeURIComponent(form.pickup || 'TBD')}%0ADrop: ${encodeURIComponent(form.drop || 'TBD')}%0ADate: ${form.date || 'TBD'}%0AMessage: ${encodeURIComponent(form.msg || 'No special requirements.')}`;
        window.open(`https://wa.me/917348969042?text=${waMsg}`, '_blank');
        onClose();
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-box" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>✕</button>
                <h3>📩 Enquire Now</h3>
                <form className="modal-form" onSubmit={handleSubmit}>
                    <input name="name" placeholder="Your Full Name" value={form.name} onChange={handleChange} required />
                    <input name="phone" type="tel" placeholder="Mobile Number" value={form.phone} onChange={handleChange} required />
                    <input value={car} readOnly placeholder="Selected Vehicle" />
                    <input name="pickup" placeholder="Pickup Location" value={form.pickup} onChange={handleChange} />
                    <input name="drop" placeholder="Drop Location" value={form.drop} onChange={handleChange} />
                    <input name="date" type="date" value={form.date} onChange={handleChange} />
                    <textarea name="msg" placeholder="Any special requirements..." value={form.msg} onChange={handleChange} />
                    <button type="submit" className="btn-book">Send via WhatsApp 🚀</button>
                </form>
            </div>
        </div>
    );
}
