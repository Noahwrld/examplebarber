import { Link } from "react-router-dom";

const team = [
  { name: "Marcus 'The King' Bell", role: "Master Barber & Founder", img: "https://images.pexels.com/photos/12464842/pexels-photo-12464842.jpeg?auto=compress&cs=tinysrgb&w=500" },
  { name: "Andre Williams", role: "Senior Barber", img: "https://images.pexels.com/photos/18503633/pexels-photo-18503633.jpeg?auto=compress&cs=tinysrgb&w=500" },
  { name: "Daniel Rivera", role: "Beard Specialist", img: "https://images.pexels.com/photos/12464838/pexels-photo-12464838.jpeg?auto=compress&cs=tinysrgb&w=500" },
];

export default function About() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/7195803/pexels-photo-7195803.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/80 to-ink" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-gold uppercase tracking-[0.4em] text-xs mb-6">Our Story</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">The BarberKing Legacy</h1>
          <p className="text-lg text-cream/70 max-w-2xl mx-auto">
            A decade of mastery. A legacy of craftsmanship. This is more than a barber shop — it's a royal court.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6 bg-ink-soft">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
            <img src="https://images.pexels.com/photos/13058791/pexels-photo-13058791.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Barber tools" className="rounded-sm" loading="lazy" />
            <div>
              <h2 className="font-display text-3xl font-bold mb-4">Humble Beginnings</h2>
              <p className="text-cream/70 leading-relaxed">
                Founded in 2015 by Marcus Bell, BarberKing started as a single chair in a tiny storefront. Marcus had a vision: to bring the art of classic barbering back to the modern gentleman — with royal service, precision craft, and an atmosphere that felt like home.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2">
              <img src="https://images.pexels.com/photos/12339159/pexels-photo-12339159.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Our shop" className="rounded-sm" loading="lazy" />
            </div>
            <div className="md:order-1">
              <h2 className="font-display text-3xl font-bold mb-4">A Royal Standard</h2>
              <p className="text-cream/70 leading-relaxed">
                Today, BarberKing is an award-winning establishment serving hundreds of kings each week. Our master barbers are classically trained and continuously sharpen their craft. Every service is a ritual, every client is treated like royalty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 bg-ink">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold uppercase tracking-[0.3em] text-xs mb-4">Our Values</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">What We Stand For</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "🎯", title: "Precision", text: "Every cut is deliberate. Every detail matters. We don't rush craftsmanship." },
              { icon: "👑", title: "Royalty", text: "Every guest receives royal treatment. No exceptions, no compromises." },
              { icon: "🔥", title: "Tradition", text: "We honor the ancient art of barbering while embracing modern style." },
            ].map((v) => (
              <div key={v.title} className="text-center p-8 bg-ink-soft border border-gold/10">
                <div className="text-5xl mb-4">{v.icon}</div>
                <h3 className="font-display text-2xl font-bold mb-3 gold-text">{v.title}</h3>
                <p className="text-cream/70 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6 bg-ink-soft">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold uppercase tracking-[0.3em] text-xs mb-4">The Court</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">Meet Our Masters</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((m) => (
              <div key={m.name} className="group">
                <div className="overflow-hidden aspect-[3/4] mb-4">
                  <img src={m.img} alt={m.name} loading="lazy" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <h3 className="font-display text-xl font-bold">{m.name}</h3>
                <p className="text-gold text-sm uppercase tracking-widest">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center bg-ink border-y border-gold/20">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Ready to experience royalty?</h2>
        <Link to="/booking" className="inline-block px-10 py-4 bg-gold text-ink font-semibold uppercase tracking-widest text-sm hover:bg-gold-light transition-all">
          Book Your Throne
        </Link>
      </section>
    </div>
  );
}
