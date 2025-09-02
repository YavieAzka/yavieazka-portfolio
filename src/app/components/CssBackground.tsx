// src/app/components/CssBackground.tsx
"use client";

import React from "react";

// Komponen ini sekarang hanya mengembalikan fragment berisi 50 span
export default function CssBackground() {
  return (
    <React.Fragment>
      {Array.from({ length: 50 }).map((_, index) => (
        <span key={index} />
      ))}
    </React.Fragment>
  );
}
