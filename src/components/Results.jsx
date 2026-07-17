import useInView from '../hooks/useInView'
import useCountUp from '../hooks/useCountUp'
import { results } from '../data/content'

function ResultStat({ value, suffix, label, decimals = 0, start }) {
  const count = useCountUp(value, start, 1600, decimals)
  return (
    <div className="text-center sm:text-left">
      <div className="font-display text-4xl md:text-5xl text-ink">
        {decimals ? count.toFixed(decimals) : count}
        {suffix}
      </div>
      <div className="text-sm text-ink-muted mt-2">{label}</div>
    </div>
  )
}

export default function Results() {
  const [ref, inView] = useInView({ threshold: 0.4 })

  return (
    <section id="results" className="section">
      <div className="wrap">
        <div className="max-w-xl">
          <span className="eyebrow">{results.eyebrow}</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mt-5 text-ink">{results.title}</h2>
          <p className="text-ink-muted mt-5 leading-relaxed">{results.subtitle}</p>
        </div>

        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-14 border-t border-line pt-12">
          {results.stats.map((s) => (
            <ResultStat key={s.label} {...s} start={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
