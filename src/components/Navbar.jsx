import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logoImg from '../assets/logo.png';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleNavClick = (id) => {
        setMenuOpen(false);
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="nav-logo">
                    <img src={logoImg} alt="SS Tours & Cabs" className="nav-logo-img" />
                    <div className="nav-logo-text">
                        <span>SS Tours</span>
                        <span>&amp; Cabs</span>
                    </div>
                </div>

                <ul className="nav-links">
                    {['hero', 'about', 'services', 'fleet', 'why', 'testimonials'].map(id => (
                        <li key={id}>
                            <a href={`#${id}`} onClick={(e) => { e.preventDefault(); handleNavClick(id); }}>
                                {id.charAt(0).toUpperCase() + id.slice(1)}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
                    <span /><span /><span />
                </div>
            </nav>

            <div className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
                {['hero', 'about', 'services', 'fleet', 'why', 'testimonials'].map(id => (
                    <a key={id} href={`#${id}`} onClick={(e) => { e.preventDefault(); handleNavClick(id); }}>
                        {id === 'hero' ? 'Home' : id.charAt(0).toUpperCase() + id.slice(1)}
                    </a>
                ))}
                <a href="#booking" onClick={(e) => { e.preventDefault(); handleNavClick('booking'); }}>
                    Book Now 🚖
                </a>
            </div>
        </>
    );
}
