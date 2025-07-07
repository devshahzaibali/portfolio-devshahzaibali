"use client";

import { useState, useEffect } from "react";
import { FaEye, FaEyeSlash, FaSpinner } from "react-icons/fa";
import Image from "next/image";

interface BlogPost {
  id: number;
  title: string;
  summary: string;
  date: string;
  slug: string;
  isNew: boolean;
  imageUrl: string;
  body: string;
}

interface FormData {
  title: string;
  summary: string;
  date: string;
  slug: string;
  isNew: boolean;
  imageUrl: string;
  body: string;
}

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState<FormData>({
    title: "",
    summary: "",
    date: "",
    slug: "",
    isNew: false,
    imageUrl: "",
    body: "",
  });
  const [editId, setEditId] = useState<number | null>(null);
  const [uploading, setUploading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (authenticated) fetchPosts();
  }, [authenticated]);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/blog");
      if (!res.ok) throw new Error("Failed to fetch posts");
      const data = await res.json();
      setPosts(data);
    } catch (err) {
      setError("Failed to load posts");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim()) {
      setError("Password is required");
      return;
    }
    
    try {
      setLoading(true);
      setError("");
      const res = await fetch("/api/blog", {
        method: "POST",
        headers: {
          "x-admin-password": password,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ test: true }),
      });
      
      if (res.status === 401) {
        setError("Incorrect password");
      } else if (res.ok) {
        setAuthenticated(true);
        setError("");
      } else {
        setError("Login failed");
      }
    } catch (err) {
      setError("Login failed");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title || !form.summary || !form.date || !form.slug) {
      setError("All fields are required");
      return;
    }
    
    try {
      setLoading(true);
      setError("");
      const res = await fetch("/api/blog", {
        method: "POST",
        headers: {
          "x-admin-password": password,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      
      if (!res.ok) throw new Error("Failed to add post");
      
      setForm({
        title: "",
        summary: "",
        date: "",
        slug: "",
        isNew: false,
        imageUrl: "",
        body: "",
      });
      await fetchPosts();
    } catch (err) {
      setError("Failed to add post");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this post?")) return;
    
    try {
      setLoading(true);
      setError("");
      const res = await fetch("/api/blog", {
        method: "DELETE",
        headers: {
          "x-admin-password": password,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      
      if (!res.ok) throw new Error("Failed to delete post");
      
      await fetchPosts();
    } catch (err) {
      setError("Failed to delete post");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (post: BlogPost) => {
    setEditId(post.id);
    setForm({
      title: post.title,
      summary: post.summary,
      date: post.date,
      slug: post.slug,
      isNew: post.isNew,
      imageUrl: post.imageUrl || "",
      body: post.body || "",
    });
  };

  const handleCancelEdit = () => {
    setEditId(null);
    setForm({
      title: "",
      summary: "",
      date: "",
      slug: "",
      isNew: false,
      imageUrl: "",
      body: "",
    });
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title || !form.summary || !form.date || !form.slug) {
      setError("All fields are required");
      return;
    }
    
    try {
      setLoading(true);
      setError("");
      const res = await fetch("/api/blog", {
        method: editId ? "PUT" : "POST",
        headers: {
          "x-admin-password": password,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editId ? { id: editId, ...form } : form),
      });
      
      if (!res.ok) throw new Error("Failed to save post");
      
      setEditId(null);
      setForm({
        title: "",
        summary: "",
        date: "",
        slug: "",
        isNew: false,
        imageUrl: "",
        body: "",
      });
      await fetchPosts();
    } catch (err) {
      setError("Failed to save post");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    try {
      setUploading(true);
      setError("");
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch("/api/blog/upload", {
        method: "POST",
        body: formData,
      });
      
      if (!res.ok) throw new Error("Upload failed");
      
      const data = await res.json();
      setForm((f) => ({ ...f, imageUrl: data.url }));
    } catch (err) {
      setError("Image upload failed");
      console.error(err);
    } finally {
      setUploading(false);
    }
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <form
          onSubmit={handleLogin}
          className="bg-white dark:bg-gray-800 p-8 rounded shadow flex flex-col gap-4 w-80"
        >
          <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
            Admin Login
          </h2>
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600 w-full pr-10"
              disabled={loading}
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 focus:outline-none"
              tabIndex={-1}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            disabled={loading}
          >
            {loading ? (
              <>
                <FaSpinner className="animate-spin" />
                Logging in...
              </>
            ) : (
              "Login"
            )}
          </button>
          <div className="text-xs text-gray-500 text-center">
            Default password: admin123
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10 px-4 pt-20">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
          Blog Admin Panel
        </h1>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        
        <form
          onSubmit={editId ? handleSave : handleAdd}
          className="bg-white dark:bg-gray-800 p-6 rounded shadow flex flex-col gap-4 mb-8"
        >
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={form.title}
            onChange={handleChange}
            className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
            disabled={loading}
          />
          <input
            type="text"
            name="summary"
            placeholder="Summary"
            value={form.summary}
            onChange={handleChange}
            className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
            disabled={loading}
          />
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
            disabled={loading}
          />
          <input
            type="text"
            name="slug"
            placeholder="Slug (e.g. my-post)"
            value={form.slug}
            onChange={handleChange}
            className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
            disabled={loading}
          />
          <input
            type="text"
            name="imageUrl"
            placeholder="Image URL (optional)"
            value={form.imageUrl}
            onChange={handleChange}
            className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
            disabled={loading}
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
            disabled={loading || uploading}
          />
          {uploading && (
            <div className="text-blue-500 flex items-center gap-2">
              <FaSpinner className="animate-spin" />
              Uploading...
            </div>
          )}
          {form.imageUrl && (
            <Image
              src={form.imageUrl}
              alt="Preview"
              width={160}
              height={96}
              className="w-40 h-24 object-cover rounded mb-2"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.parentElement!.innerHTML =
                  '<div class="text-red-500 text-sm">Image not available</div>';
              }}
            />
          )}
          <textarea
            name="body"
            placeholder="Blog body (HTML allowed)"
            value={form.body}
            onChange={handleChange}
            className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600 min-h-[120px]"
            disabled={loading}
          />
          <div className="prose prose-blue dark:prose-invert bg-gray-100 dark:bg-gray-900 rounded p-4 mt-2 max-w-none">
            <div
              dangerouslySetInnerHTML={{
                __html: form.body || "<p>Blog body preview...</p>",
              }}
            />
          </div>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="isNew"
              checked={form.isNew}
              onChange={handleChange}
              disabled={loading}
            />
            Mark as New
          </label>
          <div className="flex gap-2">
            <button
              type="submit"
              className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 flex-1"
              disabled={loading}
            >
              {loading ? (
                <>
                  <FaSpinner className="animate-spin" />
                  Saving...
                </>
              ) : (
                editId ? "Save Changes" : "Add Post"
              )}
            </button>
            {editId && (
              <button
                type="button"
                onClick={handleCancelEdit}
                className="bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-500 disabled:opacity-50"
                disabled={loading}
              >
                Cancel
              </button>
            )}
          </div>
        </form>
        
        <div className="space-y-4">
          {loading && posts.length === 0 ? (
            <div className="text-center py-8">
              <FaSpinner className="animate-spin text-2xl mx-auto mb-2" />
              Loading posts...
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              No posts yet. Create your first post above!
            </div>
          ) : (
            posts.map((post) => (
              <div
                key={post.id}
                className="bg-white dark:bg-gray-800 p-4 rounded shadow flex flex-col md:flex-row md:items-center justify-between gap-2 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex-1">
                  <div className="font-semibold text-blue-800 dark:text-blue-300">
                    {post.title}
                  </div>
                  <div className="text-xs text-gray-400 dark:text-gray-500">
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">
                    {post.summary}
                  </div>
                  <div className="text-xs text-gray-400 dark:text-gray-500">
                    Slug: {post.slug}
                  </div>
                  {post.isNew && (
                    <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full ml-2">
                      New
                    </span>
                  )}
                  {post.imageUrl && (
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      width={160}
                      height={96}
                      className="mt-2 w-40 h-24 object-cover rounded"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        e.currentTarget.parentElement!.innerHTML =
                          '<div class="text-red-500 text-xs">Image not available</div>';
                      }}
                    />
                  )}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(post)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 disabled:opacity-50"
                    disabled={loading}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(post.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 disabled:opacity-50"
                    disabled={loading}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
