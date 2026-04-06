import Link from 'next/link'

const services = [
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M5 10v9a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1v-9" />
      </svg>
    ),
    title: 'Yacht Charters',
    description: 'Private and crewed charters for any occasion — from intimate sunset sails to full-week expeditions across the Caribbean.',
    href: '/experiences',
    cta: 'Explore Charters',
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Creative Studios',
    description: 'Brand films, content creation, photography, and production services — all shot on the open water for an unrivaled aesthetic.',
    href: '/studios',
    cta: 'See Studio Work',
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: 'Private Events',
    description: 'Weddings, corporate gatherings, and milestone celebrations designed around you — from intimate ceremonies to grand affairs.',
    href: '/contact',
    cta: 'Plan Your Event',
  },
]

export default function ServicesGrid() {
  return (
    <section className="services section" aria-labelledby="services-title">
      <div className="container">
        <div className="section__header">
          <p className="section__label">What We Offer</p>
          <h2 className="section__title" id="services-title">Luxury Experiences, Curated for You</h2>
          <p className="section__subtitle">From thrilling ocean adventures to polished creative productions, SailBorne is your partner on the water.</p>
        </div>
        <div className="services__grid">
          {services.map(s => (
            <div key={s.title} className="service-card">
              <div className="service-card__icon">{s.icon}</div>
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__desc">{s.description}</p>
              <Link href={s.href} className="service-card__link">
                {s.cta}
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
