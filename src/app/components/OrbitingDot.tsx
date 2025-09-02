"use client";

import { motion } from "framer-motion";
import { useCursorContext } from "@/context/CursorContext";
import { useEffect, useState, useMemo } from "react";
import styles from "./AnimatedBackground.module.css";

interface TargetPosition {
  x: number;
  y: number;
}

interface OrbitingDotProps {
  index: number;
  total: number;
}

export default function OrbitingDot({ index, total }: OrbitingDotProps) {
  const { hoveredElement, introPhase } = useCursorContext();
  const [target, setTarget] = useState<TargetPosition | null>(null);

  const { randomTop, randomLeft, orbitRadius, floatDuration, floatDelay } =
    useMemo(
      () => ({
        randomTop: `${Math.random() * 100}%`,
        randomLeft: `${Math.random() * 100}%`,
        orbitRadius: Math.random() * 25 + 60,
        floatDuration: Math.random() * 4 + 7, // Sedikit lebih lambat untuk float
        floatDelay: Math.random() * 5,
      }),
      []
    );

  const orbitAngle = (index / total) * 360;

  useEffect(() => {
    if (hoveredElement) {
      const rect = hoveredElement.getBoundingClientRect();
      setTarget({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      });
    } else {
      setTarget(null);
    }
  }, [hoveredElement]);

  const getAnimationState = () => {
    if (target) return "orbit";
    if (introPhase >= 3) return "spread";
    return "initial";
  };

  return (
    <motion.div
      className={styles.sharpDot}
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
      }}
      variants={{
        initial: {
          top: "50%",
          left: "50%",
          x: "-50%",
          y: "-50%",
          scale: 1,
          opacity: 0,
        },
        spread: {
          top: randomTop,
          left: randomLeft,
          x: [0, 5, -5, 0],
          y: [0, 5, -5, 0],
          scale: 1,
        },
        orbit: {
          top: target?.y,
          left: target?.x,
          x: `${orbitRadius * Math.cos(orbitAngle * (Math.PI / 180))}px`,
          y: `${orbitRadius * Math.sin(orbitAngle * (Math.PI / 180))}px`,
          scale: 1.5,
          rotate: 360,
        },
      }}
      animate={getAnimationState()}
      transition={{
        // Definisikan transisi 'spring' HANYA untuk properti posisi dan skala
        top: { type: "spring", stiffness: 100, damping: 20 },
        left: { type: "spring", stiffness: 100, damping: 20 },
        scale: { type: "spring", stiffness: 100, damping: 20 },

        // Transisi untuk float (x dan y) sekarang bisa berjalan tanpa konflik
        x: {
          duration: floatDuration,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay: floatDelay,
        },
        y: {
          duration: floatDuration,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay: floatDelay,
        },

        // Transisi untuk orbit
        rotate: {
          duration: 2.5,
          repeat: Infinity,
          ease: "linear",
        },
      }}
    />
  );
}
