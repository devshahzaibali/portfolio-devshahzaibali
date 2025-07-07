"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// Dynamically import icons to reduce initial bundle size
const iconFallback = () => <div style={{ height: "2em" }} />;
const FaHtml5 = dynamic(
  () => import("react-icons/fa").then((mod) => mod.FaHtml5),
  { ssr: false, loading: iconFallback },
);
const FaCss3Alt = dynamic(
  () => import("react-icons/fa").then((mod) => mod.FaCss3Alt),
  { ssr: false, loading: iconFallback },
);
const FaJs = dynamic(() => import("react-icons/fa").then((mod) => mod.FaJs), {
  ssr: false,
  loading: iconFallback,
});
const FaReact = dynamic(
  () => import("react-icons/fa").then((mod) => mod.FaReact),
  { ssr: false, loading: iconFallback },
);
const FaNodeJs = dynamic(
  () => import("react-icons/fa").then((mod) => mod.FaNodeJs),
  { ssr: false, loading: iconFallback },
);
const SiMongodb = dynamic(
  () => import("react-icons/si").then((mod) => mod.SiMongodb),
  { ssr: false, loading: iconFallback },
);

const skills = [
  { name: "HTML5", icon: "FaHtml5", color: "text-orange-600" },
  { name: "CSS3", icon: "FaCss3Alt", color: "text-blue-500" },
  { name: "JavaScript", icon: "FaJs", color: "text-yellow-400" },
  { name: "React", icon: "FaReact", color: "text-cyan-400" },
  { name: "Node.js", icon: "FaNodeJs", color: "text-green-500" },
  { name: "MongoDB", icon: "SiMongodb", color: "text-green-700" },
];

const iconComponents = {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  SiMongodb,
} as const;

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-[80vh] py-16 px-4 sm:px-6 bg-white dark:bg-gray-900 transition-colors duration-300 flex items-center justify-center"
    >
      <div className="max-w-6xl mx-auto text-center w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 dark:text-white"
        >
          My Technical Skills
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 text-gray-500 dark:text-gray-300 max-w-2xl mx-auto"
        >
          Here are the core technologies I specialize in and use to build modern
          web applications.
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          {skills.map((skill, index) => {
            const IconComponent =
              iconComponents[skill.icon as keyof typeof iconComponents];
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="flex flex-col items-center"
              >
                <div className={`text-4xl mb-2 ${skill.color}`}>
                  {IconComponent && <IconComponent />}
                </div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  {skill.name}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
