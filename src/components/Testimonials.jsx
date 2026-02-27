import React, { useRef, useEffect } from 'react';
import './Testimonials.css';

const reviews = [
    { name: 'Rahul Sharma', loc: 'Koramangala, Bengaluru', init: 'R', text: 'Booked SS Tours for my airport transfer at 3 AM. Driver was on time, car was spotless, and the ride was super comfortable. Highly recommended!' },
    { name: 'Priya Nair', loc: 'Indiranagar, Bengaluru', init: 'P', text: 'We used SS Tours for our Coorg trip — the Innova Crysta was well-maintained and our driver was very knowledgeable. Will book again!' },
    { name: 'Arjun Menon', loc: 'Whitefield, Bengaluru', init: 'A', text: 'Best corporate cab service in Bengaluru. Our entire team uses SS Tours for office commutes. Punctual, professional, and great pricing.' },
    { name: 'Sunita Reddy', loc: 'JP Nagar, Bengaluru', init: 'S', text: 'Used Tempo Traveller for our family trip to Mysore — 12 of us, very comfortable ride. The driver was excellent. Price was very reasonable!' },
    { name: 'Deepa & Karthik', loc: 'HSR Layout, Bengaluru', init: 'D', text: 'Hired their wedding cab service. Beautifully decorated car, professional driver, and everything went super smoothly. Amazing service!' },
];

export default function Testimonials() {
    const trackRef = useRef(null);
    const cardW = 364;

    useEffect(() => {
        const interval = setInterval(() => {
            const track = trackRef.current;
            if (!track) return;
            if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 10) {
                track.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                track.scrollBy({ left: cardW, behavior: 'smooth' });
            }
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const scroll = (dir) => trackRef.current?.scrollBy({ left: dir * cardW, behavior: 'smooth' });

    return (
        <section id="testimonials" className="testimonials">
            <div className="text-center">
                <div className="section-tag">❤️ Our Customers</div>
                <h2 className="section-title">What People <span>Say</span></h2>
                <p className="section-sub">Real experiences from our valued customers across Bengaluru.</p>
            </div>

            <div className="testi-track-wrap" ref={trackRef}>
                <div className="testi-track">
                    {reviews.map((r, i) => (
                        <div className="testi-card" key={i}>
                            <div className="stars">★★★★★</div>
                            <p className="testi-text">"{r.text}"</p>
                            <div className="testi-author">
                                <div className="testi-avatar">{r.init}</div>
                                <div>
                                    <div className="testi-name">{r.name}</div>
                                    <div className="testi-loc">{r.loc}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="testi-controls">
                <button className="testi-btn" onClick={() => scroll('left')} aria-label="Previous testimonial">←</button>
                <button className="testi-btn" onClick={() => scroll('right')} aria-label="Next testimonial">→</button>
            </div>
        </section>
    );
}
