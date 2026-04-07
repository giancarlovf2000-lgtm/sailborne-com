import Link from 'next/link'

const services = [
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M5 10v9a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1v-9" />
      </svg>
    ),
    title: 'Yacht Charters',
    body: 'Private and crewed charters for any occasion — from intimate sunset sails to full-week expeditions across the Caribbean.',
    items: ['Half-day & full-day sails', 'Week-long expeditions', 'Corporate & group charters', 'Custom island hopping'],
    href: '/experiences',
    cta: 'Explore Charters',
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Creative Studios',
    body: 'Brand films, content creation, photography, and production services shot on the open water for an unrivaled aesthetic.',
    items: ['Yacht & lifestyle photography', 'Brand filmmaking', 'Social content creation', 'Commercial production'],
    href: '/studios',
    cta: 'View Studio Work',
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: 'Private Events',
    body: 'Weddings, corporate gatherings, and milestone celebrations designed around you — from intimate ceremonies to grand affairs.',
    items: ['Wedding ceremonies at sea', 'Corporate team events', 'Birthday & milestone parties', 'Sunset cocktail receptions'],
    href: '/contact',
    cta: 'Plan Your Event',
  },
]

export default function ServicesGrid() {
  return (
    <section className="section section--bg" aria-labelledby="services-title">
      <div className="container">
        <div className="section__header">
          <span className="eyebrow">What We Offer</span>
          <h2 className="heading-xl" id="services-title">Luxury Experiences, Curated for You</h2>
          <p>From thrilling ocean adventures to polished creative productions, SailBorne is your partner on the water.</p>
        </div>
        <div className="services-grid">
          {services.map(s => (
            <div key={s.title} className="service-card">
              <div className="service-card__icon">{s.icon}</div>
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__body">{s.body}</p>
              <ul className="service-card__list">
                {s.items.map(item => <li key={item}>{item}</li>)}
              </ul>
              <Link href={s.href} className="btn btn--primary btn--sm">{s.cta}</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
