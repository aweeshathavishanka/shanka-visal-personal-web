"use client";

import React from "react";
import { WobbleCard } from "../ui/wobble-card";
import c1 from "@/public/certificates/c1.webp";
import c2 from "@/public/certificates/c2.webp";
import c3 from "@/public/certificates/c3.webp";
import c4 from "@/public/certificates/c4.webp";
import c5 from "@/public/certificates/c5.webp";
import c6 from "@/public/certificates/c6.webp";
import c7 from "@/public/certificates/c7.webp";
import c8 from "@/public/certificates/c8.webp";
import c9 from "@/public/certificates/c9.webp";
import c10 from "@/public/certificates/c10.webp";
import { DirectionAwareHover } from "../ui/direction-aware-hover";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Separator } from "../ui/separator";

const certificates = [
  {
    title: "Get Started with Figma",
    institute: "Coursera",
    img: c1,
    date: "Jan 27 2023",
  },
  {
    title: "Basic Interview Skills",
    institute: "Udemu",
    img: c2,
    date: "Feb 05 2022",
  },
  {
    title: "HTML Course",
    institute: "Sololearn",
    img: c3,
    date: "Jan 31 2022",
  },
  {
    title: "Responsive Web Design",
    institute: "Sololearn",
    img: c4,
    date: "Jan 31 2022",
  },
  {
    title: "Cybersecurity Essentials",
    institute: "CISCO",
    img: c5,
    date: "March 27 2022",
  },
  {
    title: "Introduction Cybersecurity",
    institute: "CISCO",
    img: c6,
    date: "July 23 2021 ",
  },
  {
    title: "Introduction to Frontend Development",
    institute: "Coursera - Meta",
    img: c7,
    date: "May 08 2024",
  },
  {
    title: "Programming Foundation with Javascript, HTML & CSS",
    institute: "Coursera - Duke University",
    img: c8,
    date: "Feb 16 2022",
  },
  {
    title: "Certificate of Completion",
    institute: "Random Software Undergraduate Programme",
    img: c9,
    date: "Nov 04 2024",
  },
  {
    title: "Programming with Javascript",
    institute: "Coursera - Meta",
    img: c10,
    date: "Jun 10 2024",
  },
];

export function QualificationList() {
  return (
    <>
      <div>
        <div>
          <div className="grid grid-cols-1  gap-4 max-w-5xl py-10 mx-auto w-full ">
            {certificates.map((certificate, index) => (
              <div key={index}>
                <div className=" md:grid flex md:grid-cols-3 md:gap-10 items-center justify-between ">
                  <div>
                    {" "}
                    <h1 className="bg-gradient-to-l from-white to-gray-400 text-xs md:text-sm bg-clip-text text-transparent">
                      {certificate.date}
                    </h1>
                  </div>
                  <div className=" text-center pb-3">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <h1 className="bg-gradient-to-t from-white to-white text-center items-center text-sm md:text-lg bg-clip-text text-transparent">
                            {certificate.title}
                          </h1>
                        </TooltipTrigger>
                        <TooltipContent>
                          <Image
                            src={certificate.img}
                            alt="Certificate"
                            width={300}
                            height={300}
                          />
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>

                  <div>
                    <h1 className="bg-gradient-to-r from-white text-end text-xs md:text-sm to-gray-400 bg-clip-text text-transparent">
                      {certificate.institute}
                    </h1>
                  </div>
                </div>
                <Separator className=" my-3 opacity-20" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
