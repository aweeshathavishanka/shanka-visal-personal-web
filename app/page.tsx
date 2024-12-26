import CTATags from "@/components/sections/CTATags";
import HeroSection from "@/components/sections/HeroSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import Skill from "@/components/sections/Skill";
import { Tools } from "@/components/sections/Tools";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <HeroSection />
      <CTATags />
      <Skill />
      <Tools />
      <PortfolioSection />
    </main>
  );
}
