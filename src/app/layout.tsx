import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sithija Harshana Jayasinghe | Fullstack Engineer",
  description: "Portfolio of Sithija Harshana Jayasinghe, a Fullstack Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-zinc-950 text-slate-50 antialiased`}>
        {children}
      </body>
    </html>
  );
}