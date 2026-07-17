import { testimonials } from '../data/content'

export default function Testimonials() {
  return (
    <section className="section bg-base-soft">
      <div className="wrap">
        <div className="max-w-xl">
          <span className="eyebrow">{testimonials.eyebrow}</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mt-5 text-ink">{testimonials.title}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {testimonials.items.map((t) => (
            <figure key={t.name} className="card p-8 flex flex-col justify-between">
              <blockquote className="text-ink/90 leading-relaxed">“{t.quote}”</blockquote>
              <figcaption className="mt-8">
                <div className="font-display text-ink">{t.name}</div>
                <div className="text-sm text-ink-muted">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
