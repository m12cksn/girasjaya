import About from "@/components/About";
import GetPromo from "@/components/GetPromo";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Gallery from "@/components/Gallery";
import ShortStorySection from "@/components/Story";
import Tentang from "@/components/Tentang";

export default function Home() {
  return (
    <div>
      <Hero />
      <Tentang />
      <About />
      <GetPromo />
      <Gallery />
      <ShortStorySection />
    </div>
  );
}
