"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Script from "next/script";

export default function BlogPostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch("/api/blog")
      .then((res) => res.json())
      .then((posts) => {
        const found = posts.find((p) => p.slug === slug);
        setPost(found);
      });
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500 dark:text-gray-300">
        Loading...
      </div>
    );
  }

  const articleSchema = post
    ? {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description: post.description || "",
        image: post.imageUrl || "",
        author: {
          "@type": "Person",
          name: "Shahzaib Ali",
        },
        datePublished: post.date || "",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://devshahzaibali.online/blog/${post.slug}`,
        },
      }
    : null;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 flex justify-center">
      <article className="max-w-2xl w-full bg-white dark:bg-gray-800 rounded-xl shadow p-8 border border-gray-200 dark:border-gray-700">
        <h1 className="text-3xl font-bold mb-4 text-blue-800 dark:text-blue-300">
          {post.title}
        </h1>
        <div className="text-xs text-gray-400 dark:text-gray-500 mb-4">
          {new Date(post.date).toLocaleDateString()}
        </div>
        <div className="w-full aspect-video bg-gray-200 dark:bg-gray-700 rounded mb-6 flex items-center justify-center overflow-hidden">
          {post.imageUrl ? (
            <Image
              src={post.imageUrl}
              alt={post.title}
              width={640}
              height={360}
              className="w-full h-full object-cover"
              loading="lazy"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.parentElement.innerHTML =
                  '<div class="flex items-center justify-center text-gray-400">Image not available</div>';
              }}
            />
          ) : (
            <div className="flex items-center justify-center text-gray-400">
              <svg
                className="w-24 h-24"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          )}
        </div>
        <div
          className="prose prose-blue dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{
            __html: post.body || "<p>No content yet.</p>",
          }}
        />
      </article>
      {articleSchema && (
        <Script
          id="article-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      )}
    </div>
  );
}
