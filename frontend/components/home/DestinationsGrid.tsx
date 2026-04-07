import Image from 'next/image'
import Link from 'next/link'

const destinations = [
  { name: 'Fajardo', region: 'Puerto Rico', image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=600&q=80', href: '/experiences#fajardo' },
  { name: 'La Parguera', region: 'Puerto Rico', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80', href: '/experiences#parguera' },
  { name: 'Miami', region: 'Florida', image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&q=80', href: '/experiences#miami' },
  { name: 'Greece', region: 'Mediterranean', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&q=80', href: '/experiences#greece' },
  { name: 'Custom', region: 'Your Choice', image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=600&q=80', href: '/contact' },
]

export default function DestinationsGrid() {
  return (
    <section className="section section--white" aria-labelledby="destinations-title">
      <div className="container">
        <div className="section__header">
          <span className="eyebrow">Where We Sail</span>
          <h2 className="heading-xl" id="destinations-title">Three Destinations, Infinite Adventures</h2>
          <p>Each location offers a unique sailing experience. All share the same commitment to excellence.</p>
        </div>
        <div className="destinations-grid">
          {destinations.map(d => (
            <Link key={d.name} href={d.href} className="dest-card">
              <Image
                src={d.image}
                alt={d.name}
                fill
                sizes="(max-width: 768px) 50vw, 20vw"
                className="dest-card__img"
              />
              <div className="dest-card__overlay" />
              <div className="dest-card__content">
                <div className="dest-card__region">{d.region}</div>
                <div className="dest-card__name">{d.name}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
