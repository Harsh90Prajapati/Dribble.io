export default function ImageTrust() {
  return (
    <section className="relative overflow-hidden bg-[#0a0806] py-14 sm:py-20 md:py-24">
      {/* ambient glow to match the rest of the page */}
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-[480px] w-[480px] rounded-full bg-[#ff5a2b]/15 blur-[160px]" />
      <div className="pointer-events-none absolute -top-32 right-0 h-[400px] w-[400px] rounded-full bg-[#7a1f12]/20 blur-[160px]" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative w-full overflow-hidden rounded-[28px] sm:rounded-[32px] border border-white/10 aspect-[4/5] sm:aspect-[16/10] md:aspect-[16/8]">
          {/* background visual — swap the src for your real asset */}
          <img
            src="/images/trust-visual.jpg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = "none"
            }}
          />

          {/* CSS fallback / atmosphere layer — sits behind the img, shows if image is missing */}
          <div className="absolute inset-0 -z-10 bg-[#0c0a08]">
            <div className="absolute left-1/2 top-1/2 h-[70%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_35%_30%,#ffd9a0_0%,#ff9a3d_28%,#ff6a1a_55%,#b8420f_78%,#3a1206_100%)] blur-[2px]" />
          </div>

          {/* darkening gradient so text stays legible on top of any image */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/40" />

          {/* top-left badge */}
          <div className="absolute left-3 top-3 sm:left-6 sm:top-6 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-md px-4 py-2.5 sm:px-5 sm:py-3">
            <p className="text-[9px] sm:text-[11px] font-mono uppercase tracking-[0.15em] text-white/50">
              Performance
            </p>
            <p className="mt-1 text-lg sm:text-2xl font-extrabold text-white leading-none">
              99<span className="text-[#ff7a1a]">/100</span>
            </p>
          </div>

          {/* top-right badge */}
          <div className="absolute right-3 top-3 sm:right-6 sm:top-6 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-md px-4 py-2.5 sm:px-5 sm:py-3">
            <p className="text-[9px] sm:text-[11px] font-mono uppercase tracking-[0.15em] text-white/50 text-right">
              Avg. Lift
            </p>
            <p className="mt-1 text-lg sm:text-2xl font-extrabold text-white leading-none text-right">
              +312<span className="text-[#ff7a1a]">%</span>
            </p>
          </div>

          {/* bottom stats row */}
          <div className="absolute inset-x-0 bottom-0 px-5 pb-6 sm:px-10 sm:pb-10 md:px-12 md:pb-12">
            <div className="flex flex-col gap-6 xs:flex-row xs:items-end xs:justify-between sm:gap-8">
              <div>
                <p className="font-sans font-extrabold leading-none text-white text-4xl sm:text-5xl md:text-6xl">
                  150<span className="text-[#ff7a1a]">+</span>
                </p>
                <p className="mt-2 text-[10px] sm:text-xs font-mono uppercase tracking-[0.15em] text-white/45">
                  Projects Shipped
                </p>
              </div>

              <div>
                <p className="font-sans font-extrabold leading-none text-white text-4xl sm:text-5xl md:text-6xl">
                  98<span className="text-[#ff7a1a]">%</span>
                </p>
                <p className="mt-2 text-[10px] sm:text-xs font-mono uppercase tracking-[0.15em] text-white/45">
                  Client Satisfaction
                </p>
              </div>

              <div>
                <p className="font-sans font-extrabold leading-none text-white text-4xl sm:text-5xl md:text-6xl">
                  250<span className="text-[#ff7a1a]">M</span>+
                </p>
                <p className="mt-2 text-[10px] sm:text-xs font-mono uppercase tracking-[0.15em] text-white/45">
                  Revenue Generated
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}