"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useState } from "react";

// Portfolio landing page with contact form
export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formDataObj = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataObj,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* Header with Theme Toggle */}
      <header className="fixed top-0 right-0 p-6 z-10">
        <ThemeToggle />
      </header>

      <main className="container mx-auto px-6 py-20 max-w-6xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
            Bert Darnell
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Cybersecurity Professional | Help Desk Specialist
          </p>
          <div className="mt-3 flex items-center justify-center gap-4">
            <a
              href="https://github.com/berts-repo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4682B4] dark:text-[#5F9EA0] hover:opacity-70 transition-opacity"
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/bert-darnell-476b70386/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4682B4] dark:text-[#5F9EA0] hover:opacity-70 transition-opacity"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Navigation Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6 mb-20"
        >
          <Link href="/webpost">
            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-br from-[#4682B4] to-[#36648B] dark:from-[#5F9EA0] dark:to-[#4682B4] p-12 rounded-2xl shadow-xl cursor-pointer group"
            >
              <div className="text-white">
                <h2 className="text-3xl font-bold mb-3 group-hover:translate-x-2 transition-transform">
                  Webposts
                </h2>
                <p className="text-blue-100">
                  Read my technical articles and tutorials
                </p>
              </div>
            </motion.div>
          </Link>

          <Link href="/resume">
            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-br from-[#4682B4] to-[#36648B] dark:from-[#5F9EA0] dark:to-[#4682B4] p-12 rounded-2xl shadow-xl cursor-pointer group"
            >
              <div className="text-white">
                <h2 className="text-3xl font-bold mb-3 group-hover:translate-x-2 transition-transform">
                  Resume
                </h2>
                <p className="text-blue-100">
                  View my experience and skills
                </p>
              </div>
            </motion.div>
          </Link>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            Get In Touch
          </h2>
          <form
            onSubmit={handleSubmit}
            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
          >
            {/* Hidden fields for Web3Forms */}
            <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY} />
            <input type="hidden" name="subject" value="New Contact Form Submission from helloto.me" />

            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-2 text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#4682B4] focus:border-transparent transition-colors"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2 text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#4682B4] focus:border-transparent transition-colors"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2 text-gray-900 dark:text-white"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                required
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-[#4682B4] hover:bg-[#36648B] dark:bg-[#5F9EA0] dark:hover:bg-[#4682B4] text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-md"
            >
              {submitted ? "Sent! ✓" : "Send Message"}
            </motion.button>
          </form>
        </motion.div>
      </main>
    </div>
  );
}
