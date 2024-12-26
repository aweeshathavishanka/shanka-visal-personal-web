import React from "react";
import BlurIn from "../ui/blur-in";
import { MdVerified } from "react-icons/md";

export default function CTATags() {
  return (
    <div className="border-t border-[#5d5d5d]/30 border-b  bg-white/5">
      <div className=" max-w-7xl mx-auto py-4 md:py-[3rem] ">
        <div className=" flex items-center gap-x-[6rem] justify-center opacity-35">
          <h1 className=" flex items-center gap-3 text-3xl">
            {" "}
            <MdVerified />
            Freelancer
          </h1>
          <h1 className=" flex items-center gap-3 text-3xl  ">
            <MdVerified />
            Developer
          </h1>
          <h1 className=" flex items-center gap-3 text-3xl">
            <MdVerified />
            Designer
          </h1>
        </div>
      </div>
    </div>
  );
}
