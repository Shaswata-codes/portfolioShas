import { useEffect } from "react"
import { initTheme } from "./utils/theme"
import Header from "./components/Header"
import AnimatedBackground from "./components/AnimatedBackground"

function App() {
  useEffect(() => {
    initTheme()
  }, [])

  return (
    <>
      <Header />

      <div className="min-h-screen grid-pattern relative">
        <AnimatedBackground />
      </div>
    </>
  )
}

export default App
