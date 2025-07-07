"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const categories = [
  {
    name: "Fashion",
    count: "120+ Products",
    img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Electronics",
    count: "85+ Products",
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Home Decor",
    count: "65+ Products",
    img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Beauty",
    count: "90+ Products",
    img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

const products = [
  {
    title: "Smart Watch Series 5",
    category: "Electronics",
    price: "$199.99",
    oldPrice: "$249.99",
    img: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    badge: "Sale",
  },
  {
    title: "Wireless Bluetooth Headphones",
    category: "Electronics",
    price: "$89.99",
    img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Premium Running Shoes",
    category: "Fashion",
    price: "$129.99",
    img: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    badge: "New",
  },
  {
    title: "Travel Backpack",
    category: "Accessories",
    price: "$59.99",
    oldPrice: "$79.99",
    img: "https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

export default function EcommerceDemoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-0">
          <div className="flex items-center gap-2 text-2xl font-bold text-purple-700">
            <span className="text-pink-500">
              <i className="fas fa-shopping-bag"></i>
            </span>
            ShopEase
          </div>
          <nav className="hidden md:flex gap-8 text-gray-700 font-semibold">
            <a href="#" className="hover:text-pink-500">
              Home
            </a>
            <a href="#" className="hover:text-pink-500">
              Shop
            </a>
            <a href="#" className="hover:text-pink-500">
              Categories
            </a>
            <a href="#" className="hover:text-pink-500">
              About
            </a>
            <a href="#" className="hover:text-pink-500">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <i className="fas fa-search text-lg cursor-pointer hover:text-pink-500"></i>
            <div className="relative">
              <i className="fas fa-shopping-cart text-lg cursor-pointer hover:text-pink-500"></i>
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </div>
            <i className="fas fa-user text-lg cursor-pointer hover:text-pink-500"></i>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 to-purple-50 py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-4 md:px-0">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 leading-tight">
              Discover Amazing <span className="text-pink-500">Products</span>{" "}
              For You
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Shop the latest trends in fashion, electronics, and more with
              exclusive discounts and fast delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#"
                className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-2xl shadow hover:bg-pink-600 transition duration-300"
              >
                Shop Now
              </a>
              <a
                href="#"
                className="px-6 py-3 border-2 border-pink-500 text-pink-500 font-semibold rounded-2xl hover:bg-pink-50 transition duration-300"
              >
                Explore
              </a>
            </div>
            <div className="mt-6">
              <Link
                href="/ecommerce-demo/code"
                className="text-blue-600 underline hover:text-blue-800 text-sm"
              >
                View Source Code
              </Link>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Hero"
              width={800}
              height={600}
              className="rounded-2xl shadow-lg w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-0">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-4">
            <h2 className="text-3xl font-bold text-purple-700">
              Shop by Categories
            </h2>
            <a
              href="#"
              className="btn btn-secondary bg-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-700 transition"
            >
              View All
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {categories.map((cat, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <Image
                    src={cat.img}
                    alt={cat.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-lg font-bold mb-1 text-gray-800">
                    {cat.name}
                  </h3>
                  <p className="text-gray-500 text-sm">{cat.count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 md:px-0">
          <h2 className="text-3xl font-bold text-purple-700 mb-10">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {products.map((prod, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden relative"
              >
                {prod.badge && (
                  <span className="absolute top-4 left-4 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                    {prod.badge}
                  </span>
                )}
                <div className="h-56 overflow-hidden">
                  <Image
                    src={prod.img}
                    alt={prod.title}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs text-gray-500 mb-1">{prod.category}</p>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    {prod.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-pink-500 font-bold text-lg">
                      {prod.price}
                    </span>
                    {prod.oldPrice && (
                      <span className="text-gray-400 line-through text-sm">
                        {prod.oldPrice}
                      </span>
                    )}
                  </div>
                  <button className="w-full py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-900 text-white py-10 mt-10">
        <div className="container mx-auto px-4 md:px-0 text-center">
          <p className="text-lg font-bold mb-2">ShopEase</p>
          <p className="text-sm opacity-80">
            Your one-stop shop for all your needs. &copy;{" "}
            {new Date().getFullYear()} ShopEase. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
