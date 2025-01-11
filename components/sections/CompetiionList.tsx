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
];

export default function CompetiionList() {
  return (
    <div className=" py-10">
      <div>
        {competitions.map((competition) => (
          <div key={competition.id} className=" py-3">
            <h1 className="">{competition.title}</h1>
            <p>{competition.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
