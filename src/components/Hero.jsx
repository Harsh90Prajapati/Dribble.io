import useInView from '../hooks/useInView'
import useCountUp from '../hooks/useCountUp'
import { hero } from '../data/content'

function StatItem({ value, suffix, label, start }) {
  const count = useCountUp(value, start)
  return (
    <div>
      <div className="font-display text-3xl md:text-4xl text-ink">
        {count}
        {suffix}
      </div>
      <div className="text-xs md:text-sm text-ink-muted mt-1">{label}</div>
    </div>
  )
}

export default function Hero() {
  const [ref, inView] = useInView({ threshold: 0.4 })

  return (
    <section id="top" className="relative overflow-hidden section pt-40 md:pt-48">
      <div className="pointer-events-none absolute inset-x-0 -top-40 h-[560px] bg-glow opacity-60" />

      <div className="wrap relative grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="eyebrow">{hero.eyebrow}</span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mt-6 text-ink">
            {hero.titleLines[0]}{' '}
            <span className="italic text-ink-muted">{hero.titleLines[1]}</span>
          </h1>
          <p className="text-ink-muted text-base md:text-lg mt-6 max-w-md leading-relaxed">
            {hero.paragraph}
          </p>

          <div className="flex flex-wrap gap-4 mt-9">
            <a href={hero.primaryCta.href} className="btn-primary">
              {hero.primaryCta.label}
            </a>
            <a href={hero.secondaryCta.href} className="btn-secondary">
              {hero.secondaryCta.label}
            </a>
          </div>

          <div ref={ref} className="grid grid-cols-3 gap-6 mt-16 max-w-md">
            {hero.stats.map((s) => (
              <StatItem key={s.label} {...s} start={inView} />
            ))}
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <div className="relative w-full max-w-sm aspect-square">
            {/* signature element: layered orb standing in for the 3D hero render */}
            <div className="absolute inset-6 rounded-full bg-ember blur-2xl opacity-60 animate-floaty" />
            <div className="absolute inset-10 rounded-full bg-ember shadow-[0_0_120px_20px_rgba(255,90,43,0.35)] animate-floaty [animation-delay:-1.5s]" />
            <div className="absolute inset-0 rounded-full border border-white/10" />
            <div className="absolute top-[12%] left-[8%] w-24 h-32 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 rotate-[-18deg]" />
            <div className="absolute bottom-[14%] right-[6%] w-20 h-28 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 rotate-[14deg]" />

            <div className="absolute -top-4 -left-4 card px-4 py-3 shadow-xl">
              <div className="font-display text-xl">{hero.badgeTop.value}{hero.badgeTop.suffix}</div>
              <div className="text-[11px] text-ink-muted">{hero.badgeTop.label}</div>
            </div>
            <div className="absolute -bottom-4 -right-2 card px-4 py-3 shadow-xl">
              <div className="font-display text-xl text-ember-light">{hero.badgeBottom.value}{hero.badgeBottom.suffix}</div>
              <div className="text-[11px] text-ink-muted">{hero.badgeBottom.label}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
