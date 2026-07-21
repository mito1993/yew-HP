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
            情報を届けるだけでは、人の心は動かない。<br />距離を縮めるのは、記憶に残ることだけ。
          </p>
          <p className="font-mincho text-white/70 text-base md:text-lg leading-loose mb-12">
            広告は、見られなければ存在しない。そして人は、見慣れた景色を見ていない。
            <br />電柱、階段下、通勤の途中、交差点の片隅。毎日通るその場所に、ほんの少しのズレを置く。すると人は、無意識に視線を止める。
            <br />説明されなくても、気づけば覚えている。これは偶然ではなく設計できる現象だ。
            <br/>yewは、その「気になる」の正体を組み立て、街という日常のメディアに、狙って違和感をつくる会社です。
            <br />掲出して終わりではなく、記憶に残って初めて広告は機能する。
            <br />私たちは、企業と消費者の間にある距離を、違和感という設計によって縮めていきます。
          </p>
        </div>
      </div>
    </section>
  );
}