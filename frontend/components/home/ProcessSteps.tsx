const steps = [
  {
    number: '01',
    title: 'Tell Us Your Vision',
    description: 'Fill out our inquiry form or reach out directly. Share your destination, dates, group size, and any special requests.',
  },
  {
    number: '02',
    title: 'Get a Custom Proposal',
    description: 'Our team curates the perfect vessel and itinerary for your needs. We handle every detail, from catering to crew.',
  },
  {
    number: '03',
    title: 'Confirm & Prepare',
    description: 'Review your personalized charter plan, confirm your booking, and receive a pre-departure briefing from your captain.',
  },
  {
    number: '04',
    title: 'Set Sail in Luxury',
    description: 'All you have to do is show up. Your crew takes care of everything — you enjoy an unforgettable experience on the water.',
  },
]

export default function ProcessSteps() {
  return (
    <section className="process section" aria-labelledby="process-title">
      <div className="container">
        <div className="section__header">
          <p className="section__label">How It Works</p>
          <h2 className="section__title" id="process-title">Charter in Four Simple Steps</h2>
          <p className="section__subtitle">We handle the complexity so your only job is to enjoy the journey.</p>
        </div>
        <div className="process__steps">
          {steps.map((step, i) => (
            <div key={step.number} className="process__step">
              <div className="process__step-number">{step.number}</div>
              {i < steps.length - 1 && <div className="process__step-connector" aria-hidden="true" />}
              <h3 className="process__step-title">{step.title}</h3>
              <p className="process__step-desc">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
