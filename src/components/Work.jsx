import { work } from '../data/content'

const thumbGradients = [
  'bg-[linear-gradient(135deg,#2a2a2a_0%,#0d0d0d_100%)]',
  'bg-[linear-gradient(135deg,#3a2416_0%,#0d0d0d_100%)]',
  'bg-[linear-gradient(135deg,#1c1c1c_0%,#3a1f10_100%)]',
]

export default function Work() {
  return (
    <section id="work" className="section bg-base-soft">
      <div className="wrap">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="eyebrow">{work.eyebrow}</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mt-5 text-ink">{work.title}</h2>
            <p className="text-ink-muted mt-5 leading-relaxed">{work.subtitle}</p>
          </div>
          <a href={work.archiveLink.href} className="btn-secondary text-sm shrink-0">
            {work.archiveLink.label}
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {work.projects.map((p, i) => (
            <a href="#contact" key={p.title} className="group block">
              <div
                className={`aspect-[4/5] rounded-2xl border border-line ${thumbGradients[i % thumbGradients.length]} relative overflow-hidden`}
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
                  <span className="text-sm border border-white/30 rounded-full px-4 py-2">Case study</span>
                </div>
              </div>
              <div className="flex gap-2 mt-5 flex-wrap">
                {p.tags.map((t) => (
                  <span key={t} className="text-[11px] uppercase tracking-wide text-ink-faint border border-line rounded-full px-2.5 py-1">
                    {t}
                  </span>
                ))}
              </div>
              <h3 className="font-display text-xl mt-3 text-ink">{p.title}</h3>
              <p className="text-sm text-ember-light mt-1">{p.metric}</p>
            </a>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mt-6">
          {work.sideStats.map((s) => (
            <div key={s.label} className="card p-8 flex items-center justify-between">
              <span className="font-display text-3xl text-ink">{s.value}</span>
              <span className="text-sm text-ink-muted">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
