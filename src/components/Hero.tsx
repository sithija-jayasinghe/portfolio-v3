"use client";

import { motion } from "framer-motion";
import { Copy, PlusSquare } from "lucide-react";
import { useEffect, useState } from "react";

function makeParticles(count = 40) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    left: Math.random() * 100,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 10,
  }));
}

function Particles() {
  const [particles, setParticles] = useState<Array<{ id: number, size: number, left: number, duration: number, delay: number }>>([]);

  useEffect(() => {
    setParticles(makeParticles(40));
  }, []);

  if (particles.length === 0) return null;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-zinc-500/50"
          style={{ width: p.size, height: p.size, left: `${p.left}%`, top: -10 }}
          animate={{
            y: ["0vh", "110vh"],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
            times: [0, 0.1, 0.9, 1],
          }}
        />
      ))}
    </div>
  );
}

function ScrollIndicator() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const newOpacity = Math.max(0, 1 - currentScrollY / 150);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (opacity === 0) return null;

  return (
    <motion.div
      className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center pointer-events-none z-0"
      style={{ opacity }}
    >
      <span className="text-zinc-500 text-xs tracking-[0.2em] uppercase mb-2 font-medium">Scroll</span>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="text-emerald-500 opacity-80"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="7 13 12 18 17 13"></polyline>
          <polyline points="7 6 12 11 17 6"></polyline>
        </svg>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-4 overflow-hidden pt-26 pb-12">
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20">
        <h1 className="text-[12vw] font-black tracking-tighter text-zinc-800 whitespace-nowrap hidden md:block select-none">
          FULLSTACK ENGINEER
        </h1>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/50 to-zinc-950"></div>
      </div>

      {/* Giant Background Chevron (Game Indicator) */}
      <div className="absolute inset-x-0 bottom-0 top-1/2 flex items-center justify-center overflow-hidden pointer-events-none z-0 opacity-[0.03]">
        <motion.svg 
          animate={{ y: [0, 100], opacity: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          viewBox="0 0 1000 300" className="w-[120vw] max-w-none text-white" fill="none"
        >
          <path d="M0 50 L500 250 L1000 50 L1000 100 L500 300 L0 100 Z" fill="currentColor" />
        </motion.svg>
      </div>

      <Particles />

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center justify-center mt-0 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full text-center space-y-6 flex flex-col items-center"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
            Hi! I&apos;m <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
              Sithija Harshana Jayasinghe
            </span>
            .
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto text-balance leading-relaxed">
            An aspiring Fullstack Engineer creating high-performance, scalable, and responsive web solutions. Seeking to grow technically and contribute effectively to a development team.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="mailto:harshanajayasinghe113@gmail.com"
              className="inline-flex items-center justify-center h-12 px-8 font-medium text-zinc-950 bg-emerald-500 rounded-full hover:bg-emerald-400 transition-colors gap-2"
            >
              Contact Me
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center h-12 px-6 font-medium text-white border border-zinc-800 rounded-full hover:bg-zinc-900 transition-colors gap-2 group"
            >
              <span>View Resume</span>
            </a>
            <button
              onClick={() => navigator.clipboard.writeText("harshanajayasinghe113@gmail.com")}
              className="inline-flex items-center justify-center h-12 w-12 text-zinc-400 border border-zinc-800 rounded-full hover:bg-zinc-900 hover:text-white transition-colors group"
              aria-label="Copy email"
            >
              <Copy className="w-5 h-5 group-active:scale-95 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>

      <ScrollIndicator />

      {/* Stats Section moved to bottom of hero or next section */}
    </section>
  );
}