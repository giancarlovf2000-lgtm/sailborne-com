import Link from 'next/link'

export default function Hero() {
  return (
    <section className="hero" aria-label="Hero">
      <div
        className="hero__bg"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1800&q=80')" }}
      />
      <div className="hero__overlay" />
      <div className="container">
        <div className="hero__content">
          <span className="hero__eyebrow">Premium Yacht Charters</span>
          <h1 className="hero__title">
            Sail the World in<br />
            <span className="accent">Absolute Luxury</span>
          </h1>
          <p className="hero__subtitle">
            Curated yacht charter experiences across the Caribbean, Miami, and Greece.
            Bespoke itineraries, world-class vessels, and creative production services — all in one.
          </p>
          <div className="hero__actions">
            <Link href="/contact" className="btn btn--primary btn--lg">Book Your Charter</Link>
            <Link href="/experiences" className="btn btn--outline-white btn--lg">Explore Fleet</Link>
          </div>
        </div>
      </div>
      <div className="hero__scroll" aria-hidden="true">Scroll</div>
    </section>
  )
}
