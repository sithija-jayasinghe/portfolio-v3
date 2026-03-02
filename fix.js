const fs = require('fs');

const layoutContent = `import type { Metadata } from "next";
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
      <body className={\`\${inter.className} bg-zinc-950 text-slate-50 antialiased\`}>
        {children}
      </body>
    </html>
  );
}`;

fs.writeFileSync('src/app/layout.tsx', layoutContent, 'utf8');

const globalsContent = `@import "tailwindcss";

@theme {
  --color-brand-primary: #10b981;
  --color-brand-secondary: #047857;
}

:root {
  --background: #09090b;
  --foreground: #f8fafc;
}

body {
  color: var(--foreground);
  background: var(--background);
}`;

fs.writeFileSync('src/app/globals.css', globalsContent, 'utf8');

const pageContent = `import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stack from "@/components/Stack";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-slate-50 selection:bg-emerald-500/30">
      <Navbar />
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Footer />
    </main>
  );
}`;

fs.writeFileSync('src/app/page.tsx', pageContent, 'utf8');
