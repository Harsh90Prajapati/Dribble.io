import { useState } from 'react'
import { contact } from '../data/content'

/*
  ── SENDING SUBMISSIONS TO YOUR EMAIL ─────────────────────────────────────
  This uses FormSubmit (https://formsubmit.co) — a free service that emails
  form data to an inbox you choose, with zero backend and no API key.

  Setup (one-time):
  1. Put the email address you want submissions sent to below.
  2. Deploy/run the site and submit the form once yourself.
  3. FormSubmit sends a one-time "activate your form" email to that address —
     click the confirm link in it. After that, every future submission is
     delivered straight to that inbox automatically.

  Want richer emails (custom templates, multiple recipients, attachments)?
  Swap this fetch call for EmailJS or a small serverless function calling
  Resend/SendGrid instead — happy to wire that up if you'd rather go that route.
*/
const TO_EMAIL = 'dribbl.tech@gmail.com' // ← replace with the inbox you want briefs sent to

const initialForm = { name: '', email: '', company: '', projectType: '', message: '' }

function Field({ label, name, type = 'text', value, onChange, placeholder, required }) {
  return (
    <div>
      <label className="text-[11px] font-mono uppercase tracking-[0.15em] text-white/40" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full mt-2 rounded-full border border-white/15 bg-white/[0.02] px-5 py-3.5 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-[#ff7a3d]/60"
      />
    </div>
  )
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const toggleProjectType = (t) => {
    setForm((prev) => ({ ...prev, projectType: prev.projectType === t ? '' : t }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${TO_EMAIL}`, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          _subject: `New project brief from ${form.name || 'website visitor'}`,
          Name: form.name,
          Email: form.email,
          Company: form.company,
          'Project type': form.projectType,
          Message: form.message,
        }),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      setForm(initialForm)
    } catch (err) {
      console.error('Brief submission failed:', err)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-[#0a0806] py-24 md:py-32">
      {/* warm background glow */}
      <div className="pointer-events-none absolute -top-32 -left-20 h-[480px] w-[480px] rounded-full bg-[#c9600f]/20 blur-[150px]" />
      <div className="pointer-events-none absolute top-0 right-0 h-[520px] w-[520px] rounded-full bg-[#8a2a12]/20 blur-[160px]" />
      {/* faint dot grid, matching the texture in the reference */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          maskImage: 'radial-gradient(circle at 15% 60%, black, transparent 60%)',
          WebkitMaskImage: 'radial-gradient(circle at 15% 60%, black, transparent 60%)',
        }}
      />

      <div className="wrap relative mx-auto grid max-w-6xl gap-14 px-6 sm:px-10 lg:grid-cols-2 lg:gap-16 lg:px-12">
        {/* left column */}
        <div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff7a3d]" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/40">
              {contact.eyebrow}
            </span>
          </div>

          <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.05] text-white">
            <span className="block">Let&rsquo;s build</span>
            <span className="block">something</span>
            <span className="block">
              <span className="bg-gradient-to-r from-[#ffb37a] to-[#ff5a2b] bg-clip-text text-transparent">
                incredible
              </span>
              <span className="text-[#ff7a3d]">.</span>
            </span>
          </h2>

          <p className="mt-6 max-w-md leading-relaxed text-white/45">{contact.subtitle}</p>

          <div className="mt-10 space-y-2 text-xs font-mono uppercase tracking-[0.1em]">
            <div className="text-white/70">{contact.email}</div>
            <div className="text-white/40">{contact.phone}</div>
            <div className="text-white/40">{contact.locations}</div>
          </div>
        </div>

        {/* right column — form card */}
        <form
          onSubmit={handleSubmit}
          className="relative rounded-[28px] border border-white/10 bg-gradient-to-bl from-[#3a1d0a]/60 via-[#150b05] to-[#0a0806] p-6 sm:p-9 space-y-6"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field
              label="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your full name"
              required
            />
            <Field
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@company.com"
              required
            />
          </div>

          <Field
            label="Company"
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Where do you work?"
          />

          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-white/40">
              Project type
            </span>
            <div className="mt-3 flex flex-wrap gap-2">
              {contact.projectTypes.map((t) => {
                const active = form.projectType === t
                return (
                  <button
                    key={t}
                    type="button"
                    onClick={() => toggleProjectType(t)}
                    aria-pressed={active}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                      active
                        ? 'border-[#ff7a3d] bg-[#ff7a3d]/15 text-[#ff9a5c]'
                        : 'border-white/15 bg-white/[0.02] text-white/70 hover:border-white/30'
                    }`}
                  >
                    {t}
                  </button>
                )
              })}
            </div>
          </div>

          <div>
            <label className="text-[11px] font-mono uppercase tracking-[0.15em] text-white/40" htmlFor="message">
              Tell us about your project
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              placeholder="Goals, timeline, budget range..."
              className="w-full mt-2 rounded-2xl border border-white/15 bg-white/[0.02] px-5 py-4 text-sm text-white placeholder-white/30 outline-none transition-colors resize-none focus:border-[#ff7a3d]/60"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full rounded-full bg-gradient-to-r from-[#ff8a3d] to-[#ff5a2b] py-4 text-sm font-bold text-[#1a0e08] transition-transform hover:scale-[1.01] disabled:opacity-60 disabled:hover:scale-100 flex items-center justify-center gap-2"
          >
            {status === 'sending' ? 'Sending…' : contact.submitLabel}
            {status !== 'sending' && <span aria-hidden="true">&rarr;</span>}
          </button>

          {status === 'success' && (
            <p className="text-sm text-[#ff9a5c] text-center">
              Thanks — we&rsquo;ll be in touch within one business day.
            </p>
          )}
          {status === 'error' && (
            <p className="text-sm text-red-400 text-center">
              Something went wrong sending that — please try again or email us directly.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}