import { IconFacebook, IconInstagram, IconTwitter } from './Icons'
import logoImg from '/assests/logo.jpeg'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-16 px-6" id="contact">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        <div className="md:col-span-1">
          <img src={logoImg} alt="NGGA Logo" className="h-14 w-auto object-contain mb-3" />
          <h2 className="text-3xl font-black mt-3 mb-2">Be Prepared.</h2>
          <p className="text-gray-500 text-sm leading-relaxed max-w-[260px]">
            The Nigerian Girl Guides Association — a member of the World Association of Girl Guides and Girl Scouts, guiding girls and young women across 34 states.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-xs uppercase tracking-widest text-[#c98f1f] dark:text-[#F4B740]">Get Involved</h4>
          <ul className="space-y-2 text-gray-500 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Become a Guide</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Volunteer as a Guider</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Partner With Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Donate</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-xs uppercase tracking-widest text-[#c98f1f] dark:text-[#F4B740]">Contact</h4>
          <ul className="space-y-2 text-gray-500 text-sm mb-6">
            <li><a href="#" className="hover:text-white transition-colors">State Commissioner Offices</a></li>
            <li><a href="#" className="hover:text-white transition-colors">National Headquarters</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Rivers State, Nigeria</a></li>
          </ul>
          <div className="flex gap-3">
            <a href="#" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-white transition-colors">
              <IconFacebook />
            </a>
            <a href="#" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-white transition-colors">
              <IconInstagram />
            </a>
            <a href="#" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-white transition-colors">
              <IconTwitter />
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-600 text-xs">© 2026 The Nigerian Girl Guides Association. On my honor, I promise.</p>
      </div>
    </footer>
  )
}
