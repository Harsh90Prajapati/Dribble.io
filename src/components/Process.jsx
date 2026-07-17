import { process } from '../data/content'

export default function Process() {
  return (
    <section id="process" className="section bg-base-soft">
      <div className="wrap">
        <div className="max-w-xl">
          <span className="eyebrow">{process.eyebrow}</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mt-5 text-ink">{process.title}</h2>
          <p className="text-ink-muted mt-5 leading-relaxed">{process.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {process.steps.map((step) => (
            <div key={step.n} className="border-t border-line pt-6">
              <span className="font-display text-sm text-ember-light">{step.n}</span>
              <h3 className="font-display text-lg mt-3 text-ink">{step.title}</h3>
              <p className="text-sm text-ink-muted mt-2 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
