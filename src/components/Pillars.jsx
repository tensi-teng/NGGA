import { asset } from '../utils/img'

const pillars = [
  { title: 'Learn',       copy: 'Non-formal education that builds real-world skills, from first aid to financial literacy.',              bg: 'bg-[#C6FF3D]', text: 'text-black', img: 'pillars-learn'     },
  { title: 'Lead',        copy: 'Girls practice leadership from a young age, discovering their potential and giving back.',              bg: 'bg-[#E8447A]', text: 'text-white', img: 'pillars-lead'      },
  { title: 'Speak Out',   copy: 'Body confidence and self-esteem building empower guides to speak up for themselves and others.',        bg: 'bg-[#F4B740]', text: 'text-black', img: 'pillars-speak-out' },
  { title: 'Volunteer',   copy: 'Selfless service to community, rendered daily through the Guide Good Turn.',                           bg: 'bg-[#5FC9D6]', text: 'text-black', img: 'pillars-volunteer' },
]

export default function Pillars() {
  return (
    <section className="py-20 px-6" id="pillars">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl md:text-8xl font-black mb-12 tracking-tight">
          <span className="stroke-text">THE FOUR</span>
          <br />
          PILLARS
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {pillars.map((p, i) => (
            <div key={i} className={`${p.bg} ${p.text} rounded-3xl overflow-hidden min-h-[300px] flex flex-col`}>
              <div className="h-48 overflow-hidden">
                <img
                  src={asset(p.img, 300, 200, p.title)}
                  alt={p.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-7 flex flex-col justify-end flex-1">
                <h3 className="text-3xl font-black mb-2">{p.title}</h3>
                <p className="text-sm font-semibold opacity-80 leading-relaxed">{p.copy}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-2 rounded-3xl overflow-hidden">
          <div className="aspect-[4/3] md:aspect-auto">
            <img
              src={asset('pillars-any-girl', 600, 450, 'Any Girl Every Girl')}
              alt="Any Girl, Every Girl"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-[#E8447A] p-8 flex flex-col justify-center">
            <h3 className="text-3xl md:text-4xl font-black mb-4 text-white">
              Any Girl,
              <br />
              Every Girl.
            </h3>
            <p className="text-white/85 mb-2 leading-relaxed">
              Girl Guides is an all-female association — for any girl and every girl, whatever her background, class or creed. We are not a profit-making organization; we develop hidden potential.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
