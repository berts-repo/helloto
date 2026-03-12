"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* Header with Theme Toggle */}
      <header className="fixed top-0 right-0 p-6 z-10">
        <ThemeToggle />
      </header>

      <main className="container mx-auto px-6 py-20 max-w-6xl">
        {/* Hero Section */}
        <div className="rounded-3xl [background-image:radial-gradient(circle,_#4682B420_1px,_transparent_1px)] [background-size:24px_24px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl text-center mb-16 px-8 py-16 md:py-20 border border-slate-200/80 dark:border-slate-700/70 bg-white/85 dark:bg-slate-900/60 shadow-xl shadow-slate-200/50 dark:shadow-black/20"
          >
          <motion.div
            className="absolute inset-0 hero-grid opacity-90 dark:opacity-70"
            animate={{ backgroundPosition: ["center", "20px 20px", "center"] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#4682B4]/10 via-transparent to-cyan-300/10 dark:from-[#4682B4]/15 dark:to-cyan-400/10" />
          <div className="relative z-[1]">
            <h1 className="text-6xl md:text-7xl font-extrabold mb-4 leading-tight bg-gradient-to-r from-[#4682B4] to-[#5F9EA0] bg-clip-text text-transparent">
              Bert Darnell
            </h1>
            <p className="text-xl text-gray-900 dark:text-gray-300 font-medium">
              Cybersecurity Professional | Help Desk Specialist
            </p>
            <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
              <a
                href="https://github.com/berts-repo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#4682B4]/40 hover:border-[#4682B4] hover:shadow-[0_0_12px_#4682B430] transition-all duration-200 bg-white/80 dark:bg-slate-800/70 text-sm font-medium text-[#36648B] dark:text-[#bde8e9] shadow-sm hover:-translate-y-0.5"
                aria-label="GitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/bert-darnell-476b70386/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#4682B4]/40 hover:border-[#4682B4] hover:shadow-[0_0_12px_#4682B430] transition-all duration-200 bg-white/80 dark:bg-slate-800/70 text-sm font-medium text-[#36648B] dark:text-[#bde8e9] shadow-sm hover:-translate-y-0.5"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="mailto:bert@helloto.me"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#4682B4]/40 hover:border-[#4682B4] hover:shadow-[0_0_12px_#4682B430] transition-all duration-200 bg-white/80 dark:bg-slate-800/70 text-sm font-medium text-[#36648B] dark:text-[#bde8e9] shadow-sm hover:-translate-y-0.5"
                aria-label="Email"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                Email
              </a>
            </div>
          </div>
          </motion.div>
        </div>

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
              className="relative overflow-hidden p-[1px] rounded-2xl cursor-pointer group shadow-xl shadow-slate-200/40 dark:shadow-black/30"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#4682B4] via-[#5F9EA0] to-cyan-400 dark:from-[#36648B] dark:via-[#4682B4] dark:to-[#5F9EA0]" />
              <div className="relative h-full rounded-[15px] bg-white/85 dark:bg-slate-900/70 backdrop-blur-md p-12 border border-gray-200 dark:border-gray-700 hover:border-[#4682B4]/60 hover:shadow-[0_8px_32px_#4682B420] group-hover:shadow-[0_0_30px_rgba(70,130,180,0.3)] transition-all">
                <div className="text-gray-900 dark:text-white">
                  <h2 className="text-3xl font-bold mb-3 group-hover:translate-x-2 transition-transform">
                    Webposts
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    Read my technical articles and tutorials
                  </p>
                </div>
              </div>
            </motion.div>
          </Link>

          <Link href="/resume">
            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="relative overflow-hidden p-[1px] rounded-2xl cursor-pointer group shadow-xl shadow-slate-200/40 dark:shadow-black/30"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#4682B4] via-[#5F9EA0] to-cyan-400 dark:from-[#36648B] dark:via-[#4682B4] dark:to-[#5F9EA0]" />
              <div className="relative h-full rounded-[15px] bg-white/85 dark:bg-slate-900/70 backdrop-blur-md p-12 border border-gray-200 dark:border-gray-700 hover:border-[#4682B4]/60 hover:shadow-[0_8px_32px_#4682B420] group-hover:shadow-[0_0_30px_rgba(70,130,180,0.3)] transition-all">
                <div className="text-gray-900 dark:text-white">
                  <h2 className="text-3xl font-bold mb-3 group-hover:translate-x-2 transition-transform">
                    Resume
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    View my experience and skills
                  </p>
                </div>
              </div>
            </motion.div>
          </Link>
        </motion.div>

      </main>
    </div>
  );
}
