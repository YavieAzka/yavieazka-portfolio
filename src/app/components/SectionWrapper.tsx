import React from "react";

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
    <section id={id} className="py-20 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          {title}
        </h2>
        <div className="w-20 h-1 bg-brand-accent mx-auto mt-4 rounded"></div>
      </div>
      {children}
    </section>
  );
}
