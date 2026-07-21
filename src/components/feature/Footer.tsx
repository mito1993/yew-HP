export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/images/yew_logo_white.png"
                alt="YEW"
                className="h-8 w-auto"
              />
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-md mb-6 font-mincho">
              都市のあらゆる接点をメディアに。<br />
              ポスター、交通広告、デジタルサイネージを通じて、ブランドの新たな価値を創造します。
            </p>
          </div>

          <div>
            <h4 className="font-oswald text-white tracking-widest text-sm mb-6">
              <a href="#top" className="hover:text-white/70 cursor-pointer">MENU</a>
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "HOME", href: "#top" },
                { label: "ABOUT", href: "#about" },
                { label: "SERVICES", href: "#services" },
                { label: "POSTER", href: "#poster", indent: true },
                { label: "JACK", href: "#jack", indent: true },
                { label: "DIGITAL", href: "#digital", indent: true },
                { label: "MEMBERS", href: "#members" },
                { label: "COMPANY", href: "#company" },
                { label: "CONTACT", href: "#contact" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`hover:text-white transition-colors cursor-pointer font-oswald tracking-wider ${
                      item.indent ? "text-white/40 pl-4 text-xs" : "text-white/60"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-oswald text-white tracking-widest text-sm mb-6">
              <a href="#contact" className="hover:text-white/70 cursor-pointer">CONTACT</a>
            </h4>
            <ul className="space-y-3 text-sm text-white/60 font-mincho">
              <li className="flex items-start gap-2">
                <i className="ri-map-pin-line mt-0.5 w-4 h-4 flex items-center justify-center"></i>
                <span>東京都渋谷区元代々木町9-6</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-mail-line w-4 h-4 flex items-center justify-center"></i>
                <a href="mailto:info@yew-group.co.jp" className="hover:text-white cursor-pointer">info@tradmans.jp</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-oswald text-xs text-white/40 tracking-widest">
            © 2026 yew.inc All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-white/40 font-oswald tracking-widest">
            <a href="#" className="hover:text-white cursor-pointer">PRIVACY POLICY</a>
            <a href="#" className="hover:text-white cursor-pointer">TERMS</a>
          </div>
        </div>
      </div>
    </footer>
  );
}