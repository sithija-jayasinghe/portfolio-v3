"use client";

import { motion } from "framer-motion";
import Particles from "./Particles";

export default function About() {
  return (
    <section id="about" className="py-32 px-4 bg-zinc-950 relative border-t border-zinc-900/50 overflow-hidden">
      <Particles quantity={20} />
      
      {/* Gamer Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[40vh] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto flex flex-col gap-24 relative z-10">
        
        {/* Large Statement Section */}
        <motion.div
           initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
           whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
           viewport={{ once: false, amount: 0.2 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-light text-zinc-300 leading-tight tracking-tight">
            I believe in building functional, scalable, and user-centered applications that solve real-world problems.
          </h2>
        </motion.div>

        {/* Detailed Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start border-t border-zinc-900/50 pt-16">
          <motion.div 
            initial={{ opacity: 0, x: -30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="md:col-span-6 lg:col-span-5 flex flex-col justify-between h-full space-y-8"
          >
            <div>
              <span className="text-sm font-medium tracking-widest text-zinc-500 uppercase mb-8 block">This is me.</span>
              <h3 className="text-4xl md:text-5xl font-medium text-white tracking-tight">
                Hi, I&apos;m <br />Sithija Harshana.
              </h3>
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, x: 30, filter: "blur(8px)" }}
             whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
             viewport={{ once: false, amount: 0.2 }}
             transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
             className="md:col-span-6 lg:col-span-7 space-y-6 text-zinc-400 text-lg leading-relaxed"
          >
            <p>
              I am an aspiring Software Developer with hands-on experience gained through academic projects, open-source contributions, and self-learning.
            </p>
            <p>
              My focus is on creating real-world applications using Java, Spring Boot, React, and MySQL. By prioritizing architecture and clean code, I thrive on collaborating with teams, architecting solutions, and seeing ideas come to life. 
            </p>
            <p className="text-zinc-300">
               I successfully balance my studies with part-time work and extracurricular activities, maintaining a dedication to continuous technical growth.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}