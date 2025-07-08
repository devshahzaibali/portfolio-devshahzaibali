"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaHeart,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaGithub />,
      url: "https://github.com/devshahzaibali",
      color: "hover:text-gray-300",
    },
    {
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/in/devshahzaib-ali-b75ba7308?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      color: "hover:text-blue-400",
    },
    {
      icon: <FaTwitter />,
      url: "https://x.com/devshahzaibali?t=aCugTK5EUSgtmPyAkqBn2Q&s=08",
      color: "hover:text-sky-400",
    },
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/devshahzaibali?utm_source=qr&igsh=MTc3MjB1NGlvc3ltcA==",
      color: "hover:text-pink-400",
    },
  ];

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.footer
      className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-12 mt-20 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Decorative top border */}
        <motion.div
          className="h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mb-12"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        />

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo/Branding */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-2xl font-bold tracking-wide"
          >
            <span className="text-blue-400">&lt;/&gt;</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300">
              <>devshahzaibali</>
            </span>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.6,
              staggerChildren: 0.1,
              delayChildren: 0.3,
            }}
            viewport={{ once: true }}
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className="relative group hover:text-blue-400 transition-colors"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex gap-5 text-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.5 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full ${link.color} transition-colors`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                viewport={{ once: true }}
              >
                {link.icon}
              </motion.a>
            ))}
            <motion.a
              href="mailto:techzaibx@gmail.com"
              className="p-2 rounded-full hover:text-red-400 transition-colors"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.9 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 10,
                delay: 0.8,
              }}
              viewport={{ once: true }}
            >
              <FiMail />
            </motion.a>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="text-center mt-12 text-gray-400 text-sm flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-1">
            <span>Made with</span>
            <FaHeart className="text-red-400 animate-pulse" />
            <span>by Shahzaib Ali</span>
          </div>
          <div>© {new Date().getFullYear()} All rights reserved.</div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
