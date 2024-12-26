"use client";
import React from "react";

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

const certificates = [
  {
    title: "Get Started with Figma",
    institute: "Coursera",
    img: c1,
  },
  {
    title: "Basic Interview Skills",
    institute: "Udemu",
    img: c2,
  },
  {
    title: "HTML Course",
    institute: "Sololearn",
    img: c3,
  },
  {
    title: "Responsive Web Design",
    institute: "Sololearn",
    img: c4,
  },
  {
    title: "Cybersecurity Essentials",
    institute: "CISCO",
    img: c5,
  },
  {
    title: "Introduction Cybersecurity",
    institute: "CISCO",
    img: c6,
  },
  {
    title: "Introduction to Frontend Development",
    institute: "Coursera - Meta",
    img: c7,
  },
  {
    title: "Programming Foundation with Javascript, HTML & CSS",
    institute: "Coursera - Duke University",
    img: c8,
  },
  {
    title: "Certificate of Completion",
    institute: "Random Software Undergraduate Programme",
    img: c9,
  },
  {
    title: "Programming with Javascript",
    institute: "Coursera - Meta",
    img: c10,
  },
];

export function QualificationList() {
  return (
    <div className="">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {certificates.map((certificate, index) => (
          <div key={index} className="">
            <div className=" object-cover w-[384px] h-[216px]">
              <Image
                src={certificate.img}
                alt={certificate.title}
                width={1000}
                height={1000}
                className=""
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
