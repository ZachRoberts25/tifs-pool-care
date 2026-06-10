import { Link } from 'react-router-dom'
import { Phone, ChevronRight, Sun, CloudRain, Wind, Droplets, Leaf, AlertTriangle } from 'lucide-react'

export default function SeasonalCare() {
  return (
    <div className="bg-[#fffef5]">
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-[#dfe24b] to-[#f0f28a] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-[Caveat] text-xl text-[#555] mb-2">Year-round protection for your pool</p>
          <h1 className="font-[Fredoka] text-4xl md:text-5xl font-bold text-[#222] mb-4">
            Seasonal Pool Care in Southwest Florida
          </h1>
          <p className="font-[Nunito] text-lg text-[#333] max-w-2xl mx-auto">
            From scorching summers to hurricane season, your pool faces unique challenges every month of the year.
            Tif's Pool Care keeps you covered through every season in Arcadia, Port Charlotte, Punta Gorda, and beyond.
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
            Why Seasonal Adjustments Are Essential for Florida Pools
          </h2>
          <div className="font-[Nunito] text-[#444] space-y-4 text-lg leading-relaxed">
            <p>
              Unlike pools in northern states that get closed for winter, Southwest Florida pools are used
              year-round. That sounds great — and it is — but it also means your pool never gets a break.
              Every season brings its own set of challenges, from blistering summer heat that burns through
              chlorine in hours to the torrential afternoon rainstorms that dump gallons of untreated water
              into your pool and throw off your chemical balance.
            </p>
            <p>
              Tiffany, the owner of Tif's Pool Care, has spent over 20 years learning the rhythms of Southwest
              Florida's climate and how it affects pool water. Her CPO (Certified Pool Operator) certification
              combined with decades of local experience means she knows exactly what adjustments your pool
              needs — and when — to stay clear, safe, and beautiful throughout the year. Whether you are in
              Arcadia dealing with well water mineral challenges, on the coast in Boca Grande fighting salt
              air corrosion, or anywhere in between, Tiffany has the expertise to keep your pool in top shape.
            </p>
          </div>
        </div>
      </section>

      {/* Seasonal Breakdown */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[Fredoka] text-3xl font-bold text-[#222] mb-2 text-center">
            Pool Care Through Every Florida Season
          </h2>
          <p className="font-[Caveat] text-xl text-[#4FC3D9] text-center mb-10">
            Different seasons, different needs — same great care
          </p>
          <div className="space-y-8">
            {/* Summer */}
            <div className="bg-[#fffef5] rounded-2xl p-8 border border-[#e8e8d0]">
              <div className="flex items-center gap-3 mb-4">
                <Sun className="w-8 h-8 text-[#dfe24b]" />
                <h3 className="font-[Fredoka] text-2xl font-bold text-[#222]">Summer (June - September)</h3>
              </div>
              <div className="font-[Nunito] text-[#555] space-y-3 leading-relaxed">
                <p>
                  Summer is the most demanding season for Southwest Florida pool owners. Water temperatures regularly
                  exceed 85 degrees, creating an ideal breeding ground for algae. The intense UV rays from our Florida
                  sun break down chlorine rapidly — sometimes reducing your free chlorine levels by half in a single
                  afternoon. Combine that with daily afternoon thunderstorms that dilute your chemicals and introduce
                  contaminants, and you have a recipe for constant chemical battles.
                </p>
                <p>
                  During summer months, Tiffany adjusts your chemical program to combat these challenges. This includes
                  increasing chlorine levels, carefully managing stabilizer (cyanuric acid) to protect chlorine from UV
                  degradation, and rebalancing after every significant rainstorm. Algae prevention becomes a top priority,
                  with extra brushing, shock treatments as needed, and close monitoring of phosphate levels that can fuel
                  algae growth.
                </p>
              </div>
            </div>

            {/* Hurricane Season */}
            <div className="bg-[#fffef5] rounded-2xl p-8 border border-[#e8e8d0]">
              <div className="flex items-center gap-3 mb-4">
                <Wind className="w-8 h-8 text-[#4FC3D9]" />
                <h3 className="font-[Fredoka] text-2xl font-bold text-[#222]">Hurricane Season (June - November)</h3>
              </div>
              <div className="font-[Nunito] text-[#555] space-y-3 leading-relaxed">
                <p>
                  Hurricane preparation is serious business for pool owners. When a storm threatens, Tiffany provides
                  pre-storm preparation services to protect your pool and equipment. This includes lowering your water
                  level slightly, super-chlorinating the water, turning off and securing electrical equipment, removing
                  loose items from the pool area that could become projectiles, and advising on whether to remove pool
                  screens or covers.
                </p>
                <p>
                  After a storm passes, post-hurricane cleanup is critical. Flood water, debris, and power outages can
                  leave your pool in terrible condition. Tiffany prioritizes post-storm visits to remove debris, restore
                  water chemistry, restart equipment safely, and assess any damage. She knows how to get your pool back
                  to normal as quickly as possible so your family can return to enjoying it.
                </p>
              </div>
            </div>

            {/* Rainy Season */}
            <div className="bg-[#fffef5] rounded-2xl p-8 border border-[#e8e8d0]">
              <div className="flex items-center gap-3 mb-4">
                <CloudRain className="w-8 h-8 text-[#4FC3D9]" />
                <h3 className="font-[Fredoka] text-2xl font-bold text-[#222]">Rainy Season Adjustments</h3>
              </div>
              <div className="font-[Nunito] text-[#555] space-y-3 leading-relaxed">
                <p>
                  Southwest Florida's rainy season brings daily afternoon downpours that can dramatically affect your
                  pool water. Rain is naturally acidic and contains nitrogen and phosphorus — nutrients that algae love.
                  A single heavy rain event can lower your pH, dilute your chlorine, and raise your water level above
                  the optimal skimmer line.
                </p>
                <p>
                  During rainy season, we increase our monitoring of water chemistry and make more frequent adjustments.
                  We manage water levels, boost sanitizer levels proactively, and add algaecide as a preventative measure.
                  If your pool lacks a good overflow system, we can help manage excess water to prevent flooding around
                  your pool deck and equipment.
                </p>
              </div>
            </div>

            {/* Well Water */}
            <div className="bg-[#fffef5] rounded-2xl p-8 border border-[#e8e8d0]">
              <div className="flex items-center gap-3 mb-4">
                <Droplets className="w-8 h-8 text-[#4FC3D9]" />
                <h3 className="font-[Fredoka] text-2xl font-bold text-[#222]">Well Water Challenges</h3>
              </div>
              <div className="font-[Nunito] text-[#555] space-y-3 leading-relaxed">
                <p>
                  Many homeowners in Arcadia, Wauchula, and parts of DeSoto and Hardee County rely on well water to
                  fill their pools. Well water in this region is notoriously high in iron, copper, manganese, and
                  calcium — minerals that can stain pool surfaces, turn water brown or green (even without algae), and
                  wreak havoc on pool equipment over time.
                </p>
                <p>
                  Tiffany has extensive experience managing pools filled with well water. She uses specialized sequestering
                  agents to keep metals in solution and prevent staining, carefully manages pH to avoid mineral precipitation,
                  and recommends appropriate filtration solutions. If your pool surface has already developed metal stains,
                  she can treat them with targeted stain removal programs. Understanding well water chemistry requires
                  expertise beyond basic pool care, and it is one of the areas where Tiffany's experience truly shines.
                </p>
              </div>
            </div>

            {/* Winter/Dry Season */}
            <div className="bg-[#fffef5] rounded-2xl p-8 border border-[#e8e8d0]">
              <div className="flex items-center gap-3 mb-4">
                <Leaf className="w-8 h-8 text-[#dfe24b]" />
                <h3 className="font-[Fredoka] text-2xl font-bold text-[#222]">Winter & Dry Season (December - May)</h3>
              </div>
              <div className="font-[Nunito] text-[#555] space-y-3 leading-relaxed">
                <p>
                  Florida's "winter" is milder than up north, but it still affects your pool. Cooler water temperatures
                  mean chlorine lasts longer and algae grows more slowly — which is a welcome change. However, the dry
                  season brings its own challenges. Evaporation increases with lower humidity, so water levels may
                  drop faster. Trees drop leaves and pollen, especially in spring when oak pollen blankets everything
                  in a yellow-green film.
                </p>
                <p>
                  During the cooler months, Tiffany adjusts chemical programs downward to avoid over-chlorinating in
                  cooler water. She monitors calcium hardness closely since evaporation concentrates minerals in the
                  water. And when snowbirds return to Southwest Florida for the season, Tiffany makes sure your pool
                  is guest-ready and sparkling for entertaining.
                </p>
              </div>
            </div>
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
            Seasonal care questions answered
          </p>
          <div className="space-y-6">
            {[
              {
                question: 'Should I drain my pool before a hurricane?',
                answer:
                  'No — this is a common misconception. Draining your pool before a hurricane can actually cause the pool shell to pop out of the ground due to hydrostatic pressure from saturated soil and rising water tables. Instead, we lower the water level slightly, super-chlorinate, turn off equipment, and secure the area. After the storm, we handle cleanup and restoration.',
              },
              {
                question: 'How does rain affect my pool chemistry?',
                answer:
                  'Rain is slightly acidic (pH around 5.0-5.5) and contains dissolved nitrogen and phosphorus. When it falls into your pool, it lowers the pH, dilutes chlorine, adds nutrients that feed algae, and raises the water level. After a heavy rain event, your pool typically needs pH adjustment, additional chlorine, and possibly water level management. This is why weekly maintenance is so important during rainy season.',
              },
              {
                question: 'My pool water turns brown when I add chlorine — what is happening?',
                answer:
                  'This is almost always a sign of high iron content in your water, which is very common with well water in Arcadia and Wauchula. When chlorine oxidizes dissolved iron, it turns the water brown or rust-colored. The solution involves using metal sequestering agents, managing your pH carefully, and sometimes using specialized filtration. This is a situation where professional management makes a huge difference.',
              },
              {
                question: 'Do you offer one-time seasonal services or only ongoing maintenance?',
                answer:
                  'While our primary service is weekly maintenance, we do offer one-time seasonal services such as hurricane preparation, post-storm cleanup, spring deep cleaning, and seasonal opening services for snowbird customers who leave during the summer. Contact us to discuss your specific needs and we will put together a plan that works for you.',
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
              to="/services/weekly-pool-maintenance"
              className="bg-[#fffef5] rounded-2xl p-6 border border-[#e8e8d0] hover:border-[#4FC3D9] transition-colors group"
            >
              <h3 className="font-[Fredoka] text-lg font-semibold text-[#222] group-hover:text-[#4FC3D9] transition-colors">
                Weekly Maintenance
              </h3>
              <p className="font-[Nunito] text-sm text-[#666] mt-2">
                Consistent, reliable weekly pool care
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
                Same-day response for urgent pool issues
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
                Equipment repairs and diagnosis
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-[#dfe24b]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-[Caveat] text-xl text-[#555] mb-2">Every season, every challenge — we've got you</p>
          <h2 className="font-[Fredoka] text-3xl md:text-4xl font-bold text-[#222] mb-4">
            Get Year-Round Pool Protection Today
          </h2>
          <p className="font-[Nunito] text-lg text-[#444] mb-8 max-w-xl mx-auto">
            Don't let Florida's unpredictable weather ruin your pool. With Tiffany's 20+ years of local experience
            and CPO certification, your pool is in expert hands no matter what the season brings.
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
