import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import AnimatedBackground from "./components/AnimatedBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yavie Azka Portfolio",
  description: "Portfolio of Yavie Azka Putra Araly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-transparent text-white`}>
        {/* Lapisan 1: Background Animasi (di paling bawah) */}
        <AnimatedBackground />

        {/* Lapisan 2: Wrapper untuk semua konten (di atas background) */}
        {/* 'position: relative' diperlukan untuk mengaktifkan 'z-index' */}
        <Header />
        <div className="relative z-10">
          <main>{children}</main>{" "}
          {/* Membungkus children dalam <main> adalah praktik yang baik */}
        </div>
      </body>
    </html>
  );
}
