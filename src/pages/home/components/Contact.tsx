import { useState, type FormEvent } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formError, setFormError] = useState<string>("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    // Honeypot check
    const honeypot = String(formData.get("website_alt") || "").trim();
    if (honeypot) {
      setStatus("success");
      form.reset();
      return;
    }
    formData.delete("website_alt");

    // Message length limit
    const message = String(formData.get("message") || "");
    if (message.length > 500) {
      setFormError("メッセージは500文字以内で入力してください。");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setFormError("");

    try {
      const body = new URLSearchParams();
      formData.forEach((value, key) => {
        body.append(key, String(value));
      });

      const response = await fetch("https://readdy.ai/api/form/d9bffg4ngs93pt5shakg", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });

      const responseText = await response.text();
      let parsed: { code?: string; meta?: { message?: string; detail?: string } } = {};
      try {
        parsed = JSON.parse(responseText);
      } catch {
        parsed = {};
      }

      const serverMsg = parsed?.meta?.message || parsed?.meta?.detail || responseText;

      if (
        !response.ok ||
        parsed?.code !== "OK" ||
        (typeof serverMsg === "string" && serverMsg.toLowerCase().includes("spam"))
      ) {
        setFormError(
          typeof serverMsg === "string" && serverMsg
            ? serverMsg
            : "送信に失敗しました。時間をおいて再度お試しください。"
        );
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setFormError("送信中にエラーが発生しました。");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#080808] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://readdy.ai/api/search-image?query=Elegant%20Japanese%20zen%20garden%20with%20bonsai%20trees%20at%20dusk%2C%20cinematic%20moody%20lighting%2C%20dramatic%20dark%20atmosphere%2C%20artistic%20traditional%20aesthetic%2C%20premium%20architectural%20photography%2C%20misty%20serene%20composition&width=1920&height=1200&seq=contact-bg-01&orientation=landscape"
          alt=""
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-[#080808]/70 to-[#080808]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        <div className="text-center mb-16">
          <p className="font-oswald text-white/50 text-xs tracking-[0.4em] mb-4">
            — GET IN TOUCH —
          </p>
          <h2 className="font-oswald text-white text-5xl md:text-7xl tracking-widest font-bold mb-4">
            CONTACT
          </h2>
          <p className="font-mincho text-white/60 text-sm md:text-base max-w-2xl mx-auto">
            リース、ワークショップ、コラボレーションのご相談など、お気軽にお問い合わせください。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Info side */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-oswald text-white text-lg tracking-widest mb-4">
                CONTACT INFORMATION
              </h3>
              <p className="font-mincho text-white/60 text-sm leading-relaxed">
                お電話またはフォームより<br />お問い合わせいただけます。
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 flex items-center justify-center border border-white/20 rounded-full flex-shrink-0">
                  <i className="ri-map-pin-line text-white text-lg w-5 h-5 flex items-center justify-center"></i>
                </div>
                <div>
                  <p className="font-oswald text-white/50 text-xs tracking-widest mb-1">ADDRESS</p>
                  <p className="font-mincho text-white text-sm leading-relaxed">
                    〒150-0001<br />
                    東京都渋谷区神宮前<br />
                    YEW GALLERY
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 flex items-center justify-center border border-white/20 rounded-full flex-shrink-0">
                  <i className="ri-mail-line text-white text-lg w-5 h-5 flex items-center justify-center"></i>
                </div>
                <div>
                  <p className="font-oswald text-white/50 text-xs tracking-widest mb-1">EMAIL</p>
                  <a href="mailto:info@tradmans.jp" className="font-mincho text-white text-sm hover:text-white/70 cursor-pointer">
                    info@tradmans.jp
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 flex items-center justify-center border border-white/20 rounded-full flex-shrink-0">
                  <i className="ri-time-line text-white text-lg w-5 h-5 flex items-center justify-center"></i>
                </div>
                <div>
                  <p className="font-oswald text-white/50 text-xs tracking-widest mb-1">BUSINESS HOURS</p>
                  <p className="font-mincho text-white text-sm">
                    Mon - Fri&nbsp;&nbsp;10:00 - 19:00<br />
                    Sat - Sun&nbsp;&nbsp;By appointment
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-4">
              <a
                href="https://www.instagram.com/tradmans_matsubaya.inc"
                target="_blank"
                rel="noopener"
                aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full text-white/70 hover:text-white hover:border-white transition-all cursor-pointer"
              >
                <i className="ri-instagram-line text-base w-4 h-4 flex items-center justify-center"></i>
              </a>
              <a
                href="https://www.youtube.com/@TRADMANS"
                target="_blank"
                rel="noopener"
                aria-label="YouTube"
                className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full text-white/70 hover:text-white hover:border-white transition-all cursor-pointer"
              >
                <i className="ri-youtube-line text-base w-4 h-4 flex items-center justify-center"></i>
              </a>
            </div>
          </div>

          {/* Form side */}
          <div className="lg:col-span-3">
            <form
              id="contact-form"
              data-readdy-form
              onSubmit={handleSubmit}
              className="bg-white/[0.03] border border-white/10 backdrop-blur-sm p-6 md:p-10 space-y-6"
            >
              {/* Honeypot */}
              <input
                type="text"
                name="website_alt"
                className="honeypot-field"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                readOnly
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block font-oswald text-white/70 text-xs tracking-widest mb-2">
                    NAME <span className="text-white/40">お名前 *</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full bg-transparent border-b border-white/20 focus:border-white text-white text-sm py-3 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-oswald text-white/70 text-xs tracking-widest mb-2">
                    EMAIL <span className="text-white/40">メール *</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full bg-transparent border-b border-white/20 focus:border-white text-white text-sm py-3 outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block font-oswald text-white/70 text-xs tracking-widest mb-2">
                    PHONE <span className="text-white/40">電話番号</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full bg-transparent border-b border-white/20 focus:border-white text-white text-sm py-3 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block font-oswald text-white/70 text-xs tracking-widest mb-2">
                    SUBJECT <span className="text-white/40">お問い合わせ内容 *</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full bg-transparent border-b border-white/20 focus:border-white text-white text-sm py-3 outline-none transition-colors pr-8"
                  >
                    <option value="" className="bg-black">選択してください</option>
                    <option value="lease" className="bg-black">盆栽リースについて</option>
                    <option value="workshop" className="bg-black">ワークショップについて</option>
                    <option value="collaboration" className="bg-black">コラボレーション</option>
                    <option value="media" className="bg-black">取材・メディア</option>
                    <option value="other" className="bg-black">その他</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block font-oswald text-white/70 text-xs tracking-widest mb-2">
                  MESSAGE <span className="text-white/40">メッセージ * (500文字以内)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  maxLength={500}
                  rows={5}
                  className="w-full bg-transparent border border-white/20 focus:border-white text-white text-sm p-4 outline-none transition-colors resize-none"
                ></textarea>
              </div>

              {status === "success" && (
                <div className="bg-white/10 border border-white/30 p-4 flex items-center gap-3">
                  <i className="ri-check-line text-white text-xl w-5 h-5 flex items-center justify-center"></i>
                  <p className="font-mincho text-white text-sm">
                    お問い合わせを受け付けました。担当者よりご連絡差し上げます。
                  </p>
                </div>
              )}

              {status === "error" && formError && (
                <div className="bg-red-500/10 border border-red-500/40 p-4 flex items-center gap-3">
                  <i className="ri-error-warning-line text-red-400 text-xl w-5 h-5 flex items-center justify-center"></i>
                  <p className="font-mincho text-red-300 text-sm">{formError}</p>
                </div>
              )}

              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="group inline-flex items-center gap-3 px-10 py-4 bg-white text-black font-oswald tracking-widest text-xs hover:bg-white/80 transition-all cursor-pointer whitespace-nowrap disabled:opacity-50"
                >
                  {status === "loading" ? (
                    <>
                      <i className="ri-loader-4-line animate-spin w-4 h-4 flex items-center justify-center"></i>
                      SENDING...
                    </>
                  ) : (
                    <>
                      SEND MESSAGE
                      <i className="ri-arrow-right-line w-4 h-4 flex items-center justify-center group-hover:translate-x-1 transition-transform"></i>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}