"use client";

import Link from "next/link";
import React from "react";

// Definisikan tautan navigasi dalam sebuah array agar mudah dikelola
const navLinks = [
  { name: "About", hash: "#about" },
  { name: "Experience", hash: "#experience" },
  { name: "Projects", hash: "#projects" },
  { name: "Skills", hash: "#skills" },
  { name: "Achievements", hash: "#achievements" },
];

export default function Header() {
  return (
    <header className="z-[999] relative">
      <div
        // Styling untuk membuat navbar 'fixed' di atas dan memberikan efek glassmorphism
        className="fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
      ></div>
      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {navLinks.map((link) => (
            <li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
            >
              <Link
                // Styling untuk tautan, termasuk efek hover yang Anda minta
                className="flex w-full items-center justify-center px-3 py-3 hover:text-brand-accent transition dark:text-gray-400 dark:hover:text-brand-light"
                href={link.hash}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
