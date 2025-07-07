"use client";

import { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Image from "next/image";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState({
    title: "",
    summary: "",
    date: "",
    slug: "",
    isNew: false,
    imageUrl: "",
    body: "",
  });
  const [editId, setEditId] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (authenticated) fetchPosts();
  }, [authenticated]);

  const fetchPosts = async () => {
    const res = await fetch("/api/blog");
    const data = await res.json();
    setPosts(data);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    fetch("/api/blog", {
      method: "POST",
      headers: {
        "x-admin-password": password,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ test: true }),
    }).then((res) => {
      if (res.status === 401) alert("Incorrect password");
      else setAuthenticated(true);
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!form.title || !form.summary || !form.date || !form.slug)
      return alert("All fields required");
    await fetch("/api/blog", {
      method: "POST",
      headers: {
        "x-admin-password": password,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    setForm({
      title: "",
      summary: "",
      date: "",
      slug: "",
      isNew: false,
      imageUrl: "",
      body: "",
    });
    fetchPosts();
  };

  const handleDelete = async (id) => {
    await fetch("/api/blog", {
      method: "DELETE",
      headers: {
        "x-admin-password": password,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    fetchPosts();
  };

  const handleEdit = (post) => {
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

  const handleSave = async (e) => {
    e.preventDefault();
    if (!form.title || !form.summary || !form.date || !form.slug)
      return alert("All fields required");
    if (editId) {
      await fetch("/api/blog", {
        method: "PUT",
        headers: {
          "x-admin-password": password,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: editId, ...form }),
      });
      setEditId(null);
    } else {
      await fetch("/api/blog", {
        method: "POST",
        headers: {
          "x-admin-password": password,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
    }
    setForm({
      title: "",
      summary: "",
      date: "",
      slug: "",
      isNew: false,
      imageUrl: "",
      body: "",
    });
    fetchPosts();
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    const res = await fetch("/api/blog/upload", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    setForm((f) => ({ ...f, imageUrl: data.url }));
    setUploading(false);
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
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600 w-full pr-10"
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
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Login
          </button>
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
          />
          <input
            type="text"
            name="summary"
            placeholder="Summary"
            value={form.summary}
            onChange={handleChange}
            className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
          />
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
          />
          <input
            type="text"
            name="slug"
            placeholder="Slug (e.g. my-post)"
            value={form.slug}
            onChange={handleChange}
            className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
          />
          <input
            type="text"
            name="imageUrl"
            placeholder="Image URL (optional)"
            value={form.imageUrl}
            onChange={handleChange}
            className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
          />
          {uploading && <div className="text-blue-500">Uploading...</div>}
          {form.imageUrl && (
            <Image
              src={form.imageUrl}
              alt="Preview"
              width={160}
              height={96}
              className="w-40 h-24 object-cover rounded mb-2"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.parentElement.innerHTML =
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
            />
            Mark as New
          </label>
          <button
            type="submit"
            className="bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            {editId ? "Save Changes" : "Add Post"}
          </button>
          {editId && (
            <button
              type="button"
              onClick={handleCancelEdit}
              className="bg-gray-400 text-white py-2 rounded hover:bg-gray-500 ml-2"
            >
              Cancel
            </button>
          )}
        </form>
        <div className="space-y-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white dark:bg-gray-800 p-4 rounded shadow flex flex-col md:flex-row md:items-center justify-between gap-2 border border-gray-200 dark:border-gray-700"
            >
              <div>
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
                      e.target.style.display = "none";
                      e.target.parentElement.innerHTML =
                        '<div class="text-red-500 text-xs">Image not available</div>';
                    }}
                  />
                )}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(post)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(post.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
