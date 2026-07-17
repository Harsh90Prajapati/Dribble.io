import { useState } from 'react'
import { contact } from '../data/content'

const initialForm = { name: '', email: '', company: '', projectType: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Hook this up to your backend / form service (e.g. Formspree, Resend, a serverless function).
    console.log('Brief submitted:', form)
    setSubmitted(true)
    setForm(initialForm)
  }

  return (
    <section id="contact" className="section">
      <div className="wrap grid lg:grid-cols-2 gap-16">
        <div>
          <span className="eyebrow">{contact.eyebrow}</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mt-5 text-ink leading-tight">
            {contact.title}
          </h2>
          <p className="text-ink-muted mt-5 leading-relaxed max-w-md">{contact.subtitle}</p>

          <div className="mt-10 space-y-3 text-sm">
            <div className="text-ink">{contact.email}</div>
            <div className="text-ink-muted">{contact.phone}</div>
            <div className="text-ink-muted">{contact.locations}</div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="card p-8 space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Name" name="name" value={form.name} onChange={handleChange} required />
            <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} required />
          </div>
          <Field label="Company" name="company" value={form.company} onChange={handleChange} />

          <div>
            <label className="text-xs uppercase tracking-wide text-ink-faint" htmlFor="projectType">
              Project type
            </label>
            <select
              id="projectType"
              name="projectType"
              value={form.projectType}
              onChange={handleChange}
              className="w-full mt-2 bg-base border border-line rounded-lg px-4 py-3 text-ink focus:border-ember/60 transition-colors"
            >
              <option value="">Select an option</option>
              {contact.projectTypes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-xs uppercase tracking-wide text-ink-faint" htmlFor="message">
              Tell us about your project
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="w-full mt-2 bg-base border border-line rounded-lg px-4 py-3 text-ink focus:border-ember/60 transition-colors resize-none"
            />
          </div>

          <button type="submit" className="btn-primary w-full">
            {contact.submitLabel}
          </button>

          {submitted && (
            <p className="text-sm text-ember-light text-center">
              Thanks — we'll be in touch within one business day.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

function Field({ label, name, type = 'text', value, onChange, required }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wide text-ink-faint" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full mt-2 bg-base border border-line rounded-lg px-4 py-3 text-ink focus:border-ember/60 transition-colors"
      />
    </div>
  )
}
