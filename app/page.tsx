import AboutMe from "@/components/sections/AboutMe";
import Achievements from "@/components/sections/Achievements";
import CTATags from "@/components/sections/CTATags";
import Experience from "@/components/sections/Experience";
import GallerySection from "@/components/sections/GallerySection";
import HeroSection from "@/components/sections/HeroSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import Qualification from "@/components/sections/Qualification";
import Skill from "@/components/sections/Skill";
import { Tools } from "@/components/sections/Tools";
import ScrollProgress from "@/components/ui/scroll-progress";

export default function Home() {
  return (
    <main className="  bg-black text-white min-h-screen">
      <ScrollProgress className="top-0" />
      <HeroSection />
      <CTATags />
      <Skill />
      <Tools />
      <Experience />
      <PortfolioSection />
      <Qualification />
      <Achievements />
      <GallerySection />
      <AboutMe />
    </main>
  );
}
