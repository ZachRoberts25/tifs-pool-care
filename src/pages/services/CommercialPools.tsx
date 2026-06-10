import { Link } from 'react-router-dom'
import { Phone, ChevronRight, Building2, ClipboardCheck, FlaskConical, Users, Shield, CalendarCheck } from 'lucide-react'

export default function CommercialPools() {
  return (
    <div className="bg-[#fffef5]">
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-[#dfe24b] to-[#f0f28a] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-[Caveat] text-xl text-[#555] mb-2">Professional care for pools that serve your community</p>
          <h1 className="font-[Fredoka] text-4xl md:text-5xl font-bold text-[#222] mb-4">
            Commercial Pool Service in Arcadia, Port Charlotte & Southwest Florida
          </h1>
          <p className="font-[Nunito] text-lg text-[#333] max-w-2xl mx-auto">
            Tif's Pool Care provides CPO certified maintenance for HOAs, condo associations, apartment
            complexes, hotels, and community pools across Southwest Florida. Clean, safe, code-compliant
            water your residents and guests can count on — serving Arcadia, Punta Gorda, Port Charlotte,
            Englewood, Boca Grande, Rotunda, and Wauchula.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#4FC3D9] text-white font-[Nunito] font-bold px-8 py-3 rounded-full hover:bg-[#3dafc4] transition-colors"
            >
              Get a Free Quote <ChevronRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:9412683747"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#333] font-[Nunito] font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-4 h-4" /> Call (941) 268-3747
            </a>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-3/5">
              <h2 className="font-[Fredoka] text-3xl font-bold text-[#222] mb-6">
                Commercial Pools Are a Different Job — And We're Built for It
              </h2>
              <div className="font-[Nunito] text-[#444] space-y-4 text-lg leading-relaxed">
                <p>
                  A commercial pool isn't just a bigger backyard pool. Public and semi-public pools in Florida
                  are regulated by the Florida Department of Health, carry heavier bather loads, and demand
                  consistent water chemistry, documented testing, and reliable equipment — every single day.
                  When something slips, it isn't one family that notices. It's every resident, guest, and
                  board member in your community.
                </p>
                <p>
                  That's why CPO (Certified Pool Operator) certification matters so much for commercial accounts.
                  Tiffany is CPO certified with over 20 years in the pool industry, and she understands what
                  it takes to keep a high-traffic pool clean, safe, and inspection-ready: precise chemical
                  balancing under heavy use, proper turnover and filtration, careful record keeping, and
                  catching small equipment issues before they close your pool during peak season.
                </p>
                <p>
                  And unlike the big franchise operations, you'll always know who's taking care of your pool.
                  You call Tiffany, you talk to Tiffany — the same accountability and personal service our
                  residential clients love, scaled up for your property.
                </p>
              </div>
            </div>
            <div className="md:w-2/5 shrink-0">
              <img
                src="/pool-7.webp"
                alt="Commercial community pool with waterfall feature maintained by Tif's Pool Care in Southwest Florida"
                loading="lazy"
                decoding="async"
                width={1200}
                height={1600}
                className="w-full rounded-2xl shadow-md object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[Fredoka] text-3xl font-bold text-[#222] mb-2 text-center">
            Who We Serve
          </h2>
          <p className="font-[Caveat] text-xl text-[#4FC3D9] text-center mb-10">
            Trusted care for every kind of commercial pool
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: <Users className="w-6 h-6 text-[#4FC3D9]" />,
                title: 'HOAs & Community Associations',
                description:
                  'Your community pool is often the centerpiece of your neighborhood — and the first thing prospective buyers see. We keep it sparkling, safe, and ready for residents year-round, with clear communication to your board or property manager.',
              },
              {
                icon: <Building2 className="w-6 h-6 text-[#4FC3D9]" />,
                title: 'Condos & Apartment Complexes',
                description:
                  'High bather loads and daily use mean condo and apartment pools need more frequent, more precise care than a residential pool. We tailor service schedules to your property\'s traffic so the water stays balanced even during the busiest weeks.',
              },
              {
                icon: <CalendarCheck className="w-6 h-6 text-[#4FC3D9]" />,
                title: 'Hotels & Vacation Rentals',
                description:
                  'For your guests, the pool is part of the experience they paid for. A cloudy or closed pool means bad reviews. We keep hotel and rental pools guest-ready every day, with flexible scheduling that works around check-ins and peak hours.',
              },
              {
                icon: <Shield className="w-6 h-6 text-[#4FC3D9]" />,
                title: 'Community & Recreational Pools',
                description:
                  'Public-facing pools carry the highest standards for safety and water quality. With CPO certified care, your community pool gets the professional attention that protects swimmers and keeps your facility inspection-ready.',
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-4 items-start bg-[#fffef5] rounded-2xl p-5 border border-[#e8e8d0]">
                <div className="flex-shrink-0 mt-1">{item.icon}</div>
                <div>
                  <h3 className="font-[Fredoka] text-lg font-semibold text-[#222] mb-1">{item.title}</h3>
                  <p className="font-[Nunito] text-[#555] text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[Fredoka] text-3xl font-bold text-[#222] mb-2 text-center">
            What's Included in Commercial Pool Service
          </h2>
          <p className="font-[Caveat] text-xl text-[#4FC3D9] text-center mb-10">
            Thorough, consistent, documented
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: <FlaskConical className="w-6 h-6 text-[#4FC3D9]" />,
                title: 'Water Testing & Chemical Balancing',
                description:
                  'Precise testing and balancing of chlorine, pH, alkalinity, calcium hardness, and stabilizer on every visit. Heavy bather loads burn through sanitizer fast — commercial pools need a pro who stays ahead of the chemistry, not behind it.',
              },
              {
                icon: <ClipboardCheck className="w-6 h-6 text-[#4FC3D9]" />,
                title: 'Documentation & Compliance Support',
                description:
                  'Water test readings and service records you can show your board, your insurer, or a health inspector. We help keep your pool aligned with Florida Department of Health requirements for public and semi-public pools.',
              },
              {
                icon: <Building2 className="w-6 h-6 text-[#4FC3D9]" />,
                title: 'Equipment Monitoring & Minor Repairs',
                description:
                  'Pumps, filters, chlorinators, and timers are checked on every visit. Small problems get caught and fixed before they become a closed pool and an unhappy community. Major issues come with straight talk and honest recommendations.',
              },
              {
                icon: <CalendarCheck className="w-6 h-6 text-[#4FC3D9]" />,
                title: 'Full Cleaning on a Reliable Schedule',
                description:
                  'Skimming, brushing, vacuuming, tile line cleaning, and basket emptying on a consistent schedule built around your property\'s needs — weekly or multiple visits per week for high-traffic pools.',
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-4 items-start bg-white rounded-2xl p-5 border border-[#e8e8d0]">
                <div className="flex-shrink-0 mt-1">{item.icon}</div>
                <div>
                  <h3 className="font-[Fredoka] text-lg font-semibold text-[#222] mb-1">{item.title}</h3>
                  <p className="font-[Nunito] text-[#555] text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[Fredoka] text-3xl font-bold text-[#222] mb-2 text-center">
            Frequently Asked Questions
          </h2>
          <p className="font-[Caveat] text-xl text-[#4FC3D9] text-center mb-10">
            Commercial pool questions answered
          </p>
          <div className="space-y-6">
            {[
              {
                question: 'Why does CPO certification matter for a commercial pool?',
                answer:
                  'CPO (Certified Pool Operator) certification is the industry-standard credential for operating public and commercial pools. It covers water chemistry, filtration and turnover, safety regulations, and record keeping at the level health departments expect. Hiring a CPO certified professional means your pool is cared for by someone trained specifically in the standards that apply to commercial facilities — not just backyard pools.',
              },
              {
                question: 'How often does a commercial pool need service?',
                answer:
                  'It depends on bather load and the size of your facility. Many commercial pools do well with weekly service, while high-traffic pools — especially during the summer season or at busy rental properties — benefit from two or more visits per week. Tiffany will assess your pool, your usage patterns, and your budget, then recommend a schedule that keeps the water consistently safe and clear.',
              },
              {
                question: 'Can you work with our property manager or HOA board?',
                answer:
                  'Absolutely. We regularly communicate with property managers, board members, and facility staff. You\'ll get clear service records, honest reports on equipment condition, and a direct line to Tiffany — no call centers, no runaround. We\'re happy to provide documentation for board meetings, insurance, or inspections.',
              },
              {
                question: 'What happens if our pool has a problem between visits?',
                answer:
                  'Call Tiffany. We offer same-day emergency service for urgent issues like equipment failures, green water, or post-storm cleanup. For commercial properties, downtime means unhappy residents and guests, so we prioritize getting your pool back open quickly and safely.',
              },
              {
                question: 'Do you serve commercial properties throughout Southwest Florida?',
                answer:
                  'Yes — we serve commercial pools in Arcadia, Wauchula, Punta Gorda, Port Charlotte, Boca Grande, Rotunda, and Englewood, and we\'re expanding to Sarasota and Fort Myers. If your property is nearby, reach out — we\'ll let you know right away if we can take care of you.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-[#fffef5] rounded-2xl p-6 border border-[#e8e8d0]">
                <h3 className="font-[Fredoka] text-lg font-semibold text-[#222] mb-3">{faq.question}</h3>
                <p className="font-[Nunito] text-[#555] leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-[Fredoka] text-3xl font-bold text-[#222] mb-8">Related Services</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link
              to="/services/weekly-pool-maintenance"
              className="bg-white rounded-2xl p-6 border border-[#e8e8d0] hover:border-[#4FC3D9] transition-colors group"
            >
              <h3 className="font-[Fredoka] text-lg font-semibold text-[#222] group-hover:text-[#4FC3D9] transition-colors">
                Weekly Maintenance
              </h3>
              <p className="font-[Nunito] text-sm text-[#666] mt-2">
                Regular cleaning and chemical care
              </p>
            </Link>
            <Link
              to="/services/pool-repair"
              className="bg-white rounded-2xl p-6 border border-[#e8e8d0] hover:border-[#4FC3D9] transition-colors group"
            >
              <h3 className="font-[Fredoka] text-lg font-semibold text-[#222] group-hover:text-[#4FC3D9] transition-colors">
                Pool Repair
              </h3>
              <p className="font-[Nunito] text-sm text-[#666] mt-2">
                Equipment and plumbing repairs
              </p>
            </Link>
            <Link
              to="/services/emergency-service"
              className="bg-white rounded-2xl p-6 border border-[#e8e8d0] hover:border-[#4FC3D9] transition-colors group"
            >
              <h3 className="font-[Fredoka] text-lg font-semibold text-[#222] group-hover:text-[#4FC3D9] transition-colors">
                Emergency Service
              </h3>
              <p className="font-[Nunito] text-sm text-[#666] mt-2">
                Same-day help when you need it
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-[#dfe24b]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-[Caveat] text-xl text-[#555] mb-2">Your residents and guests deserve a pool they can trust</p>
          <h2 className="font-[Fredoka] text-3xl md:text-4xl font-bold text-[#222] mb-4">
            Ready for Reliable Commercial Pool Care?
          </h2>
          <p className="font-[Nunito] text-lg text-[#444] mb-8 max-w-xl mx-auto">
            Get a free consultation and quote from Tiffany. With 20+ years of experience and CPO
            certification, she'll build a service plan that keeps your commercial pool clean, safe,
            and open for the people who count on it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#4FC3D9] text-white font-[Nunito] font-bold px-8 py-3 rounded-full hover:bg-[#3dafc4] transition-colors"
            >
              Get a Free Quote <ChevronRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:9412683747"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#333] font-[Nunito] font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-4 h-4" /> Call (941) 268-3747
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
