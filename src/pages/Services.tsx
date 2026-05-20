import { Link } from "react-router-dom";

const services = [
  {
    icon: "✂️",
    name: "Royal Haircut",
    price: "$35",
    duration: "45 min",
    desc: "A signature cut tailored to your face shape, lifestyle, and personal style. Includes consultation, shampoo, cut, and styling.",
  },
  {
    icon: "🧔",
    name: "Beard Sculpt",
    price: "$25",
    duration: "30 min",
    desc: "Precision beard trimming and shaping with hot-oil treatment. Includes lineup, detailing, and conditioning balm.",
  },
  {
    icon: "🪒",
    name: "Hot-Towel Shave",
    price: "$30",
    duration: "40 min",
    desc: "A traditional straight-razor shave with steaming towels, premium lather, and a soothing aftershave ritual.",
  },
  {
    icon: "👑",
    name: "The King's Package",
    price: "$65",
    duration: "90 min",
    desc: "The full royal experience: haircut, hot-towel shave, beard trim, facial treatment, and scalp massage.",
  },
  {
    icon: "👦",
    name: "Junior Prince Cut",
    price: "$20",
    duration: "30 min",
    desc: "For young kings ages 12 and under. A comfortable, patient cut to start their grooming journey right.",
  },
  {
    icon: "💈",
    name: "Hair Design",
    price: "$15+",
    duration: "Varies",
    desc: "Custom lineups, patterns, and artistic designs etched into your hair. Add-on to any haircut service.",
  },
  {
    icon: "🧖",
    name: "Royal Facial",
    price: "$40",
    duration: "45 min",
    desc: "Deep-cleansing facial with steam, exfoliation, mask, and massage. Revitalize your skin like a king.",
  },
  {
    icon: "🧴",
    name: "Scalp Therapy",
    price: "$25",
    duration: "25 min",
    desc: "Stimulating scalp treatment with essential oils and massage to promote healthy hair growth.",
  },
];

const faqs = [
  {
    q: "Do I need an appointment?",
    a: "We recommend booking ahead to secure your throne, but walk-ins are welcome when chairs are available.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept cash, all major credit cards, Apple Pay, Google Pay, and Venmo.",
  },
  {
    q: "Do you offer gift cards?",
    a: "Yes! Royal Gift Cards are available in-shop and online — perfect for the king in your life.",
  },
  {
    q: "What products do you use?",
    a: "We use premium, professional-grade products from leading men's grooming brands. Ask about retail purchase.",
  },
];

export default function Services() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/13058791/pexels-photo-13058791.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/80 to-ink" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-gold uppercase tracking-[0.4em] text-xs mb-6">The Royal Menu</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">Our Services</h1>
          <p className="text-lg text-cream/70 max-w-2xl mx-auto">
            Every service is a ritual. Every detail, perfected. Choose your royal treatment.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-24 px-6 bg-ink-soft">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div
              key={s.name}
              className="p-8 bg-ink border border-gold/10 hover:border-gold/40 transition-all group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">{s.icon}</div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="font-display text-xl font-bold">{s.name}</h3>
                    <div className="text-right shrink-0">
                      <div className="text-gold font-display text-xl font-bold">{s.price}</div>
                      <div className="text-xs text-cream/50 uppercase tracking-wider">{s.duration}</div>
                    </div>
                  </div>
                  <p className="text-cream/70 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-ink">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold uppercase tracking-[0.3em] text-xs mb-4">FAQ</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">Questions Answered</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="group bg-ink-soft border border-gold/10 p-6 cursor-pointer">
                <summary className="flex items-center justify-between list-none font-display text-lg font-bold">
                  {f.q}
                  <span className="text-gold text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-cream/70 mt-4 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center bg-ink-soft border-y border-gold/20">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Ready to be served?</h2>
        <Link to="/booking" className="inline-block px-10 py-4 bg-gold text-ink font-semibold uppercase tracking-widest text-sm hover:bg-gold-light transition-all">
          Book Now
        </Link>
      </section>
    </div>
  );
}
