"use client";
import { useTheme } from "next-themes";
import { MagicCard } from "../ui/magic-card";

const skills = [
  {
    title: "Software Development",
    icon: "🖥️", // You can replace this with a suitable icon or use an image link
    description:
      "Proficient in web development using HTML, CSS, JavaScript, and React.js. Skilled in crafting user-friendly interfaces and optimizing user experiences.",
  },
  {
    title: "Mobile Development",
    icon: "📱", // You can replace this with a suitable icon or use an image link
    description:
      "Experienced in Flutter for cross-platform mobile app development, blending functionality and design for intuitive applications.",
  },
  {
    title: "Problem-Solving",
    icon: "🧠", // You can replace this with a suitable icon or use an image link
    description:
      "Strong ability to tackle complex coding challenges and optimize algorithms for efficient solutions.",
  },
  {
    title: "Version Control",
    icon: "🔧", // You can replace this with a suitable icon or use an image link
    description:
      "Proficient in Git for collaborative development, facilitating seamless teamwork and code management.",
  },
  {
    title: "Agile Methodologies",
    icon: "📈", // You can replace this with a suitable icon or use an image link
    description:
      "Familiar with Agile practices like Scrum, enabling adaptability and iterative project delivery.",
  },
  {
    title: "Project Collaboration",
    icon: "🤝", // You can replace this with a suitable icon or use an image link
    description:
      "Effective communicator, adept at multidisciplinary teamwork for project success.",
  },
  {
    title: "Continuous Learning",
    icon: "📚", // You can replace this with a suitable icon or use an image link
    description:
      "Committed to ongoing skill enhancement, keeping up with the latest industry trends and technologies.",
  },
  {
    title: "Education & Work Experience",
    icon: "🎓", // You can replace this with a suitable icon or use an image link
    description:
      "Pursuing B.Sc (Hons) in Computing and Information Systems at Sabaragamuwa University. Engaged in diverse freelance projects, applying theoretical knowledge to practical software solutions.",
  },
];

export function SkillCard() {
  const { theme } = useTheme();

  return (
    <div className="max-w-7xl mx-auto ">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
        {/* Loop through the first two skills as examples */}
        {skills.map((skill, index) => (
          <MagicCard
            key={index}
            gradientColor={theme === "dark" ? "#14109f" : "#14109f"}>
            <div className="cursor-pointer flex-col items-center justify-center shadow-2xl py-10 px-8 text-4xl">
              <div className="text-center">
                <div className="text-6xl">{skill.icon}</div>
                <h3 className="mt-2 text-xl font-normal bg-gradient-to-br from-white to-gray-500 bg-clip-text text-transparent">
                  {skill.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {skill.description}
                </p>
              </div>
            </div>
          </MagicCard>
        ))}
      </div>
    </div>
  );
}
