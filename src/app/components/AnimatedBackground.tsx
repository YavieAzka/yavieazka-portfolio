"use client";

import styles from "./AnimatedBackground.module.css";

export default function AnimatedBackground() {
  // Membuat array dengan 50 elemen untuk dirender sebagai <span>
  const spans = Array.from({ length: 50 });

  return (
    <div className={styles.background}>
      {spans.map((_, index) => (
        <span key={index} />
      ))}
    </div>
  );
}
