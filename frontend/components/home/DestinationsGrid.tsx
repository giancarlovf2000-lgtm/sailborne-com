import Image from 'next/image'
import Link from 'next/link'

const destinations = [
  {
    name: 'Puerto Rico',
    subtitle: 'Fajardo & La Parguera',
    description: 'Bioluminescent bays, pristine cays, and world-class snorkeling just off the eastern coast.',
    image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800&q=80',
    href: '/experiences#fajardo',
    badge: 'Most Popular',
  },
  {
    name: 'Miami',
    subtitle: 'Biscayne Bay & Beyond',
    description: 'Glittering skyline cruises, island hopping, and sunset cocktail parties on the turquoise waters of South Florida.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    href: '/experiences#miami',
    badge: null,
  },
  {
    name: 'Greece',
    subtitle: 'Aegean & Ionian Seas',
    description: 'Sail from island to island through ancient history, whitewashed villages, and impossibly blue waters.',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&q=80',
    href: '/experiences#greece',
    badge: 'Summer Season',
  },
]

export default function DestinationsGrid() {
  return (
    <section className="destinations section" aria-labelledby="destinations-title">
      <div className="container">
        <div className="section__header">
          <p className="section__label">Where We Sail</p>
          <h2 className="section__title" id="destinations-title">Three Destinations, Infinite Adventures</h2>
          <p className="section__subtitle">Each location offers a unique sailing experience. All share the same commitment to excellence.</p>
        </div>
        <div className="destinations__grid">
          {destinations.map(d => (
            <Link key={d.name} href={d.href} className="destination-card">
              <div className="destination-card__image-wrap">
                <Image
                  src={d.image}
                  alt={d.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="destination-card__image"
                />
                <div className="destination-card__overlay" />
                {d.badge && <span className="destination-card__badge">{d.badge}</span>}
              </div>
              <div className="destination-card__content">
                <h3 className="destination-card__name">{d.name}</h3>
                <p className="destination-card__subtitle">{d.subtitle}</p>
                <p className="destination-card__desc">{d.description}</p>
                <span className="destination-card__cta">
                  Explore {d.name}
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
