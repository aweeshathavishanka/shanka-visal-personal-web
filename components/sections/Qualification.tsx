import React from "react";
import Tag from "../shared/tag";
import { SiHyperskill } from "react-icons/si";
import { QualificationList } from "./QualificationList";

export default function Qualification() {
  return (
    <div>
      <div className="  md:px-0 px-6">
        <div className="max-w-7xl mx-auto py-4 md:py-[3rem]">
          <div className="">
            <div className=" flex flex-col items-start ">
              <div className=" flex items-start flex-col justify-start">
                <Tag
                  text="Qualification"
                  icon={<SiHyperskill size={16} />}
                  textColor="text-blue-600"
                  borderColor="border-blue-600"
                  backgroundColor="bg-transparent"
                />
              </div>
              <h1 className=" text-4xl text-start font-normal bg-gradient-to-br from-white to-gray-500 bg-clip-text text-transparent   pt-3">
                My Academic and Professional Foundations
              </h1>
              <p className=" text-start  pt-3 text-gray-500">
                A journey of learning and growth that fuels my expertise in
                design, development, and freelancing.
              </p>
            </div>
            <div className=" py-10">
              <QualificationList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
