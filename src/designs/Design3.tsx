import { Phone, Mail, MapPin, Shield, Clock, Heart, Star, ChevronRight, Droplets, Wrench, Sun, Sparkles, ArrowRight, CheckCircle } from 'lucide-react'

const LOGO = '/logo.png'
const LOGO_WHITE = '/logo-white.png'

/**
 * Design 3: "Coastal Elegance"
 * Soft, premium, spa-like — Florida luxury meets personal warmth.
 * Muted backgrounds, elegant serif headlines, soft shadows, aqua accents.
 */
export default function Design3() {
  return (
    <div className="font-[Outfit] bg-white text-[#2d2d2d]">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-[80px] z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={LOGO} alt="Tif's Pool Care" className="h-12 w-auto" />
            <div>
              <h1 className="font-[Playfair_Display] text-xl font-bold text-[#1a1a1a]">Tif's Pool Care</h1>
              <p className="text-xs text-[#4FC3D9] tracking-widest uppercase">Southwest Florida</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm text-[#444] hover:text-[#1a1a1a] transition-colors">Services</a>
            <a href="#about" className="text-sm text-[#444] hover:text-[#1a1a1a] transition-colors">Our Story</a>
            <a href="#areas" className="text-sm text-[#444] hover:text-[#1a1a1a] transition-colors">Service Areas</a>
            <a href="#contact" className="bg-[#1a1a1a] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#333] transition-colors">
              Free Estimate
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#f8fafb] via-white to-[#f0fdf4] py-24 px-6 overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-[#dfe24b]/10 blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-[#4FC3D9]/10 blur-3xl" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block bg-[#dfe24b]/20 text-[#555] text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-6 font-medium">
            Trusted Pool Care Since 2024
          </div>
          <h1 className="font-[Playfair_Display] text-5xl md:text-7xl font-bold leading-tight mb-6 text-[#1a1a1a]">
            Keep Your Pool<br />
            <span className="italic text-[#4FC3D9]">Spiffy</span> with Tiffy
          </h1>
          <p className="text-[#444] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Where caring for your pool means caring about you.
            Personal, reliable service for Southwest Florida homes and businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-[#dfe24b] text-[#1a1a1a] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#c5c830] transition-all hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2 justify-center">
              Schedule a Visit <ArrowRight className="w-5 h-5" />
            </a>
            <a href="tel:9412683747" className="border border-[#ddd] text-[#555] px-8 py-4 rounded-full font-semibold text-lg hover:border-[#1a1a1a] hover:text-[#1a1a1a] transition-all flex items-center gap-2 justify-center">
              <Phone className="w-5 h-5" /> (941) 268-3747
            </a>
          </div>
        </div>
      </section>

      {/* Trust Row */}
      <section className="border-y border-[#eee] py-6 bg-white">
        <div className="max-w-5xl mx-auto px-6 flex flex-wrap justify-center gap-8 text-sm text-[#444]">
          {[
            { icon: Shield, text: 'Licensed, Bonded & Insured' },
            { icon: Star, text: 'CPO Certified Operator' },
            { icon: Clock, text: '20+ Years in Pool Care' },
            { icon: Heart, text: '150+ Satisfied Clients' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <item.icon className="w-4 h-4 text-[#dfe24b]" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6 bg-[#fafaf8]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#4FC3D9] text-sm tracking-widest uppercase mb-2">What We Offer</p>
            <h2 className="font-[Playfair_Display] text-4xl md:text-5xl font-bold">Pool Services</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Droplets, title: 'Weekly Maintenance', desc: 'Comprehensive weekly cleaning including chemical testing, skimming, brushing, vacuuming, and filter maintenance.' },
              { icon: Sun, title: 'Seasonal Programs', desc: 'Tailored care for Florida\'s unique climate — year-round service adjusted for rain, heat, and water conditions.' },
              { icon: Wrench, title: 'Equipment Repair', desc: 'Pump, filter, and plumbing repairs diagnosed and resolved on-site by our experienced team.' },
              { icon: Sparkles, title: 'Deck Pressure Wash', desc: 'Keep your entire pool area pristine with professional pressure washing for current customers.' },
              { icon: Droplets, title: 'Pool Resurfacing', desc: 'Complete pool resurfacing to restore your pool\'s finish, remove stains, and bring it back to life.' },
              { icon: Clock, title: 'Emergency Response', desc: 'Urgent pool issues don\'t wait — and neither do we. Same-day service available.' },
            ].map((svc, i) => (
              <div key={i} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all group border border-transparent hover:border-[#dfe24b]/30">
                <div className="w-12 h-12 bg-gradient-to-br from-[#dfe24b]/20 to-[#4FC3D9]/10 rounded-lg flex items-center justify-center mb-5">
                  <svc.icon className="w-6 h-6 text-[#4FC3D9]" />
                </div>
                <h3 className="font-[Playfair_Display] text-xl font-bold mb-3">{svc.title}</h3>
                <p className="text-[#555] text-sm leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2 flex justify-center">
            <img src={LOGO} alt="Tif" className="w-52 h-auto" />
          </div>
          <div className="md:col-span-3">
            <p className="text-[#4FC3D9] text-sm tracking-widest uppercase mb-2">Our Story</p>
            <h2 className="font-[Playfair_Display] text-4xl font-bold mb-6">Pool Care with a Personal Touch</h2>
            <p className="text-[#444] leading-relaxed mb-4">
              After two decades in the pool industry, Tiffany founded Tif's Pool Care with one mission:
              to bring back the personal connection that corporate companies have lost. Growing up in the business,
              she learned that great pool care isn't just about chemicals — it's about people.
            </p>
            <p className="text-[#444] leading-relaxed mb-6">
              Every client gets her direct number. Every pool gets her personal attention. When you choose Tif's,
              you're choosing a pool person who genuinely cares about your experience — not just your water chemistry.
            </p>
            <div className="space-y-3">
              {[
                'Certified Pool Operator (CPO)',
                '20+ years of hands-on pool experience',
                'Both residential & commercial pools',
                'Same-day emergency service available',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#dfe24b] shrink-0" />
                  <span className="text-[#555] text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial / Quote */}
      <section className="py-20 px-6 bg-[#1a1a1a] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <div className="w-16 h-16 bg-[#dfe24b] rounded-full flex items-center justify-center mx-auto mb-8">
            <Heart className="w-8 h-8 text-[#1a1a1a]" />
          </div>
          <blockquote className="font-[Playfair_Display] text-3xl md:text-4xl font-bold italic leading-relaxed mb-6">
            "What I want to bring back to pool service is the relationship —
            getting to know each other, not just cleaning the pool."
          </blockquote>
          <p className="text-[#dfe24b] font-medium">— Tiffany, Owner</p>
        </div>
      </section>

      {/* Our Work */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#4FC3D9] text-sm tracking-widest uppercase mb-2">Portfolio</p>
            <h2 className="font-[Playfair_Display] text-4xl md:text-5xl font-bold">Pools We Care For</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['/pool-1.jpg', '/pool-2.jpg', '/pool-3.jpg', '/pool-4.jpg', '/pool-5.jpg', '/pool-6.jpg'].map((src, i) => (
              <div key={i} className="aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer shadow-sm">
                <img src={src} alt={`Pool serviced by Tif's Pool Care`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 px-6 bg-[#fafaf8]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#4FC3D9] text-sm tracking-widest uppercase mb-2">Testimonials</p>
            <h2 className="font-[Playfair_Display] text-4xl md:text-5xl font-bold">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-white rounded-xl p-8 shadow-sm border border-[#eee]">
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-[#dfe24b] text-[#dfe24b]" />)}
                </div>
                <p className="text-[#444] text-sm leading-relaxed mb-4 italic">
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
      <section id="areas" className="py-24 px-6 bg-[#fafaf8]">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[#4FC3D9] text-sm tracking-widest uppercase mb-2">Where We Serve</p>
          <h2 className="font-[Playfair_Display] text-4xl md:text-5xl font-bold mb-12">Southwest Florida</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Arcadia', 'Wachula', 'Punta Gorda', 'Port Charlotte', 'Boca Grande', 'Rotunda', 'Englewood', 'Fort Myers*'].map(city => (
              <div key={city} className="bg-white rounded-lg p-5 shadow-sm border border-[#eee] hover:border-[#dfe24b] transition-colors text-center">
                <MapPin className="w-5 h-5 text-[#dfe24b] mx-auto mb-2" />
                <span className="font-medium text-sm text-[#555]">{city}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[#888] text-xs italic">*Expanding soon to Sarasota & Fort Myers</p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#4FC3D9] text-sm tracking-widest uppercase mb-2">Get in Touch</p>
            <h2 className="font-[Playfair_Display] text-4xl md:text-5xl font-bold">Request a Free Estimate</h2>
          </div>
          <div className="bg-[#fafaf8] rounded-2xl p-8 md:p-12 border border-[#eee]">
            <form className="grid md:grid-cols-2 gap-4">
              <input type="text" placeholder="Full Name" className="px-5 py-3.5 rounded-lg border border-[#ddd] focus:border-[#dfe24b] outline-none transition bg-white" />
              <input type="tel" placeholder="Phone Number" className="px-5 py-3.5 rounded-lg border border-[#ddd] focus:border-[#dfe24b] outline-none transition bg-white" />
              <input type="email" placeholder="Email Address" className="px-5 py-3.5 rounded-lg border border-[#ddd] focus:border-[#dfe24b] outline-none transition bg-white" />
              <select className="px-5 py-3.5 rounded-lg border border-[#ddd] focus:border-[#dfe24b] outline-none transition bg-white text-[#444]">
                <option>Select Service</option>
                <option>Weekly Maintenance</option>
                <option>Seasonal Care</option>
                <option>Repair</option>
                <option>Emergency</option>
              </select>
              <textarea placeholder="Tell us about your pool and what you need..." rows={4} className="md:col-span-2 px-5 py-3.5 rounded-lg border border-[#ddd] focus:border-[#dfe24b] outline-none transition bg-white resize-none" />
              <div className="md:col-span-2">
                <button type="submit" className="w-full bg-[#dfe24b] text-[#1a1a1a] py-4 rounded-lg font-semibold text-lg hover:bg-[#c5c830] transition-colors flex items-center justify-center gap-2">
                  Request Estimate <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </form>
            <div className="mt-8 flex flex-col sm:flex-row gap-6 justify-center text-sm text-[#444]">
              <a href="tel:9412683747" className="flex items-center gap-2 hover:text-[#1a1a1a] transition-colors"><Phone className="w-4 h-4" /> (941) 268-3747</a>
              <a href="mailto:tifspoolcare@gmail.com" className="flex items-center gap-2 hover:text-[#1a1a1a] transition-colors"><Mail className="w-4 h-4" /> tifspoolcare@gmail.com</a>
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Arcadia, FL</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white/50 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={LOGO_WHITE} alt="Tif's Pool Care" className="h-10 opacity-80" />
            <div>
              <span className="font-[Playfair_Display] text-white font-bold">Tif's Pool Care</span>
              <p className="text-xs text-white/30">Southwest Florida</p>
            </div>
          </div>
          <p className="text-xs">&copy; {new Date().getFullYear()} Tif's Pool Care. Licensed, Bonded & Insured.</p>
        </div>
      </footer>
    </div>
  )
}
