import { useState } from "react";
import { galleryImages } from "@/mocks/gallery";

export default function Gallery() {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => setActiveIdx((prev) => (prev + 1) % galleryImages.length);
  const prev = () =>
    setActiveIdx((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  const current = galleryImages[activeIdx];

  return (
    <section id="gallery" className="relative py-24 md:py-32 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <p className="font-oswald text-white/50 text-xs tracking-[0.4em] mb-4">
            — VISUAL COLLECTION —
          </p>
          <h2 className="font-oswald text-white text-5xl md:text-7xl tracking-widest font-bold">
            GALLERY
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          {/* Main image display */}
          <div className="lg:col-span-2 relative">
            <div className="relative aspect-[4/3] overflow-hidden bg-white/5">
              <img
                key={current.id}
                src={current.src}
                alt={current.title}
                className="w-full h-full object-cover object-top animate-fade-in"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div>
                  <p className="font-oswald text-white/60 text-xs tracking-widest mb-1">
                    {String(activeIdx + 1).padStart(2, "0")} / {String(galleryImages.length).padStart(2, "0")}
                  </p>
                  <h3 className="font-oswald text-white text-3xl md:text-4xl tracking-widest font-bold">
                    {current.title}
                  </h3>
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={prev}
                    aria-label="Previous"
                    className="w-11 h-11 flex items-center justify-center border border-white/30 text-white hover:bg-white hover:text-black transition-all cursor-pointer"
                  >
                    <i className="ri-arrow-left-line w-4 h-4 flex items-center justify-center"></i>
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    aria-label="Next"
                    className="w-11 h-11 flex items-center justify-center border border-white/30 text-white hover:bg-white hover:text-black transition-all cursor-pointer"
                  >
                    <i className="ri-arrow-right-line w-4 h-4 flex items-center justify-center"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Thumbnail grid */}
          <div className="grid grid-cols-4 lg:grid-cols-2 gap-3">
            {galleryImages.map((image, idx) => (
              <button
                key={image.id}
                type="button"
                onClick={() => setActiveIdx(idx)}
                className={`relative aspect-square overflow-hidden cursor-pointer transition-all group ${
                  idx === activeIdx ? "ring-2 ring-white" : "opacity-60 hover:opacity-100"
                }`}
                aria-label={`View ${image.title}`}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}