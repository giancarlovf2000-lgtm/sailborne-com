import Image from 'next/image'
import Link from 'next/link'
import type { Vessel } from '@/types'

interface VesselCardProps {
  vessel: Vessel
}

function formatPrice(vessel: Vessel): string {
  if (vessel.price_contact || !vessel.price_from) return 'Contact for pricing'
  const unit = vessel.price_unit === 'day' ? '/day' : vessel.price_unit === 'week' ? '/week' : '/event'
  return `From $${vessel.price_from.toLocaleString()}${unit}`
}

export default function VesselCard({ vessel }: VesselCardProps) {
  return (
    <div className="fleet-card">
      <div className="fleet-card__img-wrap" style={{ position: 'relative' }}>
        {vessel.image_url ? (
          <Image
            src={vessel.image_url}
            alt={vessel.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'cover', transition: 'transform 0.55s ease' }}
          />
        ) : (
          <div style={{ width: '100%', height: '100%', background: 'var(--blue-pale)' }} />
        )}
      </div>
      <div className="fleet-card__body">
        <div className="fleet-card__type">{vessel.type}</div>
        <h3 className="fleet-card__name">{vessel.name}</h3>
        <div className="fleet-card__specs">
          {vessel.length_ft && (
            <div>
              <div className="spec-item__label">Length</div>
              <div className="spec-item__value">{vessel.length_ft} ft</div>
            </div>
          )}
          {vessel.capacity && (
            <div>
              <div className="spec-item__label">Capacity</div>
              <div className="spec-item__value">{vessel.capacity} guests</div>
            </div>
          )}
          {vessel.cabins && (
            <div>
              <div className="spec-item__label">Cabins</div>
              <div className="spec-item__value">{vessel.cabins}</div>
            </div>
          )}
          <div>
            <div className="spec-item__label">Pricing</div>
            <div className="spec-item__value" style={{ color: 'var(--blue)', fontSize: '13px' }}>{formatPrice(vessel)}</div>
          </div>
        </div>
        <Link href="/contact" className="btn btn--primary btn--sm" style={{ width: '100%', justifyContent: 'center' }}>
          Book This Vessel
        </Link>
      </div>
    </div>
  )
}
