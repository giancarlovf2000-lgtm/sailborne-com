import Link from 'next/link'

export default function CtaBanner() {
  return (
    <section className="cta-banner" aria-label="Call to action">
      <div className="container">
        <div className="cta-banner__content">
          <span className="eyebrow">Ready to Sail?</span>
          <h2>Your Dream Charter Awaits</h2>
          <p>Your perfect voyage is one inquiry away. Our team is standing by to craft an unforgettable experience for you.</p>
          <div className="cta-banner__actions">
            <Link href="/contact" className="btn btn--primary btn--lg">Book Your Charter</Link>
            <a href="mailto:kristen@sailborne.co" className="btn btn--outline-white btn--lg">Email Us Directly</a>
          </div>
        </div>
      </div>
    </section>
  )
}
