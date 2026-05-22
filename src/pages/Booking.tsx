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

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const services = ["Royal Haircut", "Beard Sculpt", "Hot-Towel Shave", "King's Package", "Scalp Massage", "Facial Treatment"];
  const times = ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validation
    if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time || !formData.service) {
      setError("All fields are required");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Invalid email address");
      return;
    }

    // Phone validation
    const phoneRegex = /^\d{10,}$/;
    if (!phoneRegex.test(formData.phone.replace(/\D/g, ""))) {
      setError("Invalid phone number");
      return;
    }

    setLoading(true);

    try {
      // Send to FormSubmit (free form backend service)
      const response = await fetch("https://formsubmit.co/ajax/info@barberking.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          date: formData.date,
          time: formData.time,
          service: formData.service,
          message: `New booking request from ${formData.name} for ${formData.service} on ${formData.date} at ${formData.time}`,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", date: "", time: "", service: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError("Booking failed. Please try again.");
      }
    } catch (err) {
      setError("Error submitting booking. Please try again.");
    } finally {
      setLoading(false);
    }
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
        {submitted ? (
          <div className="bg-green-900/20 border border-green-500 p-8 text-center rounded">
            <h3 className="font-display text-2xl font-bold text-green-400 mb-3">✓ Booking Confirmed!</h3>
            <p className="text-cream/70">Thank you, {formData.name}! Your appointment has been scheduled.</p>
            <p className="text-cream/70 mt-2">A confirmation email has been sent to {formData.email}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 bg-ink-soft p-8 border border-gold/20">
            {error && (
              <div className="bg-red-900/20 border border-red-500 p-4 text-red-400 text-sm">
                {error}
              </div>
            )}

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
              placeholder="Phone Number (10+ digits)"
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
              disabled={loading}
              className="w-full px-6 py-4 bg-gold text-ink font-semibold uppercase tracking-widest hover:bg-gold-light transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Processing..." : "Confirm Booking"}
            </button>
          </form>
        )}
      </section>
    </div>
  );
}
