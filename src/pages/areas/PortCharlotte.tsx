import { Link } from 'react-router-dom'
import { Phone, MapPin, Droplets, Shield, Wrench, Home, Sparkles, Sun } from 'lucide-react'

export default function PortCharlotte() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#dfe24b] to-[#f0f28a] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-[Caveat] text-xl text-[#333]/70 mb-2">Charlotte County's Largest Community, Covered</p>
          <h1 className="font-[Fredoka] text-4xl md:text-5xl font-bold mb-4">Pool Service in Port Charlotte, FL</h1>
          <p className="text-lg text-[#333] max-w-2xl mx-auto">
            Port Charlotte is Charlotte County's largest unincorporated community and one of Southwest Florida's most
            popular places to call home. With thousands of residential pools spread across canal-front lots and quiet
            inland neighborhoods, Tif's Pool Care provides dependable, expert service tailored to Port Charlotte's
            distinct environment.
          </p>
          <div className="flex items-center justify-center gap-2 mt-6 text-[#333]/70">
            <MapPin className="w-5 h-5" />
            <span className="font-medium">Charlotte County, FL</span>
          </div>
        </div>
      </section>

      {/* Canal-Front & Inland */}
      <section className="py-16 px-4 bg-[#fffef5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[Fredoka] text-3xl font-bold mb-6 text-center">Canal-Front Homes and Inland Pools -- Two Different Worlds</h2>
          <div className="prose prose-lg max-w-none text-[#333] space-y-4">
            <p>
              Port Charlotte's layout creates two fundamentally different pool maintenance environments. Homes along the
              extensive canal system -- stretching from Edgewater Drive through the Harbour Heights area and down to the
              Myakka River corridor -- sit in a microclimate heavily influenced by water. Canal-side properties experience
              higher ambient humidity, which accelerates algae growth on pool surfaces and encourages mold on pool decks
              and screen enclosures. The proximity to brackish tidal canals also means airborne salt particles settle on
              pool equipment, corroding metal components faster than you might expect this far from the open Gulf.
            </p>
            <p>
              Inland Port Charlotte neighborhoods like Murdock, the areas surrounding Port Charlotte Town Center, and the
              residential streets off Midway Boulevard face a different set of challenges. These pools deal with more
              direct sun exposure (no canal tree canopy), sandy soil that shifts under pool decks, and irrigation water
              that often carries elevated mineral content from Charlotte County's aquifer. Tiffany adjusts her chemical
              protocols and maintenance schedules based on exactly where your pool sits within the Port Charlotte grid --
              because a one-size-fits-all approach simply does not work here.
            </p>
          </div>
        </div>
      </section>

      {/* Snowbird Service */}
      <section className="py-12 px-4 bg-[#4FC3D9]/10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="bg-[#4FC3D9] text-white p-3 rounded-xl shrink-0">
              <Sun className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-[Fredoka] text-2xl font-bold mb-2">Year-Round Care for Snowbird Properties</h3>
              <p className="text-[#333] text-lg">
                Port Charlotte has one of the highest concentrations of seasonal residents in Charlotte County. If you head
                north from May through October, your pool does not take a vacation with you. Florida's brutal summer heat,
                daily afternoon thunderstorms, and relentless humidity mean an unattended pool can turn into a swamp
                within weeks. Tiffany offers dedicated snowbird maintenance packages that keep your water balanced, your
                equipment running, and your screens intact while you are away. When you return in November, your pool is
                sparkling and swim-ready -- no shock treatment marathon required. We also send monthly photo updates so you
                can check on your pool from anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Salt Air Impact */}
      <section className="py-16 px-4 bg-[#fffef5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[Fredoka] text-3xl font-bold mb-6 text-center">Protecting Your Equipment from Coastal Corrosion</h2>
          <div className="text-[#333] text-lg space-y-4">
            <p>
              Even though Port Charlotte is not directly on the beach, prevailing westerly winds carry salt-laden air from
              Charlotte Harbor and the Gulf of Mexico inland across the entire community. This salt air is insidious -- it
              settles on pool pump housings, heater heat exchangers, automation control panels, and salt chlorine generator
              cells, accelerating corrosion far beyond what the equipment manufacturers anticipated for "inland" installations.
            </p>
            <p>
              Tiffany's preventive approach includes regular equipment inspections focused on early corrosion detection,
              protective lubrication of exposed metal fittings, and recommendations for equipment housing and covers that
              extend the life of your investment. For Port Charlotte customers, she also monitors salt chlorinator output
              more carefully -- the combination of ambient salt air and generated chlorine creates a particularly aggressive
              environment around cell housings and plumbing connections.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[Fredoka] text-3xl font-bold mb-8 text-center">Services Available in Port Charlotte</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Droplets, title: 'Weekly Pool Maintenance', desc: 'Customized chemical management for canal-front humidity or inland mineral challenges, plus full skimming, brushing, and equipment checks.', link: '/services/weekly-pool-maintenance' },
              { icon: Home, title: 'Snowbird Property Care', desc: 'Year-round pool maintenance packages with monthly photo reports designed for seasonal Port Charlotte residents.', link: '/services/seasonal-care' },
              { icon: Wrench, title: 'Pool Repair & Equipment', desc: 'Corrosion repair, pump replacement, heater service, and automation troubleshooting for salt-air-affected systems.', link: '/services/pool-repair' },
              { icon: Shield, title: 'Pressure Washing', desc: 'Pool deck, cage, and paver cleaning to remove algae, mold, and salt deposits common in Port Charlotte\'s humid climate — available for maintenance customers.', link: '/services/weekly-pool-maintenance' },
            ].map(({ icon: Icon, title, desc, link }) => (
              <Link key={title} to={link} className="bg-[#fffef5] border-2 border-[#dfe24b]/30 rounded-2xl p-6 hover:border-[#dfe24b] hover:shadow-lg transition-all group">
                <Icon className="w-8 h-8 text-[#4FC3D9] mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-[Fredoka] text-xl font-bold mb-2">{title}</h3>
                <p className="text-[#555]">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Retiree Community */}
      <section className="py-16 px-4 bg-[#fffef5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[Fredoka] text-3xl font-bold mb-6 text-center">Trusted by Port Charlotte's Retiree Community</h2>
          <div className="text-[#333] text-lg space-y-4">
            <p>
              Many of our Port Charlotte customers are retirees who moved here for the warm weather, affordable cost of
              living, and relaxed lifestyle. They want a pool care provider who shows up reliably, communicates clearly,
              and treats their property with respect. Tiffany's approach is built around exactly these values. She
              arrives on schedule, explains what she is doing and why, and never recommends unnecessary services. After
              twenty-plus years in this business, her reputation in Port Charlotte speaks for itself -- most of our new
              customers here come through word-of-mouth referrals from satisfied neighbors.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[Fredoka] text-3xl font-bold mb-2 text-center">Port Charlotte Pool Service Questions</h2>
          <p className="font-[Caveat] text-xl text-[#4FC3D9] text-center mb-10">Answers for canal-front and inland homeowners</p>
          <div className="space-y-6">
            {[
              {
                question: 'How much does weekly pool service cost in Port Charlotte?',
                answer:
                  'Pricing depends on your pool\'s size, equipment, screen enclosure, and whether you\'re canal-front (where humidity and salt air demand more aggressive chemical management) or inland. Rather than quote a one-size-fits-all number, Tiffany gives free, no-obligation quotes after seeing your pool — so you pay for what your pool actually needs, with chemicals included in every weekly plan.',
              },
              {
                question: 'Do you service canal-front homes?',
                answer:
                  'Yes — a large share of our Port Charlotte customers are on the canal system. Canal-front pools get extra attention on algae prevention, deck and cage mold, and corrosion checks on pumps, heaters, and salt cell housings, since brackish air wears equipment faster than inland installations.',
              },
              {
                question: 'How long does pool resurfacing last in Port Charlotte?',
                answer:
                  'It depends on the finish: standard plaster typically lasts 7-12 years, quartz blends 10-15, and pebble finishes 15-20 or more. Southwest Florida\'s year-round sun and heavy pool use push surfaces toward the shorter end of those ranges, and water chemistry is the single biggest factor — a properly balanced pool can double the life of a finish. See our pool resurfacing page for signs it\'s time.',
              },
              {
                question: 'Can you look after my pool while I\'m up north for the summer?',
                answer:
                  'Absolutely. Snowbird packages are one of our specialties in Port Charlotte — weekly care continues while you\'re away, and monthly photo updates let you check on your pool from anywhere. You come home in November to a swim-ready pool, not a green one.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-[#fffef5] rounded-2xl p-6 border border-[#e8e8d0]">
                <h3 className="font-[Fredoka] text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-[#555] leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#dfe24b]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-[Fredoka] text-3xl md:text-4xl font-bold mb-4">Port Charlotte Pool Service You Can Rely On</h2>
          <p className="text-lg text-[#333] mb-6">
            Whether you live on a canal, in a quiet inland neighborhood, or only visit for the winter, Tif's Pool Care keeps your pool perfect year-round.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="bg-[#1a1a1a] text-[#dfe24b] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#333] hover:scale-105 transition-all">
              Get a Free Estimate
            </Link>
            <a href="tel:9412683747" className="flex items-center gap-2 bg-white text-[#1a1a1a] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 hover:scale-105 transition-all">
              <Phone className="w-5 h-5" /> (941) 268-3747
            </a>
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="py-12 px-4 bg-[#fffef5]">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="font-[Fredoka] text-xl font-bold mb-4">Also Serving Nearby Areas</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: 'Punta Gorda', path: '/areas/punta-gorda' },
              { name: 'Rotunda', path: '/areas/rotunda' },
              { name: 'Englewood', path: '/areas/englewood' },
              { name: 'Arcadia', path: '/areas/arcadia' },
              { name: 'Boca Grande', path: '/areas/boca-grande' },
              { name: 'Wauchula', path: '/areas/wauchula' },
            ].map(area => (
              <Link key={area.name} to={area.path} className="bg-white border border-[#dfe24b] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#dfe24b] transition-colors">
                {area.name}, FL
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
