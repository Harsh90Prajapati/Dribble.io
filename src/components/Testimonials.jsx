import { useEffect, useState } from 'react'
import { testimonials } from '../data/content'

function Star(props) {
  return (
    <svg {...props} viewBox="0 0 20 20" fill="currentColor">
      <path d="M10 1.5l2.47 5.14 5.53.72-4.06 3.94 1 5.7L10 14.2l-4.94 2.8 1-5.7L2 7.36l5.53-.72L10 1.5Z" />
    </svg>
  )
}

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const items = testimonials.items

  // auto-advance every 6s, resets whenever the active slide changes
  useEffect(() => {
    if (items.length <= 1) return
    const id = setInterval(() => {
      setActive((i) => (i + 1) % items.length)
    }, 6000)
    return () => clearInterval(id)
  }, [items.length, active])

  const t = items[active]
  const rating = t.rating ?? 5

  return (
    <section className="relative overflow-hidden bg-[#0a0806] py-24 md:py-32">
      {/* warm gradient bleeding in from the top-left, matching the reference */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-[560px] w-[560px] rounded-full bg-[#c9600f]/25 blur-[150px]" />
      <div className="pointer-events-none absolute top-1/3 left-0 h-[400px] w-[400px] rounded-full bg-[#7a1f12]/20 blur-[140px]" />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-10 lg:px-12">
        <div className="max-w-xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-6 bg-white/25" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/40">
              {testimonials.eyebrow}
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-5 leading-[1.08] text-white">
            <span className="block">{testimonials.title}</span>
            <span className="block">
              <span className="italic font-medium text-white/45">{testimonials.titleItalic}</span>{' '}
              {testimonials.titleRest}
            </span>
          </h2>
        </div>

        {/* card */}
        <div className="relative mt-14 rounded-3xl border border-white/10 bg-gradient-to-br from-[#3a1d0a]/70 via-[#160b05] to-[#0a0806] p-8 sm:p-12 md:p-14 overflow-hidden">
          {/* decorative giant quote mark */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-6 left-6 sm:top-8 sm:left-10 text-[110px] sm:text-[140px] leading-none font-serif text-[#ff7a3d]/25 select-none"
            style={{ WebkitTextStroke: '1.5px rgba(255,122,61,0.35)' }}
          >
            &rdquo;
          </span>

          <div className="relative">
            <blockquote className="max-w-3xl text-xl sm:text-2xl md:text-[28px] font-bold leading-snug text-white">
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            <div className="mt-10 flex flex-wrap items-end justify-between gap-6">
              <div>
                <div className="font-display font-bold text-white">{t.name}</div>
                <div className="text-xs font-mono uppercase tracking-[0.12em] text-white/40 mt-1">
                  {t.role}
                </div>

                {/* pagination dots */}
                {items.length > 1 && (
                  <div className="flex items-center gap-2 mt-6">
                    {items.map((item, i) => (
                      <button
                        key={item.name}
                        onClick={() => setActive(i)}
                        aria-label={`Show testimonial from ${item.name}`}
                        aria-current={i === active}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          i === active ? 'w-7 bg-[#ff7a3d]' : 'w-3 bg-white/20 hover:bg-white/35'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>

              <div className="flex gap-1 text-[#ff8a3d]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < rating ? '' : 'opacity-25'}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}