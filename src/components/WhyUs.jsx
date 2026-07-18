import { whyUs } from '../data/content'

export default function WhyUs() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="max-w-xl">
          <span className="eyebrow">{whyUs.eyebrow}</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mt-5 text-ink">{whyUs.title}</h2>
          <p className="text-ink-muted mt-5 leading-relaxed">{whyUs.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {whyUs.items.map((item) => (
            <div key={item.title} className="card p-8">
              <h3 className="font-display text-lg text-ink">{item.title}</h3>
              <p className="text-sm text-ink-muted mt-3 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
