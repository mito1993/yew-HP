export default function CompanyInfo() {
  const info = [
    { label: "COMPANY NAME", value: "株式会社 松葉屋 (MATSUBAYA Co., Ltd.)" },
    { label: "FOUNDED", value: "2015年 (Matsubaya Co., Ltd. 設立: 2016年)" },
    { label: "REPRESENTATIVE", value: "小島 鉄平 / Teppei Kojima" },
    { label: "HEAD OFFICE", value: "東京都渋谷区神宮前 YEW GALLERY" },
    { label: "BUSINESS", value: "盆栽制作・販売 / リース事業 / ワークショップ / ブランドコラボレーション" },
    { label: "PARTNERS", value: "NIKE, Dior, shu uemura, RIMOWA, PORTER 他" },
  ];

  return (
    <section id="company" className="relative py-24 md:py-32 bg-[#050505]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <p className="font-oswald text-white/50 text-xs tracking-[0.4em] mb-4">
            — CORPORATE PROFILE —
          </p>
          <h2 className="font-oswald text-white text-5xl md:text-7xl tracking-widest font-bold">
            COMPANY
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://public.readdy.ai/ai/img_res/edited_c56ef11f641380ffb2f52adb9e1e23b7_6a82ba7f.jpg"
              alt="YEW Bonsai Art"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 border border-white/10"></div>
            <div className="absolute top-4 left-4 w-16 h-16 border-t border-l border-white/40"></div>
            <div className="absolute bottom-4 right-4 w-16 h-16 border-b border-r border-white/40"></div>
          </div>

          <div>
            <dl className="space-y-6">
              {info.map((row) => (
                <div key={row.label} className="border-b border-white/10 pb-6">
                  <dt className="font-oswald text-white/50 text-xs tracking-[0.3em] mb-2">
                    {row.label}
                  </dt>
                  <dd className="font-mincho text-white text-sm md:text-base leading-relaxed">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-8">
              <div className="aspect-[16/9] w-full overflow-hidden border border-white/10">
                <iframe
                  title="YEW GALLERY Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7676796316366!2d139.7093!3d35.6707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQwJzE0LjUiTiAxMznCsDQyJzMzLjUiRQ!5e0!3m2!1sen!2sjp!4v1700000000000!5m2!1sen!2sjp"
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
      </div>
    </section>
  );
}