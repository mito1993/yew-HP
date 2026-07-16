export default function Marquee() {
  const items = [
    "YEW",
    "★",
    "JAPANESE TRADITIONAL",
    "★",
    "SINCE 2015",
    "★",
    "EST. TOKYO",
    "★",
  ];

  return (
    <section className="relative py-12 md:py-16 bg-white text-black overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...items, ...items, ...items, ...items].map((item, idx) => (
          <span
            key={idx}
            className="font-oswald text-4xl md:text-6xl font-bold tracking-widest px-8 flex-shrink-0"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}