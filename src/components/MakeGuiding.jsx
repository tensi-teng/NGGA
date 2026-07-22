const stats = [
  ['34', 'States Nationwide'],
  ['10M+', 'Guides Worldwide'],
  ['156', 'Countries'],
  ['WAGGGS', 'Member Body'],
  ['Non-Profit', 'Since Founding'],
]

// Pillar colours matched exactly from Pillars.jsx
const circles = [
  { bg: 'bg-[#C6FF3D]' },
  { bg: 'bg-[#E8447A]' },
  { bg: 'bg-[#F4B740]' },
  { bg: 'bg-[#5FC9D6]' },
  { bg: 'bg-[#E8447A]' },
  { bg: 'bg-[#C6FF3D]' },
]

export default function MakeGuiding() {
  return (
    <section className="py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto text-center relative">

        {/* Heading row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mb-4">
          <span className="text-gray-500 text-sm sm:text-base order-2 sm:order-1">Life Skills &amp; Leadership</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white order-1 sm:order-2 leading-tight">
            Make Guiding
            <br />
            the Experience
          </h2>
          <span className="text-gray-500 text-sm sm:text-base order-3">Guiding Since Founding</span>
        </div>

        <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-base sm:text-lg px-2">
          We believe growth happens through doing. NGGA gives girls and young women dynamic, value-based training in life skills, leadership and citizenship — connecting every guide to a sisterhood of over 10 million guides across more than 156 countries.
        </p>

        {/* Stats bar */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 sm:gap-x-10 sm:gap-y-4 border-t border-b border-white/10 py-5 sm:py-6 mb-10">
          {stats.map(([num, label], i) => (
            <div key={i} className="text-sm">
              <span className="font-black text-base sm:text-lg mr-1.5">{num}</span>
              <span className="text-gray-500">{label}</span>
            </div>
          ))}
        </div>

        {/* Solid-colour circles */}
        <div className="flex justify-center gap-3 sm:gap-4">
          {circles.map((c, i) => (
            <div
              key={i}
              className={`${c.bg} rounded-full flex-shrink-0`}
              style={{ width: 56, height: 56 }}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
