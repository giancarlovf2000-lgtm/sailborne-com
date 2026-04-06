import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__grid">
          <div>
            <Link href="/" className="footer__logo">Sail<span>Borne</span></Link>
            <p className="footer__tagline">Luxury yacht charters and creative studio services across the Caribbean and beyond.</p>
            <div className="footer__socials">
              <a href="https://instagram.com" className="footer__social" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://facebook.com" className="footer__social" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>
          <div>
            <div className="footer__col-title">Company</div>
            <div className="footer__links">
              <Link href="/"            className="footer__link">Home</Link>
              <Link href="/experiences" className="footer__link">Experiences</Link>
              <Link href="/studios"     className="footer__link">Studios</Link>
              <Link href="/contact"     className="footer__link">Contact</Link>
            </div>
          </div>
          <div>
            <div className="footer__col-title">Fleet</div>
            <div className="footer__links">
              <Link href="/experiences#fajardo"  className="footer__link">Puerto Rico</Link>
              <Link href="/experiences#miami"     className="footer__link">Miami</Link>
              <Link href="/experiences#greece"    className="footer__link">Greece</Link>
              <Link href="/experiences"           className="footer__link">View All Vessels</Link>
            </div>
          </div>
          <div>
            <div className="footer__col-title">Contact</div>
            <div className="footer__contact-item">
              <svg className="footer__contact-icon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              <a href="mailto:kristen@sailborne.co" className="footer__link">kristen@sailborne.co</a>
            </div>
            <div className="footer__contact-item">
              <svg className="footer__contact-icon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              <a href="tel:+12345678901" className="footer__link">+1 (234) 567-8901</a>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <p className="footer__copy">&copy; {new Date().getFullYear()} SailBorne. All rights reserved.</p>
          <div className="footer__bottom-links">
            <Link href="/terms" className="footer__bottom-link">Terms</Link>
            <Link href="/terms" className="footer__bottom-link">Privacy</Link>
            <Link href="/terms" className="footer__bottom-link">Cancellation Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
