'use client'

import { useState } from 'react'
import VesselCard from './VesselCard'
import type { Vessel } from '@/types'

interface FleetSectionProps {
  vessels: Vessel[]
}

const TABS = [
  { key: 'all',      label: 'All Vessels' },
  { key: 'fajardo',  label: 'Puerto Rico — Fajardo' },
  { key: 'parguera', label: 'Puerto Rico — La Parguera' },
  { key: 'miami',    label: 'Miami' },
  { key: 'greece',   label: 'Greece' },
]

export default function FleetSection({ vessels }: FleetSectionProps) {
  const [active, setActive] = useState('all')

  const filtered = active === 'all'
    ? vessels
    : vessels.filter(v => v.destination === active)

  return (
    <section className="fleet section" id="fleet">
      <div className="container">
        <div className="section__header">
          <p className="section__label">Our Fleet</p>
          <h2 className="section__title">Choose Your Vessel</h2>
          <p className="section__subtitle">World-class yachts curated for every occasion — from intimate sunset sails to week-long expeditions.</p>
        </div>

        <div className="fleet__tabs" role="tablist">
          {TABS.map(tab => (
            <button
              key={tab.key}
              role="tab"
              aria-selected={active === tab.key}
              className={`fleet__tab${active === tab.key ? ' active' : ''}`}
              onClick={() => setActive(tab.key)}
            >
              {tab.label}
              <span className="fleet__tab-count">
                {tab.key === 'all' ? vessels.length : vessels.filter(v => v.destination === tab.key).length}
              </span>
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="fleet__empty">No vessels available for this destination. <a href="/contact">Contact us</a> for custom arrangements.</p>
        ) : (
          <div className="fleet__grid">
            {filtered.map(vessel => (
              <VesselCard key={vessel.id} vessel={vessel} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
