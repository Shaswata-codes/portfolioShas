import { useEffect } from "react"
import { initTheme } from "./utils/theme"
import AnimatedBackground from "./components/AnimatedBackground";

function App() {

  useEffect(() => {
    initTheme();
  },[])

  return (
    <div className="min-h-screen grid-pattern">
      <AnimatedBackground/>
    </div>
  )
}

export default App
