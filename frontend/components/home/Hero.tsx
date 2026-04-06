import Link from 'next/link'

export default function Hero() {
  return (
    <section className="hero" aria-label="Hero">
      <div className="hero__bg">
        <div className="hero__overlay" />
      </div>
      <div className="container">
        <div className="hero__content">
          <div className="hero__badge">Premium Yacht Charters</div>
          <h1 className="hero__title">
            Sail the World in<br />
            <span className="hero__title-accent">Absolute Luxury</span>
          </h1>
          <p className="hero__subtitle">
            Curated yacht charter experiences across the Caribbean, Miami, and Greece.
            Bespoke itineraries, world-class vessels, and creative production services — all in one.
          </p>
          <div className="hero__actions">
            <Link href="/contact" className="btn btn--primary btn--lg">Book Your Charter</Link>
            <Link href="/experiences" className="btn btn--ghost btn--lg">Explore Fleet</Link>
          </div>
          <div className="hero__trust">
            <span>🏝 Puerto Rico</span>
            <span>🌊 Miami</span>
            <span>⛵ Greece</span>
          </div>
        </div>
      </div>
      <div className="hero__scroll" aria-hidden="true">
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}
