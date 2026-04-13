import { Phone, Mail, MapPin, Shield, Clock, Heart, Star, Droplets, Wrench, Sun, Sparkles, Zap, ArrowRight } from 'lucide-react'

const LOGO = '/logo.png'
const LOGO_WHITE = '/logo-white.png'

/**
 * Design 4: "Retro Florida"
 * Vintage postcard meets modern web — fun personality, bold shapes,
 * tropical colors, retro badge elements, playful layout.
 */
export default function Design4() {
  return (
    <div className="font-[Varela_Round] bg-[#fef9e7] text-[#1a1a1a]">
      {/* Header */}
      <header className="bg-[#1a1a1a] text-white sticky top-[80px] z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={LOGO_WHITE} alt="Tif's Pool Care" className="h-10 w-auto" />
            <span className="font-[Syne] text-lg font-bold">Tif's Pool Care</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-sm text-white/70 hover:text-[#dfe24b] transition-colors">Services</a>
            <a href="#story" className="text-sm text-white/70 hover:text-[#dfe24b] transition-colors">Our Story</a>
            <a href="#areas" className="text-sm text-white/70 hover:text-[#dfe24b] transition-colors">Areas</a>
            <a href="#contact" className="bg-[#dfe24b] text-[#1a1a1a] px-5 py-2 rounded-full font-bold text-sm hover:bg-[#c5c830] transition-colors">
              Book Now
            </a>
          </div>
        </div>
      </header>

      {/* Hero - Retro Postcard Style */}
      <section className="relative py-16 md:py-24 px-4 overflow-hidden">
        {/* Retro starburst background */}
        <div className="absolute inset-0 bg-[#dfe24b]">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'repeating-conic-gradient(#1a1a1a 0% 25%, transparent 0% 50%)',
            backgroundSize: '80px 80px'
          }} />
        </div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          {/* Retro badge */}
          <div className="inline-block mb-8">
            <div className="bg-[#1a1a1a] text-[#dfe24b] px-8 py-3 rounded-full border-4 border-[#dfe24b] shadow-xl transform -rotate-2">
              <span className="font-[Syne] text-xs tracking-[0.3em] uppercase">Southwest Florida's Favorite</span>
            </div>
          </div>

          <img src={LOGO} alt="Tif's Pool Care" className="h-36 md:h-48 w-auto mx-auto mb-6 drop-shadow-xl rounded-2xl" />

          <h1 className="font-[Syne] text-5xl md:text-8xl font-extrabold text-[#1a1a1a] leading-[0.9] mb-4">
            Keep Your Pool<br />
            <span className="inline-block bg-[#1a1a1a] text-[#dfe24b] px-4 py-1 -rotate-1 mt-2">Spiffy</span>
            <br />with Tiffy!
          </h1>

          <p className="text-[#333] text-lg md:text-xl max-w-lg mx-auto mb-8 mt-6">
            Pool care with heart, hustle, and 20 years of know-how.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-[#1a1a1a] text-[#dfe24b] px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg flex items-center gap-2 justify-center">
              Get Your Free Quote <ArrowRight className="w-5 h-5" />
            </a>
            <a href="tel:9412683747" className="bg-white/80 text-[#1a1a1a] px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-colors shadow-lg flex items-center gap-2 justify-center">
              <Phone className="w-5 h-5" /> Call Tiffany
            </a>
          </div>
        </div>

        {/* Wavy bottom */}
        <svg viewBox="0 0 1440 80" className="absolute bottom-0 left-0 w-full" preserveAspectRatio="none">
          <path d="M0,40 Q360,80 720,40 Q1080,0 1440,40 L1440,80 L0,80 Z" fill="#fef9e7" />
        </svg>
      </section>

      {/* Trust Badges - Retro Style */}
      <section className="py-12 px-4 bg-[#fef9e7]">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Shield, label: 'Licensed & Insured', sub: 'Full Coverage' },
            { icon: Star, label: 'CPO Certified', sub: 'Pool Operator' },
            { icon: Clock, label: '20+ Years', sub: 'Experience' },
            { icon: Heart, label: '150+ Clients', sub: 'And Counting' },
          ].map((item, i) => (
            <div key={i} className="text-center group">
              <div className="w-20 h-20 bg-[#1a1a1a] rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-[#dfe24b] transition-colors group-hover:scale-110 transform border-4 border-[#dfe24b]">
                <item.icon className="w-8 h-8 text-[#dfe24b] group-hover:text-[#1a1a1a] transition-colors" />
              </div>
              <p className="font-[Syne] font-bold text-sm">{item.label}</p>
              <p className="text-[#999] text-xs">{item.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services - Card Grid */}
      <section id="services" className="py-20 px-4 bg-[#1a1a1a] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#dfe24b] text-[#1a1a1a] px-4 py-1 rounded-full font-[Syne] font-bold text-xs tracking-widest uppercase mb-4">
              What We Do
            </div>
            <h2 className="font-[Syne] text-4xl md:text-5xl font-extrabold">Our Services</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Droplets, title: 'Weekly Cleaning', desc: 'Chemical balancing, skimming, brushing, vacuuming, and filter care — every single week.', color: '#4FC3D9' },
              { icon: Sun, title: 'Seasonal Care', desc: 'Florida-specific programs for year-round pool health. We handle heat, rain, and well water.', color: '#f59e0b' },
              { icon: Wrench, title: 'Repairs', desc: 'Pumps, filters, leaks — we diagnose and fix common issues right on the spot.', color: '#ef4444' },
              { icon: Sparkles, title: 'Pressure Wash', desc: 'Pool deck cleaning for our maintenance clients. The complete pool area glow-up.', color: '#8b5cf6' },
              { icon: Droplets, title: 'Resurfacing', desc: 'Complete pool resurfacing to restore your pool\'s finish and bring it back to life.', color: '#4FC3D9' },
              { icon: Zap, title: 'Emergency', desc: 'Same-day emergency service. When your pool can\'t wait, neither can we.', color: '#dfe24b' },
            ].map((svc, i) => (
              <div key={i} className="bg-[#222] rounded-2xl p-6 border-b-4 hover:-translate-y-2 transition-all group cursor-pointer"
                style={{ borderColor: svc.color }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: svc.color + '20' }}>
                  <svc.icon className="w-6 h-6" style={{ color: svc.color }} />
                </div>
                <h3 className="font-[Syne] text-xl font-bold mb-2">{svc.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Story */}
      <section id="story" className="py-20 px-4 bg-[#dfe24b]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#1a1a1a] rounded-3xl p-8 md:p-12 text-white transform -rotate-1 hover:rotate-0 transition-transform shadow-2xl">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-40 h-40 bg-white rounded-2xl flex items-center justify-center shrink-0 rotate-3">
                <img src={LOGO} alt="Tif" className="w-32 h-auto" />
              </div>
              <div>
                <div className="inline-block bg-[#dfe24b] text-[#1a1a1a] px-3 py-1 rounded-full font-[Syne] font-bold text-xs tracking-widest uppercase mb-4">
                  The Owner
                </div>
                <h2 className="font-[Syne] text-3xl font-extrabold mb-4">Hey, I'm Tiffany!</h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  I've been in the pool game for over 20 years. Started because I loved being outside,
                  staying busy, and meeting new people. What kept me going? The relationships I built
                  along the way.
                </p>
                <p className="text-white/70 leading-relaxed mb-4">
                  I started Tif's Pool Care because I believe your pool person should feel like a
                  friend — someone you can trust, who shows up and actually cares. That's what you
                  get with us.
                </p>
                <p className="font-[Syne] text-[#dfe24b] font-bold">
                  — Tiffany, CPO Certified Pool Operator
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fun fact strip */}
      <section className="py-8 px-4 bg-[#fef9e7] border-y-4 border-[#dfe24b]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-[Syne] text-xl md:text-2xl font-bold text-[#1a1a1a]">
            Fun fact: My nieces and nephews call me <span className="text-[#dfe24b] bg-[#1a1a1a] px-2 py-0.5 rounded">Aunt Tif Tif</span> — and that's how the name stuck!
          </p>
        </div>
      </section>

      {/* Our Work */}
      <section className="py-20 px-4 bg-[#fef9e7]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#dfe24b] text-[#1a1a1a] px-4 py-1 rounded-full font-[Syne] font-bold text-xs tracking-widest uppercase mb-4">
              Real Results
            </div>
            <h2 className="font-[Syne] text-4xl md:text-5xl font-extrabold">Our Work</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['/pool-1.jpg', '/pool-2.jpg', '/pool-3.jpg', '/pool-4.jpg', '/pool-5.jpg', '/pool-6.jpg'].map((src, i) => (
              <div key={i} className="aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer border-4 border-[#1a1a1a] hover:border-[#dfe24b] transition-colors">
                <img src={src} alt={`Pool serviced by Tif's Pool Care`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 px-4 bg-[#1a1a1a] text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#dfe24b] text-[#1a1a1a] px-4 py-1 rounded-full font-[Syne] font-bold text-xs tracking-widest uppercase mb-4">
              Reviews
            </div>
            <h2 className="font-[Syne] text-4xl md:text-5xl font-extrabold">Happy Clients</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-[#222] rounded-2xl p-6 border-b-4 border-[#dfe24b]">
                <div className="flex gap-1 mb-3">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-[#dfe24b] text-[#dfe24b]" />)}
                </div>
                <p className="text-white/60 text-sm leading-relaxed mb-4 italic">
                  "This will be replaced with an authentic review from a real customer."
                </p>
                <p className="font-[Syne] font-bold text-sm">— Customer Name</p>
                <p className="text-white/30 text-xs">Google Review</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section id="areas" className="py-20 px-4 bg-[#fef9e7]">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block bg-[#dfe24b] text-[#1a1a1a] px-4 py-1 rounded-full font-[Syne] font-bold text-xs tracking-widest uppercase mb-4">
            Where We Are
          </div>
          <h2 className="font-[Syne] text-4xl md:text-5xl font-extrabold mb-12">Our Turf</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Arcadia', 'Wachula', 'Punta Gorda', 'Port Charlotte', 'Boca Grande', 'Rotunda', 'Englewood'].map(city => (
              <div key={city} className="bg-[#1a1a1a] text-[#dfe24b] px-6 py-3 rounded-full font-bold text-sm hover:scale-105 transition-transform cursor-default border-2 border-[#dfe24b] flex items-center gap-2">
                <MapPin className="w-4 h-4" /> {city}
              </div>
            ))}
          </div>
          <p className="mt-6 text-[#999] text-sm">Coming soon: Sarasota & Fort Myers!</p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 bg-[#1a1a1a] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-[Syne] text-4xl md:text-5xl font-extrabold mb-4">
            Ready to Keep It <span className="text-[#dfe24b]">Spiffy</span>?
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
            Drop us a line or give Tiffany a call. We promise to get back to you the same day.
          </p>
          <div className="bg-[#222] rounded-3xl p-8 max-w-lg mx-auto border-2 border-[#dfe24b]/20">
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full px-4 py-3 bg-[#1a1a1a] border-2 border-[#333] rounded-xl text-white placeholder-white/30 focus:border-[#dfe24b] outline-none transition" />
              <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 bg-[#1a1a1a] border-2 border-[#333] rounded-xl text-white placeholder-white/30 focus:border-[#dfe24b] outline-none transition" />
              <input type="email" placeholder="Email" className="w-full px-4 py-3 bg-[#1a1a1a] border-2 border-[#333] rounded-xl text-white placeholder-white/30 focus:border-[#dfe24b] outline-none transition" />
              <select className="w-full px-4 py-3 bg-[#1a1a1a] border-2 border-[#333] rounded-xl text-white/30 focus:border-[#dfe24b] outline-none transition">
                <option>What do you need?</option>
                <option>Weekly Maintenance</option>
                <option>Seasonal Care</option>
                <option>Repair</option>
                <option>Emergency</option>
              </select>
              <button type="submit" className="w-full bg-[#dfe24b] text-[#1a1a1a] py-4 rounded-xl font-bold text-lg hover:bg-[#c5c830] transition-colors">
                Send It!
              </button>
            </form>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-6 justify-center text-white/50">
            <a href="tel:9412683747" className="flex items-center gap-2 hover:text-[#dfe24b] transition-colors"><Phone className="w-5 h-5" /> (941) 268-3747</a>
            <a href="mailto:tifspoolcare@gmail.com" className="flex items-center gap-2 hover:text-[#dfe24b] transition-colors"><Mail className="w-5 h-5" /> tifspoolcare@gmail.com</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#dfe24b] py-6 px-4 text-center">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-2">
          <img src={LOGO} alt="Tif's Pool Care" className="h-10" />
          <p className="font-[Syne] font-bold text-[#1a1a1a] text-sm">
            &copy; {new Date().getFullYear()} Tif's Pool Care — Licensed, Bonded & Insured
          </p>
          <p className="text-[#1a1a1a]/60 text-xs">CPO Certified | Arcadia, FL</p>
        </div>
      </footer>
    </div>
  )
}
