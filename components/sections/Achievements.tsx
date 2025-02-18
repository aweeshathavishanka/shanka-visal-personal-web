import React from "react";
import { SiHyperskill } from "react-icons/si";
import Tag from "../shared/tag";
import CompetiionList from "./CompetiionList";

const competitions = [
  {
    id: 1,
    title: "CodeSprint - 2024",
    description:
      "Inter University Competition organized by IIT Campus Top 10 team from 525+ teams & 2400+ delegates",
  },
  {
    id: 2,
    title: "CodeScape - 2022",
    description:
      "Inter University Competition organized by IIT Campus Top 10 team from 525+ teams & 2400+ delegates",
  },
  {
    id: 3,
    title: "University-Industry collaboration for innovation competition",
    description:
      "1st RunnersUp organized by the FOUNTAIN Project of the European Union",
  },
  {
    id: 4,
    title: "The Startup Pitch Competition",
    description: "Participation certification",
  },
  {
    id: 5,
    title: "Space Quiz Competition",
    description: "Top five | 2nd Inter University Space Quiz Competition 2021",
  },
];
export default function Achievements() {
  return (
    <div>
      <div>
        <div className="  md:px-0 px-6">
          <div className="max-w-7xl mx-auto py-4 md:py-[3rem]">
            <div className="">
              <div className=" pb-10">
                <div className=" flex items-start justify-start">
                  <Tag
                    text="Achievements"
                    icon={<SiHyperskill size={16} />}
                    textColor="text-blue-600"
                    borderColor="border-blue-600"
                    backgroundColor="bg-transparent"
                  />
                </div>
                <h1 className=" text-4xl font-normal text-start bg-gradient-to-br from-white to-gray-500 bg-clip-text text-transparent max-w-7xl  pt-3 mx-auto">
                  Competitions
                </h1>
                <p className=" text-start mx-auto max-w-7xl pt-3 text-gray-500">
                  A journey of learning and growth that fuels my expertise in
                  design, development, and freelancing.
                </p>
              </div>
              <div className=" grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
                {competitions.map((competition) => (
                  <div key={competition.id} className=" ">
                    <h1 className=" text-4xl font-medium bg-gradient-to-br from-blue-600 to-blue-900 bg-clip-text text-transparent">
                      0{competition.id}.
                    </h1>
                    <h1 className="text-2xl font-medium text-start bg-gradient-to-br from-white to-gray-500 bg-clip-text text-transparent pt-3">
                      {competition.title}
                    </h1>
                    <p className=" text-gray-500 max-w-xs text-sm">
                      {competition.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
