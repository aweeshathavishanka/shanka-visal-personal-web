import React from "react";
import Tag from "../shared/tag";
import { SiHyperskill } from "react-icons/si";
import { QualificationList } from "./QualificationList";

export default function Qualification() {
  return (
    <div>
      <div className=" py-10 md:py-[6rem] md:px-0 px-6">
        <div className="max-w-7xl mx-auto py-4 md:py-[3rem]">
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className=" flex items-start justify-start">
                <Tag
                  text="Qualification"
                  icon={<SiHyperskill size={16} />}
                  textColor="text-blue-600"
                  borderColor="border-blue-600"
                  backgroundColor="bg-transparent"
                />
              </div>
              <h1 className=" text-4xl font-normal bg-gradient-to-br from-white to-gray-500 bg-clip-text text-transparent max-w-xl  pt-3 text-start">
                My Academic and Professional Foundations
              </h1>
              <p className=" text-start max-w-xl pt-3 text-gray-500">
                A journey of learning and growth that fuels my expertise in
                design, development, and freelancing.
              </p>
            </div>
            <div>
              <QualificationList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
