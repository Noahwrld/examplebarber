import { useState } from "react";

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: "",
  });

  const services = ["Royal Haircut", "Beard Sculpt", "Hot-Towel Shave", "King's Package", "Scalp Massage", "Facial Treatment"];
  const times = ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Booking confirmed for ${formData.name} on ${formData.date} at ${formData.time}`);
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-24 px-6 bg-gradient-to-r from-ink-soft via-ink to-ink-soft border-b border-gold/20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">Book Your <span className="text-gold">Throne</span></h1>
          <p className="text-cream/70 text-lg">Reserve your royal grooming experience</p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-24 px-6 max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6 bg-ink-soft p-8 border border-gold/20">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="px-4 py-3 bg-ink border border-gold/20 text-cream placeholder-cream/50 focus:border-gold outline-none transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="px-4 py-3 bg-ink border border-gold/20 text-cream placeholder-cream/50 focus:border-gold outline-none transition"
            />
          </div>

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-ink border border-gold/20 text-cream placeholder-cream/50 focus:border-gold outline-none transition"
          />

          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-ink border border-gold/20 text-cream focus:border-gold outline-none transition"
          >
            <option value="">Select Service</option>
            {services.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>

          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="px-4 py-3 bg-ink border border-gold/20 text-cream focus:border-gold outline-none transition"
            />
            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="px-4 py-3 bg-ink border border-gold/20 text-cream focus:border-gold outline-none transition"
            >
              <option value="">Select Time</option>
              {times.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>

          <button
            type="submit"
            className="w-full px-6 py-4 bg-gold text-ink font-semibold uppercase tracking-widest hover:bg-gold-light transition"
          >
            Confirm Booking
          </button>
        </form>
      </section>
    </div>
  );
}