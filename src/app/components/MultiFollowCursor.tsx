"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useCallback } from "react"; // 1. Impor useCallback

const CURSOR_SIZE = 8;
const FOLLOW_RING_SIZES = [20, 30, 40];

export default function MultiFollowCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 2. Panggil useSpring di level teratas untuk setiap lingkaran
  // Lingkaran 1 (terkecil)
  const ring1X = useSpring(mouseX, { stiffness: 400, damping: 30 });
  const ring1Y = useSpring(mouseY, { stiffness: 400, damping: 30 });

  // Lingkaran 2
  const ring2X = useSpring(mouseX, { stiffness: 300, damping: 40 });
  const ring2Y = useSpring(mouseY, { stiffness: 300, damping: 40 });

  // Lingkaran 3 (terbesar)
  const ring3X = useSpring(mouseX, { stiffness: 200, damping: 50 });
  const ring3Y = useSpring(mouseY, { stiffness: 200, damping: 50 });

  // Simpan dalam array agar mudah di-loop saat rendering
  const followRingXs = [ring1X, ring2X, ring3X];
  const followRingYs = [ring1Y, ring2Y, ring3Y];

  // 3. Bungkus handleMouseMove dengan useCallback
  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    },
    [mouseX, mouseY]
  ); // Dependensi untuk useCallback

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]); // 4. Tambahkan handleMouseMove ke dependency array

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

      {/* Lingkaran Pengikut */}
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
