import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-slate-50 selection:bg-emerald-500/30 font-sans">
      <Navbar />

      <article className="pt-32 pb-24 px-4 max-w-4xl mx-auto">
        <Link 
          href="/#projects" 
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-emerald-400 transition-colors mb-12 text-sm uppercase tracking-widest font-medium"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        {/* Header */}
        <header className="mb-16">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed mb-8 max-w-3xl">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            {project.tech.map((t, i) => (
              <span key={i} className="text-sm font-mono text-emerald-400 px-3 py-1.5 bg-emerald-500/10 rounded-md border border-emerald-500/20">
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-100 text-zinc-900 font-semibold rounded-full hover:bg-white transition-colors"
              >
                <Github className="w-5 h-5" /> View Source
              </a>
            )}
            {project.live && (
              <a 
                href={project.live} 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-700 text-white font-semibold rounded-full hover:bg-zinc-800 transition-colors"
              >
                <ExternalLink className="w-5 h-5" /> Visit Live Site
              </a>
            )}
          </div>
        </header>

        <div className="w-full h-px bg-zinc-900/50 mb-16" />

        <div className="space-y-16">
          {/* Problem Statement */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-emerald-500">01.</span> The Problem
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed bg-zinc-900/30 p-6 md:p-8 rounded-2xl border border-zinc-800/50">
              {project.problemStatement}
            </p>
          </section>

          {/* Key Features */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-emerald-500">02.</span> Key Features
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.keyFeatures.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 bg-zinc-900/20 p-5 rounded-xl border border-zinc-800/30">
                  <div className="w-2 h-2 mt-2 rounded-full bg-emerald-500 shrink-0" />
                  <span className="text-zinc-300">{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Technical Highlights */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-emerald-500">03.</span> Technical Highlights
            </h2>
            <div className="space-y-4">
              {project.technicalHighlights.map((highlight, i) => (
                <div key={i} className="flex gap-4 p-5 rounded-xl border-l-2 border-emerald-500 bg-zinc-900/40">
                  <span className="text-emerald-500 font-mono text-sm mt-0.5">0{i+1}</span>
                  <p className="text-zinc-300">{highlight}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Mockups */}
          {project.mockups && project.mockups.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="text-emerald-500">04.</span> Visuals
              </h2>
              <div className="flex flex-col gap-8 w-full">
                {project.mockups.map((mockup, i) => (
                  <div key={i} className="w-full aspect-video bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden flex items-center justify-center relative">
                    {/* Placeholder for actual image: Using text/gradient since no actual images are likely present */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900 to-zinc-800/50" />
                    <span className="text-zinc-600 font-medium tracking-widest uppercase z-10">Mockup placeholder {i+1}</span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>

      <Footer />
    </main>
  );
}