import { useState } from "react";
import {
  services,
  specialists,
  getAvailableSlots,
  formatDate,
  formatTime12h,
  type Service,
  type Specialist,
} from "../data/booking";
import Calendar from "./Calendar";

interface BookingData {
  service: Service | null;
  specialist: Specialist | null;
  date: Date | null;
  time: string | null;
  name: string;
  email: string;
  phone: string;
  specialRequest: string;
}

const initial: BookingData = {
  service: null,
  specialist: null,
  date: null,
  time: null,
  name: "",
  email: "",
  phone: "",
  specialRequest: "",
};

const STEPS = [
  { label: "Service", num: 1 },
  { label: "Specialist", num: 2 },
  { label: "Date & Time", num: 3 },
  { label: "Your Details", num: 4 },
  { label: "Confirm", num: 5 },
];

const SPECIAL_REQUEST_PRESETS = [
  "First time visit",
  "Sensitive skin — gentle products only",
  "Prefer quiet appointment",
  "Running slightly late (call me)",
  "Need parking spot reserved",
  "Birthday appointment 🎂",
];

export default function BookingSystem() {
  const [step, setStep] = useState(1);
  const [booking, setBooking] = useState<BookingData>(initial);
  const [month, setMonth] = useState<Date>(() => new Date());
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [confirmationId, setConfirmationId] = useState<string>("");

  const canNext = () => {
    if (step === 1) return !!booking.service;
    if (step === 2) return !!booking.specialist;
    if (step === 3) return !!booking.date && !!booking.time;
    if (step === 4) return !!booking.name && !!booking.email && !!booking.phone;
    return true;
  };

  const next = () => step < 5 && canNext() && setStep(step + 1);
  const prev = () => step > 1 && setStep(step - 1);

  const handleSubmit = () => {
    setStatus("submitting");
    setTimeout(() => {
      const id = "BK-" + Math.random().toString(36).substring(2, 8).toUpperCase();
      setConfirmationId(id);
      setStatus("success");
    }, 1200);
  };

  const startOver = () => {
    setBooking(initial);
    setStep(1);
    setStatus("idle");
    setConfirmationId("");
  };

  const slots = booking.date ? getAvailableSlots(booking.date.toISOString().split("T")[0]) : [];

  return (
    <div className="bg-ink border border-gold/20 p-6 md:p-10">
      {/* Progress */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-2 overflow-x-auto">
          {STEPS.map((s, i) => {
            const active = step === s.num;
            const done = step > s.num;
            return (
              <div key={s.num} className="flex items-center shrink-0">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                      done
                        ? "bg-gold text-ink"
                        : active
                        ? "bg-gold text-ink ring-4 ring-gold/20"
                        : "bg-ink-soft border border-cream/20 text-cream/50"
                    }`}
                  >
                    {done ? "✓" : s.num}
                  </div>
                  <span
                    className={`text-xs uppercase tracking-widest mt-2 whitespace-nowrap ${
                      active ? "text-gold" : done ? "text-cream" : "text-cream/40"
                    }`}
                  >
                    {s.label}
                  </span>
                </div>
                {i < STEPS.length - 1 && (
                  <div
                    className={`hidden sm:block w-12 md:w-20 h-px mx-2 mb-6 ${
                      done ? "bg-gold" : "bg-cream/20"
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* SUCCESS */}
      {status === "success" && (
        <div className="text-center py-10 animate-fade-up">
          <div className="text-6xl mb-4">👑</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3 gold-text">
            Your Throne is Reserved
          </h2>
          <p className="text-cream/70 mb-6">
            A confirmation has been sent to <span className="text-gold">{booking.email}</span>
          </p>

          <div className="bg-ink-soft border border-gold/30 p-6 md:p-8 max-w-md mx-auto text-left space-y-3 mb-8">
            <div className="flex justify-between border-b border-cream/10 pb-2">
              <span className="text-cream/60 text-sm">Booking ID</span>
              <span className="text-gold font-mono font-bold">{confirmationId}</span>
            </div>
            <div className="flex justify-between border-b border-cream/10 pb-2">
              <span className="text-cream/60 text-sm">Service</span>
              <span className="text-cream font-semibold">{booking.service?.name}</span>
            </div>
            <div className="flex justify-between border-b border-cream/10 pb-2">
              <span className="text-cream/60 text-sm">Specialist</span>
              <span className="text-cream font-semibold">{booking.specialist?.name}</span>
            </div>
            <div className="flex justify-between border-b border-cream/10 pb-2">
              <span className="text-cream/60 text-sm">Date</span>
              <span className="text-cream font-semibold">{booking.date && formatDate(booking.date)}</span>
            </div>
            <div className="flex justify-between border-b border-cream/10 pb-2">
              <span className="text-cream/60 text-sm">Time</span>
              <span className="text-cream font-semibold">{booking.time && formatTime12h(booking.time)}</span>
            </div>
            <div className="flex justify-between pt-1">
              <span className="text-cream/60 text-sm">Total</span>
              <span className="text-gold font-display text-xl font-bold">${booking.service?.price}</span>
            </div>
          </div>

          <button
            onClick={startOver}
            className="px-8 py-3 border border-gold text-gold uppercase tracking-widest text-sm hover:bg-gold hover:text-ink transition-all"
          >
            Book Another
          </button>
        </div>
      )}

      {/* STEP 1: Service */}
      {step === 1 && status === "idle" && (
        <div className="animate-fade-up">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-2">Choose Your Service</h2>
          <p className="text-cream/60 mb-8">Select the royal treatment you'd like today.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {services.map((s) => {
              const sel = booking.service?.id === s.id;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setBooking({ ...booking, service: s })}
                  className={`text-left p-5 border transition-all ${
                    sel
                      ? "border-gold bg-gold/5"
                      : "border-cream/10 bg-ink-soft hover:border-gold/40"
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{s.icon}</span>
                      <h3 className="font-display text-lg font-bold">{s.name}</h3>
                    </div>
                    {sel && <span className="text-gold text-xl">✓</span>}
                  </div>
                  <p className="text-sm text-cream/60 mb-3">{s.desc}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-cream/50">⏱ {s.duration} min</span>
                    <span className="text-gold font-display font-bold text-lg">${s.price}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* STEP 2: Specialist */}
      {step === 2 && status === "idle" && (
        <div className="animate-fade-up">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-2">Choose Your Master Barber</h2>
          <p className="text-cream/60 mb-8">Each of our specialists brings their own royal touch.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {specialists.map((sp) => {
              const sel = booking.specialist?.id === sp.id;
              return (
                <button
                  key={sp.id}
                  type="button"
                  onClick={() => setBooking({ ...booking, specialist: sp })}
                  className={`text-left border transition-all overflow-hidden ${
                    sel
                      ? "border-gold bg-gold/5"
                      : "border-cream/10 bg-ink-soft hover:border-gold/40"
                  }`}
                >
                  <div className="flex">
                    <div className="w-24 md:w-28 shrink-0 overflow-hidden">
                      <img src={sp.img} alt={sp.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" />
                    </div>
                    <div className="p-4 flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-1 gap-2">
                        <h3 className="font-display text-base md:text-lg font-bold leading-tight">{sp.name}</h3>
                        {sel && <span className="text-gold shrink-0">✓</span>}
                      </div>
                      <p className="text-gold text-xs uppercase tracking-widest mb-2">{sp.role}</p>
                      <div className="flex items-center gap-1 text-xs mb-2">
                        <span className="text-gold">★</span>
                        <span className="text-cream font-semibold">{sp.rating}</span>
                        <span className="text-cream/40">({sp.reviews})</span>
                        <span className="text-cream/40 mx-1">•</span>
                        <span className="text-cream/60">{sp.experience}y exp</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {sp.specialties.slice(0, 2).map((t) => (
                          <span key={t} className="text-[10px] uppercase tracking-wider px-2 py-0.5 bg-ink border border-cream/10 text-cream/70">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* STEP 3: Date & Time */}
      {step === 3 && status === "idle" && (
        <div className="animate-fade-up">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-2">Pick Date & Time</h2>
          <p className="text-cream/60 mb-8">Select your preferred appointment slot.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs uppercase tracking-widest text-cream/60 mb-3">Date</label>
              <Calendar
                selected={booking.date}
                onSelect={(d) => setBooking({ ...booking, date: d, time: null })}
                month={month}
                onMonthChange={setMonth}
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-cream/60 mb-3">
                {booking.date ? `Available times for ${booking.date.toLocaleDateString("en-US", { month: "short", day: "numeric" })}` : "Select a date first"}
              </label>
              {booking.date ? (
                <div className="grid grid-cols-3 gap-2 max-h-[400px] overflow-y-auto pr-2">
                  {slots.length === 0 ? (
                    <p className="col-span-3 text-cream/50 text-sm text-center py-8">
                      No available slots on this date. Try another day.
                    </p>
                  ) : (
                    slots.map((t) => {
                      const sel = booking.time === t;
                      return (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setBooking({ ...booking, time: t })}
                          className={`py-3 text-sm transition-all ${
                            sel
                              ? "bg-gold text-ink font-bold"
                              : "bg-ink-soft border border-cream/20 text-cream hover:border-gold"
                          }`}
                        >
                          {formatTime12h(t)}
                        </button>
                      );
                    })
                  )}
                </div>
              ) : (
                <div className="bg-ink border border-cream/10 p-8 text-center text-cream/40 text-sm min-h-[300px] flex items-center justify-center">
                  ← Pick a date to see available times
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* STEP 4: Details + Special Request */}
      {step === 4 && status === "idle" && (
        <div className="animate-fade-up">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-2">Your Details</h2>
          <p className="text-cream/60 mb-8">Let us know how to reach you — and any special requests for your throne.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-5">
              <div>
                <label className="block text-xs uppercase tracking-widest text-cream/60 mb-2">Full Name *</label>
                <input
                  required
                  type="text"
                  value={booking.name}
                  onChange={(e) => setBooking({ ...booking, name: e.target.value })}
                  className="w-full bg-ink-soft border border-cream/20 px-4 py-3 text-cream focus:border-gold focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-cream/60 mb-2">Email *</label>
                <input
                  required
                  type="email"
                  value={booking.email}
                  onChange={(e) => setBooking({ ...booking, email: e.target.value })}
                  className="w-full bg-ink-soft border border-cream/20 px-4 py-3 text-cream focus:border-gold focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-cream/60 mb-2">Phone *</label>
                <input
                  required
                  type="tel"
                  value={booking.phone}
                  onChange={(e) => setBooking({ ...booking, phone: e.target.value })}
                  className="w-full bg-ink-soft border border-cream/20 px-4 py-3 text-cream focus:border-gold focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-cream/60 mb-2">
                📝 Special Requests
              </label>
              <textarea
                rows={6}
                value={booking.specialRequest}
                onChange={(e) => setBooking({ ...booking, specialRequest: e.target.value })}
                placeholder="Tell us anything that will make your royal visit perfect — allergies, preferences, occasion, accessibility needs..."
                className="w-full bg-ink-soft border border-cream/20 px-4 py-3 text-cream focus:border-gold focus:outline-none resize-none"
              />
              <div className="mt-3">
                <p className="text-xs text-cream/50 mb-2">Quick picks:</p>
                <div className="flex flex-wrap gap-2">
                  {SPECIAL_REQUEST_PRESETS.map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => {
                        const current = booking.specialRequest;
                        const exists = current.includes(p);
                        const newVal = exists
                          ? current.replace(p, "").replace(/\n\n/g, "\n").trim()
                          : (current ? current + "\n" : "") + p;
                        setBooking({ ...booking, specialRequest: newVal });
                      }}
                      className={`text-xs px-3 py-1.5 border transition-colors ${
                        booking.specialRequest.includes(p)
                          ? "bg-gold/10 border-gold text-gold"
                          : "border-cream/20 text-cream/70 hover:border-gold/40"
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* STEP 5: Confirm */}
      {step === 5 && status === "idle" && (
        <div className="animate-fade-up">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-2">Review Your Booking</h2>
          <p className="text-cream/60 mb-8">Everything look right? Confirm to claim your throne.</p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-ink-soft border border-gold/20 p-6 space-y-4">
              <h3 className="text-gold uppercase tracking-widest text-xs">Appointment</h3>
              <div className="flex items-center gap-3">
                <span className="text-3xl">{booking.service?.icon}</span>
                <div>
                  <div className="font-display font-bold">{booking.service?.name}</div>
                  <div className="text-sm text-cream/60">{booking.service?.duration} min • ${booking.service?.price}</div>
                </div>
              </div>
              <div className="border-t border-cream/10 pt-4 flex items-center gap-3">
                <img src={booking.specialist?.img} alt="" className="w-12 h-12 object-cover" />
                <div>
                  <div className="font-semibold text-sm">{booking.specialist?.name}</div>
                  <div className="text-xs text-gold">{booking.specialist?.role}</div>
                </div>
              </div>
              <div className="border-t border-cream/10 pt-4 text-sm space-y-1">
                <div className="flex justify-between"><span className="text-cream/60">📅 Date</span><span>{booking.date && formatDate(booking.date)}</span></div>
                <div className="flex justify-between"><span className="text-cream/60">🕐 Time</span><span>{booking.time && formatTime12h(booking.time)}</span></div>
              </div>
            </div>

            <div className="bg-ink-soft border border-gold/20 p-6 space-y-4">
              <h3 className="text-gold uppercase tracking-widest text-xs">Your Info</h3>
              <div className="text-sm space-y-2">
                <div><span className="text-cream/60">Name:</span> <span className="ml-2">{booking.name}</span></div>
                <div><span className="text-cream/60">Email:</span> <span className="ml-2">{booking.email}</span></div>
                <div><span className="text-cream/60">Phone:</span> <span className="ml-2">{booking.phone}</span></div>
              </div>
              {booking.specialRequest && (
                <>
                  <div className="border-t border-cream/10 pt-4">
                    <h4 className="text-gold uppercase tracking-widest text-xs mb-2">📝 Special Requests</h4>
                    <p className="text-sm text-cream/80 whitespace-pre-line leading-relaxed">{booking.specialRequest}</p>
                  </div>
                </>
              )}
              <div className="border-t border-cream/10 pt-4 flex items-center justify-between">
                <span className="text-cream/60">Total</span>
                <span className="text-gold font-display text-2xl font-bold">${booking.service?.price}</span>
              </div>
            </div>
          </div>

          <p className="text-xs text-cream/50 text-center mb-6">
            By confirming, you agree to our cancellation policy. Payment is collected at the shop.
          </p>
        </div>
      )}

      {/* Navigation */}
      {status === "idle" && (
        <div className="flex items-center justify-between mt-10 pt-6 border-t border-cream/10">
          <button
            type="button"
            onClick={prev}
            disabled={step === 1}
            className="px-6 py-3 border border-cream/20 text-cream uppercase tracking-widest text-xs hover:border-gold hover:text-gold transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            ← Back
          </button>

          {step < 5 ? (
            <button
              type="button"
              onClick={next}
              disabled={!canNext()}
              className="px-8 py-3 bg-gold text-ink font-semibold uppercase tracking-widest text-xs hover:bg-gold-light transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              Continue →
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              className="px-10 py-3 bg-gold text-ink font-bold uppercase tracking-widest text-xs hover:bg-gold-light transition-colors"
            >
              Confirm Booking 👑
            </button>
          )}
        </div>
      )}
    </div>
  );
}
