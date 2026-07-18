import { useEffect, useState } from 'react'
import { nav } from '../data/content'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-base/85 backdrop-blur-md border-b border-line' : 'bg-transparent'
      }`}
    >
      <nav className="wrap flex items-center justify-between px-6 md:px-10 h-20">
        <a href="#top" className="flex items-center gap-2 font-display text-lg tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ember text-base text-sm font-bold">
            D
          </span>
          {nav.brand}
        </a>

        <ul className="hidden md:flex items-center gap-9 text-sm text-ink-muted">
          {nav.links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-ink">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href={nav.cta.href} className="!hidden md:inline-flex btn-primary !px-5 !py-2.5 text-sm">
          {nav.cta.label}
        </a>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`h-[1.5px] w-6 bg-ink transition-transform ${open ? 'translate-y-[6.5px] rotate-45' : ''}`} />
          <span className={`h-[1.5px] w-6 bg-ink transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`h-[1.5px] w-6 bg-ink transition-transform ${open ? '-translate-y-[6.5px] -rotate-45' : ''}`} />
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-base border-t border-line px-6 pb-6">
          <ul className="flex flex-col gap-4 pt-4 text-sm text-ink-muted">
            {nav.links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)} className="block py-1">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={nav.cta.href}
            onClick={() => setOpen(false)}
            className="btn-primary w-full mt-4 text-xs sm:hidden"
          >
            {nav.cta.label}
          </a>
        </div>
      )}
    </header>
  )
}
