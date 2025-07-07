"use client";

import Image from "next/image";
import amazonClone from "@/assets/projects/amazonclone.png";

export default function AmazonDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-yellow-100 to-blue-100 py-10">
      <h1 className="text-3xl font-bold mb-4 text-yellow-700">
        Amazon Homepage Clone
      </h1>
      <Image
        src={amazonClone}
        alt="Amazon Clone Screenshot"
        width={600}
        height={300}
        className="rounded-lg shadow-lg mb-6 border border-yellow-300"
        priority
      />
      <p className="text-lg text-gray-700 max-w-xl text-center mb-6">
        This is a fully responsive Amazon homepage clone built with React, HTML,
        CSS, and JavaScript. It features a modern UI, product grid, navigation
        bar, and more. Explore the code or visit the GitHub repo for details!
      </p>
      <div className="flex gap-4">
        <a
          href="/amazon-demo/code"
          className="bg-blue-100 hover:bg-blue-200 text-blue-800 text-sm font-semibold px-4 py-2 rounded-md transition"
        >
          💻 View Demo Code
        </a>
        <a
          href="https://github.com/devshahzaibali/amazon-clone"
          target="_blank"
          className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-semibold px-4 py-2 rounded-md transition"
        >
          🐱 GitHub
        </a>
      </div>
    </div>
  );
}
