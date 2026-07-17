import { asset } from '../utils/img'

const stats = [
  ['30', 'States Nationwide'],
  ['10M+', 'Guides Worldwide'],
  ['150+', 'Countries'],
  ['WAGGGS', 'Member Body'],
  ['Non-Profit', 'Since Founding'],
]

// 6 real guide portraits from the assests folder
const avatarKeys = ['avatar-01', 'avatar-02', 'avatar-03', 'avatar-04', 'avatar-05', 'avatar-06']

export default function MakeGuiding() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto text-center relative">
        <div className="flex items-center justify-center gap-6 mb-4">
          <div className="hidden md:flex w-16 h-16 rounded-full border-2 border-gray-300 dark:border-gray-700 items-center justify-center flex-shrink-0">
            <svg width="30" height="30" viewBox="0 0 100 100">
              <path d="M50 15 L85 85 L15 85 Z" fill="none" stroke="#E8447A" strokeWidth="6" />
            </svg>
          </div>
          <span className="text-gray-500">Life Skills &amp; Leadership</span>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight text-white">
            Make Guiding
            <br />
            the Experience
          </h2>
          <span className="text-gray-500">Guiding Since Founding</span>
          <div className="hidden md:flex w-16 h-16 rounded-full border-2 border-gray-300 dark:border-gray-700 items-center justify-center flex-shrink-0">
            <svg width="30" height="30" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="34" fill="none" stroke="#F4B740" strokeWidth="6" />
            </svg>
          </div>
        </div>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg">
          We believe growth happens through doing. NGGA gives girls and young women dynamic, value-based training in life skills, leadership and citizenship — connecting every guide to a sisterhood of over 10 million guides across more than 150 countries.
        </p>
        <a href="#pillars" className="inline-block bg-white text-black px-8 py-3 rounded-full font-bold text-sm hover:opacity-80 transition-opacity mb-12 uppercase">
          Learn More
        </a>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 mb-12 border-t border-b border-white/10 py-6">
          {stats.map(([num, label], i) => (
            <div key={i} className="text-sm">
              <span className="font-black text-lg mr-1.5">{num}</span>
              <span className="text-gray-500">{label}</span>
            </div>
          ))}
        </div>
        {/* Real portrait avatars */}
        <div className="flex justify-center gap-3 overflow-x-auto pb-4">
          {avatarKeys.map((key, i) => (
            <div
              key={i}
              className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-white/20"
            >
              <img
                src={asset(key, 80, 80, 'Guide')}
                alt={`Guide ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
