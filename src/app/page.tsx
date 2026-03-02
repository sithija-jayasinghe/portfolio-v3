import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stack from "@/components/Stack";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-slate-50 selection:bg-emerald-500/30">
      <Navbar />
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Footer />
    </main>
  );
}