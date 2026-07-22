import { IconArrowRight } from './Icons'

export default function Marquee() {
  return (
    <section className="py-10 px-6 overflow-hidden">
      <div className="bg-black text-white py-6 -rotate-1 overflow-hidden">
        <div className="flex gap-8 whitespace-nowrap marquee-track">
          {[1, 2].map(i => (
            <span key={i} className="font-black text-2xl uppercase flex items-center gap-8 flex-shrink-0">
              NATIONWIDE <IconArrowRight size={22} /> GIRL LED <IconArrowRight size={22} /> VALUES BASED <IconArrowRight size={22} /> ACROSS 34 STATES <IconArrowRight size={22} /> JOIN US → JOIN US → JOIN
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
