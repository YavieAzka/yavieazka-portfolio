"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // 1. Pastikan motion sudah diimpor

interface Greeting {
  text: string;
  lang: string;
}

const greetings: Greeting[] = [
  { text: "Hello", lang: "English" },
  { text: "Halo", lang: "Indonesian" },
  { text: "こんにちは", lang: "Japanese" },
  { text: "안녕하세요", lang: "Korean" },
  { text: "Ciao", lang: "Italian" },
  { text: "Bonjour", lang: "French" },
  { text: "Hola", lang: "Spanish" },
  { text: "مرحبا", lang: "Arabic" },
];

// 2. Definisikan varian animasi untuk container dan setiap huruf
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5, // Mulai animasi huruf setelah 0.5 detik
      staggerChildren: 0.05, // Jeda 0.05 detik antar huruf
    },
  },
};

const childVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function Hero() {
  const [currentGreeting, setCurrentGreeting] = useState(0);

  // 3. Pecah teks menjadi array karakter
  const iAmText = "I am ".split("");
  const nameText = "Yavie Azka.".split("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center text-white">
      <div className="text-center animate-fadeIn px-4 relative">
        <h1
          key={currentGreeting}
          className="text-9xl sm:text-10xl font-extrabold font-inter mb-10 animate-slideText drop-shadow-md"
        >
          {greetings[currentGreeting].text}
        </h1>

        {/* 4. Terapkan animasi menggunakan motion component */}
        <motion.p
          className="text-2xl sm:text-3xl font-medium font-inter drop-shadow-md"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Render "I am " */}
          {iAmText.map((char, index) => (
            <motion.span key={index} variants={childVariants}>
              {char}
            </motion.span>
          ))}
          {/* Render "Yavie Azka." dengan style berbeda */}
          <span className="gradient-text">
            {nameText.map((char, index) => (
              <motion.span key={index} variants={childVariants}>
                {char}
              </motion.span>
            ))}
          </span>
        </motion.p>
      </div>
    </section>
  );
}
