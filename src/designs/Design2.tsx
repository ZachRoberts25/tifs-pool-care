import { Phone, Mail, MapPin, Shield, Clock, Heart, Star, ChevronRight, Droplets, Wrench, Sun, Sparkles, ArrowRight, Zap } from 'lucide-react'

const LOGO = '/logo.png'
const LOGO_WHITE = '/logo-white.png'

/**
 * Design 2: "Bold & Confident"
 * High-contrast black & yellow — punchy like a well-designed brand.
 * Geometric type, bento grids, thick borders, monospace accents.
 */
export default function Design2() {
  return (
    <div className="font-[Outfit] bg-[#111] text-white">
      {/* Header */}
      <header className="bg-[#111]/90 backdrop-blur-md border-b border-[#dfe24b]/20 sticky top-[80px] z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={LOGO_WHITE} alt="Tif's Pool Care" className="h-10 w-auto" />
            <span className="font-[Space_Grotesk] text-xl font-bold tracking-tight">TIF'S POOL CARE</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium text-white/70 hover:text-[#dfe24b] transition-colors tracking-wide uppercase">Services</a>
            <a href="#about" className="text-sm font-medium text-white/70 hover:text-[#dfe24b] transition-colors tracking-wide uppercase">About</a>
            <a href="#areas" className="text-sm font-medium text-white/70 hover:text-[#dfe24b] transition-colors tracking-wide uppercase">Areas</a>
            <a href="#contact" className="bg-[#dfe24b] text-[#111] px-6 py-2.5 font-bold text-sm hover:bg-[#c5c830] transition-colors tracking-wide uppercase">
              Get a Quote
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="min-h-[90vh] flex items-center px-6 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full border-2 border-[#dfe24b]" />
          <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full border border-[#dfe24b]" />
        </div>
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="font-[JetBrains_Mono] text-[#4FC3D9] text-xs tracking-[0.3em] uppercase mb-4">
              Southwest Florida's Trusted Pool Service
            </div>
            <h1 className="font-[Space_Grotesk] text-5xl md:text-7xl font-bold leading-[0.95] mb-6">
              KEEP YOUR<br />
              POOL <span className="text-[#dfe24b]">SPIFFY</span><br />
              WITH TIFFY
            </h1>
            <p className="text-white/60 text-lg max-w-md mb-8 leading-relaxed">
              20+ years of experience. 150+ happy clients. One promise — your pool, treated like our own.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="bg-[#dfe24b] text-[#111] px-8 py-4 font-bold text-lg hover:bg-[#c5c830] transition-all hover:-translate-y-0.5 flex items-center gap-2">
                Book Now <ArrowRight className="w-5 h-5" />
              </a>
              <a href="tel:9412683747" className="border-2 border-white/30 text-white px-8 py-4 font-bold text-lg hover:border-[#dfe24b] hover:text-[#dfe24b] transition-all hover:-translate-y-0.5 flex items-center gap-2">
                <Phone className="w-5 h-5" /> (941) 268-3747
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 bg-[#dfe24b] rounded-full flex items-center justify-center">
                <img src={LOGO} alt="Tif's Pool Care" className="w-56 md:w-72 h-auto" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-72 h-72 md:w-96 md:h-96 border-2 border-[#dfe24b]/30 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Ticker */}
      <section className="bg-[#dfe24b] py-5 overflow-hidden">
        <div className="flex gap-12 justify-center font-[JetBrains_Mono] text-[#111] text-sm tracking-wider uppercase font-bold">
          <span>20+ Years Experience</span>
          <span className="text-[#111]/40">|</span>
          <span>150+ Pools Serviced</span>
          <span className="text-[#111]/40">|</span>
          <span>CPO Certified</span>
          <span className="text-[#111]/40">|</span>
          <span>Licensed & Insured</span>
          <span className="text-[#111]/40">|</span>
          <span>Same-Day Emergency</span>
        </div>
      </section>

      {/* Services - Bento Grid */}
      <section id="services" className="py-20 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="font-[JetBrains_Mono] text-[#4FC3D9] text-xs tracking-[0.3em] uppercase">What We Do</span>
            <h2 className="font-[Space_Grotesk] text-4xl md:text-5xl font-bold mt-2">Our Services</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: Droplets, title: 'Weekly Maintenance', desc: 'Cleaning, chemical balancing, skimming, brushing, filter care — all on a reliable weekly schedule.' },
              { icon: Sun, title: 'Seasonal Care', desc: 'Year-round programs tailored to Florida\'s climate. We adjust for rain, heat, and well water.' },
              { icon: Wrench, title: 'Minor Repairs', desc: 'Pumps, filters, leaks — we diagnose and fix on the spot. No need to call a separate company.' },
              { icon: Sparkles, title: 'Pressure Washing', desc: 'Pool deck cleaning for our maintenance customers. Complete pool area refresh.' },
              { icon: Droplets, title: 'Resurfacing', desc: 'Complete pool resurfacing to restore your pool\'s finish and bring it back to life.' },
              { icon: Zap, title: 'Emergency Service', desc: 'Same-day response when your pool needs urgent attention. Just call.' },
            ].map((svc, i) => (
              <div key={i} className="bg-[#111] border border-[#222] p-6 hover:border-[#dfe24b] transition-all group cursor-pointer relative overflow-hidden">
                <div className="absolute bottom-0 left-0 h-1 bg-[#dfe24b] w-0 group-hover:w-full transition-all duration-500" />
                <svc.icon className="w-8 h-8 text-[#dfe24b] mb-4" />
                <h3 className="font-[Space_Grotesk] text-xl font-bold mb-2">{svc.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About - Split Layout */}
      <section id="about" className="py-20 px-6 bg-[#dfe24b] text-[#111]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="font-[JetBrains_Mono] text-[#111]/60 text-xs tracking-[0.3em] uppercase">The Owner</span>
            <h2 className="font-[Space_Grotesk] text-4xl md:text-5xl font-bold mt-2 mb-6">Meet Tiffany</h2>
            <p className="text-[#111]/80 text-lg leading-relaxed mb-4">
              I started in the pool industry 20 years ago and never looked back. After years of working for
              other companies — including the largest pool company in Charlotte County — I started Tif's Pool Care
              because I believe pool service should be personal.
            </p>
            <p className="text-[#111]/80 text-lg leading-relaxed mb-6">
              When corporations took over, the personal touch disappeared. I'm here to bring it back.
              Your pool person should know your name, remember your dog, and actually care that your water
              is perfect. That's what I do.
            </p>
            <div className="flex flex-wrap gap-4">
              {['CPO Certified', 'Licensed', 'Bonded', 'Insured'].map(badge => (
                <span key={badge} className="bg-[#111] text-[#dfe24b] px-4 py-2 font-[JetBrains_Mono] text-xs font-bold tracking-wider uppercase">
                  {badge}
                </span>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-white rounded-2xl flex items-center justify-center shadow-2xl rotate-3 hover:rotate-0 transition-transform">
              <img src={LOGO} alt="Tif" className="w-48 md:w-60 h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Tiffany */}
      <section className="py-20 px-6 bg-[#111]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-[JetBrains_Mono] text-[#dfe24b] text-xs tracking-[0.3em] uppercase">The Difference</span>
            <h2 className="font-[Space_Grotesk] text-4xl md:text-5xl font-bold mt-2">Why Choose Tiffany?</h2>
          </div>
          <div className="space-y-6">
            {[
              { num: '01', title: 'Reliability First', desc: 'We show up on time, every time. No excuses, no missed visits. Your pool gets the attention it deserves.' },
              { num: '02', title: 'Real Communication', desc: 'The #1 complaint about pool companies? No communication. With us, you always know what\'s going on with your pool.' },
              { num: '03', title: 'Genuine Relationships', desc: 'We don\'t just clean your pool — we get to know you. Many of our clients have become good friends over the years.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start p-6 border border-[#222] hover:border-[#dfe24b] transition-colors group">
                <span className="font-[JetBrains_Mono] text-[#dfe24b] text-3xl font-bold shrink-0">{item.num}</span>
                <div>
                  <h3 className="font-[Space_Grotesk] text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-white/50 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Work */}
      <section className="py-20 px-6 bg-[#111]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="font-[JetBrains_Mono] text-[#4FC3D9] text-xs tracking-[0.3em] uppercase">Results</span>
            <h2 className="font-[Space_Grotesk] text-4xl md:text-5xl font-bold mt-2">Our Work</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {['/pool-1.jpg', '/pool-2.jpg', '/pool-3.jpg', '/pool-4.jpg', '/pool-5.jpg', '/pool-6.jpg'].map((src, i) => (
              <div key={i} className="aspect-[4/3] overflow-hidden group cursor-pointer">
                <img src={src} alt={`Pool serviced by Tif's Pool Care`} className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-110 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 px-6 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-[JetBrains_Mono] text-[#4FC3D9] text-xs tracking-[0.3em] uppercase">Testimonials</span>
            <h2 className="font-[Space_Grotesk] text-4xl md:text-5xl font-bold mt-2">What Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-[#111] border border-[#222] p-6 hover:border-[#dfe24b] transition-colors">
                <div className="flex gap-1 mb-3">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-[#dfe24b] text-[#dfe24b]" />)}
                </div>
                <p className="text-white/50 text-sm leading-relaxed mb-4 italic">
                  "This will be replaced with an authentic review from a real customer."
                </p>
                <p className="font-bold text-sm">— Customer Name</p>
                <p className="text-white/30 text-xs font-[JetBrains_Mono]">Google Review</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section id="areas" className="py-20 px-6 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto text-center">
          <span className="font-[JetBrains_Mono] text-[#dfe24b] text-xs tracking-[0.3em] uppercase">Coverage</span>
          <h2 className="font-[Space_Grotesk] text-4xl md:text-5xl font-bold mt-2 mb-12">Service Areas</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Arcadia', 'Wachula', 'Punta Gorda', 'Port Charlotte', 'Boca Grande', 'Rotunda', 'Englewood', 'Sarasota (Coming Soon)'].map(city => (
              <div key={city} className="bg-[#111] border border-[#222] p-4 hover:border-[#dfe24b] transition-colors group">
                <MapPin className="w-5 h-5 text-[#dfe24b] mb-2 mx-auto" />
                <span className="font-bold text-sm">{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-[#111]">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <span className="font-[JetBrains_Mono] text-[#4FC3D9] text-xs tracking-[0.3em] uppercase">Get Started</span>
              <h2 className="font-[Space_Grotesk] text-4xl font-bold mt-2 mb-6">Let's Talk About Your Pool</h2>
              <p className="text-white/50 mb-8 leading-relaxed">
                Ready for pool service you can actually rely on? Fill out the form or give us a call.
                We respond the same day.
              </p>
              <div className="space-y-4">
                <a href="tel:9412683747" className="flex items-center gap-3 text-white hover:text-[#dfe24b] transition-colors">
                  <Phone className="w-5 h-5 text-[#dfe24b]" />
                  <span className="font-[JetBrains_Mono] text-lg">(941) 268-3747</span>
                </a>
                <a href="mailto:tifspoolcare@gmail.com" className="flex items-center gap-3 text-white hover:text-[#dfe24b] transition-colors">
                  <Mail className="w-5 h-5 text-[#dfe24b]" />
                  <span className="font-[JetBrains_Mono]">tifspoolcare@gmail.com</span>
                </a>
                <div className="flex items-center gap-3 text-white/60">
                  <Shield className="w-5 h-5 text-[#dfe24b]" />
                  <span>Licensed, Bonded & Insured</span>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <input type="text" placeholder="Name" className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#222] text-white placeholder-white/30 focus:border-[#dfe24b] outline-none transition" />
                <input type="tel" placeholder="Phone" className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#222] text-white placeholder-white/30 focus:border-[#dfe24b] outline-none transition" />
                <input type="email" placeholder="Email" className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#222] text-white placeholder-white/30 focus:border-[#dfe24b] outline-none transition" />
                <select className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#222] text-white/30 focus:border-[#dfe24b] outline-none transition">
                  <option>Service Needed</option>
                  <option>Weekly Maintenance</option>
                  <option>Seasonal Maintenance</option>
                  <option>Repair</option>
                  <option>Emergency</option>
                </select>
                <textarea placeholder="Message" rows={3} className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#222] text-white placeholder-white/30 focus:border-[#dfe24b] outline-none transition resize-none" />
                <button type="submit" className="w-full bg-[#dfe24b] text-[#111] py-4 font-bold text-lg hover:bg-[#c5c830] transition-colors flex items-center justify-center gap-2">
                  Send Message <ChevronRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] border-t border-[#222] py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={LOGO_WHITE} alt="Tif's Pool Care" className="h-8" />
            <span className="font-[Space_Grotesk] font-bold">TIF'S POOL CARE</span>
          </div>
          <p className="text-white/40 text-sm font-[JetBrains_Mono]">
            &copy; {new Date().getFullYear()} All rights reserved. Licensed & Insured. Arcadia, FL.
          </p>
        </div>
      </footer>
    </div>
  )
}
