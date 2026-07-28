import { Link } from 'react-router-dom'
import { Phone, ChevronRight, AlertTriangle, Clock, Zap, ShieldAlert, Droplets, ThermometerSun } from 'lucide-react'
import { faqsByPath } from '../../seo/faqs'

export default function EmergencyService() {
  return (
    <div className="bg-[#fffef5]">
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-[#dfe24b] to-[#f0f28a] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-[Caveat] text-xl text-[#555] mb-2">When your pool can't wait</p>
          <h1 className="font-[Fredoka] text-4xl md:text-5xl font-bold text-[#222] mb-4">
            Emergency & Same-Day Pool Service in Southwest Florida
          </h1>
          <p className="font-[Nunito] text-lg text-[#333] max-w-2xl mx-auto">
            Pool emergencies don't wait for your next scheduled service. Tif's Pool Care provides rapid
            response for urgent pool issues across Arcadia, Port Charlotte, Punta Gorda, Boca Grande,
            Rotunda, Englewood, and Wauchula.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9412683747"
              className="inline-flex items-center justify-center gap-2 bg-red-600 text-white font-[Nunito] font-bold px-8 py-3 rounded-full hover:bg-red-700 transition-colors"
            >
              <Phone className="w-4 h-4" /> Call Now: (941) 268-3747
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#333] font-[Nunito] font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
            >
              Send a Message <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[Fredoka] text-3xl font-bold text-[#222] mb-6">
            Fast, Expert Help When Your Pool Needs It Most
          </h2>
          <div className="font-[Nunito] text-[#444] space-y-4 text-lg leading-relaxed">
            <p>
              You walk outside to find your pool is bright green. Your pump is making a terrible grinding
              noise and leaking water. A storm just passed through and your pool is full of branches and
              debris. Your pool party is tomorrow and something is clearly wrong with the water. These
              situations happen, and when they do, you need help fast — not next week, not in three days,
              but today.
            </p>
            <p>
              Tif's Pool Care understands that some pool problems cannot wait. That's why Tiffany offers
              emergency and same-day pool service for urgent situations. With over 20 years of experience
              and CPO (Certified Pool Operator) certification, she has the knowledge and skills to quickly
              diagnose the problem, take immediate action to prevent further damage, and restore your pool
              to safe, swimmable condition as fast as possible.
            </p>
            <p>
              Unlike large pool companies where your emergency call goes to a call center and you might wait
              days for a technician, when you call Tif's Pool Care, you reach Tiffany directly. She assesses
              the urgency of your situation, provides immediate guidance over the phone, and gets to your
              pool as quickly as her schedule allows — often the same day. Serving homeowners across Southwest
              Florida from Arcadia to Boca Grande, Tiffany prioritizes emergency calls because she knows
              how stressful a pool crisis can be.
            </p>
          </div>
        </div>
      </section>

      {/* What Qualifies as an Emergency */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[Fredoka] text-3xl font-bold text-[#222] mb-2 text-center">
            What Qualifies as a Pool Emergency?
          </h2>
          <p className="font-[Caveat] text-xl text-[#4FC3D9] text-center mb-10">
            If any of these sound familiar, call us right away
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Droplets className="w-8 h-8 text-red-500" />,
                title: 'Green or Cloudy Water',
                description:
                  'If your pool turned green overnight or has become so cloudy you cannot see the bottom, this indicates a serious chemical imbalance or algae bloom that needs immediate attention. In Southwest Florida\'s heat, a pool can go from slightly green to completely swamp-like in 24-48 hours if not treated. The sooner treatment begins, the faster and less expensive the recovery. We perform emergency shock treatments, algaecide applications, and intensive chemical rebalancing to bring your pool back to crystal clear as quickly as possible.',
              },
              {
                icon: <Zap className="w-8 h-8 text-red-500" />,
                title: 'Equipment Failure',
                description:
                  'A dead pump, a broken filter, a tripped breaker that won\'t reset, or a major leak at the equipment pad are all situations that need prompt attention. Without circulation and filtration, your pool water will deteriorate rapidly — especially in the summer heat. Equipment failures can also create safety hazards, particularly if water is leaking near electrical components. We diagnose the issue, perform emergency repairs when possible, and if parts are needed, advise you on how to protect your pool water until the repair is complete.',
              },
              {
                icon: <AlertTriangle className="w-8 h-8 text-red-500" />,
                title: 'Post-Storm Damage',
                description:
                  'After a tropical storm, hurricane, or severe thunderstorm, pools often need immediate attention. Debris in the pool can stain surfaces and clog equipment. Power outages mean your pump hasn\'t been running, allowing water quality to deteriorate. Flooding can introduce contaminated water into your pool. Fallen trees or branches may have damaged screens, decking, or pool equipment. Tiffany provides priority post-storm service to assess damage, remove debris, restart equipment safely, and restore water chemistry before things get worse.',
              },
              {
                icon: <ShieldAlert className="w-8 h-8 text-red-500" />,
                title: 'Safety Concerns',
                description:
                  'Any situation where the pool may pose a safety risk warrants an emergency call. This includes electrical issues near the pool (a buzzing pump, sparking connections, or breakers that keep tripping), a significant water loss that could indicate a structural failure, broken drain covers or missing safety equipment, and situations where chemical levels are dangerously out of range (extremely high chlorine or severely acidic water). Safety always comes first — if you are unsure whether your situation is an emergency, call us and we will help you determine the right course of action.',
              },
              {
                icon: <ThermometerSun className="w-8 h-8 text-red-500" />,
                title: 'Chemical Accidents',
                description:
                  'Did someone add the wrong chemical to the pool? Was too much of a chemical added? These situations can be dangerous and require immediate professional correction. Mixing certain pool chemicals or adding them incorrectly can create toxic fumes, cause dangerously high or low pH levels, or generate chemical reactions that damage pool surfaces and equipment. Do not attempt to fix a chemical mistake by adding more chemicals — call us immediately for professional guidance.',
              },
              {
                icon: <Clock className="w-8 h-8 text-red-500" />,
                title: 'Time-Sensitive Situations',
                description:
                  'Hosting a pool party tomorrow? Have a home inspection scheduled? Realtor bringing buyers by this weekend? Sometimes the urgency is not a technical emergency but a time crunch that requires rapid professional attention to get your pool looking its best. Tiffany understands these situations and offers expedited service to ensure your pool is guest-ready, inspection-ready, or showing-ready when you need it.',
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

      {/* Response Time & Process */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[Fredoka] text-3xl font-bold text-[#222] mb-8 text-center">
            Our Emergency Response Process
          </h2>
          <div className="space-y-6">
            {[
              {
                step: '1',
                title: 'Call or Text Tiffany Directly',
                description:
                  'When you have a pool emergency, call or text (941) 268-3747. You will reach Tiffany, the owner, directly — not a receptionist, not a call center. Describe what you are seeing and she will immediately assess the severity. For safety-related emergencies, she will give you instructions over the phone to keep everyone safe until she arrives.',
              },
              {
                step: '2',
                title: 'Same-Day or Next-Day Response',
                description:
                  'For true emergencies (safety hazards, equipment actively leaking, post-storm situations), Tiffany prioritizes your call and responds as quickly as possible — often the same day. For urgent but non-dangerous situations (green water, party prep, time crunches), she typically arranges a visit within 24 hours. Response time depends on current workload and location, but Southwest Florida customers generally receive remarkably fast service.',
              },
              {
                step: '3',
                title: 'Expert Diagnosis & Immediate Action',
                description:
                  'Once on site, Tiffany quickly assesses the situation, identifies the root cause, and takes immediate corrective action. For water quality emergencies, this means aggressive treatment to begin the recovery process. For equipment failures, it means diagnosis and repair (or temporary mitigation if parts are needed). Her 20+ years of experience and CPO knowledge mean she can handle the situation efficiently and effectively.',
              },
              {
                step: '4',
                title: 'Follow-Up Care',
                description:
                  'Most pool emergencies require follow-up visits to complete the recovery. A green pool may need 2-3 treatment visits over several days to fully clear. An equipment repair might need a parts order and return visit for installation. Tiffany schedules all necessary follow-up and keeps you informed every step of the way until your pool is fully restored.',
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

      {/* Prevention Tips */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[Fredoka] text-3xl font-bold text-[#222] mb-6 text-center">
            Preventing Pool Emergencies
          </h2>
          <div className="font-[Nunito] text-[#444] space-y-4 text-lg leading-relaxed">
            <p>
              While Tiffany is always ready to help with emergencies, the best emergency is the one that never
              happens. Regular weekly maintenance is by far the most effective way to prevent pool crises. When
              your pool is professionally maintained every week, chemical imbalances are caught early before they
              spiral into algae blooms, equipment issues are spotted before they become failures, and your pool
              stays in optimal condition so it can better withstand Florida's challenging weather.
            </p>
            <p>
              Customers on Tif's Pool Care weekly maintenance plans experience far fewer emergencies because
              their pools receive consistent, knowledgeable attention. Tiffany monitors trends in your water
              chemistry, catches the early warning signs of equipment wear, and makes proactive adjustments
              for seasonal changes. Prevention is always easier, cheaper, and less stressful than emergency
              treatment.
            </p>
            <p>
              That said, emergencies can happen to any pool — a freak storm, a power surge that damages equipment,
              or an unexpected plumbing failure. When they do, it's comforting to know you have a trusted, experienced
              professional just a phone call away.
            </p>
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
            Emergency service questions answered
          </p>
          <div className="space-y-6">
            {faqsByPath['/services/emergency-service'].map((faq, index) => (
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
                Prevent emergencies with consistent care
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
                Equipment diagnosis and repair
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
                Hurricane prep and seasonal adjustments
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-[#dfe24b]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-[Caveat] text-xl text-[#555] mb-2">Pool emergency? Don't panic.</p>
          <h2 className="font-[Fredoka] text-3xl md:text-4xl font-bold text-[#222] mb-4">
            Call Tiffany Now for Fast Pool Help
          </h2>
          <p className="font-[Nunito] text-lg text-[#444] mb-8 max-w-xl mx-auto">
            With 20+ years of experience and CPO certification, Tiffany can handle any pool emergency.
            Call or text now for immediate guidance and rapid on-site service across Southwest Florida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9412683747"
              className="inline-flex items-center justify-center gap-2 bg-red-600 text-white font-[Nunito] font-bold px-8 py-3 rounded-full hover:bg-red-700 transition-colors"
            >
              <Phone className="w-4 h-4" /> Call Now: (941) 268-3747
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#333] font-[Nunito] font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
            >
              Send a Message <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
