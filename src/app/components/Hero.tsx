"use client";

import { useState, useEffect } from "react";

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

export default function Hero() {
  const [currentGreeting, setCurrentGreeting] = useState(0);

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
        <p className="text-2xl sm:text-3xl font-medium font-inter drop-shadow-md">
          <span>I am </span>
          <span className="gradient-text">Yavie Azka.</span>
        </p>
      </div>
    </section>
  );
}
