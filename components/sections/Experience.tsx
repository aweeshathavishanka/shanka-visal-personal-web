import React from "react";
import Tag from "../shared/tag";
import { SiHyperskill } from "react-icons/si";
import ExperienceTimeline from "../shared/ExperieceTimeline";
import Image from "next/image";
import { Separator } from "../ui/separator";

const experience = [
  {
    id: 1,
    title: "Trainee Software Engineer - Mobile",
    company: "Softmint Software Solutions (PVT) Ltd · Internship",
    location: "Aug 2024 - Present · 6 mos",
    img: "https://media.licdn.com/dms/image/v2/C4D0BAQG1PImMVrQfHA/company-logo_200_200/company-logo_200_200/0/1630500709148?e=1744243200&v=beta&t=emSYK-UDPHdcX65w3KJrUVyuGqst6JaRxkORbIrF1JY",
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Tapro IT · Part-time",
    location: "Jan 2024 - Present · 1 yr 1 month · Remote",
    img: "https://media.licdn.com/dms/image/v2/D560BAQHUGjbbTUS9Jg/company-logo_200_200/company-logo_200_200/0/1719255649713?e=1744243200&v=beta&t=CN_JpspfZAVVs_Pxy7AcKCQi520eKvxo8vntnsTuVeQ",
  },
  {
    id: 3,
    title: "Wordpress Developer",
    company: "Freelance",
    location: "Jan 2023 - Present · 2 yrs 1 mo",
    img: "https://static.vecteezy.com/system/resources/previews/013/279/126/non_2x/conceptual-flat-design-icon-of-freelancer-vector.jpg",
  },
  {
    id: 4,
    title: "Staff Intern",
    company: "Bank of Ceylon · Internship",
    location: "Aug 2020 - Mar 2021 · 8 mos",
    img: "https://media.licdn.com/dms/image/v2/C4E0BAQGo8tnBeWXytg/company-logo_200_200/company-logo_200_200/0/1631328201943?e=1744243200&v=beta&t=0mufZG3Tj6aGxAU_VRnKgDmCGFSMmcLfaN1ONVatv1E",
  },
];

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
            <div className=" py-10 md:py-[3rem]">
              <div>
                <div className=" max-w-3xl mx-auto">
                  {experience.map((exp) => (
                    <div key={exp.id}>
                      <div className=" flex flex-col md:flex-row items-center justify-center md:justify-between md:space-x-4 p-4">
                        <div className=" flex items-center space-x-4">
                          <Image
                            src={exp.img}
                            alt={exp.title}
                            width={100}
                            height={100}
                            className="h-10 w-10 rounded-full grayscale hover:grayscale-0"
                          />
                          <div>
                            <h1 className=" text-lg font-semibold bg-gradient-to-br from-white to-gray-500 bg-clip-text text-transparent">
                              {exp.title}
                            </h1>
                            <p className=" text-gray-500">{exp.company}</p>
                          </div>
                        </div>
                        <div>
                          <p className=" text-gray-500">{exp.location}</p>
                        </div>
                      </div>
                      <Separator className=" opacity-20 my-2" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
