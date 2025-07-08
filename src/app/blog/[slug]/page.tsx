"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getPosts } from "@/lib/blogStore";

export default function BlogPostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    const posts = getPosts();
    const found = posts.find((p: any) => p.slug === slug);
    setPost(found);
  }, [slug]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <article>
      <h1>{post.title}</h1>
      <div>{post.summary}</div>
      <div dangerouslySetInnerHTML={{ __html: post.body || "" }} />
    </article>
  );
} 