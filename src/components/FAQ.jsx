import { useState } from 'react'
import { faq } from '../data/content'

function FaqItem({ q, a, isOpen, onToggle }) {
  return (
    <div className="border-b border-line py-6">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left gap-6"
        aria-expanded={isOpen}
      >
        <span className="font-display text-lg text-ink">{q}</span>
        <span
          className={`shrink-0 flex h-8 w-8 items-center justify-center rounded-full border border-line transition-transform duration-300 ${
            isOpen ? 'rotate-45 bg-ember border-ember' : ''
          }`}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1V13M1 7H13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-ink-muted leading-relaxed max-w-2xl">{a}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="section">
      <div className="wrap max-w-3xl">
        <div>
          <span className="eyebrow">{faq.eyebrow}</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mt-5 text-ink">{faq.title}</h2>
        </div>

        <div className="mt-12 border-t border-line">
          {faq.items.map((item, i) => (
            <FaqItem
              key={item.q}
              q={item.q}
              a={item.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
