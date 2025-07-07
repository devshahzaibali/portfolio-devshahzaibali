"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import amazonClone from "@/assets/projects/amazonclone.png";
import tictactoe from "@/assets/projects/tictactoe.png";
import ecommerceClone from "@/assets/projects/ecommerceclone.png";
import { FiExternalLink, FiGithub, FiCode } from "react-icons/fi";

const projects = [
  {
    title: "Amazon Home-page Clone",
    image: amazonClone,
    description:
      "Fully responsive Amazon homepage using HTML, CSS, JavaScript, and ReactJS with product listings and search functionality.",
    tags: ["React", "HTML", "CSS", "JavaScript"],
    live: "/amazon-demo",
    github: "https://github.com/devshahzaibali/amazon-clone",
    code: "/amazon-demo/code",
  },
  {
    title: "Tic Tac Toe Game",
    image: tictactoe,
    description:
      "Interactive Tic Tac Toe game with multiplayer support, score tracking, and responsive design.",
    tags: ["HTML", "CSS", "JavaScript"],
    live: "/tictactoe-demo",
    github: "https://github.com/devshahzaibali/tictactoe",
    code: "/tictactoe-demo/code",
  },
  {
    title: "Ecommerce Site",
    image: ecommerceClone,
    description:
      "Full-featured ecommerce platform with product listings, cart functionality, and user authentication.",
    tags: ["React", "Node.js", "MongoDB", "Redux"],
    live: "/ecommerce-demo",
    github: "https://github.com/devshahzaibali/ecommerce-demo",
    code: "/ecommerce-demo/code",
  },
];

const ProjectsSection = () => {
  return (
    <motion.section
      id="projects"
      className="min-h-screen px-4 sm:px-6 md:px-20 py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 overflow-hidden relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 left-10 w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 opacity-20 blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300">
            My Projects Showcase
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore my work and see how I can contribute to your team with
            practical solutions and clean code.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:gap-10 md:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group bg-white dark:bg-gray-800 shadow-xl rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  width={600}
                  height={336}
                  quality={90}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <p className="text-white text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    {project.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, i) => (
                    <motion.span
                      key={i}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium px-3 py-1 rounded-full"
                      whileHover={{ scale: 1.05 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 mt-auto">
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiExternalLink size={16} /> Live Demo
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiGithub size={16} /> Code
                  </motion.a>
                  {project.code && (
                    <motion.a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiCode size={16} /> Details
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            Want to see more? Check out my GitHub for additional projects.
          </p>
          <motion.a
            href="https://github.com/devshahzaibali"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 text-white font-medium rounded-lg transition-colors"
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FiGithub size={18} /> View All Projects
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
