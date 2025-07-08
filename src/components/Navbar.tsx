"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import icons to reduce initial bundle size
const FaSun = dynamic(() => import("react-icons/fa").then((mod) => mod.FaSun), {
  ssr: false,
});
const FaMoon = dynamic(
  () => import("react-icons/fa").then((mod) => mod.FaMoon),
  { ssr: false },
);
const FaBell = dynamic(
  () => import("react-icons/fa").then((mod) => mod.FaBell),
  { ssr: false },
);
const FaGithub = dynamic(
  () => import("react-icons/fa").then((mod) => mod.FaGithub),
  { ssr: false },
);
const FaLinkedin = dynamic(
  () => import("react-icons/fa").then((mod) => mod.FaLinkedin),
  { ssr: false },
);
const FaTwitter = dynamic(
  () => import("react-icons/fa").then((mod) => mod.FaTwitter),
  { ssr: false },
);
const FaInstagram = dynamic(
  () => import("react-icons/fa").then((mod) => mod.FaInstagram),
  { ssr: false },
);
const FaEnvelope = dynamic(
  () => import("react-icons/fa").then((mod) => mod.FaEnvelope),
  { ssr: false },
);

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { name: "GitHub", href: "https://github.com/devshahzaibali", icon: FaGithub },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/devshahzaib-ali-b75ba7308?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    icon: FaLinkedin,
  },
  { name: "Twitter", href: "https://x.com/devshahzaibali?t=aCugTK5EUSgtmPyAkqBn2Q&s=08", icon: FaTwitter },
  {
    name: "Instagram",
    href: "https://www.instagram.com/devshahzaibali?utm_source=qr&igsh=MTc3MjB1NGlvc3ltcA==",
    icon: FaInstagram,
  },
  { name: "Email", href: "mailto:techzaibx@gmail.com", icon: FaEnvelope },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hasNewBlog] = useState(true); // In a real app, this would come from state/API

  useEffect(() => {
    // Theme detection
    const saved = localStorage.getItem("theme");
    if (
      saved === "dark" ||
      (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }

    // Scroll detection
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const nextDarkMode = !darkMode;
    setDarkMode(nextDarkMode);
    if (nextDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const handleLinkClick = () => setOpen(false);

  const scrollToSection = (id: string) => {
    setOpen(false);
    if (id === "" || id === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed w-full z-50 top-0 left-0 transition-all duration-300 ${scrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm" : "bg-white dark:bg-gray-900"}`}
    >
      <nav className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            <>devshahzaibali</>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => {
                    if (link.name === "Home") {
                      scrollToSection("");
                    } else {
                      scrollToSection(link.href.substring(1));
                    }
                  }}
                  className="relative px-1 py-2 text-gray-700 dark:text-gray-300 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-4 ml-4">
            <button
              onClick={() => scrollToSection("blog")}
              className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Blog notifications"
            >
              <FaBell className="text-blue-500" />
              {hasNewBlog && (
                <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full animate-ping opacity-75"></span>
              )}
            </button>

            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <FaSun className="text-yellow-400 w-5 h-5" />
              ) : (
                <FaMoon className="text-gray-600 dark:text-gray-300 w-5 h-5" />
              )}
            </button>

            <div className="flex space-x-2">
              {socialLinks.slice(0, 2).map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center space-x-4">
          <button
            onClick={() => scrollToSection("blog")}
            className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Blog notifications"
          >
            <FaBell className="text-blue-500" />
            {hasNewBlog && (
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            )}
          </button>

          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <FaSun className="text-yellow-400 w-5 h-5" />
            ) : (
              <FaMoon className="text-gray-600 dark:text-gray-300 w-5 h-5" />
            )}
          </button>

          <button
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col items-end">
              <span
                className={`block h-0.5 bg-gray-700 dark:bg-gray-300 transition-all duration-300 ${open ? "w-6 rotate-45 translate-y-1.5" : "w-6 mb-1.5"}`}
              ></span>
              <span
                className={`block h-0.5 bg-gray-700 dark:bg-gray-300 transition-all duration-300 ${open ? "opacity-0" : "w-5 mb-1.5"}`}
              ></span>
              <span
                className={`block h-0.5 bg-gray-700 dark:bg-gray-300 transition-all duration-300 ${open ? "w-6 -rotate-45 -translate-y-1.5" : "w-4"}`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="fixed inset-0 z-40">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            ></div>

            {/* Menu Panel */}
            <div className="absolute top-0 right-0 w-80 h-full bg-white dark:bg-gray-900 shadow-xl transform transition-transform duration-300 ease-in-out">
              <div className="h-full flex flex-col">
                {/* Header */}
                <div className="px-6 py-5 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    Navigation
                  </h2>
                  <button
                    onClick={() => setOpen(false)}
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    aria-label="Close menu"
                  >
                    <svg
                      className="w-5 h-5 text-gray-700 dark:text-gray-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 px-6 py-4 overflow-y-auto">
                  <ul className="space-y-3">
                    {navLinks.map((link) => (
                      <li key={link.name}>
                        <button
                          onClick={() =>
                            scrollToSection(link.href.substring(1))
                          }
                          className="w-full text-left px-3 py-3 rounded-lg font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                          {link.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Social Links */}
                <div className="px-6 py-5 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
                    Connect With Me
                  </h3>
                  <div className="flex justify-center space-x-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        aria-label={social.name}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
