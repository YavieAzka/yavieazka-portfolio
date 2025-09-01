import About from "./components/About";
import Achievements from "./components/Achievements";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main className=" text-white">
      <div>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
      </div>
    </main>
  );
}
