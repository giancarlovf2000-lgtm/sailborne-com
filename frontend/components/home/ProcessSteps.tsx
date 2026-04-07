const steps = [
  { num: '1', title: 'Tell Us Your Vision', body: 'Fill out our inquiry form or reach out directly. Share your destination, dates, group size, and any special requests.' },
  { num: '2', title: 'Get a Custom Proposal', body: 'Our team curates the perfect vessel and itinerary for your needs. We handle every detail, from catering to crew.' },
  { num: '3', title: 'Confirm & Prepare', body: 'Review your personalized charter plan, confirm your booking, and receive a pre-departure briefing from your captain.' },
  { num: '4', title: 'Set Sail in Luxury', body: 'All you have to do is show up. Your crew takes care of everything — you enjoy an unforgettable experience on the water.' },
]

export default function ProcessSteps() {
  return (
    <section className="section section--bg" aria-labelledby="process-title">
      <div className="container">
        <div className="section__header">
          <span className="eyebrow">How It Works</span>
          <h2 className="heading-xl" id="process-title">Charter in Four Simple Steps</h2>
          <p>We handle the complexity so your only job is to enjoy the journey.</p>
        </div>
        <div className="process-steps">
          {steps.map(s => (
            <div key={s.num} className="process-step">
              <div className="process-step__num">{s.num}</div>
              <h3 className="process-step__title">{s.title}</h3>
              <p className="process-step__body">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
