import Image from 'next/image'
import Link from 'next/link'
import type { Vessel } from '@/types'

interface VesselCardProps {
  vessel: Vessel
}

function formatPrice(vessel: Vessel): string {
  if (vessel.price_contact) return 'Contact for pricing'
  if (!vessel.price_from) return 'Contact for pricing'
  const unit = vessel.price_unit === 'day' ? '/day' : vessel.price_unit === 'week' ? '/week' : '/event'
  return `From $${vessel.price_from.toLocaleString()}${unit}`
}

export default function VesselCard({ vessel }: VesselCardProps) {
  return (
    <div className="vessel-card">
      <div className="vessel-card__image-wrap">
        {vessel.image_url ? (
          <Image
            src={vessel.image_url}
            alt={vessel.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="vessel-card__image"
          />
        ) : (
          <div className="vessel-card__image-placeholder" />
        )}
        <span className="vessel-card__badge">{vessel.type}</span>
      </div>
      <div className="vessel-card__body">
        <h3 className="vessel-card__name">{vessel.name}</h3>
        <div className="vessel-card__specs">
          {vessel.length_ft && (
            <span className="vessel-card__spec">
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
              </svg>
              {vessel.length_ft} ft
            </span>
          )}
          {vessel.capacity && (
            <span className="vessel-card__spec">
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {vessel.capacity} guests
            </span>
          )}
          {vessel.cabins && (
            <span className="vessel-card__spec">
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              {vessel.cabins} cabins
            </span>
          )}
        </div>
        <div className="vessel-card__footer">
          <span className="vessel-card__price">{formatPrice(vessel)}</span>
          <Link href="/contact" className="btn btn--primary btn--sm">Book Now</Link>
        </div>
      </div>
    </div>
  )
}
