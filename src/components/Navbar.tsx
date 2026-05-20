import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/services", label: "Services" },
  { path: "/booking", label: "Book" },
  { path: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink/95 backdrop-blur-md border-b border-gold/20 py-3"
          : "bg-gradient-to-b from-black/80 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="text-3xl">👑</span>
          <div className="flex flex-col leading-none">
            <span className="font-display text-xl md:text-2xl font-bold gold-text tracking-wider">
              BarberKing
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-cream/60">
              Royal Grooming
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm uppercase tracking-widest transition-colors relative ${
                location.pathname === item.path
                  ? "text-gold"
                  : "text-cream/80 hover:text-gold"
              }`}
            >
              {item.label}
              {location.pathname === item.path && (
                <span className="absolute -bottom-2 left-0 right-0 h-px bg-gold" />
              )}
            </Link>
          ))}
          <Link
            to="/booking"
            className="ml-2 px-5 py-2 border border-gold text-gold hover:bg-gold hover:text-ink text-sm uppercase tracking-widest transition-all"
          >
            Book Now
          </Link>
        </nav>

        <button
          className="md:hidden text-cream"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-ink/98 backdrop-blur-md border-t border-gold/20">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm uppercase tracking-widest py-2 ${
                  location.pathname === item.path ? "text-gold" : "text-cream/80"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/booking"
              className="px-5 py-3 border border-gold text-gold text-center text-sm uppercase tracking-widest"
            >
              Book Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
