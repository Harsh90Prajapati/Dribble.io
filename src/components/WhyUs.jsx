import { whyUs } from '../data/content'

export default function WhyUs() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="grid lg:grid-cols-2 gap-16 sm:gap-20 lg:gap-16 items-center">
          {/* ---------------- visual column ---------------- */}
          <div className="order-1 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[420px] mt-2 mb-10 sm:mb-12 lg:my-0">
              <div className="relative aspect-square w-full overflow-hidden rounded-[28px] border border-white/10 bg-black">
                <img
                  src={whyUs.visual?.image}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
                {/* CSS fallback glow if no image is supplied */}
                <div className="absolute inset-0 -z-10 bg-[#0c0a08]">
                  <div className="absolute left-1/2 top-1/2 h-[60%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_35%_30%,#ff9a3d_0%,#ff6a1a_35%,#7a1f12_65%,#1a0906_100%)] blur-[2px]" />
                </div>
              </div>

              {/* badges */}
              {whyUs.visual?.badges?.map((badge) => (
                <div
                  key={badge.label}
                  className={`absolute rounded-2xl border border-white/10 bg-[#141210]/95 backdrop-blur-md px-4 py-2.5 sm:px-5 sm:py-3 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.7)] ${
                    badge.position === 'top'
                      ? '-top-5 right-4 sm:-top-6 sm:right-8'
                      : '-bottom-5 left-4 sm:-bottom-6 sm:left-8'
                  }`}
                >
                  <p className="text-[9px] sm:text-[11px] font-mono uppercase tracking-[0.15em] text-white/45">
                    {badge.label}
                  </p>
                  <p className="mt-1 text-base sm:text-xl font-extrabold text-white leading-none whitespace-nowrap">
                    {badge.value}
                    <span className="text-[#ff7a1a]">{badge.unit}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ---------------- text column ---------------- */}
          <div className="order-2 lg:order-2 max-w-xl">
            <span className="eyebrow flex items-center gap-3">
              <span className="h-px w-6 bg-white/25" />
              {whyUs.eyebrow}
            </span>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mt-5 leading-[1.05]">
              {whyUs.title?.map((line, i) => (
                <span
                  key={i}
                  className={`block ${
                    line.style === 'muted'
                      ? 'italic font-medium text-[#8a8a86]'
                      : 'text-ink'
                  }`}
                >
                  {line.text}
                  {line.accent && (
                    <span className="text-[#ff7a1a]">{line.accent}</span>
                  )}
                </span>
              ))}
            </h2>

            <p className="text-ink-muted mt-5 leading-relaxed">{whyUs.subtitle}</p>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 mt-10">
              {whyUs.items.map((item) => (
                <div key={item.title} className="card p-6 sm:p-7">
                  <h3 className="font-display text-base sm:text-lg text-ink flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff7a1a]" />
                    {item.title}
                  </h3>
                  <p className="text-sm text-ink-muted mt-2 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}