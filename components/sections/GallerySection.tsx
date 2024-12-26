import React from "react";
import gallery1 from "@/public/gallery/large 1.webp";
import gallery2 from "@/public/gallery/medium 1.webp";
import gallery3 from "@/public/gallery/medium 2.webp";
import gallery4 from "@/public/gallery/medium 3.webp";
import gallery5 from "@/public/gallery/medium 4.webp";
import gallery6 from "@/public/gallery/small 1.webp";
import gallery7 from "@/public/gallery/small 2.webp";
import gallery8 from "@/public/gallery/small 3.webp";
import Image from "next/image";
import { SiHyperskill } from "react-icons/si";
import Tag from "../shared/tag";

export default function GallerySection() {
  return (
    <div>
      <div>
        <div>
          <div className=" py-10 md:py-[6rem] md:px-0 px-6">
            <div className="max-w-7xl mx-auto py-4 md:py-[3rem]">
              <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className=" flex items-start justify-start">
                    <Tag
                      text="Gallery"
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
              </div>
              <div className=" grid grid-cols-1 md:grid-cols-5 gap-6 py-10 md:py-[4rem]">
                <div className=" row-span-2 col-span-2">
                  <Image
                    src={gallery1}
                    alt="Gallery"
                    width={1000}
                    height={1000}
                    className=" hover:scale-105 hover:transition hover:duration-300 hover:ease-linear hover:cursor-pointer rounded-lg"
                  />
                </div>
                <div className=" col-span-2">
                  <Image
                    src={gallery2}
                    alt="Gallery"
                    width={1000}
                    height={1000}
                    className=" hover:scale-105 hover:transition hover:duration-300 hover:ease-linear hover:cursor-pointer rounded-lg"
                  />
                </div>
                <div className=" ">
                  <Image
                    src={gallery6}
                    alt="Gallery"
                    width={1000}
                    height={1000}
                    className=" hover:scale-105 hover:transition hover:duration-300 hover:ease-linear hover:cursor-pointer rounded-lg"
                  />
                </div>
                <div className=" ">
                  <Image
                    src={gallery7}
                    alt="Gallery"
                    width={1000}
                    height={1000}
                    className=" hover:scale-105 hover:transition hover:duration-300 hover:ease-linear hover:cursor-pointer rounded-lg"
                  />
                </div>
                <div className=" col-span-2 ">
                  <Image
                    src={gallery3}
                    alt="Gallery"
                    width={1000}
                    height={1000}
                    className=" hover:scale-105 hover:transition hover:duration-300 hover:ease-linear hover:cursor-pointer rounded-lg"
                  />
                </div>
                <div className=" ">
                  <Image
                    src={gallery8}
                    alt="Gallery"
                    width={1000}
                    height={1000}
                    className=" hover:scale-105 hover:transition hover:duration-300 hover:ease-linear hover:cursor-pointer rounded-lg"
                  />
                </div>
                <div className=" col-span-2 ">
                  <Image
                    src={gallery4}
                    alt="Gallery"
                    width={1000}
                    height={1000}
                    className=" hover:scale-105 hover:transition hover:duration-300 hover:ease-linear hover:cursor-pointer rounded-lg"
                  />
                </div>
                <div className=" col-span-2 ">
                  <Image
                    src={gallery5}
                    alt="Gallery"
                    width={1000}
                    height={1000}
                    className=" hover:scale-105 hover:transition hover:duration-300 hover:ease-linear hover:cursor-pointer rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
