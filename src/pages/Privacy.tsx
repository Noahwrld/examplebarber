export default function Privacy() {
  return (
    <div className="pt-24">
      <section className="py-16 px-6 bg-ink-soft">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gold uppercase tracking-[0.4em] text-xs mb-4">Legal</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-cream/60 text-sm">Last updated: January 2026</p>
        </div>
      </section>

      <section className="py-16 px-6 bg-ink">
        <div className="max-w-3xl mx-auto prose prose-invert prose-lg space-y-8 text-cream/80 leading-relaxed">
          <p>
            At BarberKing ("we," "our," or "us"), we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>

          <div>
            <h2 className="font-display text-2xl font-bold text-cream mb-3">1. Information We Collect</h2>
            <p className="mb-2">We may collect information about you in a variety of ways, including:</p>
            <ul className="list-disc list-inside space-y-1 text-cream/70">
              <li>Personal data you voluntarily provide (name, email, phone number) when booking or contacting us.</li>
              <li>Derivative data collected automatically (IP address, browser type, device type, pages visited).</li>
              <li>Financial data related to payment methods when processing transactions.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-cream mb-3">2. Use of Your Information</h2>
            <p className="mb-2">We use information collected about you to:</p>
            <ul className="list-disc list-inside space-y-1 text-cream/70">
              <li>Process appointments and manage your account.</li>
              <li>Send confirmations, updates, and marketing communications (with your consent).</li>
              <li>Improve our website, services, and customer experience.</li>
              <li>Comply with legal obligations and prevent fraud.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-cream mb-3">3. Cookies and Tracking</h2>
            <p>
              We use cookies, web beacons, and similar technologies to enhance your experience, analyze trends, and administer the site. You can control cookies through your browser settings. Essential cookies are required for the site to function; analytics and marketing cookies are optional and require your consent.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-cream mb-3">4. Third-Party Services</h2>
            <p>
              We may share information with third parties that help us operate our website, conduct our business, or serve you — including Google Analytics, payment processors, and booking platforms. These parties are contractually obligated to keep your data confidential.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-cream mb-3">5. Data Security</h2>
            <p>
              We implement industry-standard administrative, technical, and physical security measures to protect your information, including SSL encryption for all data transmitted through our website.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-cream mb-3">6. Your Rights</h2>
            <p>
              Depending on your jurisdiction, you may have the right to access, correct, delete, or port your personal data. You may also opt out of marketing communications at any time. To exercise these rights, contact us using the information below.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-cream mb-3">7. Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-cream mb-3">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically. The updated version will be indicated by the "Last updated" date at the top.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-cream mb-3">9. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us:<br />
              <strong>BarberKing</strong><br />
              123 Crown Street, Los Angeles, CA 90028<br />
              <a href="mailto:privacy@barberking.com" className="text-gold hover:text-gold-light">privacy@barberking.com</a><br />
              <a href="tel:+15551234567" className="text-gold hover:text-gold-light">+1 (555) 123-4567</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
