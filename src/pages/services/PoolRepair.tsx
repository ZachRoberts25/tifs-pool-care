import { Link } from 'react-router-dom'
import { Phone, ChevronRight, Wrench, Search, Droplets, Settings, AlertTriangle, CheckCircle } from 'lucide-react'
import { faqsByPath } from '../../seo/faqs'

export default function PoolRepair() {
  return (
    <div className="bg-[#fffef5]">
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-[#dfe24b] to-[#f0f28a] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-[Caveat] text-xl text-[#555] mb-2">Fix it right the first time</p>
          <h1 className="font-[Fredoka] text-4xl md:text-5xl font-bold text-[#222] mb-4">
            Pool Repair Services in Port Charlotte, Punta Gorda & Southwest Florida
          </h1>
          <p className="font-[Nunito] text-lg text-[#333] max-w-2xl mx-auto">
            From noisy pumps and clogged filters to mysterious leaks and equipment malfunctions, Tif's Pool Care
            diagnoses and repairs common pool problems so you can get back to enjoying your pool. Proudly serving
            Arcadia, Boca Grande, Rotunda, Englewood, Wauchula, and surrounding communities.
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
            Why Timely Pool Repairs Matter in Southwest Florida
          </h2>
          <div className="font-[Nunito] text-[#444] space-y-4 text-lg leading-relaxed">
            <p>
              Your pool is a system of interconnected parts — the pump, filter, plumbing, valves, seals, and
              electrical components all work together to keep your water clean and circulating. When one part
              starts to fail, it puts extra stress on everything else. A small leak in a pump lid seal today
              can lead to a burned-out motor tomorrow. A filter that is not working efficiently forces the pump
              to work harder, shortening its lifespan. In Southwest Florida's demanding climate, where pools
              run year-round and equipment faces constant heat, humidity, and salt air exposure, small problems
              become big problems faster than you might expect.
            </p>
            <p>
              Tiffany at Tif's Pool Care has over 20 years of hands-on experience diagnosing and repairing
              common pool equipment issues. Her CPO (Certified Pool Operator) certification gives her a deep
              understanding of how every component in your pool system works together, which means she does
              not just treat symptoms — she finds the root cause. Whether your pump is making a grinding noise,
              your filter pressure is running abnormally high, or you are noticing unexplained water loss,
              Tiffany has the knowledge and experience to figure out what is going on and get it fixed.
            </p>
            <p>
              As a growing pool care business, Tiffany currently handles minor to moderate repairs herself and
              is expanding this side of the operation. For larger structural or electrical projects that require
              specialized licensing, she works with trusted local contractors and can coordinate the entire
              process on your behalf. Either way, you get one point of contact — someone who knows your pool
              inside and out — managing the repair from diagnosis to completion.
            </p>
          </div>
        </div>
      </section>

      {/* Common Repairs */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[Fredoka] text-3xl font-bold text-[#222] mb-2 text-center">
            Common Pool Repairs We Handle
          </h2>
          <p className="font-[Caveat] text-xl text-[#4FC3D9] text-center mb-10">
            Honest diagnosis, reliable fixes
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Settings className="w-8 h-8 text-[#4FC3D9]" />,
                title: 'Pump Repair & Replacement',
                description:
                  'The pool pump is the heart of your circulation system, and it takes a beating in Florida\'s heat. We diagnose and repair common pump issues including noisy bearings, air leaks that cause the pump to lose prime, cracked pump lids and housings, worn shaft seals, and failed capacitors. If a pump is beyond repair, Tiffany can recommend the right replacement based on your pool\'s size and plumbing — including energy-efficient variable speed options that can save you hundreds of dollars per year on electricity.',
              },
              {
                icon: <Droplets className="w-8 h-8 text-[#4FC3D9]" />,
                title: 'Leak Detection & Repair',
                description:
                  'Losing water faster than normal evaporation can explain? You may have a leak in your pool\'s plumbing, equipment connections, or the pool shell itself. Tiffany performs careful visual inspections and equipment-side leak checks to pinpoint the source. Common culprits include deteriorated O-rings, cracked unions and fittings, worn valve seals, and loose equipment connections. Catching and fixing a leak early prevents water damage, high water bills, and chemical waste.',
              },
              {
                icon: <Search className="w-8 h-8 text-[#4FC3D9]" />,
                title: 'Filter Repair & Maintenance',
                description:
                  'Whether you have a cartridge, sand, or DE (diatomaceous earth) filter, it requires regular maintenance and occasional repair. We handle filter cleanings, cartridge replacements, multiport valve repairs, broken laterals in sand filters, and cracked filter tanks. A properly functioning filter is essential for clear water and takes significant load off your chemical program. If your filter pressure gauge constantly reads high or your water will not clear up, the filter is usually the first place to look.',
              },
              {
                icon: <Wrench className="w-8 h-8 text-[#4FC3D9]" />,
                title: 'Equipment Diagnosis & Troubleshooting',
                description:
                  'Sometimes you know something is wrong but you are not sure what. Maybe your pool water is cloudy despite proper chemical levels, your pump seems to be running but the water is barely moving, or your heater is not firing. Tiffany\'s two decades of experience mean she has seen virtually every pool problem imaginable. She will methodically check your system, identify the issue, explain it to you in plain language, and give you honest options for fixing it — no unnecessary upsells.',
              },
              {
                icon: <AlertTriangle className="w-8 h-8 text-[#4FC3D9]" />,
                title: 'Valve & Plumbing Repairs',
                description:
                  'Pool plumbing is under constant pressure and exposure to chemicals, and over time valves, unions, fittings, and pipes can crack, leak, or seize up. We repair and replace diverter valves, check valves, union fittings, and accessible plumbing connections. In older homes throughout Arcadia, Wauchula, and Port Charlotte, aging PVC plumbing is a common source of problems — especially after years of Florida sun exposure on any above-ground sections.',
              },
              {
                icon: <CheckCircle className="w-8 h-8 text-[#4FC3D9]" />,
                title: 'Minor Equipment Upgrades',
                description:
                  'Sometimes a repair is also an opportunity to upgrade. If your single-speed pump dies, we can help you step up to a variable-speed model that pays for itself in energy savings. Need a new timer? Consider a smart controller that lets you manage your pool from your phone. Tiffany stays current on pool technology and can advise you on upgrades that make sense for your pool, your budget, and the Southwest Florida climate.',
              },
            ].map((item, index) => (
              <div key={index} className="bg-[#fffef5] rounded-2xl p-6 border border-[#e8e8d0]">
                <div className="mb-4">{item.icon}</div>
                <h3 className="font-[Fredoka] text-xl font-semibold text-[#222] mb-2">{item.title}</h3>
                <p className="font-[Nunito] text-[#555] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Repair Approach */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[Fredoka] text-3xl font-bold text-[#222] mb-6 text-center">
            Our Approach to Pool Repairs
          </h2>
          <div className="font-[Nunito] text-[#444] space-y-4 text-lg leading-relaxed">
            <p>
              At Tif's Pool Care, we believe in honest, straightforward service. When Tiffany comes to diagnose
              a problem, she will explain exactly what she finds, what caused it, and what your options are. If
              a repair is something she can handle on the spot, she will take care of it right then and there.
              If the issue requires parts to be ordered or a specialist to be brought in, she will coordinate
              the entire process so you do not have to chase down multiple contractors.
            </p>
            <p>
              One thing that sets Tif's Pool Care apart is that Tiffany will never recommend a repair you do not
              need. She has seen too many pool owners get taken advantage of by companies that push expensive
              replacements when a simple fix would do. A $15 O-ring can often solve a leak that another company
              would quote as a $500 plumbing job. Her goal is to keep your pool running reliably and keep money
              in your pocket — because a customer who trusts you is a customer for life.
            </p>
            <p>
              For regular maintenance customers, equipment inspections are built into every weekly visit. That
              means potential problems are often caught before they become actual failures, saving you money
              and the inconvenience of a pool that is out of commission while you wait for a repair.
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-[Fredoka] text-3xl font-bold text-[#222] mb-4">
            Pool Repair Across Southwest Florida
          </h2>
          <p className="font-[Nunito] text-lg text-[#555] mb-8 max-w-2xl mx-auto">
            We provide pool equipment repair and diagnosis throughout the region, including:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Arcadia', 'Port Charlotte', 'Punta Gorda', 'Boca Grande', 'Rotunda', 'Englewood', 'Wauchula'].map(
              (area) => (
                <span
                  key={area}
                  className="bg-[#fffef5] border border-[#dfe24b] text-[#333] font-[Nunito] font-semibold px-5 py-2 rounded-full"
                >
                  {area}
                </span>
              )
            )}
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
            Pool repair questions answered
          </p>
          <div className="space-y-6">
            {faqsByPath['/services/pool-repair'].map((faq, index) => (
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
              to="/services/weekly-pool-maintenance"
              className="bg-[#fffef5] rounded-2xl p-6 border border-[#e8e8d0] hover:border-[#4FC3D9] transition-colors group"
            >
              <h3 className="font-[Fredoka] text-lg font-semibold text-[#222] group-hover:text-[#4FC3D9] transition-colors">
                Weekly Maintenance
              </h3>
              <p className="font-[Nunito] text-sm text-[#666] mt-2">
                Prevent problems with consistent weekly care
              </p>
            </Link>
            <Link
              to="/services/emergency-service"
              className="bg-[#fffef5] rounded-2xl p-6 border border-[#e8e8d0] hover:border-[#4FC3D9] transition-colors group"
            >
              <h3 className="font-[Fredoka] text-lg font-semibold text-[#222] group-hover:text-[#4FC3D9] transition-colors">
                Emergency Service
              </h3>
              <p className="font-[Nunito] text-sm text-[#666] mt-2">
                Same-day help when something goes wrong
              </p>
            </Link>
            <Link
              to="/services/pool-resurfacing"
              className="bg-[#fffef5] rounded-2xl p-6 border border-[#e8e8d0] hover:border-[#4FC3D9] transition-colors group"
            >
              <h3 className="font-[Fredoka] text-lg font-semibold text-[#222] group-hover:text-[#4FC3D9] transition-colors">
                Pool Resurfacing
              </h3>
              <p className="font-[Nunito] text-sm text-[#666] mt-2">
                Restore your pool surface to like-new condition
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-[#dfe24b]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-[Caveat] text-xl text-[#555] mb-2">Pool not working right?</p>
          <h2 className="font-[Fredoka] text-3xl md:text-4xl font-bold text-[#222] mb-4">
            Get Your Pool Back in Working Order
          </h2>
          <p className="font-[Nunito] text-lg text-[#444] mb-8 max-w-xl mx-auto">
            Do not let a small problem turn into a costly breakdown. Contact Tiffany for an honest diagnosis
            and reliable repair. Over 20 years of experience and CPO certified — she will find the issue and
            fix it right.
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
