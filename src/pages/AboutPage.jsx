import { Link } from "react-router-dom";
import hero1 from "/assests/hero-01.jpg";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Top bar */}
      <div className="sticky top-0 z-40 bg-black/95 backdrop-blur-md border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide hover:opacity-60 transition-opacity"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          Back to Home
        </Link>
        <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
          About NGGA
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-24">
        {/* Page heading */}
        <div className="mb-16">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500">
            The Nigerian Girl Guides Association
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-black tracking-tight leading-none mt-4">
            <span className="stroke-text">WHO</span>
            <br />
            <span className="text-white">WE ARE</span>
          </h1>
        </div>

        {/* Intro with State Commissioner photo */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          <div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              The Nigerian Girl Guides Association (NGGA) is a member organization of the World Association Of Girl Guides And Girl Scouts. NGGA is our National guiding body in Nigeria.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              Girl Guides is an all female Association, we are for any girl and every girl. We are not a profit-making organization, but we develop hidden potentials in guides. Usually, each girl and adult members make a guide promise which shows their commitment to the principles of guiding and is her link with 10 million others guided around the world.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              We are a uniform Association. We have hierarchy starting from: Chief Commissioner, Deputy Chief Commissioner, National Officers, State Commissioners, Assistant State commissioner, Divisional Commissioner, District commissioners, Guiders, Rangers, Guides and Brownies.
            </p>
            <p className="text-gray-400 leading-relaxed">
              NGGA works with young girls and women across 30 States in Nigeria, we learn through our non-formal educational programs.
            </p>
          </div>

          {/* State Commissioner card */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="rounded-3xl overflow-hidden w-full max-w-sm">
              <img
                src={hero1}
                alt="State Commissioner Dr. Mrs. Roseline Alali Hart"
                className="w-full object-cover object-top"
                style={{ height: "480px" }}
              />
            </div>
            <div className="mt-4 max-w-sm">
              <p className="text-white font-black text-lg uppercase tracking-wide leading-tight">
                State Commissioner
              </p>
              <p className="text-[#F4B740] font-bold text-base mt-0.5">
                Dr. Mrs. Roseline Alali Hart
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Rivers State Chapter, Nigerian Girl Guides Association
              </p>
            </div>
          </div>
        </div>

        {/* What we do */}
        <section className="mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight">
            <span className="stroke-text">WHAT</span>
            <br />
            WE DO
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { num: "01", title: "Develop Life Skills", copy: "Guides learn practical, real-world skills that empower them for life." },
              { num: "02", title: "Discover and Lead", copy: "Girls discover, decide, plan and take the lead to carry out programs with the guidance of a trained adult volunteer leader." },
              { num: "03", title: "Take on Challenges", copy: "Guides choose to take up challenges and brainstorm to bring innovative ideas to their communities." },
              { num: "04", title: "Earn Badges", copy: "Earn a wide variety of badges and develop a great sense of achievement through real skills built." },
              { num: "05", title: "Outdoor Adventures", copy: "Engage in hiking, camping, cooking, camp fire, songs and community services and lots more." },
              { num: "06", title: "Indoor Activities", copy: "Work as a team, plan programs, and be creative and supportive to one another." },
            ].map((item) => (
              <div
                key={item.num}
                className="bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <span className="font-black text-3xl text-white/20">{item.num}</span>
                <h3 className="text-xl font-black text-white mt-2 mb-2 uppercase">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.copy}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Mission and Vision */}
        <section className="mb-16 grid md:grid-cols-2 gap-6">
          <div className="bg-[#E8447A] rounded-3xl p-8">
            <span className="text-xs font-bold uppercase tracking-widest text-white/70">Mission</span>
            <p className="text-white text-2xl font-black mt-3 leading-tight">
              To enable girls and young women to develop their fullest potential as responsible citizens of the World.
            </p>
          </div>
          <div className="bg-[#F4B740] rounded-3xl p-8">
            <span className="text-xs font-bold uppercase tracking-widest text-black/60">Vision</span>
            <p className="text-black text-2xl font-black mt-3 leading-tight">
              All girls and young women are valued to take action to change the World.
            </p>
          </div>
        </section>

        {/* The 4 Pillars */}
        <section className="mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight">
            <span className="stroke-text">THE FOUR</span>
            <br />
            PILLARS
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Learn", copy: "We create an enabling environment for young women and girls to learn through our non-formal educational programs.", color: "bg-[#C6FF3D] text-black" },
              { title: "Lead", copy: "Leadership is at the core of the Girl Guiding movement. Girls and women explore the opportunity to practice leadership from a very young age.", color: "bg-[#E8447A] text-white" },
              { title: "Speak Out", copy: "Young girls and women are empowered to develop their skills through body confidence and self-esteem building thereby speaking out for themselves and others.", color: "bg-[#F4B740] text-black" },
              { title: "Volunteer", copy: "Guides all over the world are known to render selfless service to their communities and the world at large making positive impact worldwide.", color: "bg-[#5FC9D6] text-black" },
            ].map((p) => (
              <div key={p.title} className={`${p.color} rounded-3xl p-7`}>
                <h3 className="text-3xl font-black mb-3 uppercase">{p.title}</h3>
                <p className="text-sm font-semibold opacity-80 leading-relaxed">{p.copy}</p>
              </div>
            ))}
          </div>
        </section>

        {/* The Promise */}
        <section className="mb-16 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight uppercase">The Guide Promise</h2>
          <p className="text-gray-300 text-xl md:text-2xl leading-relaxed font-bold italic max-w-2xl">
            "On my honor, I promise to do my best to do my duty to God and my country, to help other people at all times and to obey the Guide law."
          </p>
        </section>

        {/* The Laws */}
        <section className="mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight">
            <span className="stroke-text">THE GUIDE</span>
            <br />
            LAW
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { num: "1", title: "A Guide's honor is to be trusted", copy: "When a Guide says it is so, everybody knows it is just as true as if she has taken an oath." },
              { num: "2", title: "A Guide is loyal", copy: "To God and to her country, to her parents and guiders, to her friends and coworkers." },
              { num: "3", title: "A Guide's duty is to be useful and to help others", copy: "She is to do her duty even if it means giving up her own pleasure or comfort." },
              { num: "4", title: "A Guide is a friend to all and a sister to every other Guide", copy: "No matter what country, class or creed the other may belong to." },
              { num: "5", title: "A Guide is courteous", copy: "She is polite to all, especially to old people, invalids and people with special needs." },
              { num: "6", title: "A Guide is a friend to living things", copy: "A Guide needs to show empathy by being humane to every living object." },
              { num: "7", title: "A Guide obeys orders", copy: "She must be highly disciplined. A Guide should obey and carry out orders cheerfully and readily." },
              { num: "8", title: "A Guide smiles and sings under all difficulties", copy: "When in trouble or pain, she should smile and sing and not grumble." },
              { num: "9", title: "A Guide is thrifty", copy: "She takes care of her possessions and does not waste anything. She saves for the rainy day." },
              { num: "10", title: "A Guide is pure in thought, word and deed", copy: "She trains herself to look for what is beautiful in everything and avoids what is ugly and unclean." },
            ].map((law) => (
              <div key={law.num} className="flex gap-4 p-5 bg-white/5 border border-white/10 rounded-2xl">
                <span className="font-black text-3xl text-[#F4B740] flex-shrink-0 w-8">{law.num}</span>
                <div>
                  <h4 className="font-black text-white text-base mb-1">{law.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{law.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Motto, Good Turn, Salute */}
        <section className="grid sm:grid-cols-3 gap-5 mb-16">
          <div className="bg-[#C6FF3D] text-black rounded-3xl p-7">
            <span className="text-xs font-bold uppercase tracking-widest opacity-60">Motto</span>
            <h3 className="text-3xl font-black mt-2 mb-2">Be Prepared</h3>
            <p className="text-sm font-semibold opacity-80 leading-relaxed">
              Ready to go for any assignment. Willingness to serve is not enough — you must know how to do the job well, even in an emergency.
            </p>
          </div>
          <div className="bg-[#E8447A] text-white rounded-3xl p-7">
            <span className="text-xs font-bold uppercase tracking-widest opacity-70">Good Turn</span>
            <h3 className="text-3xl font-black mt-2 mb-2">Do a Good Turn Daily</h3>
            <p className="text-sm font-semibold opacity-80 leading-relaxed">
              The Girl Guides slogan, used since 1912. Good turn is our lifestyle in Guiding — a reminder of the many ways we can contribute to the lives of others.
            </p>
          </div>
          <div className="bg-[#5FC9D6] text-black rounded-3xl p-7">
            <span className="text-xs font-bold uppercase tracking-widest opacity-60">Handshake</span>
            <h3 className="text-3xl font-black mt-2 mb-2">The Left Handshake</h3>
            <p className="text-sm font-semibold opacity-80 leading-relaxed">
              We shake with the left hand because the left hand is closest to your heart — "From my heart to your heart." A gesture of trust and sincere friendship.
            </p>
          </div>
        </section>

        {/* Salute */}
        <section className="mb-16 bg-white/5 border border-white/10 rounded-3xl p-8">
          <h2 className="text-4xl font-black mb-4 uppercase">The Three-Finger Salute</h2>
          <p className="text-gray-300 leading-relaxed max-w-3xl">
            The three-finger salute is used by members of Scout and Guide organizations around the world. Made with the right hand, palm facing out, with the thumb holding down the little finger and fingertips at the right brow. The three fingers pointing up symbolize the three-fold promise: duty to God and country, helping other people at all times, and obeying the Guide Law.
          </p>
        </section>
      </div>
    </div>
  );
}
