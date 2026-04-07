const stats = [
  { value: '200+', label: 'Charters Completed' },
  { value: '32',   label: 'Vessels in Fleet' },
  { value: '3',    label: 'Destinations' },
  { value: '98%',  label: 'Client Satisfaction' },
]

export default function StatsSection() {
  return (
    <section className="section section--white" aria-label="Statistics">
      <div className="container">
        <div className="stats-row" style={{ justifyContent: 'center', gap: '80px' }}>
          {stats.map(s => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div className="stat__number">{s.value}</div>
              <div className="stat__label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
