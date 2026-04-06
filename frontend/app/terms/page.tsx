import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms, Privacy & Cancellation — SailBorne',
  description: 'SailBorne terms of service, privacy policy, and cancellation policy.',
}

export default function TermsPage() {
  return (
    <main>
      <section className="page-hero section" aria-label="Terms hero">
        <div className="container">
          <div className="page-hero__content">
            <p className="section__label">Legal</p>
            <h1 className="page-hero__title">Terms &amp; Policies</h1>
            <p className="page-hero__subtitle">Last updated: January 2025</p>
          </div>
        </div>
      </section>

      <section className="terms section" aria-label="Terms content">
        <div className="container">
          <div className="terms__layout">
            <nav className="terms__toc" aria-label="Table of contents">
              <p className="terms__toc-title">Contents</p>
              <a href="#terms" className="terms__toc-link">Terms of Service</a>
              <a href="#privacy" className="terms__toc-link">Privacy Policy</a>
              <a href="#cancellation" className="terms__toc-link">Cancellation Policy</a>
            </nav>

            <div className="terms__content">
              <section id="terms" className="terms__section">
                <h2 className="terms__section-title">Terms of Service</h2>

                <h3 className="terms__heading">1. Agreement to Terms</h3>
                <p>By accessing or using SailBorne&apos;s services, you agree to be bound by these Terms of Service. SailBorne reserves the right to modify these terms at any time.</p>

                <h3 className="terms__heading">2. Charter Services</h3>
                <p>All charter bookings are subject to vessel availability, weather conditions, and applicable maritime regulations. SailBorne reserves the right to substitute vessels of equal or greater value when necessary.</p>

                <h3 className="terms__heading">3. Safety &amp; Liability</h3>
                <p>All guests must follow crew instructions at all times. SailBorne carries comprehensive maritime insurance. Guests participate in water activities at their own risk. SailBorne is not liable for injuries resulting from failure to follow safety guidelines.</p>

                <h3 className="terms__heading">4. Payment</h3>
                <p>A 50% deposit is required to secure your charter. Full payment is due 30 days prior to the charter date. Accepted payment methods include major credit cards and bank transfer.</p>

                <h3 className="terms__heading">5. Conduct</h3>
                <p>SailBorne reserves the right to terminate a charter without refund if guests engage in behavior that endangers the vessel, crew, or other guests.</p>
              </section>

              <section id="privacy" className="terms__section">
                <h2 className="terms__section-title">Privacy Policy</h2>

                <h3 className="terms__heading">Information We Collect</h3>
                <p>We collect information you provide directly — such as name, email, phone number, and inquiry details when you submit a booking form or contact us. We do not sell your personal information to third parties.</p>

                <h3 className="terms__heading">How We Use Your Information</h3>
                <p>Your information is used solely to respond to your inquiries, process bookings, and communicate relevant updates about your charter. We may send occasional marketing emails; you may opt out at any time.</p>

                <h3 className="terms__heading">Data Security</h3>
                <p>All booking data is stored securely. We use industry-standard encryption for all data transmission. Your payment information is handled by PCI-compliant processors and is never stored on our servers.</p>

                <h3 className="terms__heading">Cookies</h3>
                <p>Our website uses essential cookies for functionality. No tracking or advertising cookies are set without your consent.</p>
              </section>

              <section id="cancellation" className="terms__section">
                <h2 className="terms__section-title">Cancellation Policy</h2>

                <div className="terms__policy-grid">
                  <div className="terms__policy-item terms__policy-item--good">
                    <div className="terms__policy-days">60+ days</div>
                    <div className="terms__policy-label">Full refund</div>
                    <div className="terms__policy-desc">Cancel 60 or more days before your charter for a complete refund of all payments.</div>
                  </div>
                  <div className="terms__policy-item terms__policy-item--mid">
                    <div className="terms__policy-days">30–59 days</div>
                    <div className="terms__policy-label">50% refund</div>
                    <div className="terms__policy-desc">Cancel 30–59 days prior and receive a 50% refund. Deposit is non-refundable.</div>
                  </div>
                  <div className="terms__policy-item terms__policy-item--late">
                    <div className="terms__policy-days">Under 30 days</div>
                    <div className="terms__policy-label">No refund</div>
                    <div className="terms__policy-desc">Cancellations within 30 days of the charter are non-refundable. We strongly recommend travel insurance.</div>
                  </div>
                </div>

                <h3 className="terms__heading">Weather Cancellations</h3>
                <p>In the event of cancellation due to severe weather or force majeure, SailBorne will offer a full credit toward a future charter or a full refund at your discretion. Your safety always comes first.</p>

                <h3 className="terms__heading">Rescheduling</h3>
                <p>Charters may be rescheduled once at no charge if requested more than 30 days in advance, subject to availability.</p>

                <h3 className="terms__heading">Contact for Cancellations</h3>
                <p>All cancellation and rescheduling requests must be submitted in writing to <a href="mailto:kristen@sailborne.co">kristen@sailborne.co</a>.</p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
