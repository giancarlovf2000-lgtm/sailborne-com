import type { Metadata } from 'next'
import { getVessels } from '@/lib/api'
import FleetSection from '@/components/fleet/FleetSection'
import CtaBanner from '@/components/home/CtaBanner'

export const metadata: Metadata = {
  title: 'Experiences — SailBorne Luxury Yacht Charters',
  description: 'Browse our full fleet of luxury yachts available in Puerto Rico, Miami, and Greece.',
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
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__content">
            <span className="eyebrow">Our Fleet</span>
            <h1>Charter Experiences</h1>
            <p>From intimate day sails to week-long expeditions — explore our curated fleet of world-class vessels across three stunning destinations.</p>
          </div>
        </div>
      </section>

      <FleetSection vessels={vessels} />
      <CtaBanner />
    </main>
  )
}
