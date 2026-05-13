import { Link } from 'react-router-dom'
import { Phone, MapPin, Droplets, Shield, Wrench, AlertTriangle, Sparkles, TreePine } from 'lucide-react'

export default function Wauchula() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#dfe24b] to-[#f0f28a] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-[Caveat] text-xl text-[#333]/70 mb-2">Expert Pool Care in the Heart of Hardee County</p>
          <h1 className="font-[Fredoka] text-4xl md:text-5xl font-bold mb-4">Pool Service in Wauchula, FL</h1>
          <p className="text-lg text-[#333] max-w-2xl mx-auto">
            Wauchula, the Hardee County seat, sits at the center of one of Florida's richest agricultural regions.
            Surrounded by citrus groves and cattle ranches along the Peace River, this close-knit rural community
            faces pool maintenance challenges that most service providers are not equipped to handle -- especially
            the notoriously mineral-heavy well water.
          </p>
          <div className="flex items-center justify-center gap-2 mt-6 text-[#333]/70">
            <MapPin className="w-5 h-5" />
            <span className="font-medium">Hardee County, FL</span>
          </div>
        </div>
      </section>

      {/* Well Water Challenges */}
      <section className="py-16 px-4 bg-[#fffef5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[Fredoka] text-3xl font-bold mb-6 text-center">Wauchula's Well Water: A Pool Care Challenge Like No Other</h2>
          <div className="prose prose-lg max-w-none text-[#333] space-y-4">
            <p>
              If you own a pool in Wauchula, there is an excellent chance your home draws from a private well -- and
              Hardee County well water is among the most challenging in all of Southwest Florida when it comes to pool
              chemistry. The aquifer beneath Hardee County runs through phosphate-rich geological formations that load
              the water with dissolved iron, manganese, calcium, and sometimes copper. When this water enters your pool,
              these metals react with chlorine and pH fluctuations to create stubborn staining that can seem impossible
              to remove.
            </p>
            <p>
              Iron produces the rusty orange and reddish-brown stains that Wauchula pool owners know all too well --
              they appear on plaster, grout lines, steps, and even inside skimmer baskets. Manganese creates darker
              brown or purplish-black discoloration. High calcium causes white crusty deposits on tile, inside pipes,
              and on heat exchanger surfaces. Left unmanaged, these minerals do not just look bad -- they physically
              damage your pool's plaster surface, shorten the life of your filter media, and gum up equipment
              internals.
            </p>
            <p>
              Tiffany has spent over two decades mastering the art of managing mineral-heavy well water in pools.
              Her approach for Wauchula clients includes regular sequestrant treatments that bind dissolved metals
              before they oxidize and stain, careful pH control in the 7.2 to 7.4 range where metal precipitation
              is minimized, periodic ascorbic acid treatments to lift existing iron stains without draining the pool,
              and filter cleaning schedules calibrated to the higher-than-normal particulate load that well water
              produces. She also advises clients on pre-filtration options for their fill water -- such as hose-end
              filters with metal-trapping cartridges -- that can dramatically reduce the mineral load entering the
              pool during top-offs.
            </p>
          </div>
        </div>
      </section>

      {/* Rural Service Gap */}
      <section className="py-12 px-4 bg-[#4FC3D9]/10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="bg-[#4FC3D9] text-white p-3 rounded-xl shrink-0">
              <AlertTriangle className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-[Fredoka] text-2xl font-bold mb-2">Filling the Rural Service Gap</h3>
              <p className="text-[#333] text-lg">
                Wauchula and Hardee County have historically been underserved by professional pool care companies.
                Most pool services are headquartered on the coast in Charlotte or Sarasota counties and consider
                the drive to Wauchula too far to be worthwhile. That leaves Hardee County pool owners with few
                options -- often relying on general handyman services or attempting to manage complex water chemistry
                on their own, which frequently leads to staining, algae outbreaks, and premature equipment failure.
                Tiffany is based in nearby Arcadia, just a short drive up Highway 17, and she has committed to
                serving the Wauchula community with the same professionalism and reliability that her coastal
                clients receive. Hardee County pool owners deserve expert care, and Tif's Pool Care delivers it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Agricultural Environment */}
      <section className="py-16 px-4 bg-[#fffef5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[Fredoka] text-3xl font-bold mb-6 text-center">Citrus Country Pool Maintenance</h2>
          <div className="text-[#333] text-lg space-y-4">
            <p>
              Wauchula sits in the heart of Florida's citrus belt, and the surrounding groves create a unique
              maintenance environment for pool owners. During citrus bloom season in the spring, fine pollen
              blankets everything -- including your pool surface, skimmer baskets, and filter media. This organic
              load consumes chlorine rapidly and can turn a perfectly balanced pool cloudy within days if not managed
              proactively. In fall and winter, falling leaves and fruit from nearby citrus trees create additional
              debris challenges, particularly for pools without screen enclosures.
            </p>
            <p>
              The agricultural landscape also means that fertilizer and pesticide applications on nearby groves can
              affect the local water table, occasionally introducing phosphates and nitrates into well water. These
              nutrients act as algae fertilizer in your pool, making algae blooms more persistent and harder to
              treat than in non-agricultural areas. Tiffany tests for phosphate levels as part of her standard
              Wauchula service protocol and uses targeted phosphate removers when levels climb above acceptable
              thresholds -- a step that many pool services skip entirely because they do not understand the
              agricultural context.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[Fredoka] text-3xl font-bold mb-8 text-center">Pool Services in Wauchula</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Droplets, title: 'Weekly Pool Maintenance', desc: 'Specialized well water management including sequestrant treatments, metal stain prevention, and phosphate monitoring for agricultural runoff.', link: '/services/weekly-pool-maintenance' },
              { icon: Sparkles, title: 'Stain Removal & Prevention', desc: 'Ascorbic acid treatments, chelation protocols, and ongoing metal sequestration to combat Hardee County\'s iron-rich well water.', link: '/services/pool-resurfacing' },
              { icon: Wrench, title: 'Pool Repair & Equipment', desc: 'Equipment repair and replacement for systems damaged by mineral buildup, plus filter upgrades to handle Wauchula\'s demanding water quality.', link: '/services/pool-repair' },
              { icon: Shield, title: 'Emergency Pool Service', desc: 'Rapid response for algae outbreaks, equipment failures, and storm damage in underserved Hardee County.', link: '/services/emergency-service' },
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

      {/* Peace River */}
      <section className="py-12 px-4 bg-[#fffef5]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <TreePine className="w-10 h-10 text-[#4FC3D9] shrink-0 mt-1" />
            <div>
              <h3 className="font-[Fredoka] text-2xl font-bold mb-2">Peace River Corridor Service</h3>
              <p className="text-[#333] text-lg">
                The Peace River winds through Wauchula and connects it to Arcadia, Zolfo Springs, and Bowling Green
                along one of Florida's most scenic natural corridors. Properties along the river enjoy beautiful
                surroundings but also deal with increased organic debris, fluctuating groundwater levels, and the
                occasional post-storm flooding that introduces river sediment into pool areas. Tiffany services
                properties throughout this corridor and understands the specific demands that river-adjacent
                locations place on pool maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#dfe24b]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-[Fredoka] text-3xl md:text-4xl font-bold mb-4">Hardee County Deserves Expert Pool Care</h2>
          <p className="text-lg text-[#333] mb-6">
            Do not settle for less just because you are in a rural area. Tiffany brings 20+ years of CPO-certified expertise to every Wauchula pool she services.
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
              { name: 'Arcadia', path: '/areas/arcadia' },
              { name: 'Port Charlotte', path: '/areas/port-charlotte' },
              { name: 'Punta Gorda', path: '/areas/punta-gorda' },
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
