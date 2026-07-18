// All copy lives here so it's easy to swap without touching component markup.

export const nav = {
  brand: 'Dribbl.ai',
  links: [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Process', href: '#process' },
    { label: 'Results', href: '#results' },
    { label: 'FAQ', href: '#faq' },
  ],
  cta: { label: 'Book a strategy call', href: '#contact' },
}

export const hero = {
  eyebrow: 'Creative agency · Est. 2024',
  titleLines: ["Websites that", "don't just look good."],
  paragraph:
    'We craft cinematic, AI-enhanced digital experiences for ambitious brands in architecture, luxury interiors, real estate and SaaS engineered to generate real business.',
  primaryCta: { label: 'Book a strategy call', href: '#contact' },
  secondaryCta: { label: 'See selected work', href: '#work' },
  stats: [
    { value: 120, suffix: '+', label: 'Projects shipped' },
    { value: 98, suffix: '%', label: 'Client satisfaction' },
    { value: 42, suffix: 'M+', label: 'Revenue generated' },
  ],
  badgeTop: { value: '99', suffix: '/100', label: 'Performance score' },
  badgeBottom: { value: '+312', suffix: '%', label: 'Average lead lift' },
}

export const logos = [
  'ATLAS', 'NORTH & CO.', 'MERIDIAN', 'OBSIDIAN', 'LUMEN HAUS',
  'VERTEX', 'PARALLEL', 'STUDIO KANE',
]

export const services = {
  eyebrow: 'Services',
  title: 'Studio-grade capabilities, end to end.',
  subtitle: 'One senior team covering the entire lifecycle strategy, design, engineering, AI and growth.',
  items: [
    { n: '01', title: 'Website Design', desc: 'Editorial, cinematic interfaces that command attention.' },
    { n: '02', title: 'Website Development', desc: 'Framer-grade craft, engineered for performance.' },
    { n: '03', title: 'AI Automation', desc: 'Assistants, workflows and lead engines that scale.' },
    { n: '04', title: 'Landing Pages', desc: 'High-conversion pages tuned to a single outcome.' },
    { n: '05', title: 'SEO', desc: 'Search visibility built into the architecture.' },
    { n: '06', title: 'Brand Identity', desc: 'Timeless systems that read premium in every touchpoint.' },
    { n: '07', title: 'UI / UX Design', desc: 'Interfaces obsessed with clarity, rhythm and flow.' },
    { n: '08', title: 'Conversion Optimization', desc: 'Data-driven iteration that compounds revenue.' },
    { n: '09', title: 'Website Redesign', desc: 'Modernize legacy sites without losing equity.' },
    { n: '10', title: 'Maintenance', desc: 'White-glove care, monitoring and continuous polish.' },
  ],
}

export const work = {
  eyebrow: 'Selected work',
  title: 'Work built to move the numbers.',
  subtitle: 'A curated snapshot of recent launches. Every project ships with measurable outcomes.',
  archiveLink: { label: 'View archive', href: '#contact' },
  projects: [
    { tags: ['Luxury Interiors', 'Design Studio'], title: 'Villa Noir', metric: '+412% qualified leads' },
    { tags: ['SaaS Platform', 'B2B SaaS'], title: 'Meridian OS', metric: '3.1x trial signups' },
    { tags: ['Premium Real Estate', 'Developer'], title: 'Atlas Residences', metric: '$48M pipeline in 90 days' },
  ],
  sideStats: [
    { value: '100/100', label: 'Lighthouse score' },
    { value: '4-6w', label: 'Typical build time' },
  ],
}

export const whyUs = {
  eyebrow: 'Why Dribbl.ai',
  title: 'Design meets engineering meets AI.',
  subtitle: 'We combine premium craft with the systems and intelligence needed to turn a website into a growth engine.',
  items: [
    { title: 'Blazing fast', desc: 'Sub-second loads, edge-rendered, perfect Core Web Vitals.' },
    { title: 'SEO by architecture', desc: 'Semantic, structured, crawler-first from day one.' },
    { title: 'Built to convert', desc: 'Psychology, hierarchy and copywriting engineered for action.' },
    { title: 'AI enhanced', desc: 'Assistants, personalization and automations shipped inside.' },
    { title: 'Scalable systems', desc: 'Design systems and CMSs your team will love to grow.' },
    { title: 'Pixel responsive', desc: 'Cinematic on desktop, flawless in the pocket.' },
  ],
}

