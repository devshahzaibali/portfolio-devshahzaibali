"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import profilePic from "@/assets/profile.jpg";
import {
  FiDownload,
  FiMail,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
} from "react-icons/fi";

const HeroSection = () => {
  const socialLinks = [
    { icon: <FiGithub />, url: "https://github.com/devshahzaibali" },
    { icon: <FiLinkedin />, url: "https://www.linkedin.com/in/devshahzaib-ali-b75ba7308?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { icon: <FiTwitter />, url: "https://x.com/devshahzaibali?t=aCugTK5EUSgtmPyAkqBn2Q&s=08" },
    { icon: <FiInstagram />, url: "https://www.instagram.com/devshahzaibali?utm_source=qr&igsh=MTc3MjB1NGlvc3ltcA==" },
    { icon: <FiMail />, url: "mailto:techzaibx@gmail.com" },
  ];

  return (
    <section className="min-h-screen px-4 sm:px-6 md:px-20 py-16 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-10 transition-colors duration-300 overflow-hidden relative">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 rounded-full bg-blue-200 dark:bg-blue-800 opacity-20"
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
      <motion.div
        className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-blue-300 dark:bg-blue-700 opacity-10"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* LEFT TEXT */}
      <motion.div
        className="max-w-xl text-center md:text-left z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          <motion.span className="inline-block" whileHover={{ scale: 1.05 }}>
            Hey 👋 I'm{" "}
          </motion.span>
          <motion.span
            className="text-blue-600 dark:text-blue-400 inline-block"
            whileHover={{ scale: 1.05 }}
          >
            <>devshahzaibali</>
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-lg text-gray-600 dark:text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          A Full-Stack Developer passionate about building sleek, performant
          websites using modern technologies like Next.js and Tailwind CSS.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.a
            href="/resume.pdf"
            download
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-2xl shadow hover:bg-blue-700 transition duration-300 flex items-center gap-2"
            whileHover={{
              y: -2,
              boxShadow: "0 10px 20px -10px rgba(37, 99, 235, 0.5)",
            }}
          >
            <FiDownload /> Download CV
          </motion.a>
          <motion.a
            href="#contact"
            className="px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold rounded-2xl hover:bg-blue-50 dark:hover:bg-gray-800 transition duration-300 flex items-center gap-2"
            whileHover={{ y: -2 }}
          >
            <FiMail /> Contact Me
          </motion.a>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="flex gap-4 justify-center md:justify-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-xl p-2"
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-blue-200 dark:border-blue-700 shadow-lg z-10"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.05 }}
      >
        <Image
          src={profilePic}
          alt="Shahzaib Ali"
          className="w-full h-full object-cover"
          width={288}
          height={288}
          priority
        />
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-blue-300 dark:border-blue-500 opacity-0"
          animate={{
            opacity: [0, 0.4, 0],
            scale: [1, 1.2, 1.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatDelay: 2,
          }}
        />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        animate={{
          y: [0, 10, 0],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-300 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 bg-gray-400 dark:bg-gray-300 rounded-full mt-2"
            animate={{ y: [0, 4, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
