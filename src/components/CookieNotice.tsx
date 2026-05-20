import { useEffect, useState } from "react";

export default function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("bk-cookie-consent");
    if (!consent) {
      const t = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = (level: "all" | "essential") => {
    localStorage.setItem("bk-cookie-consent", level);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-fade-up">
      <div className="max-w-5xl mx-auto bg-ink-soft border border-gold/30 rounded-lg shadow-2xl p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">🍪</span>
            <h4 className="text-gold font-display text-lg">We value your privacy</h4>
          </div>
          <p className="text-sm text-cream/70 leading-relaxed">
            We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
          </p>
        </div>
        <div className="flex gap-3 w-full md:w-auto shrink-0">
          <button
            onClick={() => accept("essential")}
            className="px-4 py-2 text-sm border border-cream/30 text-cream/80 hover:text-cream hover:border-cream/60 transition-colors"
          >
            Essential Only
          </button>
          <button
            onClick={() => accept("all")}
            className="px-5 py-2 text-sm bg-gold text-ink font-semibold hover:bg-gold-light transition-colors"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
