import Link from 'next/link'

export default function CtaBanner() {
  return (
    <section className="cta-banner section" aria-label="Call to action">
      <div className="container">
        <div className="cta-banner__inner">
          <div className="cta-banner__content">
            <h2 className="cta-banner__title">Ready to Set Sail?</h2>
            <p className="cta-banner__subtitle">
              Your dream charter is one inquiry away. Our team is standing by to craft the perfect experience for you.
            </p>
          </div>
          <div className="cta-banner__actions">
            <Link href="/contact" className="btn btn--primary btn--lg">Book Your Charter</Link>
            <a href="mailto:kristen@sailborne.co" className="btn btn--ghost btn--lg">Email Us</a>
          </div>
        </div>
      </div>
    </section>
  )
}
