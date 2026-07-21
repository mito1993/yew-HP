const services = [
  {
    id: "poster",
    number: "01",
    title: "POSTER",
    subtitle: "見慣れた場所に、見たことのない一枚を。",
    description: `電柱、壁面、階段下、店頭、通勤動線。広告のためではなく、生活のためにある場所にこそ、人の視線が無防備になる瞬間がある。その一瞬を狙う。街に溶け込みながら、ふと目を奪う一枚を、エリア選定からクリエイティブ、施工・運用まで一貫して設計する。小さな違和感は、正しく置かれれば大きな記憶になる。POSTERは、その最も原始的で、最も確実な手段です。`,
    image: "/images/yew-HP_01service_poster.png",
  },
  {
    id: "jack",
    number: "02",
    title: "JACK",
    subtitle: "毎日の移動が、そのままブランド体験になる。",
    description: `電車、バス、タクシー、駅構内。通勤・通学という、意識せず繰り返される動線の上に、ブランドを面として展開する。一枚の広告ではなく視界そのものをジャックすることで、認知は線から面へ、面から記憶へと変わっていく。路線分析による最適な媒体選定から、クリエイティブ設計、施工まで。yewは、都市の動線をブランドの舞台に変えます。`,
    image: "/images/yew-HP_02service_jack.png",
  },
  {
    id: "digital",
    number: "03",
    title: "DIGITAL",
    subtitle: "街の中心に強烈な違和感を。",
    description: `都心のランドマークで、ブランドの存在感を一気に引き上げる大型デジタルサイネージ。ダイナミックな映像表現とリアルタイム配信を掛け合わせることで、その瞬間、その場所でしか生まれない強い違和感と没入感を創出します。`,
    image: "/images/yew-HP_03service_digital.png",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-20">
          <p className="font-oswald text-white/50 text-xs tracking-[0.4em] mb-4">
            — WHAT WE OFFER —
          </p>
          <h2 className="font-oswald text-white text-5xl md:text-7xl tracking-widest font-bold">
            SERVICES
          </h2>
          <p className="font-mincho text-white/50 text-sm mt-6 max-w-2xl mx-auto leading-relaxed">
            ポスター、交通広告、デジタルサイネージ。<br />
            都市のあらゆる接点をメディアに変え、ブランドの声を届けます。
          </p>
        </div>

        <div className="space-y-16">
          {services.map((service, idx) => (
            <div
              key={service.id}
              id={service.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center`}
            >
              <div className={`relative aspect-[4/5] overflow-hidden group ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-transparent"></div>
                <span className="absolute top-6 left-6 font-oswald text-white/90 text-6xl font-bold">
                  {service.number}
                </span>
              </div>

              <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                <p className="font-oswald text-white/40 text-xs tracking-[0.4em] mb-4">
                  {service.number} &nbsp;/&nbsp; SERVICE
                </p>
                <h3 className="font-oswald text-white text-5xl md:text-6xl tracking-widest font-bold mb-3">
                  {service.title}
                </h3>
                <p className="font-mincho text-white/60 text-lg mb-8 border-l-2 border-white/60 pl-4">
                  {service.subtitle}
                </p>

                {/* whitespace-pre-line により、上記 description 内の改行がそのまま美しく反映されます */}
                <p className="font-mincho text-white/70 text-base leading-loose mb-8 whitespace-pre-line">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}