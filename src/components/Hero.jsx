export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#0a0806] pt-28 pb-20 sm:pt-36 sm:pb-28 md:pt-44 md:pb-32"
    >
      {/* ambient glow — warm orange bleeding in from the top-left, faint red on the right */}
      <div className="pointer-events-none absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full bg-[#ff5a2b]/25 blur-[140px]" />
      <div className="pointer-events-none absolute -top-20 right-0 h-[420px] w-[420px] rounded-full bg-[#7a1f12]/25 blur-[160px]" />

      <div className="relative mx-auto w-full max-w-6xl px-6 sm:px-10 lg:px-12">
        {/* eyebrow */}
        <div className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#ff7a3d]" />
          <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-white/40">
            Creative Agency &middot; Est. 2024
          </span>
        </div>

        {/* headline */}
        <h1 className="mt-6 font-sans font-extrabold tracking-tight leading-[0.98] text-white text-[15vw] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
          <span className="block">Websites that</span>
          <span className="block">
            <span className="italic font-medium text-[#8a8a86]">don&rsquo;t just </span>
            <span className="text-[#ff7a3d]">look</span>
          </span>
          <span className="block text-[#ffc8a0]">
            good<span className="text-[#ff7a3d]">.</span>
          </span>
        </h1>

        {/* paragraph */}
        <p className="mt-6 max-w-md text-sm sm:text-base leading-relaxed !text-white">
          We craft cinematic, AI-enhanced digital experiences for ambitious
          brands in architecture, luxury interiors, real estate and SaaS
          engineered to generate real business.
        </p>

        {/* CTAs */}
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ff8a3d] to-[#ff5a2b] px-6 py-3 text-sm font-semibold text-[#1a0e08] shadow-[0_8px_30px_-8px_rgba(255,90,43,0.6)] transition-transform hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff8a3d]"
          >
            Book a strategy call
            <span aria-hidden="true">&rarr;</span>
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white/85 transition-colors hover:bg-white/[0.08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40"
          >
            See selected work
          </a>
        </div>
      </div>
    </section>
  )
}