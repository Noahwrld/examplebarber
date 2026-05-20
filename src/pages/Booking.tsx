import BookingSystem from "../components/BookingSystem";

export default function Booking() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/7195803/pexels-photo-7195803.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt=""
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/80 to-ink" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-gold uppercase tracking-[0.4em] text-xs mb-6">Royal Booking</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">Claim Your <span className="gold-text">Throne</span></h1>
          <p className="text-lg text-cream/70 max-w-2xl mx-auto">
            Five simple steps to book your royal appointment. Pick your service, specialist, and time — we'll handle the rest.
          </p>
        </div>
      </section>

      {/* Booking Wizard */}
      <section className="py-16 px-6 bg-ink-soft">
        <div className="max-w-5xl mx-auto">
          <BookingSystem />
        </div>
      </section>

      {/* Info strip */}
      <section className="py-16 px-6 bg-ink border-t border-gold/20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl mb-3">💳</div>
            <h3 className="font-display text-lg font-bold mb-2">Pay at the Shop</h3>
            <p className="text-cream/60 text-sm">No upfront payment. Settle when you arrive.</p>
          </div>
          <div>
            <div className="text-4xl mb-3">📞</div>
            <h3 className="font-display text-lg font-bold mb-2">Confirmation Call</h3>
            <p className="text-cream/60 text-sm">We'll call 24 hours before your appointment.</p>
          </div>
          <div>
            <div className="text-4xl mb-3">🔄</div>
            <h3 className="font-display text-lg font-bold mb-2">Free Reschedule</h3>
            <p className="text-cream/60 text-sm">Reschedule anytime up to 4 hours in advance.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
