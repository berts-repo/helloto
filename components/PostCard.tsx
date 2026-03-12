"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { PostSummary } from "@/lib/posts";

export function PostCard({ post }: { post: PostSummary }) {
  const formattedDate = new Date(post.date + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

  return (
    <Link href={`/webpost/${post.slug}`}>
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -4 }}
        className="group relative overflow-hidden bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 p-6 cursor-pointer border border-gray-200 dark:border-gray-700 border-l-4 border-l-transparent hover:border-l-[#4682B4]"
      >
        <span className="absolute inset-y-0 left-0 w-1 bg-[#4682B4]/0 dark:bg-[#5F9EA0]/0 group-hover:bg-[#4682B4] dark:group-hover:bg-[#5F9EA0] transition-colors duration-300" />
        <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white hover:text-[#4682B4] dark:hover:text-[#5F9EA0] transition-colors">
          {post.title}
        </h2>
        <time className="text-xs text-gray-400 dark:text-gray-500 font-mono mb-3 block">
          {formattedDate}
        </time>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded-full bg-[#4682B4]/10 text-[#4682B4] dark:bg-[#4682B4]/20 dark:text-[#5F9EA0] font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="shrink-0 text-[#4682B4] dark:text-[#5F9EA0] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-transform duration-200">
            →
          </span>
        </div>
      </motion.article>
    </Link>
  );
}
