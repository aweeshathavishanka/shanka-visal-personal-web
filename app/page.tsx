import AboutMe from "@/components/sections/AboutMe";
import Achievements from "@/components/sections/Achievements";
import CTATags from "@/components/sections/CTATags";
import Experience from "@/components/sections/Experience";
import GallerySection from "@/components/sections/GallerySection";
import HeroSection from "@/components/sections/HeroSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import Qualification from "@/components/sections/Qualification";
import { RiMenu3Fill } from "react-icons/ri";

import Skill from "@/components/sections/Skill";
import { Tools } from "@/components/sections/Tools";
import Footer from "@/components/shared/Footer";
import { Button } from "@/components/ui/button";
import ScrollProgress from "@/components/ui/scroll-progress";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { IoIosArrowRoundForward } from "react-icons/io";

export default function Home() {
  return (
    <main className="  bg-black text-white min-h-screen">
      <ScrollProgress className="top-0" />
      <nav className="  sticky top-4 z-50 bg-black bg-opacity-50 backdrop-blur-md pl-6 pr-3 py-2  max-w-4xl mx-auto rounded-full border border-white/20 items-center justify-between hidden md:flex">
        <div>
          <Link href="/">
            <h1 className=" text-xl font-bold">S.V</h1>
          </Link>
        </div>
        <div className=" text-xs flex items-center gap-4 pl-3">
          <Button
            variant={"link"}
            className=" text-white hover:text-blue-600 font-medium px-0 py-0">
            <Link href="#services">Services</Link>
          </Button>
          <Button
            variant={"link"}
            className=" text-white hover:text-blue-600 font-medium px-0 py-0">
            <Link href="#experience">Experiences</Link>
          </Button>
          <Button
            variant={"link"}
            className=" text-white hover:text-blue-600 font-medium px-0 py-0">
            <Link href="#portfolio">Work</Link>
          </Button>
          <Button
            variant={"link"}
            className=" text-white hover:text-blue-600 font-medium px-0 py-0">
            <Link href="#qualification">Qualification</Link>
          </Button>
          <Button
            variant={"link"}
            className=" text-white hover:text-blue-600 font-medium px-0 py-0">
            <Link href="#achievements">Achievements</Link>
          </Button>
          <Button
            variant={"link"}
            className=" text-white hover:text-blue-600 font-medium px-0 py-0">
            <Link href="#gallery">Gallery</Link>
          </Button>
          <Button
            variant={"link"}
            className=" text-white hover:text-blue-600 font-medium px-0 py-0">
            <Link href="#about">About Me</Link>
          </Button>
        </div>
        <div>
          <Link href="https://cal.com/shanka-visal">
            <Button className=" rounded-full bg-white text-black hover:text-white text-xs py-0.5">
              Contact Me <IoIosArrowRoundForward />
            </Button>
          </Link>
        </div>
      </nav>
      <nav className=" sticky top-4 z-50 bg-black bg-opacity-50 backdrop-blur-md pl-6 pr-3 py-2  max-w-sm mx-auto rounded-full border border-white/20 items-center justify-between flex md:hidden">
        <div>
          <Link href="/">
            <h1 className=" text-xl font-bold">S.V</h1>
          </Link>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={"link"} className=" text-white ">
              <RiMenu3Fill size={20} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className=" border-white/20 bg-black bg-opacity-50 backdrop-blur-md items-end"
            align="end">
            <DropdownMenuItem className="">
              <Button
                variant={"link"}
                className=" text-white hover:text-blue-600 font-medium px-0 py-0">
                <Link href="#services">Services</Link>
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem className="">
              <Button
                variant={"link"}
                className=" text-white hover:text-blue-600 font-medium px-0 py-0">
                <Link href="#experience">Experiences</Link>
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem className="">
              <Button
                variant={"link"}
                className=" text-white hover:text-blue-600 font-medium px-0 py-0">
                <Link href="#portfolio">Work</Link>
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem className="">
              <Button
                variant={"link"}
                className=" text-white hover:text-blue-600 font-medium px-0 py-0">
                <Link href="#achievements">Achievements</Link>
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem className="">
              <Button
                variant={"link"}
                className=" text-white hover:text-blue-600 font-medium px-0 py-0">
                <Link href="#qualification">Qualification</Link>
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem className="">
              <Button
                variant={"link"}
                className=" text-white hover:text-blue-600 font-medium px-0 py-0">
                <Link href="#gallery">Gallery</Link>
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem className="">
              <Button
                variant={"link"}
                className=" text-white hover:text-blue-600 font-medium px-0 py-0">
                <Link href="#about">About Me</Link>
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem className="">
              <Link href="https://cal.com/shanka-visal">
                <Button className=" rounded-full bg-white text-black hover:text-white text-xs py-0.5">
                  Contact Me <IoIosArrowRoundForward />
                </Button>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
      <section id="home">
        <HeroSection />
        <CTATags />
      </section>
      <section id="services">
        <Skill />
        <Tools />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="portfolio">
        <PortfolioSection />
      </section>
      <section id="qualification">
        <Qualification />
      </section>
      <section id="achievements">
        <Achievements />
      </section>
      <section id="gallery">
        <GallerySection />
      </section>
      <section id="about">
        <AboutMe />
      </section>
      <Footer />
    </main>
  );
}
