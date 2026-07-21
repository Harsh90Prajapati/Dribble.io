import { useState } from 'react'
import { Twitter, Instagram, Linkedin, Dribbble } from 'lucide-react'
import { footer } from '../data/content'

const socials = [
  { name: 'Twitter/X', href: 'https://twitter.com/dribblio', Icon: Twitter },
  { name: 'Instagram', href: 'https://instagram.com/dribblio', Icon: Instagram },
  { name: 'LinkedIn', href: 'linkedin.com/company/dribbl-io', Icon: Linkedin },
  { name: 'Dribbble', href: 'https://dribbble.com/dribblio', Icon: Dribbble },
]

// Maps footer link labels to actual destinations.
// Anchor links (#id) should match section ids used in your Nav component.
// Swap any of these for real routes (e.g. '/careers') if they're separate pages.
const linkMap = {
  About: '#about',
  Careers: '/careers',
  Contact: '#contact',
  Press: '/press',
  Design: '#services',
  Development: '#services',
  'AI Systems': '#services',
  SEO: '#services',
  Redesign: '#services',
  'Case studies': '#work',
  Journal: '/journal',
  Playbook: '/playbook',
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
              <Icon size={18} strokeWidth={1.75} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}