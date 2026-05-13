import { Link } from 'react-router-dom'
import { Phone, MapPin, Droplets, Shield, Wrench, Sparkles, Users, Waves } from 'lucide-react'

export default function Englewood() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#dfe24b] to-[#f0f28a] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-[Caveat] text-xl text-[#333]/70 mb-2">Where Two Counties Meet the Gulf</p>
          <h1 className="font-[Fredoka] text-4xl md:text-5xl font-bold mb-4">Pool Service in Englewood, FL</h1>
          <p className="text-lg text-[#333] max-w-2xl mx-auto">
            Englewood straddles the Charlotte-Sarasota county line and stretches from the mainland to the
            stunning shores of Englewood Beach on Manasota Key. This unique geography creates a community
            where beach-side salt air, sandy soil, and a wonderful mix of year-round residents and seasonal
            visitors all shape what your pool needs to stay beautiful.
          </p>
          <div className="flex items-center justify-center gap-2 mt-6 text-[#333]/70">
            <MapPin className="w-5 h-5" />
            <span className="font-medium">Charlotte & Sarasota Counties, FL</span>
          </div>
        </div>
      </section>

      {/* Two-County Expertise */}
      <section className="py-16 px-4 bg-[#fffef5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[Fredoka] text-3xl font-bold mb-6 text-center">Two Counties, One Expert Pool Service</h2>
          <div className="prose prose-lg max-w-none text-[#333] space-y-4">
            <p>
              Englewood is a community that does not fit neatly into one county -- the dividing line between Charlotte
              County and Sarasota County runs right through the heart of town. This dual-county identity is more than
              trivia for pool owners. It means different water utility providers depending on which side of the line your
              home sits. Properties in the Charlotte County portion of Englewood typically receive water from Charlotte
              County Utilities, while Sarasota County properties may be on Sarasota County water or private wells. Each
              source has different mineral profiles, hardness levels, and treatment chemicals that directly affect your
              pool chemistry.
            </p>
            <p>
              Tiffany has been servicing pools on both sides of the Englewood divide for over twenty years. She knows
              that a pool on Pine Street in the Charlotte County section will have different baseline water chemistry
              than a pool on Beach Road in the Sarasota County section, even though the two properties might be
              less than a mile apart. This granular local knowledge is something you will not find on a corporate pool
              company's service manual. She tests and adjusts specifically for your water source, your location, and
              your pool's individual characteristics -- not a county-wide average.
            </p>
          </div>
        </div>
      </section>

      {/* Coastal Impact */}
      <section className="py-12 px-4 bg-[#4FC3D9]/10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="bg-[#4FC3D9] text-white p-3 rounded-xl shrink-0">
              <Waves className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-[Fredoka] text-2xl font-bold mb-2">Englewood Beach Proximity: Salt Air and Sandy Soil</h3>
              <p className="text-[#333] text-lg">
                Englewood Beach on Manasota Key is one of the area's most beloved stretches of Gulf coast, and the
                prevailing sea breeze carries salt-laden air well inland across the Englewood community. Properties
                within a few miles of the coast experience measurable salt deposition on pool equipment, screen enclosures,
                and pool deck surfaces. This accelerates corrosion on pump housings, heater heat exchangers, and
                automation control boards. Tiffany includes salt-air corrosion monitoring as a standard part of her
                Englewood service visits, identifying early warning signs before a component fails unexpectedly.
                Additionally, Englewood's sandy soil creates challenges for pool deck stability -- sand shifts and settles
                over time, causing pool decks to crack, pavers to become uneven, and occasionally disturbing plumbing
                lines beneath the surface.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Mix */}
      <section className="py-16 px-4 bg-[#fffef5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[Fredoka] text-3xl font-bold mb-6 text-center">Serving Both Year-Round Residents and Seasonal Visitors</h2>
          <div className="text-[#333] text-lg space-y-4">
            <p>
              Englewood's population swells during the winter season as snowbirds from the Midwest and Northeast settle
              into their Florida homes from November through April. Then the community quiets down for the summer months,
              leaving behind the dedicated year-round residents who weather the heat and hurricanes. This seasonal rhythm
              creates two very different service needs that Tiffany handles seamlessly.
            </p>
            <p>
              For year-round residents, she provides consistent weekly maintenance that adapts to Florida's dramatic
              seasonal shifts -- lighter chemical loads during the mild winter months, heavier algaecide and chlorine
              demand during the sweltering summer, and special attention during the fall hurricane season when storms can
              dump massive amounts of debris, rainwater, and even contaminated floodwater into your pool overnight. For
              seasonal residents, Tiffany offers comprehensive caretaker packages that keep your pool maintained during
              the months you are away, with opening and closing services that transition your pool smoothly between
              occupied and unoccupied modes.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[Fredoka] text-3xl font-bold mb-8 text-center">Pool Services in Englewood</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Droplets, title: 'Weekly Pool Maintenance', desc: 'Tailored chemical management for your specific water source and location within the Englewood community, plus full cleaning service.', link: '/services/weekly-pool-maintenance' },
              { icon: Users, title: 'Seasonal Resident Packages', desc: 'Year-round care for snowbird properties including opening/closing services, storm monitoring, and monthly photo updates.', link: '/services/seasonal-care' },
              { icon: Wrench, title: 'Pool Repair & Equipment', desc: 'Corrosion repair, equipment replacement, and system troubleshooting for coastal and inland Englewood pools alike.', link: '/services/pool-repair' },
              { icon: Shield, title: 'Pressure Washing', desc: 'Remove salt deposits, algae, and mold from pool decks, enclosures, and driveways in Englewood\'s humid coastal climate.', link: '/services/pressure-washing' },
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

      {/* Local Touch */}
      <section className="py-12 px-4 bg-[#fffef5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[Fredoka] text-2xl font-bold mb-4 text-center">The Englewood Spirit, Reflected in Our Service</h2>
          <p className="text-[#333] text-lg text-center max-w-3xl mx-auto">
            Englewood has always had a laid-back, Old Florida feel that sets it apart from the flashier Gulf Coast
            communities. Tiffany matches that energy -- friendly, down-to-earth, and genuinely invested in making
            sure every customer feels like a priority. She knows her Englewood customers by name, remembers their
            pool's quirks, and treats every property as if it were her own. That personal connection is something a
            large franchise operation simply cannot replicate, and it is why Englewood pool owners keep coming back
            to Tif's Pool Care year after year.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#dfe24b]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-[Fredoka] text-3xl md:text-4xl font-bold mb-4">Englewood's Go-To Pool Care Professional</h2>
          <p className="text-lg text-[#333] mb-6">
            From Manasota Key to the inland neighborhoods, Tif's Pool Care delivers expert, personalized pool service across all of Englewood.
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
              { name: 'Rotunda', path: '/areas/rotunda' },
              { name: 'Port Charlotte', path: '/areas/port-charlotte' },
              { name: 'Boca Grande', path: '/areas/boca-grande' },
              { name: 'Punta Gorda', path: '/areas/punta-gorda' },
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
