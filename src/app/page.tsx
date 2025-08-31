import About from "./components/About";
import Achievements from "./components/Achievements";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main className="bg-[#30354c] text-white">
      <div
        style={{
          backgroundImage: `
            radial-gradient(circle at center top, #0a0a0a 0%, #0a0a0a 70%),
            url('/background-pattern.png')
          `,
          backgroundRepeat: "repeat",
          backgroundSize: "auto, 50px 50px",
        }}
      >
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
