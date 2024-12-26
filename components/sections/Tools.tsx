import { cn } from "@/lib/utils";
import Marquee from "../ui/marquee";
import { FaJava } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiFlutter,
  SiDart,
  SiMongodb,
  SiNodedotjs,
  SiFirebase,
  SiFigma,
  SiAdobe,
  SiC,
  SiPython,
  SiAngular,
  SiDotnet,
} from "react-icons/si";
import { Button } from "../ui/button";

// Define the languages and their descriptions
const languages = [
  {
    title: "HTML",
    icon: <SiHtml5 />,
    description: "HTML is the standard markup language for creating web pages.",
  },
  {
    title: "CSS",
    icon: <SiCss3 />,
    description: "CSS is used to style HTML elements.",
  },
  {
    title: "JavaScript",
    icon: <SiJavascript />,
    description:
      "JavaScript is a programming language used to create dynamic content on websites.",
  },
  {
    title: "React",
    icon: <SiReact />,
    description:
      "React is a JavaScript library for building user interfaces, primarily for single-page applications.",
  },
  {
    title: "Flutter",
    icon: <SiFlutter />,
    description:
      "Flutter is an open-source UI software development kit for building natively compiled applications for mobile, web, and desktop from a single codebase.",
  },
  {
    title: "Dart",
    icon: <SiDart />,
    description:
      "Dart is a programming language optimized for building mobile, desktop, and web applications.",
  },
  {
    title: "MongoDB",
    icon: <SiMongodb />,
    description:
      "MongoDB is a NoSQL database that provides high performance, high availability, and easy scalability.",
  },
  {
    title: "Node JS",
    icon: <SiNodedotjs />,
    description:
      "Node.js is a runtime environment that allows you to run JavaScript on the server side.",
  },
  {
    title: "Firebase",
    icon: <SiFirebase />,
    description:
      "Firebase is a platform that provides backend services like databases, authentication, and hosting for building web and mobile applications.",
  },
  {
    title: "Figma",
    icon: <SiFigma />,
    description:
      "Figma is a collaborative interface design tool that helps teams create, prototype, and test UI/UX designs.",
  },
  {
    title: "Adobe XD",
    icon: <SiAdobe />,
    description:
      "Adobe XD is a vector-based user experience design tool used for web and mobile applications.",
  },
  {
    title: "C",
    icon: <SiC />,
    description:
      "C is a general-purpose, procedural programming language widely used for system software and embedded systems.",
  },
  {
    title: "Java",
    icon: <FaJava />,
    description:
      "Java is a high-level programming language used for building web, mobile, and desktop applications.",
  },
  {
    title: "Python",
    icon: <SiPython />,
    description:
      "Python is an interpreted, high-level programming language known for its readability and versatility.",
  },
  {
    title: "Angular",
    icon: <SiAngular />,
    description:
      "Angular is a platform and framework for building client-side applications using HTML, CSS, and JavaScript/TypeScript.",
  },
  {
    title: ".NET",
    icon: <SiDotnet />,
    description:
      ".NET is a framework developed by Microsoft for building cross-platform applications, primarily for Windows.",
  },
];

// Split the languages into two rows for the Marquee display
const firstRow = languages.slice(0, languages.length / 2);
const secondRow = languages.slice(languages.length / 2);

// Language card component
const LanguageCard = ({
  title,
  icon,
  description,
}: {
  title: string;
  icon: JSX.Element;
  description: string;
}) => {
  return (
    <div className=" cursor-pointer h-[4rem]  p-4">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="flex flex-col items-center justify-center">
              <div className="text-4xl text-gray-400 hover:text-white">
                {icon}
              </div>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p className=" text-xs">{title}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

// Tools component with Marquee scrolling
export function Tools() {
  return (
    <div className="max-w-7xl mx-auto pb-10 md:pb-[6rem]">
      <div className="bg-black relative  flex w-full flex-col gap-8 items-center justify-center overflow-hidden rounded-lg">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((language) => (
            <LanguageCard key={language.title} {...language} />
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black"></div>
      </div>
    </div>
  );
}
