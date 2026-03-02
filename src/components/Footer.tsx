"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About Me", href: "#about" },
  { name: "Projects", href: "#projects" },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-zinc-950 py-12 px-4 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8"
      >
        
        <div className="flex flex-col items-center md:items-start gap-4 space-y-2">
           <Link href="#" className="text-2xl font-black text-white hover:text-emerald-400 transition-colors">
            SJ<span className="text-emerald-500">.</span>
          </Link>
          <div className="flex gap-4">
             <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 bg-zinc-900 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all">
                <Github size={20} />
             </a>
             <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 bg-zinc-900 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all">
                <Linkedin size={20} />
             </a>
             <a href="mailto:harshanajayasinghe113@gmail.com" className="p-2 bg-zinc-900 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all">
                <Mail size={20} />
             </a>
          </div>
        </div>

        <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium text-zinc-400">
           {navLinks.map((link) => (
             <Link key={link.name} href={link.href} className="hover:text-white transition-colors">
               {link.name}
             </Link>
           ))}
        </nav>

        <div className="text-zinc-500 text-sm text-center md:text-right">
          <p>© {new Date().getFullYear()} Sithija Harshana Jayasinghe.</p>
          <p className="mt-1">Built with Next.js & Tailwind CSS</p>
        </div>

      </motion.div>
    </footer>
  );
}