import { IconArrowRight } from './Icons'

export default function LearnLeadConnect() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs font-bold tracking-widest uppercase text-gray-500">Programs</span>
          <h2 className="text-5xl md:text-6xl font-black mb-6 mt-2 leading-tight">
            Learn, Lead
            <br />
            &amp; Connect.
          </h2>
          <p className="text-gray-400 text-lg mb-2 max-w-md leading-relaxed">
            Discover what makes guiding an immersive journey. Every guide moves through badge work, patrol life and the Guide Promise — a lasting connection between herself and her sisterhood, from Brownie to Guider.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="w-72 h-[580px] bg-black rounded-[3rem] border-4 border-gray-700 overflow-hidden relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-700 rounded-b-2xl z-10"></div>
            <div className="h-full bg-gradient-to-b from-gray-900 via-gray-800 to-black p-6 pt-14 flex flex-col items-start text-left">
              <div className="bg-white/10 text-white px-3 py-1 rounded-full text-xs font-black mb-4 uppercase">The Guide Promise</div>
              <h3 className="text-4xl font-black text-white leading-[0.95] mb-2">
                ON MY
                <br />
                HONOR
                <br />
                I PROMISE
                <br />
                TO DO MY BEST.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
