import React from "react";
import { SiHyperskill } from "react-icons/si";
import Tag from "../shared/tag";
import img from "@/public/Profile Image.webp";
import Image from "next/image";
import WordRotate from "../ui/word-rotate";
import { Button } from "../ui/button";

export default function AboutMe() {
  return (
    <div>
      <div className=" py-10 md:py-[6rem] md:px-0 px-6">
        <div>
          <div className="max-w-7xl mx-auto py-4 md:py-[3rem]">
            <div className=" flex items-center justify-center">
              <Tag
                text="Who am I ?"
                icon={<SiHyperskill size={16} />}
                textColor="text-blue-600"
                borderColor="border-blue-600"
                backgroundColor="bg-transparent"
              />
            </div>
            <h1 className=" text-4xl font-normal bg-gradient-to-br from-white to-gray-500 bg-clip-text text-transparent max-w-xl mx-auto pt-3 text-center">
              Skills That Bring Ideas to Life
            </h1>
            <p className=" text-center max-w-xl mx-auto pt-3 text-gray-500">
              A versatile blend of design creativity, technical expertise, and
              problem-solving, crafted to deliver exceptional results.
            </p>
          </div>

          <div className=" max-w-7xl mx-auto py-10 ">
            <div>
              <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-8">
                <Image
                  src={img}
                  alt="Profile Image"
                  width={500}
                  height={500}
                  className=" rounded-lg -rotate-3 p-10 "
                />
                <div className=" flex flex-col gap-y-4 py-10">
                  <h1 className=" flex items-center gap-2 md:text-3xl text-xl font-semibold bg-gradient-to-br from-white to-gray-500 bg-clip-text text-transparent ">
                    I&apos;m Shanka Visal and I&apos;m a
                    <WordRotate
                      className="md:text-3xl text-xl font-semibold bg-gradient-to-br  from-white to-gray-500 bg-clip-text text-transparent   "
                      words={["Freelancer", "Developer", "Designer"]}
                    />
                  </h1>
                  <p className=" text-gray-500">
                    Hi! I&apos;m Shanka Visal Amarasekara, a 23 years old
                    student pursuing a B.Sc (Hons) in Computing and Information
                    Systems at Sabaragamuwa University, Sri Lanka. I call
                    Gampaha, Sri Lanka home.
                  </p>
                  <p className=" text-gray-500">
                    I&apos;m keen on embracing and mastering new technologies.
                    My focus lies in web development, where I&apos;ve honed my
                    skills in creating intuitive and dynamic web applications.
                    Moreover, I&apos;ve ventured into mobile development using
                    the Flutter framework, diving into the world of
                    cross-platform mobile app development.
                  </p>
                  <p className=" text-gray-500">
                    As I traverse through my academic journey, I&apos;ve become
                    adept at merging theory with practical application,
                    fostering a robust foundation in software engineering
                    principles. I&apos;m constantly seeking new opportunities to
                    apply my knowledge. I&apos;m excited about the endless
                    possibilities technology offers and am keen on contributing
                    innovative solutions to the tech community.
                  </p>
                  <p className=" text-gray-500">
                    Let&apos;s collaborate and explore the exciting world of
                    technology together !!
                  </p>
                  <div className=" pt-6">
                    <Button>Download CV</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