export const process = {
  eyebrow: 'Process',
  title: 'Eight steps. One relentless standard.',
  subtitle: 'A predictable process for unpredictable results.',
  steps: [
    { n: '01', title: 'Discovery', desc: 'We audit brand, market, competitors and goals.' },
    { n: '02', title: 'Strategy', desc: 'Positioning, messaging and conversion architecture.' },
    { n: '03', title: 'Wireframes', desc: 'Structure, hierarchy and flow before pixels.' },
    { n: '04', title: 'Design', desc: 'Editorial, premium visual language, motion-first.' },
    { n: '05', title: 'Development', desc: 'Performant builds with beautiful code under the hood.' },
    { n: '06', title: 'Testing', desc: 'Accessibility, speed, browsers, edge cases.' },
    { n: '07', title: 'Launch', desc: 'Smooth cutover, monitoring, launch storytelling.' },
    { n: '08', title: 'Growth', desc: "SEO, CRO, iteration a partner, not a vendor." },
  ],
}

export const results = {
  eyebrow: 'Results',
  title: 'Numbers that compound.',
  subtitle: "Design is what we ship. Business impact is what we're measured on.",
  stats: [
    { value: 120, suffix: '+', label: 'Projects delivered' },
    { value: 98, suffix: '%', label: 'Client satisfaction' },
    { value: 4.9, suffix: '★', decimals: 1, label: 'Average rating' },
    { value: 92, suffix: '%', label: 'Custom design' },
  ],
}

export const testimonials = {
  eyebrow: 'Testimonials',
  title: 'Kind words from world-class teams.',
  items: [
    {
      quote: "Dribbl rebuilt our brand and site in six weeks. Enquiries tripled in the first month. It genuinely feels like a $2M architecture studio site and it converts like one.",
      name: 'Elena Vasquez',
      role: 'Founder, Vasquez Interiors',
    },
    {
      quote: 'The most talented team we\'ve hired. Design, engineering and AI one senior group, no handoffs. Our sales pipeline hasn\'t been this healthy in years.',
      name: 'Marcus Bell',
      role: 'CEO, Atlas Residences',
    },
    {
      quote: 'They treated our launch like theirs. Every micro-interaction, every word, every metric. The lift on qualified leads was immediate and measurable.',
      name: 'Priya Anand',
      role: 'Head of Growth, Meridian OS',
    },
  ],
}

export const faq = {
  eyebrow: 'FAQ',
  title: 'Answers before you ask.',
  items: [
    { q: 'How long does a typical project take?', a: 'Landing pages ship in 2-3 weeks. Full brand + site builds run 4-8 weeks depending on scope.' },
    { q: 'Do you work with existing brands?', a: 'Absolutely. We evolve existing identities and can rebuild from the ground up when needed.' },
    { q: 'What does a project cost?', a: 'Engagements typically range from $12k for focused landing pages to $60k+ for full site + brand + AI systems.' },
    { q: 'Do you handle SEO and ongoing growth?', a: 'Yes SEO is baked into every build, and we offer ongoing CRO, content and AI automations post-launch.' },
    { q: 'Can you integrate with our stack?', a: 'Framer, Webflow, Next.js, TanStack, headless CMSs, Supabase, Stripe, HubSpot — we ship where you already live.' },
    { q: 'Do you take on non-English brands?', a: 'We work with clients globally. Multilingual, localized and RTL builds are all in-scope.' },
  ],
}

export const contact = {
  eyebrow: "Let's talk",
  title: "Let's build something incredible.",
  subtitle: "Tell us where you want to be in 12 months. We'll ship the digital engine to get you there.",
  email: 'hello@dribbl.ai',
  phone: '+1 (415) 555 · 0142',
  locations: 'India',
  projectTypes: ['Website', 'Redesign', 'Landing page', 'Branding', 'AI systems'],
  submitLabel: 'Send the brief',
}

export const footer = {
  brand: 'Dribbl.ai',
  tagline: 'A premium creative agency for ambitious brands. Design, engineering and AI under one roof.',
  subscribeLabel: 'Subscribe',
  columns: [
    { title: 'Studio', links: ['About', 'Careers', 'Contact', 'Press'] },
    { title: 'Services', links: ['Design', 'Development', 'AI Systems', 'SEO', 'Redesign'] },
    { title: 'Resources', links: ['Case studies', 'Journal', 'Playbook', 'FAQ'] },
  ],
  copyright: '© 2026 Dribbl.ai — All rights reserved.',
}
