import { Link } from 'react-router-dom'
import { Phone, MapPin, Droplets, Shield, Wrench, Key, Sparkles, Waves } from 'lucide-react'

export default function BocaGrande() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#dfe24b] to-[#f0f28a] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-[Caveat] text-xl text-[#333]/70 mb-2">Exclusive Pool Care for Gasparilla Island</p>
          <h1 className="font-[Fredoka] text-4xl md:text-5xl font-bold mb-4">Pool Service in Boca Grande, FL</h1>
          <p className="text-lg text-[#333] max-w-2xl mx-auto">
            Boca Grande on Gasparilla Island is one of Southwest Florida's most exclusive communities -- a place where
            old Florida elegance meets barrier island beauty. The pools here are as exceptional as the properties they
            belong to, and they demand a level of care that matches the island's distinguished standard.
          </p>
          <div className="flex items-center justify-center gap-2 mt-6 text-[#333]/70">
            <MapPin className="w-5 h-5" />
            <span className="font-medium">Gasparilla Island, Lee County, FL</span>
          </div>
        </div>
      </section>

      {/* Barrier Island Challenges */}
      <section className="py-16 px-4 bg-[#fffef5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[Fredoka] text-3xl font-bold mb-6 text-center">The Barrier Island Difference</h2>
          <div className="prose prose-lg max-w-none text-[#333] space-y-4">
            <p>
              Maintaining a pool on a barrier island is fundamentally different from servicing a pool on the mainland.
              On Gasparilla Island, your pool equipment is constantly bathed in salt-laden Gulf air -- not the diluted
              coastal breeze that reaches Port Charlotte or even Punta Gorda, but direct, concentrated ocean atmosphere
              that coats every surface with a fine saline film. This relentless salt exposure accelerates corrosion at
              a pace that surprises even experienced pool owners who moved to Boca Grande from inland communities.
            </p>
            <p>
              Pump motors, heater heat exchangers, chlorinator cells, automation panels, light fixtures, handrails, and
              even stainless steel ladder bolts all deteriorate faster on the island. Tiffany has developed a
              Boca Grande-specific maintenance protocol over her twenty-plus years of service that includes monthly
              corrosion inspections, protective barrier treatments for exposed metal, and proactive component
              replacement scheduling so equipment failures do not catch you off guard. She monitors equipment age and
              condition with detailed service notes for every island property, building a maintenance history that
              helps predict when a pump seal, a heater ignition module, or a chlorinator cell is approaching
              the end of its usable life.
            </p>
          </div>
        </div>
      </section>

      {/* Caretaker Service */}
      <section className="py-12 px-4 bg-[#4FC3D9]/10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="bg-[#4FC3D9] text-white p-3 rounded-xl shrink-0">
              <Key className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-[Fredoka] text-2xl font-bold mb-2">Caretaker-Style Service for Seasonal Estates</h3>
              <p className="text-[#333] text-lg">
                A significant number of Boca Grande properties are vacation homes or seasonal residences occupied
                only a few months per year. During the long off-season, these pools sit in Florida's most aggressive
                climate -- extreme heat, daily summer downpours, hurricane-season storms, and nonstop salt exposure --
                with no one checking on them day to day. Tiffany provides comprehensive caretaker-style pool service
                for absentee owners. Beyond standard chemical maintenance, this includes monitoring pool water levels
                during droughts and storms, inspecting screen enclosures after high-wind events, verifying that
                automation timers and pump schedules are functioning correctly, and coordinating with your property
                manager or house-sitter when issues arise. You receive detailed service reports and photos after
                every visit, giving you complete peace of mind no matter where in the world you are.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Standards */}
      <section className="py-16 px-4 bg-[#fffef5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[Fredoka] text-3xl font-bold mb-6 text-center">Premium Service for Premium Properties</h2>
          <div className="text-[#333] text-lg space-y-4">
            <p>
              Boca Grande pools are not typical backyard pools. Many feature imported tile, custom mosaic designs,
              infinity edges overlooking the Gulf or Charlotte Harbor, integrated spas with therapeutic jets, and
              elaborate water features. The materials and finishes used in these pools -- from glass bead plaster to
              hand-cut Bisazza tile -- require specific chemical parameters and cleaning techniques to maintain their
              beauty. Aggressive brushing that works fine on standard white plaster can damage delicate tile surfaces.
              Incorrect pH ranges that a basic pool can tolerate will etch expensive pebble finishes.
            </p>
            <p>
              Tiffany understands these nuances. Her CPO certification and two decades of experience include extensive
              work with high-end pool finishes and premium equipment brands. She treats every Boca Grande pool with
              the attentiveness its craftsmanship deserves -- testing water chemistry with professional-grade reagent
              kits rather than relying on imprecise test strips, hand-brushing delicate surfaces rather than using
              automated cleaners that could cause damage, and using only manufacturer-approved chemicals and treatments
              for specialty finishes.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[Fredoka] text-3xl font-bold mb-8 text-center">Boca Grande Pool Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Droplets, title: 'Weekly Pool Maintenance', desc: 'Premium chemical management, hand brushing of delicate finishes, equipment inspections, and detailed service reports for every visit.', link: '/services/weekly-pool-maintenance' },
              { icon: Key, title: 'Seasonal Estate Care', desc: 'Comprehensive caretaker-style pool service for absentee owners with photo updates, storm monitoring, and property manager coordination.', link: '/services/seasonal-care' },
              { icon: Wrench, title: 'Equipment & Corrosion Repair', desc: 'Proactive corrosion management, component replacement, and equipment upgrades designed for barrier island conditions.', link: '/services/pool-repair' },
              { icon: Sparkles, title: 'Pool Resurfacing', desc: 'Expert refinishing for premium pool surfaces including pebble, glass bead, and specialty tile installations.', link: '/services/pool-resurfacing' },
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

      {/* Island Access Note */}
      <section className="py-12 px-4 bg-[#fffef5]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <Waves className="w-10 h-10 text-[#4FC3D9] shrink-0 mt-1" />
            <div>
              <h3 className="font-[Fredoka] text-2xl font-bold mb-2">Reliable Island Access</h3>
              <p className="text-[#333] text-lg">
                Getting to Boca Grande means crossing the Boca Grande Causeway, and Tiffany maintains a consistent
                weekly service schedule for her island clients to ensure efficient, reliable visits. She groups Boca
                Grande appointments together to provide dedicated island service days, meaning your pool gets the full
                attention it deserves without the rushed visits that can happen when a technician is trying to squeeze in
                one island stop between mainland appointments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#dfe24b]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-[Fredoka] text-3xl md:text-4xl font-bold mb-4">Island-Caliber Pool Care for Boca Grande</h2>
          <p className="text-lg text-[#333] mb-6">
            Your Gasparilla Island property deserves a pool professional who understands barrier island demands. Contact Tiffany for a personalized service plan.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="bg-[#1a1a1a] text-[#dfe24b] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#333] hover:scale-105 transition-all">
              Request a Consultation
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
              { name: 'Port Charlotte', path: '/areas/port-charlotte' },
              { name: 'Englewood', path: '/areas/englewood' },
              { name: 'Rotunda', path: '/areas/rotunda' },
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
