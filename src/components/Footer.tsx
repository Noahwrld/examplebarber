import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-ink-soft border-t border-gold/20 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-3xl">👑</span>
            <span className="font-display text-2xl font-bold gold-text">BarberKing</span>
          </div>
          <p className="text-cream/60 text-sm leading-relaxed">
            Where grooming meets royalty. Master craftsmen delivering timeless style for the modern gentleman.
          </p>
        </div>

        <div>
          <h4 className="text-gold uppercase tracking-widest text-sm mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-cream/70">
            <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-gold transition-colors">About</Link></li>
            <li><Link to="/services" className="hover:text-gold transition-colors">Services</Link></li>
            <li><Link to="/booking" className="hover:text-gold transition-colors">Book Online</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-gold uppercase tracking-widest text-sm mb-4">Hours</h4>
          <ul className="space-y-2 text-sm text-cream/70">
            <li>Mon – Fri: 9:00 – 21:00</li>
            <li>Saturday: 9:00 – 22:00</li>
            <li>Sunday: 10:00 – 18:00</li>
          </ul>
        </div>

        <div>
          <h4 className="text-gold uppercase tracking-widest text-sm mb-4">Visit the Throne</h4>
          <ul className="space-y-2 text-sm text-cream/70">
            <li>123 Crown Street</li>
            <li>Los Angeles, CA 90028</li>
            <li><a href="tel:+15551234567" className="hover:text-gold">+1 (555) 123-4567</a></li>
            <li><a href="mailto:hello@barberking.com" className="hover:text-gold">hello@barberking.com</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} BarberKing. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-gold">Privacy Policy</Link>
            <span>•</span>
            <span>Crafted with ✂️ and 👑</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
