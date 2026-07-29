import { useState, type FormEvent } from 'react'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'

interface FormData {
  name: string
  phone: string
  email: string
  service: string
  city: string
  message: string
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({ name: '', phone: '', email: '', service: '', city: '', message: '' })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email || undefined,
          phone: form.phone,
          address: form.city || undefined,
          service: form.service || undefined,
          message: form.message || undefined,
          source: window.location.hostname,
          sourcePage: window.location.pathname
        })
      })

      if (!res.ok) {
        const data = await res.json().catch(() => null)
        throw new Error(data?.error || 'Something went wrong. Please try again.')
      }

      setSubmitted(true)
      setForm({ name: '', phone: '', email: '', service: '', city: '', message: '' })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const update = <K extends keyof FormData>(field: K) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [field]: e.target.value }))

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#dfe24b] to-[#f0f28a] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-[Fredoka] text-4xl md:text-5xl font-bold mb-4">Contact Tif's Pool Care</h1>
          <p className="text-lg text-[#333] max-w-2xl mx-auto">
            Ready for pool service you can actually rely on? Get in touch — we respond the same day.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-20 px-4 bg-[#fffef5]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="font-[Fredoka] text-2xl font-bold mb-6">Send Us a Message</h2>
            {submitted ? (
              <div className="p-8 bg-white rounded-2xl border border-[#dfe24b]/40 text-center">
                <div className="text-5xl mb-3">🎉</div>
                <h3 className="font-[Fredoka] text-2xl font-bold mb-2">Thanks!</h3>
                <p className="text-[#555] mb-4">Tiffany will personally reach out to you the same day.</p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-[#4FC3D9] font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                    {error}
                  </div>
                )}
                <div>
                  <label className="block text-sm font-bold mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    minLength={2}
                    maxLength={200}
                    value={form.name}
                    onChange={update('name')}
                    autoComplete="name"
                    placeholder="John Smith"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#dfe24b] focus:ring-2 focus:ring-[#dfe24b]/30 outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    minLength={10}
                    maxLength={200}
                    value={form.phone}
                    onChange={update('phone')}
                    autoComplete="tel"
                    placeholder="(941) 555-1234"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#dfe24b] focus:ring-2 focus:ring-[#dfe24b]/30 outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">Email Address</label>
                  <input
                    type="email"
                    maxLength={200}
                    value={form.email}
                    onChange={update('email')}
                    autoComplete="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#dfe24b] focus:ring-2 focus:ring-[#dfe24b]/30 outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">Service Needed</label>
                  <select
                    value={form.service}
                    onChange={update('service')}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#dfe24b] focus:ring-2 focus:ring-[#dfe24b]/30 outline-none transition"
                  >
                    <option value="">Select a service...</option>
                    <option>Weekly Maintenance</option>
                    <option>Seasonal Maintenance</option>
                    <option>Pool Repair</option>
                    <option>Pressure Washing</option>
                    <option>Pool Resurfacing</option>
                    <option>Emergency Service</option>
                    <option>Commercial Pool Service</option>
                    <option>Notary Services</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">Your City</label>
                  <select
                    value={form.city}
                    onChange={update('city')}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#dfe24b] focus:ring-2 focus:ring-[#dfe24b]/30 outline-none transition"
                  >
                    <option value="">Select your area...</option>
                    <option>Arcadia</option>
                    <option>Wauchula</option>
                    <option>Punta Gorda</option>
                    <option>Port Charlotte</option>
                    <option>Boca Grande</option>
                    <option>Rotunda</option>
                    <option>Englewood</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">Tell Us About Your Pool</label>
                  <textarea
                    rows={4}
                    maxLength={1000}
                    value={form.message}
                    onChange={update('message')}
                    placeholder="Pool size, current condition, any issues..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#dfe24b] focus:ring-2 focus:ring-[#dfe24b]/30 outline-none transition resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[#1a1a1a] text-[#dfe24b] py-4 rounded-xl font-bold text-lg hover:bg-[#333] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="font-[Fredoka] text-2xl font-bold mb-6">Get in Touch Directly</h2>
            <p className="text-[#555] leading-relaxed mb-8">
              Prefer to talk? Give Tiffany a call or send an email. We respond to all inquiries the same day — that's a promise.
            </p>
            <div className="space-y-6">
              <a href="tel:9412683747" className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-[#dfe24b] rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#1a1a1a]" />
                </div>
                <div>
                  <p className="font-bold group-hover:text-[#4FC3D9] transition-colors">Call or Text</p>
                  <p className="text-[#555]">(941) 268-3747</p>
                </div>
              </a>
              <a href="mailto:tifspoolcare@gmail.com" className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-[#dfe24b] rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#1a1a1a]" />
                </div>
                <div>
                  <p className="font-bold group-hover:text-[#4FC3D9] transition-colors">Email</p>
                  <p className="text-[#555]">tifspoolcare@gmail.com</p>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#dfe24b] rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#1a1a1a]" />
                </div>
                <div>
                  <p className="font-bold">Based in Arcadia, FL</p>
                  <p className="text-[#555]">Serving all of Southwest Florida</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#dfe24b] rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[#1a1a1a]" />
                </div>
                <div>
                  <p className="font-bold">Response Time</p>
                  <p className="text-[#555]">Same-day response, every time</p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-6 bg-[#f0fafe] rounded-2xl border-l-4 border-[#4FC3D9]">
              <h3 className="font-[Fredoka] text-lg font-bold mb-2">Service Areas</h3>
              <p className="text-[#555] text-sm leading-relaxed">
                We serve <Link to="/areas/arcadia" className="text-[#4FC3D9] font-bold hover:underline">Arcadia</Link>,{' '}
                <Link to="/areas/wauchula" className="text-[#4FC3D9] font-bold hover:underline">Wauchula</Link>,{' '}
                <Link to="/areas/punta-gorda" className="text-[#4FC3D9] font-bold hover:underline">Punta Gorda</Link>,{' '}
                <Link to="/areas/port-charlotte" className="text-[#4FC3D9] font-bold hover:underline">Port Charlotte</Link>,{' '}
                <Link to="/areas/boca-grande" className="text-[#4FC3D9] font-bold hover:underline">Boca Grande</Link>,{' '}
                <Link to="/areas/rotunda" className="text-[#4FC3D9] font-bold hover:underline">Rotunda</Link>, and{' '}
                <Link to="/areas/englewood" className="text-[#4FC3D9] font-bold hover:underline">Englewood</Link>.
                Expanding to Sarasota & Fort Myers!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
