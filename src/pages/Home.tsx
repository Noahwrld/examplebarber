import { Link } from "react-router-dom";

const services = [
  { icon: "✂️", name: "Royal Haircut", price: "$35", desc: "Signature cut tailored to your style" },
  { icon: "🧔", name: "Beard Sculpt", price: "$25", desc: "Precision beard shaping & hot oil" },
  { icon: "🪒", name: "Hot-Towel Shave", price: "$30", desc: "Traditional straight razor ritual" },
  { icon: "👑", name: "King's Package", price: "$65", desc: "Haircut, shave, facial & scalp massage" },
];

const testimonials = [
  { name: "Marcus J.", text: "Best barber shop in the city. Every visit feels like a royal treatment.", rating: 5 },
  { name: "Daniel R.", text: "Attention to detail is unmatched. I won't go anywhere else.", rating: 5 },
  { name: "Andre T.", text: "The atmosphere, the skill, the service — truly a premium experience.", rating: 5 },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img
          src="https://images.pexels.com/photos/13058812/pexels-photo-13058812.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="BarberKing luxury shop"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 text-center px-6 max-w-4xl animate-fade-up">
          <p className="text-gold uppercase tracking-[0.4em] text-xs md:text-sm mb-6">
            ✦ Est. 2015 ✦ Premium Grooming ✦
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
            Rule Your <span className="animate-shine">Crown</span>
          </h1>
          <p className="text-lg md:text-xl text-cream/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Master barbers, timeless craftsmanship, and a royal experience reserved for kings. Welcome to BarberKing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="px-8 py-4 bg-gold text-ink font-semibold uppercase tracking-widest text-sm hover:bg-gold-light transition-all shadow-lg shadow-gold/20"
            >
              Book Your Throne
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 border border-cream/40 text-cream uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition-all"
            >
              View Services
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-24 px-6 bg-ink-soft">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/12464842/pexels-photo-12464842.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Master barber at work"
              className="w-full rounded-sm"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -right-6 bg-gold text-ink p-6 hidden md:block">
              <div className="font-display text-4xl font-bold">10+</div>
              <div className="text-xs uppercase tracking-widest">Years of mastery</div>
            </div>
          </div>
          <div>
            <p className="text-gold uppercase tracking-[0.3em] text-xs mb-4">The BarberKing Legacy</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Where Grooming Meets <span className="gold-text">Royalty</span>
            </h2>
            <p className="text-cream/70 leading-relaxed mb-6">
              Since 2015, BarberKing has redefined the barber experience. We blend traditional craftsmanship with modern style, offering a throne-like chair to every guest who walks through our doors.
            </p>
            <p className="text-cream/70 leading-relaxed mb-8">
              Our master barbers are trained in classical techniques and current trends — so whether you want a timeless cut or a bold statement, you're in expert hands.
            </p>
            <Link to="/about" className="text-gold uppercase tracking-widest text-sm border-b border-gold pb-1 hover:text-gold-light">
              Read Our Story →
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6 bg-ink">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold uppercase tracking-[0.3em] text-xs mb-4">Our Services</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">The Royal Menu</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div
                key={s.name}
                className="group p-8 bg-ink-soft border border-gold/10 hover:border-gold/50 transition-all hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="font-display text-xl font-bold mb-2">{s.name}</h3>
                <p className="text-cream/60 text-sm mb-4 leading-relaxed">{s.desc}</p>
                <div className="text-gold font-display text-2xl font-bold">{s.price}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-block px-8 py-3 border border-gold text-gold uppercase tracking-widest text-sm hover:bg-gold hover:text-ink transition-all"
            >
              See All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 px-6 bg-ink-soft">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold uppercase tracking-[0.3em] text-xs mb-4">Our Craft</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">Precision in Every Cut</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              "https://images.pexels.com/photos/18503633/pexels-photo-18503633.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/12339159/pexels-photo-12339159.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/7195803/pexels-photo-7195803.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/13058791/pexels-photo-13058791.jpeg?auto=compress&cs=tinysrgb&w=600",
            ].map((src, i) => (
              <div key={i} className="overflow-hidden aspect-square group">
                <img src={src} alt={`Gallery ${i + 1}`} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-ink">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold uppercase tracking-[0.3em] text-xs mb-4">Testimonials</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">Words From Our Kings</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="p-8 bg-ink-soft border border-gold/10">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-gold">★</span>
                  ))}
                </div>
                <p className="text-cream/80 leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="text-gold font-display font-bold">— {t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-r from-ink-soft via-ink-mid to-ink-soft border-y border-gold/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Ready to Claim Your <span className="gold-text">Throne?</span>
          </h2>
          <p className="text-cream/70 text-lg mb-8">
            Walk in as a guest. Leave as a king.
          </p>
        <Link
          to="/booking"
          className="inline-block px-10 py-4 bg-gold text-ink font-semibold uppercase tracking-widest text-sm hover:bg-gold-light transition-all"
        >
          Book Appointment
        </Link>
        </div>
      </section>
    </div>
  );
}
