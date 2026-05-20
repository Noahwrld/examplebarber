export default function Privacy() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-24 px-6 bg-gradient-to-r from-ink-soft via-ink to-ink-soft border-b border-gold/20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">Privacy <span className="text-gold">Policy</span></h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-6 max-w-4xl mx-auto space-y-8">
        <div>
          <h2 className="font-display text-3xl font-bold text-gold mb-4">Introduction</h2>
          <p className="text-cream/70 leading-relaxed">BarberKing ("we", "us", "our") operates the barberking.com website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.</p>
        </div>

        <div>
          <h2 className="font-display text-3xl font-bold text-gold mb-4">Information Collection</h2>
          <p className="text-cream/70 leading-relaxed mb-3">We collect several different types of information for various purposes to provide and improve our Service to you:</p>
          <ul className="text-cream/70 space-y-2 list-disc pl-6">
            <li>Personal Data: Name, Email address, Phone number, Cookies and Usage Data</li>
            <li>Usage Data: Browser type, pages visited, time and date of visit, time spent on pages</li>
            <li>Device Information: Device type, operating system, unique device identifiers</li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-3xl font-bold text-gold mb-4">Use of Data</h2>
          <p className="text-cream/70 leading-relaxed mb-3">BarberKing uses the collected data for various purposes:</p>
          <ul className="text-cream/70 space-y-2 list-disc pl-6">
            <li>To provide and maintain our Service</li>
            <li>To notify you about changes to our Service</li>
            <li>To allow you to participate in interactive features</li>
            <li>To provide customer support</li>
            <li>To gather analysis or valuable information for improving our Service</li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-3xl font-bold text-gold mb-4">Security</h2>
          <p className="text-cream/70 leading-relaxed">The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>
        </div>

        <div>
          <h2 className="font-display text-3xl font-bold text-gold mb-4">Contact Us</h2>
          <p className="text-cream/70 leading-relaxed">If you have any questions about this Privacy Policy, please contact us at:</p>
          <p className="text-gold mt-3">Email: privacy@barberking.com<br />Phone: +1 (555) 123-4567</p>
        </div>
      </section>
    </div>
  );
}