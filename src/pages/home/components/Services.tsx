const services = [
  {
    id: "poster",
    number: "01",
    title: "POSTER",
    subtitle: "ポスターメディア",
    description:
      "都心の主要駅や繁華街に設置された大型ポスターフレーム。通行人の視線を確実に捉える高インパクトなビジュアルで、ブランドメッセージを強力に発信。ロケーション選定からクリエイティブ制作まで一貫してサポートします。",
    image:
      "/images/yew-HP_01service_poster.png",
    features: ["主要駅・繁華街ロケーション", "大型高解像度フォーマット", "クリエイティブ制作支援"],
  },
  {
    id: "jack",
    number: "02",
    title: "JACK",
    subtitle: "交通広告メディア",
    description:
      "電車・バス・タクシーなど、都市交通のあらゆる接点をジャック。通勤・通学の動線上で繰り返し露出し、ブランド認知を加速度的に拡大。路線分析から媒体選定、施工までワンストップで提供します。",
    image:
      "/images/yew-HP_02service_jack.png",
    features: ["電車・バス・タクシー展開", "路線別リーチ分析", "施工・メンテナンス完備"],
  },
  {
    id: "digital",
    number: "03",
    title: "DIGITAL",
    subtitle: "デジタルOOH",
    description:
      "渋谷スクランブル交差点、新宿駅前など都心のランドマークに設置された大型デジタルサイネージ。ダイナミックな映像表現とリアルタイム配信で、圧倒的な存在感を実現。データドリブンな効果測定も標準装備。",
    image:
      "/images/yew-HP_03service_digital.png",
    features: ["大型LEDサイネージ", "リアルタイム配信対応", "効果測定レポート"],
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
                <p className="font-mincho text-white/70 text-base leading-loose mb-8">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-10">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <i className="ri-checkbox-blank-circle-fill text-white/60 text-[8px] w-2 h-2 flex items-center justify-center"></i>
                      <span className="font-mincho text-white/80 text-sm tracking-wide">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}