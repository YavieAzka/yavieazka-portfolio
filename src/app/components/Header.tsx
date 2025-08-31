"use client";

import Link from "next/link";
import React, { useState } from "react"; // 1. Impor useState
import { motion, AnimatePresence } from "framer-motion"; // 2. Impor AnimatePresence
import { Menu, X } from "lucide-react"; // 3. Impor ikon untuk hamburger menu

const navLinks = [
  { name: "About", hash: "#about" },
  { name: "Experience", hash: "#experience" },
  { name: "Projects", hash: "#projects" },
  { name: "Skills", hash: "#skills" },
  { name: "Achievements", hash: "#achievements" },
];

export default function Header() {
  // 4. State untuk melacak status menu mobile (terbuka/tertutup)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-950 dark:bg-[#0f0f0f] dark:border-white/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ duration: 0.5 }}
      ></motion.div>

      {/* 5. Tombol Hamburger Menu (hanya tampil di mobile) */}
      <button
        className="sm:hidden fixed top-4 right-4 z-[1000] p-2 rounded-full bg-white/80 dark:bg-gray-950/75 backdrop-blur-sm"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Navigasi untuk Desktop (tampil mulai dari breakpoint 'sm') */}
      <nav className="hidden sm:flex fixed top-[1.7rem] left-1/2 h-[initial] -translate-x-1/2 py-0">
        <ul className="flex w-[initial] flex-nowrap items-center justify-center gap-5">
          {navLinks.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
            >
              <Link
                className="flex w-full items-center justify-center px-3 py-3 text-gray-500 hover:text-[#7661cc] transition dark:text-gray-400 dark:hover:text-brand-light hover:scale-110 hover:[text-shadow:0_0_8px_rgba(105,140,226,0.7)]"
                href={link.hash}
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* 6. Navigasi untuk Mobile (muncul sebagai overlay saat isMenuOpen true) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="sm:hidden fixed top-0 left-0 w-full h-screen bg-white/95 dark:bg-black/95 backdrop-blur-lg pt-24"
          >
            <nav>
              <ul className="flex flex-col items-center justify-center gap-8">
                {navLinks.map((link) => (
                  <motion.li key={link.hash}>
                    <Link
                      className="text-2xl font-semibold text-gray-800 dark:text-gray-200"
                      href={link.hash}
                      // 7. Tutup menu setelah link diklik
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
