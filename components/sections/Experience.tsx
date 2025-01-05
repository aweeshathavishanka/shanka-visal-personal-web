import React from "react";
import Tag from "../shared/tag";
import { SiHyperskill } from "react-icons/si";

export default function Experience() {
  return (
    <div>
      <div>
        <div>
          <div className=" max-w-7xl mx-auto">
            <div className=" flex flex-col items-center justify-center">
              <Tag
                text="Who am I ?"
                icon={<SiHyperskill size={16} />}
                textColor="text-blue-600"
                borderColor="border-blue-600"
                backgroundColor="bg-transparent"
              />
              <h1 className=" text-4xl font-normal bg-gradient-to-br from-white to-gray-500 bg-clip-text text-transparent max-w-xl mx-auto pt-3 text-center">
                Professional Experience
              </h1>
              <p className=" text-center max-w-xl mx-auto pt-3 text-gray-500">
                A timeline of my professional milestones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
