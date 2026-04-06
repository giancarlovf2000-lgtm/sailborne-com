'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const links = [
  { href: '/',            label: 'Home' },
  { href: '/experiences', label: 'Experiences' },
  { href: '/studios',     label: 'Studios' },
  { href: '/contact',     label: 'Contact' },
]

export default function Nav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Close mobile menu on route change
  useEffect(() => { setOpen(false) }, [pathname])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="container">
          <div className="nav__inner">
            <Link href="/" className="nav__logo">Sail<span>Borne</span></Link>
            <div className="nav__links">
              {links.map(l => (
                <Link key={l.href} href={l.href} className={`nav__link${isActive(l.href) ? ' active' : ''}`}>
                  {l.label}
                </Link>
              ))}
            </div>
            <div className="nav__actions">
              <Link href="/contact" className="btn btn--primary btn--sm">Book Now</Link>
              <button
                className={`nav__hamburger${open ? ' open' : ''}`}
                aria-label={open ? 'Close menu' : 'Open menu'}
                onClick={() => setOpen(o => !o)}
              >
                <span /><span /><span />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className={`nav__mobile${open ? ' open' : ''}`} aria-hidden={!open}>
        <button className="nav__mobile-close" aria-label="Close menu" onClick={() => setOpen(false)}>&#x2715;</button>
        {links.map(l => (
          <Link key={l.href} href={l.href} className="nav__mobile-link">{l.label}</Link>
        ))}
        <div className="nav__mobile-actions">
          <Link href="/contact" className="btn btn--primary btn--lg">Book Now</Link>
        </div>
      </div>
    </>
  )
}
