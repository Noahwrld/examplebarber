import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink-soft border-t border-gold/20 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-display text-xl font-bold text-gold mb-4">♔ BarberKing</h3>
            <p className="text-cream/60 text-sm">Premium barber shop offering master haircuts, beard grooming, and hot-towel shaves.</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-cream mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-cream/60">
              <li><Link to="/" className="hover:text-gold transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-gold transition">About</Link></li>
              <li><Link to="/services" className="hover:text-gold transition">Services</Link></li>
              <li><Link to="/booking" className="hover:text-gold transition">Booking</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-cream mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-cream/60">
              <li><a href="tel:+15551234567" className="hover:text-gold transition">+1 (555) 123-4567</a></li>
              <li><a href="mailto:info@barberking.com" className="hover:text-gold transition">info@barberking.com</a></li>
              <li className="pt-2">123 Crown Street<br />Los Angeles, CA 90028</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-cream mb-4">Hours</h4>
            <ul className="space-y-1 text-sm text-cream/60">
              <li>Mon - Fri: 9:00 AM - 9:00 PM</li>
              <li>Sat: 10:00 AM - 8:00 PM</li>
              <li>Sun: 12:00 PM - 6:00 PM</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gold/20 pt-8 flex justify-between items-center text-sm text-cream/60">
          <p>&copy; {currentYear} BarberKing. All rights reserved.</p>
          <Link to="/privacy" className="hover:text-gold transition">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}