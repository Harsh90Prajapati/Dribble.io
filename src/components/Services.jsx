import { services } from '../data/content'

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="wrap">
        <div className="max-w-xl">
          <span className="eyebrow">{services.eyebrow}</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mt-5 text-ink">{services.title}</h2>
          <p className="text-ink-muted mt-5 leading-relaxed">{services.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line mt-14 rounded-2xl overflow-hidden">
          {services.items.map((item) => (
            <div
              key={item.n}
              className="group bg-base p-8 hover:bg-base-card transition-colors duration-300"
            >
              <span className="font-display text-sm text-ink-faint">{item.n}</span>
              <h3 className="font-display text-xl mt-4 text-ink">{item.title}</h3>
              <p className="text-sm text-ink-muted mt-3 leading-relaxed">{item.desc}</p>
              <span className="inline-flex items-center gap-1.5 text-sm text-ember-light mt-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn more
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
