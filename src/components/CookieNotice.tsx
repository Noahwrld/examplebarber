import { useState, useEffect } from "react";

export default function CookieNotice() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-ink-soft border-t border-gold/20 p-4 md:p-6 z-30">
      <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
        <p className="text-sm text-cream/70">
          We use cookies to enhance your experience. By continuing, you agree to our cookie policy.
        </p>
        <div className="flex gap-3">
          <button
            onClick={handleAccept}
            className="px-6 py-2 bg-gold text-ink font-semibold text-sm hover:bg-gold-light transition whitespace-nowrap"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}