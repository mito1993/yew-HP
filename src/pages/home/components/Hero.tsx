export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background image with slow zoom */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full animate-slow-zoom">
          <img
            src="/images/yew-HP_FV.png"
            alt="YEW BONSAI Gallery"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90"></div>
      </div>

      {/* Vertical text left side */}
      <div className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 z-10">
        <p className="text-vertical text-white/50 font-oswald tracking-widest2 text-xs">
          — JAPANESE TRADITIONAL BONSAI —
        </p>
      </div>

      {/* Vertical text right side */}
      <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 z-10">
        <p className="text-vertical text-white/50 font-mincho text-xs tracking-widest">
          伝統は革新の連続である
        </p>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full text-center px-6 opacity-0 animate-fade-up" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
        <div className="inline-flex items-center gap-4 mb-8">
          <span className="w-12 h-px bg-white/60"></span>
          <span className="font-oswald text-white/80 text-xs tracking-[0.4em]">
            EST. 2026
          </span>
          <span className="w-12 h-px bg-white/60"></span>
        </div>

        <h1 className="mb-4 flex justify-center">
          <img
            src="/images/yew_logo_white.png"
            alt="YEW"
            className="h-16 md:h-24 lg:h-32 w-auto"
          />
        </h1>
        <h1 className="font-oswald text-white text-4xl md:text-6xl lg:text-[6rem] tracking-[0.15em] font-light leading-none mb-8">
          Out Of Home Media
        </h1>

        <p className="font-oswald text-white/70 text-sm md:text-base tracking-[0.5em] mb-12">
          JAPANESE &nbsp;·&nbsp; TRADITIONAL &nbsp;·&nbsp; MARKETING
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#about"
            className="group inline-flex items-center gap-3 px-8 py-4 border border-white/70 text-white font-oswald tracking-widest text-xs hover:bg-white hover:text-black transition-all duration-500 cursor-pointer whitespace-nowrap"
          >
            EXPLORE OUR WORLD
            <i className="ri-arrow-right-line w-4 h-4 flex items-center justify-center group-hover:translate-x-1 transition-transform"></i>
          </a>
          <a
            href="#services"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-oswald tracking-widest text-xs hover:bg-white/80 transition-all duration-500 cursor-pointer whitespace-nowrap"
          >
            VIEW GALLERY
            <i className="ri-arrow-right-up-line w-4 h-4 flex items-center justify-center"></i>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="font-oswald text-white/60 text-[10px] tracking-[0.4em]">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent animate-pulse"></div>
      </div>
    </section>
  );
}