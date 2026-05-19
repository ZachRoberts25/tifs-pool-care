import { Link } from 'react-router-dom'
import { Phone, Shield, Star, Clock, Heart } from 'lucide-react'

const LOGO = '/logo.png'

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#dfe24b] to-[#f0f28a] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <img src={LOGO} alt="Tif's Pool Care" className="h-32 w-auto mx-auto mb-6 drop-shadow-lg" />
          <h1 className="font-[Fredoka] text-4xl md:text-5xl font-bold mb-4">About Tif's Pool Care</h1>
          <p className="text-lg text-[#333] max-w-2xl mx-auto">
            Meet Tiffany — the heart, soul, and hard work behind every sparkling pool in Southwest Florida.
          </p>
        </div>
      </section>

      {/* Tiffany's Story */}
      <section className="py-20 px-4 bg-[#fffef5]">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <img src="/tiff-bio.jpg" alt="Tiffany with her daughter Jailyn and her son Gaige" className="w-full max-w-md mx-auto rounded-2xl shadow-md" />
            <p className="text-center text-[#777] text-sm mt-3 font-[Caveat] text-lg">Tiffany & her family</p>
            <p className="text-[#555] leading-relaxed mt-6">
              Tiffany with her daughter Jailyn — a first generation college graduate with her associates in Art — and her son Gaige, a Desoto County baseball 10U All-Star.
            </p>
          </div>
          <h2 className="font-[Fredoka] text-3xl font-bold mb-6">How It All Started</h2>
          <p className="text-[#555] leading-relaxed mb-4">
            Over 20 years ago, Tiffany started working in the pool industry and immediately knew she'd found her calling. The independence of working outdoors, the satisfaction of transforming a neglected pool into something beautiful, and most importantly — the people she got to meet along the way.
          </p>
          <p className="text-[#555] leading-relaxed mb-4">
            For years, Tiffany worked for other pool companies across Southwest Florida, including the largest pool service company in Charlotte County. She learned everything there was to know about pool chemistry, equipment repair, resurfacing, and maintenance. But something was missing.
          </p>
          <p className="text-[#555] leading-relaxed mb-4">
            As companies grew bigger and more corporate, the personal relationships disappeared. Customers became account numbers. Service visits became rushed. Communication became nonexistent. Tiffany watched the thing she loved most about the industry — the personal connection — get squeezed out by corporate priorities.
          </p>
          <p className="text-[#555] leading-relaxed mb-8">
            So she started Tif's Pool Care. Not because she wanted to build a big company, but because she wanted to do things the right way — where your pool person knows your name, remembers your dog, and genuinely cares that your water is perfect. That's the business she runs today.
          </p>

          <h2 className="font-[Fredoka] text-3xl font-bold mb-6">Why "Tif's Pool Care"?</h2>
          <p className="text-[#555] leading-relaxed mb-4">
            The name is personal. Tiffany chose "Tif's" instead of her full name because that's what her friends and customers call her. And "Pool Care" — not "Pool Service" — because care is what sets her apart. She doesn't just service pools. She cares for them, and she cares for the people who swim in them.
          </p>

          <h2 className="font-[Fredoka] text-3xl font-bold mb-6">What Customers Say Matters Most</h2>
          <p className="text-[#555] leading-relaxed mb-4">
            When asked what she'd want customers to tell their neighbors about her, Tiffany's answer was immediate: <strong>trustworthy</strong>. That's the word that matters most to her. Followed by reliable, detailed, and knowledgeable.
          </p>
          <p className="text-[#555] leading-relaxed mb-4">
            The number one complaint she hears from customers switching from other pool companies? <strong>No communication.</strong> Their pool person wouldn't return calls, wouldn't explain what was done, and sometimes wouldn't show up at all. At Tif's Pool Care, you always know what's happening with your pool.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-[Fredoka] text-3xl font-bold mb-2">Our Mission</h2>
          <p className="font-[Caveat] text-2xl text-[#4FC3D9] mb-8">Why we do what we do</p>
          <p className="text-[#555] leading-relaxed text-lg italic">
            At Tif's Pool Care, our mission is to serve each client with honesty, care, and a spirit of excellence, honoring God in all that we do. We are dedicated to providing high-quality pool cleaning with a personal touch, taking the time to build real relationships and treat every pool as if it were our own. We believe in doing things the right way — with integrity, kindness, and attention to detail — so your pool remains clean, safe, and a joyful place for your family to gather, relax, and make memories.
          </p>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 px-4 bg-[#fffef5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[Fredoka] text-3xl font-bold text-center mb-12">Credentials & Qualifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Shield, title: 'Licensed & Insured', desc: 'Fully licensed to operate in the state of Florida. Liability insurance protects you and your property.' },
              { icon: Star, title: 'CPO Certified', desc: 'Certified Pool Operator — the gold standard certification for pool chemistry and equipment knowledge.' },
              { icon: Clock, title: '20+ Years Experience', desc: 'Two decades of hands-on experience with every type of pool system, surface, and water chemistry challenge in Florida.' },
              { icon: Heart, title: 'Woman Owned', desc: 'Proudly woman-owned and operated. Tiffany is personally involved in every aspect of your pool care.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-6 bg-[#f0fafe] rounded-2xl">
                <div className="w-12 h-12 bg-[#4FC3D9]/15 rounded-xl flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-[#4FC3D9]" />
                </div>
                <div>
                  <h3 className="font-[Fredoka] text-lg font-bold mb-1">{item.title}</h3>
                  <p className="text-[#555] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#dfe24b]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-[Fredoka] text-3xl font-bold text-[#1a1a1a] mb-4">Ready to Work with Tiffany?</h2>
          <p className="text-[#333] text-lg mb-8">
            Experience pool service the way it should be — personal, reliable, and done right.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-[#1a1a1a] text-[#dfe24b] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#333] transition-all hover:-translate-y-0.5 shadow-lg">
              Get a Free Quote
            </Link>
            <a href="tel:9412683747" className="bg-white text-[#1a1a1a] px-8 py-4 rounded-full font-bold text-lg border-2 border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" /> (941) 268-3747
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
