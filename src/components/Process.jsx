import { useEffect, useRef, useState } from 'react'
import { process } from '../data/content'

/* ---------- scroll-reveal hook ---------- */
function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(node)
        }
      },
      { threshold, rootMargin: '0px 0px -10% 0px' }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, inView]
}

/* ---------- one row: timeline strip + its 4 cards ---------- */
function StepRow({ steps, rowIndex, isFirstRow }) {
  const [ref, inView] = useInView(0.1)

  return (
    <div ref={ref} className={rowIndex > 0 ? 'mt-6' : ''}>
      {/* timeline strip — dots + connecting line, aligned to the same grid as the cards.
          Only shown from lg up, since it only reads correctly with 4 dots in a row;
          the in-card step numbers already carry the sequence on smaller screens. */}
      <div className="relative hidden lg:grid grid-cols-4 gap-6 mb-3">
        <div
          className={`absolute left-[6px] right-[calc(6px+((100%-6px*2)*3/4)-6px)] top-1/2 h-px -translate-y-1/2 ${
            isFirstRow
              ? 'bg-gradient-to-r from-[#ff7a3d] to-white/10'
              : 'bg-white/10'
          }`}
        />
        {steps.map((step, i) => (
          <div key={step.n} className="relative flex">
            <span
              className={`z-10 h-[13px] w-[13px] rounded-full border transition-colors duration-500 ${
                isFirstRow && i === 0
                  ? 'bg-[#ff7a3d] border-[#ff7a3d]'
                  : 'bg-[#0a0806] border-white/25'
              }`}
            />
          </div>
        ))}
      </div>

      {/* cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
        {steps.map((step, i) => (
          <div
            key={step.n}
            style={{ transitionDelay: inView ? `${i * 90}ms` : '0ms' }}
            className={`rounded-2xl border border-white/10 bg-white/[0.015] p-6 transition-all duration-700 ease-out hover:border-white/20 hover:bg-white/[0.03]
              ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <span className="font-mono text-xs text-[#ff8a3d]">
              {String(step.n).padStart(2, '0')}
            </span>
            <h3 className="font-display text-lg font-bold mt-3 text-white">
              {step.title}
            </h3>
            <p className="text-sm text-white/45 mt-2 leading-relaxed">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ---------- section ---------- */
function chunk(arr, size) {
  const out = []
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size))
  return out
}

export default function Process() {
  const [headerRef, headerInView] = useInView(0.3)
  const rows = chunk(process.steps, 4)

  return (
    <section id="process" className="section bg-[#0a0806] py-24 md:py-32">
      <div className="wrap mx-auto max-w-6xl px-6 sm:px-10 lg:px-12">
        <div
          ref={headerRef}
          className={`max-w-xl transition-all duration-700 ease-out ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-6 bg-white/25" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/40">
              {process.eyebrow}
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold mt-5 text-white leading-[1.08]">
            {process.title}{' '}
            <span className="italic font-medium text-white/45">{process.titleAccent}</span>
          </h2>
          <p className="text-white/45 mt-5 leading-relaxed">{process.subtitle}</p>
        </div>

        <div className="mt-14">
          {rows.map((rowSteps, rowIndex) => (
            <StepRow
              key={rowIndex}
              steps={rowSteps}
              rowIndex={rowIndex}
              isFirstRow={rowIndex === 0}
            />
          ))}
        </div>
      </div>
    </section>
  )
}