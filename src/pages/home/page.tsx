import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import Hero from "@/pages/home/components/Hero";
import About from "@/pages/home/components/About";
import Services from "@/pages/home/components/Services";
import CompanyInfo from "@/pages/home/components/CompanyInfo";
import Contact from "@/pages/home/components/Contact";

export default function Home() {
  return (
    <div className="bg-[#050505] min-h-screen text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <CompanyInfo />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}