"use client";

import { motion } from "framer-motion";
import Particles from "./Particles";

const skills = {
  "Programming Languages": ["Java", "JavaScript", "TypeScript"],
  "Frameworks & Libraries": ["Spring Boot", "React", "Next.js", "Angular", "Tailwind CSS", "Bootstrap"],
  "Databases & Backend": ["MySQL", "Supabase", "Firebase", "Node.js"],
  "Tools & Platforms": ["Git", "GitHub", "REST APIs", "Atlassian Jira"]
};

export default function Stack() {
  return (
    <section id="stack" className="py-24 px-4 bg-zinc-950 border-t border-zinc-900/50 relative overflow-hidden">
      <Particles quantity={15} />

      {/* Gamer Background Glow */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vh] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 40, filter: "blur(10px)", scale: 0.95 }}
           whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
           viewport={{ once: false, amount: 0.2 }}
           transition={{ duration: 0.6, ease: "easeOut" }}
           className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white uppercase text-center md:text-left">
            My Stack<span className="text-emerald-500">.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {Object.entries(skills).map(([category, items], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              className="space-y-6"
            >
              <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 border-b border-zinc-900 pb-2">
                {category}
              </h3>
              <div className="flex w-full flex-wrap gap-3">
                {items.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 px-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded-lg hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all cursor-default group hover:shadow-[0_0_15px_-3px_rgba(16,185,129,0.3)] hover:-translate-y-1"
                  >
                    <span className="text-zinc-300 font-medium text-sm md:text-base group-hover:text-emerald-400 transition-colors">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}