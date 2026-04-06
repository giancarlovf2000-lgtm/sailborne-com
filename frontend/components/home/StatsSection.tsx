const stats = [
  { value: '200+', label: 'Charters Completed' },
  { value: '32',   label: 'Vessels in Fleet' },
  { value: '3',    label: 'Destinations' },
  { value: '98%',  label: 'Client Satisfaction' },
]

export default function StatsSection() {
  return (
    <section className="stats section--sm" aria-label="Statistics">
      <div className="container">
        <div className="stats__grid">
          {stats.map(s => (
            <div key={s.label} className="stats__item">
              <span className="stats__value">{s.value}</span>
              <span className="stats__label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
