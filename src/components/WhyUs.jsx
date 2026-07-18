import { useEffect, useRef, useState } from 'react'
import { whyUs } from '../data/content'

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

export default function WhyUs() {
  const [headerRef, headerInView] = useInView(0.3)
  const [gridRef, gridInView] = useInView(0.1)

  return (
    <section className="section bg-[#0a0806] py-24 md:py-32">
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
              {whyUs.eyebrow}
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold mt-5 text-white leading-[1.08]">
            {whyUs.title}
          </h2>
          <p className="text-white/45 mt-5 leading-relaxed">{whyUs.subtitle}</p>
        </div>

        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mt-14">
          {whyUs.items.map((item, index) => (
            <div
              key={item.title}
              style={{ transitionDelay: gridInView ? `${(index % 3) * 90}ms` : '0ms' }}
              className={`rounded-2xl border border-white/10 bg-white/[0.015] p-8 transition-all duration-700 ease-out hover:border-white/20 hover:bg-white/[0.03]
                ${gridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <h3 className="font-display text-lg font-bold text-white">{item.title}</h3>
              <p className="text-sm text-white/45 mt-3 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}