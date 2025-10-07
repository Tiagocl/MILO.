import Navbar from "./components/Navbar"
import HeroImage from "./components/HeroImage"
import { motion } from "motion/react"

function App() {
  return (
    <div>
      <motion.div
        initial={{ y: -250, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay: 1 }} 
      >
        <Navbar />
      </motion.div>
      
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
      >
        <HeroImage />
      </motion.div>
    </div>
  )
}

export default App
