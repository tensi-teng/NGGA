import { IconArrowRight } from './Icons'

const badges = [
  { label: 'Camping',           color: 'bg-[#E8447A] text-white' },
  { label: 'First Aid',         color: 'bg-black text-white dark:bg-white dark:text-black' },
  { label: 'Leadership',        color: 'bg-[#F4B740] text-black' },
  { label: 'Community Service', color: 'bg-[#5FC9D6] text-black' },
  { label: 'Outdoor Adventure', color: 'bg-gray-900 text-white' },
  { label: 'Craft & Creativity',color: 'bg-gray-200 dark:bg-gray-700 text-black dark:text-white' },
  { label: 'Citizenship',       color: 'bg-[#E8447A] text-white' },
  { label: 'Team Building',     color: 'bg-black text-white dark:bg-white dark:text-black' },
]

export default function Badges() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs font-bold tracking-widest uppercase text-gray-500">Growth Through Doing</span>
          <h2 className="text-5xl md:text-6xl font-black mb-6 mt-2 leading-tight">
            Badges &amp;
            <br />
            Life Skills
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-md leading-relaxed">
            Every guide earns her way. From outdoor adventure to community service, badges mark real skills built and real challenges met.
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-full font-bold text-sm hover:opacity-80 transition-opacity flex items-center gap-2 uppercase">
            See All Badges <IconArrowRight />
          </button>
        </div>
        <div className="flex flex-wrap gap-3">
          {badges.map((tag, i) => (
            <span key={i} className={`${tag.color} px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wide`}>
              {tag.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
