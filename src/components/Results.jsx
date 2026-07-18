import useInView from '../hooks/useInView'
import useCountUp from '../hooks/useCountUp'
import { results } from '../data/content'

function ResultStat({ value, suffix, label, decimals = 0, start, index }) {
  const count = useCountUp(value, start, 1600, decimals)
  return (
    <div
      style={{ transitionDelay: start ? `${index * 90}ms` : '0ms' }}
      className={`rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-[#ff7a3d]/10 p-6 sm:p-8 transition-all duration-700 ease-out hover:border-white/20
        ${start ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="font-display text-4xl sm:text-5xl font-extrabold text-white leading-none">
        {decimals ? count.toFixed(decimals) : count}
        <span className="text-[#ff8a3d]">{suffix}</span>
      </div>
      <div className="text-xs sm:text-sm font-mono uppercase tracking-[0.12em] text-white/40 mt-4">
        {label}
      </div>
    </div>
  )
}

export default function Results() {
  const [headerRef, headerInView] = useInView({ threshold: 0.3 })
  const [ref, inView] = useInView({ threshold: 0.4 })

  return (
    <section id="results" className="section bg-[#0a0806] py-24 md:py-32">
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
              {results.eyebrow}
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold mt-5 leading-[1.05]">
            <span className="block text-white">{results.title}</span>
            <span className="block text-[#ff7a3d]">{results.titleAccent}</span>
          </h2>
          <p className="text-white/45 mt-5 leading-relaxed max-w-sm">{results.subtitle}</p>
        </div>

        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 mt-14">
          {results.stats.map((s, index) => (
            <ResultStat key={s.label} {...s} start={inView} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}