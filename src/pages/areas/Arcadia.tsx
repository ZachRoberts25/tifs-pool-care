import { Link } from 'react-router-dom'
import { Phone, MapPin, Droplets, Shield, Wrench, Clock, Sparkles } from 'lucide-react'

export default function Arcadia() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#dfe24b] to-[#f0f28a] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-[Caveat] text-xl text-[#333]/70 mb-2">DeSoto County's Trusted Pool Professionals</p>
          <h1 className="font-[Fredoka] text-4xl md:text-5xl font-bold mb-4">Pool Service in Arcadia, FL</h1>
          <p className="text-lg text-[#333] max-w-2xl mx-auto">
            Arcadia is where Tif's Pool Care calls home. As lifelong members of this tight-knit DeSoto County community, we understand the
            unique challenges that Arcadia pool owners face every single day -- from well water mineral buildup to the sweltering
            inland Florida heat that pushes your pool chemistry to its limits.
          </p>
          <div className="flex items-center justify-center gap-2 mt-6 text-[#333]/70">
            <MapPin className="w-5 h-5" />
            <span className="font-medium">DeSoto County, FL -- Our Home Base</span>
          </div>
        </div>
      </section>

      {/* Why Arcadia Pools Need Specialized Care */}
      <section className="py-16 px-4 bg-[#fffef5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[Fredoka] text-3xl font-bold mb-6 text-center">Why Arcadia Pools Need Specialized Care</h2>
          <div className="prose prose-lg max-w-none text-[#333] space-y-4">
            <p>
              Nestled along the Peace River in the heart of DeSoto County, Arcadia is a place where cattle ranches stretch to
              the horizon and the pace of life is refreshingly slow. But that rural charm comes with specific pool maintenance
              realities that many generic pool companies overlook. The vast majority of homes here rely on well water, and
              DeSoto County well water is notoriously high in dissolved minerals -- particularly iron, manganese, and calcium.
              When you top off your pool with untreated well water, those minerals accumulate fast. Iron leaves behind rusty
              orange stains on plaster and tile. Calcium deposits create unsightly white scaling on waterline tiles and inside
              your pool equipment. Manganese turns surfaces an unpleasant brown or black.
            </p>
            <p>
              Tiffany has spent over twenty years learning exactly how to combat these well water challenges. As a CPO
              (Certified Pool Operator) certified professional, she uses a targeted approach: sequestrant treatments to bind
              metals before they stain, precise pH management to slow calcium scaling, and chelation protocols that keep your
              water crystal clear even when your well is pumping minerals nonstop. This is not guesswork -- it is science-backed
              chemistry refined through two decades of hands-on experience right here in Arcadia.
            </p>
            <p>
              Arcadia's pool stock is an interesting mix. You will find older concrete pools from the 1970s and 1980s on
              established ranch properties -- pools that need careful attention to aging plaster, worn coping, and outdated
              filtration equipment. Then there are the newer vinyl-liner and fiberglass pools installed during recent residential
              growth along Highway 17 and in the subdivisions near DeSoto Memorial Hospital. Each pool type demands a different
              maintenance strategy, and Tiffany tailors her service plans accordingly.
            </p>
          </div>
        </div>
      </section>

      {/* Fastest Response Time */}
      <section className="py-12 px-4 bg-[#4FC3D9]/10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="bg-[#4FC3D9] text-white p-3 rounded-xl shrink-0">
              <Clock className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-[Fredoka] text-2xl font-bold mb-2">Fastest Response Time -- We're Right Here</h3>
              <p className="text-[#333] text-lg">
                Because Arcadia is our home base, our response times here are the shortest in our entire service area. When
                your pool pump fails on a Saturday afternoon or you notice a suspicious green tint developing overnight,
                Tiffany can often be at your property within the hour. For our Arcadia customers, we also offer priority
                scheduling for emergency calls -- no waiting behind customers in distant zip codes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 bg-[#fffef5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[Fredoka] text-3xl font-bold mb-8 text-center">Our Services in Arcadia</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Droplets, title: 'Weekly Pool Maintenance', desc: 'Complete chemical balancing, skimming, brushing, and filter care with special attention to well water mineral management.', link: '/services/weekly-pool-maintenance' },
              { icon: Sparkles, title: 'Seasonal Pool Care', desc: 'Prepare your pool for Florida\'s intense summer heat or winterize it properly during the cooler DeSoto County months.', link: '/services/seasonal-care' },
              { icon: Wrench, title: 'Pool Repair & Equipment', desc: 'Pump replacements, filter repairs, heater service, and plumbing fixes for both older ranch property pools and newer installations.', link: '/services/pool-repair' },
              { icon: Shield, title: 'Pool Resurfacing', desc: 'Replaster, retile, and refinish aging pool surfaces damaged by years of mineral-heavy well water exposure.', link: '/services/pool-resurfacing' },
            ].map(({ icon: Icon, title, desc, link }) => (
              <Link key={title} to={link} className="bg-white border-2 border-[#dfe24b]/30 rounded-2xl p-6 hover:border-[#dfe24b] hover:shadow-lg transition-all group">
                <Icon className="w-8 h-8 text-[#4FC3D9] mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-[Fredoka] text-xl font-bold mb-2">{title}</h3>
                <p className="text-[#555]">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Local Knowledge */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[Fredoka] text-3xl font-bold mb-6 text-center">Local Knowledge You Can Count On</h2>
          <div className="text-[#333] text-lg space-y-4">
            <p>
              Tiffany knows Arcadia inside and out. She knows that the water table near Oak Street runs shallower, making
              those wells even more mineral-heavy. She knows that homes along the Peace River corridor deal with increased
              organic debris -- leaves, pollen, and river mist -- that accelerates algae growth. She knows that the sandy
              soil common throughout DeSoto County means pool decks settle and shift over time, sometimes cracking coping
              and disturbing plumbing lines.
            </p>
            <p>
              This is not knowledge you pick up from a training manual. It comes from cleaning thousands of pools in this
              specific community over two decades, building relationships with local homeowners, and watching how Arcadia's
              unique environment interacts with pool chemistry season after season. When you hire Tif's Pool Care, you are
              getting a true local expert, not a franchise technician following a generic checklist.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#dfe24b]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-[Fredoka] text-3xl md:text-4xl font-bold mb-4">Ready for Arcadia's Best Pool Care?</h2>
          <p className="text-lg text-[#333] mb-6">
            As your neighbors right here in DeSoto County, we treat every Arcadia pool like our own. Call or message us today for a free estimate.
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
              { name: 'Port Charlotte', path: '/areas/port-charlotte' },
              { name: 'Punta Gorda', path: '/areas/punta-gorda' },
              { name: 'Wauchula', path: '/areas/wauchula' },
              { name: 'Rotunda', path: '/areas/rotunda' },
              { name: 'Englewood', path: '/areas/englewood' },
              { name: 'Boca Grande', path: '/areas/boca-grande' },
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
