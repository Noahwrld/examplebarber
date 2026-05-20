import { useMemo } from "react";

interface Props {
  selected: Date | null;
  onSelect: (date: Date) => void;
  month: Date;
  onMonthChange: (month: Date) => void;
}

export default function Calendar({ selected, onSelect, month, onMonthChange }: Props) {
  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const firstDay = useMemo(() => new Date(month.getFullYear(), month.getMonth(), 1), [month]);
  const lastDay = useMemo(() => new Date(month.getFullYear(), month.getMonth() + 1, 0), [month]);
  const startWeekday = firstDay.getDay();
  const daysInMonth = lastDay.getDate();

  const cells: (Date | null)[] = [];
  for (let i = 0; i < startWeekday; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push(new Date(month.getFullYear(), month.getMonth(), d));
  }
  while (cells.length % 7 !== 0) cells.push(null);

  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const prevMonth = () => {
    const m = new Date(month);
    m.setMonth(m.getMonth() - 1);
    onMonthChange(m);
  };
  const nextMonth = () => {
    const m = new Date(month);
    m.setMonth(m.getMonth() + 1);
    onMonthChange(m);
  };

  const isPast = (d: Date) => d < today;
  const isSelected = (d: Date) =>
    selected && d.toDateString() === selected.toDateString();

  return (
    <div className="bg-ink border border-gold/20 p-6">
      <div className="flex items-center justify-between mb-4">
        <button
          type="button"
          onClick={prevMonth}
          className="w-9 h-9 flex items-center justify-center border border-cream/20 hover:border-gold text-cream hover:text-gold transition-colors"
          aria-label="Previous month"
        >
          ←
        </button>
        <h3 className="font-display text-lg font-bold">
          {month.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
        </h3>
        <button
          type="button"
          onClick={nextMonth}
          className="w-9 h-9 flex items-center justify-center border border-cream/20 hover:border-gold text-cream hover:text-gold transition-colors"
          aria-label="Next month"
        >
          →
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {weekdays.map((w) => (
          <div key={w} className="text-center text-xs uppercase tracking-widest text-cream/50 py-2">
            {w}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {cells.map((d, i) => {
          if (!d) return <div key={i} />;
          const past = isPast(d);
          const sel = isSelected(d);
          return (
            <button
              key={i}
              type="button"
              disabled={past}
              onClick={() => onSelect(d)}
              className={`aspect-square flex items-center justify-center text-sm transition-all ${
                past
                  ? "text-cream/20 cursor-not-allowed"
                  : sel
                  ? "bg-gold text-ink font-bold"
                  : "text-cream hover:bg-ink-soft border border-transparent hover:border-gold/30"
              }`}
            >
              {d.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}
