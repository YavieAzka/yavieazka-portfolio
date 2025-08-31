import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

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
      <body
        className={`${inter.className} bg-[#30354c] text-white`}
        style={{
          backgroundImage: `
            radial-gradient(circle 1000px at center top, #0a0a0a 0%, #0a0a0a 70%),
            url('/background-pattern.png')
          `,
          backgroundRepeat: "repeat",
          backgroundSize: "auto, 50px 50px",
          backgroundAttachment: "fixed", // Opsional: membuat background tidak ikut scroll
        }}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
