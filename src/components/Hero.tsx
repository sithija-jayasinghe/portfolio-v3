"use client";

import { motion } from "framer-motion";
import { Copy, PlusSquare } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-4 overflow-hidden pt-24 pb-12">
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20 mt-[-10%]">
        <h1 className="text-[12vw] font-black tracking-tighter text-zinc-800 whitespace-nowrap hidden md:block select-none">
          FULLSTACK ENGINEER
        </h1>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/50 to-zinc-950"></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 text-center lg:text-left space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 text-sm text-zinc-400 border border-zinc-800 rounded-full bg-zinc-900/50 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for opportunities
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
            Hi! I&apos;m <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
              Sithija Harshana Jayasinghe
            </span>
            .
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto lg:mx-0 text-balance leading-relaxed">
            An aspiring Fullstack Engineer creating high-performance, scalable, and responsive web solutions. Seeking to grow technically and contribute effectively to a development team.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center h-12 px-8 font-medium text-zinc-950 bg-emerald-500 rounded-full hover:bg-emerald-400 transition-colors gap-2"
            >
              Contact Me
            </a>
            <button className="inline-flex items-center justify-center h-12 px-6 font-medium text-white border border-zinc-800 rounded-full hover:bg-zinc-900 transition-colors gap-2 group">
              <span>View Resume</span>
            </button>
            <button 
              onClick={() => navigator.clipboard.writeText("harshanajayasinghe113@gmail.com")}
              className="inline-flex items-center justify-center h-12 w-12 text-zinc-400 border border-zinc-800 rounded-full hover:bg-zinc-900 hover:text-white transition-colors group"
              aria-label="Copy email"
            >
              <Copy className="w-5 h-5 group-active:scale-95 transition-transform" />
            </button>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.5, delay: 0.2 }}
           className="relative flex-1 flex justify-center lg:justify-end"
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            {/* Background elements to mimic image space since none provided */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-zinc-800/20 rounded-3xl rotate-3 shadow-2xl backdrop-blur-md border border-zinc-800/50"></div>
            <div className="absolute inset-0 bg-zinc-900 rounded-3xl -rotate-3 overflow-hidden border border-zinc-800 shadow-xl flex items-center justify-center">
              <div className="text-zinc-700 font-mono text-9xl">SJ</div>
            </div>
            
            {/* Decorative plus markers */}
            <PlusSquare className="absolute -top-4 -left-4 text-emerald-500/50 w-8 h-8" />
            <PlusSquare className="absolute -bottom-4 -right-4 text-emerald-500/50 w-8 h-8" />
          </div>
        </motion.div>
      </div>

      {/* Stats Section moved to bottom of hero or next section */}
    </section>
  );
}