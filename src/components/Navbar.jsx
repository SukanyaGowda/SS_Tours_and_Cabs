import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logoImg from '../assets/logo.png';

const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Packages', id: 'packages' },
    { name: 'Fleet', id: 'fleet' },
    { name: 'Why Us', id: 'why' },
    { name: 'Reviews', id: 'testimonials' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleNavClick = (id) => {
        setMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            const offset = 80; // nav height
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'nav-open' : ''}`}>
                <div className="nav-container">
                    <div className="nav-logo" onClick={() => handleNavClick('hero')}>
                        <img src={logoImg} alt="SS Tours & Cabs" className="nav-logo-img" />
                        <div className="nav-logo-text">
                            <span>SS Tours</span>
                            <span>&amp; Cabs</span>
                        </div>
                    </div>

                    <ul className="nav-links">
                        {navLinks.map(link => (
                            <li key={link.id}>
                                <a href={`#${link.id}`} onClick={(e) => { e.preventDefault(); handleNavClick(link.id); }}>
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                </div>
            </nav>

            <div className={`mobile-nav-overlay ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(false)} />

            <div className={`mobile-drawer ${menuOpen ? 'open' : ''}`}>
                <div className="mobile-drawer-header">
                    <div className="nav-logo">
                        <img src={logoImg} alt="SS Tours & Cabs | Premium Bengaluru Taxi Service" className="nav-logo-img" />
                        <div className="nav-logo-text">
                            <span>SS Tours</span>
                            <span>&amp; Cabs</span>
                        </div>
                    </div>
                    <button className="drawer-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">&times;</button>
                </div>
                <div className="mobile-drawer-links">
                    {['hero', 'about', 'services', 'packages', 'fleet', 'why', 'testimonials'].map(id => (
                        <a key={id} href={`#${id}`} className="mobile-link" onClick={(e) => { e.preventDefault(); handleNavClick(id); }}>
                            <span className="link-num">0{['hero', 'about', 'services', 'packages', 'fleet', 'why', 'testimonials'].indexOf(id) + 1}</span>
                            {id === 'hero' ? 'Home' : id === 'why' ? 'Why Choose Us' : id === 'packages' ? 'Tour Packages' : id.charAt(0).toUpperCase() + id.slice(1)}
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
}
