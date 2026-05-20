import { useState, FormEvent } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "Royal Haircut", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate sending. In WordPress this POSTs to admin-post.php or uses a CF7/WPForms endpoint.
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", phone: "", service: "Royal Haircut", message: "" });
    }, 1200);
  };

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/13058812/pexels-photo-13058812.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/80 to-ink" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-gold uppercase tracking-[0.4em] text-xs mb-6">Get in Touch</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">Claim Your Throne</h1>
          <p className="text-lg text-cream/70 max-w-2xl mx-auto">
            Book an appointment, ask a question, or just say hello. We're here for you.
          </p>
        </div>
      </section>

      {/* Info + Form */}
      <section className="py-24 px-6 bg-ink-soft">
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-10">
          {/* Info */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <p className="text-gold uppercase tracking-[0.3em] text-xs mb-2">Visit</p>
              <h3 className="font-display text-2xl font-bold mb-2">The Royal Court</h3>
              <p className="text-cream/70 leading-relaxed">
                123 Crown Street<br />
                Los Angeles, CA 90028
              </p>
            </div>

            <div>
              <p className="text-gold uppercase tracking-[0.3em] text-xs mb-2">Contact</p>
              <h3 className="font-display text-2xl font-bold mb-2">Reach Us</h3>
              <ul className="space-y-2 text-cream/70">
                <li><a href="tel:+15551234567" className="hover:text-gold">📞 +1 (555) 123-4567</a></li>
                <li><a href="mailto:hello@barberking.com" className="hover:text-gold">✉️ hello@barberking.com</a></li>
                <li><a href="https://wa.me/15551234567" className="hover:text-gold">💬 WhatsApp Chat</a></li>
              </ul>
            </div>

            <div>
              <p className="text-gold uppercase tracking-[0.3em] text-xs mb-2">Hours</p>
              <h3 className="font-display text-2xl font-bold mb-2">The Court Opens</h3>
              <ul className="space-y-1 text-cream/70 text-sm">
                <li>Monday – Friday: 9:00 – 21:00</li>
                <li>Saturday: 9:00 – 22:00</li>
                <li>Sunday: 10:00 – 18:00</li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3">
            <div className="bg-ink border border-gold/20 p-8 md:p-10">
              <h3 className="font-display text-2xl font-bold mb-6">Book an Appointment</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-cream/60 mb-2">Full Name *</label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-ink-soft border border-cream/20 px-4 py-3 text-cream focus:border-gold focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-cream/60 mb-2">Phone *</label>
                    <input
                      required
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-ink-soft border border-cream/20 px-4 py-3 text-cream focus:border-gold focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-cream/60 mb-2">Email *</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-ink-soft border border-cream/20 px-4 py-3 text-cream focus:border-gold focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-cream/60 mb-2">Service</label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full bg-ink-soft border border-cream/20 px-4 py-3 text-cream focus:border-gold focus:outline-none transition-colors"
                  >
                    <option>Royal Haircut</option>
                    <option>Beard Sculpt</option>
                    <option>Hot-Towel Shave</option>
                    <option>The King's Package</option>
                    <option>Junior Prince Cut</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-cream/60 mb-2">Message</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Preferred date, time, or any notes..."
                    className="w-full bg-ink-soft border border-cream/20 px-4 py-3 text-cream focus:border-gold focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-4 bg-gold text-ink font-semibold uppercase tracking-widest text-sm hover:bg-gold-light transition-colors disabled:opacity-50"
                >
                  {status === "sending" ? "Sending..." : status === "sent" ? "✓ Message Received" : "Request Appointment"}
                </button>

                {status === "sent" && (
                  <p className="text-green-400 text-sm text-center">
                    Thank you! We'll confirm your throne within 24 hours.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-ink">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-10">
            <p className="text-gold uppercase tracking-[0.3em] text-xs mb-4">Find Us</p>
            <h2 className="font-display text-4xl font-bold">Visit The Court</h2>
          </div>
          <div className="border border-gold/20 overflow-hidden">
            <iframe
              title="BarberKing location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7!2d-118.3287!3d34.0981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sHollywood!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="450"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
