export default function CompanyInfo() {
  const info = [
    {
      label: "COMPANY NAME",
      subLabel: "会社名",
      value: "yew株式会社（ユー）",
    },
    {
      label: "HEAD OFFICE",
      subLabel: "本社",
      value: "東京都渋谷区元代々木町9-6",
    },
    {
      label: "REPRESENTATIVE",
      subLabel: "代表",
      value: "CEO 司城 駿 / COO 安 夏慧竜",
    },
    {
      label: "BUSINESS",
      subLabel: "展開事業",
      value: "屋外広告事業",
    },
    {
      label: "CAPITAL",
      subLabel: "資本金",
      value: "1000万円（資本準備金含む）",
    },
    {
      label: "ESTABLISHED",
      subLabel: "設立",
      value: "2026年 7月 1日",
    },
    {
      label: "GROUP COMPANY",
      subLabel: "グループ会社",
      value: "株式会社Anyglo / 株式会社AgLab",
    },
  ];

  return (
    <section id="company" className="relative py-24 md:py-32 bg-[#080808]">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <p className="font-oswald text-white/50 text-xs tracking-[0.4em] mb-4">
            — CORPORATE PROFILE —
          </p>
          <h2 className="font-oswald text-white text-5xl md:text-7xl tracking-widest font-bold">
            COMPANY
          </h2>
        </div>

        {/* 1カラムの会社概要リスト */}
        <div>
          <dl className="space-y-6">
            {info.map((row) => (
              <div key={row.label} className="border-b border-white/10 pb-6">
                <dt className="flex items-center gap-2 mb-2">
                  <span className="font-oswald text-white/50 text-xs tracking-[0.3em]">
                    {row.label}
                  </span>
                  <span className="text-white/20 text-xs">/</span>
                  <span className="font-mincho text-white/40 text-xs tracking-wider">
                    {row.subLabel}
                  </span>
                </dt>
                <dd className="font-mincho text-white text-sm md:text-base leading-relaxed">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>

          {/* Google マップ */}
          <div className="mt-12">
            <div className="aspect-[16/9] w-full overflow-hidden border border-white/10">
              <iframe
                title="yew株式会社 本社所在地"
                src="https://maps.google.com/maps?q=東京都渋谷区元代々木町9-6&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full filter grayscale contrast-125"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}