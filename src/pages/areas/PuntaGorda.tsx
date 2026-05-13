import { Link } from 'react-router-dom'
import { Phone, MapPin, Droplets, Shield, Wrench, Thermometer, Sparkles, Anchor } from 'lucide-react'

export default function PuntaGorda() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#dfe24b] to-[#f0f28a] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-[Caveat] text-xl text-[#333]/70 mb-2">Premium Pool Care for Charlotte County's Crown Jewel</p>
          <h1 className="font-[Fredoka] text-4xl md:text-5xl font-bold mb-4">Pool Service in Punta Gorda, FL</h1>
          <p className="text-lg text-[#333] max-w-2xl mx-auto">
            Punta Gorda is Charlotte County's premier waterfront city -- a place where historic charm meets upscale coastal
            living. From the beautifully restored homes along Marion Avenue to the luxury estates overlooking Charlotte
            Harbor, Punta Gorda pools deserve care that matches the quality of the community they serve.
          </p>
          <div className="flex items-center justify-center gap-2 mt-6 text-[#333]/70">
            <MapPin className="w-5 h-5" />
            <span className="font-medium">Charlotte County, FL</span>
          </div>
        </div>
      </section>

      {/* Luxury Pool Care */}
      <section className="py-16 px-4 bg-[#fffef5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[Fredoka] text-3xl font-bold mb-6 text-center">Caring for Punta Gorda's Finest Pools</h2>
          <div className="prose prose-lg max-w-none text-[#333] space-y-4">
            <p>
              Punta Gorda's pool landscape reflects the city's upscale character. Walk through Burnt Store Isles, Punta
              Gorda Isles, or the gated communities along Burnt Store Road and you will find infinity-edge pools with
              harbor views, custom-tiled spas with water features, and resort-style pool areas with outdoor kitchens and
              fire pits. These are not cookie-cutter installations -- they are substantial investments that demand
              meticulous, knowledgeable care.
            </p>
            <p>
              Tiffany brings over twenty years of hands-on experience and CPO certification to every Punta Gorda property
              she services. She understands the specific demands of high-end pool systems: variable-speed pumps that need
              precise programming to balance energy efficiency with proper circulation, sophisticated automation panels
              from Pentair and Jandy that require firmware updates and sensor calibration, and heated spas where temperature
              control must be exact to protect both the heater and the plaster surface. Many pool technicians are trained
              on basic residential systems. Tiffany has the expertise to handle the complex, multi-component setups that
              Punta Gorda homeowners expect.
            </p>
          </div>
        </div>
      </section>

      {/* Post-Hurricane */}
      <section className="py-12 px-4 bg-[#4FC3D9]/10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="bg-[#4FC3D9] text-white p-3 rounded-xl shrink-0">
              <Shield className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-[Fredoka] text-2xl font-bold mb-2">Post-Charley Rebuilds: Modern Systems, Modern Expertise</h3>
              <p className="text-[#333] text-lg">
                Hurricane Charley devastated Punta Gorda in August 2004, and the rebuilding effort transformed the city's
                pool infrastructure. Many of the pools constructed during the 2005-2015 rebuild era feature modern
                energy-efficient equipment, salt chlorine generators, LED lighting systems, and automation controls that
                were cutting-edge at the time. Now, twenty years later, these systems are reaching the age where components
                need replacement or upgrading. Tiffany specializes in evaluating post-Charley pool systems, identifying
                which components still have life left and which are due for replacement, and recommending cost-effective
                upgrades that bring your system up to current standards without unnecessary expense.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Waterfront Challenges */}
      <section className="py-16 px-4 bg-[#fffef5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[Fredoka] text-3xl font-bold mb-6 text-center">Waterfront Pool Challenges in Punta Gorda</h2>
          <div className="text-[#333] text-lg space-y-4">
            <p>
              Punta Gorda sits right on Charlotte Harbor where the Peace River meets the Gulf of Mexico. That geography
              creates a constant flow of salt-laden, humid air across every waterfront property. For pool owners in Punta
              Gorda Isles, Burnt Store Isles, and the harbor-facing homes near Fishermen's Village, this means accelerated
              corrosion on pool equipment, salt deposits on tile and stone surfaces, and a persistent battle against
              airborne organic debris from the mangroves and sea grapes that line the waterfront.
            </p>
            <p>
              Tiffany's waterfront pool protocol includes more frequent equipment inspections than inland properties
              receive, protective treatments for exposed metal components, and a chemical balancing approach that accounts
              for the slightly elevated salinity that harbor-side pools naturally accumulate. She also pays close attention
              to screen enclosures on waterfront properties -- salt air weakens screen mesh and corrodes aluminum framing
              faster, and a failing enclosure dramatically increases your pool maintenance burden.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[Fredoka] text-3xl font-bold mb-8 text-center">Services for Punta Gorda Pool Owners</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Droplets, title: 'Weekly Pool Maintenance', desc: 'Comprehensive care for luxury pools including chemical balancing, brushing, skimming, and automation system checks.', link: '/services/weekly-pool-maintenance' },
              { icon: Thermometer, title: 'Spa & Heater Service', desc: 'Expert heated spa maintenance, heater tune-ups, and temperature calibration for Punta Gorda\'s high-end pool and spa combos.', link: '/services/pool-repair' },
              { icon: Sparkles, title: 'Pool Resurfacing', desc: 'Premium plaster, pebble, and tile refinishing to restore the beauty of aging Punta Gorda pools affected by salt air and sun.', link: '/services/pool-resurfacing' },
              { icon: Wrench, title: 'Equipment Upgrades', desc: 'Modernize post-Charley rebuild equipment with current variable-speed pumps, smart controls, and energy-efficient systems.', link: '/services/pool-repair' },
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

      {/* Historic Downtown */}
      <section className="py-16 px-4 bg-[#fffef5]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <Anchor className="w-10 h-10 text-[#4FC3D9] shrink-0 mt-1" />
            <div>
              <h2 className="font-[Fredoka] text-2xl font-bold mb-3">Proud to Serve the Fishermen's Village Community</h2>
              <p className="text-[#333] text-lg">
                From the charming shops at Fishermen's Village to the brick-lined streets of historic downtown, Punta Gorda
                has a character all its own. Tiffany is proud to serve homeowners throughout this special city. Whether your
                pool overlooks the harbor from a Burnt Store estate or sits behind a cozy bungalow near Gilchrist Park,
                you will receive the same attentive, expert care -- delivered with the warmth and personal touch that Punta
                Gorda residents appreciate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#dfe24b]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-[Fredoka] text-3xl md:text-4xl font-bold mb-4">Elevate Your Punta Gorda Pool Experience</h2>
          <p className="text-lg text-[#333] mb-6">
            Your luxury pool deserves luxury care. Contact Tiffany today for a personalized service plan designed around your specific pool and lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="bg-[#1a1a1a] text-[#dfe24b] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#333] hover:scale-105 transition-all">
              Schedule a Consultation
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
              { name: 'Boca Grande', path: '/areas/boca-grande' },
              { name: 'Rotunda', path: '/areas/rotunda' },
              { name: 'Englewood', path: '/areas/englewood' },
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
