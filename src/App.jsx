import React, { useState } from 'react';
import './index.css';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Fleet from './components/Fleet';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import EnquiryModal from './components/EnquiryModal';
import Footer from './components/Footer';

export default function App() {
  const [selectedCar, setSelectedCar] = useState(null);

  const handleEnquire = (carName) => setSelectedCar(carName);
  const handleCloseModal = () => setSelectedCar(null);

  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Fleet onEnquire={handleEnquire} />
      <WhyUs />
      <Testimonials />

      {/* CTA Banner */}
      <div className="cta-banner">
        <div className="cta-text">
          <div className="section-tag">🚀 Ready to Travel?</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(22px, 3vw, 36px)', marginBottom: 8 }}>
            Book Your Ride <span>Today</span>
          </h2>
          <p style={{ color: 'var(--gray)', fontSize: 15 }}>
            Call us or send a WhatsApp message. Instant booking, zero hassle.
          </p>
        </div>
        <div className="cta-actions">
          <a href="tel:+917348969042" className="btn-primary">📞 +91 734-8969042</a>
          <a href="https://wa.me/917348969042?text=Hi%20SS%20Tours%2C%20I%20need%20to%20book%20a%20cab."
            target="_blank" rel="noreferrer" className="btn-secondary">
            💬 WhatsApp Us
          </a>
        </div>
      </div>

      <Footer />

      {/* WhatsApp Float */}
      <a href="https://wa.me/917348969042?text=Hi%20SS%20Tours%2C%20I%20need%20to%20book%20a%20cab."
        target="_blank" rel="noreferrer" className="wa-float" aria-label="Chat on WhatsApp">
        💬
      </a>

      {/* Enquiry Modal */}
      {selectedCar && <EnquiryModal car={selectedCar} onClose={handleCloseModal} />}
    </>
  );
}
