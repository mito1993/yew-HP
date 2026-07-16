export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-40 bg-[#080808] overflow-hidden">

      {/* Tokyo map background */}
      <div className="absolute inset-0 z-0 opacity-[0.06]">
        <img
          src="https://readdy.ai/api/search-image?query=Minimalist%20dark%20top-down%20map%20of%20Tokyo%20city%20with%20subtle%20white%20street%20grid%20lines%20on%20black%20background%2C%20clean%20modern%20cartographic%20style%2C%20abstract%20urban%20layout%2C%20very%20low%20contrast%2C%20elegant%20design&width=1600&height=900&seq=about-tokyo-map&orientation=landscape"
          alt="Tokyo Area Map"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-3xl mx-auto px-6 md:px-10 relative z-10">
        <div className="text-center mb-16">
          <p className="font-oswald text-white/50 text-xs tracking-[0.4em] mb-4">
            — OUR PHILOSOPHY —
          </p>
          <h2 className="font-oswald text-white text-5xl md:text-7xl tracking-widest font-bold">
            ABOUT
          </h2>
        </div>

        <div className="text-center">
          <h3 className="font-mincho text-white text-3xl md:text-4xl tracking-wider mb-8 leading-tight font-bold">
            街中に気になる<span className="text-accent-500">違和感</span>を創出する。
          </h3>
          <p className="font-mincho text-white/70 text-base md:text-lg leading-loose mb-6">
            日本の伝統的な盆栽を世界へ広めることを使命に、2015年に設立された YEW（2016年に株式会社松葉屋を設立）。
          </p>
          <p className="font-mincho text-white/70 text-base md:text-lg leading-loose mb-12">
            単に伝統を守るのではなく、「おもてなし」と「利他の精神」に根ざす盆栽の本質を敬いながら、ストリートカルチャー、ファッション、アートとのコラボレーションを通じて革新を追求する。私たちは日々進化し、盆栽という永遠の美を通して「日本のかっこよさ」を再定義し、新たな価値を創造しています。
          </p>

          <div className="grid grid-cols-3 gap-8 pt-10 border-t border-white/10 max-w-md mx-auto">
            <div>
              <p className="font-oswald text-white text-3xl md:text-4xl font-bold mb-1">10+</p>
              <p className="font-oswald text-white/50 text-xs tracking-widest">YEARS OF HERITAGE</p>
            </div>
            <div>
              <p className="font-oswald text-white text-3xl md:text-4xl font-bold mb-1">50+</p>
              <p className="font-oswald text-white/50 text-xs tracking-widest">BRAND COLLABS</p>
            </div>
            <div>
              <p className="font-oswald text-white text-3xl md:text-4xl font-bold mb-1">∞</p>
              <p className="font-oswald text-white/50 text-xs tracking-widest">POSSIBILITIES</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}