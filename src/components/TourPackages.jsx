import React from 'react';
import './TourPackages.css';

import mysoreImg from '../assets/tour_mysore_palace.png';
import coorgImg from '../assets/tour_coorg_hills.png';
import ootyImg from '../assets/tour_ooty_tea_gardens.png';
import tirupatiImg from '../assets/tour_tirupati_temple.png';
import wayanadImg from '../assets/tour_wayanad.png';
import chikmagalurImg from '../assets/tour_chikmagalur.png';
import hampiImg from '../assets/tour_hampi.png';
import nandiImg from '../assets/tour_nandihills.png';

const packages = [
    {
        id: 'mysore',
        title: 'Bangalore to Mysore',
        desc: 'Explore the royal heritage of Mysore including Palace, Chamundi Hills, and Brindavan Gardens.',
        img: mysoreImg,
        tag: 'Royal Heritage'
    },
    {
        id: 'coorg',
        title: 'Bangalore to Coorg',
        desc: 'Escape to the "Scotland of India" with lush coffee plantations, waterfalls, and mist-covered hills.',
        img: coorgImg,
        tag: 'Nature Escape'
    },
    {
        id: 'ooty',
        title: 'Bangalore to Ooty',
        desc: 'Scenic drive to the Queen of Hill Stations — famous for tea gardens, lakes, and the toy train.',
        img: ootyImg,
        tag: 'Hill Station'
    },
    {
        id: 'tirupati',
        title: 'Bangalore to Tirupati',
        desc: 'Divine Balaji Darshan packages from Bangalore with comfortable and timely transport.',
        img: tirupatiImg,
        tag: 'Spiritual'
    },
    {
        id: 'wayanad',
        title: 'Bangalore to Wayanad',
        desc: 'Escape to Kerala\'s lush green hills, serene lakes, and stunning waterfalls.',
        img: wayanadImg,
        tag: 'Nature Escape'
    },
    {
        id: 'chikmagalur',
        title: 'Bangalore to Chikmagalur',
        desc: 'Relax in the fresh air of vast coffee estates and misty peaks.',
        img: chikmagalurImg,
        tag: 'Hill Station'
    },
    {
        id: 'nandihills',
        title: 'Bangalore to Nandi Hills',
        desc: 'Catch a glorious sunrise above the clouds just a short drive from Bangalore.',
        img: nandiImg,
        tag: 'Quick Getaway'
    },
    {
        id: 'hampi',
        title: 'Bangalore to Hampi',
        desc: 'Step back in time and explore the majestic ruins and stone chariots of the Vijayanagara Empire.',
        img: hampiImg,
        tag: 'Heritage'
    }
];

export default function TourPackages() {
    return (
        <section id="packages" className="packages">
            <div className="text-center">
                <div className="section-tag">🌟 Best For You</div>
                <h2 className="section-title">Popular <span>Tour Packages</span></h2>
                <p className="section-sub">Perfectly curated trips from Bangalore for families, couples, and groups.</p>
            </div>

            <div className="packages-grid">
                {packages.map((pkg, i) => (
                    <div className="tp-card" key={i}>
                        <div className="tp-img-wrap">
                            <img src={pkg.img} alt={pkg.title} className="tp-main-img" loading="lazy" decoding="async" />
                            <div className="tp-circle-img">
                                <img src={pkg.img} alt={`${pkg.title} thumbnail`} />
                            </div>
                        </div>
                        <div className="tp-info">
                            <h3 className="tp-title">{pkg.title}</h3>
                            <div className="tp-actions">
                                <button
                                    className="tp-btn-enquiry"
                                    onClick={() => window.open(`https://wa.me/917348969042?text=Hi%20SS%20Tours%2C%20I'm%20interested%20in%20the%20${pkg.title}%20package!`, '_blank')}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '8px' }}>
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    ENQUIRY
                                </button>
                                <a href="tel:+917348969042" className="tp-btn-call">
                                    CALL US
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
