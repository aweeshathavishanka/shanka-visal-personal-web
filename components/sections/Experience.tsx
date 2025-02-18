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
    company: "Softmint Software Solutions (PVT) Ltd ",
    location: "Aug 2024 - Present · 6 mos",
    img: "https://media.licdn.com/dms/image/v2/C4D0BAQG1PImMVrQfHA/company-logo_200_200/company-logo_200_200/0/1630500709148?e=1744243200&v=beta&t=emSYK-UDPHdcX65w3KJrUVyuGqst6JaRxkORbIrF1JY",
    desc: "Spearheaded the development and deployment of multiple mobile and web applications, including the AI-powered SkinVision app utilizing AWS Rekognition for high-precision image detection. Developed and launched over six scalable web applications using React, Next.js, Node.js, MongoDB, and Firebase, ensuring mobile responsiveness, exceptional user experiences, and a 20% efficiency boost through optimized state management.",
    type: "Internship",
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Tapro IT ",
    location: "Jan 2024 - Present · 1 yr 1 month · Remote",
    img: "https://media.licdn.com/dms/image/v2/D560BAQHUGjbbTUS9Jg/company-logo_200_200/company-logo_200_200/0/1719255649713?e=1744243200&v=beta&t=CN_JpspfZAVVs_Pxy7AcKCQi520eKvxo8vntnsTuVeQ",
    desc: "Delivered eight premium websites across industries, including e-commerce, business, and educational platforms, tailored to client branding and needs. Integrated advanced SEO techniques and responsive designs, increasing client website traffic by 35%, and implemented third-party tools for payment, CRM, and analytics functionality.",
    type: "Part-time",
  },
  {
    id: 3,
    title: "Wordpress Developer",
    company: "Freelance",
    location: "Jan 2023 - Present · 2 yrs 1 mo",
    img: "https://static.vecteezy.com/system/resources/previews/013/279/126/non_2x/conceptual-flat-design-icon-of-freelancer-vector.jpg",
    desc: "Adopted Agile methodologies to ensure 100% on-time delivery of projects and led teams to implement modular architecture designs, reducing development time. Established DevOps best practices, optimized CI/CD pipelines, and managed cloud infrastructure on AWS and Azure to ensure high availability and streamlined deployments.",
    type: "Freelance",
  },
  {
    id: 4,
    title: "Staff Intern",
    company: "Bank of Ceylon ",
    location: "Aug 2020 - Mar 2021 · 8 mos",
    img: "https://media.licdn.com/dms/image/v2/C4E0BAQGo8tnBeWXytg/company-logo_200_200/company-logo_200_200/0/1631328201943?e=1744243200&v=beta&t=0mufZG3Tj6aGxAU_VRnKgDmCGFSMmcLfaN1ONVatv1E",
    desc: "Supported HR functions by managing payroll, attendance tracking, and benefits administration, while ensuring accuracy and compliance in employee documentation. Enhanced accessibility of employee records through effective data entry and system maintenance, and coordinated employee training programs to boost productivity.",
    type: "Internship",
  },
];

export default function Experience() {
  return (
    <div>
      <div className=" md:px-0 px-6">
        <div>
          <div className=" max-w-7xl mx-auto">
            <div className=" flex flex-col items-start ">
              <Tag
                text="What's my Experience ?"
                icon={<SiHyperskill size={16} />}
                textColor="text-blue-600"
                borderColor="border-blue-600"
                backgroundColor="bg-transparent"
              />
              <h1 className=" text-4xl font-normal bg-gradient-to-br from-white to-gray-500 bg-clip-text text-transparent pt-3 text-start">
                Professional Experience
              </h1>
              <p className=" text-start pt-3 text-gray-500">
                A timeline of my professional milestones.
              </p>
            </div>
            <div className=" py-10 md:py-[3rem]">
              <div>
                <div className="">
                  {experience.map((exp) => (
                    <div key={exp.id}>
                      <div className=" grid grid-cols-1 md:grid-cols-2 items-start justify-center md:justify-between p-4">
                        <div className=" flex items-center space-x-4">
                          {/* <Image
                            src={exp.img}
                            alt={exp.title}
                            width={100}
                            height={100}
                            className="h-10 w-10 rounded-full grayscale hover:grayscale-0"
                          /> */}
                          <div>
                            <p className=" text-2xl bg-gradient-to-br from-white to-gray-500 bg-clip-text text-transparent">
                              {exp.company}
                            </p>
                          </div>
                        </div>
                        <div className=" ">
                          <h1 className=" text-2xl bg-gradient-to-br from-white to-gray-500 bg-clip-text text-transparent">
                            {exp.title}
                          </h1>
                          <p className=" text-gray-400 ">{exp.location}</p>
                          <p className="  text-gray-500 pt-3 max-w-xl line-clamp-3">
                            {exp.desc}
                          </p>
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
