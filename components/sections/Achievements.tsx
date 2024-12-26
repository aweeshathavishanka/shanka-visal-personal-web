import React from "react";
import { SiHyperskill } from "react-icons/si";
import Tag from "../shared/tag";

export default function Achievements() {
  return (
    <div>
      <div>
        <div className=" py-10 md:py-[6rem] md:px-0 px-6">
          <div className="max-w-7xl mx-auto py-4 md:py-[3rem]">
            <div className=" ">
              <div>
                <div className=" flex items-center justify-center">
                  <Tag
                    text="Achievements"
                    icon={<SiHyperskill size={16} />}
                    textColor="text-blue-600"
                    borderColor="border-blue-600"
                    backgroundColor="bg-transparent"
                  />
                </div>
                <h1 className=" text-4xl font-normal text-center bg-gradient-to-br from-white to-gray-500 bg-clip-text text-transparent max-w-xl  pt-3 mx-auto">
                  Competitions
                </h1>
                <p className=" text-center mx-auto max-w-xl pt-3 text-gray-500">
                  A journey of learning and growth that fuels my expertise in
                  design, development, and freelancing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
