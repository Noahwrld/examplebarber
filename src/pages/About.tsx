export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-24 px-6 bg-gradient-to-r from-ink-soft via-ink to-ink-soft border-b border-gold/20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">About <span className="text-gold">BarberKing</span></h1>
          <p className="text-cream/70 text-lg">Crafting Royal Experiences Since 2015</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <img 
            src="https://images.pexels.com/photos/12464842/pexels-photo-12464842.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="BarberKing founder"
            className="rounded-sm"
          />
          <div>
            <h2 className="font-display text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-cream/70 mb-4 leading-relaxed">
              Founded in 2015, BarberKing began with a simple vision: to elevate the barber shop experience from a mundane task to a royal ritual.
            </p>
            <p className="text-cream/70 mb-4 leading-relaxed">
              Our founder believed that every man deserves to feel like a king when he sits in our chair. We combined traditional barbering techniques passed down through generations with modern style sensibilities.
            </p>
            <p className="text-cream/70 leading-relaxed">
              Today, BarberKing stands as a beacon of excellence in the grooming industry, known for our master craftsmen, premium products, and uncompromising attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 bg-ink-soft">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl font-bold text-center mb-16">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Mastery", desc: "Every cut is a masterpiece crafted by master barbers with years of experience." },
              { title: "Excellence", desc: "We use only premium products and techniques to deliver exceptional results." },
              { title: "Respect", desc: "Every client is treated as royalty, deserving of our full attention and care." },
            ].map((value) => (
              <div key={value.title} className="p-8 bg-ink border border-gold/10 hover:border-gold/50 transition">
                <h3 className="font-display text-2xl font-bold text-gold mb-4">{value.title}</h3>
                <p className="text-cream/70">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}