import type { Metadata } from 'next'
import BookingForm from '@/components/forms/BookingForm'

export const metadata: Metadata = {
  title: 'Contact & Book — SailBorne Luxury Yacht Charters',
  description: 'Submit a charter inquiry or get in touch with our team. We respond within 24 hours.',
}

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__content">
            <span className="eyebrow">Get in Touch</span>
            <h1>Book Your Charter</h1>
            <p>Tell us about your dream voyage and we&apos;ll craft a personalized proposal within 24 hours. No commitment required.</p>
          </div>
        </div>
      </section>

      <section className="section section--bg">
        <div className="container">
          <div className="contact__layout">
            <aside className="contact__sidebar">
              <div className="contact__info">
                <h2 className="contact__info-title">Contact Information</h2>
                <div className="contact__info-item">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:kristen@sailborne.co">kristen@sailborne.co</a>
                </div>
                <div className="contact__info-item">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+12345678901">+1 (234) 567-8901</a>
                </div>
                <div className="contact__destinations">
                  <h3 className="contact__destinations-title">Destinations</h3>
                  <ul className="contact__destinations-list">
                    <li>🏝 Puerto Rico — Fajardo &amp; La Parguera</li>
                    <li>🌊 Miami, Florida</li>
                    <li>⛵ Greece — Aegean &amp; Ionian</li>
                  </ul>
                </div>
                <div className="contact__promise">
                  <div className="contact__promise-item">
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>24-hour response guarantee</span>
                  </div>
                  <div className="contact__promise-item">
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>No commitment required</span>
                  </div>
                  <div className="contact__promise-item">
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Fully customized proposals</span>
                  </div>
                </div>
              </div>
            </aside>
            <div className="contact__form-wrap">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
