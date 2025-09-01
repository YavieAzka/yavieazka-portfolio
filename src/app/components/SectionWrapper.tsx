// src/app/components/SectionWrapper.tsx

import React from "react";
import AnimatedText from "./AnimatedText"; // 1. Impor komponen baru
import * as motion from "motion/react-client";
interface SectionWrapperProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export default function SectionWrapper({
  id,
  title,
  children,
}: SectionWrapperProps) {
  return (
    <section id={id} className="py-20 px-4 scroll-mt-28">
      <div className="text-center mb-12">
        {/* 2. Ganti <h2> statis dengan AnimatedText */}
        <AnimatedText
          text={title}
          className="text-3xl md:text-4xl font-bold tracking-tight"
        />
        <div className="w-20 h-1 bg-brand-accent mx-auto mt-4 rounded"></div>
      </div>

      {/* 3. Bungkus {children} dengan motion.div untuk animasi fade-in */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {children}
      </motion.div>
    </section>
  );
}
