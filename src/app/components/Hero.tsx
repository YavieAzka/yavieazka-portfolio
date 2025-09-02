"use client";

import { useState, useEffect } from "react";
import { delay, motion } from "framer-motion";
import { useCursorContext } from "@/context/CursorContext";

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
};
const childVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function Hero() {
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const { introPhase, setIntroPhase } = useCursorContext();

  // useEffect untuk mengatur alur waktu intro (tidak ada perubahan)
  useEffect(() => {
    const timer2 = setTimeout(() => setIntroPhase(2), 1500);
    const timer3 = setTimeout(() => setIntroPhase(3), 4000);
    return () => {
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [setIntroPhase]);

  // useEffect untuk siklus sapaan (DENGAN PERBAIKAN)
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (introPhase === 3) {
      setCurrentGreeting(1);
      interval = setInterval(() => {
        setCurrentGreeting((prev) => {
          // Jika sapaan saat ini adalah yang terakhir di array,
          // kembali ke sapaan kedua (index 1), bukan mencoba ke index selanjutnya.
          if (prev === greetings.length - 1) {
            return 1;
          }
          // Jika tidak, lanjutkan ke sapaan berikutnya.
          return prev + 1;
        });
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [introPhase]);

  return (
    <section className="min-h-screen flex items-center justify-center text-white">
      <div className="text-center animate-fadeIn px-4 relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: introPhase >= 1 ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1
            key={currentGreeting}
            className="text-9xl sm:text-10xl font-extrabold font-inter mb-10 animate-slideText drop-shadow-md"
          >
            {/* Logika ini sudah benar untuk permintaan Anda */}

            {introPhase < 3
              ? greetings[0].text
              : greetings[currentGreeting].text}
          </h1>
        </motion.div>

        <motion.p
          className="text-2xl sm:text-3xl font-medium font-inter drop-shadow-md"
          variants={containerVariants}
          initial="hidden"
          animate={introPhase >= 2 ? "visible" : "hidden"}
        >
          {"I am ".split("").map((char, index) => (
            <motion.span key={index} variants={childVariants}>
              {char}
            </motion.span>
          ))}
          <span className="gradient-text">
            {"Yavie Azka.".split("").map((char, index) => (
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
