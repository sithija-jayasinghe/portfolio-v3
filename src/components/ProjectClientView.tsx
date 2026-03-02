"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { ProjectDetails } from "@/data/projects";
import { useEffect, useState } from "react";

function Particles() {
  const [particles, setParticles] = useState<Array<{ id: number; size: number; left: number; duration: number; delay: number }>>([]);

  useEffect(() => {
    const newParticles = [...Array(30)].map((_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      left: Math.random() * 100,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 10,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-zinc-500/20"
          style={{ width: p.size, height: p.size, left: `${p.left}%`, top: -10 }}
          animate={{
            y: ["0vh", "150vh"],
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

function MockupCard({ src, index }: { src: string, index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const rotateX = useTransform(y, [-200, 200], [5, -5]);
  const rotateY = useTransform(x, [-200, 200], [-5, 5]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      style={{ perspective: 1000 }}
      className="w-full relative group"
    >
      <motion.div
         onMouseMove={handleMouseMove}
         onMouseLeave={handleMouseLeave}
         style={{ rotateX, rotateY }}
         className="relative w-full aspect-[16/9] rounded-xl bg-zinc-900 border border-zinc-800/80 shadow-2xl overflow-hidden transition-all duration-300 ease-out z-10"
      >
        {/* RGB/Glow Border effect that appears on hover */}
        <div className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl ring-2 ring-emerald-500/50 mix-blend-overlay" />
        <div className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-emerald-500/10 to-transparent" />
        
        {/* Top Browser/App Bar */}
        <div className="absolute top-0 inset-x-0 h-10 bg-zinc-950/80 backdrop-blur-md flex items-center gap-2 px-4 border-b border-zinc-800/50 z-30">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <div className="ml-4 text-xs font-mono text-zinc-600 truncate flex-1 opacity-50 select-none">
              project-demo_{index + 1}.exe
            </div>
        </div>

        {/* Since you don't have images yet, we will fallback gracefully if image fails or just show placeholder */}
        <div className="absolute inset-0 pt-10 flex items-center justify-center bg-zinc-900/50">
          <p className="text-zinc-500 font-mono text-sm tracking-widest z-0 opacity-50">
            PLACE IMAGE IN public/mockups/ AND USE NEXT/IMAGE HERE
          </p>
        </div>
        
        {/* Image actually rendered */}
        <div className="absolute inset-0 pt-10 z-10">
           {/* Fallback to normal img to prevent next/image build crash if src doesn't exist locally currently */}
           <img 
               src={src} 
               alt={`Project Mockup ${index + 1}`} 
               className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity duration-500"
               onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
               }}
           />
        </div>
      </motion.div>
      
      {/* Ambient Floor Glow behind card */}
      <div className="absolute -inset-4 bg-gradient-to-r from-emerald-600/0 via-emerald-500/20 to-emerald-600/0 blur-2xl z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </motion.div>
  );
}

export default function ProjectClientView({ project }: { project: ProjectDetails }) {
  const stagger = {
    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { delay: custom * 0.1, duration: 0.5, ease: "easeOut" as const }
    })
  };

  return (
    <div className="relative">
      <Particles />
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[30vw] h-[40vh] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <article className="relative z-10 pt-32 pb-24 px-4 max-w-4xl mx-auto">
        <motion.div initial="hidden" animate="visible" custom={0} variants={stagger}>
          <Link 
            href="/#projects" 
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-emerald-400 transition-colors mb-12 text-sm uppercase tracking-widest font-medium group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
          </Link>
        </motion.div>

        {/* Header */}
        <header className="mb-16">
          <motion.h1 
            initial="hidden" animate="visible" custom={1} variants={stagger}
            className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6"
          >
            {project.title}
          </motion.h1>
          <motion.p 
            initial="hidden" animate="visible" custom={2} variants={stagger}
            className="text-xl md:text-2xl text-zinc-400 leading-relaxed mb-8 max-w-3xl"
          >
            {project.description}
          </motion.p>

          <motion.div 
            initial="hidden" animate="visible" custom={3} variants={stagger}
            className="flex flex-wrap gap-4 mb-8"
          >
            {project.tech.map((t, i) => (
              <span key={i} className="text-sm font-mono text-emerald-400 px-3 py-1.5 bg-emerald-500/10 rounded-md border border-emerald-500/20 shadow-[0_0_15px_-3px_rgba(16,185,129,0.1)]">
                {t}
              </span>
            ))}
          </motion.div>

          <motion.div 
            initial="hidden" animate="visible" custom={4} variants={stagger}
            className="flex items-center gap-4"
          >
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-100 text-zinc-900 font-semibold rounded-full hover:bg-white transition-all hover:scale-105 active:scale-95"
              >
                <Github className="w-5 h-5" /> View Source
              </a>
            )}
            {project.live && (
              <a 
                href={project.live} 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-700 text-white font-semibold rounded-full hover:bg-zinc-800 transition-all hover:scale-105 active:scale-95"
              >
                <ExternalLink className="w-5 h-5" /> Visit Live Site
              </a>
            )}
          </motion.div>
        </header>

        <motion.div 
          initial="hidden" animate="visible" custom={5} variants={stagger}
          className="w-full h-px bg-zinc-900/50 mb-16" 
        />

        <div className="space-y-24">
          {/* Problem Statement */}
          <motion.section
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-emerald-500 font-mono text-lg">01.</span> The Problem
            </h2>
            <div className="relative group">
              <div className="absolute inset-0 bg-emerald-500/5 blur-xl transition-all group-hover:bg-emerald-500/10 rounded-2xl" />
              <p className="relative text-zinc-400 text-lg leading-relaxed bg-zinc-900/40 backdrop-blur-sm p-8 rounded-2xl border border-zinc-800/50">
                {project.problemStatement}
              </p>
            </div>
          </motion.section>

          {/* Key Features */}
          <motion.section
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="text-emerald-500 font-mono text-lg">02.</span> Key Features
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.keyFeatures.map((feature, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-4 bg-zinc-900/20 p-6 rounded-xl border border-zinc-800/30 group hover:border-emerald-500/30 hover:bg-zinc-900/40 transition-all"
                >
                  <div className="w-2.5 h-2.5 mt-2 rounded-full bg-emerald-500 shrink-0 group-hover:scale-150 transition-transform shadow-[0_0_10px_2px_rgba(16,185,129,0.5)]" />
                  <span className="text-zinc-300 text-lg leading-snug">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.section>

          {/* Technical Highlights */}
          <motion.section
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="text-emerald-500 font-mono text-lg">03.</span> Technical Highlights
            </h2>
            <div className="space-y-4 relative">
              {/* Optional joining line for styling */}
              <div className="absolute left-[33px] top-4 bottom-4 w-px bg-zinc-800 hidden md:block z-0" />
              
              {project.technicalHighlights.map((highlight, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative z-10 flex gap-6 p-6 rounded-xl border border-zinc-800/30 bg-zinc-900/60 backdrop-blur-sm hover:border-zinc-700 transition-all group"
                >
                  <div className="flex items-center justify-center w-[42px] h-[42px] rounded-full bg-zinc-950 border border-zinc-800 shrink-0 group-hover:border-emerald-500/50 transition-colors">
                    <span className="text-emerald-500 font-mono text-sm">0{i+1}</span>
                  </div>
                  <p className="text-zinc-300 text-lg leading-relaxed pt-2">{highlight}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Mockups */}
          {project.mockups && project.mockups.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 flex items-center gap-3">
                <span className="text-emerald-500 font-mono text-lg">04.</span> Visuals
              </h2>
              <div className="flex flex-col gap-20 w-full mb-10">
                {project.mockups.map((mockup, i) => (
                  <MockupCard key={i} src={mockup} index={i} />
                ))}
              </div>
            </motion.section>
          )}
        </div>
      </article>
    </div>
  );
}
