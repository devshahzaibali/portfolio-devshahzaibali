"use client";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import dynamic from "next/dynamic";

// Inline loading spinner
const LoadingSpinner = ({ size = 20 }) => (
  <div
    className="animate-spin rounded-full border-t-2 border-b-2 border-blue-500"
    style={{ width: size, height: size }}
  ></div>
);

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear messages when user starts typing
    if (success || error) {
      setSuccess("");
      setError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to send message");
      }

      setSuccess("Your message has been sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

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
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="text-center mb-16"
        >
          <motion.h2
            variants={item}
            className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4"
          >
            Let's Connect
          </motion.h2>
          <motion.p
            variants={item}
            className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Have a project in mind or want to discuss opportunities? I'd love to
            hear from you!
          </motion.p>
        </motion.div>

        <div className="flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-5xl bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col md:flex-row gap-8"
          >
            {/* Left: Contact Info + Map */}
            <div className="flex-1 flex flex-col gap-8 min-w-[220px]">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-600 dark:text-blue-300">
                      <FaEnvelope className="text-xl" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Email
                      </h4>
                      <a
                        href="mailto:techzaibx@gmail.com"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        techzaibx@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full text-green-600 dark:text-green-300">
                      <FaPhoneAlt className="text-xl" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Phone
                      </h4>
                      <a
                        href="tel:+923074218625"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        +92 307 4218625
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-full text-purple-600 dark:text-purple-300">
                      <FaMapMarkerAlt className="text-xl" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Location
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Shahdara, Lahore, Pakistan
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-56 md:h-72 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow">
                <iframe
                  title="Shahdara, Lahore Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435518.6817854715!2d74.05418899999999!3d31.4832208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
            {/* Right: Contact Form */}
            <div className="flex-1 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
                Send me a message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-all"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="john@example.com"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={10}
                    placeholder="Hello, I'd like to talk about..."
                    required
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-all text-lg min-h-[200px]"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium py-3 px-6 rounded-lg shadow-md transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <LoadingSpinner size={20} />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="text-white" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200 rounded-lg text-center"
                  >
                    {success}
                  </motion.div>
                )}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 rounded-lg text-center"
                  >
                    {error}
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
        {/* Responsive, subtle, and attractive 24/7 message always below the card */}
        <div className="flex justify-center my-8">
          <span className="w-full max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100 dark:from-blue-900 dark:via-gray-900 dark:to-blue-900 text-blue-700 dark:text-blue-200 font-semibold text-xs sm:text-sm md:text-lg px-4 sm:px-6 md:px-10 py-2 md:py-4 rounded-full shadow-lg border border-blue-200 dark:border-blue-800 tracking-wide text-center">
            🚀 Available 24/7 &mdash; Fast replies & free consultation
          </span>
        </div>
      </div> {/* End max-w-6xl */}
    </section>
  );
};

export default Contact;
