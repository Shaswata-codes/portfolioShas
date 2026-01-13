import { useEffect } from "react"
import { initTheme } from "./utils/theme"
import Header from "./components/Header"
import AnimatedBackground from "./components/AnimatedBackground"
import Hero from "./components/Hero"

function App() {
  useEffect(() => {
    initTheme()
  }, [])

  return (
    <>
      <Header />

      <div className="relative min-h-screen grid-pattern">
        <AnimatedBackground />
        <Header />
        <main>
          <Hero />
        </main>
      </div>
    </>
  )
}

export default App
