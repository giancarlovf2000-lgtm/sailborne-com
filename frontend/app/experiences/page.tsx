import type { Metadata } from 'next'
import { getVessels } from '@/lib/api'
import FleetSection from '@/components/fleet/FleetSection'
import CtaBanner from '@/components/home/CtaBanner'

export const metadata: Metadata = {
  title: 'Experiences — SailBorne Luxury Yacht Charters',
  description: 'Browse our full fleet of luxury yachts available in Puerto Rico, Miami, and Greece. Find the perfect vessel for your charter.',
}

export default async function ExperiencesPage() {
  let vessels: import('@/types').Vessel[] = []
  try {
    vessels = await getVessels()
  } catch {
    // render with empty fleet if API unreachable
  }

  return (
    <main>
      <section className="page-hero section" aria-label="Experiences hero">
        <div className="container">
          <div className="page-hero__content">
            <p className="section__label">Our Fleet</p>
            <h1 className="page-hero__title">Charter Experiences</h1>
            <p className="page-hero__subtitle">
              From intimate day sails to week-long expeditions — explore our curated fleet of world-class vessels across three stunning destinations.
            </p>
          </div>
        </div>
      </section>

      <FleetSection vessels={vessels} />
      <CtaBanner />
    </main>
  )
}
