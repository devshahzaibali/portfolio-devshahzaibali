"use client";
import React from "react";
import Link from "next/link";

const code = `// src/app/ecommerce-demo/page.tsx\n// ... (full code of the demo homepage goes here, copy from the actual file) ...`;

export default function EcommerceDemoCodePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-blue-800">
          Ecommerce Demo Source Code
        </h1>
        <Link
          href="/ecommerce-demo"
          className="text-blue-600 hover:underline mb-4 inline-block"
        >
          ← Back to Demo
        </Link>
        <div className="bg-white rounded-lg shadow p-4 overflow-x-auto border border-gray-200">
          <pre className="text-xs md:text-sm whitespace-pre overflow-x-auto">
            <code>{code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
