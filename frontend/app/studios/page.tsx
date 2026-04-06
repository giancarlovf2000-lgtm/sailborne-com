import type { Metadata } from 'next'
import StudioInquiryForm from '@/components/forms/StudioInquiryForm'
import CtaBanner from '@/components/home/CtaBanner'

export const metadata: Metadata = {
  title: 'Studios — SailBorne Creative Production',
  description: 'Luxury brand films, photography, and content creation services on the open water. Powered by SailBorne Creative Studios.',
}

const services = [
  {
    title: 'Yacht Photography',
    description: 'Stunning editorial and commercial photography capturing the elegance of life on the water. Perfect for luxury brands, real estate, and lifestyle campaigns.',
    icon: '📸',
  },
  {
    title: 'Brand Filmmaking',
    description: 'Cinematic brand films that tell your story against the backdrop of the open sea. From concept to delivery, our crew handles every frame.',
    icon: '🎬',
  },
  {
    title: 'Social Content Creation',
    description: 'High-volume, platform-native content for Instagram, TikTok, and beyond. Scroll-stopping visuals created aboard the most beautiful vessels in the Caribbean.',
    icon: '📱',
  },
  {
    title: 'Commercial Production',
    description: 'Full-service commercial productions with professional crew, equipment, and logistics — all managed from the water up.',
    icon: '🎥',
  },
  {
    title: 'Event Coverage',
    description: 'Documentary-style coverage of corporate events, charters, and private celebrations. Every moment preserved in cinematic quality.',
    icon: '🎊',
  },
  {
    title: 'Custom Packages',
    description: 'Bespoke creative packages tailored to your brand, timeline, and vision. Contact us to build your perfect production experience.',
    icon: '✨',
  },
]

const clients = [
  'Luxury Travel Brands',
  'Real Estate Developers',
  'Fashion Labels',
  'Hospitality Groups',
  'Marine Industry',
  'Lifestyle Influencers',
]

export default function StudiosPage() {
  return (
    <main>
      <section className="page-hero section" aria-label="Studios hero">
        <div className="container">
          <div className="page-hero__content">
            <p className="section__label">Creative Studios</p>
            <h1 className="page-hero__title">Where Luxury Meets Lens</h1>
            <p className="page-hero__subtitle">
              SailBorne Creative Studios produces world-class brand content aboard our fleet of luxury yachts.
              The ocean is your backdrop. The story is yours.
            </p>
          </div>
        </div>
      </section>

      <section className="studios-services section" aria-labelledby="studios-services-title">
        <div className="container">
          <div className="section__header">
            <p className="section__label">What We Create</p>
            <h2 className="section__title" id="studios-services-title">Production Services</h2>
            <p className="section__subtitle">Every service delivered with the same attention to detail as our charter experiences.</p>
          </div>
          <div className="services__grid">
            {services.map(s => (
              <div key={s.title} className="service-card">
                <div className="service-card__icon" style={{ fontSize: '2rem' }}>{s.icon}</div>
                <h3 className="service-card__title">{s.title}</h3>
                <p className="service-card__desc">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="studios-clients section--sm" aria-labelledby="studios-clients-title">
        <div className="container">
          <div className="section__header">
            <p className="section__label">Who We Work With</p>
            <h2 className="section__title" id="studios-clients-title">Industries We Serve</h2>
          </div>
          <div className="stats__grid">
            {clients.map(c => (
              <div key={c} className="stats__item">
                <span className="stats__label" style={{ fontSize: '1rem', fontWeight: 600 }}>{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="studios-inquiry section" aria-labelledby="studios-inquiry-title">
        <div className="container">
          <div className="contact__layout">
            <aside className="contact__sidebar">
              <div className="contact__info">
                <h2 className="contact__info-title" id="studios-inquiry-title">Start Your Project</h2>
                <p style={{ color: 'var(--color-muted)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                  Tell us about your brand, your vision, and your timeline. Our creative director will reach out within 24 hours.
                </p>
                <div className="contact__promise">
                  <div className="contact__promise-item">
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>24-hour creative consultation</span>
                  </div>
                  <div className="contact__promise-item">
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Custom proposal &amp; mood board</span>
                  </div>
                  <div className="contact__promise-item">
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
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
