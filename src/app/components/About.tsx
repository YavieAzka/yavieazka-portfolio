// src/app/components/About.tsx

import { PROFILE } from "@/lib/data";
import SectionWrapper from "./SectionWrapper";
import * as motion from "motion/react-client";

export default function About() {
  return (
    <SectionWrapper id="about" title="About Me">
      <div className="max-w-3xl mx-auto text-center">
        {/* Tambahkan text-center di sini */}
        <p className="text-lg text-neutral-300 leading-relaxed">
          {PROFILE.description}
        </p>
        {/* 2. Tambahkan container untuk ikon sosial media */}
        <motion.div className="flex items-center justify-center gap-6 mt-8">
          {PROFILE.links.map((link) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-neutral-400 hover:text-[#698ce2]"
            >
              <link.icon size={28} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
