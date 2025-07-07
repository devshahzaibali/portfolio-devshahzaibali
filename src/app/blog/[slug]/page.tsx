"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function BlogPostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    fetch("/api/blog")
      .then((res) => res.json())
      .then((posts) => {
        const found = posts.find((p: any) => p.slug === slug);
        setPost(found);
      });
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