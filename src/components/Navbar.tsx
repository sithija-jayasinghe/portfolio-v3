"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About Me" },
  { href: "/#stack", label: "Stack" },
  { href: "/#projects", label: "Projects" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-zinc-950/80 backdrop-blur-md border-zinc-800/50 py-4 shadow-lg shadow-zinc-900/20"
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between">
        
        <Link href="/" className="flex items-center gap-2 group relative z-50">
          <span className="text-2xl font-black tracking-tighter text-white group-hover:text-emerald-400 transition-colors">
            SJ<span className="text-emerald-500">.</span>
          </span>
        </Link>


        <div className="hidden md:flex items-center gap-8 bg-zinc-900/50 px-6 py-2 rounded-full border border-zinc-800/50 backdrop-blur-sm">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>


        <div className="hidden md:flex items-center gap-4">
          <a
            href="mailto:harshanajayasinghe113@gmail.com"
            className="inline-flex items-center justify-center h-10 px-5 text-sm font-medium text-white border border-zinc-800 rounded-full hover:bg-zinc-900 transition-colors gap-2"
          >
            <Mail className="w-4 h-4" />
            <span>Hire Me</span>
          </a>
        </div>


        <button
          className="md:hidden relative z-50 p-2 text-zinc-400 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>


      {isOpen && (
        <div className="fixed inset-0 z-40 bg-zinc-950 flex flex-col items-center justify-center pt-20 px-4 md:hidden">
          <div className="flex flex-col items-center gap-8 w-full max-w-sm">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-bold text-zinc-400 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
            
            <a
              href="mailto:harshanajayasinghe113@gmail.com"
              onClick={() => setIsOpen(false)}
              className="mt-4 flex w-full items-center justify-center h-14 font-medium text-zinc-950 bg-emerald-500 rounded-full"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}