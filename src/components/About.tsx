"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-4 bg-zinc-950 relative border-t border-zinc-900/50">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase">
              About me<span className="text-emerald-500">.</span>
            </h2>
            
            <div className="space-y-8 mt-12 hidden lg:block">
              {/* Stats - Left side on desktop */}
              <div className="space-y-2">
                <span className="text-5xl font-black text-white block">1+</span>
                <span className="text-zinc-400 font-medium text-sm tracking-wider uppercase">Years of Exp</span>
              </div>
              <div className="space-y-2">
                <span className="text-5xl font-black text-white block">6+</span>
                <span className="text-zinc-400 font-medium text-sm tracking-wider uppercase">Completed Projects</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="lg:col-span-8 space-y-6 text-zinc-300 text-lg md:text-xl leading-relaxed"
          >
            <p className="font-medium text-white text-xl md:text-2xl leading-relaxed">
              I believe in building functional, scalable, and user-centered applications that solve real-world problems.
            </p>
            
            <p>
              I am an aspiring Software Developer with hands-on experience gained through academic projects, open-source contributions, and self-learning. I have successfully balanced my studies with part-time work and extracurricular activities.
            </p>
            
            <p>
              My focus is on creating real-world applications using Java, Spring Boot, React, and MySQL. I thrive on collaborating with teams, architecting solutions, and seeing ideas come to life. 
            </p>

            {/* Stats - Mobile only */}
            <div className="grid grid-cols-2 gap-8 pt-8 lg:hidden mt-8 border-t border-zinc-900">
              <div className="space-y-2">
                <span className="text-4xl md:text-5xl font-black text-white block">1+</span>
                <span className="text-zinc-400 font-medium text-xs md:text-sm tracking-wider uppercase">Years of Exp</span>
              </div>
              <div className="space-y-2">
                <span className="text-4xl md:text-5xl font-black text-white block">6+</span>
                <span className="text-zinc-400 font-medium text-xs md:text-sm tracking-wider uppercase">Completed Projects</span>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}