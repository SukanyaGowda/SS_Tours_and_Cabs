import React from 'react';
import './About.css';
import aboutImg from '../assets/about_img.png';

const highlights = [
    { icon: '✈️', title: 'Airport Transfers', desc: 'Timely, stress-free airport pickups & drops, 24/7.' },
    { icon: '🛣️', title: 'Outstation Trips', desc: 'Comfortable rides to any destination across India.' },
    { icon: '🤝', title: 'Corporate Travel', desc: 'Dedicated fleet for business & employee transport.' },
    { icon: '💒', title: 'Wedding Cabs', desc: 'Elegant vehicles for your special occasions.' },
];

export default function About() {
    const base = import.meta.env.BASE_URL;
    return (
        <section id="about" className="about">
            <div className="about-image-wrap">
                <img src={aboutImg} alt="SS Tours & Cabs professional driver" loading="lazy" decoding="async" />
                <div className="about-image-overlay">
                    <div className="badge-since">🏆 Trusted Since 2014</div>
                </div>
            </div>

            <div className="about-content">
                <div className="section-tag">🚖 Who We Are</div>
                <h2 className="section-title">Bengaluru's Premium<br /><span>Cab &amp; Tour Partner</span></h2>
                <p className="section-sub">
                    SS Tours &amp; Cabs has been serving Bengaluru and beyond for over a decade. We specialize in safe,
                    affordable, and comfortable travel — whether it's a quick airport run or a multi-day outstation journey.
                </p>

                <div className="about-highlights">
                    {highlights.map((h, i) => (
                        <div className="highlight-card" key={i}>
                            <div className="highlight-icon">{h.icon}</div>
                            <div>
                                <h4>{h.title}</h4>
                                <p>{h.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <a href="tel:+917348969042" className="contact-btn">
                    📞 Call Us: +91 734-8969042
                </a>
            </div>
        </section>
    );
}
