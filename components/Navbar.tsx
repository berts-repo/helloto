"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { motion } from "framer-motion";

export function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/webpost", label: "Webposts" },
    { href: "/resume", label: "Resume" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200/50 dark:border-gray-700/50 transition-colors">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 rounded-full border border-slate-200/70 dark:border-slate-700/70 bg-white/70 dark:bg-slate-900/60 p-1 shadow-sm">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                <motion.span
                  className={`relative inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    pathname === link.href
                      ? "text-[#4682B4] dark:text-[#5F9EA0] bg-[#4682B4]/10 dark:bg-[#5F9EA0]/15 border-b-2 border-[#4682B4]"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-slate-800/80"
                  }`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.label}
                  {pathname === link.href && (
                    <span className="absolute inset-x-3 -bottom-[1px] h-[2px] rounded-full bg-[#4682B4] dark:bg-[#5F9EA0]" />
                  )}
                </motion.span>
              </Link>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
