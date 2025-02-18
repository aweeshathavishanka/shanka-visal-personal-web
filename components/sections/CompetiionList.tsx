import { title } from "process";
import React from "react";

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

export default function CompetiionList() {
  return (
    <div className="">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-3">
        {competitions.map((competition) => (
          <div key={competition.id} className=" py-3">
            <h1 className="text-2xl font-normal text-start bg-gradient-to-br from-white to-gray-500 bg-clip-text text-transparent pt-3">
              {competition.title}
            </h1>
            <p>{competition.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
