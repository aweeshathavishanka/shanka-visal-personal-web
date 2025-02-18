import Image from "next/image";
import React from "react";
import profileImg from "@/public/Profile Image.webp";
import { Button } from "../ui/button";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import BlurIn from "../ui/blur-in";
import Meteors from "../ui/meteors";
import { Spotlight } from "../ui/Spotlight";

export default function HeroSection() {
  return (
    <div className=" py-20 md:py-[8rem]">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      {/* <Meteors number={30} /> */}
      <div className=" max-w-7xl mx-auto ">
        <div className=" flex items-center justify-center ">
          <div className=" flex items-center flex-col space-y-8">
            <Image
              src={profileImg}
              alt="Profile Image"
              width={1000}
              height={1000}
              className=" h-40 w-40 rounded-full border-8 border-gray-200/30 text-center "
            />
            <h1 className=" text-lg  bg-blue-700/20 px-4 py-2 rounded-full flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
              <span className="">Hi.! I&apos;m Shanka Visal</span> 👋
            </h1>

            <BlurIn
              word="Transforming ideas into exceptional digital experiences."
              className="text-7xl font-normal leading-0 max-w-2xl text-center bg-gradient-to-br from-white to-gray-500 bg-clip-text text-transparent"
            />
            <div className=" flex items-center gap-8">
              <Button className=" bg-white text-black rounded-full hover:text-white">
                <Link href={"/"}>Download CV</Link>
              </Button>
              <Button variant={"link"} className=" text-white  bg-transparent ">
                Let&apos; Connect <IoIosArrowRoundForward />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
