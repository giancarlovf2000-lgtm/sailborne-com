import Link from 'next/link'
import VesselCard from '@/components/fleet/VesselCard'
import type { Vessel } from '@/types'

export default function FleetPreview({ vessels }: { vessels: Vessel[] }) {
  return (
    <section className="section section--white" aria-labelledby="fleet-preview-title">
      <div className="container">
        <div className="section__header">
          <span className="eyebrow">Featured Vessels</span>
          <h2 className="heading-xl" id="fleet-preview-title">Handpicked for Excellence</h2>
          <p>Every vessel in our fleet is curated for comfort, performance, and style.</p>
        </div>
        <div className="fleet-grid">
          {vessels.map(v => <VesselCard key={v.id} vessel={v} />)}
        </div>
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <Link href="/experiences" className="btn btn--primary btn--lg">View All Vessels</Link>
        </div>
      </div>
    </section>
  )
}
