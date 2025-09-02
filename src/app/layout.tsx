import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import AnimatedBackground from "./components/AnimatedBackground";
import MultiFollowCursor from "./components/MultiFollowCursor";
import { CursorProvider } from "@/context/CursorContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yavie Azka Portfolio",
  description: "Portfolio of Yavie Azka Putra Araly",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-transparent text-white cursor-none`}
      >
        {/* 2. Bungkus semua komponen dengan CursorProvider */}
        <CursorProvider>
          <MultiFollowCursor />
          <AnimatedBackground />

          <div className="relative z-10">
            <Header />
            <main>{children}</main>
          </div>
        </CursorProvider>
      </body>
    </html>
  );
}
