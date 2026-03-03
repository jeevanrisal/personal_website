import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PointerEffects from "@/components/PointerEffects";
import Projects from "@/components/Projects";
import Strengths from "@/components/Strengths";

export default function Home() {
  return (
    <div className="site-root">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4">
        Skip to main content
      </a>

      <PointerEffects />
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-20 bg-grid [background-size:60px_60px]" />
      <div aria-hidden className="gradient-orb gradient-orb-top" />
      <div aria-hidden className="gradient-orb gradient-orb-bottom" />

      <Navbar />
      <main id="main-content" className="relative z-10">
        <Hero />
        <Strengths />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
