"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

type BlogPost = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  date: string;
  imageUrl?: string;
  isNew?: boolean;
};

// Inline loading spinner
const LoadingSpinner = () => (
  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
);

const BlogSection = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [imageError, setImageError] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/blog");
        if (!response.ok) throw new Error("Failed to fetch posts");
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="blog"
      className="min-h-screen py-20 px-4 sm:px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            Latest Articles
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on web development and design
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center py-20">
            <LoadingSpinner />
          </div>
        ) : error ? (
          <div className="text-center py-20">
            <div className="text-red-500 mb-4">
              Error loading posts: {error}
            </div>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        ) : (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {posts.length === 0 ? (
              <motion.div
                variants={item}
                className="col-span-full text-center py-20"
              >
                <div className="text-gray-500 dark:text-gray-400 text-lg">
                  No blog posts yet. Check back soon!
                </div>
              </motion.div>
            ) : (
              posts.map((post) => (
                <motion.article
                  key={post.id}
                  variants={item}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl"
                >
                  <Link href={`/blog/${post.slug}`} className="block h-full">
                    <div className="aspect-video bg-gray-100 dark:bg-gray-700 relative overflow-hidden">
                      {post.imageUrl && !imageError[post.id] ? (
                        <img
                          src={post.imageUrl}
                          alt={post.title}
                          className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                          loading="lazy"
                          onError={() =>
                            setImageError((prev) => ({
                              ...prev,
                              [post.id]: true,
                            }))
                          }
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                          <svg
                            className="w-16 h-16"
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
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white line-clamp-2">
                          {post.title}
                        </h3>
                        {post.isNew && (
                          <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full ml-2 whitespace-nowrap">
                            New
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                        {post.summary}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                        <span className="text-blue-600 dark:text-blue-400 font-medium text-sm hover:underline">
                          Read More →
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
