import { Link } from 'react-router-dom'
import { IconArrowRight } from './Icons'

export default function CTASection() {
  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Big editorial CTA */}
        <div className="relative rounded-3xl bg-[#E8447A] overflow-hidden px-8 py-16 md:px-16 md:py-20 flex flex-col items-start gap-8">

          {/* Large watermark text */}
          <span
            aria-hidden="true"
            className="absolute right-[-2%] top-1/2 -translate-y-1/2 font-black uppercase leading-none select-none pointer-events-none text-white/10"
            style={{ fontSize: 'clamp(80px, 18vw, 200px)' }}
          >
            JOIN
          </span>

          <div className="relative z-10 max-w-2xl">
            <span className="text-white/60 text-xs font-bold uppercase tracking-[0.25em] mb-4 block">
              Nigerian Girl Guides Association — Rivers State
            </span>
            <h2
              className="font-black text-white leading-[0.9] tracking-tight mb-6"
              style={{ fontSize: 'clamp(42px, 8vw, 96px)' }}
            >
              Every girl
              <br />
              deserves to
              <br />
              <span className="text-black">be a Guide.</span>
            </h2>
            <p className="text-white/80 text-lg leading-relaxed max-w-md mb-8">
              Join a sisterhood that spans 30 states and over 10 million girls worldwide.
              Learn, lead, speak out and serve — starting today.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}
