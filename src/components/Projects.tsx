"use client";

import { motion } from "framer-motion";
import { FolderGit2, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 bg-zinc-950 border-t border-zinc-900/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 40, filter: "blur(10px)", scale: 0.95 }}
           whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
           viewport={{ once: false, amount: 0.2 }}
           transition={{ duration: 0.6, ease: "easeOut" }}
           className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white uppercase">
            Selected Projects<span className="text-emerald-500">.</span>
          </h2>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-emerald-400 transition-colors flex items-center gap-2 pb-1 text-sm uppercase tracking-widest font-medium">
            View All on GitHub <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40, filter: "blur(8px)", scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              className="group relative bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 sm:p-8 hover:bg-zinc-900/80 hover:border-zinc-700 transition-all flex flex-col h-full"
            >
              <Link href={`/projects/${project.slug}`} className="absolute inset-0 z-0 rounded-2xl" aria-label={`View details for ${project.title}`} />
              
              <div className="flex justify-between items-start mb-6 relative z-10 pointer-events-none">
                <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-800 text-emerald-500">
                  <FolderGit2 className="w-8 h-8" />
                </div>
                <div className="flex gap-3 pointer-events-auto">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors" aria-label="GitHub Repository">
                      <Github className="w-6 h-6" />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-emerald-400 transition-colors" aria-label="Live Site">
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors relative z-10 pointer-events-none">
                {project.title}
              </h3>
              
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-8 flex-grow relative z-10 pointer-events-none">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto relative z-10 pointer-events-none">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-xs font-mono text-zinc-500 px-2 py-1 bg-zinc-950 rounded-md border border-zinc-800/50">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-20 text-center"
        >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">Have a project in mind?</h3>
            <a href="mailto:harshanajayasinghe113@gmail.com" className="inline-flex items-center justify-center h-14 px-8 text-lg font-medium text-zinc-950 bg-emerald-500 hover:bg-emerald-400 rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(16,185,129,0.5)]">
                Let&apos;s Work Together
            </a>
        </motion.div>
      </div>
    </section>
  );
}