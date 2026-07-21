import { useState } from 'react'
import { Instagram, Linkedin, Dribbble } from 'lucide-react'
import { footer } from '../data/content'

// Custom X (Twitter) icon — lucide-react removed the "Twitter" export in recent versions
const XIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18} {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const socials = [
  { name: 'Twitter/X', href: 'https://twitter.com/dribblio', Icon: XIcon },
  { name: 'Instagram', href: 'https://instagram.com/dribblio', Icon: Instagram },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/dribbl-io', Icon: Linkedin },
  { name: 'Dribbble', href: 'https://dribbble.com/dribblio', Icon: Dribbble },
]

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