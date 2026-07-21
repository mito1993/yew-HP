const members = [
  {
    role: "CEO",
    nameJa: "司城 駿",
    nameEn: "Tsukasaki Hayato",
    image: "/images/ceo_profile.png",
    bio: `大学在学中、人材紹介事業の立ち上げに参画し、ゼロから事業をつくる面白さと難しさを知る。
大学卒業後は株式会社キーエンスに入社し、センサ事業部にて中部エリアを中心としたコンサルティングセールスに従事。ものづくりの現場に深く入り込み、顧客の課題解決に向き合う姿勢を培う。
その後、株式会社Anyglo にて広告代理店業を経験。デジタル広告の知見を蓄えたのち、2026年7月、yew株式会社を設立。`,
  },
  {
    role: "COO",
    nameJa: "安 夏慧竜",
    nameEn: "Yasu Kakeru",
    image: "/images/coo_profile.png",
    bio: `大学在学中にフードブランド支援会社にてアウトバウンドチームの立ち上げに参画。
大学卒業後はレバレジーズ株式会社に入社し、医療業界の人材紹介事業部にて大阪エリアの担当アドバイザーとして従事。看護領域を中心に、深刻な人材不足が続く医療現場の課題解決に向き合う。2年目にはチームリーダーを務め、メンバーの育成や組織づくりに取り組む。
その後、代表の司城と共にyew株式会社を設立。`,
  },
];

export default function Members() {
  return (
    <section id="members" className="relative py-24 md:py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-20">
          <p className="font-oswald text-white/50 text-xs tracking-[0.4em] mb-4">
            — LEADERSHIP —
          </p>
          <h2 className="font-oswald text-white text-5xl md:text-7xl tracking-widest font-bold">
            MEMBERS
          </h2>
        </div>

        <div className="space-y-20">
          {members.map((member, idx) => (
            <div
              key={member.nameEn}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
            >
              {/* 画像領域（添付写真の横長比率 3:2 に合わせて調整） */}
              <div
                className={`relative aspect-[3/2] overflow-hidden group border border-white/10 ${
                  idx % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <img
                  src={member.image}
                  alt={member.nameJa}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent"></div>
              </div>

              {/* ライティング領域 */}
              <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                <p className="font-oswald text-white/40 text-xs tracking-[0.4em] mb-3">
                  {member.role}
                </p>
                <h3 className="font-mincho text-white text-3xl md:text-4xl tracking-wider mb-2 font-bold">
                  {member.nameJa}
                  <span className="font-oswald text-white/50 text-base md:text-lg tracking-widest font-normal ml-3">
                    ({member.nameEn})
                  </span>
                </h3>

                <div className="w-12 h-0.5 bg-white/30 my-6"></div>

                <p className="font-mincho text-white/70 text-base leading-loose whitespace-pre-line">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}