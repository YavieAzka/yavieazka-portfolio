"use client";

import OrbitingDot from "./OrbitingDot";
import CssBackground from "./CssBackground";
import { useCursorContext } from "@/context/CursorContext";
import { motion } from "framer-motion";
import styles from "./CssBackground.module.css";
import Spotlight from "./Spotlight";

const NUM_ORBIT_DOTS = 75;

export default function AnimatedBackground() {
  const { introPhase } = useCursorContext();

  return (
    <div>
      {/* motion.div ini sekarang menjadi .background itu sendiri */}
      <motion.div
        className={styles.background} // Terapkan class .background di sini
        initial={{ opacity: 0 }}
        animate={{ opacity: introPhase >= 3 ? 1 : 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <CssBackground /> {/* Komponen ini sekarang hanya memasok <span> */}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: introPhase >= 3 ? 1 : 0 }}
        transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
      >
        <Spotlight />
      </motion.div>
      {Array.from({ length: NUM_ORBIT_DOTS }).map((_, index) => (
        <OrbitingDot
          key={`orbit-${index}`}
          index={index}
          total={NUM_ORBIT_DOTS}
        />
      ))}
    </div>
  );
}
