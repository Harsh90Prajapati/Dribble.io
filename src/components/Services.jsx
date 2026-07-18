import { useEffect, useRef, useState } from 'react'
import { services } from '../data/content'

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

/* ---------- icon set (cycled per card, no data-shape change needed) ---------- */
const icons = [
  // palette
  (p) => (
    <svg {...p} viewBox="0 0 24 24" fill="none">
      <path d="M12 3a9 9 0 1 0 0 18c1.1 0 1.6-.9 1.6-1.7 0-.4-.2-.8-.4-1.1-.2-.3-.4-.7-.4-1.1 0-.8.7-1.4 1.5-1.4H16a4 4 0 0 0 4-4c0-4.4-3.9-8.7-8-8.7Z" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="7.5" cy="10.5" r="1.1" fill="currentColor" />
      <circle cx="11" cy="7" r="1.1" fill="currentColor" />
      <circle cx="15.5" cy="8.5" r="1.1" fill="currentColor" />
    </svg>
  ),
  // code brackets
  (p) => (
    <svg {...p} viewBox="0 0 24 24" fill="none">
      <path d="M9 6 4 12l5 6M15 6l5 6-5 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  // cpu / automation
  (p) => (
    <svg {...p} viewBox="0 0 24 24" fill="none">
      <rect x="7" y="7" width="10" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M9 3v2M15 3v2M9 19v2M15 19v2M3 9h2M3 15h2M19 9h2M19 15h2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
  // rocket
  (p) => (
    <svg {...p} viewBox="0 0 24 24" fill="none">
      <path d="M12 3c3 1 5 4.5 5 8 0 2-1 4-2 5l-3 3-3-3c-1-1-2-3-2-5 0-3.5 2-7 5-8Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="1.4" fill="currentColor" />
      <path d="M9 17l-2 4M15 17l2 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
  // search
  (p) => (
    <svg {...p} viewBox="0 0 24 24" fill="none">
      <circle cx="10.5" cy="10.5" r="6" stroke="currentColor" strokeWidth="1.4" />
      <path d="M20 20l-4.6-4.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
  // sparkle / brand
  (p) => (
    <svg {...p} viewBox="0 0 24 24" fill="none">
      <path d="M12 3l1.6 4.9L18 9.5l-4.4 1.6L12 16l-1.6-4.9L6 9.5l4.4-1.6L12 3Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M18.5 15l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2Z" fill="currentColor" />
    </svg>
  ),
  // layers
  (p) => (
    <svg {...p} viewBox="0 0 24 24" fill="none">
      <path d="M12 3l8 4.5-8 4.5-8-4.5L12 3Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M4 12.5 12 17l8-4.5M4 16.5 12 21l8-4.5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  ),
  // wand / optimization
  (p) => (
    <svg {...p} viewBox="0 0 24 24" fill="none">
      <path d="M4 20 15 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M17 3l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2ZM6 13l.5 1.5L8 15l-1.5.5L6 17l-.5-1.5L4 15l1.5-.5L6 13Z" fill="currentColor" />
    </svg>
  ),
  // refresh / redesign
  (p) => (
    <svg {...p} viewBox="0 0 24 24" fill="none">
      <path d="M4 12a8 8 0 0 1 13.7-5.7L20 8M20 8V4M20 8h-4M20 12a8 8 0 0 1-13.7 5.7L4 16M4 16v4M4 16h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  // wrench / maintenance
  (p) => (
    <svg {...p} viewBox="0 0 24 24" fill="none">
      <path d="M14.7 6.3a4 4 0 0 0-5.4 4.9L4 16.5V20h3.5l5.3-5.3a4 4 0 0 0 4.9-5.4l-2.6 2.6-2-2 2.6-2.6Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  ),
]

/* ---------- single card ---------- */
function ServiceCard({ item, index }) {
  const [ref, inView] = useInView(0.15)
  const Icon = icons[index % icons.length]
  const col = index % 3

  return (
    <div
      ref={ref}
      style={{ transitionDelay: inView ? `${col * 110 + Math.floor(index / 3) * 60}ms` : '0ms' }}
      className={`group relative overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.015] p-8
        transition-[opacity,transform,border-color,background-color] duration-700 ease-out
        hover:border-[#ff7a3d]/60 hover:bg-white/[0.03]
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      {/* hover glow — orange bloom easing in from the top */}
      <div className="pointer-events-none absolute inset-0 rounded-[20px] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -top-16 left-1/2 h-40 w-64 -translate-x-1/2 rounded-full bg-[#ff7a3d]/25 blur-3xl" />
      </div>

      <div className="relative flex items-center justify-between">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.06] text-[#ff8a3d] transition-colors duration-300 group-hover:bg-white/10">
          <Icon className="h-4 w-4" />
        </span>
        <span className="font-mono text-xs text-white/30">
          {String(item.n).padStart(2, '0')}
        </span>
      </div>

      <h3 className="relative mt-6 text-lg sm:text-xl font-bold text-white">
        {item.title}
      </h3>
      <p className="relative mt-3 text-sm leading-relaxed text-white/45">
        {item.desc}
      </p>

      <span className="relative mt-5 flex items-center gap-1.5 text-sm font-medium text-[#ff8a3d] opacity-0 -translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
        Learn more
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </div>
  )
}

/* ---------- section ---------- */
export default function Services() {
  const [headerRef, headerInView] = useInView(0.3)

  return (
    <section id="services" className="section bg-[#0a0806] py-24 md:py-32">
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
              {services.eyebrow}
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold mt-5 text-white leading-[1.08]">
            {services.title}{' '}
            <span className="italic font-medium text-white/45">{services.titleAccent}</span>
          </h2>
          <p className="text-white/45 mt-5 leading-relaxed max-w-md">{services.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {services.items.map((item, index) => (
            <ServiceCard key={item.n} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
