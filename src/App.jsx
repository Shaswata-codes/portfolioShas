import { useEffect } from "react";
import { initTheme } from "./utils/theme";
import Header from "./components/Header";
import AnimatedBackground from "./components/AnimatedBackground";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  useEffect(() => {
    initTheme();
  }, []);

  return (
    <>
      <Header />

      <div className="relative min-h-screen grid-pattern">
        <AnimatedBackground />

        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
      </div>
    </>
  );
}

export default App;