import { Outlet, Link } from 'react-router-dom'
import { Phone, Mail } from 'lucide-react'

const LOGO_WHITE = '/logo-white.png'

export default function Layout() {
  return (
    <div className="font-[Nunito] bg-[#fffef5] text-[#1a1a1a]">
      {/* Header */}
      <header className="bg-[#dfe24b] sticky top-0 z-50 shadow-sm">
        <div className="px-6 py-2 flex items-center justify-between">
          <Link to="/" className="font-[Fredoka] text-lg font-bold text-[#1a1a1a]">Tif's Pool Care</Link>
          <div className="hidden md:flex items-center gap-1">
            <Link to="/services/weekly-pool-maintenance" className="text-[15px] font-bold text-[#1a1a1a] px-4 py-2 rounded-full hover:bg-[#1a1a1a]/10 hover:-translate-y-[1px] transition-all">Services</Link>
            <Link to="/about" className="text-[15px] font-bold text-[#1a1a1a] px-4 py-2 rounded-full hover:bg-[#1a1a1a]/10 hover:-translate-y-[1px] transition-all">About</Link>
            <Link to="/areas/arcadia" className="text-[15px] font-bold text-[#1a1a1a] px-4 py-2 rounded-full hover:bg-[#1a1a1a]/10 hover:-translate-y-[1px] transition-all">Areas</Link>
            <Link to="/contact" className="text-[15px] font-bold text-[#1a1a1a] px-4 py-2 rounded-full hover:bg-[#1a1a1a]/10 hover:-translate-y-[1px] transition-all">Contact</Link>
            <a href="tel:9412683747" className="bg-[#1a1a1a] text-[#dfe24b] ml-3 px-5 py-2.5 rounded-full font-bold text-[15px] hover:bg-[#333] hover:scale-105 transition-all flex items-center gap-2">
              <Phone className="w-4 h-4" /> (941) 268-3747
            </a>
          </div>
        </div>
      </header>

      <Outlet />

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white/60 py-8 px-4 text-center text-sm">
        <img src={LOGO_WHITE} alt="Tif's Pool Care" className="h-10 mx-auto mb-3 opacity-80" />
        <p className="font-[Caveat] text-lg text-white/40 max-w-md mx-auto mb-4 italic">
          "He will cover you with his feathers, and under his wings you will find refuge; his faithfulness will be your shield and rampart."
          <span className="block text-white/25 text-sm mt-1">— Psalms 91:4</span>
        </p>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mb-4 text-white/40">
          <Link to="/services/weekly-pool-maintenance" className="hover:text-white/60">Weekly Maintenance</Link>
          <Link to="/services/seasonal-care" className="hover:text-white/60">Seasonal Care</Link>
          <Link to="/services/pool-repair" className="hover:text-white/60">Pool Repair</Link>
          <Link to="/services/pool-resurfacing" className="hover:text-white/60">Resurfacing</Link>
          <Link to="/services/emergency-service" className="hover:text-white/60">Emergency</Link>
        </div>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mb-4 text-white/40">
          <Link to="/areas/arcadia" className="hover:text-white/60">Arcadia</Link>
          <Link to="/areas/port-charlotte" className="hover:text-white/60">Port Charlotte</Link>
          <Link to="/areas/punta-gorda" className="hover:text-white/60">Punta Gorda</Link>
          <Link to="/areas/boca-grande" className="hover:text-white/60">Boca Grande</Link>
          <Link to="/areas/rotunda" className="hover:text-white/60">Rotunda</Link>
          <Link to="/areas/englewood" className="hover:text-white/60">Englewood</Link>
          <Link to="/areas/wauchula" className="hover:text-white/60">Wauchula</Link>
        </div>
        <div className="flex justify-center gap-6 mb-4">
          <a href="tel:9412683747" className="flex items-center gap-1 text-white/50 hover:text-white/70"><Phone className="w-3 h-3" /> (941) 268-3747</a>
          <a href="mailto:tifspoolcare@gmail.com" className="flex items-center gap-1 text-white/50 hover:text-white/70"><Mail className="w-3 h-3" /> tifspoolcare@gmail.com</a>
        </div>
        <p>&copy; {new Date().getFullYear()} Tif's Pool Care. All rights reserved.</p>
        <p className="mt-1">Licensed, Bonded & Insured | CPO Certified | Arcadia, FL</p>
      </footer>
    </div>
  )
}
