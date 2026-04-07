import type { Metadata } from 'next'
import StudioInquiryForm from '@/components/forms/StudioInquiryForm'
import CtaBanner from '@/components/home/CtaBanner'

export const metadata: Metadata = {
  title: 'Studios — SailBorne Creative Production',
  description: 'Luxury brand films, photography, and content creation services on the open water.',
}

const services = [
  { emoji: '📸', title: 'Yacht Photography', body: 'Editorial and commercial photography capturing the elegance of life on the water. Perfect for luxury brands, real estate, and lifestyle campaigns.' },
  { emoji: '🎬', title: 'Brand Filmmaking', body: 'Cinematic brand films that tell your story against the backdrop of the open sea. From concept to delivery, our crew handles every frame.' },
  { emoji: '📱', title: 'Social Content Creation', body: 'High-volume, platform-native content for Instagram, TikTok, and beyond. Scroll-stopping visuals created aboard the most beautiful vessels in the Caribbean.' },
  { emoji: '🎥', title: 'Commercial Production', body: 'Full-service commercial productions with professional crew, equipment, and logistics — all managed from the water up.' },
  { emoji: '🎊', title: 'Event Coverage', body: 'Documentary-style coverage of corporate events, charters, and private celebrations. Every moment preserved in cinematic quality.' },
  { emoji: '✨', title: 'Custom Packages', body: 'Bespoke creative packages tailored to your brand, timeline, and vision. Contact us to build your perfect production experience.' },
]

export default function StudiosPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__content">
            <span className="eyebrow">Creative Studios</span>
            <h1>Where Luxury Meets Lens</h1>
            <p>SailBorne Creative Studios produces world-class brand content aboard our fleet of luxury yachts. The ocean is your backdrop. The story is yours.</p>
          </div>
        </div>
      </section>

      <section className="section section--bg">
        <div className="container">
          <div className="section__header">
            <span className="eyebrow">What We Create</span>
            <h2 className="heading-xl">Production Services</h2>
            <p>Every service delivered with the same attention to detail as our charter experiences.</p>
          </div>
          <div className="services-grid">
            {services.map(s => (
              <div key={s.title} className="service-card">
                <div className="service-card__icon" style={{ fontSize: '1.75rem', background: 'var(--blue-pale)' }}>{s.emoji}</div>
                <h3 className="service-card__title">{s.title}</h3>
                <p className="service-card__body">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="contact__layout">
            <aside className="contact__sidebar">
              <div className="contact__info">
                <h2 className="contact__info-title">Start Your Project</h2>
                <p style={{ color: 'rgba(255,255,255,0.80)', marginBottom: '1.5rem', lineHeight: 1.7, fontSize: '0.95rem' }}>
                  Tell us about your brand, your vision, and your timeline. Our creative director will reach out within 24 hours.
                </p>
                <div className="contact__promise">
                  <div className="contact__promise-item">
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>24-hour creative consultation</span>
                  </div>
                  <div className="contact__promise-item">
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Custom proposal &amp; mood board</span>
                  </div>
                  <div className="contact__promise-item">
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Full production team included</span>
                  </div>
                </div>
              </div>
            </aside>
            <div className="contact__form-wrap">
              <StudioInquiryForm />
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </main>
  )
}
