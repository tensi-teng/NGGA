import { IconArrowRight } from './Icons'
import assetMap from '../utils/img'

// Pull every image from all event folders and shuffle them once at load time
const allImages = Object.keys(assetMap)
  .filter((k) => /\/(thinking-day|birthday|thanksgiving|meeting)-/.test(k) && !k.includes('vid-'))
  .map((k) => assetMap[k])

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// 9 random images, varying heights for the masonry feel
const heights = ['h-40', 'h-28', 'h-36', 'h-28', 'h-40', 'h-32', 'h-36', 'h-28', 'h-40']
const shuffled = shuffle(allImages).slice(0, 9)

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
          {shuffled.map((src, i) => (
            <div key={i} className={`${heights[i]} mb-3 break-inside-avoid rounded-2xl overflow-hidden bg-gray-800`}>
              <img
                src={src}
                alt="NGGA"
                className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
