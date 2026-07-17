import { IconTrefoil, IconMenu, IconX } from './Icons'
import { Link } from 'react-router-dom'

const navLinks = [
  { label: 'Home',       href: '#home' },
  { label: 'About Us',   href: '#about' },
  { label: 'Gallery',    href: '/gallery', isRoute: true },
  { label: 'Contact Us', href: '#contact' },
]

export default function Navbar({ scrolled, mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-md py-3 border-b border-white/10' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <IconTrefoil size={30} />
          <span className="font-black text-lg tracking-tight leading-none text-white">
            NGGA
            <br />
            <small className="text-[9px] font-bold tracking-widest text-[#F4B740] block">NIGERIAN GIRL GUIDES</small>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link =>
            link.isRoute ? (
              <Link key={link.label} to={link.href} className="text-sm text-gray-400 hover:text-white transition-colors font-bold uppercase tracking-wide">
                {link.label}
              </Link>
            ) : (
              <a key={link.label} href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors font-bold uppercase tracking-wide">
                {link.label}
              </a>
            )
          )}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#contact" className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-bold hover:opacity-80 transition-opacity uppercase">
            Join Us
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
            {mobileMenuOpen ? <IconX /> : <IconMenu />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-white/10 px-6 py-4">
          {navLinks.map(link =>
            link.isRoute ? (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 text-gray-400 hover:text-white font-bold uppercase"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 text-gray-400 hover:text-white font-bold uppercase"
              >
                {link.label}
              </a>
            )
          )}
          <a href="#contact" className="mt-4 block text-center w-full bg-white text-black px-5 py-3 rounded-full font-bold uppercase">
            Join Us
          </a>
        </div>
      )}
    </nav>
  )
}
