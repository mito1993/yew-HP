import { newsItems } from "@/mocks/news";

export default function News() {
  return (
    <section id="news" className="relative py-24 md:py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="font-oswald text-white/50 text-xs tracking-[0.4em] mb-4">
              — LATEST UPDATES —
            </p>
            <h2 className="font-oswald text-white text-5xl md:text-7xl tracking-widest font-bold">
              NEWS
            </h2>
          </div>
          <a
            href="#news"
            className="group inline-flex items-center gap-2 font-oswald text-white/80 hover:text-white text-xs tracking-widest cursor-pointer whitespace-nowrap"
          >
            VIEW ALL NEWS
            <i className="ri-arrow-right-line w-4 h-4 flex items-center justify-center group-hover:translate-x-2 transition-transform"></i>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsItems.slice(0, 4).map((item) => (
            <a
              key={item.id}
              href="#news"
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden bg-white/5 aspect-[4/5] mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <span className="absolute top-4 left-4 font-oswald text-[10px] text-white bg-black/70 backdrop-blur-sm px-3 py-1 tracking-widest">
                  {item.category}
                </span>
              </div>
              <div>
                <p className="font-oswald text-white/50 text-xs tracking-widest mb-2">
                  {item.date}
                </p>
                <h3 className="text-white text-sm font-mincho leading-relaxed group-hover:text-white/70 transition-colors">
                  {item.title}
                </h3>
              </div>
            </a>
          ))}
        </div>

        {/* Additional news row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {newsItems.slice(4, 6).map((item) => (
            <a
              key={item.id}
              href="#news"
              className="group cursor-pointer flex gap-4 items-start bg-white/[0.03] p-4 hover:bg-white/[0.06] transition-all border border-white/5 lg:col-span-2"
            >
              <div className="w-24 h-24 flex-shrink-0 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-oswald text-[10px] text-white/70 border border-white/20 px-2 py-0.5 tracking-widest">
                    {item.category}
                  </span>
                  <span className="font-oswald text-white/40 text-[10px] tracking-widest">
                    {item.date}
                  </span>
                </div>
                <h3 className="text-white text-sm font-mincho leading-relaxed group-hover:text-white/70 transition-colors">
                  {item.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}