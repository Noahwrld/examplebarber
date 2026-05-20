export default function Services() {
  const services = [
    { icon: "✂️", name: "Royal Haircut", price: "$35", desc: "Signature cut tailored to your style using classic and modern techniques." },
    { icon: "🧔", name: "Beard Sculpt", price: "$25", desc: "Precision beard shaping with hot oil treatment and detailed line work." },
    { icon: "🪒", name: "Hot-Towel Shave", price: "$30", desc: "Traditional straight razor ritual for the ultimate smooth shave." },
    { icon: "👑", name: "King's Package", price: "$65", desc: "Complete grooming: haircut, shave, facial treatment & scalp massage." },
    { icon: "💆", name: "Scalp Massage", price: "$20", desc: "Rejuvenating scalp treatment to relieve tension and promote hair health." },
    { icon: "🧴", name: "Facial Treatment", price: "$35", desc: "Premium skincare facial designed for men's skin." },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-24 px-6 bg-gradient-to-r from-ink-soft via-ink to-ink-soft border-b border-gold/20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">Our <span className="text-gold">Services</span></h1>
          <p className="text-cream/70 text-lg">Premium Grooming Solutions for the Modern King</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.name} className="p-8 bg-ink-soft border border-gold/10 hover:border-gold/50 transition hover:-translate-y-1">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="font-display text-2xl font-bold mb-3">{service.name}</h3>
              <p className="text-cream/60 mb-6 leading-relaxed">{service.desc}</p>
              <div className="flex justify-between items-center">
                <span className="text-gold font-display text-3xl font-bold">{service.price}</span>
                <a href="/booking" className="text-gold hover:text-gold-light text-sm font-semibold">Book →</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}