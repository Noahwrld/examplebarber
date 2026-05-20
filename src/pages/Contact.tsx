export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-24 px-6 bg-gradient-to-r from-ink-soft via-ink to-ink-soft border-b border-gold/20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">Get in <span className="text-gold">Touch</span></h1>
          <p className="text-cream/70 text-lg">We're here to answer your questions</p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-2xl font-bold text-gold mb-3">📍 Location</h3>
              <p className="text-cream/70">123 Crown Street<br />Los Angeles, CA 90028<br />United States</p>
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-gold mb-3">📞 Phone</h3>
              <a href="tel:+15551234567" className="text-cream hover:text-gold transition">+1 (555) 123-4567</a>
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-gold mb-3">📧 Email</h3>
              <a href="mailto:info@barberking.com" className="text-cream hover:text-gold transition">info@barberking.com</a>
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-gold mb-3">🕐 Hours</h3>
              <p className="text-cream/70">
                Mon - Fri: 9:00 AM - 9:00 PM<br />
                Sat: 10:00 AM - 8:00 PM<br />
                Sun: 12:00 PM - 6:00 PM
              </p>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full px-4 py-3 bg-ink-soft border border-gold/20 text-cream placeholder-cream/50 focus:border-gold outline-none transition"
              />
            </div>
            <div>
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full px-4 py-3 bg-ink-soft border border-gold/20 text-cream placeholder-cream/50 focus:border-gold outline-none transition"
              />
            </div>
            <div>
              <textarea 
                placeholder="Your Message" 
                rows={5}
                className="w-full px-4 py-3 bg-ink-soft border border-gold/20 text-cream placeholder-cream/50 focus:border-gold outline-none transition resize-none"
              />
            </div>
            <button 
              type="submit"
              className="w-full px-6 py-3 bg-gold text-ink font-semibold uppercase tracking-widest hover:bg-gold-light transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}