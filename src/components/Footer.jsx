import { useState } from 'react'
import { footer } from '../data/content'

// Custom social icons as inline SVGs — avoids lucide-react export issues entirely
const XIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18} {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} width={18} height={18} {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18} {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.558V9h3.556v11.452z" />
  </svg>
)

const DribbbleIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} width={18} height={18} {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94M21.75 12.84c-6.62-1.41-12.14-.96-16.38 4.02" />
  </svg>
)

const socials = [
  { name: 'Twitter/X', href: 'https://twitter.com/dribblio', Icon: XIcon },
  { name: 'Instagram', href: 'https://instagram.com/dribblio', Icon: InstagramIcon },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/dribbl-io', Icon: LinkedinIcon },
  { name: 'Dribbble', href: 'https://dribbble.com/dribblio', Icon: DribbbleIcon },
]

const linkMap = {
  About: '#about',
  Careers: '#careers',
  Contact: '#contact',
  Press: '#press',
  Design: '#services',
  Development: '#services',
  'AI Systems': '#services',
  SEO: '#services',
  Redesign: '#services',
  'Case studies': '#work',
  Journal: '#journal',
  Playbook: '#playbook',
  FAQ: '#faq',
}

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!email) return
    console.log('Subscribed:', email)
    setSubscribed(true)
    setEmail('')
  }

  return (
    <footer className="border-t border-line">
      <div className="wrap section !py-16 grid md:grid-cols-2 gap-14">
        <div>
          <a href="#top" className="flex items-center gap-2 font-display text-lg">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ember text-base text-sm font-bold">
              D
            </span>
            {footer.brand}
          </a>
          <p className="text-ink-muted mt-5 max-w-xs leading-relaxed text-sm">{footer.tagline}</p>

          <form onSubmit={handleSubscribe} className="flex gap-2 mt-6 max-w-sm">
            <input
              type="email"
              required
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-base-card border border-line rounded-full px-4 py-2.5 text-sm text-ink focus:border-ember/60 transition-colors"
            />
            <button type="submit" className="btn-primary !px-5 !py-2.5 text-sm shrink-0">
              {footer.subscribeLabel}
            </button>
          </form>
          {subscribed && <p className="text-xs text-ember-light mt-3">You're on the list.</p>}
        </div>

        <div className="grid grid-cols-3 gap-8">
          {footer.columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-medium text-ink">{col.title}</h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href={linkMap[link] || '#'}
                      className="text-sm text-ink-muted hover:text-ink transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="wrap px-6 md:px-10 py-8 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-ink-faint">{footer.copyright}</p>
        <div className="flex gap-5">
          {socials.map(({ name, href, Icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="text-ink-faint hover:text-ink transition-colors"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}