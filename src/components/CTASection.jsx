import { asset } from '../utils/img'

export default function CTASection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">

          {/* Join Us card */}
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] flex items-end p-6">
            <img
              src={asset('cta-join', 600, 450, 'Join Us')}
              alt="Join the Girl Guides"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
            <div
              className="absolute left-[-10%] w-[120%] bg-black text-white font-black uppercase text-sm py-2 whitespace-nowrap overflow-hidden -rotate-3 z-10"
              style={{ top: '38%' }}
            >
              <span className="inline-block px-4">JOIN US → BECOME A GUIDE → JOIN US → BECOME A GUIDE</span>
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-black text-white uppercase leading-tight mb-2">Become a Guide</h3>
              <p className="text-white/75 text-sm max-w-xs leading-relaxed">
                Join a sisterhood of girls across 30 states. Start your journey today.
              </p>
            </div>
          </div>

          {/* Our Programs card */}
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] flex items-end p-6">
            <img
              src={asset('cta-programs', 600, 450, 'Our Programs')}
              alt="Our Programs"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
            <div
              className="absolute left-[-10%] w-[120%] bg-black text-white font-black uppercase text-sm py-2 whitespace-nowrap overflow-hidden -rotate-3 z-10"
              style={{ bottom: '38%', top: 'auto' }}
            >
              <span className="inline-block px-4">OUR PROGRAMS → SEE WHAT WE DO → OUR PROGRAMS → SEE WHAT WE DO</span>
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-black text-white uppercase leading-tight mb-2">Our Programs</h3>
              <p className="text-white/75 text-sm max-w-xs leading-relaxed">
                From badge work to camping, discover the full range of what NGGA offers.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
