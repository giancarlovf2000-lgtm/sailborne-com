'use client'

import { useState } from 'react'
import VesselCard from './VesselCard'
import type { Vessel } from '@/types'

interface FleetSectionProps {
  vessels: Vessel[]
}

const TABS = [
  { key: 'all',      label: 'All Vessels' },
  { key: 'fajardo',  label: 'Fajardo, PR' },
  { key: 'parguera', label: 'La Parguera, PR' },
  { key: 'miami',    label: 'Miami' },
  { key: 'greece',   label: 'Greece' },
]

export default function FleetSection({ vessels }: FleetSectionProps) {
  const [active, setActive] = useState('all')

  const filtered = active === 'all'
    ? vessels
    : vessels.filter(v => v.destination === active)

  return (
    <section className="section section--bg" id="fleet">
      <div className="container">
        <div className="fleet-tabs">
          {TABS.map(tab => {
            const count = tab.key === 'all' ? vessels.length : vessels.filter(v => v.destination === tab.key).length
            return (
              <button
                key={tab.key}
                role="tab"
                aria-selected={active === tab.key}
                className={`fleet-tab${active === tab.key ? ' active' : ''}`}
                onClick={() => setActive(tab.key)}
              >
                {tab.label}
                <span className="fleet-tab__count">{count}</span>
              </button>
            )
          })}
        </div>

        {filtered.length === 0 ? (
          <p style={{ textAlign: 'center', padding: '80px 0', color: 'var(--ink-muted)' }}>
            No vessels available for this destination. <a href="/contact" style={{ color: 'var(--blue)' }}>Contact us</a> for custom arrangements.
          </p>
        ) : (
          <div className="fleet-grid">
            {filtered.map(vessel => (
              <VesselCard key={vessel.id} vessel={vessel} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
