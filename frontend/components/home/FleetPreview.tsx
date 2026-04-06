import Link from 'next/link'
import VesselCard from '@/components/fleet/VesselCard'
import type { Vessel } from '@/types'

interface FleetPreviewProps {
  vessels: Vessel[]
}

export default function FleetPreview({ vessels }: FleetPreviewProps) {
  return (
    <section className="fleet-preview section" aria-labelledby="fleet-preview-title">
      <div className="container">
        <div className="section__header">
          <p className="section__label">Featured Vessels</p>
          <h2 className="section__title" id="fleet-preview-title">Handpicked for Excellence</h2>
          <p className="section__subtitle">Every vessel in our fleet is curated for comfort, performance, and style.</p>
        </div>
        <div className="fleet__grid">
          {vessels.map(v => (
            <VesselCard key={v.id} vessel={v} />
          ))}
        </div>
        <div className="fleet-preview__cta">
          <Link href="/experiences" className="btn btn--primary btn--lg">View All Vessels</Link>
        </div>
      </div>
    </section>
  )
}
