import { Link } from 'react-router-dom'
import { Phone, MapPin, Heart, Star, Mail, ChevronRight } from 'lucide-react'

const LOGO = '/logo.png'

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="bg-gradient-to-b from-[#dfe24b] via-[#f0f28a] to-[#fffef5] min-h-[calc(100vh-52px)] flex flex-col justify-center px-4 py-10">
          <div className="max-w-4xl mx-auto text-center">
            <img src={LOGO} alt="Tif's Pool Care — Licensed pool service in Arcadia and Southwest Florida" className="h-48 md:h-64 w-auto mx-auto mb-4 animate-float drop-shadow-lg" />
            <h1 className="font-[Caveat] text-5xl md:text-7xl font-bold text-[#1a1a1a] mb-3">
              Keep Your Pool Spiffy<br />with Tiffy!
            </h1>
            <p className="font-[Nunito] text-lg md:text-xl text-[#333] max-w-2xl mx-auto mb-6">
              Reliable, caring pool service for Southwest Florida families.
              We don't just clean pools — we build relationships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-[#1a1a1a] text-[#dfe24b] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#333] transition-all hover:-translate-y-0.5 shadow-lg">
                Get a Free Quote
              </Link>
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
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-[Fredoka] text-4xl font-bold text-center mb-2">Our Services</h2>
          <p className="font-[Caveat] text-2xl text-[#4FC3D9] text-center mb-12">Everything your pool needs</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { emoji: '🏊', title: 'Weekly Maintenance', desc: 'Regular cleaning, chemical balancing, skimming, brushing, and filter care to keep your pool sparkling all year round.', slug: 'weekly-pool-maintenance' },
              { emoji: '☀️', title: 'Seasonal Care', desc: 'Seasonal pool maintenance programs tailored to Florida\'s year-round swim season and unique water challenges.', slug: 'seasonal-care' },
              { emoji: '🔧', title: 'Minor Repairs', desc: 'Pump issues, filter problems, leaks — we diagnose and fix common pool equipment issues on the spot.', slug: 'pool-repair' },
              { emoji: '💦', title: 'Pressure Washing', desc: 'Pool deck pressure washing available for our maintenance customers. Keep your whole pool area looking fresh.', slug: 'weekly-pool-maintenance' },
              { emoji: '✨', title: 'Resurfacing', desc: 'Complete pool resurfacing to restore your pool\'s finish and bring it back to life.', slug: 'pool-resurfacing' },
              { emoji: '🚨', title: 'Emergency Service', desc: 'Pool emergency? We offer same-day service when you need it most. Just call Tiffany.', slug: 'emergency-service' },
              { emoji: '📋', title: 'Notary Services', desc: 'Need a document notarized? Tiffany is a certified Notary Public. Convenient, reliable notary services for our community.' },
            ].map((svc, i) =>
              svc.slug ? (
              <Link key={i} to={`/services/${svc.slug}`} className="bg-[#f0fafe] rounded-2xl p-6 border-l-4 border-[#4FC3D9] hover:shadow-lg hover:-translate-y-1 transition-all group cursor-pointer block">
                <span className="text-3xl mb-4 block group-hover:scale-110 transition-transform">{svc.emoji}</span>
                <h3 className="font-[Fredoka] text-xl font-bold mb-2">{svc.title}</h3>
                <p className="text-[#555] text-sm leading-relaxed">{svc.desc}</p>
              </Link>
              ) : (
              <div key={i} className="bg-[#f0fafe] rounded-2xl p-6 border-l-4 border-[#4FC3D9] group block">
                <span className="text-3xl mb-4 block">{svc.emoji}</span>
                <h3 className="font-[Fredoka] text-xl font-bold mb-2">{svc.title}</h3>
                <p className="text-[#555] text-sm leading-relaxed">{svc.desc}</p>
              </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* About / Meet Tiffany */}
      <section className="py-20 px-4 bg-[#dfe24b]/10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-2/5 shrink-0">
                <img src="/tiff-bio.jpg" alt="Tiffany and her family" className="w-full rounded-2xl shadow-md object-cover" />
              </div>
              <div>
                <h3 className="font-[Caveat] text-3xl text-[#4FC3D9] mb-1">Meet Tiffany</h3>
                <h2 className="font-[Fredoka] text-3xl font-bold mb-4">The Heart Behind the Business</h2>
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
                <p className="font-[Caveat] text-2xl text-[#1a1a1a] mb-4">
                  — Tiffany, Owner & CPO Certified
                </p>
                <Link to="/about" className="text-[#4FC3D9] font-bold hover:underline">Learn more about Tiffany →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-[Fredoka] text-4xl font-bold mb-2">Our Mission</h2>
          <p className="font-[Caveat] text-2xl text-[#4FC3D9] mb-8">Why we do what we do</p>
          <p className="text-[#555] leading-relaxed text-lg italic">
            At Tif's Pool Care, our mission is to serve each client with honesty, care, and a spirit of excellence, honoring God in all that we do. We are dedicated to providing high-quality pool cleaning with a personal touch, taking the time to build real relationships and treat every pool as if it were our own. We believe in doing things the right way — with integrity, kindness, and attention to detail — so your pool remains clean, safe, and a joyful place for your family to gather, relax, and make memories.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-[#1a1a1a] text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-[Fredoka] text-4xl font-bold mb-2">Why Customers Love Tiffany</h2>
          <p className="font-[Caveat] text-2xl text-[#dfe24b] mb-12">It's more than just a clean pool</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Real Relationships', desc: 'We get to know you and your pool. Many of our clients become friends. That\'s the way it should be.' },
              { title: 'Straight Talk', desc: 'No corporate runaround. You call Tiffany, you talk to Tiffany. It\'s that simple.' },
              { title: 'Never Rushed', desc: 'Your pool gets the time it needs. We don\'t cut corners, skip steps, or rush through a service to get to the next one.' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-[#dfe24b] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-[#1a1a1a]" />
                </div>
                <h3 className="font-[Fredoka] text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Work */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-[Fredoka] text-4xl font-bold text-center mb-2">Our Work</h2>
          <p className="font-[Caveat] text-2xl text-[#4FC3D9] text-center mb-12">Real pools, real results</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: '/pool-1.webp', alt: 'Sparkling clean residential pool after weekly maintenance service in Arcadia, FL' },
              { src: '/pool-2.webp', alt: 'Crystal clear pool water maintained by Tif\'s Pool Care in Port Charlotte' },
              { src: '/pool-3.webp', alt: 'Freshly serviced backyard pool in Punta Gorda, Southwest Florida' },
              { src: '/pool-4.webp', alt: 'Pool deck and pool after professional cleaning service in Englewood, FL' },
              { src: '/pool-5.webp', alt: 'Beautiful pool maintained by CPO certified technician in Boca Grande' },
              { src: '/pool-6.webp', alt: 'Residential pool resurfacing and maintenance in Charlotte County, FL' },
            ].map((img, i) => (
              <div key={i} className="aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer">
                <img src={img.src} alt={img.alt} loading="lazy" decoding="async" width={1200} height={900} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="py-20 px-4 bg-[#dfe24b]/10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-[Fredoka] text-4xl font-bold mb-2">Community Involvement</h2>
          <p className="font-[Caveat] text-2xl text-[#4FC3D9] mb-12">Giving back to the community we love</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { emoji: '⚾', title: 'DeSoto County Youth Baseball', desc: 'Proud sponsor of DeSoto County Youth Baseball right here in Arcadia. Supporting our local kids on and off the field — including the historic team that made it to the Diamond Youth Baseball World Series!' },
              { emoji: '🎣', title: "Angelico's Kid Fishing Event", desc: "Proud sponsor of Angelico's kid fishing event — getting kids outdoors, teaching patience, and creating memories on the water." },
              { emoji: '💧', title: "Tucker's Promise Foundation", desc: "Proud sponsor of Tucker's Promise Foundation, a nonprofit providing swim lesson scholarships to children in honor of Tucker Lee Cross. Water safety is close to our hearts — every child deserves to learn to swim." },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-[#dfe24b]/20 hover:shadow-lg hover:-translate-y-1 transition-all">
                <span className="text-5xl mb-5 block">{item.emoji}</span>
                <h3 className="font-[Fredoka] text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-[#555] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 font-[Caveat] text-xl text-[#555]">Many blessings — Tiffany</p>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 px-4 bg-[#fffef5]">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-[Fredoka] text-4xl font-bold text-center mb-2">What Our Clients Say</h2>
          <p className="font-[Caveat] text-2xl text-[#4FC3D9] text-center mb-12">Real reviews from real people</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Sandra Ritter', text: 'We are so thrilled to have found Tiffany to take care of our pool and spa needs. I can\'t say enough about her. She does an amazing job and responds promptly whenever we need to talk to her. Her prices are reasonable and worth every penny for the kind of job she does.' },
              { name: 'Natalie Dines', text: 'Tiffany came out to help us with our pool and we are SO thankful. She did an amazing job and got our pool looking great again and ready for our grandsons to visit. She communicated very well, was punctual and pleasant to work with.' },
              { name: 'Mary Grandominico', text: 'Tiffany took care of our pool several years ago. She took it from a cess pool to a clean, sparkling pool in just a couple weeks. I am so glad to have her back cleaning again with her own company. This lady will never disappoint you.' },
            ].map((review, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-[#dfe24b]/20 flex flex-col">
                <div className="flex gap-1 mb-3">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-[#dfe24b] text-[#dfe24b]" />)}
                </div>
                <p className="text-[#555] text-sm leading-relaxed mb-4 italic flex-1">
                  "{review.text}"
                </p>
                <div>
                  <p className="font-bold text-sm text-[#1a1a1a]">— {review.name}</p>
                  <p className="text-xs text-[#999]">Google Review</p>
                </div>
              </div>
            ))}
          </div>
          <a href="https://search.google.com/local/reviews?placeid=ChIJxQLMewZsoGcRaWznn1kVtys" target="_blank" rel="noopener noreferrer" className="block text-center mt-8 text-[#4FC3D9] font-bold hover:underline transition-colors">
            See all reviews on Google →
          </a>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 px-4 bg-[#fffef5]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-[Fredoka] text-4xl font-bold mb-2">Service Areas</h2>
          <p className="font-[Caveat] text-2xl text-[#4FC3D9] mb-12">Proudly serving Southwest Florida</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: 'Arcadia', slug: 'arcadia' },
              { name: 'Wauchula', slug: 'wauchula' },
              { name: 'Punta Gorda', slug: 'punta-gorda' },
              { name: 'Port Charlotte', slug: 'port-charlotte' },
              { name: 'Boca Grande', slug: 'boca-grande' },
              { name: 'Rotunda', slug: 'rotunda' },
              { name: 'Englewood', slug: 'englewood' },
            ].map(city => (
              <Link key={city.slug} to={`/areas/${city.slug}`} className="bg-[#dfe24b]/20 text-[#1a1a1a] px-6 py-3 rounded-full font-bold text-sm border border-[#dfe24b]/30 hover:bg-[#dfe24b] transition-colors flex items-center gap-2">
                <MapPin className="w-4 h-4" /> {city.name}, FL
              </Link>
            ))}
          </div>
          <p className="mt-6 text-[#777] text-sm">Expanding to Sarasota & Fort Myers!</p>
        </div>
      </section>

      {/* Contact / CTA */}
      <section className="py-20 px-4 bg-[#dfe24b]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-[Fredoka] text-4xl font-bold text-[#1a1a1a] mb-4">Ready for a Pool Person You Can Trust?</h2>
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
                <option>Notary Services</option>
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
    </div>
  )
}
