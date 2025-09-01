"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

const CURSOR_SIZE = 8;
const FOLLOW_RING_SIZES = [20, 30, 40];

export default function MultiFollowCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const followRingXs = FOLLOW_RING_SIZES.map((_, index) => {
    const stiffness = 400 - index * 100;
    const damping = 30 + index * 10;
    return useSpring(mouseX, { stiffness, damping });
  });

  const followRingYs = FOLLOW_RING_SIZES.map((_, index) => {
    const stiffness = 400 - index * 100;
    const damping = 30 + index * 10;
    return useSpring(mouseY, { stiffness, damping });
  });

  const handleMouseMove = (event: MouseEvent) => {
    mouseX.set(event.clientX);
    mouseY.set(event.clientY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Kursor Utama (Titik Putih) */}
      <motion.div
        className="fixed z-[9999] rounded-full bg-white pointer-events-none"
        style={{
          left: mouseX,
          top: mouseY,
          width: CURSOR_SIZE,
          height: CURSOR_SIZE,
          transform: `translate(-50%, -50%)`,
        }}
      />

      {FOLLOW_RING_SIZES.map((size, index) => (
        <motion.div
          key={index}
          className="fixed z-[9999] rounded-full border-2 pointer-events-none"
          style={{
            left: followRingXs[index],
            top: followRingYs[index],
            width: size,
            height: size,
            borderColor:
              index === 0
                ? "rgba(255, 0, 150, 0.7)"
                : index === 1
                ? "rgba(150, 0, 255, 0.7)"
                : "rgba(100, 0, 255, 0.7)",
            transform: `translate(-50%, -50%)`,
          }}
        />
      ))}
    </>
  );
}
