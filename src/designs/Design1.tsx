import { Phone, Mail, MapPin, Shield, Clock, Heart, Star, ChevronRight, Droplets, Wrench, Sun, Sparkles } from 'lucide-react'

const LOGO = '/logo.png'
const LOGO_WHITE = '/logo-white.png'

/**
 * Design 1: "Sunshine & Soul"
 * Warm, bright, inviting — like stepping into a Florida backyard.
 * Handwritten accents, rounded shapes, wave dividers, cream backgrounds.
 */
export default function Design1() {
  return (
    <div className="font-[Nunito] bg-[#fffef5] text-[#1a1a1a]">
      {/* Header */}
      <header className="bg-[#dfe24b] sticky top-0 z-50 shadow-sm">
        <div className="px-6 py-2 flex items-center justify-between">
          <a href="#" className="font-[Fredoka] text-lg font-bold text-[#1a1a1a]">Tif's Pool Care</a>
          <div className="hidden md:flex items-center gap-1">
            {['Services', 'About', 'Areas', 'Contact'].map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-[15px] font-bold text-[#1a1a1a] px-4 py-2 rounded-full hover:bg-[#1a1a1a]/10 hover:-translate-y-[1px] transition-all">
                {link}
              </a>
            ))}
            <a href="tel:9412683747" className="bg-[#1a1a1a] text-[#dfe24b] ml-3 px-5 py-2.5 rounded-full font-bold text-[15px] hover:bg-[#333] hover:scale-105 transition-all flex items-center gap-2">
              <Phone className="w-4 h-4" /> (941) 268-3747
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="bg-gradient-to-b from-[#dfe24b] via-[#f0f28a] to-[#fffef5] min-h-[calc(100vh-52px)] flex flex-col justify-center px-4 py-10">
          <div className="max-w-4xl mx-auto text-center">
            <img src={LOGO} alt="Tif's Pool Care" className="h-48 md:h-64 w-auto mx-auto mb-4 animate-float drop-shadow-lg" />
            <h2 className="font-[Caveat] text-5xl md:text-7xl font-bold text-[#1a1a1a] mb-3">
              Keep Your Pool Spiffy<br />with Tiffy!
            </h2>
            <p className="font-[Nunito] text-lg md:text-xl text-[#333] max-w-2xl mx-auto mb-6">
              Reliable, caring pool service for Southwest Florida families.
              We don't just clean pools — we build relationships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-[#1a1a1a] text-[#dfe24b] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#333] transition-all hover:-translate-y-0.5 shadow-lg">
                Get a Free Quote
              </a>
              <a href="tel:9412683747" className="bg-white text-[#1a1a1a] px-8 py-4 rounded-full font-bold text-lg border-2 border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-all hover:-translate-y-0.5">
                Call Tiffany Today
              </a>
            </div>

            {/* Trust Strip */}
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { label: 'Licensed & Insured', emoji: '🛡️' },
            { label: 'CPO Certified', emoji: '🏅' },
            { label: '20+ Years Experience', emoji: '⏳' },
            { label: 'Woman Owned', emoji: '💪' },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <span className="text-4xl">{item.emoji}</span>
              <span className="font-extrabold text-lg text-[#1a1a1a]">{item.label}</span>
            </div>
          ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="font-[Fredoka] text-4xl font-bold text-center mb-2">Our Services</h3>
          <p className="font-[Caveat] text-2xl text-[#4FC3D9] text-center mb-12">Everything your pool needs</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { emoji: '🏊', title: 'Weekly Maintenance', desc: 'Regular cleaning, chemical balancing, skimming, brushing, and filter care to keep your pool sparkling all year round.' },
              { emoji: '☀️', title: 'Seasonal Care', desc: 'Seasonal pool maintenance programs tailored to Florida\'s year-round swim season and unique water challenges.' },
              { emoji: '🔧', title: 'Minor Repairs', desc: 'Pump issues, filter problems, leaks — we diagnose and fix common pool equipment issues on the spot.' },
              { emoji: '💦', title: 'Pressure Washing', desc: 'Pool deck pressure washing for our maintenance customers. Keep your whole pool area looking fresh.' },
              { emoji: '✨', title: 'Resurfacing', desc: 'Complete pool resurfacing to restore your pool\'s finish and bring it back to life.' },
              { emoji: '🚨', title: 'Emergency Service', desc: 'Pool emergency? We offer same-day service when you need it most. Just call Tiffany.' },
            ].map((svc, i) => (
              <div key={i} className="bg-[#f0fafe] rounded-2xl p-6 border-l-4 border-[#4FC3D9] hover:shadow-lg hover:-translate-y-1 transition-all group cursor-pointer">
                <span className="text-3xl mb-4 block group-hover:scale-110 transition-transform">{svc.emoji}</span>
                <h4 className="font-[Fredoka] text-xl font-bold mb-2">{svc.title}</h4>
                <p className="text-[#555] text-sm leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Meet Tiffany */}
      <section id="about" className="py-20 px-4 bg-[#dfe24b]/10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">
            <div>
                <h3 className="font-[Caveat] text-3xl text-[#4FC3D9] mb-1">Meet Tiffany</h3>
                <h4 className="font-[Fredoka] text-3xl font-bold mb-4">The Heart Behind the Business</h4>
                <p className="text-[#555] leading-relaxed mb-4">
                  I got into the pool business over 20 years ago and fell in love with it — the independence,
                  the people, and the fact that every day brings something new. After years of working for other companies,
                  I finally took the leap to start Tif's Pool Care.
                </p>
                <p className="text-[#555] leading-relaxed mb-4">
                  What makes us different? We actually care. I want to know who you are, not just what chemicals
                  your pool needs. My goal is to bring back the personal touch that big companies have forgotten —
                  because your pool person should feel like a friend, not a stranger.
                </p>
                <p className="font-[Caveat] text-2xl text-[#1a1a1a]">
                  — Tiffany, Owner & CPO Certified
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-[#1a1a1a] text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="font-[Fredoka] text-4xl font-bold mb-2">Why Customers Love Tiffany</h3>
          <p className="font-[Caveat] text-2xl text-[#dfe24b] mb-12">It's more than just a clean pool</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'We Actually Show Up', desc: 'Reliability isn\'t just a buzzword for us. We show up on time, every time, and we don\'t rush through your pool.' },
              { title: 'Real Relationships', desc: 'We get to know you and your pool. Many of our clients become friends. That\'s the way it should be.' },
              { title: 'Straight Talk', desc: 'No corporate runaround. You call Tiffany, you talk to Tiffany. It\'s that simple.' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-[#dfe24b] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-[#1a1a1a]" />
                </div>
                <h4 className="font-[Fredoka] text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Work */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="font-[Fredoka] text-4xl font-bold text-center mb-2">Our Work</h3>
          <p className="font-[Caveat] text-2xl text-[#4FC3D9] text-center mb-12">Real pools, real results</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['/pool-1.jpg', '/pool-2.jpg', '/pool-3.jpg', '/pool-4.jpg', '/pool-5.jpg', '/pool-6.jpg'].map((src, i) => (
              <div key={i} className="aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer">
                <img src={src} alt={`Pool serviced by Tif's Pool Care`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 px-4 bg-[#fffef5]">
        <div className="max-w-5xl mx-auto">
          <h3 className="font-[Fredoka] text-4xl font-bold text-center mb-2">What Our Clients Say</h3>
          <p className="font-[Caveat] text-2xl text-[#4FC3D9] text-center mb-12">Real reviews from real people</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-[#dfe24b]/20">
                <div className="flex gap-1 mb-3">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-[#dfe24b] text-[#dfe24b]" />)}
                </div>
                <p className="text-[#555] text-sm leading-relaxed mb-4 italic">
                  "This will be replaced with an authentic review from a real customer."
                </p>
                <p className="font-bold text-sm text-[#1a1a1a]">— Customer Name</p>
                <p className="text-xs text-[#999]">Google Review</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section id="areas" className="py-20 px-4 bg-[#fffef5]">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="font-[Fredoka] text-4xl font-bold mb-2">Service Areas</h3>
          <p className="font-[Caveat] text-2xl text-[#4FC3D9] mb-12">Proudly serving Southwest Florida</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Arcadia', 'Wachula', 'Punta Gorda', 'Port Charlotte', 'Boca Grande', 'Rotunda', 'Englewood'].map(city => (
              <span key={city} className="bg-[#dfe24b]/20 text-[#1a1a1a] px-6 py-3 rounded-full font-bold text-sm border border-[#dfe24b]/30 hover:bg-[#dfe24b] transition-colors cursor-default flex items-center gap-2">
                <MapPin className="w-4 h-4" /> {city}, FL
              </span>
            ))}
          </div>
          <p className="mt-6 text-[#777] text-sm">Expanding to Sarasota & Fort Myers!</p>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="py-20 px-4 bg-[#dfe24b]">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="font-[Fredoka] text-4xl font-bold text-[#1a1a1a] mb-4">Ready for a Pool Person You Can Trust?</h3>
          <p className="text-[#333] text-lg mb-8 max-w-2xl mx-auto">
            Give Tiffany a call or fill out the form below. We'll get back to you the same day — that's a promise.
          </p>
          <div className="bg-white rounded-3xl p-8 shadow-lg max-w-lg mx-auto">
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#dfe24b] focus:ring-2 focus:ring-[#dfe24b]/30 outline-none transition" />
              <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#dfe24b] focus:ring-2 focus:ring-[#dfe24b]/30 outline-none transition" />
              <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#dfe24b] focus:ring-2 focus:ring-[#dfe24b]/30 outline-none transition" />
              <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#dfe24b] focus:ring-2 focus:ring-[#dfe24b]/30 outline-none transition text-gray-500">
                <option>Service Needed</option>
                <option>Weekly Maintenance</option>
                <option>Seasonal Maintenance</option>
                <option>Repair</option>
                <option>Emergency Service</option>
                <option>Other</option>
              </select>
              <textarea placeholder="Tell us about your pool..." rows={3} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#dfe24b] focus:ring-2 focus:ring-[#dfe24b]/30 outline-none transition resize-none" />
              <button type="submit" className="w-full bg-[#1a1a1a] text-[#dfe24b] py-4 rounded-xl font-bold text-lg hover:bg-[#333] transition-colors">
                Send Message <ChevronRight className="inline w-5 h-5" />
              </button>
            </form>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-6 justify-center text-[#333]">
            <a href="tel:9412683747" className="flex items-center gap-2 font-bold hover:text-[#1a1a1a]"><Phone className="w-5 h-5" /> (941) 268-3747</a>
            <a href="mailto:tifspoolcare@gmail.com" className="flex items-center gap-2 font-bold hover:text-[#1a1a1a]"><Mail className="w-5 h-5" /> tifspoolcare@gmail.com</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white/60 py-8 px-4 text-center text-sm">
        <img src={LOGO_WHITE} alt="Tif's Pool Care" className="h-10 mx-auto mb-3 opacity-80" />
        <p>&copy; {new Date().getFullYear()} Tif's Pool Care. All rights reserved.</p>
        <p className="mt-1">Licensed, Bonded & Insured | CPO Certified | Arcadia, FL</p>
      </footer>
    </div>
  )
}
