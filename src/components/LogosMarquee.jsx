import { logos } from '../data/content'

export default function LogosMarquee() {
  const track = [...logos, ...logos]

  return (
    <section className="border-y border-line py-10 overflow-hidden">
      <p className="text-center text-xs uppercase tracking-[0.2em] text-ink-faint mb-8">
        Trusted by ambitious businesses
      </p>
      <div className="relative">
        <div className="flex w-max animate-marquee gap-16">
          {track.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="font-display text-xl md:text-2xl text-ink-muted/70 whitespace-nowrap"
            >
              {name}
            </span>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-base to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-base to-transparent" />
      </div>
    </section>
  )
}
