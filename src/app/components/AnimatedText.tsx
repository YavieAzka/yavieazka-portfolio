"use client";

import { motion, Variants } from "framer-motion"; // 1. Impor tipe 'Variants'

// 2. Tambahkan anotasi tipe ': Variants' di sini
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.04 * i },
  }),
};

// 3. Tambahkan anotasi tipe ': Variants' di sini juga
const childVariants: Variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export default function AnimatedText({ text, className }: AnimatedTextProps) {
  const words = text.split(" ");

  return (
    <motion.h2
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={childVariants}
          style={{ display: "inline-block", marginRight: "0.25em" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.h2>
  );
}
