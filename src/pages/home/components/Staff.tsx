import { ceoData, staffMembers } from "@/mocks/staff";

export default function Staff() {
  return (
    <section id="staff" className="relative py-24 md:py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-20">
          <p className="font-oswald text-white/50 text-xs tracking-[0.4em] mb-4">
            — THE PEOPLE BEHIND —
          </p>
          <h2 className="font-oswald text-white text-5xl md:text-7xl tracking-widest font-bold">
            STAFF
          </h2>
        </div>

        {/* CEO Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-24 items-center bg-white/[0.02] border border-white/5">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src={ceoData.image}
              alt={ceoData.name}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute bottom-6 left-6">
              <p className="font-oswald text-white/70 text-xs tracking-[0.4em]">FOUNDER / CEO</p>
            </div>
          </div>
          <div className="p-8 md:p-12">
            <p className="font-oswald text-white/40 text-xs tracking-[0.4em] mb-3">01 &nbsp;/&nbsp; FOUNDER</p>
            <h3 className="font-mincho text-white text-4xl md:text-5xl mb-2 tracking-wider">
              {ceoData.nameEn}
            </h3>
            <p className="font-mincho text-white/60 text-lg mb-6">{ceoData.name}</p>
            <p className="font-oswald text-white/50 text-xs tracking-widest border-l-2 border-white/60 pl-3 mb-8">
              {ceoData.position}
            </p>
            <div className="space-y-4 mb-8">
              {ceoData.bio.map((paragraph, idx) => (
                <p key={idx} className="font-mincho text-white/70 text-sm leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            <a
              href={ceoData.instagram}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white text-xs font-oswald tracking-widest cursor-pointer group"
            >
              <i className="ri-instagram-line text-base w-4 h-4 flex items-center justify-center"></i>
              INSTAGRAM
              <i className="ri-arrow-right-up-line text-base w-4 h-4 flex items-center justify-center group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i>
            </a>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {staffMembers.map((member, idx) => (
            <div
              key={member.name}
              className="group bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <span className="absolute top-4 left-4 font-oswald text-[10px] text-white/80 tracking-widest">
                  {String(idx + 2).padStart(2, "0")}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-mincho text-white text-2xl mb-1">{member.name}</h3>
                <p className="font-mincho text-white/60 text-sm mb-3">{member.nameJa}</p>
                <p className="font-oswald text-white/50 text-[10px] tracking-widest border-l border-white/40 pl-2 mb-4">
                  {member.position}
                </p>
                <p className="font-mincho text-white/60 text-sm leading-relaxed mb-4 line-clamp-4">
                  {member.bio}
                </p>
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 text-white/60 hover:text-white text-xs font-oswald tracking-widest cursor-pointer"
                >
                  <i className="ri-instagram-line text-sm w-4 h-4 flex items-center justify-center"></i>
                  INSTAGRAM
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}