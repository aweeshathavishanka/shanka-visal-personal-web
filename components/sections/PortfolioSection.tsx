import React from "react";
import Tag from "../shared/tag";
import { SiHyperskill } from "react-icons/si";

import work1 from "@/public/portfolio-gif/work1.gif";
import work2 from "@/public/portfolio-gif/work2.gif";
import work3 from "@/public/portfolio-gif/work3.gif";
import work4 from "@/public/portfolio-gif/work4.gif";
import work5 from "@/public/portfolio-gif/work5.gif";
import work6 from "@/public/portfolio-gif/work6.gif";
import work7 from "@/public/portfolio-gif/work7.gif";
import work8 from "@/public/portfolio-gif/work8.gif";
import work9 from "@/public/portfolio-gif/work9.gif";

import demo1 from "@/public/Profile Image.webp";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";
import Link from "next/link";

const portfolio = [
  {
    id: 1,
    title: "Weather Website",
    href: "/",
    youtubeHref: "/",
    repoHref: "/",
    image: work1,
    description:
      "This is a dynamic Weather App using React JS and integrated it with a weather API to provide real-time weather information. The app is hosted on Netlify, ensuring seamless deployment and high availability.",
  },
  {
    id: 2,
    title: "The Smart Driving License System",
    href: "/",
    youtubeHref: "/",
    repoHref: "/",
    image: work2,
    description:
      "This project is a cutting-edge solution for Sri Lanka's traffic fines, featuring a mobile app for police officers and a web portal for drivers to pay fines online. It enhances convenience and efficiency in traffic management, using technologies like Flutter, Firebase, MongoDB, HTML, CSS, JavaScript, and React JS.",
  },
  {
    id: 3,
    title: "Sabra Care Website",
    href: "/",
    youtubeHref: "/",
    repoHref: "/",
    image: work3,
    description:
      "This full-stack doctor appointment booking website allows users to search for doctors, view profiles, give feedback, and book appointments securely. It supports user authentication and profile management, using React JS, Node.js, MongoDB, Express.js, and Stripe.",
  },
  {
    id: 4,
    title: "Skin Visions App",
    href: "/",
    youtubeHref: "/",
    repoHref: "/",
    image: work4,
    description:
      "We are developing a cutting-edge project that leverages Flutter and AI/ML models to revolutionize skincare analysis. Our advanced app examines facial skin, offering personalized treatment recommendations and suggesting top dermatologists and skincare products.",
  },
  {
    id: 5,
    title: "Foodie Food Ordering Website",
    href: "/",
    youtubeHref: "/",
    repoHref: "/",
    image: work5,
    description:
      "The Foodie E-Commerce website features a responsive design and modern UI/UX, allowing customers to browse, select, and add food items to their cart. It uses Flutter and Firebase for real-time database management and authentication.",
  },
  {
    id: 6,
    title: "Foodme Angular Website",
    href: "/",
    youtubeHref: "/",
    repoHref: "/",
    image: work6,
    description:
      "The project is an Angular food e-commerce frontend website, and the first milestone achieved is a responsive and efficient search bar that helps users easily find their favorite food items.",
  },
  {
    id: 7,
    title: "Tick Tick ToDo App",
    href: "/",
    youtubeHref: "/",
    repoHref: "/",
    image: work7,
    description:
      "The project is a simple To Do app created with Flutter and Firebase, featuring Firebase authentication and Firestore for data management.",
  },
  {
    id: 8,
    title: "App Anything",
    href: "/",
    youtubeHref: "/",
    repoHref: "/",
    image: work8,
    description:
      "App Anything is a chatbot powered by Google Gemini Pro, featuring a simple, authentication-free design that eliminates the need for login or signup. It has a minimal design and is created using Flutter.",
  },
  {
    id: 9,
    title: "Web Design Website",
    href: "/",
    youtubeHref: "/",
    repoHref: "/",
    image: work9,
    description:
      "This website showcases various design services, emphasizing the creation of unique visual identities. It highlights my skills in front-end web development and design aesthetics, using HTML, CSS, and JavaScript.",
  },
];

export default function PortfolioSection() {
  return (
    <div className="relative py-10 md:py-[6rem] px-6 md:px-0">
      {/* Gradient and Blur Background */}

      {/* Content Section */}
      <div className="max-w-7xl mx-auto py-4 md:py-[3rem]">
        <div>
          <div className="flex items-start justify-start">
            <Tag
              text="Portfolio"
              icon={<SiHyperskill size={16} />}
              textColor="text-blue-600"
              borderColor="border-blue-600"
              backgroundColor="bg-transparent"
            />
          </div>
          <h1 className="text-4xl font-normal bg-gradient-to-br from-white to-gray-500 bg-clip-text text-transparent max-w-xl pt-3">
            Showcasing My Creative Journey
          </h1>
          <p className="text-start max-w-xl pt-3 text-gray-500">
            Explore a collection of projects that highlight my passion for
            design and development, crafted with precision and purpose.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
          {portfolio.map((item) => (
            <div key={item.id}></div>
          ))}
        </div>
        <div>
          <Carousel>
            <CarouselContent>
              {portfolio.map((item) => (
                <CarouselItem
                  key={item.id}
                  className=" relative rounded-lg shadow-lg  hover:shadow-2xl transition-shadow duration-300 md:basis-1/3">
                  <div className=" z-50">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={300}
                      height={300}
                      className="w-full h-40 object-cover rounded-md z-50"
                    />
                    <h2 className="text-lg font-semibold mt-4 ">
                      {item.title}
                    </h2>
                    <p className="text-sm text-gray-600 mt-2">
                      {item.description}
                    </p>
                    <div className="flex gap-4 mt-4">
                      <Link
                        href={item.href}
                        className="text-blue-600 hover:underline">
                        View
                      </Link>
                      <Link
                        href={item.youtubeHref}
                        className="text-blue-600 hover:underline">
                        YouTube
                      </Link>
                      <Link
                        href={item.repoHref}
                        className="text-blue-600 hover:underline">
                        Code
                      </Link>
                    </div>
                    {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-500/50 to-purple-500/50 opacity-30 backdrop-blur-md "></div> */}
                  </div>{" "}
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
