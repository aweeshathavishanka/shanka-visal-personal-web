import Image from "next/image";
import React from "react";
import profileImg from "@/public/Profile Image.webp";
import { Button } from "../ui/button";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import BlurIn from "../ui/blur-in";
import Meteors from "../ui/meteors";

export default function HeroSection() {
  return (
    <div className=" py-10 md:py-[6rem]">
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
            <h1 className=" text-xl ">
              <span className="bg-gradient-to-br from-white to-gray-500 bg-clip-text text-transparent">
                Hi.! I&apos;m Shanka Visal
              </span>{" "}
              👋
            </h1>

            <BlurIn
              word="Transforming ideas into exceptional digital experiences."
              className="text-7xl font-normal leading-0 max-w-2xl text-center bg-gradient-to-br from-white to-gray-500 bg-clip-text text-transparent"
            />
            <div className=" flex items-center gap-8">
              <Button className=" border-gray-600">
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
