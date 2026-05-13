import { Link } from 'react-router-dom'
import { Phone, MapPin, Droplets, Shield, Wrench, TrendingUp, Sparkles, Home } from 'lucide-react'

export default function Rotunda() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#dfe24b] to-[#f0f28a] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-[Caveat] text-xl text-[#333]/70 mb-2">Growing Community, Growing Pool Care Needs</p>
          <h1 className="font-[Fredoka] text-4xl md:text-5xl font-bold mb-4">Pool Service in Rotunda, FL</h1>
          <p className="text-lg text-[#333] max-w-2xl mx-auto">
            Rotunda West is one of Charlotte County's fastest-growing planned communities, and with new homes going up
            every month, the demand for reliable pool care has never been higher. Tif's Pool Care has been serving
            Rotunda homeowners since well before the recent construction boom, and we know this unique community
            inside and out.
          </p>
          <div className="flex items-center justify-center gap-2 mt-6 text-[#333]/70">
            <MapPin className="w-5 h-5" />
            <span className="font-medium">Unincorporated Charlotte County, FL</span>
          </div>
        </div>
      </section>

      {/* Planned Community */}
      <section className="py-16 px-4 bg-[#fffef5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[Fredoka] text-3xl font-bold mb-6 text-center">Understanding Rotunda's Planned Community Layout</h2>
          <div className="prose prose-lg max-w-none text-[#333] space-y-4">
            <p>
              Rotunda was originally platted in the early 1970s as a massive planned community by the Cavanagh
              Communities Corporation, with a distinctive circular boulevard design and an extensive network of
              interconnecting canals. That original vision created a neighborhood where nearly every residential lot
              has access to a canal or waterway, and many of those lots now hold homes with backyard pools. The
              canal proximity means Rotunda pools face elevated humidity levels, which promotes faster algae growth
              on pool walls, steps, and benches compared to fully inland pools.
            </p>
            <p>
              The canal system also affects the local water table. During Southwest Florida's rainy season from June
              through September, the water table in Rotunda rises significantly, and homeowners with in-ground pools
              can experience hydrostatic pressure issues -- the groundwater literally pushes up against the pool shell
              from below. Tiffany monitors water table conditions during the wet season and advises her Rotunda clients
              on when it is safe to drain a pool for cleaning or repairs and when it is essential to keep the pool
              filled to prevent structural damage. This kind of localized knowledge prevents costly mistakes that
              out-of-area pool companies might not even consider.
            </p>
          </div>
        </div>
      </section>

      {/* New Construction */}
      <section className="py-12 px-4 bg-[#4FC3D9]/10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="bg-[#4FC3D9] text-white p-3 rounded-xl shrink-0">
              <TrendingUp className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-[Fredoka] text-2xl font-bold mb-2">New Construction Pool Startup Specialists</h3>
              <p className="text-[#333] text-lg">
                With Rotunda's ongoing building boom, Tiffany has become the go-to pool professional for new construction
                startups in the area. When your builder finishes your pool and hands you the keys, the first thirty days
                of water chemistry are critical. New plaster needs careful pH management during the curing process -- if
                the pH climbs too high (as it naturally tends to with fresh plaster), you get calcium scaling and
                discoloration that can permanently mar the finish. Tiffany's new pool startup service includes daily
                brushing during the first two weeks, precise chemical adjustments every 48 hours, and a comprehensive
                equipment orientation so you understand how every component of your new system works. Many Rotunda
                builders specifically recommend her for this service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Well Water */}
      <section className="py-16 px-4 bg-[#fffef5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[Fredoka] text-3xl font-bold mb-6 text-center">Well Water and Municipal Water -- Rotunda Has Both</h2>
          <div className="text-[#333] text-lg space-y-4">
            <p>
              Rotunda occupies an interesting middle ground when it comes to water supply. Some sections of the community
              are connected to Charlotte County Utilities, while others -- particularly in the older, more remote sections
              of Rotunda West -- still rely on private wells. This means Tiffany encounters both types of source water
              within the same community, sometimes on the same service route.
            </p>
            <p>
              Municipal water brings its own challenges: elevated chloramine levels from water treatment can interfere
              with pool chlorine readings, and Charlotte County's utility water tends toward the hard side, contributing
              to calcium buildup over time. Well water in Rotunda typically carries moderate iron content and sulfur --
              that distinctive rotten egg smell that many well owners know all too well. Tiffany tests for total dissolved
              solids, metals, and hardness at every service visit, adjusting her treatment protocols based on your
              specific water source. She does not assume every pool in Rotunda needs the same approach, because they
              simply do not.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[Fredoka] text-3xl font-bold mb-8 text-center">Pool Services in Rotunda</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Droplets, title: 'Weekly Pool Maintenance', desc: 'Consistent chemical management customized for your water source -- whether municipal or well -- plus full cleaning and equipment checks.', link: '/services/weekly-pool-maintenance' },
              { icon: Home, title: 'New Pool Startup', desc: 'Critical first-month care for newly constructed Rotunda pools including plaster curing management, daily brushing, and equipment orientation.', link: '/services/seasonal-care' },
              { icon: Wrench, title: 'Pool Repair & Equipment', desc: 'Pump, filter, heater, and automation repairs for both brand-new systems and aging installations throughout the Rotunda community.', link: '/services/pool-repair' },
              { icon: Sparkles, title: 'Pressure Washing', desc: 'Pool deck, driveway, and screen enclosure cleaning to remove canal-humidity mold and algae buildup common in Rotunda.', link: '/services/pressure-washing' },
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

      {/* Community */}
      <section className="py-12 px-4 bg-[#fffef5]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-[Fredoka] text-2xl font-bold mb-4">Part of the Rotunda Community</h2>
          <p className="text-[#333] text-lg max-w-3xl mx-auto">
            Whether you have been in Rotunda for decades or just moved into a brand-new build off Rotonda Boulevard,
            Tiffany treats every customer like a neighbor. She knows the HOA rules that affect pool installations in
            different Rotunda sections, she understands the seasonal traffic patterns that affect scheduling, and she
            genuinely cares about keeping this growing community's pools safe, clean, and beautiful for years to come.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#dfe24b]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-[Fredoka] text-3xl md:text-4xl font-bold mb-4">Pool Care That Grows with Rotunda</h2>
          <p className="text-lg text-[#333] mb-6">
            New pool or existing one, Tif's Pool Care has the local expertise to keep your Rotunda pool in perfect condition all year long.
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
              { name: 'Englewood', path: '/areas/englewood' },
              { name: 'Port Charlotte', path: '/areas/port-charlotte' },
              { name: 'Punta Gorda', path: '/areas/punta-gorda' },
              { name: 'Boca Grande', path: '/areas/boca-grande' },
              { name: 'Arcadia', path: '/areas/arcadia' },
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
