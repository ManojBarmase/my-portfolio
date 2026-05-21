import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import SpotlightOrbit from "@/components/sections/SpotlightOrbit";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education"; // New Import
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <SpotlightOrbit />
      <About />
      <Experience />
      <Projects />
      <Education /> {/* Mount After Projects */}
      <Contact />
    </main>
  );
}