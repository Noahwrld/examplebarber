import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-ink border-b border-gold/20 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="font-display text-2xl font-bold text-gold">
          ♔ BarberKing
        </Link>
        
        <div className="hidden md:flex gap-8 items-center">
          <Link to="/" className="text-cream hover:text-gold transition">Home</Link>
          <Link to="/about" className="text-cream hover:text-gold transition">About</Link>
          <Link to="/services" className="text-cream hover:text-gold transition">Services</Link>
          <Link to="/contact" className="text-cream hover:text-gold transition">Contact</Link>
          <Link to="/booking" className="px-6 py-2 bg-gold text-ink font-semibold hover:bg-gold-light transition">
            Book Now
          </Link>
        </div>

        <button 
          className="md:hidden text-cream"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-ink-soft border-t border-gold/20 p-4 space-y-3">
          <Link to="/" className="block text-cream hover:text-gold">Home</Link>
          <Link to="/about" className="block text-cream hover:text-gold">About</Link>
          <Link to="/services" className="block text-cream hover:text-gold">Services</Link>
          <Link to="/contact" className="block text-cream hover:text-gold">Contact</Link>
          <Link to="/booking" className="block px-6 py-2 bg-gold text-ink font-semibold text-center">
            Book Now
          </Link>
        </div>
      )}
    </nav>
  );
}