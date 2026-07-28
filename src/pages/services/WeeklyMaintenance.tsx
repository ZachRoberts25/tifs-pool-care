import { Link } from 'react-router-dom'
import { Phone, ChevronRight, Droplets, Shield, Clock, CheckCircle, Sparkles, FlaskConical } from 'lucide-react'
import { faqsByPath } from '../../seo/faqs'

export default function WeeklyMaintenance() {
  return (
    <div className="bg-[#fffef5]">
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-[#dfe24b] to-[#f0f28a] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-[Caveat] text-xl text-[#555] mb-2">Reliable care, week after week</p>
          <h1 className="font-[Fredoka] text-4xl md:text-5xl font-bold text-[#222] mb-4">
            Weekly Pool Maintenance in Southwest Florida
          </h1>
          <p className="font-[Nunito] text-lg text-[#333] max-w-2xl mx-auto">
            Keep your pool sparkling clean, safe, and swim-ready all year long with Tif's Pool Care.
            Trusted by homeowners across Arcadia, Port Charlotte, Punta Gorda, and beyond for over 20 years.
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
            Why Weekly Pool Maintenance Matters in Florida
          </h2>
          <div className="font-[Nunito] text-[#444] space-y-4 text-lg leading-relaxed">
            <p>
              Living in Southwest Florida means your pool is exposed to intense sun, heavy rain, high humidity,
              and warm temperatures year-round. These conditions create the perfect environment for algae growth,
              chemical imbalances, and equipment wear. Without consistent weekly maintenance, a beautiful pool
              can turn green, cloudy, or even unsafe in just a matter of days.
            </p>
            <p>
              At Tif's Pool Care, owner Tiffany brings over 20 years of hands-on pool care experience and
              CPO (Certified Pool Operator) certification to every visit. She understands the unique challenges
              that Southwest Florida's climate presents — from the mineral-heavy well water common in Arcadia
              and Wauchula to the salt air near Boca Grande and Englewood. Weekly maintenance isn't just about
              keeping your pool looking nice; it's about protecting your investment, ensuring swimmer safety,
              and extending the life of your pool equipment.
            </p>
            <p>
              Whether you have a screened lanai pool in Port Charlotte, a freeform pool in Punta Gorda, or
              an older pool in Rotunda that needs extra love, Tiffany tailors every maintenance plan to your
              pool's specific needs. No cookie-cutter service here — just genuine, knowledgeable care from
              someone who truly loves what she does.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[Fredoka] text-3xl font-bold text-[#222] mb-2 text-center">
            What's Included in Every Weekly Visit
          </h2>
          <p className="font-[Caveat] text-xl text-[#4FC3D9] text-center mb-10">
            Thorough care from surface to floor
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Sparkles className="w-8 h-8 text-[#4FC3D9]" />,
                title: 'Surface Skimming & Debris Removal',
                description:
                  'Every visit begins with a thorough skim of the pool surface to remove leaves, bugs, pollen, and other debris. In Florida, between oak pollen in spring, summer storms, and falling leaves in winter, there is always something landing in your pool. We also clean out the skimmer and pump baskets to ensure proper water flow and prevent clogs that can damage your pump.',
              },
              {
                icon: <Shield className="w-8 h-8 text-[#4FC3D9]" />,
                title: 'Brushing Walls, Steps & Tile Line',
                description:
                  'Algae loves to cling to pool walls, steps, corners, and the tile line. We brush all surfaces thoroughly each week to prevent algae from gaining a foothold. This is especially important in Southwest Florida where warm water temperatures give algae an advantage. Regular brushing also helps prevent calcium and mineral buildup along the waterline.',
              },
              {
                icon: <FlaskConical className="w-8 h-8 text-[#4FC3D9]" />,
                title: 'Chemical Balancing & Water Testing',
                description:
                  'We test your pool water every visit and adjust chlorine, pH, alkalinity, and stabilizer levels as needed. Balanced chemistry keeps your water crystal clear, prevents algae, protects your pool surfaces from staining and etching, and keeps swimmers comfortable. Tiffany\'s CPO certification means she understands the science behind water chemistry — not just guessing, but precision balancing.',
              },
              {
                icon: <Droplets className="w-8 h-8 text-[#4FC3D9]" />,
                title: 'Filter Monitoring & Care',
                description:
                  'Your filter is the heart of your pool\'s circulation system. We monitor filter pressure each week and clean or backwash as needed. Whether you have a cartridge filter, sand filter, or DE filter, we ensure it\'s operating at peak efficiency. A clean filter means cleaner water, lower energy costs, and less strain on your pump.',
              },
              {
                icon: <Clock className="w-8 h-8 text-[#4FC3D9]" />,
                title: 'Equipment Inspection',
                description:
                  'During every visit, we visually inspect your pump, filter, heater (if applicable), and other equipment for signs of wear, leaks, or unusual operation. Catching a small issue early — like a hairline crack in a pump lid or a worn O-ring — can save you hundreds or even thousands of dollars in repairs down the road.',
              },
              {
                icon: <CheckCircle className="w-8 h-8 text-[#4FC3D9]" />,
                title: 'Vacuuming & Floor Care',
                description:
                  'Dirt, sand, and debris that sink to the pool floor are vacuumed away each visit. In areas like Arcadia and Wauchula where well water is common, mineral sediment can settle on the pool floor and stain surfaces if left unattended. Our thorough vacuuming keeps your pool floor pristine and prevents long-term surface damage.',
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

      {/* The Tif's Difference */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[Fredoka] text-3xl font-bold text-[#222] mb-6 text-center">
            The Tif's Pool Care Difference
          </h2>
          <div className="font-[Nunito] text-[#444] space-y-4 text-lg leading-relaxed">
            <p>
              When you hire a big pool company, you often get a rotating cast of technicians who spend ten
              minutes at your pool and rush off to the next stop. With Tif's Pool Care, you get Tiffany —
              the owner — personally caring for your pool. That means consistency, accountability, and someone
              who actually gets to know your pool's quirks and needs over time.
            </p>
            <p>
              Tiffany has been in the pool care industry for more than two decades. She's seen it all, from
              pools turned swamp-green after a week of neglect to equipment failures that could have been
              prevented with proper monitoring. Her CPO certification isn't just a badge — it represents
              advanced knowledge of water chemistry, health and safety standards, and equipment operation
              that goes well beyond basic pool cleaning.
            </p>
            <p>
              Every customer gets direct communication with Tiffany. Have a question about your water? Text
              or call and get a real answer from someone who knows your pool. Notice something weird with your
              equipment? She'll check it out on the next visit — or sooner if it's urgent. That personal touch
              is something the big companies simply cannot match.
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-[Fredoka] text-3xl font-bold text-[#222] mb-4">
            Serving Communities Across Southwest Florida
          </h2>
          <p className="font-[Nunito] text-lg text-[#555] mb-8 max-w-2xl mx-auto">
            We proudly provide weekly pool maintenance throughout the region, including:
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
            Got questions? We've got answers!
          </p>
          <div className="space-y-6">
            {faqsByPath['/services/weekly-pool-maintenance'].map((faq, index) => (
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
              to="/services/seasonal-care"
              className="bg-[#fffef5] rounded-2xl p-6 border border-[#e8e8d0] hover:border-[#4FC3D9] transition-colors group"
            >
              <h3 className="font-[Fredoka] text-lg font-semibold text-[#222] group-hover:text-[#4FC3D9] transition-colors">
                Seasonal Care
              </h3>
              <p className="font-[Nunito] text-sm text-[#666] mt-2">
                Hurricane prep, algae prevention, and seasonal adjustments
              </p>
            </Link>
            <Link
              to="/services/pool-repair"
              className="bg-[#fffef5] rounded-2xl p-6 border border-[#e8e8d0] hover:border-[#4FC3D9] transition-colors group"
            >
              <h3 className="font-[Fredoka] text-lg font-semibold text-[#222] group-hover:text-[#4FC3D9] transition-colors">
                Pool Repair
              </h3>
              <p className="font-[Nunito] text-sm text-[#666] mt-2">
                Pump issues, leaks, and equipment diagnosis
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
                Same-day pool service when you need it most
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-[#dfe24b]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-[Caveat] text-xl text-[#555] mb-2">Ready for a pool you can count on?</p>
          <h2 className="font-[Fredoka] text-3xl md:text-4xl font-bold text-[#222] mb-4">
            Start Your Weekly Pool Maintenance Today
          </h2>
          <p className="font-[Nunito] text-lg text-[#444] mb-8 max-w-xl mx-auto">
            Join hundreds of happy pool owners across Southwest Florida who trust Tiffany with their pools.
            Get a free, no-obligation quote and see the Tif's Pool Care difference for yourself.
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
