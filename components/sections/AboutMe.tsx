import React from "react";
import { SiHyperskill } from "react-icons/si";
import Tag from "../shared/tag";

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
        </div>
      </div>
    </div>
  );
}
