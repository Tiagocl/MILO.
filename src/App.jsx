import Navbar from "./components/Navbar"
import HeroImage from "./components/HeroImage"
import { motion } from "motion/react"
import WhoAreWe from "./components/whoAreWe"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import CardsSection from "./components/CardsSection"


function App() {
  return (
    <div>
      <div className="sticky top-[50px] z-50">
        <motion.div
          initial={{ y: -250, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }} 
        >
          <Navbar />
        </motion.div>
      </div>
      
      <motion.div
        initial={{ scale: 0.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          opacity: { duration: 0.5 }, 
          scale: { 
            duration: 1.5, 
            delay: 1,
            ease: [0.25, 0.1, 0.25, 1]
          }
        }}
        onAnimationComplete={() => {
          requestAnimationFrame(() => ScrollTrigger.refresh())
        }}
      >
        <HeroImage />
      </motion.div>
      <WhoAreWe />
      <CardsSection />
    </div>
  )
}

export default App
