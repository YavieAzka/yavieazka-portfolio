// src/lib/data.ts

import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export const METADATA = {
  title: "Yavie Azka Putra Araly | Computer Science Student",
  description:
    "Computer Science student at Institut Teknologi Bandung with a strong background in algorithms, mathematics, and software development.",
};

export const PROFILE = {
  name: "Yavie Azka Putra Araly",
  region: "Bandung, West Java",
  headline: "Computer Science Student at Institut Teknologi Bandung",
  description:
    "Computer Science student at Institut Teknologi Bandung with a strong background in algorithms, mathematics, and software development. Awarded in national-level competitions since high school and has completed multiple software projects, demonstrating both technical depth and practical application.",
  links: [
    {
      name: "Email",
      url: "mailto:yavieazkaputra@gmail.com",
      icon: Mail,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/yavie-azka-putra-araly/",
      icon: Linkedin,
    },
    {
      name: "GitHub",
      url: "https://github.com/yavieazka", // Asumsi, ganti jika perlu
      icon: Github,
    },
    {
      name: "Twitter",
      url: "https://x.com/yveakzontwt", // <-- Ganti dengan handle Twitter Anda
      icon: Twitter,
    },
  ],
};

export const SKILLS = {
  languages: ["C", "C++", "Python", "JavaScript", "TypeScript", "Java"],
  web: ["Next.js", "React.js", "Tailwind CSS"],
  backend: ["Node.js", "PostgreSQL", "Prisma ORM"],
  devops: ["Git", "GitHub", "Vercel"],
  soft: ["Competitive Programming", "English Debate", "Public Speaking"],
};

export const EXPERIENCE = [
  {
    company: "MasterTPB",
    location: "Bandung, West Java",
    role: "Academic Tutor - Calculus & Computational Thinking",
    period: "August 2025 - Present",
    description:
      "Providing guidance and instruction for first-year students (TPB) in fundamental courses. Responsible for explaining core concepts, assisting in problem-solving, and strengthening students’ algorithmic and mathematical understanding.",
    stack: [
      "Calculus",
      "Logic",
      "Algorithm Design",
      "Tutoring",
      "Public Speaking",
    ],
  },
  {
    company: "PT. Anugerah Wahyudi Sejahtera",
    location: "West Sumatera",
    role: "Lead Full-Stack Developer (Independent Project)",
    period: "2025 – Present",
    description:
      "Developed a full-stack web analytics platform from scratch for a major FMCG distributor to replace manual Excel-based reporting. Engineered an ETL pipeline to process 5M+ sales records, built a dynamic backend API, and developed an interactive frontend dashboard.",
    stack: [
      "TypeScript",
      "Next.js",
      "React",
      "Tailwind CSS",
      "Python",
      "Prisma",
      "PostgreSQL",
    ],
  },
];

export const PROJECTS = [
  {
    title: "HUTAO-TSP – Heuristic for Traveling Salesman Problem",
    description:
      "Designed a novel heuristic algorithm (HUTAO-TSP) to approximate optimal TSP paths on graphs with teleportation nodes, inspired by game mechanics. The algorithm combines MST-based routing with custom DFS and achieves polynomial-time complexity.",
    tags: ["Algorithm", "Python", "Heuristics", "Graph Theory", "Numpy"],
  },
  {
    title: "Nimons Hospital – C-based Hospital Management System",
    description:
      "Built a modular CLI-based hospital system in C featuring role-based access, dynamic queues, and persistent storage using custom data structures and CSV parsers.",
    tags: ["C", "Data Structures", "CLI", "System Design"],
  },
  {
    title: "Pokemon Game – Prolog Edition",
    description:
      "Developed a turn-based CLI Pokémon RPG in Prolog, implementing map exploration, battle mechanics, and a skill system using dynamic predicates and rule-based programming.",
    tags: ["Prolog", "Logic Programming", "Game Dev", "CLI"],
  },
];

export const ACHIEVEMENTS = [
  {
    year: 2023,
    competition: "National Mathematics Challenge",
    university: "Universitas Andalas",
    award: "1st Winner",
  },
  {
    year: 2023,
    competition: "Provincial Informatics Olympiad",
    university: "Technofest Universitas Andalas",
    award: "1st Winner",
  },
  {
    year: 2022,
    competition: "National Informatics Olympiad",
    university: "Lustrum Universitas Andalas",
    award: "2nd Winner",
  },
  {
    year: 2024,
    competition: "English Debate Competition",
    university: "SMAN 3 Bukittinggi",
    award: "1st Winner",
  },
];
