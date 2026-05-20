export interface Specialist {
  id: string;
  name: string;
  role: string;
  specialties: string[];
  experience: number;
  rating: number;
  reviews: number;
  img: string;
  bio: string;
}

export interface Service {
  id: string;
  icon: string;
  name: string;
  price: number;
  duration: number; // minutes
  desc: string;
}

export const services: Service[] = [
  { id: "haircut", icon: "✂️", name: "Royal Haircut", price: 35, duration: 45, desc: "Signature cut tailored to your style" },
  { id: "beard", icon: "🧔", name: "Beard Sculpt", price: 25, duration: 30, desc: "Precision shaping with hot-oil treatment" },
  { id: "shave", icon: "🪒", name: "Hot-Towel Shave", price: 30, duration: 40, desc: "Traditional straight-razor ritual" },
  { id: "kings", icon: "👑", name: "The King's Package", price: 65, duration: 90, desc: "Haircut, shave, facial & scalp massage" },
  { id: "junior", icon: "👦", name: "Junior Prince Cut", price: 20, duration: 30, desc: "For young kings ages 12 and under" },
  { id: "design", icon: "💈", name: "Hair Design", price: 15, duration: 20, desc: "Custom lineups & artistic patterns" },
  { id: "facial", icon: "🧖", name: "Royal Facial", price: 40, duration: 45, desc: "Deep-cleansing revitalizing treatment" },
  { id: "scalp", icon: "🧴", name: "Scalp Therapy", price: 25, duration: 25, desc: "Stimulating essential-oil treatment" },
];

export const specialists: Specialist[] = [
  {
    id: "marcus",
    name: "Marcus 'The King' Bell",
    role: "Master Barber & Founder",
    specialties: ["Classic Cuts", "Fades", "Straight-Razor Shaves"],
    experience: 15,
    rating: 4.9,
    reviews: 487,
    img: "https://images.pexels.com/photos/12464842/pexels-photo-12464842.jpeg?auto=compress&cs=tinysrgb&w=500",
    bio: "Founder of BarberKing. 15 years of mastery in classic cuts and traditional shaves.",
  },
  {
    id: "andre",
    name: "Andre Williams",
    role: "Senior Barber",
    specialties: ["Modern Fades", "Tapers", "Hair Designs"],
    experience: 10,
    rating: 4.8,
    reviews: 312,
    img: "https://images.pexels.com/photos/18503633/pexels-photo-18503633.jpeg?auto=compress&cs=tinysrgb&w=500",
    bio: "Specialist in modern fades and creative hair designs. Known for precision lineups.",
  },
  {
    id: "daniel",
    name: "Daniel Rivera",
    role: "Beard Specialist",
    specialties: ["Beard Sculpting", "Hot-Towel Shaves", "Facials"],
    experience: 8,
    rating: 4.9,
    reviews: 256,
    img: "https://images.pexels.com/photos/12464838/pexels-photo-12464838.jpeg?auto=compress&cs=tinysrgb&w=500",
    bio: "Master of beard artistry. Transforms facial hair into works of art.",
  },
  {
    id: "jaylen",
    name: "Jaylen Carter",
    role: "Style Specialist",
    specialties: ["Textured Cuts", "Kids Cuts", "Scalp Therapy"],
    experience: 6,
    rating: 4.7,
    reviews: 189,
    img: "https://images.pexels.com/photos/12339159/pexels-photo-12339159.jpeg?auto=compress&cs=tinysrgb&w=500",
    bio: "Brings contemporary style to every cut. Patient and skilled with all ages.",
  },
];

// Generate available time slots from 9am to 8pm in 30-min increments
export function generateTimeSlots(): string[] {
  const slots: string[] = [];
  for (let h = 9; h < 20; h++) {
    slots.push(`${h.toString().padStart(2, "0")}:00`);
    slots.push(`${h.toString().padStart(2, "0")}:30`);
  }
  slots.push("20:00");
  return slots;
}

// Randomly mark some slots as taken to simulate real availability
export function getAvailableSlots(dateStr: string): string[] {
  const all = generateTimeSlots();
  // Deterministic "random" based on date string so the same date shows the same slots
  let seed = 0;
  for (let i = 0; i < dateStr.length; i++) seed += dateStr.charCodeAt(i);
  return all.filter((_, i) => (seed * (i + 1)) % 7 !== 0);
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function formatTime12h(time24: string): string {
  const [h, m] = time24.split(":").map(Number);
  const period = h >= 12 ? "PM" : "AM";
  const h12 = h % 12 || 12;
  return `${h12}:${m.toString().padStart(2, "0")} ${period}`;
}
