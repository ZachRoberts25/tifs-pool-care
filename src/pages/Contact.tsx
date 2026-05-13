import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Contact() {
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
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-bold mb-1">Your Name *</label>
                <input type="text" placeholder="John Smith" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#dfe24b] focus:ring-2 focus:ring-[#dfe24b]/30 outline-none transition" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">Phone Number *</label>
                <input type="tel" placeholder="(941) 555-1234" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#dfe24b] focus:ring-2 focus:ring-[#dfe24b]/30 outline-none transition" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#dfe24b] focus:ring-2 focus:ring-[#dfe24b]/30 outline-none transition" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">Service Needed</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#dfe24b] focus:ring-2 focus:ring-[#dfe24b]/30 outline-none transition text-gray-500">
                  <option>Select a service...</option>
                  <option>Weekly Maintenance</option>
                  <option>Seasonal Maintenance</option>
                  <option>Pool Repair</option>
                  <option>Pressure Washing</option>
                  <option>Pool Resurfacing</option>
                  <option>Emergency Service</option>
                  <option>Notary Services</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">Your City</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#dfe24b] focus:ring-2 focus:ring-[#dfe24b]/30 outline-none transition text-gray-500">
                  <option>Select your area...</option>
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
                <textarea placeholder="Pool size, current condition, any issues..." rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#dfe24b] focus:ring-2 focus:ring-[#dfe24b]/30 outline-none transition resize-none" />
              </div>
              <button type="submit" className="w-full bg-[#1a1a1a] text-[#dfe24b] py-4 rounded-xl font-bold text-lg hover:bg-[#333] transition-colors">
                Send Message
              </button>
            </form>
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
