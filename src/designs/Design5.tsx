import { Phone, Mail, MapPin, Shield, Clock, Heart, Star, ChevronRight, Droplets, Wrench, Sun, Sparkles, ArrowRight, CheckCircle, Users } from 'lucide-react'

const LOGO = '/logo.png'

/**
 * Design 5: "Clean Modern"
 * Minimal, airy, professional — trust-first design.
 * Lots of whitespace, clean grid, subtle yellow accents, modern sans-serif.
 */
export default function Design5() {
  return (
    <div className="font-[Outfit] bg-white text-[#1a1a1a]">
      {/* Header */}
      <header className="bg-white border-b border-[#f0f0f0] sticky top-[80px] z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div>
              <img src={LOGO} alt="Tif's Pool Care" className="h-10 w-auto" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold leading-tight">Tif's Pool Care</h1>
              <p className="text-xs text-[#999]">Arcadia, FL & Surrounding Areas</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium text-[#666] hover:text-[#1a1a1a] transition-colors">Services</a>
            <a href="#about" className="text-sm font-medium text-[#666] hover:text-[#1a1a1a] transition-colors">About</a>
            <a href="#areas" className="text-sm font-medium text-[#666] hover:text-[#1a1a1a] transition-colors">Areas</a>
            <a href="tel:9412683747" className="text-sm font-semibold text-[#1a1a1a] flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-[#dfe24b]" /> (941) 268-3747
            </a>
            <a href="#contact" className="bg-[#dfe24b] text-[#1a1a1a] px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#c5c830] transition-colors">
              Free Estimate
            </a>
          </div>
        </div>
      </header>

      {/* Hero - Clean & Spacious */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#dfe24b]/15 text-[#888] text-xs font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full mb-6">
                <Star className="w-3.5 h-3.5 text-[#dfe24b]" /> 20+ Years of Trusted Service
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] mb-6">
                Keep Your Pool
                <span className="block text-[#dfe24b]">Spiffy with Tiffy</span>
              </h1>
              <p className="text-[#777] text-lg leading-relaxed mb-8 max-w-md">
                Personal, reliable pool care for Southwest Florida.
                We treat every pool like it's our own — and every client like family.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#contact" className="bg-[#1a1a1a] text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-[#333] transition-all hover:-translate-y-0.5 flex items-center gap-2">
                  Get Started <ArrowRight className="w-4 h-4" />
                </a>
                <a href="tel:9412683747" className="border border-[#ddd] text-[#555] px-7 py-3.5 rounded-lg font-semibold hover:border-[#1a1a1a] transition-all flex items-center gap-2">
                  <Phone className="w-4 h-4" /> Call Now
                </a>
              </div>
              <div className="flex gap-6 mt-10 pt-6 border-t border-[#f0f0f0]">
                <div>
                  <div className="text-2xl font-bold text-[#dfe24b]">150+</div>
                  <div className="text-xs text-[#999]">Happy Clients</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#dfe24b]">20+</div>
                  <div className="text-xs text-[#999]">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#dfe24b]">7</div>
                  <div className="text-xs text-[#999]">Cities Served</div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-72 h-80 md:w-80 md:h-96 bg-[#fafafa] rounded-2xl border border-[#f0f0f0] flex items-center justify-center p-8">
                  <img src={LOGO} alt="Tif's Pool Care" className="w-52 md:w-64 h-auto" />
                </div>
                <div className="absolute -bottom-3 -right-3 bg-[#dfe24b] text-[#1a1a1a] px-4 py-2 rounded-lg font-bold text-sm shadow-lg">
                  CPO Certified
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6 bg-[#fafafa]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl mb-16">
            <p className="text-[#4FC3D9] font-semibold text-sm uppercase tracking-wider mb-2">Services</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete Pool Care Solutions</h2>
            <p className="text-[#888]">From weekly maintenance to emergency repairs — everything your pool needs under one roof.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Droplets, title: 'Weekly Maintenance', desc: 'Complete weekly service including chemical testing, skimming, brushing, vacuuming, and filter care.', tag: 'Most Popular' },
              { icon: Sun, title: 'Seasonal Programs', desc: 'Year-round care tailored to Florida\'s climate. We adjust for heat, rain, and local water conditions.' },
              { icon: Wrench, title: 'Equipment Repair', desc: 'Pump, filter, and plumbing issues diagnosed and fixed on-site by our experienced technicians.' },
              { icon: Sparkles, title: 'Pressure Washing', desc: 'Pool deck pressure washing available for current maintenance customers.' },
              { icon: Droplets, title: 'Resurfacing', desc: 'Complete pool resurfacing to restore your pool\'s finish and bring it back to life.' },
              { icon: Clock, title: 'Emergency Service', desc: 'Same-day response for urgent pool issues. Call anytime — we\'ll be there.' },
            ].map((svc, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-[#f0f0f0] hover:border-[#dfe24b] hover:shadow-sm transition-all relative group">
                {svc.tag && (
                  <span className="absolute top-4 right-4 bg-[#dfe24b] text-[#1a1a1a] text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                    {svc.tag}
                  </span>
                )}
                <div className="w-10 h-10 bg-[#dfe24b]/10 rounded-lg flex items-center justify-center mb-4">
                  <svc.icon className="w-5 h-5 text-[#c5c830]" />
                </div>
                <h3 className="font-bold text-lg mb-2">{svc.title}</h3>
                <p className="text-[#888] text-sm leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#fafafa] rounded-2xl p-8 md:p-12 border border-[#f0f0f0]">
            <div className="grid md:grid-cols-3 gap-10 items-start">
              <div className="md:col-span-1">
                <div className="inline-block">
                  <img src={LOGO} alt="Tif" className="w-36 h-auto" />
                </div>
                <div className="mt-4 space-y-2">
                  {['CPO Certified', 'Licensed & Insured', 'Bonded'].map(badge => (
                    <div key={badge} className="flex items-center gap-2 text-sm text-[#666]">
                      <CheckCircle className="w-4 h-4 text-[#dfe24b]" /> {badge}
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:col-span-2">
                <p className="text-[#4FC3D9] font-semibold text-sm uppercase tracking-wider mb-2">About Tiffany</p>
                <h2 className="text-3xl font-bold mb-6">Pool Care Built on Relationships</h2>
                <p className="text-[#777] leading-relaxed mb-4">
                  With over 20 years in the pool industry, Tiffany started Tif's Pool Care with a simple belief:
                  pool service should be personal. After watching corporate companies strip away the human touch,
                  she set out to do things differently.
                </p>
                <p className="text-[#777] leading-relaxed mb-6">
                  Today, Tif's serves over 150 clients across Southwest Florida. Every one of them has her direct
                  number. Every pool gets her personal attention to detail. Because at the end of the day, your pool
                  person should feel like a friend — someone you trust to be on your property, care for your
                  investment, and actually listen when you have a concern.
                </p>
                <div className="flex gap-6 items-center">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#1a1a1a]">
                    <Users className="w-4 h-4 text-[#dfe24b]" /> Both Residential & Commercial
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#1a1a1a]">
                    <Heart className="w-4 h-4 text-[#dfe24b]" /> Family-Owned
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us - Simple Grid */}
      <section className="py-20 px-6 bg-[#1a1a1a] text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#4FC3D9] font-semibold text-sm uppercase tracking-wider mb-2">The Tiffany Difference</p>
            <h2 className="text-3xl md:text-4xl font-bold">What Sets Us Apart</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Clock, title: 'Reliable', desc: 'We show up on time, every visit. No missed appointments, no excuses.' },
              { icon: Heart, title: 'Personal', desc: 'We know your name, your pool, and your preferences. You\'re never just a number.' },
              { icon: Shield, title: 'Trustworthy', desc: 'Licensed, bonded, insured, and CPO certified. Your pool is in expert hands.' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 bg-[#dfe24b]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-[#dfe24b]" />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section id="areas" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#4FC3D9] font-semibold text-sm uppercase tracking-wider mb-2">Coverage</p>
            <h2 className="text-3xl md:text-4xl font-bold">Serving Southwest Florida</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {['Arcadia', 'Wachula', 'Punta Gorda', 'Port Charlotte', 'Boca Grande', 'Rotunda', 'Englewood'].map(city => (
              <div key={city} className="flex items-center gap-2 bg-[#fafafa] border border-[#f0f0f0] rounded-lg px-5 py-3 text-sm font-medium hover:border-[#dfe24b] transition-colors">
                <MapPin className="w-4 h-4 text-[#dfe24b]" /> {city}, FL
              </div>
            ))}
          </div>
          <p className="text-center mt-6 text-[#bbb] text-sm">Expanding to Sarasota & Fort Myers</p>
        </div>
      </section>

      {/* Our Work */}
      <section className="py-20 px-6 bg-[#fafafa]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl mb-16">
            <p className="text-[#4FC3D9] font-semibold text-sm uppercase tracking-wider mb-2">Our Work</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pools We Maintain</h2>
            <p className="text-[#888]">Real photos from real routes. This is what consistent, quality pool care looks like.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['/pool-1.jpg', '/pool-2.jpg', '/pool-3.jpg', '/pool-4.jpg', '/pool-5.jpg', '/pool-6.jpg'].map((src, i) => (
              <div key={i} className="aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer">
                <img src={src} alt={`Pool serviced by Tif's Pool Care`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#4FC3D9] font-semibold text-sm uppercase tracking-wider mb-2">Reviews</p>
            <h2 className="text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-[#fafafa] rounded-xl p-6 border border-[#f0f0f0]">
                <div className="flex gap-1 mb-3">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-[#dfe24b] text-[#dfe24b]" />)}
                </div>
                <p className="text-[#666] text-sm leading-relaxed mb-4 italic">
                  "This will be replaced with an authentic review from a real customer."
                </p>
                <p className="font-bold text-sm text-[#1a1a1a]">— Customer Name</p>
                <p className="text-xs text-[#999]">Google Review</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 px-6 bg-[#dfe24b]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">
            Ready for pool service you can count on?
          </h2>
          <p className="text-[#333]/70 text-lg mb-8">
            Get a free estimate today. We respond same-day, every time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-[#1a1a1a] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#333] transition-colors flex items-center gap-2 justify-center">
              Get Free Estimate <ArrowRight className="w-5 h-5" />
            </a>
            <a href="tel:9412683747" className="bg-white/80 text-[#1a1a1a] px-8 py-4 rounded-lg font-semibold hover:bg-white transition-colors flex items-center gap-2 justify-center">
              <Phone className="w-5 h-5" /> (941) 268-3747
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 px-6 bg-[#fafafa]">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#4FC3D9] font-semibold text-sm uppercase tracking-wider mb-2">Contact</p>
            <h2 className="text-3xl font-bold">Get Your Free Estimate</h2>
          </div>
          <form className="space-y-4 bg-white rounded-xl p-8 border border-[#f0f0f0]">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Name" className="px-4 py-3 rounded-lg border border-[#eee] focus:border-[#dfe24b] outline-none transition text-sm" />
              <input type="tel" placeholder="Phone" className="px-4 py-3 rounded-lg border border-[#eee] focus:border-[#dfe24b] outline-none transition text-sm" />
            </div>
            <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg border border-[#eee] focus:border-[#dfe24b] outline-none transition text-sm" />
            <select className="w-full px-4 py-3 rounded-lg border border-[#eee] focus:border-[#dfe24b] outline-none transition text-sm text-[#999]">
              <option>Select a Service</option>
              <option>Weekly Maintenance</option>
              <option>Seasonal Care</option>
              <option>Repair</option>
              <option>Emergency</option>
              <option>Other</option>
            </select>
            <textarea placeholder="Tell us about your pool..." rows={3} className="w-full px-4 py-3 rounded-lg border border-[#eee] focus:border-[#dfe24b] outline-none transition text-sm resize-none" />
            <button type="submit" className="w-full bg-[#1a1a1a] text-white py-3.5 rounded-lg font-semibold hover:bg-[#333] transition-colors flex items-center justify-center gap-2 text-sm">
              Submit Request <ChevronRight className="w-4 h-4" />
            </button>
          </form>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center text-sm text-[#999]">
            <a href="tel:9412683747" className="flex items-center gap-2 hover:text-[#1a1a1a] transition-colors"><Phone className="w-4 h-4" /> (941) 268-3747</a>
            <a href="mailto:tifspoolcare@gmail.com" className="flex items-center gap-2 hover:text-[#1a1a1a] transition-colors"><Mail className="w-4 h-4" /> tifspoolcare@gmail.com</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-[#f0f0f0] py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={LOGO} alt="Tif's Pool Care" className="h-8 rounded" />
            <span className="font-bold text-sm">Tif's Pool Care</span>
          </div>
          <p className="text-[#bbb] text-xs">&copy; {new Date().getFullYear()} Tif's Pool Care. Licensed, Bonded & Insured. CPO Certified.</p>
        </div>
      </footer>
    </div>
  )
}
