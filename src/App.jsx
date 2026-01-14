import { useEffect } from "react";
import { initTheme } from "./utils/theme";
import Header from "./components/Header";
import AnimatedBackground from "./components/AnimatedBackground";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

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
          <Projects />
          <Skills />
        </main>
      </div>
    </>
  );
}

export default App;