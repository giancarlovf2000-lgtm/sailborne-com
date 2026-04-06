'use client'

import { useState } from 'react'

interface FaqItem {
  question: string
  answer: string
}

interface FaqAccordionProps {
  items: FaqItem[]
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="faq__list">
      {items.map((item, i) => (
        <div key={i} className={`faq__item${open === i ? ' open' : ''}`}>
          <button
            className="faq__question"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span>{item.question}</span>
            <svg className="faq__icon" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className="faq__answer" aria-hidden={open !== i}>
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
