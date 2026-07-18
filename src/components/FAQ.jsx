import { useState } from 'react'
import { faq } from '../data/content'

function FaqItem({ q, a, isOpen, onToggle }) {
  return (
    <div
      className={`rounded-2xl border transition-colors duration-300 px-6 sm:px-8 ${
        isOpen ? 'border-white/15 bg-white/[0.03]' : 'border-white/10 bg-white/[0.015]'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left gap-6 py-6"
        aria-expanded={isOpen}
      >
        <span className="font-display text-base sm:text-lg font-bold text-white">{q}</span>
        <span
          className={`shrink-0 flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300 ${
            isOpen
              ? 'rotate-45 bg-[#ff7a3d] border-[#ff7a3d] text-[#160b05]'
              : 'border-white/20 text-white/70'
          }`}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1V13M1 7H13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-white/45 leading-relaxed max-w-2xl pb-6">{a}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="relative overflow-hidden bg-[#0a0806] py-24 md:py-32">
      {/* warm gradient bleeding in from the top-left, matching the rest of the page */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full bg-[#c9600f]/20 blur-[150px]" />
      <div className="pointer-events-none absolute top-1/2 right-0 h-[400px] w-[400px] rounded-full bg-[#7a1f12]/15 blur-[150px]" />

      <div className="wrap relative mx-auto max-w-3xl px-6 sm:px-10 lg:px-12">
        <div>
          <div className="flex items-center gap-3">
            <span className="h-px w-6 bg-white/25" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/40">
              {faq.eyebrow}
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-5 leading-[1.08]">
            <span className="block text-white">{faq.title}</span>
            <span className="block italic font-medium text-white/45">{faq.titleAccent}</span>
          </h2>
        </div>

        <div className="mt-12 flex flex-col gap-4">
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