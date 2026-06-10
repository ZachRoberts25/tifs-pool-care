import { Link } from 'react-router-dom'
import { Phone, ChevronRight, Paintbrush, Eye, Clock, Layers, Shield, Sparkles } from 'lucide-react'

export default function PoolResurfacing() {
  return (
    <div className="bg-[#fffef5]">
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-[#dfe24b] to-[#f0f28a] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-[Caveat] text-xl text-[#555] mb-2">Give your pool a fresh start</p>
          <h1 className="font-[Fredoka] text-4xl md:text-5xl font-bold text-[#222] mb-4">
            Pool Resurfacing in Punta Gorda, Port Charlotte & Southwest Florida
          </h1>
          <p className="font-[Nunito] text-lg text-[#333] max-w-2xl mx-auto">
            Is your pool surface rough, stained, or showing its age? Tif's Pool Care provides expert pool
            resurfacing services to restore your pool's beauty and protect it for years to come. Serving
            Arcadia, Boca Grande, Rotunda, Englewood, Wauchula, and all of Southwest Florida.
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
          <h2 className="font-[Fredoka] text-3xl font-bold text-[#222] mb-6">
            What Is Pool Resurfacing and Why Does It Matter?
          </h2>
          <div className="font-[Nunito] text-[#444] space-y-4 text-lg leading-relaxed">
            <p>
              Pool resurfacing is the process of applying a new interior finish to your pool's shell. Over time,
              every pool surface — whether it is standard plaster, pebble, quartz, or a specialty finish — wears
              down due to chemical exposure, water movement, UV rays, and the natural aging process. In Southwest
              Florida, where pools are used year-round and exposed to intense sun and fluctuating water chemistry,
              pool surfaces often need resurfacing sooner than in cooler climates.
            </p>
            <p>
              A deteriorating pool surface isn't just an aesthetic issue. Rough, pitted, or etched plaster can
              harbor algae, making your pool harder and more expensive to maintain. Exposed aggregate can scratch
              bare skin and damage pool cleaning equipment. Cracks in the surface can lead to structural leaks
              that compromise the integrity of the pool shell. Resurfacing restores both the look and function
              of your pool, giving you a smooth, beautiful, easy-to-maintain surface that can last 10 to 20 years
              depending on the finish you choose.
            </p>
            <p>
              Tiffany at Tif's Pool Care has over 20 years of experience in the pool industry and has overseen
              countless resurfacing projects across Southwest Florida. Her CPO (Certified Pool Operator) certification
              means she understands not just the cosmetic side of resurfacing but also how different finish materials
              interact with water chemistry, equipment, and Florida's unique climate conditions. She will guide you
              through the entire process — from choosing the right finish for your pool and budget to managing
              the startup process that's critical for a long-lasting surface.
            </p>
          </div>
        </div>
      </section>

      {/* Signs You Need Resurfacing */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[Fredoka] text-3xl font-bold text-[#222] mb-2 text-center">
            Signs Your Pool Needs Resurfacing
          </h2>
          <p className="font-[Caveat] text-xl text-[#4FC3D9] text-center mb-10">
            Don't ignore these warning signs
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: <Eye className="w-6 h-6 text-[#4FC3D9]" />,
                title: 'Visible Staining',
                description:
                  'Persistent stains that won\'t come out with chemical treatment or acid washing. Brown, blue-green, or dark grey stains often indicate mineral deposits (iron, copper, or manganese) that have penetrated the plaster surface. In areas using well water, like Arcadia and Wauchula, these stains are particularly common.',
              },
              {
                icon: <Shield className="w-6 h-6 text-[#4FC3D9]" />,
                title: 'Rough or Pitted Surface',
                description:
                  'If running your hand along the pool wall feels like sandpaper, or you can see tiny craters and pits in the plaster, the surface has eroded. This is often caused by years of slightly aggressive (low pH) water chemistry. A rough surface is uncomfortable for swimmers and creates countless tiny hiding spots for algae.',
              },
              {
                icon: <Layers className="w-6 h-6 text-[#4FC3D9]" />,
                title: 'Flaking or Peeling',
                description:
                  'Plaster delamination — where the surface layer separates from the concrete shell underneath — creates visible flakes, chips, and bare spots in the finish. This is a structural issue that gets worse over time and cannot be fixed with a patch. Once delamination begins, full resurfacing is the proper remedy.',
              },
              {
                icon: <Sparkles className="w-6 h-6 text-[#4FC3D9]" />,
                title: 'Persistent Algae Problems',
                description:
                  'If you or your pool service professional is constantly battling algae despite proper chemical maintenance, the problem may be the surface itself. A deteriorated, porous surface harbors algae spores in places where chlorine cannot reach them, leading to recurring blooms no matter how much you shock the pool.',
              },
              {
                icon: <Clock className="w-6 h-6 text-[#4FC3D9]" />,
                title: 'Age of the Surface',
                description:
                  'Standard white plaster typically lasts 7-12 years in Florida conditions. If your pool was last resurfaced (or built) more than a decade ago, it may be approaching the end of its useful life even if it still looks acceptable. Proactive resurfacing before the surface fails completely allows you to plan the project on your timeline and budget.',
              },
              {
                icon: <Paintbrush className="w-6 h-6 text-[#4FC3D9]" />,
                title: 'Fading Color',
                description:
                  'Colored plaster, pebble, and quartz finishes can fade significantly over time due to UV exposure and chemical wear. If your once-vibrant blue pool now looks washed out or patchy, resurfacing with a new color or upgraded finish material can bring it back to life — or give it a completely new look.',
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

      {/* Types of Finishes */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[Fredoka] text-3xl font-bold text-[#222] mb-2 text-center">
            Pool Finish Options
          </h2>
          <p className="font-[Caveat] text-xl text-[#4FC3D9] text-center mb-10">
            Choose the perfect look for your pool
          </p>
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 border border-[#e8e8d0]">
              <h3 className="font-[Fredoka] text-2xl font-bold text-[#222] mb-3">Standard White Plaster</h3>
              <div className="font-[Nunito] text-[#555] space-y-2 leading-relaxed">
                <p>
                  The classic, time-tested pool finish. White marcite plaster gives your pool that bright, clean,
                  traditional look with sparkling blue water. It is the most affordable resurfacing option and works
                  well for any pool style. Standard plaster typically lasts 7-12 years in Southwest Florida with
                  proper water chemistry maintenance.
                </p>
                <p>
                  <strong>Best for:</strong> Budget-conscious homeowners who want a clean, classic look and plan
                  to maintain good water chemistry.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-[#e8e8d0]">
              <h3 className="font-[Fredoka] text-2xl font-bold text-[#222] mb-3">Colored Plaster</h3>
              <div className="font-[Nunito] text-[#555] space-y-2 leading-relaxed">
                <p>
                  Colored plaster uses mineral pigments mixed into the plaster to create shades of blue, grey,
                  black, tan, or other colors. A medium blue plaster creates a deeper, more vivid blue water color.
                  Darker shades like charcoal or black create a dramatic, lagoon-like appearance and can make your
                  pool water look deeper and more luxurious.
                </p>
                <p>
                  <strong>Best for:</strong> Homeowners who want to customize their pool's water color at a moderate
                  price point.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-[#e8e8d0]">
              <h3 className="font-[Fredoka] text-2xl font-bold text-[#222] mb-3">Quartz Aggregate</h3>
              <div className="font-[Nunito] text-[#555] space-y-2 leading-relaxed">
                <p>
                  Quartz finishes blend colored quartz crystals into the plaster for a beautiful, durable surface
                  that sparkles in the sunlight. Quartz is significantly harder and more stain-resistant than standard
                  plaster, with an expected lifespan of 12-20 years. Popular brands include Diamond Brite and Hydrazzo.
                  The quartz crystals come in many color combinations, allowing for a customized look.
                </p>
                <p>
                  <strong>Best for:</strong> Homeowners looking for a mid-range option that balances beauty, durability,
                  and value.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-[#e8e8d0]">
              <h3 className="font-[Fredoka] text-2xl font-bold text-[#222] mb-3">Pebble Finish</h3>
              <div className="font-[Nunito] text-[#555] space-y-2 leading-relaxed">
                <p>
                  Pebble finishes (such as PebbleTec, PebbleSheen, or PebbleFina) use small, smooth pebbles or
                  stones embedded in the plaster to create a natural, textured surface. These are the most durable
                  pool finishes available, with lifespans of 15-25+ years. Pebble finishes are highly resistant
                  to staining, etching, and chemical wear. They come in a wide range of natural color blends that
                  create stunning water colors from Caribbean blue to tropical green to midnight dark.
                </p>
                <p>
                  <strong>Best for:</strong> Homeowners who want the longest-lasting, most durable finish and are
                  willing to invest in premium quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[Fredoka] text-3xl font-bold text-[#222] mb-8 text-center">
            The Resurfacing Process
          </h2>
          <div className="space-y-6">
            {[
              {
                step: '1',
                title: 'Consultation & Finish Selection',
                description:
                  'Tiffany visits your pool to assess the current surface condition, discuss your aesthetic preferences and budget, and recommend the best finish options. She will show you samples, explain the pros and cons of each material, and help you make an informed decision.',
              },
              {
                step: '2',
                title: 'Pool Draining & Preparation',
                description:
                  'The pool is drained and the old surface is prepared. Depending on the condition, this may involve chipping away loose or delaminated plaster, repairing any structural cracks in the shell, and creating a clean bonding surface for the new material. This is a critical step — proper prep is essential for a long-lasting finish.',
              },
              {
                step: '3',
                title: 'Surface Application',
                description:
                  'The new finish material is mixed and hand-applied to the entire pool interior by experienced plasterers. This is skilled work that requires proper technique, timing, and conditions. The application is typically completed in a single day to ensure a consistent, seamless finish.',
              },
              {
                step: '4',
                title: 'Fill & Startup Process',
                description:
                  'Immediately after application, the pool is filled with water. The startup process over the following 2-4 weeks is one of the most critical phases. Tiffany manages this process carefully — testing and adjusting water chemistry daily to ensure the new surface cures properly, which directly affects its longevity and appearance. Improper startup is one of the leading causes of premature surface failure, which is why having a CPO-certified professional manage this phase is so valuable.',
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#4FC3D9] rounded-full flex items-center justify-center">
                  <span className="font-[Fredoka] text-xl font-bold text-white">{item.step}</span>
                </div>
                <div>
                  <h3 className="font-[Fredoka] text-xl font-semibold text-[#222] mb-1">{item.title}</h3>
                  <p className="font-[Nunito] text-[#555] leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[Fredoka] text-3xl font-bold text-[#222] mb-2 text-center">
            Frequently Asked Questions
          </h2>
          <p className="font-[Caveat] text-xl text-[#4FC3D9] text-center mb-10">
            Pool resurfacing questions answered
          </p>
          <div className="space-y-6">
            {[
              {
                question: 'How long does pool resurfacing take?',
                answer:
                  'The actual resurfacing application is typically completed in one day. However, the full process — including draining, surface preparation, application, refilling, and the critical 2-4 week startup period — takes approximately 3-5 weeks total. Weather can affect timing, as rain during application is not ideal. Tiffany coordinates the scheduling to minimize downtime and works with you to plan around your schedule.',
              },
              {
                question: 'How much does pool resurfacing cost?',
                answer:
                  'Costs vary significantly based on pool size, the condition of the existing surface, and the finish material you choose. Standard white plaster is the most affordable option, while premium pebble finishes are at the higher end. We provide free, detailed quotes so you know exactly what to expect. Tiffany will also discuss which finish offers the best value for your situation — sometimes spending a bit more upfront on a durable finish saves money over the long term by lasting years longer.',
              },
              {
                question: 'Can I change my pool\'s color when resurfacing?',
                answer:
                  'Absolutely! Resurfacing is the perfect opportunity to change the look of your pool. If you have always had a white plaster pool and want to try a deeper blue, a natural pebble look, or even a dramatic dark finish, resurfacing gives you a blank canvas. Tiffany can show you samples and help you visualize how different finishes will change the look of your water.',
              },
              {
                question: 'What happens if I don\'t resurface when needed?',
                answer:
                  'Delaying resurfacing when the surface is significantly deteriorated can lead to escalating problems: recurring algae issues that cost more in chemicals, rough surfaces that damage automatic cleaners and scratch swimmers, potential leaks from cracks that penetrate the shell, and an increasingly unattractive pool that you\'re less inclined to use and enjoy. Addressing the issue sooner rather than later often saves money and headache in the long run.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border border-[#e8e8d0]">
                <h3 className="font-[Fredoka] text-lg font-semibold text-[#222] mb-3">{faq.question}</h3>
                <p className="font-[Nunito] text-[#555] leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-[Fredoka] text-3xl font-bold text-[#222] mb-8">Related Services</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link
              to="/services/pool-repair"
              className="bg-[#fffef5] rounded-2xl p-6 border border-[#e8e8d0] hover:border-[#4FC3D9] transition-colors group"
            >
              <h3 className="font-[Fredoka] text-lg font-semibold text-[#222] group-hover:text-[#4FC3D9] transition-colors">
                Pool Repair
              </h3>
              <p className="font-[Nunito] text-sm text-[#666] mt-2">
                Equipment and plumbing repairs
              </p>
            </Link>
            <Link
              to="/services/seasonal-care"
              className="bg-[#fffef5] rounded-2xl p-6 border border-[#e8e8d0] hover:border-[#4FC3D9] transition-colors group"
            >
              <h3 className="font-[Fredoka] text-lg font-semibold text-[#222] group-hover:text-[#4FC3D9] transition-colors">
                Seasonal Care
              </h3>
              <p className="font-[Nunito] text-sm text-[#666] mt-2">
                Year-round programs for Florida pools
              </p>
            </Link>
            <Link
              to="/services/weekly-pool-maintenance"
              className="bg-[#fffef5] rounded-2xl p-6 border border-[#e8e8d0] hover:border-[#4FC3D9] transition-colors group"
            >
              <h3 className="font-[Fredoka] text-lg font-semibold text-[#222] group-hover:text-[#4FC3D9] transition-colors">
                Weekly Maintenance
              </h3>
              <p className="font-[Nunito] text-sm text-[#666] mt-2">
                Protect your new surface with proper care
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-[#dfe24b]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-[Caveat] text-xl text-[#555] mb-2">Your pool deserves a fresh new look</p>
          <h2 className="font-[Fredoka] text-3xl md:text-4xl font-bold text-[#222] mb-4">
            Ready to Resurface Your Pool?
          </h2>
          <p className="font-[Nunito] text-lg text-[#444] mb-8 max-w-xl mx-auto">
            Get a free consultation and quote from Tiffany. With 20+ years of experience and CPO certification,
            she'll help you choose the perfect finish and manage the entire process from start to finish.
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
