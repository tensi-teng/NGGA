import { IconArrowRight } from './Icons'
import { asset } from '../utils/img'

const tiles = [
  { key: 'hero-01', t: 'Camp Life',   h: 'h-28' },
  { key: 'hero-02', t: 'Sisterhood',  h: 'h-40' },
  { key: 'hero-03', t: 'Badge Work',  h: 'h-32' },
  { key: 'hero-04', t: 'Leadership',  h: 'h-36' },
  { key: 'hero-05', t: 'Community',   h: 'h-28' },
  { key: 'hero-06', t: 'Outdoors',    h: 'h-40' },
  { key: 'hero-07', t: 'Ceremony',    h: 'h-32' },
  { key: 'hero-08', t: 'Craft',       h: 'h-40' },
  { key: 'hero-09', t: 'Guides',      h: 'h-28' },
]

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6" id="home">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div id="about">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500">
            The Nigerian Girl Guides Association
          </span>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight my-6">
            <span className="stroke-text">GUIDING</span>
            <br />
            <span className="text-white">REDEFINED.</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-md mb-8 leading-relaxed">
            A movement of girls and women across 30 states, building leadership, life skills and citizenship — one Promise, one badge, one Good Turn at a time. We are for any girl, and every girl.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="bg-white text-black px-8 py-3.5 rounded-full font-bold text-sm hover:opacity-80 transition-opacity flex items-center gap-2 uppercase">
              Become a Guide <IconArrowRight />
            </a>
            <a href="#pillars" className="border-2 border-white text-white px-8 py-3.5 rounded-full font-bold text-sm hover:bg-white hover:text-black transition-all uppercase">
              What We Do
            </a>
          </div>
        </div>
        <div className="columns-3 gap-3">
          {tiles.map((item, i) => (
            <div key={i} className={`${item.h} mb-3 break-inside-avoid rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-800`}>
              <img
                src={asset(item.key, 200, 200, item.t)}
                alt={item.t}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
