"use client";

export default function AmazonCode() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-6 text-yellow-700">
        Amazon Homepage Clone Source Code
      </h1>
      <div className="bg-yellow-100 text-yellow-900 rounded-lg p-6 mb-6 max-w-2xl text-center">
        <p className="mb-2">
          The full source code for the Amazon homepage clone is available on
          GitHub.
        </p>
        <a
          href="https://github.com/devshahzaibali/amazon-clone"
          target="_blank"
          className="inline-block bg-gray-800 text-white px-4 py-2 rounded-md font-semibold hover:bg-gray-900 transition"
        >
          🐱 View on GitHub
        </a>
      </div>
      <pre className="bg-gray-900 text-green-200 rounded-lg p-4 overflow-x-auto w-full max-w-3xl text-sm">
        <code>{`// Visit the GitHub repo for the complete code!\n// https://github.com/devshahzaibali/amazon-clone`}</code>
      </pre>
    </div>
  );
}
