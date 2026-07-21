import { useEffect, useState, useRef } from "react";

const mainLinks = [
  { label: "HOME", href: "#top" },
  { label: "ABOUT", href: "#about" },
  { label: "SERVICES", href: "#services", hasDropdown: true, children: [
    { label: "POSTER", href: "#poster" },
    { label: "JACK", href: "#jack" },
    { label: "DIGITAL", href: "#digital" },
  ]},
  { label: "COMPANY", href: "#company" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleDropdownEnter = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    closeTimer.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 200);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/85 backdrop-blur-md border-b border-white/10 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="w-full px-6 md:px-10 flex items-center justify-between">
          <a
            href="#top"
            className="flex items-center gap-3 group cursor-pointer"
          >
            <img
              src="/images/yew_logo_white.png"
              alt="YEW"
              className="h-6 md:h-8 w-auto"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {mainLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.label}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  <a
                    href={link.href}
                    className="font-oswald text-xs tracking-widest text-white/80 hover:text-white transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1"
                  >
                    {link.label}
                    <i className={`ri-arrow-down-s-line w-4 h-4 flex items-center justify-center transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`}></i>
                  </a>
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 py-3 px-5 bg-black/95 border border-white/10 backdrop-blur-md transition-all duration-300 ${
                      dropdownOpen
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible translate-y-2"
                    }`}
                  >
                    <div className="flex flex-col gap-2 min-w-[120px]">
                      {link.children?.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="font-oswald text-xs tracking-widest text-white/70 hover:text-white transition-colors cursor-pointer whitespace-nowrap py-1"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-oswald text-xs tracking-widest text-white/80 hover:text-white transition-colors relative group cursor-pointer whitespace-nowrap"
                >
                  {link.label}
                  <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-500"></span>
                </a>
              )
            )}
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://www.instagram.com/tradmans_matsubaya.inc"
                target="_blank"
                rel="noopener"
                aria-label="Instagram"
                className="w-9 h-9 flex items-center justify-center border border-white/20 rounded-full text-white/80 hover:text-white hover:border-white transition-all cursor-pointer"
              >
                <i className="ri-instagram-line text-sm w-4 h-4 flex items-center justify-center"></i>
              </a>
              <a
                href="https://www.youtube.com/@TRADMANS"
                target="_blank"
                rel="noopener"
                aria-label="YouTube"
                className="w-9 h-9 flex items-center justify-center border border-white/20 rounded-full text-white/80 hover:text-white hover:border-white transition-all cursor-pointer"
              >
                <i className="ri-youtube-line text-sm w-4 h-4 flex items-center justify-center"></i>
              </a>
              <button
                type="button"
                className="w-9 h-9 flex items-center justify-center border border-white/20 rounded-full text-white/80 hover:text-white hover:border-white transition-all cursor-pointer whitespace-nowrap font-oswald text-[10px]"
                aria-label="Language"
              >
                JP
              </button>
            </div>
            <button
              type="button"
              className="lg:hidden w-10 h-10 flex items-center justify-center text-white cursor-pointer"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <i className="ri-menu-line text-2xl w-6 h-6 flex items-center justify-center"></i>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl transition-all duration-500 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col h-full px-8 py-6">
          <div className="flex justify-end">
            <button
              type="button"
              className="w-10 h-10 flex items-center justify-center text-white cursor-pointer"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <i className="ri-close-line text-3xl w-8 h-8 flex items-center justify-center"></i>
            </button>
          </div>
          <nav className="flex-1 flex flex-col justify-center items-center gap-4">
            {mainLinks.map((link) => (
              <div key={link.label} className="flex flex-col items-center gap-2">
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-oswald text-2xl tracking-widest text-white/90 hover:text-white transition-colors cursor-pointer"
                >
                  {link.label}
                </a>
                {link.children && (
                  <div className="flex items-center gap-6 mt-1 mb-2">
                    {link.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        onClick={() => setMenuOpen(false)}
                        className="font-oswald text-sm tracking-[0.2em] text-white/50 hover:text-white/80 transition-colors cursor-pointer"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex items-center gap-4 mt-8">
              <a
                href="https://www.instagram.com/tradmans_matsubaya.inc"
                target="_blank"
                rel="noopener"
                aria-label="Instagram"
                className="w-11 h-11 flex items-center justify-center border border-white/30 rounded-full text-white cursor-pointer"
              >
                <i className="ri-instagram-line text-lg w-5 h-5 flex items-center justify-center"></i>
              </a>
              <a
                href="https://www.youtube.com/@TRADMANS"
                target="_blank"
                rel="noopener"
                aria-label="YouTube"
                className="w-11 h-11 flex items-center justify-center border border-white/30 rounded-full text-white cursor-pointer"
              >
                <i className="ri-youtube-line text-lg w-5 h-5 flex items-center justify-center"></i>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}